(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>f});var r=t(81),a=t.n(r),o=t(645),i=t.n(o),c=t(667),s=t.n(c),l=new URL(t(684),t.b),p=new URL(t(680),t.b),d=i()(a()),u=s()(l),m=s()(p);d.push([e.id,`* {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-family: Arial, Helvetica, sans-serif;\n }\n \n html{\n    height:100vh;\n    width: 100vw;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-image: url(${u});\n    background-size: cover;\n\n}\n\nbody{\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.mainWrapper{\n    width: 200px;\n    height: 200px;\n    display:flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    padding: 4px;\n}\n\n.searchItem{\n    margin: 4px;\n}\n\n.results{\n    display: flex;\n    padding: 20px;\n    justify-content: center;\n    align-items: center;\n    margin-bottom: 20px;\n    flex-wrap: wrap;\n    overflow: scroll;\n    width: 100vw;\n    transition: transform 2s ease;\n}\n\n\n.removeCard{\n    height: 20px;\n    width: 20px;\n    background-color: red;\n    color: white;\n    border-radius: 30%;\n    text-align: center;\n    top: 10px;\n    right: 115px;\n    display: none;\n    position: absolute;\n    \n\n}\n\n#pokeName {\n    font-size: 24px;\n    color: white;\n}\n\n#pokePicture{\n    height: 200px;\n    width: 200px;\n}\n\n#searchTitle{\n    text-align: center;\n    color: white;\n}\n\n\n.card{\n    height: 400px;\n    width:250px;\n    background-color: white;\n    margin: 20px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    border-radius: 10px;\n    border: 10px solid rgb(230, 230, 25);\n    background-image: url(${m});\n    box-shadow: 5px 0 15px rgb(252, 225, 156);\n    transition: transform 2s;\n    \n}\n\n\n\n\n\n.card:hover{\n    filter: brightness(1.10);\n    box-shadow: 10px 0 20px rgb(252, 225, 156);\n}\n\n.card:hover .removeCard {\ndisplay: block;\ncursor: pointer;\n\n}\n\n\n.cardPic{\n    height: 40px;\n    width: 210px;\n    height: 150px;\n    background-color: white;\n    border: 4px solid rgb(230, 230, 25);\n    box-shadow: 5px 5px 15px black;\n    margin-left: 16px;\n}\n\n.cardName{\n    font-size: 18px;\n}\n\n.hp{\n\n    font-size: 18px;\n    color: rgb(218, 55, 55);\n    text-shadow: 0 0 2px black;\n}\n\n.topStats{\n    display: flex;\n    justify-content: space-between;\n    margin: 10px;\n    font-weight: 800;\n}\n\n.move{\n    margin: 10px;\n    display: flex;\n    border-top: 1px solid black;\n    flex-direction: column;\n}\n\n.moveName{\n    font-size: 16px;\n    font-weight: 900;\n    flex-basis: 1;\n}\n\n.moveDesc{\n    font-size: 12px;\n}\n\n.pp{\n    align-self: flex-end;\n}\n\n.err{\n    height: 16px;\n    background-color: red;\n    color: white;\n    font-size: 12px;\n}\n\n`,""]);const f=d},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<e.length;l++){var p=[].concat(e[l]);r&&i[p[0]]||(void 0!==o&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=o),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),a&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=a):p[4]="".concat(a)),n.push(p))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var o={},i=[],c=0;c<e.length;c++){var s=e[c],l=r.base?s[0]+r.base:s[0],p=o[l]||0,d="".concat(l," ").concat(p);o[l]=p+1;var u=t(d),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var f=a(m,r);r.byIndex=c,n.splice(c,0,{identifier:d,updater:f,references:1})}i.push(d)}return i}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var c=t(o[i]);n[c].references--}for(var s=r(e,a),l=0;l<o.length;l++){var p=t(o[l]);0===n[p].references&&(n[p].updater(),n.splice(p,1))}o=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},680:(e,n,t)=>{e.exports=t.p+"396bc19362f814d066e9.png"},684:(e,n,t)=>{e.exports=t.p+"923f20d47abeb9aeb185.jpg"}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&!e;)e=r[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),a=t.n(r),o=t(569),i=t.n(o),c=t(565),s=t.n(c),l=t(216),p=t.n(l),d=t(589),u=t.n(d),m=t(426),f={};f.styleTagTransform=u(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=p(),n()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;let h=document.getElementById("results"),v=[];function g(e,n,t,r,a,o,i,c,s,l){let p=document.createElement("div");p.classList="card",function(e,n){e.style.backgroundImage="electric"===n?"url(../src/img/cardBackYellow.png)":"fire"===n?"url(../src/img/cardBackRed.png)":"grass"===n?"url(../src/img/cardBackGreen.png)":"water"===n?"url(../src/img/cardBackBlue.png)":"url(../src/img/cardBackOrange.png)"}(p,r);let d=document.createElement("div");d.classList="removeCard",d.innerHTML="X",d.addEventListener("click",(()=>{const e=v.indexOf(p);e>-1&&(v.splice(e,1),p.innerHTML="",p.style.display="none")})),p.appendChild(d);let u=document.createElement("div");u.classList="topStats";let m=document.createElement("div");m.innerHTML=n,m.classList="cardName",u.appendChild(m);let f=document.createElement("div");f.innerHTML=t,f.classList="hp",u.appendChild(f),p.appendChild(u);let g=document.createElement("img");g.src=e,g.classList="cardPic",p.appendChild(g);let y=document.createElement("div");y.classList="move";let x=document.createElement("div");x.classList="moveName",x.innerHTML=a,y.appendChild(x);let b=document.createElement("div");b.classList="moveDesc",b.innerHTML=o,y.appendChild(b);let w=document.createElement("div");w.classList="pp",w.innerHTML=i,y.appendChild(w),p.appendChild(y);let k=document.createElement("div");k.classList="move";let E=document.createElement("div");E.classList="moveName",E.innerHTML=c,k.appendChild(E);let L=document.createElement("div");L.classList="moveDesc",L.innerHTML=s,k.appendChild(L);let M=document.createElement("div");var C;M.classList="pp",M.innerHTML=l,k.appendChild(M),p.appendChild(k),v.unshift(p),v.forEach((e=>{h.appendChild(e)})),(C=p).style.left="140px",C.style.opacity="0",C.style.transform="translate(-120px) rotateY(90deg)",C.style.zIndex="",C.style.transition="transform 2s, opacity 2s",setTimeout((function(){C.style.top="",C.style.right="",C.style.transform="",C.style.zIndex="",C.style.opacity="1",C.style.boxShadow=""}),10)}async function y(e){try{const n=e.pokemonData.moves,t=n[Math.floor(Math.random()*n.length)],r=t.move.name.toUpperCase(),a=await fetch(t.move.url),o=await a.json(),i=o.pp,c=o.flavor_text_entries[1];if("en"!==c.language.name)return;return{randomMoveName:r,moveDescription:c.flavor_text,pp:i}}catch{b()}}async function x(e){try{let n=await async function(e){try{let n=await fetch(`https://pokeapi.co/api/v2/pokemon/${e}`),t=await n.json();return console.log(t),{pokemonData:t}}catch{b()}}(e),t=await function(e){let n=e.pokemonData.sprites.other["official-artwork"].front_default,t=e.pokemonData.name;return{pokeImg:n,pokeCap:t.charAt(0).toUpperCase()+t.slice(1),HP:e.pokemonData.stats[0].base_stat+" HP",type:e.pokemonData.types[0].type.name}}(n),r=await y(n),a=await y(n);await g(t.pokeImg,t.pokeCap,t.HP,t.type,r.randomMoveName,r.moveDescription,r.pp,a.randomMoveName,a.moveDescription,a.pp)}catch{b()}}function b(){const e=document.getElementById("err");e.innerHTML="Error! Please try again.",e.classList="err"}const w=document.getElementById("searchButton"),k=document.getElementById("searchInput"),E=document.getElementById("randomButton"),L=document.getElementById("err");w.addEventListener("click",(()=>{"mr. meeseeks"===k.value?g("../src/img/mrMeeseeks.jpeg","Mr. Meeseeks",100,"water","CAN DOOO","Helps you get 2 strokes off your golf game",99,"EXISTENCE IS PAIN","It's getting wiierdd",99):(L.removeAttribute("class","err"),L.innerHTML="",x(k.value),k.value="")})),E.addEventListener("click",(()=>{L.removeAttribute("class","err"),L.innerHTML="",async function(){try{let e=await fetch("https://pokeapi.co/api/v2/pokemon");const n=(await e.json()).count;x(Math.floor(Math.random()*n)+1)}catch{b()}}(),k.value=""}))})()})();