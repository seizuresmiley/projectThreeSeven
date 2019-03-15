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
            "chart" :{
                "left" : [
                    8510,
                    11280,
                    14050,
                    16280
                ],
                "right" : [
                    9895,
                    12665,
                    15435,
                    18205
                ]
            }
        }};
    }
}

window.chart = {"forgetting" : {
    "offset" : 0,
    "gain" : 0,
    "diff" : 0,
    "chart" :{
        "left" : [
            8510,

            11280,

            14050,

            16280

        ],
        "right" : [

            9895,

            12665,

            15435,

            18205
        ]
    }
},
"hannari" : {
    "offset" : 0,
    "gain" : 0,
    "diff" :  69,
    "chart" : {
        "left" : [

        ]
    }
}
}
