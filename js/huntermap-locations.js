var HMap = HMap || {};

/**
 * Temporary data structures just for playing around!
 */

HMap.locations = [
        {
            "id": 0,
            type: HMap.markerTypeId.LODGE,
            "map_x": -13292,
            "map_y": 233,
            "map_z": 3512,
            "title": "The Causeway",
            desc: "<b>The Causeway</b><br/>Tucked into a bay at the north end of White Hart Island, The Causeway is the entry lodge for all hunters coming into the Evergreen Hunting Reserve. Our shooting range gives you a chance to practice when you land, but hunting is all about getting out in the field and tracking down those deer... And White Hart is a great island for doing that, with 8 square miles of forest and mountains just waiting to be explored. Trek hard enough and you might even make it as far as our sister lodge, way down on South Cliff..."
        },
        {
            "id": 1,
            type: HMap.markerTypeId.LODGE,
            "map_x": -13661,
            "map_y": 223,
            "map_z": 8645,
            "title": "South Cliff Lodge",
            desc: "<b>South Cliff Lodge</b><br/>Nestled on the rocks at the southern tip of Whitehart Island, South Cliff Lodge caters for every level of hunter, from rookie to pro. Our full size shooting range lets you practice before heading out into the field, while our two shooting stands cut out the struggle through the undergrowth by using the latest techniques to lure deer into the line of fire. With amazing views out over the open ocean and across to the big island, South Cliff is one lodge you'll be returning to time and again."
        },
        {
            "id": 2,
            type: HMap.markerTypeId.CAMPSITE,
            "map_x": -14411,
            "map_y": 200,
            "map_z": 6089,
            "title": "Campsite",
        },
        {
            "id": 3,
            type: HMap.markerTypeId.POI,
            "map_x": -14477,
            "map_y": 327,
            "map_z": 4365,
            "title": "Uwi Stones",
        },
        {
            "id": 4,
            type: HMap.markerTypeId.TOWER,
            "map_x": -13389,
            "map_y": 233,
            "map_z": 4024,
            "title": "Tower",
        },
        {
            "id": 5,
            type: HMap.markerTypeId.TOWER,
            "map_x": -13874,
            "map_y": 235,
            "map_z": 3371,
            "title": "Tower",
        },
        {
            "id": 6,
            type: HMap.markerTypeId.TOWER,
            "map_x": -13471,
            "map_y": 260,
            "map_z": 4441,
            "title": "Tower",
        },
        {
            "id": 7,
            type: HMap.markerTypeId.TOWER,
            "map_x": -13512,
            "map_y": 229,
            "map_z": 4753,
            "title": "Tower",
        },
        {
            "id": 8,
            type: HMap.markerTypeId.TOWER,
            "map_x": -13650,
            "map_y": 233,
            "map_z": 3411,
            "title": "Tower",
        },
        {
            "id": 9,
            type: HMap.markerTypeId.TOWER,
            "map_x": -13543,
            "map_y": 281,
            "map_z": 3574,
            "title": "Tower",
        },
        {
            "id": 10,
            type: HMap.markerTypeId.TOWER,
            "map_x": -13747,
            "map_y": 361,
            "map_z": 3732,
            "title": "Tower",
        },
        {
            "id": 11,
            type: HMap.markerTypeId.TOWER,
            "map_x": -13918,
            "map_y": 336,
            "map_z": 3904,
            "title": "Tower",
        },
        {
            "id": 12,
            type: HMap.markerTypeId.TOWER,
            "map_x": -14304,
            "map_y": 272,
            "map_z": 3529,
            "title": "Tower",
        },
        {
            "id": 13,
            type: HMap.markerTypeId.TOWER,
            "map_x": -14831,
            "map_y": 223,
            "map_z": 3554,
            "title": "Tower",
        },
        {
            "id": 14,
            type: HMap.markerTypeId.TOWER,
            "map_x": -14437,
            "map_y": 220,
            "map_z": 3334,
            "title": "Tower",
        },
        {
            "id": 15,
            type: HMap.markerTypeId.TOWER,
            "map_x": -13835,
            "map_y": 220,
            "map_z": 5039,
            "title": "Tower",
        },
        {
            "id": 16,
            type: HMap.markerTypeId.TOWER,
            "map_x": -13927,
            "map_y": 327,
            "map_z": 6285,
            "title": "Tower",
        },
        {
            "id": 17,
            type: HMap.markerTypeId.TOWER,
            "map_x": -14189,
            "map_y": 227,
            "map_z": 8111,
            "title": "Tower",
        },
        {
            "id": 18,
            type: HMap.markerTypeId.TOWER,
            "map_x": -13879,
            "map_y": 247,
            "map_z": 8904,
            "title": "Tower",
        },
        {
            "id": 19,
            type: HMap.markerTypeId.TOWER,
            "map_x": -13975,
            "map_y": 222,
            "map_z": 8965,
            "title": "Tower",
        },
        {
            "id": 20,
            type: HMap.markerTypeId.TOWER,
            "map_x": -14260,
            "map_y": 222,
            "map_z": 8803,
            "title": "Tower",
        },
        {
            "id": 100,
            type: HMap.markerTypeId.LODGE,
            "map_x": -10387,
            "map_y": 215,
            "map_z": 7916,
            "title": "Logger's Point Field Lodge",
            desc: "<b>The Logger's Point Field Lodge</b><br/>The Logger's Point field lodge is situated along the southwestern coastline of the Logger's Point peninsula which is a part of the Logger's Point reserve. Visiting hunters will get the opportunity to stalk and bag blacktail deer and coyotes which enjoy moving around the open grassy fields. Also as there have been alot of recent logging activity on the peninsula it has now become a hospitable area for feral hogs which are well established in the area. While you´re hunting at Logger's Point you will also enjoy a large, hilly and open landscape with great views over the sea and the big island."
        },
        {
            "id": 101,
            type: HMap.markerTypeId.LODGE,
            "map_x": -8175,
            "map_y": 215,
            "map_z": 5229,
            "title": "Logger's Point Border Lodge",
            desc: "<b>The Logger's Point Border Lodge</b><br/>Start your hunt from the narrow passage connecting the Logger's Point peninsula to the other reserves on the large Evergreen island. The area features a denser vegetation combined with the hilly landscape and open fields. Visiting hunters can expect exellent opportunities to hunt Feral pigs in the recently logged areas, along with the Blacktail deer which is a common inhabitant of the area."
        },
        {
            "id": 102,
            type: HMap.markerTypeId.CAMPSITE,
            "map_x": -8659,
            "map_y": 314,
            "map_z": 8185,
            "title": "Inland Campsite",

        },
        {
            "id": 103,
            type: HMap.markerTypeId.CAMPSITE,
            "map_x": -9686,
            "map_y": 202,
            "map_z": 5532,
            "title": "Campsite",

        },
        {
            "id": 104,
            type: HMap.markerTypeId.TOWER,
            "map_x": -10034,
            "map_y": 286,
            "map_z": 6362,
            "title": "Tower",

        },
        {
            "id": 105,
            type: HMap.markerTypeId.TOWER,
            "map_x": -9003,
            "map_y": 288,
            "map_z": 5600,
            "title": "Tower",

        },
        {
            "id": 106,
            type: HMap.markerTypeId.TOWER,
            "map_x": -8869,
            "map_y": 324,
            "map_z": 8394,
            "title": "Tower",
        },
        {
            "id": 200,
            type: HMap.markerTypeId.LODGE,
            "map_x": -7750,
            "map_y": 272,
            "map_z": 4432,
            "title": "Highland Lodge"
        },
        {
            "id": 201,
            type: HMap.markerTypeId.LODGE,
            "map_x": -6227,
            "map_y": 224,
            "map_z": 5733,
            "title": "Homestead Lodge"
        },
        {
            "id": 202,
            type: HMap.markerTypeId.CAMPSITE,
            "map_x": -7897,
            "map_y": 285,
            "map_z": 5689,
            "title": "Campsite"
        },
        {
            "id": 203,
            type: HMap.markerTypeId.POI,
            "map_x": -7039,
            "map_y": 223,
            "map_z": 6107,
            "title": "Fort David"
        },
        {
            "id": 204,
            type: HMap.markerTypeId.TOWER,
            "map_x": -8131,
            "map_y": 256,
            "map_z": 4344,
            "title": "Tower"
        },
        {
            "id": 205,
            type: HMap.markerTypeId.TOWER,
            "map_x": -7583,
            "map_y": 367,
            "map_z": 4572,
            "title": "Tower"
        },
        {
            "id": 206,
            type: HMap.markerTypeId.TOWER,
            "map_x": -7438,
            "map_y": 428,
            "map_z": 4984,
            "title": "Tower"
        },
        {
            "id": 207,
            type: HMap.markerTypeId.TOWER,
            "map_x": -6889,
            "map_y": 378,
            "map_z": 5005,
            "title": "Tower"
        },
        {
            "id": 208,
            type: HMap.markerTypeId.TOWER,
            "map_x": -6582,
            "map_y": 236,
            "map_z": 6229,
            "title": "Tower"
        },
        {
            "id": 209,
            type: HMap.markerTypeId.TOWER,
            "map_x": -6494,
            "map_y": 241,
            "map_z": 4094,
            "title": "Tower"
        },
        {
            "id": 210,
            type: HMap.markerTypeId.TOWER,
            "map_x": -7150,
            "map_y": 286,
            "map_z": 4433,
            "title": "Tower"
        },
        {
            "id": 211,
            type: HMap.markerTypeId.TOWER,
            "map_x": -7085,
            "map_y": 269,
            "map_z": 3680,
            "title": "Tower"
        },
        {
            "id": 212,
            type: HMap.markerTypeId.TOWER,
            "map_x": -8173,
            "map_y": 259,
            "map_z": 4723,
            "title": "Tower"
        },
        {
            "id": 213,
            type: HMap.markerTypeId.TOWER,
            "map_x": -6200,
            "map_y": 225,
            "map_z": 4814,
            "title": "Tower"
        },
        {
            "id": 214,
            type: HMap.markerTypeId.TOWER,
            "map_x": -8275,
            "map_y": 228,
            "map_z": 4072,
            "title": "Tower",
        }        
    ];


