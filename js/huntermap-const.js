var HMap = HMap || {};

HMap.mapTypeId = {
	SATELLITE: "theHunter_satellite"
};

HMap.markerTypeId = {
	LODGE: 0,
	CAMPSITE: 1,
	TOWER: 2,
	POI: 3
};


HMap.markerTypes = {};

HMap.markerTypes[HMap.markerTypeId.LODGE] = {
    minZoom: 11,
    maxZoom: 16,
    icon: [
	 	new google.maps.MarkerImage(
			"gfx/Map-Icons-32x32.png",
	        new google.maps.Size(32, 32),
	        new google.maps.Point(64, 0),
	        new google.maps.Point(16, 16)
		),
	 	new google.maps.MarkerImage(
			"gfx/Map-Icons-16x16.png",
	        new google.maps.Size(16, 16),
	        new google.maps.Point(32, 0),
	        new google.maps.Point(8, 8)
		)    
    ]
};

HMap.markerTypes[HMap.markerTypeId.CAMPSITE] = {
    minZoom: 13,
    maxZoom: 16,
    icon: [
	   new google.maps.MarkerImage(
	    	"gfx/Map-Icons-32x32.png",
	        new google.maps.Size(32, 32),
	        new google.maps.Point(160, 0),
	        new google.maps.Point(16, 16)
	    ),
	   new google.maps.MarkerImage(
			"gfx/Map-Icons-16x16.png",
	        new google.maps.Size(16, 16),
	        new google.maps.Point(80, 0),
	        new google.maps.Point(8, 8)
	    )
    ]
};

HMap.markerTypes[HMap.markerTypeId.TOWER] = {
    minZoom: 14,
    maxZoom: 16,
    icon: [
    	new google.maps.MarkerImage(
	    	"gfx/Map-Icons-32x32.png",
	        new google.maps.Size(32, 32),
	        new google.maps.Point(128, 0),
	        new google.maps.Point(16, 16)    
		),
    	new google.maps.MarkerImage(
			"gfx/Map-Icons-16x16.png",
	        new google.maps.Size(16, 16),
	        new google.maps.Point(64, 0),
	        new google.maps.Point(8, 8)  
	    )
    ]
};

HMap.markerTypes[HMap.markerTypeId.POI] = {
    minZoom: 14,
    maxZoom: 16,
    icon: [
	   new google.maps.MarkerImage(
		 	"gfx/Map-Icons-32x32.png",
	        new google.maps.Size(32, 32),
	        new google.maps.Point(192, 0),
	        new google.maps.Point(16, 16)    
	   ),
	   new google.maps.MarkerImage(
			"gfx/Map-Icons-16x16.png",
	        new google.maps.Size(16, 16),
	        new google.maps.Point(96, 0),
	        new google.maps.Point(8, 8)   
	   )   
    ]
};

