(this["webpackJsonpcolors-app"]=this["webpackJsonpcolors-app"]||[]).push([[0],{116:function(e,a,o){e.exports=o(188)},121:function(e,a,o){},131:function(e,a,o){},185:function(e,a,o){},188:function(e,a,o){"use strict";o.r(a);var r=o(0),n=o.n(r),l=o(5),c=o.n(l),t=o(28),m=(o(121),o(103)),i=o(40),s=function(e){var a=e.background,o=e.name,l=e.moreUrl,c=e.showLink,s=Object(r.useState)(!1),u=Object(t.a)(s,2),d=u[0],f=u[1];return n.a.createElement(m.CopyToClipboard,{text:a,onCopy:function(){return f(!0),void setTimeout((function(){return f(!1)}),1500)}},n.a.createElement("div",{className:"ColorBox",style:{background:a}},n.a.createElement("div",{className:"copy-overlay ".concat(d&&"show"),style:{background:a}}),n.a.createElement("div",{className:"copy-msg ".concat(d&&"show")},n.a.createElement("h1",null,"Copied"),n.a.createElement("p",null,a)),n.a.createElement("div",{className:"copy-container"},n.a.createElement("div",{className:"box-content"},n.a.createElement("span",null,o)),n.a.createElement("button",{className:"copy-btn"},"Copy")),c&&n.a.createElement(i.b,{to:l,onClick:function(e){return e.stopPropagation()}},n.a.createElement("span",{className:"see-more"},"More"))))},u=(o(130),o(131),o(109)),d=(o(185),o(222)),f=o(225),p=o(224),b=o(221),h=o(108),g=o.n(h),E=function(e){var a=e.level,o=e.changeLevel,l=e.handleChange,c=Object(r.useState)("hex"),m=Object(t.a)(c,2),s=m[0],h=m[1],E=Object(r.useState)(!1),v=Object(t.a)(E,2),C=v[0],y=v[1];return n.a.createElement("header",{className:"Navbar"},n.a.createElement("div",{className:"logo"},n.a.createElement(i.b,{to:"/"},"ReactColorPicker")),n.a.createElement("div",{className:"slider-container"},n.a.createElement("span",null,"Level: ",a),n.a.createElement("div",{className:"Slider"},n.a.createElement(u.a,{defaultValue:a,min:100,max:900,onAfterChange:function(e){return o(e)},step:100}))),n.a.createElement("div",{className:"select-container"},n.a.createElement(d.a,{value:s,onChange:function(e){return function(e){y(!0),h(e.target.value),l(e)}(e)}},n.a.createElement(f.a,{value:"hex"},"Hex - #ffffff"),n.a.createElement(f.a,{value:"rgb"},"Rgb - (255,255,255)"),n.a.createElement(f.a,{value:"rgba"},"Rgba - (255,255,255,1.0)"))),n.a.createElement(p.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:C,autoHideDuration:3e3,message:n.a.createElement("span",{id:"message-id"},"Format Changed To ",s.toUpperCase()),ContentProps:{"aria-describedby":"message-id"},onClose:function(){return y(!1)},action:[n.a.createElement(b.a,{color:"inherit",key:"close","aria-label":"close",onClick:function(){return y(!1)}},n.a.createElement(g.a,null))]}))},v=function(e){var a=e.Paltette,o=Object(r.useState)(500),l=Object(t.a)(o,2),c=l[0],m=l[1],i=Object(r.useState)("hex"),u=Object(t.a)(i,2),d=u[0],f=u[1],p=a.colors[c].map((function(e){return n.a.createElement(s,{background:e[d],key:e.name,name:e.name,showLink:!0,moreUrl:"/palette/".concat(a.id,"/").concat(e.id)})}));return n.a.createElement("div",{className:"Palette"},n.a.createElement(E,{level:c,changeLevel:function(e){m(e)},handleChange:function(e){f(e.target.value)}}),n.a.createElement("div",{className:"Palette-colors"},p),n.a.createElement("footer",{className:"Palette-footer"},a.paletteName,n.a.createElement("span",{className:"emoji"},a.emoji)))},C=[{paletteName:"Material UI Colors",id:"material-ui-colors",emoji:"\ud83c\udfa8",colors:[{name:"red",color:"#F44336"},{name:"pink",color:"#E91E63"},{name:"purple",color:"#9C27B0"},{name:"deeppurple",color:"#673AB7"},{name:"indigo",color:"#3F51B5"},{name:"blue",color:"#2196F3"},{name:"lightblue",color:"#03A9F4"},{name:"cyan",color:"#00BCD4"},{name:"teal",color:"#009688"},{name:"green",color:"#4CAF50"},{name:"lightgreen",color:"#8BC34A"},{name:"lime",color:"#CDDC39"},{name:"yellow",color:"#FFEB3B"},{name:"amber",color:"#FFC107"},{name:"orange",color:"#FF9800"},{name:"deeporange",color:"#FF5722"},{name:"brown",color:"#795548"},{name:"grey",color:"#9E9E9E"},{name:"bluegrey",color:"#607D8B"}]},{paletteName:"Flat UI Colors v1",id:"flat-ui-colors-v1",emoji:"\ud83e\udd19",colors:[{name:"Turquoise",color:"#1abc9c"},{name:"Emerald",color:"#2ecc71"},{name:"PeterRiver",color:"#3498db"},{name:"Amethyst",color:"#9b59b6"},{name:"WetAsphalt",color:"#34495e"},{name:"GreenSea",color:"#16a085"},{name:"Nephritis",color:"#27ae60"},{name:"BelizeHole",color:"#2980b9"},{name:"Wisteria",color:"#8e44ad"},{name:"MidnightBlue",color:"#2c3e50"},{name:"SunFlower",color:"#f1c40f"},{name:"Carrot",color:"#e67e22"},{name:"Alizarin",color:"#e74c3c"},{name:"Clouds",color:"#ecf0f1"},{name:"Concrete",color:"#95a5a6"},{name:"Orange",color:"#f39c12"},{name:"Pumpkin",color:"#d35400"},{name:"Pomegranate",color:"#c0392b"},{name:"Silver",color:"#bdc3c7"},{name:"Asbestos",color:"#7f8c8d"}]},{paletteName:"Flat UI Colors Dutch",id:"flat-ui-colors-dutch",emoji:"\ud83c\uddf3\ud83c\uddf1",colors:[{name:"Sunflower",color:"#FFC312"},{name:"Energos",color:"#C4E538"},{name:"BlueMartina",color:"#12CBC4"},{name:"LavenderRose",color:"#FDA7DF"},{name:"BaraRose",color:"#ED4C67"},{name:"RadiantYellow",color:"#F79F1F"},{name:"AndroidGreen",color:"#A3CB38"},{name:"MediterraneanSea",color:"#1289A7"},{name:"LavenderTea",color:"#D980FA"},{name:"VerryBerry",color:"#B53471"},{name:"PuffinsBill",color:"#EE5A24"},{name:"PixelatedGrass",color:"#009432"},{name:"MerchantMarineBlue",color:"#0652DD"},{name:"ForgottenPurple",color:"#9980FA"},{name:"HollyHock",color:"#833471"},{name:"RedPigment",color:"#EA2027"},{name:"TurkishAqua",color:"#006266"},{name:"20000LeaguesUnderTheSea",color:"#1B1464"},{name:"CircumorbitalRing",color:"#5758BB"},{name:"MagentaPurple",color:"#6F1E51"}]},{paletteName:"Flat UI Colors American",id:"flat-ui-colors-american",emoji:"\ud83c\uddfa\ud83c\uddf8",colors:[{name:"LightGreenishBlue",color:"#55efc4"},{name:"FadedPoster",color:"#81ecec"},{name:"GreenDarnerTail",color:"#74b9ff"},{name:"ShyMoment",color:"#a29bfe"},{name:"CityLights",color:"#dfe6e9"},{name:"MintLeaf",color:"#00b894"},{name:"RobinsEggBlue",color:"#00cec9"},{name:"ElectronBlue",color:"#0984e3"},{name:"ExodusFruit",color:"#6c5ce7"},{name:"SoothingBreeze",color:"#b2bec3"},{name:"SourLemon",color:"#ffeaa7"},{name:"FirstDate",color:"#fab1a0"},{name:"PinkGlamour",color:"#ff7675"},{name:"Pico8Pink",color:"#fd79a8"},{name:"AmericanRiver",color:"#636e72"},{name:"BrightYarrow",color:"#fdcb6e"},{name:"OrangeVille",color:"#e17055"},{name:"Chi-Gong",color:"#d63031"},{name:"PrunusAvium",color:"#e84393"},{name:"DraculaOrchid",color:"#2d3436"}]},{paletteName:"Flat UI Colors Aussie",id:"flat-ui-colors-aussie",emoji:"\ud83c\udde6\ud83c\uddfa",colors:[{name:"Beekeeper",color:"#f6e58d"},{name:"SpicedNectarine",color:"#ffbe76"},{name:"PinkGlamour",color:"#ff7979"},{name:"JuneBud",color:"#badc58"},{name:"CoastalBreeze",color:"#dff9fb"},{name:"Turbo",color:"#f9ca24"},{name:"QuinceJelly",color:"#f0932b"},{name:"CarminePink",color:"#eb4d4b"},{name:"PureApple",color:"#6ab04c"},{name:"HintOfIcePack",color:"#c7ecee"},{name:"MiddleBlue",color:"#7ed6df"},{name:"Heliotrope",color:"#e056fd"},{name:"ExodusFruit",color:"#686de0"},{name:"DeepKoamaru",color:"#30336b"},{name:"SoaringEagle",color:"#95afc0"},{name:"GreenlandGreen",color:"#22a6b3"},{name:"SteelPink",color:"#be2edd"},{name:"Blurple",color:"#4834d4"},{name:"DeepCove",color:"#130f40"},{name:"WizardGrey",color:"#535c68"}]},{paletteName:"Flat UI Colors British",id:"flat-ui-colors-british",emoji:"\ud83c\uddec\ud83c\udde7",colors:[{name:"ProtossPylon",color:"#00a8ff"},{name:"Periwinkle",color:"#9c88ff"},{name:"Rise-N-Shine",color:"#fbc531"},{name:"DownloadProgress",color:"#4cd137"},{name:"Seabrook",color:"#487eb0"},{name:"VanaDylBlue",color:"#0097e6"},{name:"MattPurple",color:"#8c7ae6"},{name:"NanohanachaGold",color:"#e1b12c"},{name:"SkirretGreen",color:"#44bd32"},{name:"Naval",color:"#40739e"},{name:"NasturcianFlower",color:"#e84118"},{name:"LynxWhite",color:"#f5f6fa"},{name:"BlueberrySoda",color:"#7f8fa6"},{name:"MazarineBlue",color:"#273c75"},{name:"BlueNights",color:"#353b48"},{name:"HarleyOrange",color:"#c23616"},{name:"HintOfPensive",color:"#dcdde1"},{name:"ChainGangGrey",color:"#718093"},{name:"PicoVoid",color:"#192a56"},{name:"ElectroMagnetic",color:"#2f3640"}]},{paletteName:"Flat UI Colors Spanish",id:"flat-ui-colors-spanish",emoji:"\ud83c\uddea\ud83c\uddf8",colors:[{name:"JacksonsPurple",color:"#40407a"},{name:"C64Purple",color:"#706fd3"},{name:"SwanWhite",color:"#f7f1e3"},{name:"SummerSky",color:"#34ace0"},{name:"CelestialGreen",color:"#33d9b2"},{name:"LuckyPoint",color:"#2c2c54"},{name:"Liberty",color:"#474787"},{name:"HotStone",color:"#aaa69d"},{name:"DevilBlue",color:"#227093"},{name:"PalmSpringsSplash",color:"#218c74"},{name:"FlourescentRed",color:"#ff5252"},{name:"SyntheticPumpkin",color:"#ff793f"},{name:"CrocodileTooth",color:"#d1ccc0"},{name:"MandarinSorbet",color:"#ffb142"},{name:"SpicedButterNut",color:"#ffda79"},{name:"EyeOfNewt",color:"#b33939"},{name:"ChileanFire",color:"#cd6133"},{name:"GreyPorcelain",color:"#84817a"},{name:"AlamedaOchre",color:"#cc8e35"},{name:"Desert",color:"#ccae62"}]},{paletteName:"Flat UI Colors Indian",id:"flat-ui-colors-indian",emoji:"\ud83c\uddee\ud83c\uddf3",colors:[{name:"OrchidOrange",color:"#FEA47F"},{name:"SpiroDiscoBall",color:"#25CCF7"},{name:"HoneyGlow",color:"#EAB543"},{name:"SweetGarden",color:"#55E6C1"},{name:"FallingStar",color:"#CAD3C8"},{name:"RichGardenia",color:"#F97F51"},{name:"ClearChill",color:"#1B9CFC"},{name:"WhitePepper",color:"#F8EFBA"},{name:"Keppel",color:"#58B19F"},{name:"ShipsOfficer",color:"#2C3A47"},{name:"FieryFuchsia",color:"#B33771"},{name:"BlueBell",color:"#3B3B98"},{name:"GeorgiaPeach",color:"#FD7272"},{name:"OasisStream",color:"#9AECDB"},{name:"BrightUbe",color:"#D6A2E8"},{name:"MagentaPurple",color:"#6D214F"},{name:"EndingNavyBlue",color:"#182C61"},{name:"SasquatchSocks",color:"#FC427B"},{name:"PineGlade",color:"#BDC581"},{name:"HighlighterLavender",color:"#82589F"}]},{paletteName:"Flat UI Colors French",id:"flat-ui-colors-french",emoji:"\ud83c\uddeb\ud83c\uddf7",colors:[{name:"FlatFlesh",color:"#fad390"},{name:"MelonMelody",color:"#f8c291"},{name:"Livid",color:"#6a89cc"},{name:"Spray",color:"#82ccdd"},{name:"ParadiseGreen",color:"#b8e994"},{name:"SquashBlossom",color:"#f6b93b"},{name:"MandarinRed",color:"#e55039"},{name:"AzraqBlue",color:"#4a69bd"},{name:"Dupain",color:"#60a3bc"},{name:"AuroraGreen",color:"#78e08f"},{name:"IcelandPoppy",color:"#fa983a"},{name:"TomatoRed",color:"#eb2f06"},{name:"YueGuangBlue",color:"#1e3799"},{name:"GoodSamaritan",color:"#3c6382"},{name:"Waterfall",color:"#38ada9"},{name:"CarrotOrange",color:"#e58e26"},{name:"JalapenoRed",color:"#b71540"},{name:"DarkSapphire",color:"#0c2461"},{name:"ForestBlues",color:"#0a3d62"},{name:"ReefEncounter",color:"#079992"}]}],y=o(58),F=o.n(y),B=[50,100,200,300,400,500,600,700,800,900];function N(e){var a={paletteName:e.paletteName,id:e.id,emoji:e.emoji,colors:{}},o=!0,r=!1,n=void 0;try{for(var l,c=B[Symbol.iterator]();!(o=(l=c.next()).done);o=!0){var t=l.value;a.colors[t]=[]}}catch(E){r=!0,n=E}finally{try{o||null==c.return||c.return()}finally{if(r)throw n}}var m,i,s=!0,u=!1,d=void 0;try{for(var f,p=e.colors[Symbol.iterator]();!(s=(f=p.next()).done);s=!0){var b=f.value,h=(m=b.color,i=10,F.a.scale(function(e){return[F()(e).darken(1.4).hex(),e,"#fff"]}(m)).mode("lab").colors(i)).reverse();for(var g in h)a.colors[B[g]].push({name:"".concat(b.name," ").concat(B[g]),id:b.name.toLowerCase().replace(/ /g,"-"),hex:h[g],rgb:F()(h[g]).css(),rgba:F()(h[g]).css().replace("rgb","rgba").replace(")",",1.0)")})}}catch(E){u=!0,d=E}finally{try{s||null==p.return||p.return()}finally{if(u)throw d}}return a}var P=o(37),S=o(189),k=Object(S.a)({root:{backgroundColor:"white",border:"1px solid black",borderRadius:"5px",padding:"0.5rem",position:"relative",overflow:"hidden","&:hover":{cursor:"pointer"}},colors:{backgroundColor:"color",height:"150px",width:"100%",borderRadius:"5px",overflow:"hidden"},title:{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"0",color:"black",paddingTop:"0.5rem",fontSize:"1rem",position:"relative"},emoji:{marginLeft:"0.5rem",fontSize:"1.5rem"},miniColor:{height:"25%",width:"20%",display:"inline-block",margin:"0 auto",marginBottom:"-3.5px"}})((function(e){var a=e.classes,o=e.paletteName,r=e.emoji,l=e.colors,c=e.handleClick;e.id;return n.a.createElement("div",{className:a.root,onClick:c},n.a.createElement("div",{className:a.colors},l.map((function(e){return n.a.createElement("div",{className:a.miniColor,style:{backgroundColor:e.color},key:e.name})}))),n.a.createElement("h5",{className:a.title},o," ",n.a.createElement("span",{className:a.emoji},r)))})),x=Object(S.a)({root:{backgroundColor:"blue",height:"100vh",display:"flex",alignItems:"flex-start",justifyContent:"center"},container:{width:"50%",display:"flex",alignItems:"flex-start",flexDirection:"column",flexWrap:"wrap"},nav:{display:"flex",width:"100%",justifyContent:"space-between",color:"white"},palette:{boxSizing:"border-box",width:"100%",display:"grid",gridTemplateColumns:"repeat(3,30%)",gridGap:"5%"}})((function(e){var a=e.palettes,o=e.classes,r=e.history;return n.a.createElement("div",{className:o.root},n.a.createElement("div",{className:o.container},n.a.createElement("nav",{className:o.nav},n.a.createElement("h1",null,"React Colors")),n.a.createElement("div",{className:o.palette},a.map((function(e){return n.a.createElement(k,Object.assign({},e,{handleClick:function(){return a=e.id,void r.push("/palette/".concat(a));var a},key:e.id}))})))))})),j=function(e){var a=e.Paltette,o=e.colorId,l=Object(r.useState)(function(e,a){var o=[],r=e.colors;for(var n in r)o=o.concat(r[n].filter((function(e){return e.id===a})));return o.slice(1)}(a,o)),c=Object(t.a)(l,2),m=c[0];c[1];return n.a.createElement("div",{className:"Palette"},n.a.createElement("h1",null,"Single Color Palette"),n.a.createElement("div",{className:"Palette-colors"},m.map((function(e){return n.a.createElement(s,{background:e.hex,key:e.name,name:e.name,moreUrl:"/",showLink:!1})}))))};c.a.render(n.a.createElement(i.a,{basename:"/color-app"},n.a.createElement((function(){var e=function(e){return C.find((function(a){return a.id===e}))};return n.a.createElement("div",null,n.a.createElement(P.c,null,n.a.createElement(P.a,{exact:!0,path:"/",render:function(e){return n.a.createElement(x,Object.assign({palettes:C},e))}}),n.a.createElement(P.a,{exact:!0,path:"/palette/:id",render:function(a){return n.a.createElement(v,{Paltette:N(e(a.match.params.id))})}}),n.a.createElement(P.a,{exact:!0,path:"/palette/:paletteId/:colorId",render:function(a){return n.a.createElement(j,{colorId:a.match.params.colorId,Paltette:N(e(a.match.params.paletteId))})}}),n.a.createElement(P.a,{component:function(){return n.a.createElement("div",null,"404 Not found ")}})))}),null)),document.getElementById("root"))}},[[116,1,2]]]);
//# sourceMappingURL=main.cdfa683c.chunk.js.map