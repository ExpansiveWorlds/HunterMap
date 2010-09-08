var HMap = HMap || {};

HMap.map = (function() {

	var gmap;
	
	return {
		init: function(div, options) {
	        options = options || {};
	        
	        var center = (options.center) ? true : false;
	        options.disableDefaultUI = true;
	        options.navigationControl = true;
	        options.scaleControl = false;
	
	        gmap = new google.maps.Map(div, options);
	
			HMap.mapTypes.set(gmap);
	
	        if (!center) {
	            gmap.fitBounds(HMap.locations.EVERGREEN.Reserves.WHITEHARTISLAND.bounds);
	        }

	        HMap.markers.populateMarkers();
	        
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
            
            return 'http://thehunter.org.linweb58.kontrollpanelen.se/map/tiles/' + p_type + '/' + (z + 1) + '/tile_' + p_y + p_x + '.jpg';
        },
        tileSize: new google.maps.Size(128, 128),
        isPng: false,
        minZoom: 11,
        maxZoom: 16
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
	var types = {};
	
	types[HMap.markerTypeId.LODGE] = {
		0: 	new google.maps.MarkerImage(
				"gfx/Map-Icons-32x32.png",
		        new google.maps.Size(32, 32),
		        new google.maps.Point(64, 0),
		        new google.maps.Point(16, 16)
    		),
		1: 	new google.maps.MarkerImage(
				"gfx/Map-Icons-16x16.png",
		        new google.maps.Size(16, 16),
		        new google.maps.Point(32, 0),
		        new google.maps.Point(8, 8)
    		)
	};
	
    types[HMap.markerTypeId.CAMPSITE] = {
    	0: new google.maps.MarkerImage(
		    	"gfx/Map-Icons-32x32.png",
		        new google.maps.Size(32, 32),
		        new google.maps.Point(160, 0),
		        new google.maps.Point(16, 16)
		    ),
    	1: new google.maps.MarkerImage(
				"gfx/Map-Icons-16x16.png",
		        new google.maps.Size(16, 16),
		        new google.maps.Point(80, 0),
		        new google.maps.Point(8, 8)
		    )
    };
    
    types[HMap.markerTypeId.TOWER] = {
    	0: new google.maps.MarkerImage(
		    	"gfx/Map-Icons-32x32.png",
		        new google.maps.Size(32, 32),
		        new google.maps.Point(128, 0),
		        new google.maps.Point(16, 16)    
		    ),
    	1: new google.maps.MarkerImage(
				"gfx/Map-Icons-16x16.png",
		        new google.maps.Size(16, 16),
		        new google.maps.Point(64, 0),
		        new google.maps.Point(8, 8)  
		    )
    };
    
    types[HMap.markerTypeId.POI] = {
    	0: new google.maps.MarkerImage(
			 	"gfx/Map-Icons-32x32.png",
		        new google.maps.Size(32, 32),
		        new google.maps.Point(192, 0),
		        new google.maps.Point(16, 16)    
		   ),
    	1: new google.maps.MarkerImage(
				"gfx/Map-Icons-16x16.png",
		        new google.maps.Size(16, 16),
		        new google.maps.Point(96, 0),
		        new google.maps.Point(8, 8)   
		   )
    };    
    
    var getImageZoomLevel = function(zoom) {
    	return zoom < 15 ? 1 : 0;
    };
        
    return {    	
		populateMarkers: function() {
			var map = HMap.map.getMap();
			var zoom = map.getZoom();
			previousZoomLevel = zoom;
			var imageZoomLevel = getImageZoomLevel(zoom);
			
			for (var i = 0; i < HMap.worldObjects.length; i++) {
				var obj = HMap.worldObjects[i];
				var marker =  new google.maps.Marker({
	    			title: obj.title,
	    			icon: types[obj.type][imageZoomLevel],
	    			position: HMap.map.toLatLng(new google.maps.Point(obj.map_x, obj.map_z)),
	    			map: map
	    		});
	    		marker._obj = obj;
	    		
	    		markers.push(marker);
			}
		},
    	
    	/**
    	 * Update markers on zoom change.
    	 */
    	updateMarkers: function() {
    		var zoom = HMap.map.getMap().getZoom();
    		var imageZoomLevel = getImageZoomLevel(zoom);
    		
    		if (imageZoomLevel != getImageZoomLevel(previousZoomLevel)) {
	    		for (var i = 0; i < markers.length; i++) {
	    			markers[i].setIcon(types[markers[i]._obj.type][imageZoomLevel]);
	    		}
	    	}
	    	
	    	previousZoomLevel = zoom;
    	},
    	
    	types: types
    }
    
})();
