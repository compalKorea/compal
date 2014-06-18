/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {};
var resources = [
];
var symbols = {
"stage": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'home',
                type: 'group',
                rect: ['0.8%', '-37','4.3%','25.7%','auto', 'auto'],
                c: [
                {
                    id: 'Rectangle2Copy',
                    type: 'rect',
                    rect: ['5px', '17px','47px','174px','auto', 'auto'],
                    fill: ["rgba(219,65,38,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"],
                    transform: [[],[],['0','-36']]
                },
                {
                    id: 'Rectangle2',
                    type: 'rect',
                    rect: ['0px', '17px','47px','184px','auto', 'auto'],
                    fill: ["rgba(219,65,38,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"],
                    transform: [[],[],['0','-36']]
                },
                {
                    id: 'logo',
                    type: 'image',
                    rect: ['7px', '30px','47px','133px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"logo.png",'0px','0px']
                }]
            },
            {
                id: 'Rectangle3',
                type: 'rect',
                rect: ['50%', '0px','50%','100%','auto', 'auto'],
                opacity: 0.23,
                fill: ["rgba(0,117,190,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'light12',
                type: 'image',
                rect: ['40.6%', '13.9%','19.5%','24%','auto', 'auto'],
                opacity: 1,
                fill: ["rgba(0,0,0,0)",im+"light1.png",'0px','0px'],
                transform: [[],[],[],['1.01942']]
            },
            {
                id: 'lighting7',
                type: 'image',
                rect: ['46.7%', '-2.6%','6.8%','18%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"lighting.png",'0px','0px'],
                transform: [[],[],[],['1.08315']]
            },
            {
                id: 'foot',
                type: 'image',
                rect: ['0px', '74.6%','100%','25.3%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"foot.jpg",'0px','0px']
            },
            {
                id: 'pc',
                type: 'image',
                rect: ['35.8%', '37.5%','30.1%','39%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pc.png",'0px','0px']
            },
            {
                id: 'logob',
                type: 'image',
                rect: ['58.8%', '66.1%','66px','20px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"logob.png",'0px','0px']
            },
            {
                id: 'logolo',
                type: 'rect',
                rect: ['45.3%', '43.4%','auto','auto','auto', 'auto']
            },
            {
                id: 'maze',
                type: 'image',
                rect: ['39.6%', '48.7%','5.8%','11.8%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"maze.png",'0px','0px']
            },
            {
                id: 'maze1',
                type: 'image',
                rect: ['40.5%', '40.1%','18.7%','20.6%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"maze1.png",'0px','0px']
            },
            {
                id: 'maze2',
                type: 'image',
                rect: ['48.5%', '40.1%','10.8%','13.9%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"maze2.png",'0px','0px']
            },
            {
                id: 'tet',
                type: 'rect',
                rect: ['55.3%', '61.4%','auto','auto','auto', 'auto']
            },
            {
                id: 'Rectangle5',
                type: 'rect',
                rect: ['36%', '37.2%','27.6%','25.7%','auto', 'auto'],
                fill: ["rgba(63,67,60,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'on2',
                type: 'rect',
                rect: ['58.4%', '46.7%','auto','auto','auto', 'auto'],
                cursor: ['pointer']
            },
            {
                id: 'one1',
                type: 'rect',
                rect: ['40.5%', '46.7%','auto','auto','auto', 'auto'],
                cursor: ['pointer']
            },
            {
                id: 'pctext',
                type: 'image',
                rect: ['38.2%', '50%','2.2%','18.1%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"pctext.png",'0px','0px']
            },
            {
                id: 'mouse',
                type: 'image',
                rect: ['66.2%', '72.1%','3.9%','2.5%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"mouse.png",'0px','0px']
            },
            {
                id: 'tablet',
                type: 'image',
                rect: ['30.9%', '58.9%','9.7%','15.7%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"tablet.png",'0px','0px']
            },
            {
                id: 'taright',
                type: 'ellipse',
                rect: ['34.2%', '73.3%','0.8%','1.2%','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(217,66,39,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'success',
                type: 'image',
                rect: ['57.7%', '38.6%','3.1%','3.1%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"success.png",'0px','0px']
            },
            {
                id: 'fla',
                type: 'rect',
                rect: ['59.3%', '37.5%','auto','auto','auto', 'auto'],
                cursor: ['pointer']
            },
            {
                id: 'des',
                type: 'image',
                rect: ['60.1%', '39.8%','1.9%','1.2%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"des.png",'0px','0px']
            },
            {
                id: 'dream2',
                type: 'image',
                rect: ['5.3%', '39.4%','7.8%','12.7%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"dream2.png",'0px','0px'],
                transform: [[],[],[],['0.70277','0.70277']]
            },
            {
                id: 'passion',
                type: 'image',
                rect: ['12.4%', '40%','7.8%','12.7%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"passion.png",'0px','0px'],
                transform: [[],[],[],['0.70277','0.70277']]
            },
            {
                id: 'enjoy2',
                type: 'image',
                rect: ['19.1%', '40.8%','7.8%','12.7%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"enjoy2.png",'0px','0px'],
                transform: [[],[],[],['0.70279','0.70279']]
            },
            {
                id: 'give',
                type: 'image',
                rect: ['17.2%', '78.5%','15.1%','16.4%','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"give-up.png",'0px','0px'],
                transform: [[],[],[],['0.82873','0.82873']]
            },
            {
                id: 'challenge',
                type: 'image',
                rect: ['68.8%', '79.9%','12.5%','13.7%','auto', 'auto'],
                cursor: ['pointer'],
                fill: ["rgba(0,0,0,0)",im+"challenge.png",'0px','0px']
            },
            {
                id: 'whatdo',
                display: 'block',
                type: 'text',
                rect: ['11.5%', '53.5%','auto','auto','auto', 'auto'],
                text: "▼ What do you want?",
                font: ['Arial, Helvetica, sans-serif', 22.08, "rgba(219,65,38,1.00)", "400", "none", ""]
            },
            {
                id: 'whatis',
                type: 'text',
                rect: ['73%', '46.4%','auto','auto','auto', 'auto'],
                text: "▼ What is th COMPAL?",
                font: ['Arial, Helvetica, sans-serif', [137.5, "%"], "rgba(219,65,38,1.00)", "normal", "none", ""]
            },
            {
                id: 'Rectangle4',
                type: 'rect',
                rect: ['59.3%', '47.4%','12.5%','0.1%','auto', 'auto'],
                fill: ["rgba(219,65,38,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Rectangle',
                type: 'rect',
                rect: ['30.3%', '47.3%','11%','0.1%','auto', 'auto'],
                fill: ["rgba(241,143,32,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'title',
                type: 'image',
                rect: ['27.4%', '18.9%','45.3%','7.7%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"title.png",'0px','0px'],
                transform: [[],[],[],['0.8','0.8']]
            },
            {
                id: 'subtitle',
                type: 'image',
                rect: ['35.3%', '27.3%','29.5%','4.2%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"subtitle.png",'0px','0px'],
                transform: [[],[],[],['0.8','0.8']]
            },
            {
                id: 'container',
                type: 'rect',
                rect: ['68.8%', '0%','31.3%','74.6%','auto', 'auto'],
                fill: ["rgba(217,66,39,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"],
                c: [
                {
                    id: 'info',
                    type: 'text',
                    rect: ['8.5%', '11%','85.4%','83.6%','auto', 'auto'],
                    text: "Info<br>",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 28, "rgba(255,255,255,1.00)", "300", "none", "normal"]
                },
                {
                    id: 'logo2',
                    type: 'image',
                    rect: ['133.3%', '-6.9%','47px','133px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"logo.png",'0px','0px'],
                    transform: [[],['-90'],[],['0.75255','0.75255']]
                },
                {
                    id: 'semo',
                    type: 'image',
                    rect: ['13.6%', '99.4%','12.5%','4.6%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"semo.png",'0px','0px']
                }]
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['886', '135','auto','auto','auto', 'auto'],
                text: "",
                font: ['Arial, Helvetica, sans-serif', 24, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'question',
                type: 'text',
                rect: ['44.1%', '74.8%','11.6%','2.5%','auto', 'auto'],
                text: "Are you ready?",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 20, "rgba(194,220,233,1.00)", "300", "none", "normal"]
            },
            {
                id: 'contents',
                type: 'image',
                rect: ['18.2%', '62.4%','30.5%','16.7%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"contents.png",'0px','0px']
            },
            {
                id: 'contentsCopy',
                type: 'image',
                rect: ['18.2%', '62.4%','30.5%','16.7%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"contents.png",'0px','0px']
            },
            {
                id: 'contents2',
                type: 'image',
                rect: ['67%', '46.9%','33.3%','21.2%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"contents2.png",'0px','0px'],
                transform: [[],[],[],['0.64444','0.64444']]
            },
            {
                id: 'boom_bg',
                type: 'rect',
                rect: ['0px', '-4px','100%','100.4%','auto', 'auto'],
                fill: ["rgba(53,51,51,0.79)"],
                stroke: [0,"rgba(0,0,0,1)","none"],
                c: [
                {
                    id: 'bomb',
                    type: 'image',
                    rect: ['43.7%', '44.2%','9.6%','12%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"bomb.png",'0px','0px']
                },
                {
                    id: 'bomb_bom',
                    type: 'image',
                    rect: ['41.3%', '35.7%','10.8%','14.2%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"bomb_bom.png",'0px','0px']
                }]
            }],
            symbolInstances: [
            {
                id: 'tet',
                symbolName: 'tet',
                autoPlay: {

                }
            },
            {
                id: 'logolo',
                symbolName: 'logolo',
                autoPlay: {

                }
            },
            {
                id: 'one1',
                symbolName: 'one1',
                autoPlay: {

                }
            },
            {
                id: 'fla',
                symbolName: 'fla',
                autoPlay: {

                }
            },
            {
                id: 'on2',
                symbolName: 'on2',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_lighting7}": [
                ["style", "top", '-2.59%'],
                ["style", "height", '17.96%'],
                ["transform", "scaleX", '1.08315'],
                ["style", "left", '46.67%'],
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_Rectangle2}": [
                ["style", "top", '17px'],
                ["transform", "skewY", '-36deg'],
                ["style", "height", '184px'],
                ["color", "background-color", 'rgba(219,65,38,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '47px']
            ],
            "${_logo2}": [
                ["style", "top", '-5.84%'],
                ["transform", "scaleY", '0.75255'],
                ["transform", "rotateZ", '-90deg'],
                ["transform", "scaleX", '0.75255'],
                ["style", "height", '115px'],
                ["style", "left", '76.06%'],
                ["style", "width", '40px']
            ],
            "${_passion}": [
                ["style", "top", '36.6%'],
                ["transform", "scaleY", '0.68738'],
                ["transform", "scaleX", '0.70277'],
                ["style", "opacity", '0'],
                ["style", "left", '12.42%']
            ],
            "${_Rectangle4}": [
                ["color", "background-color", 'rgba(219,65,38,1.00)'],
                ["style", "top", '47.41%'],
                ["style", "height", '0.12%'],
                ["style", "opacity", '0'],
                ["style", "left", '70.17%'],
                ["style", "width", '1.65%']
            ],
            "${_title}": [
                ["style", "top", '22.71%'],
                ["transform", "scaleY", '0.8'],
                ["transform", "scaleX", '0.8'],
                ["style", "opacity", '0'],
                ["style", "left", '27.42%']
            ],
            "${_mouse}": [
                ["style", "top", '72.12%'],
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "height", '2.53%'],
                ["style", "opacity", '0'],
                ["style", "left", '88.89%'],
                ["style", "width", '3.92%']
            ],
            "${_logo}": [
                ["style", "left", '4px'],
                ["style", "top", '33px']
            ],
            "${_fla}": [
                ["style", "top", '37.18%'],
                ["style", "cursor", 'pointer'],
                ["style", "-webkit-transform-origin", [0,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_enjoy2}": [
                ["style", "top", '36.59%'],
                ["transform", "scaleY", '0.70279'],
                ["transform", "scaleX", '0.70279'],
                ["style", "opacity", '0'],
                ["style", "left", '18.83%']
            ],
            "${_logolo}": [
                ["style", "left", '45.58%'],
                ["style", "opacity", '0.5853660106658936']
            ],
            "${_Rectangle3}": [
                ["style", "-webkit-transform-origin", [0,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["color", "background-color", 'rgba(0,117,190,1.00)'],
                ["style", "height", '100%'],
                ["style", "opacity", '0.23'],
                ["style", "left", '50%'],
                ["style", "width", '50%']
            ],
            "${_on2}": [
                ["style", "cursor", 'pointer']
            ],
            "${_boom_bg}": [
                ["style", "top", '-4px'],
                ["color", "background-color", 'rgba(53,51,51,0.79)'],
                ["style", "height", '100.35%'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "width", '100%']
            ],
            "${_bomb}": [
                ["style", "top", '44.16%'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '11.96%'],
                ["style", "opacity", '0'],
                ["style", "left", '45.17%'],
                ["style", "width", '9.63%']
            ],
            "${_whatis}": [
                ["style", "top", '55.53%'],
                ["color", "color", 'rgba(219,65,38,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '73.02%'],
                ["style", "font-size", '137.5%']
            ],
            "${_give}": [
                ["style", "top", '78.52%'],
                ["transform", "scaleY", '0.82873'],
                ["transform", "scaleX", '-0.82873'],
                ["style", "opacity", '0'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '17.17%']
            ],
            "${_whatdo}": [
                ["style", "top", '64.59%'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "display", 'block'],
                ["style", "font-weight", '400'],
                ["color", "color", 'rgba(219,65,38,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '9%'],
                ["style", "font-size", '22.08px']
            ],
            "${_one1}": [
                ["style", "cursor", 'pointer']
            ],
            "${_home}": [
                ["style", "opacity", '0']
            ],
            "${_success}": [
                ["subproperty", "filter.drop-shadow.color", 'rgba(0,0,0,0)'],
                ["style", "opacity", '0'],
                ["style", "left", '57.67%'],
                ["style", "width", '3.09%'],
                ["style", "top", '38.2%'],
                ["style", "height", '3.06%'],
                ["subproperty", "filter.drop-shadow.blur", '0px'],
                ["subproperty", "filter.drop-shadow.offsetV", '0px'],
                ["subproperty", "filter.drop-shadow.offsetH", '0px']
            ],
            "${_bomb_bom}": [
                ["style", "top", '38.19%'],
                ["style", "height", '14.24%'],
                ["style", "opacity", '0'],
                ["style", "left", '41.96%'],
                ["style", "width", '10.84%']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(123,186,230,1.00)'],
                ["style", "min-width", '0%'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '99.98%'],
                ["style", "width", '100%']
            ],
            "${_contents}": [
                ["style", "top", '56.23%'],
                ["transform", "scaleY", '0.97'],
                ["transform", "scaleX", '0.58919'],
                ["style", "opacity", '0'],
                ["style", "left", '2.92%']
            ],
            "${_subtitle}": [
                ["style", "top", '31.3%'],
                ["transform", "scaleY", '0.8'],
                ["transform", "scaleX", '0.8'],
                ["style", "opacity", '0'],
                ["style", "left", '35.25%']
            ],
            "${_light12}": [
                ["style", "top", '11%'],
                ["style", "height", '24%'],
                ["style", "-webkit-transform-origin", [48.6,49.1], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [48.6,49.1],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [48.6,49.1],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [48.6,49.1],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [48.6,49.1],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleX", '1.01942'],
                ["style", "opacity", '0'],
                ["style", "left", '40.58%'],
                ["style", "width", '19.48%']
            ],
            "${_pctext}": [
                ["style", "top", '37.55%'],
                ["transform", "scaleY", '0.75325'],
                ["style", "height", '15.83%'],
                ["transform", "scaleX", '0.94873'],
                ["style", "opacity", '0'],
                ["style", "left", '37.72%'],
                ["style", "width", '2.11%']
            ],
            "${_maze1}": [
                ["style", "top", '40.12%'],
                ["style", "height", '20.59%'],
                ["style", "opacity", '0'],
                ["style", "left", '40.5%'],
                ["style", "width", '18.67%']
            ],
            "${_dream2}": [
                ["style", "top", '31.07%'],
                ["transform", "scaleY", '0.70277'],
                ["transform", "scaleX", '0.70277'],
                ["style", "opacity", '0'],
                ["style", "left", '-6.92%']
            ],
            "${_tablet}": [
                ["style", "top", '54.24%'],
                ["style", "height", '20.59%'],
                ["style", "opacity", '0'],
                ["style", "left", '4.67%'],
                ["style", "width", '12.49%']
            ],
            "${_taright}": [
                ["style", "top", '73.31%'],
                ["subproperty", "filter.hue-rotate", '0deg'],
                ["color", "background-color", 'rgba(243,3,3,1.00)'],
                ["style", "height", '1.18%'],
                ["style", "opacity", '0'],
                ["style", "left", '34.25%'],
                ["style", "width", '0.84%']
            ],
            "${_question}": [
                ["style", "top", '74.94%'],
                ["style", "width", '18.84%'],
                ["style", "height", '6.12%'],
                ["style", "opacity", '0'],
                ["color", "color", 'rgba(194,220,233,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "left", '44.67%'],
                ["style", "font-size", '20px']
            ],
            "${_contentsCopy}": [
                ["style", "top", '56.25%'],
                ["transform", "scaleY", '0.97'],
                ["transform", "scaleX", '0.58919'],
                ["style", "opacity", '0'],
                ["style", "left", '2.92%']
            ],
            "${_des}": [
                ["style", "top", '39.76%'],
                ["style", "height", '1.18%'],
                ["style", "opacity", '0'],
                ["style", "left", '60.08%'],
                ["style", "width", '1.92%']
            ],
            "${_foot}": [
                ["style", "height", '25.31%'],
                ["style", "top", '74.59%'],
                ["style", "left", '0px'],
                ["style", "width", '100%']
            ],
            "${_contents2}": [
                ["style", "top", '52.13%'],
                ["transform", "scaleY", '0.64444'],
                ["transform", "scaleX", '0.64444'],
                ["style", "opacity", '0'],
                ["style", "left", '66.16%']
            ],
            "${_maze}": [
                ["style", "top", '48.71%'],
                ["style", "height", '11.78%'],
                ["style", "opacity", '0'],
                ["style", "left", '39.58%'],
                ["style", "width", '5.75%']
            ],
            "${_Rectangle2Copy}": [
                ["color", "background-color", 'rgba(110,23,0,1.00)'],
                ["transform", "skewY", '-36deg'],
                ["style", "height", '175px'],
                ["style", "top", '17px'],
                ["style", "left", '5px'],
                ["style", "width", '47px']
            ],
            "${_pc}": [
                ["style", "top", '35.53%'],
                ["style", "height", '39.02%'],
                ["style", "opacity", '0'],
                ["style", "left", '34.75%'],
                ["style", "width", '30.1%']
            ],
            "${_container}": [
                ["style", "height", '74.59%'],
                ["style", "opacity", '0'],
                ["color", "background-color", 'rgba(217,66,39,1.00)'],
                ["style", "top", '-74.6%']
            ],
            "${_challenge}": [
                ["style", "top", '79.88%'],
                ["style", "height", '13.65%'],
                ["style", "cursor", 'pointer'],
                ["transform", "scaleX", '-1'],
                ["style", "opacity", '0'],
                ["style", "left", '68.75%'],
                ["style", "width", '12.5%']
            ],
            "${_Rectangle}": [
                ["style", "height", '0.12%'],
                ["style", "opacity", '0'],
                ["color", "background-color", 'rgba(241,143,32,1.00)'],
                ["style", "width", '1%']
            ],
            "${_semo}": [
                ["style", "height", '4.61%'],
                ["style", "top", '99.37%'],
                ["style", "left", '13.56%'],
                ["style", "width", '12.5%']
            ],
            "${_Rectangle5}": [
                ["color", "background-color", 'rgba(63,67,60,1.00)'],
                ["style", "opacity", '0']
            ],
            "${_info}": [
                ["style", "top", '11.04%'],
                ["style", "font-size", '28px'],
                ["style", "height", '83.6%'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "left", '8.51%'],
                ["style", "width", '85.38%']
            ],
            "${_maze2}": [
                ["style", "top", '40.12%'],
                ["style", "height", '13.88%'],
                ["style", "opacity", '0'],
                ["style", "left", '48.5%'],
                ["style", "width", '10.84%']
            ],
            "${_logob}": [
                ["style", "top", '66.35%'],
                ["style", "height", '16px'],
                ["style", "opacity", '0'],
                ["style", "left", '58.75%'],
                ["style", "width", '58px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 17913,
            autoPlay: true,
            labels: {
                "start": 0,
                "MoveUp_Stage_container": 8750,
                "MoveDown_Stage_container": 9597,
                "MoveUp_Stage_contentsCopy": 10450,
                "MoveDown_Stage_contentsCopy": 11000,
                "MoveUp_Stage_contents2": 11763,
                "MoveDown_Stage_contents2": 12449,
                "MoveUp_Stage_success": 13250,
                "MoveDown_Stage_success": 14630,
                "MoveUp_Stage_bomb": 15676,
                "MoveDown_Stage_bomb": 17437
            },
            timeline: [
                { id: "eid54", tween: [ "style", "${_Rectangle2Copy}", "height", '175px', { fromValue: '175px'}], position: 0, duration: 0 },
                { id: "eid367", tween: [ "style", "${_dream2}", "left", '-0.75%', { fromValue: '-6.92%'}], position: 2750, duration: 250 },
                { id: "eid377", tween: [ "style", "${_dream2}", "left", '1.67%', { fromValue: '-0.75%'}], position: 3000, duration: 180 },
                { id: "eid381", tween: [ "style", "${_dream2}", "left", '3.67%', { fromValue: '1.67%'}], position: 3180, duration: 190 },
                { id: "eid395", tween: [ "style", "${_dream2}", "left", '4.58%', { fromValue: '3.67%'}], position: 3370, duration: 130 },
                { id: "eid399", tween: [ "style", "${_dream2}", "left", '6.08%', { fromValue: '4.58%'}], position: 3500, duration: 120 },
                { id: "eid517", tween: [ "style", "${_dream2}", "left", '8.17%', { fromValue: '6.08%'}], position: 3620, duration: 200 },
                { id: "eid4544", tween: [ "style", "${_question}", "left", '44.67%', { fromValue: '44.67%'}], position: 9415, duration: 0 },
                { id: "eid6027", tween: [ "style", "${_bomb_bom}", "width", '39.44%', { fromValue: '10.84%'}], position: 16635, duration: 201 },
                { id: "eid6037", tween: [ "style", "${_bomb_bom}", "width", '32.05%', { fromValue: '39.44%'}], position: 16836, duration: 164 },
                { id: "eid4851", tween: [ "style", "${_pctext}", "height", '15.83%', { fromValue: '15.83%'}], position: 1250, duration: 0 },
                { id: "eid3201", tween: [ "style", "${_question}", "width", '40.76%', { fromValue: '18.84%'}], position: 7627, duration: 623 },
                { id: "eid3240", tween: [ "style", "${_des}", "opacity", '1', { fromValue: '0'}], position: 8089, duration: 161 },
                { id: "eid6009", tween: [ "transform", "${_bomb}", "rotateZ", '89deg', { fromValue: '0deg'}], position: 16085, duration: 165 },
                { id: "eid6011", tween: [ "transform", "${_bomb}", "rotateZ", '31deg', { fromValue: '89deg'}], position: 16250, duration: 119 },
                { id: "eid6013", tween: [ "transform", "${_bomb}", "rotateZ", '64deg', { fromValue: '31deg'}], position: 16369, duration: 131 },
                { id: "eid6015", tween: [ "transform", "${_bomb}", "rotateZ", '21deg', { fromValue: '64deg'}], position: 16500, duration: 135 },
                { id: "eid1337", tween: [ "style", "${_whatdo}", "left", '9%', { fromValue: '9%'}], position: 5400, duration: 0 },
                { id: "eid1333", tween: [ "style", "${_whatdo}", "left", '9.33%', { fromValue: '9%'}], position: 5500, duration: 350 },
                { id: "eid2679", tween: [ "subproperty", "${_success}", "filter.drop-shadow.color", 'rgba(58,29,14,0.67)', { fromValue: 'rgba(0,0,0,0)'}], position: 13250, duration: 360 },
                { id: "eid2440", tween: [ "style", "${_contents2}", "left", '66.17%', { fromValue: '66.16%'}], position: 11764, duration: 922 },
                { id: "eid959", tween: [ "style", "${_title}", "opacity", '1', { fromValue: '0'}], position: 6696, duration: 185 },
                { id: "eid4852", tween: [ "style", "${_pctext}", "top", '37.55%', { fromValue: '37.55%'}], position: 1250, duration: 0 },
                { id: "eid2275", tween: [ "transform", "${_pctext}", "scaleX", '0.94873', { fromValue: '0.94873'}], position: 1250, duration: 0 },
                { id: "eid2347", tween: [ "style", "${_contents2}", "opacity", '1', { fromValue: '0'}], position: 11764, duration: 272 },
                { id: "eid2431", tween: [ "style", "${_contents2}", "opacity", '0', { fromValue: '1'}], position: 12449, duration: 237 },
                { id: "eid4633", tween: [ "style", "${_fla}", "-webkit-transform-origin", [0,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,100]}], position: 9415, duration: 0 },
                { id: "eid6452", tween: [ "style", "${_fla}", "-moz-transform-origin", [0,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,100]}], position: 9415, duration: 0 },
                { id: "eid6453", tween: [ "style", "${_fla}", "-ms-transform-origin", [0,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,100]}], position: 9415, duration: 0 },
                { id: "eid6454", tween: [ "style", "${_fla}", "msTransformOrigin", [0,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,100]}], position: 9415, duration: 0 },
                { id: "eid6455", tween: [ "style", "${_fla}", "-o-transform-origin", [0,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,100]}], position: 9415, duration: 0 },
                { id: "eid2330", tween: [ "style", "${_contents}", "opacity", '1', { fromValue: '0'}], position: 10450, duration: 220 },
                { id: "eid2427", tween: [ "style", "${_contents}", "opacity", '0', { fromValue: '1'}], position: 11000, duration: 250 },
                { id: "eid369", tween: [ "style", "${_dream2}", "top", '36.6%', { fromValue: '31.07%'}], position: 2750, duration: 250 },
                { id: "eid376", tween: [ "style", "${_dream2}", "top", '29.77%', { fromValue: '36.6%'}], position: 3000, duration: 180 },
                { id: "eid379", tween: [ "style", "${_dream2}", "top", '36.6%', { fromValue: '29.77%'}], position: 3180, duration: 190 },
                { id: "eid397", tween: [ "style", "${_dream2}", "top", '38.7%', { fromValue: '36.6%'}], position: 3370, duration: 130 },
                { id: "eid401", tween: [ "style", "${_dream2}", "top", '36.6%', { fromValue: '38.7%'}], position: 3500, duration: 120 },
                { id: "eid863", tween: [ "style", "${_whatdo}", "opacity", '1', { fromValue: '0'}], position: 5400, duration: 450 },
                { id: "eid957", tween: [ "style", "${_title}", "top", '18.59%', { fromValue: '22.71%'}], position: 6696, duration: 185 },
                { id: "eid965", tween: [ "style", "${_title}", "top", '20.36%', { fromValue: '18.59%'}], position: 6881, duration: 210 },
                { id: "eid2978", tween: [ "style", "${_logo2}", "top", '-6.03%', { fromValue: '-5.84%'}], position: 8104, duration: 978 },
                { id: "eid2981", tween: [ "style", "${_logo2}", "top", '-6.47%', { fromValue: '-6.03%'}], position: 9082, duration: 83 },
                { id: "eid4480", tween: [ "style", "${_logo2}", "top", '-3.47%', { fromValue: '-6.47%'}], position: 9165, duration: 250 },
                { id: "eid53", tween: [ "color", "${_Rectangle2Copy}", "background-color", 'rgba(110,23,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(110,23,0,1.00)'}], position: 0, duration: 0 },
                { id: "eid119", tween: [ "style", "${_mouse}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 2500, duration: 0 },
                { id: "eid6456", tween: [ "style", "${_mouse}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 2500, duration: 0 },
                { id: "eid6457", tween: [ "style", "${_mouse}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 2500, duration: 0 },
                { id: "eid6458", tween: [ "style", "${_mouse}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 2500, duration: 0 },
                { id: "eid6459", tween: [ "style", "${_mouse}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,50]}], position: 2500, duration: 0 },
                { id: "eid198", tween: [ "style", "${_tablet}", "opacity", '1', { fromValue: '0'}], position: 1395, duration: 605 },
                { id: "eid413", tween: [ "style", "${_passion}", "opacity", '1', { fromValue: '0'}], position: 3620, duration: 305 },
                { id: "eid4484", tween: [ "style", "${_logo2}", "width", '40px', { fromValue: '40px'}], position: 9415, duration: 0 },
                { id: "eid904", tween: [ "style", "${_whatis}", "opacity", '1', { fromValue: '0'}], position: 5750, duration: 500 },
                { id: "eid120", tween: [ "style", "${_mouse}", "left", '67.2%', { fromValue: '88.89%'}], position: 2000, duration: 500 },
                { id: "eid199", tween: [ "style", "${_tablet}", "left", '28.75%', { fromValue: '4.67%'}], position: 1395, duration: 605 },
                { id: "eid2747", tween: [ "style", "${_taright}", "left", '34.25%', { fromValue: '34.25%'}], position: 4542, duration: 0 },
                { id: "eid916", tween: [ "style", "${_Rectangle4}", "left", '59.34%', { fromValue: '70.17%'}], position: 6000, duration: 250 },
                { id: "eid5993", tween: [ "style", "${_bomb}", "height", '18%', { fromValue: '11.96%'}], position: 15676, duration: 409 },
                { id: "eid489", tween: [ "transform", "${_enjoy2}", "scaleX", '-0.70279', { fromValue: '0.70279'}], position: 4000, duration: 250 },
                { id: "eid492", tween: [ "transform", "${_enjoy2}", "scaleX", '0.70279', { fromValue: '-0.70279'}], position: 4250, duration: 250 },
                { id: "eid2681", tween: [ "subproperty", "${_success}", "filter.drop-shadow.blur", '0px', { fromValue: '0px'}], position: 13250, duration: 0 },
                { id: "eid2682", tween: [ "subproperty", "${_success}", "filter.drop-shadow.blur", '0px', { fromValue: '0px'}], position: 13610, duration: 0 },
                { id: "eid914", tween: [ "style", "${_Rectangle4}", "opacity", '1', { fromValue: '0'}], position: 6000, duration: 250 },
                { id: "eid2345", tween: [ "style", "${_contents2}", "top", '45.89%', { fromValue: '52.13%'}], position: 11764, duration: 272 },
                { id: "eid2441", tween: [ "style", "${_contents2}", "top", '52.75%', { fromValue: '45.89%'}], position: 12449, duration: 237 },
                { id: "eid2601", tween: [ "style", "${_maze}", "opacity", '1', { fromValue: '0'}], position: 5195, duration: 555 },
                { id: "eid2609", tween: [ "style", "${_maze2}", "opacity", '1', { fromValue: '0'}], position: 6750, duration: 709 },
                { id: "eid2367", tween: [ "style", "${_enjoy2}", "top", '36.59%', { fromValue: '36.59%'}], position: 4000, duration: 0 },
                { id: "eid282", tween: [ "style", "${_light12}", "top", '10%', { fromValue: '11%'}], position: 250, duration: 2500 },
                { id: "eid2282", tween: [ "style", "${_pctext}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 395 },
                { id: "eid2309", tween: [ "transform", "${_contents}", "scaleX", '0.58919', { fromValue: '0.58919'}], position: 10450, duration: 0 },
                { id: "eid5998", tween: [ "style", "${_bomb}", "top", '41.22%', { fromValue: '44.16%'}], position: 15676, duration: 409 },
                { id: "eid68", tween: [ "style", "${_logo}", "left", '4px', { fromValue: '4px'}], position: 0, duration: 0 },
                { id: "eid4876", tween: [ "style", "${_pctext}", "left", '37.72%', { fromValue: '37.72%'}], position: 1250, duration: 0 },
                { id: "eid2684", tween: [ "subproperty", "${_success}", "filter.drop-shadow.offsetH", '3px', { fromValue: '0px'}], position: 13250, duration: 360 },
                { id: "eid963", tween: [ "style", "${_subtitle}", "top", '26.59%', { fromValue: '31.3%'}], position: 6881, duration: 210 },
                { id: "eid966", tween: [ "style", "${_subtitle}", "top", '28.36%', { fromValue: '26.59%'}], position: 7091, duration: 145 },
                { id: "eid51", tween: [ "color", "${_Stage}", "background-color", 'rgba(123,186,230,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(123,186,230,1.00)'}], position: 0, duration: 0 },
                { id: "eid2002", tween: [ "style", "${_question}", "top", '74.94%', { fromValue: '74.94%'}], position: 7627, duration: 0 },
                { id: "eid3665", tween: [ "style", "${_success}", "top", '38.6%', { fromValue: '38.2%'}], position: 8250, duration: 5000 },
                { id: "eid2678", tween: [ "style", "${_success}", "top", '38.36%', { fromValue: '38.6%'}], position: 13250, duration: 360 },
                { id: "eid2686", tween: [ "style", "${_success}", "top", '41.18%', { fromValue: '38.36%'}], position: 13610, duration: 323 },
                { id: "eid2692", tween: [ "style", "${_success}", "top", '40%', { fromValue: '41.18%'}], position: 13933, duration: 161 },
                { id: "eid2696", tween: [ "style", "${_success}", "top", '41.06%', { fromValue: '40%'}], position: 14094, duration: 147 },
                { id: "eid3188", tween: [ "style", "${_contentsCopy}", "left", '2.92%', { fromValue: '2.92%'}], position: 10450, duration: 0 },
                { id: "eid3189", tween: [ "style", "${_contentsCopy}", "left", '2.9%', { fromValue: '2.92%'}], position: 10670, duration: 580 },
                { id: "eid6273", tween: [ "style", "${_logolo}", "left", '45.58%', { fromValue: '45.58%'}], position: 8325, duration: 0 },
                { id: "eid4483", tween: [ "style", "${_logo2}", "height", '115px', { fromValue: '115px'}], position: 9415, duration: 0 },
                { id: "eid6030", tween: [ "style", "${_bomb_bom}", "left", '30.33%', { fromValue: '41.96%'}], position: 16635, duration: 201 },
                { id: "eid6036", tween: [ "style", "${_bomb_bom}", "left", '35.33%', { fromValue: '30.33%'}], position: 16836, duration: 164 },
                { id: "eid162", tween: [ "style", "${_pc}", "width", '30.1%', { fromValue: '30.1%'}], position: 2500, duration: 0 },
                { id: "eid491", tween: [ "transform", "${_enjoy2}", "scaleY", '0.70279', { fromValue: '0.70279'}], position: 4250, duration: 0 },
                { id: "eid4877", tween: [ "style", "${_pctext}", "width", '2.11%', { fromValue: '2.11%'}], position: 1250, duration: 0 },
                { id: "eid506", tween: [ "style", "${_enjoy2}", "left", '21.51%', { fromValue: '18.83%'}], position: 4000, duration: 185 },
                { id: "eid516", tween: [ "style", "${_enjoy2}", "left", '22.33%', { fromValue: '21.51%'}], position: 4185, duration: 315 },
                { id: "eid69", tween: [ "style", "${_Rectangle2Copy}", "left", '5px', { fromValue: '5px'}], position: 0, duration: 0 },
                { id: "eid664", tween: [ "transform", "${_challenge}", "scaleX", '1', { fromValue: '-1'}], position: 4825, duration: 175 },
                { id: "eid666", tween: [ "transform", "${_challenge}", "scaleX", '-1', { fromValue: '1'}], position: 5000, duration: 195 },
                { id: "eid668", tween: [ "transform", "${_challenge}", "scaleX", '1', { fromValue: '-1'}], position: 5195, duration: 205 },
                { id: "eid201", tween: [ "style", "${_tablet}", "width", '12.49%', { fromValue: '12.49%'}], position: 2000, duration: 0 },
                { id: "eid2789", tween: [ "color", "${_taright}", "background-color", 'rgba(243,3,3,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(243,3,3,1.00)'}], position: 4542, duration: 0 },
                { id: "eid2788", tween: [ "color", "${_taright}", "background-color", 'rgba(235,128,7,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(243,3,3,1.00)'}], position: 4888, duration: 152 },
                { id: "eid2785", tween: [ "color", "${_taright}", "background-color", 'rgba(105,217,38,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(235,128,7,1.00)'}], position: 5040, duration: 155 },
                { id: "eid545", tween: [ "transform", "${_give}", "scaleX", '0.82873', { fromValue: '-0.82873'}], position: 4445, duration: 185 },
                { id: "eid547", tween: [ "transform", "${_give}", "scaleX", '-0.82873', { fromValue: '0.82873'}], position: 4630, duration: 195 },
                { id: "eid549", tween: [ "transform", "${_give}", "scaleX", '0.82873', { fromValue: '-0.82873'}], position: 4825, duration: 175 },
                { id: "eid6031", tween: [ "style", "${_bomb_bom}", "top", '20.07%', { fromValue: '38.19%'}], position: 16635, duration: 201 },
                { id: "eid6035", tween: [ "style", "${_bomb_bom}", "top", '26.66%', { fromValue: '20.07%'}], position: 16836, duration: 164 },
                { id: "eid5997", tween: [ "style", "${_bomb}", "left", '41.76%', { fromValue: '45.17%'}], position: 15676, duration: 409 },
                { id: "eid1429", tween: [ "style", "${_container}", "opacity", '1', { fromValue: '0'}], position: 8750, duration: 207 },
                { id: "eid1433", tween: [ "style", "${_container}", "opacity", '0', { fromValue: '1'}], position: 9597, duration: 246 },
                { id: "eid2683", tween: [ "subproperty", "${_success}", "filter.drop-shadow.offsetV", '3px', { fromValue: '0px'}], position: 13250, duration: 360 },
                { id: "eid3184", tween: [ "transform", "${_contentsCopy}", "scaleY", '0.97', { fromValue: '0.97'}], position: 10450, duration: 0 },
                { id: "eid6019", tween: [ "style", "${_bomb_bom}", "opacity", '1', { fromValue: '0'}], position: 16635, duration: 201 },
                { id: "eid6091", tween: [ "style", "${_bomb_bom}", "opacity", '0', { fromValue: '1'}], position: 17437, duration: 476 },
                { id: "eid2605", tween: [ "style", "${_maze1}", "opacity", '1', { fromValue: '0'}], position: 5940, duration: 685 },
                { id: "eid2749", tween: [ "style", "${_taright}", "top", '73.31%', { fromValue: '73.31%'}], position: 4542, duration: 0 },
                { id: "eid887", tween: [ "style", "${_Rectangle}", "width", '7.3%', { fromValue: '1%'}], position: 5641, duration: 209 },
                { id: "eid903", tween: [ "style", "${_whatis}", "top", '46.12%', { fromValue: '55.53%'}], position: 5750, duration: 500 },
                { id: "eid2313", tween: [ "style", "${_contents}", "left", '2.92%', { fromValue: '2.92%'}], position: 10450, duration: 0 },
                { id: "eid2424", tween: [ "style", "${_contents}", "left", '2.9%', { fromValue: '2.92%'}], position: 10670, duration: 580 },
                { id: "eid2677", tween: [ "style", "${_success}", "width", '23.6%', { fromValue: '3.09%'}], position: 13250, duration: 360 },
                { id: "eid2687", tween: [ "style", "${_success}", "width", '18.01%', { fromValue: '23.59%'}], position: 13610, duration: 323 },
                { id: "eid2690", tween: [ "style", "${_success}", "width", '20.8%', { fromValue: '18.01%'}], position: 13933, duration: 161 },
                { id: "eid2694", tween: [ "style", "${_success}", "width", '18.61%', { fromValue: '20.8%'}], position: 14094, duration: 147 },
                { id: "eid2862", tween: [ "style", "${_success}", "width", '3.92%', { fromValue: '18.61%'}], position: 14630, duration: 427 },
                { id: "eid2084", tween: [ "style", "${_question}", "height", '6.12%', { fromValue: '6.12%'}], position: 7627, duration: 0 },
                { id: "eid2333", tween: [ "style", "${_contents}", "top", '55%', { fromValue: '56.25%'}], position: 10450, duration: 220 },
                { id: "eid2425", tween: [ "style", "${_contents}", "top", '58.85%', { fromValue: '55%'}], position: 11000, duration: 250 },
                { id: "eid59", tween: [ "style", "${_logo}", "top", '33px', { fromValue: '33px'}], position: 0, duration: 0 },
                { id: "eid4533", tween: [ "style", "${_logob}", "top", '66.35%', { fromValue: '66.35%'}], position: 9415, duration: 0 },
                { id: "eid4665", tween: [ "style", "${_fla}", "top", '37.18%', { fromValue: '37.18%'}], position: 7822, duration: 0 },
                { id: "eid2675", tween: [ "style", "${_success}", "height", '23.49%', { fromValue: '3.06%'}], position: 13250, duration: 360 },
                { id: "eid2685", tween: [ "style", "${_success}", "height", '18%', { fromValue: '23.53%'}], position: 13610, duration: 323 },
                { id: "eid2689", tween: [ "style", "${_success}", "height", '20.75%', { fromValue: '18%'}], position: 13933, duration: 161 },
                { id: "eid2693", tween: [ "style", "${_success}", "height", '18.5%', { fromValue: '20.75%'}], position: 14094, duration: 147 },
                { id: "eid2860", tween: [ "style", "${_success}", "height", '3.9%', { fromValue: '18.5%'}], position: 14630, duration: 427 },
                { id: "eid3182", tween: [ "style", "${_contentsCopy}", "top", '55%', { fromValue: '56.25%'}], position: 10450, duration: 220 },
                { id: "eid3183", tween: [ "style", "${_contentsCopy}", "top", '58.85%', { fromValue: '55%'}], position: 11000, duration: 250 },
                { id: "eid203", tween: [ "style", "${_tablet}", "top", '54.24%', { fromValue: '54.24%'}], position: 2000, duration: 0 },
                { id: "eid5994", tween: [ "style", "${_bomb}", "width", '14.51%', { fromValue: '9.63%'}], position: 15676, duration: 409 },
                { id: "eid537", tween: [ "style", "${_give}", "opacity", '1', { fromValue: '0'}], position: 4445, duration: 185 },
                { id: "eid99", tween: [ "style", "${_home}", "opacity", '1', { fromValue: '0'}], position: 60, duration: 150 },
                { id: "eid4532", tween: [ "style", "${_logob}", "width", '58px', { fromValue: '58px'}], position: 9415, duration: 0 },
                { id: "eid964", tween: [ "style", "${_subtitle}", "opacity", '1', { fromValue: '0'}], position: 6881, duration: 210 },
                { id: "eid3185", tween: [ "transform", "${_contentsCopy}", "scaleX", '0.58919', { fromValue: '0.58919'}], position: 10450, duration: 0 },
                { id: "eid2277", tween: [ "transform", "${_pctext}", "scaleY", '0.75325', { fromValue: '0.75325'}], position: 1250, duration: 0 },
                { id: "eid1421", tween: [ "style", "${_container}", "top", '3.18%', { fromValue: '-74.6%'}], position: 8750, duration: 332 },
                { id: "eid1424", tween: [ "style", "${_container}", "top", '-3.29%', { fromValue: '3.18%'}], position: 9082, duration: 168 },
                { id: "eid1425", tween: [ "style", "${_container}", "top", '-0.12%', { fromValue: '-3.29%'}], position: 9250, duration: 165 },
                { id: "eid1430", tween: [ "style", "${_container}", "top", '-74.6%', { fromValue: '-0.12%'}], position: 9597, duration: 246 },
                { id: "eid865", tween: [ "style", "${_whatdo}", "top", '51.53%', { fromValue: '64.59%'}], position: 5400, duration: 450 },
                { id: "eid885", tween: [ "style", "${_Rectangle}", "opacity", '1', { fromValue: '0'}], position: 5641, duration: 209 },
                { id: "eid659", tween: [ "style", "${_challenge}", "opacity", '1', { fromValue: '0'}], position: 4825, duration: 175 },
                { id: "eid92", tween: [ "style", "${_pc}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 395 },
                { id: "eid161", tween: [ "style", "${_pc}", "top", '35.53%', { fromValue: '35.53%'}], position: 2500, duration: 0 },
                { id: "eid80", tween: [ "style", "${_light12}", "opacity", '0.79674796747967', { fromValue: '0'}], position: 250, duration: 185 },
                { id: "eid81", tween: [ "style", "${_light12}", "opacity", '0', { fromValue: '0.7967479825019836'}], position: 435, duration: 155 },
                { id: "eid84", tween: [ "style", "${_light12}", "opacity", '1', { fromValue: '0'}], position: 590, duration: 160 },
                { id: "eid86", tween: [ "style", "${_light12}", "opacity", '0', { fromValue: '1'}], position: 750, duration: 150 },
                { id: "eid88", tween: [ "style", "${_light12}", "opacity", '1', { fromValue: '0'}], position: 900, duration: 240 },
                { id: "eid505", tween: [ "style", "${_passion}", "left", '15.25%', { fromValue: '12.42%'}], position: 3620, duration: 565 },
                { id: "eid463", tween: [ "transform", "${_passion}", "scaleX", '-0.7', { fromValue: '0.70277'}], position: 3620, duration: 305 },
                { id: "eid465", tween: [ "transform", "${_passion}", "scaleX", '0.70279', { fromValue: '-0.7'}], position: 3925, duration: 260 },
                { id: "eid6006", tween: [ "style", "${_boom_bg}", "opacity", '1', { fromValue: '0'}], position: 15676, duration: 409 },
                { id: "eid6088", tween: [ "style", "${_boom_bg}", "opacity", '0', { fromValue: '1'}], position: 17437, duration: 476 },
                { id: "eid118", tween: [ "style", "${_mouse}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 500 },
                { id: "eid2751", tween: [ "style", "${_taright}", "opacity", '1', { fromValue: '0'}], position: 4542, duration: 88 },
                { id: "eid2752", tween: [ "style", "${_taright}", "opacity", '0', { fromValue: '1'}], position: 4630, duration: 120 },
                { id: "eid2754", tween: [ "style", "${_taright}", "opacity", '1', { fromValue: '0'}], position: 4750, duration: 138 },
                { id: "eid167", tween: [ "style", "${_pc}", "left", '34.75%', { fromValue: '34.75%'}], position: 2500, duration: 0 },
                { id: "eid464", tween: [ "transform", "${_passion}", "scaleY", '0.68738', { fromValue: '0.68738'}], position: 3925, duration: 0 },
                { id: "eid4531", tween: [ "style", "${_logob}", "height", '16px', { fromValue: '16px'}], position: 9415, duration: 0 },
                { id: "eid6338", tween: [ "style", "${_logolo}", "opacity", '0.30894267437904', { fromValue: '0.5853660106658936'}], position: 8325, duration: 175 },
                { id: "eid2659", tween: [ "style", "${_success}", "opacity", '1', { fromValue: '0'}], position: 13250, duration: 360 },
                { id: "eid2859", tween: [ "style", "${_success}", "opacity", '0', { fromValue: '1'}], position: 14630, duration: 427 },
                { id: "eid197", tween: [ "style", "${_tablet}", "height", '20.59%', { fromValue: '20.59%'}], position: 2000, duration: 0 },
                { id: "eid2543", tween: [ "transform", "${_contents}", "scaleY", '0.97', { fromValue: '0.97'}], position: 10450, duration: 0 },
                { id: "eid1977", tween: [ "style", "${_question}", "opacity", '0.79674796747967', { fromValue: '0'}], position: 6169, duration: 141 },
                { id: "eid1979", tween: [ "style", "${_question}", "opacity", '0', { fromValue: '0.7967479825019836'}], position: 6310, duration: 145 },
                { id: "eid1981", tween: [ "style", "${_question}", "opacity", '0.79674796747967', { fromValue: '0'}], position: 6455, duration: 170 },
                { id: "eid1983", tween: [ "style", "${_question}", "opacity", '0', { fromValue: '0.7967479825019836'}], position: 6625, duration: 157 },
                { id: "eid1985", tween: [ "style", "${_question}", "opacity", '0.79674796747967', { fromValue: '0'}], position: 6782, duration: 171 },
                { id: "eid1987", tween: [ "style", "${_question}", "opacity", '0', { fromValue: '0.7967479825019836'}], position: 6953, duration: 151 },
                { id: "eid1989", tween: [ "style", "${_question}", "opacity", '0.80487804878049', { fromValue: '0'}], position: 7104, duration: 172 },
                { id: "eid1991", tween: [ "style", "${_question}", "opacity", '0', { fromValue: '0.8048779964447021'}], position: 7276, duration: 183 },
                { id: "eid1993", tween: [ "style", "${_question}", "opacity", '0.80487804878049', { fromValue: '0'}], position: 7459, duration: 168 },
                { id: "eid2709", tween: [ "style", "${_question}", "opacity", '0', { fromValue: '0.8048779964447021'}], position: 7627, duration: 238 },
                { id: "eid2710", tween: [ "style", "${_question}", "opacity", '1', { fromValue: '0'}], position: 7865, duration: 232 },
                { id: "eid2712", tween: [ "style", "${_question}", "opacity", '0', { fromValue: '1'}], position: 8097, duration: 228 },
                { id: "eid2714", tween: [ "style", "${_question}", "opacity", '1', { fromValue: '0'}], position: 8325, duration: 175 },
                { id: "eid6026", tween: [ "style", "${_bomb_bom}", "height", '52.1%', { fromValue: '14.24%'}], position: 16635, duration: 201 },
                { id: "eid6034", tween: [ "style", "${_bomb_bom}", "height", '42.36%', { fromValue: '52.1%'}], position: 16836, duration: 164 },
                { id: "eid74", tween: [ "style", "${_Stage}", "height", '99.98%', { fromValue: '99.98%'}], position: 0, duration: 0 },
                { id: "eid2375", tween: [ "style", "${_passion}", "top", '36.6%', { fromValue: '36.6%'}], position: 3620, duration: 0 },
                { id: "eid917", tween: [ "style", "${_Rectangle4}", "width", '12.5%', { fromValue: '1.65%'}], position: 6000, duration: 250 },
                { id: "eid75", tween: [ "style", "${_Stage}", "width", '100%', { fromValue: '100%'}], position: 0, duration: 0 },
                { id: "eid2977", tween: [ "style", "${_logo2}", "left", '67.53%', { fromValue: '76.06%'}], position: 8104, duration: 978 },
                { id: "eid2980", tween: [ "style", "${_logo2}", "left", '70.13%', { fromValue: '67.53%'}], position: 9082, duration: 83 },
                { id: "eid4481", tween: [ "style", "${_logo2}", "left", '73.88%', { fromValue: '70.13%'}], position: 9165, duration: 250 },
                { id: "eid5990", tween: [ "style", "${_bomb}", "opacity", '1', { fromValue: '0'}], position: 15676, duration: 409 },
                { id: "eid6094", tween: [ "style", "${_bomb}", "opacity", '0', { fromValue: '1'}], position: 17437, duration: 476 },
                { id: "eid5447", tween: [ "style", "${_Rectangle5}", "opacity", '0.65853667501512', { fromValue: '0'}], position: 13250, duration: 360 },
                { id: "eid5450", tween: [ "style", "${_Rectangle5}", "opacity", '0', { fromValue: '0.658536970615387'}], position: 14630, duration: 427 },
                { id: "eid496", tween: [ "style", "${_enjoy2}", "opacity", '1', { fromValue: '0'}], position: 4000, duration: 250 },
                { id: "eid3169", tween: [ "style", "${_logob}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 395 },
                { id: "eid1605", tween: [ "style", "${_semo}", "top", '99.37%', { fromValue: '99.37%'}], position: 9415, duration: 0 },
                { id: "eid2676", tween: [ "style", "${_success}", "left", '37.83%', { fromValue: '57.67%'}], position: 13250, duration: 360 },
                { id: "eid2688", tween: [ "style", "${_success}", "left", '40.75%', { fromValue: '37.83%'}], position: 13610, duration: 323 },
                { id: "eid2691", tween: [ "style", "${_success}", "left", '39.25%', { fromValue: '40.75%'}], position: 13933, duration: 161 },
                { id: "eid2695", tween: [ "style", "${_success}", "left", '40.5%', { fromValue: '39.25%'}], position: 14094, duration: 147 },
                { id: "eid2861", tween: [ "style", "${_success}", "left", '54.84%', { fromValue: '40.5%'}], position: 14630, duration: 427 },
                { id: "eid160", tween: [ "style", "${_pc}", "height", '39.02%', { fromValue: '39.02%'}], position: 2500, duration: 0 },
                { id: "eid374", tween: [ "style", "${_dream2}", "opacity", '1', { fromValue: '0'}], position: 2750, duration: 250 },
                { id: "eid3186", tween: [ "style", "${_contentsCopy}", "opacity", '1', { fromValue: '0'}], position: 10450, duration: 220 },
                { id: "eid3187", tween: [ "style", "${_contentsCopy}", "opacity", '0', { fromValue: '1'}], position: 11000, duration: 250 },
                { id: "eid5903", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_on2}', ['st1'] ], ""], position: 0 },
                { id: "eid5920", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_one1}', ['start02'] ], ""], position: 0 },
                { id: "eid5937", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_fla}', ['start1'] ], ""], position: 0 },
                { id: "eid5938", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_tet}', ['start3'] ], ""], position: 0 }            ]
        }
    }
},
"light": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '250px', '167px', 'auto', 'auto'],
                    id: 'light1',
                    opacity: 0.82113820023653,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/light1.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_light1}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0.82113820023653'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '167px'],
                ["style", "width", '250px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"btn1": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0.1%', '0.8%', '99.9%', '100.6%', 'auto', 'auto'],
                    id: 'sbm',
                    cursor: ['pointer'],
                    type: 'group',
                    c: [
                    {
                        rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                        id: 'Rectangle6',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        type: 'rect',
                        fill: ['rgba(231,180,29,1.00)']
                    },
                    {
                        font: ['Arial, Helvetica, sans-serif', 20, 'rgba(255,255,255,1)', '300', 'none', 'normal'],
                        type: 'text',
                        id: 'sumi',
                        text: 'submit',
                        align: 'left',
                        rect: ['19.1%', '6.7%', 'auto', 'auto', 'auto', 'auto']
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '29px'],
                ["style", "width", '89px']
            ],
            "${_sumi}": [
                ["style", "top", '6.67%'],
                ["style", "left", '19.1%'],
                ["style", "font-size", '20px']
            ],
            "${_sbm}": [
                ["style", "top", '-0.03%'],
                ["style", "height", '101.21%'],
                ["style", "left", '0.01%'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '99.78%']
            ],
            "${_Rectangle6}": [
                ["style", "top", '0%'],
                ["color", "background-color", 'rgba(231,180,29,1.00)'],
                ["style", "left", '0%'],
                ["style", "height", '100%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"one1": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'ellipse',
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    rect: ['2148%', '-0.5%', '120%', '119%', 'auto', 'auto'],
                    id: 'gonginfo',
                    stroke: [1, 'rgb(0, 0, 0)', 'none'],
                    cursor: ['pointer'],
                    fill: ['rgba(95,255,0,0.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_gonginfo}": [
                ["color", "background-color", 'rgba(241,143,32,1.00)'],
                ["style", "border-style", 'none'],
                ["style", "left", '0%'],
                ["style", "width", '100.8%'],
                ["style", "top", '0.4%'],
                ["style", "border-width", '1px'],
                ["style", "height", '100.3%'],
                ["color", "border-color", 'rgba(219,65,38,1.00)'],
                ["style", "opacity", '0'],
                ["style", "cursor", 'pointer']
            ],
            "${symbolSelector}": [
                ["style", "height", '10px'],
                ["style", "width", '10px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 7930,
            autoPlay: true,
            labels: {
                "start02": 0,
                "roof": 5895
            },
            timeline: [
                { id: "eid2822", tween: [ "color", "${_gonginfo}", "background-color", 'rgba(241,143,32,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(241,143,32,1.00)'}], position: 5500, duration: 0 },
                { id: "eid2815", tween: [ "style", "${_gonginfo}", "opacity", '1', { fromValue: '0'}], position: 5500, duration: 395 },
                { id: "eid4355", tween: [ "style", "${_gonginfo}", "opacity", '0', { fromValue: '1'}], position: 5895, duration: 527 },
                { id: "eid4357", tween: [ "style", "${_gonginfo}", "opacity", '1', { fromValue: '0'}], position: 6422, duration: 494 },
                { id: "eid4359", tween: [ "style", "${_gonginfo}", "opacity", '0', { fromValue: '1'}], position: 6916, duration: 526 },
                { id: "eid4361", tween: [ "style", "${_gonginfo}", "opacity", '1', { fromValue: '0'}], position: 7442, duration: 488 },
                { id: "eid2818", tween: [ "style", "${_gonginfo}", "left", '0%', { fromValue: '0%'}], position: 5500, duration: 0 }            ]
        }
    }
},
"on2": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'ellipse',
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    rect: ['-1.7%', '-0.4%', '100%', '99.2%', 'auto', 'auto'],
                    id: 'cominfo',
                    stroke: [1, 'rgb(0, 0, 0)', 'solid'],
                    cursor: ['pointer'],
                    fill: ['rgba(95,255,0,0.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_cominfo}": [
                ["color", "background-color", 'rgba(95,255,0,0.00)'],
                ["style", "border-style", 'solid'],
                ["style", "left", '0.34%'],
                ["style", "width", '84%'],
                ["style", "top", '0.33%'],
                ["style", "opacity", '0'],
                ["style", "height", '83.58%'],
                ["color", "border-color", 'rgba(219,65,38,1.00)'],
                ["style", "border-width", '1px'],
                ["style", "cursor", 'pointer']
            ],
            "${symbolSelector}": [
                ["style", "height", '12px'],
                ["style", "width", '12px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 9097,
            autoPlay: true,
            labels: {
                "st1": 0,
                "roof2": 6625
            },
            timeline: [
                { id: "eid2810", tween: [ "style", "${_cominfo}", "opacity", '1', { fromValue: '0'}], position: 6230, duration: 395 },
                { id: "eid4395", tween: [ "style", "${_cominfo}", "opacity", '0', { fromValue: '1'}], position: 6625, duration: 562 },
                { id: "eid4397", tween: [ "style", "${_cominfo}", "opacity", '1', { fromValue: '0'}], position: 7187, duration: 617 },
                { id: "eid4398", tween: [ "style", "${_cominfo}", "opacity", '0', { fromValue: '1'}], position: 7804, duration: 652 },
                { id: "eid4399", tween: [ "style", "${_cominfo}", "opacity", '1', { fromValue: '0.000000'}], position: 8456, duration: 641 }            ]
        }
    }
},
"fla": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    id: 'flag',
                    rect: ['-1.4%', '-0.8%', '98.6%', '99.1%', 'auto', 'auto'],
                    cursor: ['pointer'],
                    fill: ['rgba(0,0,0,0)', 'images/flag.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '30px'],
                ["style", "width", '28px']
            ],
            "${_flag}": [
                ["style", "top", '0.03%'],
                ["style", "left", '-0.14%'],
                ["style", "height", '100.3%'],
                ["style", "opacity", '0'],
                ["style", "cursor", 'pointer'],
                ["style", "width", '100.29%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 10093,
            autoPlay: true,
            labels: {
                "start1": 0,
                "roof3": 7807
            },
            timeline: [
                { id: "eid4612", tween: [ "style", "${_flag}", "width", '118.5%', { fromValue: '100.29%'}], position: 7807, duration: 527 },
                { id: "eid4616", tween: [ "style", "${_flag}", "width", '100%', { fromValue: '118.5%'}], position: 8334, duration: 594 },
                { id: "eid4620", tween: [ "style", "${_flag}", "width", '119.11%', { fromValue: '100%'}], position: 8928, duration: 572 },
                { id: "eid4624", tween: [ "style", "${_flag}", "width", '100%', { fromValue: '119.11%'}], position: 9500, duration: 593 },
                { id: "eid2613", tween: [ "style", "${_flag}", "opacity", '1', { fromValue: '0'}], position: 7459, duration: 348 },
                { id: "eid2626", tween: [ "style", "${_flag}", "opacity", '1', { fromValue: '1'}], position: 7807, duration: 0 },
                { id: "eid2625", tween: [ "style", "${_flag}", "opacity", '1', { fromValue: '1'}], position: 10093, duration: 0 },
                { id: "eid4611", tween: [ "style", "${_flag}", "height", '117.5%', { fromValue: '100.3%'}], position: 7807, duration: 527 },
                { id: "eid4615", tween: [ "style", "${_flag}", "height", '99.77%', { fromValue: '117.5%'}], position: 8334, duration: 594 },
                { id: "eid4619", tween: [ "style", "${_flag}", "height", '118.1%', { fromValue: '99.77%'}], position: 8928, duration: 572 },
                { id: "eid4623", tween: [ "style", "${_flag}", "height", '99.33%', { fromValue: '118.1%'}], position: 9500, duration: 593 }            ]
        }
    }
},
"pcnemo": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '331px', '218px', 'auto', 'auto'],
                    id: 'Rectangle5',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,0.40)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle5}": [
                ["color", "background-color", 'rgba(255,255,255,0.40)'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '25.65%'],
                ["style", "width", '27.59%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 8612,
            autoPlay: true,
            labels: {
                "roof3": 7425
            },
            timeline: [
                { id: "eid5072", tween: [ "style", "${_Rectangle5}", "opacity", '0.15447154471545', { fromValue: '1'}], position: 7425, duration: 575 },
                { id: "eid5074", tween: [ "style", "${_Rectangle5}", "opacity", '1', { fromValue: '0.154472'}], position: 8000, duration: 612 }            ]
        }
    }
},
"tet": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'text',
                    rect: ['4.4%', '156.5%', '41.7%', '81.7%', 'auto', 'auto'],
                    id: 'mc',
                    text: 'Please Mouse click.',
                    align: 'left',
                    font: ['Arial, Helvetica, sans-serif', 11, 'rgba(115,132,143,1.00)', '500', 'none', 'normal']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_mc}": [
                ["style", "top", '0.27%'],
                ["style", "width", '100.02%'],
                ["style", "height", '100.04%'],
                ["style", "opacity", '0'],
                ["color", "color", 'rgba(115,132,143,1)'],
                ["style", "font-weight", '500'],
                ["style", "left", '-0.02%'],
                ["style", "font-size", '11px']
            ],
            "${symbolSelector}": [
                ["style", "height", '3.06%'],
                ["style", "width", '19.67%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 10937,
            autoPlay: true,
            labels: {
                "start3": 0,
                "roof4": 9415
            },
            timeline: [
                { id: "eid4559", tween: [ "style", "${_mc}", "width", '99.67%', { fromValue: '100.02%'}], position: 8250, duration: 1165 },
                { id: "eid5170", tween: [ "color", "${_mc}", "color", 'rgba(192,28,44,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(115,132,143,1)'}], position: 10171, duration: 766 },
                { id: "eid3139", tween: [ "style", "${_mc}", "opacity", '1', { fromValue: '0'}], position: 8104, duration: 146 },
                { id: "eid5117", tween: [ "style", "${_mc}", "opacity", '0', { fromValue: '1'}], position: 9415, duration: 756 },
                { id: "eid5119", tween: [ "style", "${_mc}", "opacity", '1', { fromValue: '0.00011100000119768083'}], position: 10171, duration: 766 },
                { id: "eid3199", tween: [ "style", "${_mc}", "height", '100%', { fromValue: '100%'}], position: 8250, duration: 0 }            ]
        }
    }
},
"logolo": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: true,
    content: {
            dom: [
                {
                    id: 'logo_ro',
                    type: 'image',
                    rect: ['0px', '0px', '112px', '116px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/logo_ro.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '13.65%'],
                ["style", "width", '9.34%']
            ],
            "${_logo_ro}": [
                ["style", "top", '6px'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '84px'],
                ["style", "opacity", '0'],
                ["style", "left", '4px'],
                ["style", "width", '82px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 10500,
            autoPlay: true,
            labels: {
                "start5": 8325
            },
            timeline: [
                { id: "eid6217", tween: [ "style", "${_logo_ro}", "height", '84px', { fromValue: '84px'}], position: 8325, duration: 0 },
                { id: "eid6219", tween: [ "style", "${_logo_ro}", "left", '15px', { fromValue: '4px'}], position: 8104, duration: 221 },
                { id: "eid6220", tween: [ "style", "${_logo_ro}", "top", '16px', { fromValue: '6px'}], position: 8104, duration: 221 },
                { id: "eid6218", tween: [ "style", "${_logo_ro}", "width", '82px', { fromValue: '82px'}], position: 8325, duration: 0 },
                { id: "eid6113", tween: [ "style", "${_logo_ro}", "opacity", '1', { fromValue: '0'}], position: 8104, duration: 221 },
                { id: "eid6115", tween: [ "transform", "${_logo_ro}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 8325, duration: 2175 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-11445201");
