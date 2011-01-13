var HMap = HMap || {};

HMap.map = (function() {

	var gmap;
	
	return {
		init: function(div, options) {
	        options = options || {};
	        
	        options.center = options.center || HMap.map.toLatLng(new google.maps.Point(HMap.locations[1].map_x, HMap.locations[1].map_z));
	        options.zoom = options.zoom || 12;
	        options.h_disableDefaultInfoWindows = options.h_disableDefaultInfoWindows || false;
	        
	        options.disableDefaultUI = true;
	        options.navigationControl = true;
	        options.scaleControl = false;
	
	        gmap = new google.maps.Map(div, options);
	
			HMap.mapTypes.set(gmap);
	
	        HMap.markers.populateMarkers(options.h_disableDefaultInfoWindows);
	        
	        google.maps.event.addListener(gmap, 'zoom_changed', HMap.markers.updateMarkers);
	
	        return gmap;
		},
		
		getMap: function() {
			return gmap;
		},
		
		toLatLng: function(point) {
			return new google.maps.LatLng(-point.y / 16384 * 0.08789, point.x / 16384 * 0.08789);
		},
		
		toPoint: function(latLng) {
	        return new google.maps.Point(Math.round(-latLng.lat() / 0.08789 * 16384), Math.round(latLng.lng() / 0.08789 * 16384));	
		}
	};
})();


HMap.mapTypes = (function() {
	
	var types = {};
	
    types[HMap.mapTypeId.SATELLITE] = new google.maps.ImageMapType({
        name: 'theHunter Satellite',
        getTileUrl: function(coord, zoom) {
            var z = zoom - 11;
            var corr = Math.pow(2, zoom) - Math.pow(2, z);
            
            var p_x = coord.x - corr;
            var p_y = coord.y - corr;
            
            var maxCoord = Math.pow(2, (z+1)) - 1;
            if (p_x > maxCoord || p_y > maxCoord || p_x < 0 || p_y < 0) {
                return 'http://maps.gstatic.com/intl/en_us/mapfiles/transparent.png';
            }
            
            p_x = (p_x < 16 ? '0' : '') + p_x.toString(16);
            p_y = (p_y < 16 ? '0' : '') + p_y.toString(16);
            var p_type = "satellite";
            
            return 'http://map.thehunter.org/tiles/' + p_type + '/' + (z + 1) + '/tile_' + p_y + p_x + '.jpg';
        },
        tileSize: new google.maps.Size(128, 128),
        isPng: false,
        minZoom: 11,
        maxZoom: 20
    });
	
	return {
		set: function(gmap) {
	        for (var k in types) {
	            gmap.mapTypes.set(k, types[k]);
	        }
	        gmap.setMapTypeId(HMap.mapTypeId.SATELLITE);
		}
	};
	
	
})();


HMap.markers = (function() {

	var markers = [];
	var previousZoomLevel;
    
    var getImageZoomLevel = function(zoom) {
    	return zoom < 15 ? 1 : 0;
    };
    
    var getVisibleState = function(type, zoom) {
	    return (zoom >= HMap.markerTypes[type].minZoom && zoom <= HMap.markerTypes[type].maxZoom);
    };
            
    return {    	
		populateMarkers: function(disableInfoWindows) {
			var map = HMap.map.getMap();
			var zoom = map.getZoom();
			previousZoomLevel = zoom;
			var imageZoomLevel = getImageZoomLevel(zoom);
			
			for (var i = 0; i < HMap.locations.length; i++) {
				var obj = HMap.locations[i];
				var marker =  new google.maps.Marker({
	    			title: obj.title,
	    			icon: HMap.markerTypes[obj.type].icon[imageZoomLevel],
	    			position: HMap.map.toLatLng(new google.maps.Point(obj.map_x, obj.map_z)),
	    			map: map
	    		});
	    		
	    		if  (!disableInfoWindows && obj.desc) {
	    			HMap.util.bindInfoWindow(marker, obj.desc, map);
	    		}
	    		
	    		marker._obj = obj;
	    		marker.setVisible(getVisibleState(obj.type, zoom));
	    		
	    		markers.push(marker);
			}
		},
    	
    	/**
    	 * Update markers on zoom change.
    	 */
    	updateMarkers: function() {
    		var zoom = HMap.map.getMap().getZoom();
    		var imageZoomLevel = getImageZoomLevel(zoom);
    		
    		// currently loops all markers, room for optimizations by
    		// doing lookup arrays per marker type
    		for (var i = 0; i < markers.length; i++) {
    			// change icon?
	    		if (imageZoomLevel != getImageZoomLevel(previousZoomLevel)) {
    				markers[i].setIcon(HMap.markerTypes[markers[i]._obj.type].icon[imageZoomLevel]);
    			}
    			
    			// hide/visible
    			var isVisible = getVisibleState(markers[i]._obj.type, zoom);
    			if (isVisible != getVisibleState(markers[i]._obj.type, previousZoomLevel)) {
    				markers[i].setVisible(isVisible);
    			}    			
    		}
    		
	    	previousZoomLevel = zoom;
    	}
    	
    }
    
})();

