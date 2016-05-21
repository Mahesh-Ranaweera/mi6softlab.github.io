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
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: '_1',
                            type: 'group',
                            rect: ['97px', '97px', '8', '8', 'auto', 'auto'],
                            opacity: '0',
                            c: [
                            {
                                id: 'Ellipse4',
                                type: 'ellipse',
                                rect: ['0px', '0px', '8px', '8px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(33,150,243,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            }]
                        },
                        {
                            id: '_2',
                            type: 'group',
                            rect: ['82px', '82px', '39', '38', 'auto', 'auto'],
                            opacity: '0',
                            c: [
                            {
                                id: 'Ellipse4Copy26',
                                type: 'ellipse',
                                rect: ['15px', '0px', '6px', '6px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy27',
                                type: 'ellipse',
                                rect: ['15px', '30px', '6px', '6px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy78',
                                type: 'ellipse',
                                rect: ['25px', '5px', '6px', '6px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy81',
                                type: 'ellipse',
                                rect: ['25px', '26px', '6px', '6px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy79',
                                type: 'ellipse',
                                rect: ['5px', '5px', '6px', '6px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy80',
                                type: 'ellipse',
                                rect: ['5px', '26px', '6px', '6px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy',
                                type: 'ellipse',
                                rect: ['30px', '15px', '6px', '6px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy7',
                                type: 'ellipse',
                                rect: ['0px', '15px', '6px', '6px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            }]
                        },
                        {
                            id: '_3',
                            type: 'group',
                            rect: ['67px', '67px', '68', '68', 'auto', 'auto'],
                            opacity: '0',
                            c: [
                            {
                                id: 'Ellipse4Copy31',
                                type: 'ellipse',
                                rect: ['30px', '0px', '6px', '6px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy28',
                                type: 'ellipse',
                                rect: ['30px', '60px', '6px', '6px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy77',
                                type: 'ellipse',
                                rect: ['42px', '2px', '6px', '6px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy73',
                                type: 'ellipse',
                                rect: ['18px', '2px', '6px', '6px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy94',
                                type: 'ellipse',
                                rect: ['8px', '9px', '6px', '6px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy95',
                                type: 'ellipse',
                                rect: ['2px', '18px', '6px', '6px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy2',
                                type: 'ellipse',
                                rect: ['60px', '30px', '6px', '6px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy8',
                                type: 'ellipse',
                                rect: ['0px', '30px', '6px', '6px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy113',
                                type: 'ellipse',
                                rect: ['18px', '57px', '6px', '6px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy114',
                                type: 'ellipse',
                                rect: ['9px', '51px', '6px', '6px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy115',
                                type: 'ellipse',
                                rect: ['2px', '41px', '6px', '6px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy116',
                                type: 'ellipse',
                                rect: ['42px', '57px', '6px', '6px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy122',
                                type: 'ellipse',
                                rect: ['51px', '51px', '6px', '6px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy123',
                                type: 'ellipse',
                                rect: ['58px', '42px', '6px', '6px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy124',
                                type: 'ellipse',
                                rect: ['58px', '19px', '6px', '6px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy125',
                                type: 'ellipse',
                                rect: ['51px', '9px', '6px', '6px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            }]
                        },
                        {
                            id: '_4',
                            type: 'group',
                            rect: ['52px', '52px', '98', '98', 'auto', 'auto'],
                            opacity: '0',
                            c: [
                            {
                                id: 'Ellipse4Copy32',
                                type: 'ellipse',
                                rect: ['45px', '0px', '5px', '5px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy29',
                                type: 'ellipse',
                                rect: ['45px', '90px', '5px', '5px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy76',
                                type: 'ellipse',
                                rect: ['63px', '4px', '5px', '5px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy72',
                                type: 'ellipse',
                                rect: ['27px', '4px', '5px', '5px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy92',
                                type: 'ellipse',
                                rect: ['13px', '13px', '5px', '5px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy93',
                                type: 'ellipse',
                                rect: ['3px', '28px', '5px', '5px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy3',
                                type: 'ellipse',
                                rect: ['90px', '45px', '5px', '5px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy9',
                                type: 'ellipse',
                                rect: ['0px', '45px', '5px', '5px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy110',
                                type: 'ellipse',
                                rect: ['3px', '63px', '5px', '5px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy111',
                                type: 'ellipse',
                                rect: ['13px', '77px', '5px', '5px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy112',
                                type: 'ellipse',
                                rect: ['27px', '86px', '5px', '5px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy117',
                                type: 'ellipse',
                                rect: ['63px', '86px', '5px', '5px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy126',
                                type: 'ellipse',
                                rect: ['77px', '77px', '5px', '5px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy131',
                                type: 'ellipse',
                                rect: ['87px', '63px', '5px', '5px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy138',
                                type: 'ellipse',
                                rect: ['87px', '28px', '5px', '5px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy145',
                                type: 'ellipse',
                                rect: ['77px', '13px', '5px', '5px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            }]
                        },
                        {
                            id: '_5',
                            type: 'group',
                            rect: ['37px', '37px', '128', '129', 'auto', 'auto'],
                            opacity: '0',
                            c: [
                            {
                                id: 'Ellipse4Copy33',
                                type: 'ellipse',
                                rect: ['60px', '0px', '4px', '4px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy30',
                                type: 'ellipse',
                                rect: ['60px', '120px', '4px', '4px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy75',
                                type: 'ellipse',
                                rect: ['84px', '5px', '4px', '4px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy69',
                                type: 'ellipse',
                                rect: ['71px', '1px', '4px', '4px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy67',
                                type: 'ellipse',
                                rect: ['49px', '1px', '4px', '4px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy71',
                                type: 'ellipse',
                                rect: ['36px', '5px', '4px', '4px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy87',
                                type: 'ellipse',
                                rect: ['26px', '10px', '4px', '4px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy88',
                                type: 'ellipse',
                                rect: ['18px', '18px', '4px', '4px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy89',
                                type: 'ellipse',
                                rect: ['11px', '27px', '4px', '4px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy90',
                                type: 'ellipse',
                                rect: ['5px', '37px', '4px', '4px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy91',
                                type: 'ellipse',
                                rect: ['1px', '49px', '4px', '4px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy4',
                                type: 'ellipse',
                                rect: ['120px', '60px', '4px', '4px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy10',
                                type: 'ellipse',
                                rect: ['0px', '60px', '4px', '4px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy103',
                                type: 'ellipse',
                                rect: ['49px', '119px', '4px', '4px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy104',
                                type: 'ellipse',
                                rect: ['36px', '115px', '4px', '4px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy105',
                                type: 'ellipse',
                                rect: ['26px', '110px', '4px', '4px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy106',
                                type: 'ellipse',
                                rect: ['17px', '103px', '4px', '4px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy107',
                                type: 'ellipse',
                                rect: ['10px', '94px', '4px', '4px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy108',
                                type: 'ellipse',
                                rect: ['5px', '83px', '4px', '4px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy109',
                                type: 'ellipse',
                                rect: ['1px', '72px', '4px', '4px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy118',
                                type: 'ellipse',
                                rect: ['71px', '119px', '4px', '4px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy121',
                                type: 'ellipse',
                                rect: ['84px', '115px', '4px', '4px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy127',
                                type: 'ellipse',
                                rect: ['93px', '110px', '4px', '4px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy130',
                                type: 'ellipse',
                                rect: ['102px', '103px', '4px', '4px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy132',
                                type: 'ellipse',
                                rect: ['110px', '93px', '4px', '4px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy134',
                                type: 'ellipse',
                                rect: ['115px', '83px', '4px', '4px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy136',
                                type: 'ellipse',
                                rect: ['119px', '72px', '4px', '4px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy139',
                                type: 'ellipse',
                                rect: ['119px', '49px', '4px', '4px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy142',
                                type: 'ellipse',
                                rect: ['115px', '37px', '4px', '4px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy143',
                                type: 'ellipse',
                                rect: ['110px', '26px', '4px', '4px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy146',
                                type: 'ellipse',
                                rect: ['103px', '18px', '4px', '4px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy148',
                                type: 'ellipse',
                                rect: ['94px', '10px', '4px', '4px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            }]
                        },
                        {
                            id: '_6',
                            type: 'group',
                            rect: ['22px', '22px', '158', '159', 'auto', 'auto'],
                            opacity: '0',
                            c: [
                            {
                                id: 'Ellipse4Copy34',
                                type: 'ellipse',
                                rect: ['75px', '0px', '3px', '3px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy36',
                                type: 'ellipse',
                                rect: ['75px', '150px', '3px', '3px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy74',
                                type: 'ellipse',
                                rect: ['105px', '6px', '3px', '3px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy68',
                                type: 'ellipse',
                                rect: ['89px', '1px', '3px', '3px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy66',
                                type: 'ellipse',
                                rect: ['61px', '1px', '3px', '3px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy70',
                                type: 'ellipse',
                                rect: ['45px', '6px', '3px', '3px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy82',
                                type: 'ellipse',
                                rect: ['33px', '13px', '3px', '3px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy83',
                                type: 'ellipse',
                                rect: ['22px', '22px', '3px', '3px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy84',
                                type: 'ellipse',
                                rect: ['13px', '33px', '3px', '3px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy85',
                                type: 'ellipse',
                                rect: ['6px', '46px', '3px', '3px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy86',
                                type: 'ellipse',
                                rect: ['1px', '61px', '3px', '3px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy5',
                                type: 'ellipse',
                                rect: ['150px', '75px', '3px', '3px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy11',
                                type: 'ellipse',
                                rect: ['0px', '75px', '3px', '3px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy96',
                                type: 'ellipse',
                                rect: ['1px', '90px', '3px', '3px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy97',
                                type: 'ellipse',
                                rect: ['6px', '104px', '3px', '3px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy98',
                                type: 'ellipse',
                                rect: ['13px', '117px', '3px', '3px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy99',
                                type: 'ellipse',
                                rect: ['22px', '128px', '3px', '3px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy100',
                                type: 'ellipse',
                                rect: ['33px', '137px', '3px', '3px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy101',
                                type: 'ellipse',
                                rect: ['45px', '144px', '3px', '3px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy102',
                                type: 'ellipse',
                                rect: ['61px', '149px', '3px', '3px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy119',
                                type: 'ellipse',
                                rect: ['89px', '149px', '3px', '3px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy120',
                                type: 'ellipse',
                                rect: ['105px', '144px', '3px', '3px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy128',
                                type: 'ellipse',
                                rect: ['117px', '137px', '3px', '3px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy129',
                                type: 'ellipse',
                                rect: ['128px', '128px', '3px', '3px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy133',
                                type: 'ellipse',
                                rect: ['137px', '117px', '3px', '3px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy135',
                                type: 'ellipse',
                                rect: ['144px', '104px', '3px', '3px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy137',
                                type: 'ellipse',
                                rect: ['148px', '90px', '3px', '3px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy140',
                                type: 'ellipse',
                                rect: ['148px', '61px', '3px', '3px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy141',
                                type: 'ellipse',
                                rect: ['144px', '46px', '3px', '3px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy144',
                                type: 'ellipse',
                                rect: ['137px', '33px', '3px', '3px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy147',
                                type: 'ellipse',
                                rect: ['128px', '22px', '3px', '3px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy149',
                                type: 'ellipse',
                                rect: ['117px', '12px', '3px', '3px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            }]
                        },
                        {
                            id: '_7',
                            type: 'group',
                            rect: ['7px', '7px', '188', '187', 'auto', 'auto'],
                            opacity: '0',
                            c: [
                            {
                                id: 'Ellipse4Copy35',
                                type: 'ellipse',
                                rect: ['90px', '0px', '2px', '2px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy37',
                                type: 'ellipse',
                                rect: ['90px', '180px', '2px', '2px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy38',
                                type: 'ellipse',
                                rect: ['107px', '179px', '2px', '2px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy39',
                                type: 'ellipse',
                                rect: ['126px', '173px', '2px', '2px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy40',
                                type: 'ellipse',
                                rect: ['140px', '165px', '2px', '2px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy41',
                                type: 'ellipse',
                                rect: ['153px', '154px', '2px', '2px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy42',
                                type: 'ellipse',
                                rect: ['165px', '140px', '2px', '2px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy43',
                                type: 'ellipse',
                                rect: ['173px', '125px', '2px', '2px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy44',
                                type: 'ellipse',
                                rect: ['178px', '108px', '2px', '2px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy45',
                                type: 'ellipse',
                                rect: ['178px', '73px', '2px', '2px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy46',
                                type: 'ellipse',
                                rect: ['173px', '55px', '2px', '2px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy47',
                                type: 'ellipse',
                                rect: ['165px', '40px', '2px', '2px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy48',
                                type: 'ellipse',
                                rect: ['154px', '27px', '2px', '2px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy49',
                                type: 'ellipse',
                                rect: ['140px', '15px', '2px', '2px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy50',
                                type: 'ellipse',
                                rect: ['126px', '7px', '2px', '2px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy51',
                                type: 'ellipse',
                                rect: ['107px', '1px', '2px', '2px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy52',
                                type: 'ellipse',
                                rect: ['73px', '1px', '2px', '2px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy53',
                                type: 'ellipse',
                                rect: ['54px', '7px', '2px', '2px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy54',
                                type: 'ellipse',
                                rect: ['40px', '15px', '2px', '2px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy55',
                                type: 'ellipse',
                                rect: ['26px', '27px', '2px', '2px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy56',
                                type: 'ellipse',
                                rect: ['16px', '40px', '2px', '2px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy57',
                                type: 'ellipse',
                                rect: ['7px', '55px', '2px', '2px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy58',
                                type: 'ellipse',
                                rect: ['2px', '73px', '2px', '2px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy59',
                                type: 'ellipse',
                                rect: ['2px', '108px', '2px', '2px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy60',
                                type: 'ellipse',
                                rect: ['7px', '125px', '2px', '2px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy61',
                                type: 'ellipse',
                                rect: ['15px', '140px', '2px', '2px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy62',
                                type: 'ellipse',
                                rect: ['26px', '154px', '2px', '2px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy63',
                                type: 'ellipse',
                                rect: ['40px', '165px', '2px', '2px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy64',
                                type: 'ellipse',
                                rect: ['54px', '173px', '2px', '2px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy65',
                                type: 'ellipse',
                                rect: ['73px', '178px', '2px', '2px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy6',
                                type: 'ellipse',
                                rect: ['180px', '90px', '2px', '2px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy12',
                                type: 'ellipse',
                                rect: ['0px', '90px', '2px', '2px', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            }]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '200px', '200px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,0.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 6320,
                    autoPlay: true,
                    data: [
                        [
                            "eid37",
                            "opacity",
                            0,
                            505,
                            "easeInOutQuart",
                            "${_1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid45",
                            "opacity",
                            5815,
                            505,
                            "easeInOutQuart",
                            "${_1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid40",
                            "opacity",
                            0,
                            2005,
                            "easeInOutQuart",
                            "${_4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid52",
                            "opacity",
                            4310,
                            2005,
                            "easeInOutQuart",
                            "${_4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid39",
                            "opacity",
                            0,
                            1500,
                            "easeInOutQuart",
                            "${_3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid49",
                            "opacity",
                            4815,
                            1500,
                            "easeInOutQuart",
                            "${_3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid43",
                            "opacity",
                            5,
                            3065,
                            "easeInOutQuart",
                            "${_7}",
                            '0',
                            '1'
                        ],
                        [
                            "eid58",
                            "opacity",
                            3070,
                            3246,
                            "easeInOutQuart",
                            "${_7}",
                            '1',
                            '0'
                        ],
                        [
                            "eid41",
                            "opacity",
                            0,
                            2510,
                            "easeInOutQuart",
                            "${_5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid54",
                            "opacity",
                            3805,
                            2510,
                            "easeInOutQuart",
                            "${_5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid38",
                            "opacity",
                            0,
                            830,
                            "easeInOutQuart",
                            "${_2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid47",
                            "opacity",
                            5310,
                            1005,
                            "easeInOutQuart",
                            "${_2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid42",
                            "opacity",
                            0,
                            3005,
                            "easeInOutQuart",
                            "${_6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid56",
                            "opacity",
                            3305,
                            3005,
                            "easeInOutQuart",
                            "${_6}",
                            '1',
                            '0'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("loading_edgeActions.js");
})("EDGE-280372008");
