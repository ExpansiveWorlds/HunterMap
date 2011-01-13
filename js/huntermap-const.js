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

HMap.eventIDMax = 18;
HMap.eventID = {
	SHOOT: 1,
	KILL: 2,
	CONFIRMKILL: 3,
	PHOTOGRAPH: 4,
	DEPLETE: 6,
	ANIMAL: 7,
	MOVEITEM: 8,
	SETITEMDATA: 9,
	SPOT: 11,
	CLUE: 12,
	TRAIL: 13,
	MESSAGE: 15,
	RESTART_AT_LODGE_OR_CAMPSITE: 16,
	MINIGAME_SCORE: 17,
	UNKNOWN: 18
};

HMap.eventMarkers = {};

HMap.eventMarkers[HMap.eventID.SHOOT] = {
	icon: 
		new google.maps.MarkerImage(
			"http://map.thehunter.org/gfx/event_icons_10x10.png",
	    	new google.maps.Size(10, 10),
	    	new google.maps.Point(0, 0),
			new google.maps.Point(5, 5)
		)
};

HMap.eventMarkers[HMap.eventID.KILL] = {
	icon: 
		new google.maps.MarkerImage(
			"http://map.thehunter.org/gfx/event_icons_10x10.png",
	    	new google.maps.Size(10, 10),
	    	new google.maps.Point(10*1, 0),
			new google.maps.Point(5, 5)
		)
};

HMap.eventMarkers[HMap.eventID.CONFIRMKILL] = {
	icon: 
		new google.maps.MarkerImage(
			"http://map.thehunter.org/gfx/event_icons_10x10.png",
	    	new google.maps.Size(10, 10),
	    	new google.maps.Point(10*2, 0),
			new google.maps.Point(5, 5)
		)
};

HMap.eventMarkers[HMap.eventID.PHOTOGRAPH] = {
	icon: 
		new google.maps.MarkerImage(
			"http://map.thehunter.org/gfx/event_icons_10x10.png",
	    	new google.maps.Size(10, 10),
	    	new google.maps.Point(10*3, 0),
			new google.maps.Point(5, 5)
		)
};

HMap.eventMarkers[HMap.eventID.DEPLETE] = {
	icon: 
		new google.maps.MarkerImage(
			"http://map.thehunter.org/gfx/event_icons_10x10.png",
	    	new google.maps.Size(10, 10),
	    	new google.maps.Point(10*5, 0),
			new google.maps.Point(5, 5)
		)
};

HMap.eventMarkers[HMap.eventID.ANIMAL] = {
	icon: 
		new google.maps.MarkerImage(
			"http://map.thehunter.org/gfx/event_icons_10x10.png",
	    	new google.maps.Size(10, 10),
	    	new google.maps.Point(10*6, 0),
			new google.maps.Point(5, 5)
		)
};

HMap.eventMarkers[HMap.eventID.MOVEITEM] = {
	icon: 
		new google.maps.MarkerImage(
			"http://map.thehunter.org/gfx/event_icons_10x10.png",
	    	new google.maps.Size(10, 10),
	    	new google.maps.Point(10*7, 0),
			new google.maps.Point(5, 5)
		)
};

HMap.eventMarkers[HMap.eventID.SETITEMDATA] = {
	icon: 
		new google.maps.MarkerImage(
			"http://map.thehunter.org/gfx/event_icons_10x10.png",
	    	new google.maps.Size(10, 10),
	    	new google.maps.Point(10*8, 0),
			new google.maps.Point(5, 5)
		)
};

HMap.eventMarkers[HMap.eventID.SPOT] = {
	icon: 
		new google.maps.MarkerImage(
			"http://map.thehunter.org/gfx/event_icons_10x10.png",
	    	new google.maps.Size(10, 10),
	    	new google.maps.Point(10*10, 0),
			new google.maps.Point(5, 5)
		)
};