HMap.util = {};
HMap.util.objectAsString = function(obj) {
	var row = [];
	$.each(obj, function(name, value) {
		row.push('<b>' + name + '</b>: ' + value);
	});
	return row.join('<br>');
};

HMap.util.bindInfoWindow = function(marker, content, map) {
	var infoWindow = new google.maps.InfoWindow({ content: content });

	google.maps.event.addListener(marker, 'click', function() {
		infoWindow.open(map, marker);
	});	     
};

HMap.expedition = (function() {

    var currentPath = null;
    var eventMarkers = [];
    var markersEnabled = [];

	function resetEnabledMarkers(state) {
		var state = arguments[0] || 0;
		for (var i = 0; i <= HMap.eventIDMax; i++) {
			markersEnabled[i] = state;
		}	
	}

	// init
	resetEnabledMarkers();
	
    return {
    	/**
    	 * Plot array with objects having properties x, z.
    	 */
        plotPath: function(list) {
            var coords = [];
            
            for (var i = 0; i < list.length; i++) {
            	coords.push( HMap.map.toLatLng(new google.maps.Point(list[i].x, list[i].z)) );
            }
            
            var expeditionPath = new google.maps.Polyline({
			    path: coords,
			    strokeColor: "#FF0000",
			    strokeOpacity: 1.0,
			    strokeWeight: 2
			});
			
			expeditionPath.setMap(HMap.map.getMap());
			
			currentPath = expeditionPath;
        },
        
        removePath: function() {
            if (currentPath !== null) {
                currentPath.setMap();
            }
        },
        
        addEventMarkers: function(events, enabled) {
			var map = HMap.map.getMap(), i;

			if (arguments[1]) {
	        	for (i = 0; i < enabled.length; i++) {
					markersEnabled[enabled[i]] = 1;
	        	}
			} else {
				resetEnabledMarkers(1);
			}
			
			for (var i = 0; i < events.length; i++) {
				var desc = HMap.util.objectAsString(events[i]);
				
				events[i].marker = new google.maps.Marker({
	    			title: events[i].event_name,
	    			icon: HMap.eventMarkers[events[i].event_id].icon,
	    			position: HMap.map.toLatLng(new google.maps.Point(events[i].x, events[i].z))
	    		});
	    		
	    		// info window
	    		HMap.util.bindInfoWindow(events[i].marker, desc, map);

				events[i].marker.setMap( markersEnabled[events[i].event_id] ? map : null );
			}
			
			eventMarkers = events;
        },
        
        toggleEventMarker: function(eventId) {
			markersEnabled[eventId] = 1 - markersEnabled[eventId];
        	
        	var state = markersEnabled[eventId] ? HMap.map.getMap() : null;
        
        	for (var i = 0; i < eventMarkers.length; i++) {
        		if (eventMarkers[i].event_id == eventId) {
					eventMarkers[i].marker.setMap(state);    		
        		}
        	}
        },
        
        removeEventMarkers: function() {
        	for (var i = 0; i < eventMarkers.length; i++) {
        		eventMarkers[i].marker.setMap();
        	}
        }
    }
})();