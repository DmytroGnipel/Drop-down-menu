(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>s});var o=t(81),r=t.n(o),i=t(645),a=t.n(i)()(r());a.push([n.id,"* { \n    box-sizing: border-box;\n    margin: 0%;\n    padding: 0%;\n\n}\n\n\n\n.header {background-color: brown;\ngrid-column-start: 1;\ngrid-column-end: -1;\ndisplay: flex;\nflex-direction: column;\njustify-content: end;\n\n}\n\n.wrapper {\n  display: grid;\n  grid-template-columns: 1fr 4fr;\n  grid-template-rows: 1fr 8fr;\n  background-color: aqua;\n  width: 900px;\n  height: 1000px;\n  margin: auto;\n  \n}\n\n.side {\n    background-color: blue;\n}\n\n.main {\n    background-color: yellow;\n}\n\np {\n    text-align: center;\n    font-size: 50px;\n}\n\n.menu {\n    height: 50px;\n    background-color: blue;\n    display: flex;\n    \n\n    \n}\n\n.dropDown, .dropLeft, .dropRight {\n    background-color: orangered;\n    width: 100%;\n    border: 1px solid black;\n}\n\n.dropDown {\n    position: absolute;\n    top: 100%;\n    visibility: hidden;\n}\n\n.dropLeft {\n    position: absolute;\n    top: 0px;\n    right: 100%;\n    visibility: hidden;\n}\n\n.dropRight {\n    position: absolute;\n    left: 100%;\n    top: 0px;\n    visibility: hidden;\n}\n\n.elementmenu {\n    position: relative;\n    width: 25%;\n    background-color: green;\n}\n\n.dropelement {\n    border: 1px solid black;\n    position: relative;\n    \n}",""]);const s=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(a[d]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);o&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},a=[],s=0;s<n.length;s++){var d=n[s],c=o.base?d[0]+o.base:d[0],l=i[c]||0,u="".concat(c," ").concat(l);i[c]=l+1;var p=t(u),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=r(f,o);o.byIndex=s,e.splice(s,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=t(i[a]);e[s].references--}for(var d=o(n,r),c=0;c<i.length;c++){var l=t(i[c]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=d}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n,e=t(379),o=t.n(e),r=t(795),i=t.n(r),a=t(569),s=t.n(a),d=t(565),c=t.n(d),l=t(216),u=t.n(l),p=t(589),f=t.n(p),m=t(426),v={};function h(n,e){n.addEventListener("mouseover",(function(){e.style.visibility="visible"}))}function g(n,e){n.addEventListener("mouseout",(function(){e.style.visibility="hidden"}))}function b(n,e){const t=document.createElement("div");console.log(e),"down"===e?t.classList.add("dropDown"):"right"===e?t.classList.add("dropRight"):"left"===e&&t.classList.add("dropLeft");for(const e in n){const o=document.createElement("div");o.classList.add("dropelement");const r=document.createElement("a");r.textContent=`${e}`,r.setAttribute("href",`${n[e]}`),o.append(r),t.append(o)}return t}v.styleTagTransform=f(),v.setAttributes=c(),v.insert=s().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=u(),o()(m.Z,v),m.Z&&m.Z.locals&&m.Z.locals,n={headSix:"#",headSeven:"##",headEigth:"###",headNine:"####",headTen:"#####"},function(n,e){const t=document.querySelectorAll(".elementmenu")[3],o=b({headOne:"#",headTwo:"##",headThree:"###",headFour:"####",headFive:"#####"},"down");h(t,o),g(t,o),t.append(o);const r=document.getElementsByClassName("dropelement");for(const n of r)n.dataset.id="3"}(),function(n,e){const t=document.querySelectorAll(".dropelement")[4],o=function(n){const e=document.getElementsByClassName("dropelement");let t;return console.log(e[0].dataset.id),e[0].dataset.id<2&&(t=b(n,"right")),e[0].dataset.id>=2&&(t=b(n,"left")),t}(e);h(t,o),g(t,o),t.append(o)}(0,n)})()})();