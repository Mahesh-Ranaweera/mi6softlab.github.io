/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-2.0.3.min.js"
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "both",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: '_1',
                            type: 'image',
                            rect: ['0', '0', '60px', '60px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"1.svg",'0px','0px']
                        },
                        {
                            id: '_2',
                            type: 'image',
                            rect: ['0', '0', '60px', '60px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"2.svg",'0px','0px']
                        },
                        {
                            id: '_3',
                            type: 'image',
                            rect: ['0', '0', '60px', '60px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"3.svg",'0px','0px']
                        },
                        {
                            id: '_4',
                            type: 'image',
                            rect: ['0', '0', '60px', '60px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"4.svg",'0px','0px']
                        },
                        {
                            id: '_7',
                            type: 'image',
                            rect: ['0', '0', '60px', '60px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"7.svg",'0px','0px']
                        },
                        {
                            id: '_6',
                            type: 'image',
                            rect: ['0', '0', '60px', '60px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"6.svg",'0px','0px']
                        },
                        {
                            id: '_9',
                            type: 'image',
                            rect: ['0', '0', '60px', '60px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"9.svg",'0px','0px']
                        },
                        {
                            id: '_10',
                            type: 'image',
                            rect: ['0', '0', '60px', '60px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"10.svg",'0px','0px']
                        },
                        {
                            id: '_11',
                            type: 'image',
                            rect: ['0', '0', '60px', '60px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"11.svg",'0px','0px']
                        },
                        {
                            id: '_12',
                            type: 'image',
                            rect: ['0', '0', '60px', '60px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"12.svg",'0px','0px']
                        },
                        {
                            id: '_13',
                            type: 'image',
                            rect: ['0', '0', '60px', '60px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"13.svg",'0px','0px']
                        },
                        {
                            id: '_14',
                            type: 'image',
                            rect: ['0', '0', '60px', '60px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"14.svg",'0px','0px']
                        },
                        {
                            id: '_15',
                            type: 'image',
                            rect: ['0', '0', '60px', '60px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"15.svg",'0px','0px']
                        },
                        {
                            id: '_16',
                            type: 'image',
                            rect: ['0', '0', '60px', '60px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"16.svg",'0px','0px']
                        },
                        {
                            id: '_17',
                            type: 'image',
                            rect: ['0', '0', '60px', '60px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"17.svg",'0px','0px']
                        },
                        {
                            id: '_18',
                            type: 'image',
                            rect: ['0', '0', '60px', '60px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"18.svg",'0px','0px']
                        },
                        {
                            id: '_19',
                            type: 'image',
                            rect: ['0', '0', '60px', '60px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"19.svg",'0px','0px']
                        },
                        {
                            id: '_20',
                            type: 'image',
                            rect: ['0', '0', '60px', '60px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"20.svg",'0px','0px']
                        },
                        {
                            id: '_21',
                            type: 'image',
                            rect: ['0', '0', '60px', '60px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"21.svg",'0px','0px']
                        },
                        {
                            id: '_22',
                            type: 'image',
                            rect: ['0', '0', '60px', '60px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"22.svg",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '60', '60', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,0.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 4000,
                    autoPlay: true,
                    labels: {
                        "repeat": 3920
                    },
                    data: [
                        [
                            "dg27",
                            "opacity",
                            325,
                            1000,
                            "easeInOutQuart",
                            "${_1}",
                            '0',
                            '1'
                        ],
                        [
                            "dg28",
                            "opacity",
                            2675,
                            1000,
                            "easeInOutQuart",
                            "${_1}",
                            '1',
                            '0'
                        ],
                        [
                            "dg31",
                            "opacity",
                            750,
                            1000,
                            "easeInOutQuart",
                            "${_9}",
                            '0',
                            '1'
                        ],
                        [
                            "dg32",
                            "opacity",
                            2250,
                            1000,
                            "easeInOutQuart",
                            "${_9}",
                            '1',
                            '0'
                        ],
                        [
                            "dg33",
                            "opacity",
                            450,
                            1000,
                            "easeInOutQuart",
                            "${_13}",
                            '0',
                            '1'
                        ],
                        [
                            "dg34",
                            "opacity",
                            2550,
                            1000,
                            "easeInOutQuart",
                            "${_13}",
                            '1',
                            '0'
                        ],
                        [
                            "dg13",
                            "opacity",
                            200,
                            1000,
                            "easeInOutQuart",
                            "${_16}",
                            '0',
                            '1'
                        ],
                        [
                            "dg14",
                            "opacity",
                            2800,
                            1000,
                            "easeInOutQuart",
                            "${_16}",
                            '1',
                            '0'
                        ],
                        [
                            "dg17",
                            "opacity",
                            160,
                            1000,
                            "easeInOutQuart",
                            "${_4}",
                            '0',
                            '1'
                        ],
                        [
                            "dg18",
                            "opacity",
                            2840,
                            1000,
                            "easeInOutQuart",
                            "${_4}",
                            '1',
                            '0'
                        ],
                        [
                            "dg37",
                            "opacity",
                            450,
                            1000,
                            "easeInOutQuart",
                            "${_19}",
                            '0',
                            '1'
                        ],
                        [
                            "dg38",
                            "opacity",
                            2550,
                            1000,
                            "easeInOutQuart",
                            "${_19}",
                            '1',
                            '0'
                        ],
                        [
                            "dg9",
                            "opacity",
                            555,
                            1000,
                            "easeInOutQuart",
                            "${_15}",
                            '0',
                            '1'
                        ],
                        [
                            "dg10",
                            "opacity",
                            2445,
                            1000,
                            "easeInOutQuart",
                            "${_15}",
                            '1',
                            '0'
                        ],
                        [
                            "dg1",
                            "opacity",
                            750,
                            1000,
                            "easeInOutQuart",
                            "${_22}",
                            '0',
                            '1'
                        ],
                        [
                            "dg2",
                            "opacity",
                            2250,
                            1000,
                            "easeInOutQuart",
                            "${_22}",
                            '1',
                            '0'
                        ],
                        [
                            "dg19",
                            "opacity",
                            0,
                            1000,
                            "easeInOutQuart",
                            "${_3}",
                            '0',
                            '1'
                        ],
                        [
                            "dg20",
                            "opacity",
                            3000,
                            1000,
                            "easeInOutQuart",
                            "${_3}",
                            '1',
                            '0'
                        ],
                        [
                            "dg25",
                            "opacity",
                            620,
                            1000,
                            "easeInOutQuart",
                            "${_7}",
                            '0',
                            '1'
                        ],
                        [
                            "dg26",
                            "opacity",
                            2380,
                            1000,
                            "easeInOutQuart",
                            "${_7}",
                            '1',
                            '0'
                        ],
                        [
                            "dg29",
                            "opacity",
                            750,
                            1000,
                            "easeInOutQuart",
                            "${_17}",
                            '0',
                            '1'
                        ],
                        [
                            "dg30",
                            "opacity",
                            2250,
                            1000,
                            "easeInOutQuart",
                            "${_17}",
                            '1',
                            '0'
                        ],
                        [
                            "dg7",
                            "opacity",
                            450,
                            1000,
                            "easeInOutQuart",
                            "${_11}",
                            '0',
                            '1'
                        ],
                        [
                            "dg8",
                            "opacity",
                            2550,
                            1000,
                            "easeInOutQuart",
                            "${_11}",
                            '1',
                            '0'
                        ],
                        [
                            "dg21",
                            "opacity",
                            80,
                            1000,
                            "easeInOutQuart",
                            "${_18}",
                            '0',
                            '1'
                        ],
                        [
                            "dg22",
                            "opacity",
                            2920,
                            1000,
                            "easeInOutQuart",
                            "${_18}",
                            '1',
                            '0'
                        ],
                        [
                            "dg39",
                            "opacity",
                            390,
                            1000,
                            "easeInOutQuart",
                            "${_2}",
                            '0',
                            '1'
                        ],
                        [
                            "dg40",
                            "opacity",
                            2610,
                            1000,
                            "easeInOutQuart",
                            "${_2}",
                            '1',
                            '0'
                        ],
                        [
                            "dg35",
                            "opacity",
                            620,
                            1000,
                            "easeInOutQuart",
                            "${_20}",
                            '0',
                            '1'
                        ],
                        [
                            "dg36",
                            "opacity",
                            2380,
                            1000,
                            "easeInOutQuart",
                            "${_20}",
                            '1',
                            '0'
                        ],
                        [
                            "dg11",
                            "opacity",
                            200,
                            1000,
                            "easeInOutQuart",
                            "${_21}",
                            '0',
                            '1'
                        ],
                        [
                            "dg12",
                            "opacity",
                            2800,
                            1000,
                            "easeInOutQuart",
                            "${_21}",
                            '1',
                            '0'
                        ],
                        [
                            "dg3",
                            "opacity",
                            390,
                            1000,
                            "easeInOutQuart",
                            "${_6}",
                            '0',
                            '1'
                        ],
                        [
                            "dg4",
                            "opacity",
                            2610,
                            1000,
                            "easeInOutQuart",
                            "${_6}",
                            '1',
                            '0'
                        ],
                        [
                            "dg23",
                            "opacity",
                            670,
                            1000,
                            "easeInOutQuart",
                            "${_12}",
                            '0',
                            '1'
                        ],
                        [
                            "dg24",
                            "opacity",
                            2330,
                            1000,
                            "easeInOutQuart",
                            "${_12}",
                            '1',
                            '0'
                        ],
                        [
                            "dg5",
                            "opacity",
                            500,
                            1000,
                            "easeInOutQuart",
                            "${_10}",
                            '0',
                            '1'
                        ],
                        [
                            "dg6",
                            "opacity",
                            2500,
                            1000,
                            "easeInOutQuart",
                            "${_10}",
                            '1',
                            '0'
                        ],
                        [
                            "dg15",
                            "opacity",
                            80,
                            1000,
                            "easeInOutQuart",
                            "${_14}",
                            '0',
                            '1'
                        ],
                        [
                            "dg16",
                            "opacity",
                            2920,
                            1000,
                            "easeInOutQuart",
                            "${_14}",
                            '1',
                            '0'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("logo_edgeActions.js");
})("EDGE-115364535");