HMap.eventMarkers[HMap.eventID.CLUE] = {
	icon: 
		new google.maps.MarkerImage(
			"http://map.thehunter.org/gfx/event_icons_10x10.png",
	    	new google.maps.Size(10, 10),
	    	new google.maps.Point(10*11, 0),
			new google.maps.Point(5, 5)
		)
};

HMap.eventMarkers[HMap.eventID.TRAIL] = {
	icon: 
		new google.maps.MarkerImage(
			"http://map.thehunter.org/gfx/event_icons_10x10.png",
	    	new google.maps.Size(10, 10),
	    	new google.maps.Point(10*12, 0),
			new google.maps.Point(5, 5)
		)
};

HMap.eventMarkers[HMap.eventID.MESSAGE] = {
	icon: 
		new google.maps.MarkerImage(
			"http://map.thehunter.org/gfx/event_icons_10x10.png",
	    	new google.maps.Size(10, 10),
	    	new google.maps.Point(10*15, 0),
			new google.maps.Point(5, 5)
		)
};

HMap.eventMarkers[HMap.eventID.RESTART_AT_LODGE_OR_CAMPSITE] = {
	icon: 
		new google.maps.MarkerImage(
			"http://map.thehunter.org/gfx/event_icons_10x10.png",
	    	new google.maps.Size(10, 10),
	    	new google.maps.Point(10*15, 0),
			new google.maps.Point(5, 5)
		)
};

HMap.eventMarkers[HMap.eventID.MINIGAME_SCORE] = {
	icon: 
		new google.maps.MarkerImage(
			"http://map.thehunter.org/gfx/event_icons_10x10.png",
	    	new google.maps.Size(10, 10),
	    	new google.maps.Point(10*16, 0),
			new google.maps.Point(5, 5)
		)
};

HMap.eventMarkers[HMap.eventID.UNKNOWN] = {
	icon: 
		new google.maps.MarkerImage(
			"http://map.thehunter.org/gfx/event_icons_10x10.png",
	    	new google.maps.Size(10, 10),
	    	new google.maps.Point(10*17, 0),
			new google.maps.Point(5, 5)
		)
};


HMap.markerTypes = {};

HMap.markerTypes[HMap.markerTypeId.LODGE] = {
    minZoom: 11,
    maxZoom: 16,
    icon: [
	 	new google.maps.MarkerImage(
			"http://map.thehunter.org/gfx/Map-Icons-32x32.png",
	        new google.maps.Size(32, 32),
	        new google.maps.Point(64, 0),
	        new google.maps.Point(16, 16)
		),
	 	new google.maps.MarkerImage(
			"http://map.thehunter.org/gfx/Map-Icons-16x16.png",
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
	    	"http://map.thehunter.org/gfx/Map-Icons-32x32.png",
	        new google.maps.Size(32, 32),
	        new google.maps.Point(160, 0),
	        new google.maps.Point(16, 16)
	    ),
	   new google.maps.MarkerImage(
			"http://map.thehunter.org/gfx/Map-Icons-16x16.png",
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
	    	"http://map.thehunter.org/gfx/Map-Icons-32x32.png",
	        new google.maps.Size(32, 32),
	        new google.maps.Point(128, 0),
	        new google.maps.Point(16, 16)    
		),
    	new google.maps.MarkerImage(
			"http://map.thehunter.org/gfx/Map-Icons-16x16.png",
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
		 	"http://map.thehunter.org/gfx/Map-Icons-32x32.png",
	        new google.maps.Size(32, 32),
	        new google.maps.Point(192, 0),
	        new google.maps.Point(16, 16)    
	   ),
	   new google.maps.MarkerImage(
			"http://map.thehunter.org/gfx/Map-Icons-16x16.png",
	        new google.maps.Size(16, 16),
	        new google.maps.Point(96, 0),
	        new google.maps.Point(8, 8)   
	   )   
    ]
};

