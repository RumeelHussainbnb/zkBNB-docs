(()=>{"use strict";var e,f,c,t,r,d={},a={};function b(e){var f=a[e];if(void 0!==f)return f.exports;var c=a[e]={id:e,loaded:!1,exports:{}};return d[e].call(c.exports,c,c.exports,b),c.loaded=!0,c.exports}b.m=d,e=[],b.O=(f,c,t,r)=>{if(!c){var d=1/0;for(i=0;i<e.length;i++){c=e[i][0],t=e[i][1],r=e[i][2];for(var a=!0,o=0;o<c.length;o++)(!1&r||d>=r)&&Object.keys(b.O).every((e=>b.O[e](c[o])))?c.splice(o--,1):(a=!1,r<d&&(d=r));if(a){e.splice(i--,1);var n=t();void 0!==n&&(f=n)}}return f}r=r||0;for(var i=e.length;i>0&&e[i-1][2]>r;i--)e[i]=e[i-1];e[i]=[c,t,r]},b.n=e=>{var f=e&&e.__esModule?()=>e.default:()=>e;return b.d(f,{a:f}),f},c=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,b.t=function(e,t){if(1&t&&(e=this(e)),8&t)return e;if("object"==typeof e&&e){if(4&t&&e.__esModule)return e;if(16&t&&"function"==typeof e.then)return e}var r=Object.create(null);b.r(r);var d={};f=f||[null,c({}),c([]),c(c)];for(var a=2&t&&e;"object"==typeof a&&!~f.indexOf(a);a=c(a))Object.getOwnPropertyNames(a).forEach((f=>d[f]=()=>e[f]));return d.default=()=>e,b.d(r,d),r},b.d=(e,f)=>{for(var c in f)b.o(f,c)&&!b.o(e,c)&&Object.defineProperty(e,c,{enumerable:!0,get:f[c]})},b.f={},b.e=e=>Promise.all(Object.keys(b.f).reduce(((f,c)=>(b.f[c](e,f),f)),[])),b.u=e=>"assets/js/"+({53:"935f2afb",148:"ee4997fc",428:"d7ce1cd4",594:"e59fa797",673:"40cc32b4",1299:"eadf135d",1893:"4c5e977b",1968:"9f1e2c90",1971:"6c89ec39",2431:"a104db03",2519:"676342de",2702:"11966bf1",2752:"5e64db50",2857:"adc3ff3e",3032:"0b3c97c2",3085:"1f391b9e",3184:"08a14202",3570:"330fdfc0",3696:"219f1b6e",3751:"3720c009",3844:"baf277fb",4121:"55960ee5",4195:"c4f5d8e4",4333:"6dd06661",4753:"c881ffb6",4867:"c757d0ed",5280:"b252a2e6",5697:"13f25e49",5809:"cd382a82",6070:"753c2fe4",6084:"9351c713",6342:"518fe5be",6509:"26b8bb01",6886:"96a5f459",6952:"3e58063d",6981:"e8c3d1c0",7249:"81e968bf",7414:"393be207",7772:"5a2ab86b",7934:"072941f3",8561:"4ece3ca0",8592:"common",9080:"b70358a4",9396:"cdf7a918",9460:"897297b1",9514:"1be78505",9671:"0e384e19",9810:"fc55230d",9817:"14eb3368",9924:"df203c0f"}[e]||e)+"."+{53:"7ffc5ca0",148:"05ec0798",428:"c6db40f2",594:"d6d7b0cd",673:"f45a82c0",814:"384626fa",1299:"bb766a28",1653:"bbcd4ed9",1893:"885571d6",1968:"fa2faedb",1971:"b6c5ef1b",2431:"3e3acb5d",2519:"f61e1ac6",2702:"43b08f7a",2752:"28b10cec",2857:"dd0156b9",3032:"6453f3a8",3085:"74bec2ca",3184:"5f6bce39",3570:"8a68592f",3696:"8b3455db",3751:"74f8a3c2",3844:"5213f781",4121:"fc1408b9",4195:"f1cf1a1a",4333:"2a30f06d",4753:"6c80ec52",4867:"a105554c",4972:"05d62ec0",5280:"55564200",5697:"6634b4cb",5809:"649d9c18",6070:"9a0440d1",6084:"c136ad30",6342:"218b1323",6509:"1a71fe35",6886:"152cd11d",6952:"483c4d22",6981:"9010cb27",7249:"217b1947",7414:"a2b391cc",7772:"60947b63",7934:"6727eaa3",8561:"441ec42a",8592:"a14db063",9080:"1dd918b8",9396:"5d1ae569",9460:"367eb015",9514:"45d9dee3",9671:"69b0f4a8",9810:"086ce976",9817:"22f33fc5",9924:"742b8771"}[e]+".js",b.miniCssF=e=>{},b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.o=(e,f)=>Object.prototype.hasOwnProperty.call(e,f),t={},r="zkbnb-docs:",b.l=(e,f,c,d)=>{if(t[e])t[e].push(f);else{var a,o;if(void 0!==c)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var l=n[i];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==r+c){a=l;break}}a||(o=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,b.nc&&a.setAttribute("nonce",b.nc),a.setAttribute("data-webpack",r+c),a.src=e),t[e]=[f];var u=(f,c)=>{a.onerror=a.onload=null,clearTimeout(s);var r=t[e];if(delete t[e],a.parentNode&&a.parentNode.removeChild(a),r&&r.forEach((e=>e(c))),f)return f(c)},s=setTimeout(u.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=u.bind(null,a.onerror),a.onload=u.bind(null,a.onload),o&&document.head.appendChild(a)}},b.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},b.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),b.p="/zkBNB-docs/",b.gca=function(e){return e={"935f2afb":"53",ee4997fc:"148",d7ce1cd4:"428",e59fa797:"594","40cc32b4":"673",eadf135d:"1299","4c5e977b":"1893","9f1e2c90":"1968","6c89ec39":"1971",a104db03:"2431","676342de":"2519","11966bf1":"2702","5e64db50":"2752",adc3ff3e:"2857","0b3c97c2":"3032","1f391b9e":"3085","08a14202":"3184","330fdfc0":"3570","219f1b6e":"3696","3720c009":"3751",baf277fb:"3844","55960ee5":"4121",c4f5d8e4:"4195","6dd06661":"4333",c881ffb6:"4753",c757d0ed:"4867",b252a2e6:"5280","13f25e49":"5697",cd382a82:"5809","753c2fe4":"6070","9351c713":"6084","518fe5be":"6342","26b8bb01":"6509","96a5f459":"6886","3e58063d":"6952",e8c3d1c0:"6981","81e968bf":"7249","393be207":"7414","5a2ab86b":"7772","072941f3":"7934","4ece3ca0":"8561",common:"8592",b70358a4:"9080",cdf7a918:"9396","897297b1":"9460","1be78505":"9514","0e384e19":"9671",fc55230d:"9810","14eb3368":"9817",df203c0f:"9924"}[e]||e,b.p+b.u(e)},(()=>{var e={1303:0,532:0};b.f.j=(f,c)=>{var t=b.o(e,f)?e[f]:void 0;if(0!==t)if(t)c.push(t[2]);else if(/^(1303|532)$/.test(f))e[f]=0;else{var r=new Promise(((c,r)=>t=e[f]=[c,r]));c.push(t[2]=r);var d=b.p+b.u(f),a=new Error;b.l(d,(c=>{if(b.o(e,f)&&(0!==(t=e[f])&&(e[f]=void 0),t)){var r=c&&("load"===c.type?"missing":c.type),d=c&&c.target&&c.target.src;a.message="Loading chunk "+f+" failed.\n("+r+": "+d+")",a.name="ChunkLoadError",a.type=r,a.request=d,t[1](a)}}),"chunk-"+f,f)}},b.O.j=f=>0===e[f];var f=(f,c)=>{var t,r,d=c[0],a=c[1],o=c[2],n=0;if(d.some((f=>0!==e[f]))){for(t in a)b.o(a,t)&&(b.m[t]=a[t]);if(o)var i=o(b)}for(f&&f(c);n<d.length;n++)r=d[n],b.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return b.O(i)},c=self.webpackChunkzkbnb_docs=self.webpackChunkzkbnb_docs||[];c.forEach(f.bind(null,0)),c.push=f.bind(null,c.push.bind(c))})()})();