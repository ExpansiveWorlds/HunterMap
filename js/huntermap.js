window.theHunter = window.theHunter || {};
theHunter.maps = theHunter.maps || {};

(function() {
    theHunter.maps.toLatLng = function(p) {
        return new google.maps.LatLng(-p.y / 16384 * 0.08789, p.x / 16384 * 0.08789);
    };

    theHunter.maps.toPoint = function(ll) {
        return new google.maps.Point(Math.round(-ll.lat() / 0.08789 * 16384), Math.round(ll.lng() / 0.08789 * 16384));
    };

    theHunter.maps.MarkerTypeId = {
        LODGE: 0,
        CAMPING: 1,
        TOWER: 2
    };

    theHunter.maps.MarkerTypeImages = {};
    theHunter.maps.MarkerTypeImages[theHunter.maps.MarkerTypeId.LODGE] = new google.maps.MarkerImage("gfx/Map-Icons-32x32.png",
        new google.maps.Size(32, 32),
        new google.maps.Point(64, 0),
        new google.maps.Point(16, 16)
    );
    theHunter.maps.MarkerTypeImages[theHunter.maps.MarkerTypeId.CAMPING] = new google.maps.MarkerImage("gfx/Map-Icons-32x32.png",
        new google.maps.Size(32, 32),
        new google.maps.Point(160, 0),
        new google.maps.Point(16, 16)
    );
    theHunter.maps.MarkerTypeImages[theHunter.maps.MarkerTypeId.TOWER] = new google.maps.MarkerImage("gfx/Map-Icons-32x32.png",
        new google.maps.Size(32, 32),
        new google.maps.Point(128, 0),
        new google.maps.Point(16, 16)
    );

    theHunter.maps.Marker = function(title, type, point) {
        this.title = name;
        this.type = type;
        this.point = point;
    };

    theHunter.maps.Marker.prototype.getMarker = function() {
        return new google.maps.Marker({
            title: this.title,
            icon: theHunter.maps.MarkerTypeImages[this.type],
            position: theHunter.maps.toLatLng(this.point)
        });
    };

    theHunter.maps.Reserves = {
        EVERGREEN: {
            Reserves: {
                WHITEHARTISLAND: {
                    bounds: new google.maps.LatLngBounds(
                        new google.maps.LatLng(-0.013, -0.085),
                        new google.maps.LatLng(-0.053, -0.066)
                    ),
                    places: {
                        LODGES: [
                            new theHunter.maps.Marker(
                                "The Causeway",
                                theHunter.maps.MarkerTypeId.LODGE,
                                new google.maps.Point(-13292, 3512)
                            ),
                            new theHunter.maps.Marker(
                                "South Cliff Lodge",
                                theHunter.maps.MarkerTypeId.LODGE,
                                new google.maps.Point(-13661, 8645)
                            )
                        ],
                        CAMPING: [

                        ],
                        TOWER: [

                        ]
                    }
                },
                LOGGERSPOINT: {
                    bounds: new google.maps.LatLngBounds(
                        new google.maps.LatLng(-0.023, -0.063),
                        new google.maps.LatLng(-0.051, -0.038)
                    ),
                    places: {
                        LODGES: [
                            new theHunter.maps.Marker(
                                "Logger's Point Field Lodge",
                                theHunter.maps.MarkerTypeId.LODGE,
                                new google.maps.Point(-10387, 7916)
                            ),
                            new theHunter.maps.Marker(
                                "Logger's Point Border Lodge",
                                theHunter.maps.MarkerTypeId.LODGE,
                                new google.maps.Point(-8175, 5229)
                            )
                        ],
                        CAMPING: [

                        ],
                        TOWER: [

                        ]
                    }
                }
            }
        }
    };

    for (var r in theHunter.maps.Reserves) {
        var b = new google.maps.LatLngBounds();
        var reserve = theHunter.maps.Reserves[r];
        for (var r2 in reserve.Reserves) {
            b.union(reserve.Reserves[r2].bounds);
        }
        reserve.bounds = b;
    }

    theHunter.maps.addMarkers = function(markers, map) {
        for (var m in markers) {
            var marker = markers[m].getMarker();
            marker.setMap(map);
        }
    };

    theHunter.maps.MapTypeId = {
        SATELLITE: "theHunter_satellite"
    };

    var mapTypes = {};
    mapTypes[theHunter.maps.MapTypeId.SATELLITE] = new google.maps.ImageMapType({
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

    theHunter.maps.getMap = function(div, options) {
        options = options || {};
        var center = (options.center) ? true : false;
        options.disableDefaultUI = true;
        options.navigationControl = true;
        options.scaleControl = false;

        var m = new google.maps.Map(div, options);

        for (var k in mapTypes) {
            m.mapTypes.set(k, mapTypes[k]);
        }
        m.setMapTypeId(theHunter.maps.MapTypeId.SATELLITE);

        if (!center) {
            m.fitBounds(theHunter.maps.Reserves.EVERGREEN.bounds);
        }

        return m;
    };

    // theHunter.maps.Map.prototype.construtor = theHunter.maps.Map;
    // theHunter.maps.Map.prototype = new google.maps.Map();
})();
