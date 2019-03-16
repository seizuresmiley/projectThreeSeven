class GameManifests{
    constructor(){
        this.songManifest = { "flower" : {
            "jacketPath" : "imgs/flower.png",
            "name" : "FLOWER (STARDOM REMIX)",
            "artist" : "BEMANI Sound Team 'DJ TOTTO'",
            "sound" : "https://raw.githubusercontent.com/seizuresmiley/threeseven_resources/experimental/audio/flower_remix.mp3"
        },
        "forgetting" : {
            "jacketPath" : "imgs/forgetting.png",
            "name" : "Forgetting Machine",
            "artist" : "Taku Inoue",
            "sound" : "https://raw.githubusercontent.com/seizuresmiley/threeseven_resources/experimental/audio/forgetting.mp3"
        },

        "hannari" : {
            "jacketPath" : "imgs/hannari.jpg",
            "name" : "HANNARI",
            "artist" : "BPM15Q",
            "sound" : "https://raw.githubusercontent.com/seizuresmiley/threeseven_resources/experimental/audio/HANNARI.mp3"
        }

        };

        this.chartManifest = {"forgetting" : {
            "offset" : 0,
            "gain" : 0,
            "diff" : 0,
            "chart": {
                "left": [8397, 9775, 11154, 12533, 13913, 14602, 15292, 17361, 18051, 18568, 19085, 20809, 21154, 21499, 21844, 23568, 23913, 24258, 24602, 25120, 25464, 25809, 26154, 26499, 26844, 27189, 27533, 29085, 29775, 30464, 31844, 33223, 34602, 35464, 35982, 36671, 37361, 38051, 40637, 40982, 41499, 42189, 43568, 44947, 46327, 46844, 47706, 49085, 50464, 51499, 52016, 52533, 58051, 58395, 58740, 59085, 60809, 61154, 61499, 61844, 62189, 63568, 66327, 66671, 67189, 67706, 68051, 68568, 69085, 69430, 69947, 71327, 71844, 72189, 72533, 72706, 73223, 74085, 74602, 75464, 76327, 76844, 77361, 78223, 78395, 78740, 79602, 80120, 80982, 81499, 82361, 82878, 83395, 83740, 84258, 85120, 85637, 86499, 87016, 87878, 88395, 88913, 89430, 92533, 93223, 94258, 94602, 96671, 98051, 99430, 99947, 100464],
                "right": [9085, 10464, 11844, 13223, 13913, 15982, 16671, 18395, 18913, 19430, 19775, 20120, 20464, 22189, 22533, 22878, 23223, 24947, 25292, 25637, 25982, 26327, 26671, 27016, 27361, 27706, 29085, 29775, 31154, 32533, 33913, 35292, 35809, 38740, 39430, 40120, 40464, 41154, 41499, 42878, 44258, 45637, 46499, 47016, 48395, 49775, 51154, 51671, 52189, 52533, 59430, 59775, 60120, 60464, 60982, 61327, 61671, 62016, 63568, 66844, 67361, 68740, 70120, 70464, 70809, 71499, 72878, 73568, 74258, 74947, 75637, 75982, 77016, 77706, 78051, 78740, 79085, 79775, 80464, 81154, 81844, 82533, 83223, 83913, 84602, 85292, 85982, 86671, 87361, 88051, 88740, 89258, 93913, 95292, 95982, 97361, 98740, 99775, 100292]
            }
        }};
    }
}

window.chart = {"forgetting" : {
    "offset" : 0,
    "gain" : 0,
    "diff" : 0,
    "chart": {
        "left": [8397, 9775, 11154, 12533, 13913, 14602, 15292, 17361, 18051, 18568, 19085, 20809, 21154, 21499, 21844, 23568, 23913, 24258, 24602, 25120, 25464, 25809, 26154, 26499, 26844, 27189, 27533, 29085, 29775, 30464, 31844, 33223, 34602, 35464, 35982, 36671, 37361, 38051, 40637, 40982, 41499, 42189, 43568, 44947, 46327, 46844, 47706, 49085, 50464, 51499, 52016, 52533, 58051, 58395, 58740, 59085, 60809, 61154, 61499, 61844, 62189, 63568, 66327, 66671, 67189, 67706, 68051, 68568, 69085, 69430, 69947, 71327, 71844, 72189, 72533, 72706, 73223, 74085, 74602, 75464, 76327, 76844, 77361, 78223, 78395, 78740, 79602, 80120, 80982, 81499, 82361, 82878, 83395, 83740, 84258, 85120, 85637, 86499, 87016, 87878, 88395, 88913, 89430, 92533, 93223, 94258, 94602, 96671, 98051, 99430, 99947, 100464],
        "right": [9085, 10464, 11844, 13223, 13913, 15982, 16671, 18395, 18913, 19430, 19775, 20120, 20464, 22189, 22533, 22878, 23223, 24947, 25292, 25637, 25982, 26327, 26671, 27016, 27361, 27706, 29085, 29775, 31154, 32533, 33913, 35292, 35809, 38740, 39430, 40120, 40464, 41154, 41499, 42878, 44258, 45637, 46499, 47016, 48395, 49775, 51154, 51671, 52189, 52533, 59430, 59775, 60120, 60464, 60982, 61327, 61671, 62016, 63568, 66844, 67361, 68740, 70120, 70464, 70809, 71499, 72878, 73568, 74258, 74947, 75637, 75982, 77016, 77706, 78051, 78740, 79085, 79775, 80464, 81154, 81844, 82533, 83223, 83913, 84602, 85292, 85982, 86671, 87361, 88051, 88740, 89258, 93913, 95292, 95982, 97361, 98740, 99775, 100292]
    }
},
"hannari" : {
    "offset" : 0,
    "gain" : 0,
    "diff" :  69,
    "chart": {
        "left": [471, 980, 1615, 1869, 2124, 2378, 2759, 3649, 3903, 4793, 5683, 5937, 6191, 6446, 6827, 7335, 7844, 8861, 9751, 10005, 10259, 10513, 10895, 11785, 12039, 12929, 13818, 14073, 14327, 14581, 14963, 15471, 16234, 16488, 16615, 17251, 17759, 18013, 18268, 18522, 18776, 19793, 20047, 20302, 21318, 21573],
        "right": [725, 1488, 1742, 1996, 2251, 2505, 3013, 3522, 3776, 4030, 4539, 5047, 5556, 5810, 6064, 6318, 6573, 7081, 7590, 8098, 8607, 9115, 9624, 9878, 10132, 10386, 10641, 11149, 11657, 11912, 12166, 12674, 13183, 13691, 13946, 14200, 14454, 14708, 15217, 15725, 16742, 17505, 17886, 18141, 18395, 18649, 19285, 19539, 19920, 20174, 20810]
    }
}
}
