!function(){"use strict";function e(e,t,n,r,o,i){return{tag:e,key:t,attrs:n,children:r,text:o,dom:i,domSize:void 0,state:void 0,events:void 0,instance:void 0}}e.normalize=function(t){return Array.isArray(t)?e("[",void 0,void 0,e.normalizeChildren(t),void 0,void 0):null==t||"boolean"==typeof t?null:"object"==typeof t?t:e("#",void 0,void 0,String(t),void 0,void 0)},e.normalizeChildren=function(t){var n=[];if(t.length){for(var r=null!=t[0]&&null!=t[0].key,o=1;o<t.length;o++)if((null!=t[o]&&null!=t[o].key)!==r)throw new TypeError("Vnodes must either always have keys or never have keys!");for(o=0;o<t.length;o++)n[o]=e.normalize(t[o])}return n};var t=e,n=function(){var e,n=arguments,r=arguments[this],o=this+1;if(null==r?r={}:("object"!=typeof r||null!=r.tag||Array.isArray(r))&&(r={},o=this),arguments.length===o+1)e=arguments[o],Array.isArray(e)||(e=[e]);else for(e=[];o<arguments.length;)e.push(n[o++]);return t("",r.key,r,e)},r=/(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g,o={},i={}.hasOwnProperty;function l(e){for(var t in e)if(i.call(e,t))return!1;return!0}var a=function(e){if(null==e||"string"!=typeof e&&"function"!=typeof e&&"function"!=typeof e.view)throw Error("The selector must be either a string or a component.");var a=n.apply(1,arguments);return"string"==typeof e&&(a.children=t.normalizeChildren(a.children),"["!==e)?function(e,n){var r=n.attrs,o=t.normalizeChildren(n.children),a=i.call(r,"class"),s=a?r.class:r.className;if(n.tag=e.tag,n.attrs=null,n.children=void 0,!l(e.attrs)&&!l(r)){var u={};for(var c in r)i.call(r,c)&&(u[c]=r[c]);r=u}for(var c in e.attrs)i.call(e.attrs,c)&&"className"!==c&&!i.call(r,c)&&(r[c]=e.attrs[c]);for(var c in null==s&&null==e.attrs.className||(r.className=null!=s?null!=e.attrs.className?String(e.attrs.className)+" "+String(s):s:null!=e.attrs.className?e.attrs.className:null),a&&(r.class=null),r)if(i.call(r,c)&&"key"!==c){n.attrs=r;break}return Array.isArray(o)&&1===o.length&&null!=o[0]&&"#"===o[0].tag?n.text=o[0].children:n.children=o,n}(o[e]||function(e){for(var t,n="div",i=[],l={};t=r.exec(e);){var a=t[1],s=t[2];if(""===a&&""!==s)n=s;else if("#"===a)l.id=s;else if("."===a)i.push(s);else if("["===t[3][0]){var u=t[6];u&&(u=u.replace(/\\(["'])/g,"$1").replace(/\\\\/g,"\\")),"class"===t[4]?i.push(u):l[t[4]]=""===u?u:u||!0}}return i.length>0&&(l.className=i.join(" ")),o[e]={tag:n,attrs:l}}(e),a):(a.tag=e,a)};a.trust=function(e){return null==e&&(e=""),t("<",void 0,void 0,e,void 0,void 0)},a.fragment=function(){var e=n.apply(0,arguments);return e.tag="[",e.children=t.normalizeChildren(e.children),e};var s=a,u="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var c=function(e){if(!(this instanceof c))throw new Error("Promise must be called with `new`");if("function"!=typeof e)throw new TypeError("executor must be a function");var t=this,n=[],r=[],o=s(n,!0),i=s(r,!1),l=t._instance={resolvers:n,rejectors:r},a="function"==typeof setImmediate?setImmediate:setTimeout;function s(e,o){return function s(c){var f;try{if(!o||null==c||"object"!=typeof c&&"function"!=typeof c||"function"!=typeof(f=c.then))a(function(){o||0!==e.length||console.error("Possible unhandled promise rejection:",c);for(var t=0;t<e.length;t++)e[t](c);n.length=0,r.length=0,l.state=o,l.retry=function(){s(c)}});else{if(c===t)throw new TypeError("Promise can't be resolved w/ itself");u(f.bind(c))}}catch(e){i(e)}}}function u(e){var t=0;function n(e){return function(n){t++>0||e(n)}}var r=n(i);try{e(n(o),r)}catch(e){r(e)}}u(e)};c.prototype.then=function(e,t){var n,r,o=this._instance;function i(e,t,i,l){t.push(function(t){if("function"!=typeof e)i(t);else try{n(e(t))}catch(e){r&&r(e)}}),"function"==typeof o.retry&&l===o.state&&o.retry()}var l=new c(function(e,t){n=e,r=t});return i(e,o.resolvers,n,!0),i(t,o.rejectors,r,!1),l},c.prototype.catch=function(e){return this.then(null,e)},c.prototype.finally=function(e){return this.then(function(t){return c.resolve(e()).then(function(){return t})},function(t){return c.resolve(e()).then(function(){return c.reject(t)})})},c.resolve=function(e){return e instanceof c?e:new c(function(t){t(e)})},c.reject=function(e){return new c(function(t,n){n(e)})},c.all=function(e){return new c(function(t,n){var r=e.length,o=0,i=[];if(0===e.length)t([]);else for(var l=0;l<e.length;l++)!function(l){function a(e){o++,i[l]=e,o===r&&t(i)}null==e[l]||"object"!=typeof e[l]&&"function"!=typeof e[l]||"function"!=typeof e[l].then?a(e[l]):e[l].then(a,n)}(l)})},c.race=function(e){return new c(function(t,n){for(var r=0;r<e.length;r++)e[r].then(t,n)})};var f,d=c,h=(function(e){"undefined"!=typeof window?(void 0===window.Promise?window.Promise=d:window.Promise.prototype.finally||(window.Promise.prototype.finally=d.prototype.finally),e.exports=window.Promise):void 0!==u?(void 0===u.Promise?u.Promise=d:u.Promise.prototype.finally||(u.Promise.prototype.finally=d.prototype.finally),e.exports=u.Promise):e.exports=d}(f={exports:{}},f.exports),f.exports),p=function(e){var n,r=e&&e.document,o={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"};function i(e){return e.attrs&&e.attrs.xmlns||o[e.tag]}function l(e,t){if(e.state!==t)throw new Error("`vnode.state` must not be modified")}function a(e){var t=e.state;try{return this.apply(t,arguments)}finally{l(e,t)}}function s(){try{return r.activeElement}catch(e){return null}}function u(e,t,n,r,o,i,l){for(var a=n;a<r;a++){var s=t[a];null!=s&&c(e,s,o,l,i)}}function c(e,n,o,l,s){var f=n.tag;if("string"==typeof f)switch(n.state={},null!=n.attrs&&_(n.attrs,n,o),f){case"#":!function(e,t,n){t.dom=r.createTextNode(t.children),w(e,t.dom,n)}(e,n,s);break;case"<":d(e,n,l,s);break;case"[":!function(e,t,n,o,i){var l=r.createDocumentFragment();if(null!=t.children){var a=t.children;u(l,a,0,a.length,n,null,o)}t.dom=l.firstChild,t.domSize=l.childNodes.length,w(e,l,i)}(e,n,o,l,s);break;default:!function(e,n,o,l,a){var s=n.tag,c=n.attrs,f=c&&c.is,d=(l=i(n)||l)?f?r.createElementNS(l,s,{is:f}):r.createElementNS(l,s):f?r.createElement(s,{is:f}):r.createElement(s);if(n.dom=d,null!=c&&function(e,t,n){for(var r in t)C(e,r,null,t[r],n)}(n,c,l),w(e,d,a),!b(n)&&(null!=n.text&&(""!==n.text?d.textContent=n.text:n.children=[t("#",void 0,void 0,n.text,void 0,void 0)]),null!=n.children)){var h=n.children;u(d,h,0,h.length,o,null,l),"select"===n.tag&&null!=c&&function(e,t){if("value"in t)if(null===t.value)-1!==e.dom.selectedIndex&&(e.dom.value=null);else{var n=""+t.value;e.dom.value===n&&-1!==e.dom.selectedIndex||(e.dom.value=n)}"selectedIndex"in t&&C(e,"selectedIndex",null,t.selectedIndex,void 0)}(n,c)}}(e,n,o,l,s)}else!function(e,n,r,o,i){(function(e,n){var r;if("function"==typeof e.tag.view){if(e.state=Object.create(e.tag),null!=(r=e.state.view).$$reentrantLock$$)return;r.$$reentrantLock$$=!0}else{if(e.state=void 0,null!=(r=e.tag).$$reentrantLock$$)return;r.$$reentrantLock$$=!0,e.state=null!=e.tag.prototype&&"function"==typeof e.tag.prototype.view?new e.tag(e):e.tag(e)}if(_(e.state,e,n),null!=e.attrs&&_(e.attrs,e,n),e.instance=t.normalize(a.call(e.state.view,e)),e.instance===e)throw Error("A view cannot return the vnode it received as argument");r.$$reentrantLock$$=null})(n,r),null!=n.instance?(c(e,n.instance,r,o,i),n.dom=n.instance.dom,n.domSize=null!=n.dom?n.instance.domSize:0):n.domSize=0}(e,n,o,l,s)}var f={caption:"table",thead:"table",tbody:"table",tfoot:"table",tr:"tbody",th:"tr",td:"tr",colgroup:"table",col:"colgroup"};function d(e,t,n,o){var i=t.children.match(/^\s*?<(\w+)/im)||[],l=r.createElement(f[i[1]]||"div");"http://www.w3.org/2000/svg"===n?(l.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+t.children+"</svg>",l=l.firstChild):l.innerHTML=t.children,t.dom=l.firstChild,t.domSize=l.childNodes.length,t.instance=[];for(var a,s=r.createDocumentFragment();a=l.firstChild;)t.instance.push(a),s.appendChild(a);w(e,s,o)}function h(e,t,n,r,o,i){if(t!==n&&(null!=t||null!=n))if(null==t||0===t.length)u(e,n,0,n.length,r,o,i);else if(null==n||0===n.length)x(e,t,0,t.length);else{var l=null!=t[0]&&null!=t[0].key,a=null!=n[0]&&null!=n[0].key,s=0,f=0;if(!l)for(;f<t.length&&null==t[f];)f++;if(!a)for(;s<n.length&&null==n[s];)s++;if(null===a&&null==l)return;if(l!==a)x(e,t,f,t.length),u(e,n,s,n.length,r,o,i);else if(a){for(var d,h,w,b,E,S=t.length-1,j=n.length-1;S>=f&&j>=s&&(w=t[S],b=n[j],w.key===b.key);)w!==b&&p(e,w,b,r,o,i),null!=b.dom&&(o=b.dom),S--,j--;for(;S>=f&&j>=s&&(d=t[f],h=n[s],d.key===h.key);)f++,s++,d!==h&&p(e,d,h,r,g(t,f,o),i);for(;S>=f&&j>=s&&s!==j&&d.key===b.key&&w.key===h.key;)y(e,w,E=g(t,f,o)),w!==h&&p(e,w,h,r,E,i),++s<=--j&&y(e,d,o),d!==b&&p(e,d,b,r,o,i),null!=b.dom&&(o=b.dom),f++,w=t[--S],b=n[j],d=t[f],h=n[s];for(;S>=f&&j>=s&&w.key===b.key;)w!==b&&p(e,w,b,r,o,i),null!=b.dom&&(o=b.dom),j--,w=t[--S],b=n[j];if(s>j)x(e,t,f,S+1);else if(f>S)u(e,n,s,j+1,r,o,i);else{var C,z,A=o,O=j-s+1,N=new Array(O),T=0,P=0,I=2147483647,$=0;for(P=0;P<O;P++)N[P]=-1;for(P=j;P>=s;P--){null==C&&(C=v(t,f,S+1));var L=C[(b=n[P]).key];null!=L&&(I=L<I?L:-1,N[P-s]=L,w=t[L],t[L]=null,w!==b&&p(e,w,b,r,o,i),null!=b.dom&&(o=b.dom),$++)}if(o=A,$!==S-f+1&&x(e,t,f,S+1),0===$)u(e,n,s,j+1,r,o,i);else if(-1===I)for(T=(z=function(e){for(var t=[0],n=0,r=0,o=0,i=m.length=e.length,o=0;o<i;o++)m[o]=e[o];for(var o=0;o<i;++o)if(-1!==e[o]){var l=t[t.length-1];if(e[l]<e[o])m[o]=l,t.push(o);else{for(n=0,r=t.length-1;n<r;){var a=(n>>>1)+(r>>>1)+(n&r&1);e[t[a]]<e[o]?n=a+1:r=a}e[o]<e[t[n]]&&(n>0&&(m[o]=t[n-1]),t[n]=o)}}for(n=t.length,r=t[n-1];n-- >0;)t[n]=r,r=m[r];return m.length=0,t}(N)).length-1,P=j;P>=s;P--)h=n[P],-1===N[P-s]?c(e,h,r,i,o):z[T]===P-s?T--:y(e,h,o),null!=h.dom&&(o=n[P].dom);else for(P=j;P>=s;P--)h=n[P],-1===N[P-s]&&c(e,h,r,i,o),null!=h.dom&&(o=n[P].dom)}}else{var _=t.length<n.length?t.length:n.length;for(s=s<f?s:f;s<_;s++)(d=t[s])===(h=n[s])||null==d&&null==h||(null==d?c(e,h,r,i,g(t,s+1,o)):null==h?k(e,d):p(e,d,h,r,g(t,s+1,o),i));t.length>_&&x(e,t,s,t.length),n.length>_&&u(e,n,s,n.length,r,o,i)}}}function p(e,n,r,o,l,s){var u=n.tag;if(u===r.tag){if(r.state=n.state,r.events=n.events,function(e,t){do{if(null!=e.attrs&&"function"==typeof e.attrs.onbeforeupdate){var n=a.call(e.attrs.onbeforeupdate,e,t);if(void 0!==n&&!n)break}if("string"!=typeof e.tag&&"function"==typeof e.state.onbeforeupdate){var n=a.call(e.state.onbeforeupdate,e,t);if(void 0!==n&&!n)break}return!1}while(0);return e.dom=t.dom,e.domSize=t.domSize,e.instance=t.instance,e.attrs=t.attrs,e.children=t.children,e.text=t.text,!0}(r,n))return;if("string"==typeof u)switch(null!=r.attrs&&R(r.attrs,r,o),u){case"#":!function(e,t){e.children.toString()!==t.children.toString()&&(e.dom.nodeValue=t.children),t.dom=e.dom}(n,r);break;case"<":!function(e,t,n,r,o){t.children!==n.children?(E(e,t),d(e,n,r,o)):(n.dom=t.dom,n.domSize=t.domSize,n.instance=t.instance)}(e,n,r,s,l);break;case"[":!function(e,t,n,r,o,i){h(e,t.children,n.children,r,o,i);var l=0,a=n.children;if(n.dom=null,null!=a){for(var s=0;s<a.length;s++){var u=a[s];null!=u&&null!=u.dom&&(null==n.dom&&(n.dom=u.dom),l+=u.domSize||1)}1!==l&&(n.domSize=l)}}(e,n,r,o,l,s);break;default:!function(e,n,r,o){var l=n.dom=e.dom;o=i(n)||o,"textarea"===n.tag&&(null==n.attrs&&(n.attrs={}),null!=n.text&&(n.attrs.value=n.text,n.text=void 0)),function(e,t,n,r){if(null!=n)for(var o in n)C(e,o,t&&t[o],n[o],r);var i;if(null!=t)for(var o in t)null==(i=t[o])||null!=n&&null!=n[o]||z(e,o,i,r)}(n,e.attrs,n.attrs,o),b(n)||(null!=e.text&&null!=n.text&&""!==n.text?e.text.toString()!==n.text.toString()&&(e.dom.firstChild.nodeValue=n.text):(null!=e.text&&(e.children=[t("#",void 0,void 0,e.text,void 0,e.dom.firstChild)]),null!=n.text&&(n.children=[t("#",void 0,void 0,n.text,void 0,void 0)]),h(l,e.children,n.children,r,null,o)))}(n,r,o,s)}else!function(e,n,r,o,i,l){if(r.instance=t.normalize(a.call(r.state.view,r)),r.instance===r)throw Error("A view cannot return the vnode it received as argument");R(r.state,r,o),null!=r.attrs&&R(r.attrs,r,o),null!=r.instance?(null==n.instance?c(e,r.instance,o,l,i):p(e,n.instance,r.instance,o,i,l),r.dom=r.instance.dom,r.domSize=r.instance.domSize):null!=n.instance?(k(e,n.instance),r.dom=void 0,r.domSize=0):(r.dom=n.dom,r.domSize=n.domSize)}(e,n,r,o,l,s)}else k(e,n),c(e,r,o,s,l)}function v(e,t,n){for(var r=Object.create(null);t<n;t++){var o=e[t];if(null!=o){var i=o.key;null!=i&&(r[i]=t)}}return r}var m=[];function g(e,t,n){for(;t<e.length;t++)if(null!=e[t]&&null!=e[t].dom)return e[t].dom;return n}function y(e,t,n){var o=r.createDocumentFragment();!function e(t,n,r){for(;null!=r.dom&&r.dom.parentNode===t;){if("string"!=typeof r.tag){if(null!=(r=r.instance))continue}else if("<"===r.tag)for(var o=0;o<r.instance.length;o++)n.appendChild(r.instance[o]);else if("["!==r.tag)n.appendChild(r.dom);else if(1===r.children.length){if(null!=(r=r.children[0]))continue}else for(var o=0;o<r.children.length;o++){var i=r.children[o];null!=i&&e(t,n,i)}break}}(e,o,t),w(e,o,n)}function w(e,t,n){null!=n?e.insertBefore(t,n):e.appendChild(t)}function b(e){if(null==e.attrs||null==e.attrs.contenteditable&&null==e.attrs.contentEditable)return!1;var t=e.children;if(null!=t&&1===t.length&&"<"===t[0].tag){var n=t[0].children;e.dom.innerHTML!==n&&(e.dom.innerHTML=n)}else if(null!=e.text||null!=t&&0!==t.length)throw new Error("Child node of a contenteditable must be trusted");return!0}function x(e,t,n,r){for(var o=n;o<r;o++){var i=t[o];null!=i&&k(e,i)}}function k(e,t){var n,r,o,i=0,s=t.state;if("string"!=typeof t.tag&&"function"==typeof t.state.onbeforeremove&&null!=(o=a.call(t.state.onbeforeremove,t))&&"function"==typeof o.then&&(i=1,n=o),t.attrs&&"function"==typeof t.attrs.onbeforeremove&&null!=(o=a.call(t.attrs.onbeforeremove,t))&&"function"==typeof o.then&&(i|=2,r=o),l(t,s),i){if(null!=n){var u=function(){1&i&&((i&=2)||c())};n.then(u,u)}null!=r&&(u=function(){2&i&&((i&=1)||c())},r.then(u,u))}else j(t),S(e,t);function c(){l(t,s),j(t),S(e,t)}}function E(e,t){for(var n=0;n<t.instance.length;n++)e.removeChild(t.instance[n])}function S(e,t){for(;null!=t.dom&&t.dom.parentNode===e;){if("string"!=typeof t.tag){if(null!=(t=t.instance))continue}else if("<"===t.tag)E(e,t);else{if("["!==t.tag&&(e.removeChild(t.dom),!Array.isArray(t.children)))break;if(1===t.children.length){if(null!=(t=t.children[0]))continue}else for(var n=0;n<t.children.length;n++){var r=t.children[n];null!=r&&S(e,r)}}break}}function j(e){if("string"!=typeof e.tag&&"function"==typeof e.state.onremove&&a.call(e.state.onremove,e),e.attrs&&"function"==typeof e.attrs.onremove&&a.call(e.attrs.onremove,e),"string"!=typeof e.tag)null!=e.instance&&j(e.instance);else{var t=e.children;if(Array.isArray(t))for(var n=0;n<t.length;n++){var r=t[n];null!=r&&j(r)}}}function C(e,t,n,o,i){if("key"!==t&&"is"!==t&&null!=o&&!A(t)&&(n!==o||function(e,t){return"value"===t||"checked"===t||"selectedIndex"===t||"selected"===t&&e.dom===s()||"option"===e.tag&&e.dom.parentNode===r.activeElement}(e,t)||"object"==typeof o)){if("o"===t[0]&&"n"===t[1])return L(e,t,o);if("xlink:"===t.slice(0,6))e.dom.setAttributeNS("http://www.w3.org/1999/xlink",t.slice(6),o);else if("style"===t)I(e.dom,n,o);else if(O(e,t,i)){if("value"===t){if(("input"===e.tag||"textarea"===e.tag)&&e.dom.value===""+o&&e.dom===s())return;if("select"===e.tag&&null!==n&&e.dom.value===""+o)return;if("option"===e.tag&&null!==n&&e.dom.value===""+o)return}"input"===e.tag&&"type"===t?e.dom.setAttribute(t,o):e.dom[t]=o}else"boolean"==typeof o?o?e.dom.setAttribute(t,""):e.dom.removeAttribute(t):e.dom.setAttribute("className"===t?"class":t,o)}}function z(e,t,n,r){if("key"!==t&&"is"!==t&&null!=n&&!A(t))if("o"!==t[0]||"n"!==t[1]||A(t))if("style"===t)I(e.dom,n,null);else if(!O(e,t,r)||"className"===t||"value"===t&&("option"===e.tag||"select"===e.tag&&-1===e.dom.selectedIndex&&e.dom===s())||"input"===e.tag&&"type"===t){var o=t.indexOf(":");-1!==o&&(t=t.slice(o+1)),!1!==n&&e.dom.removeAttribute("className"===t?"class":t)}else e.dom[t]=null;else L(e,t,void 0)}function A(e){return"oninit"===e||"oncreate"===e||"onupdate"===e||"onremove"===e||"onbeforeremove"===e||"onbeforeupdate"===e}function O(e,t,n){return void 0===n&&(e.tag.indexOf("-")>-1||null!=e.attrs&&e.attrs.is||"href"!==t&&"list"!==t&&"form"!==t&&"width"!==t&&"height"!==t)&&t in e.dom}var N=/[A-Z]/g;function T(e){return"-"+e.toLowerCase()}function P(e){return"-"===e[0]&&"-"===e[1]?e:"cssFloat"===e?"float":e.replace(N,T)}function I(e,t,n){if(t===n);else if(null==n)e.style.cssText="";else if("object"!=typeof n)e.style.cssText=n;else if(null==t||"object"!=typeof t)for(var r in e.style.cssText="",n)null!=(o=n[r])&&e.style.setProperty(P(r),String(o));else{for(var r in n){var o;null!=(o=n[r])&&(o=String(o))!==String(t[r])&&e.style.setProperty(P(r),o)}for(var r in t)null!=t[r]&&null==n[r]&&e.style.removeProperty(P(r))}}function $(){this._=n}function L(e,t,n){if(null!=e.events){if(e.events[t]===n)return;null==n||"function"!=typeof n&&"object"!=typeof n?(null!=e.events[t]&&e.dom.removeEventListener(t.slice(2),e.events,!1),e.events[t]=void 0):(null==e.events[t]&&e.dom.addEventListener(t.slice(2),e.events,!1),e.events[t]=n)}else null==n||"function"!=typeof n&&"object"!=typeof n||(e.events=new $,e.dom.addEventListener(t.slice(2),e.events,!1),e.events[t]=n)}function _(e,t,n){"function"==typeof e.oninit&&a.call(e.oninit,t),"function"==typeof e.oncreate&&n.push(a.bind(e.oncreate,t))}function R(e,t,n){"function"==typeof e.onupdate&&n.push(a.bind(e.onupdate,t))}return $.prototype=Object.create(null),$.prototype.handleEvent=function(e){var t,n=this["on"+e.type];"function"==typeof n?t=n.call(e.currentTarget,e):"function"==typeof n.handleEvent&&n.handleEvent(e),this._&&!1!==e.redraw&&(0,this._)(),!1===t&&(e.preventDefault(),e.stopPropagation())},function(e,r,o){if(!e)throw new TypeError("Ensure the DOM element being passed to m.route/m.mount/m.render is not undefined.");var i=[],l=s(),a=e.namespaceURI;null==e.vnodes&&(e.textContent=""),r=t.normalizeChildren(Array.isArray(r)?r:[r]);var u=n;try{n="function"==typeof o?o:void 0,h(e,e.vnodes,r,i,null,"http://www.w3.org/1999/xhtml"===a?void 0:a)}finally{n=u}e.vnodes=r,null!=l&&s()!==l&&"function"==typeof l.focus&&l.focus();for(var c=0;c<i.length;c++)i[c]()}}(window),v=function(e,n,r){var o=[],i=!1,l=!1;function a(){if(i)throw new Error("Nested m.redraw.sync() call");i=!0;for(var n=0;n<o.length;n+=2)try{e(o[n],t(o[n+1]),s)}catch(e){r.error(e)}i=!1}function s(){l||(l=!0,n(function(){l=!1,a()}))}return s.sync=a,{mount:function(n,r){if(null!=r&&null==r.view&&"function"!=typeof r)throw new TypeError("m.mount(element, component) expects a component, not a vnode");var i=o.indexOf(n);i>=0&&(o.splice(i,2),e(n,[],s)),null!=r&&(o.push(n,r),e(n,t(r),s))},redraw:s}}(p,requestAnimationFrame,console),m=function(e){if("[object Object]"!==Object.prototype.toString.call(e))return"";var t=[];for(var n in e)r(n,e[n]);return t.join("&");function r(e,n){if(Array.isArray(n))for(var o=0;o<n.length;o++)r(e+"["+o+"]",n[o]);else if("[object Object]"===Object.prototype.toString.call(n))for(var o in n)r(e+"["+o+"]",n[o]);else t.push(encodeURIComponent(e)+(null!=n&&""!==n?"="+encodeURIComponent(n):""))}},g=Object.assign||function(e,t){t&&Object.keys(t).forEach(function(n){e[n]=t[n]})},y=function(e,t){if(/:([^\/\.-]+)(\.{3})?:/.test(e))throw new SyntaxError("Template parameter names *must* be separated");if(null==t)return e;var n=e.indexOf("?"),r=e.indexOf("#"),o=r<0?e.length:r,i=n<0?o:n,l=e.slice(0,i),a={};g(a,t);var s=l.replace(/:([^\/\.-]+)(\.{3})?/g,function(e,n,r){return delete a[n],null==t[n]?e:r?t[n]:encodeURIComponent(String(t[n]))}),u=s.indexOf("?"),c=s.indexOf("#"),f=c<0?s.length:c,d=u<0?f:u,h=s.slice(0,d);n>=0&&(h+=e.slice(n,o)),u>=0&&(h+=(n<0?"?":"&")+s.slice(u,f));var p=m(a);return p&&(h+=(n<0&&u<0?"?":"&")+p),r>=0&&(h+=e.slice(r)),c>=0&&(h+=(r<0?"":"&")+s.slice(c)),h},w=function(e,t,n){var r=0;function o(e){return new t(e)}function i(e){return function(r,i){"string"!=typeof r?(i=r,r=r.url):null==i&&(i={});var l=new t(function(t,n){e(y(r,i.params),i,function(e){if("function"==typeof i.type)if(Array.isArray(e))for(var n=0;n<e.length;n++)e[n]=new i.type(e[n]);else e=new i.type(e);t(e)},n)});if(!0===i.background)return l;var a=0;function s(){0==--a&&"function"==typeof n&&n()}return function e(t){var n=t.then;return t.constructor=o,t.then=function(){a++;var r=n.apply(t,arguments);return r.then(s,function(e){if(s(),0===a)throw e}),e(r)},t}(l)}}function l(e,t){for(var n in e.headers)if({}.hasOwnProperty.call(e.headers,n)&&t.test(n))return!0;return!1}return o.prototype=t.prototype,o.__proto__=t,{request:i(function(t,n,r,o){var i,a=null!=n.method?n.method.toUpperCase():"GET",s=n.body,u=!(null!=n.serialize&&n.serialize!==JSON.serialize||s instanceof e.FormData),c=n.responseType||("function"==typeof n.extract?"":"json"),f=new e.XMLHttpRequest,d=!1,h=f,p=f.abort;for(var v in f.abort=function(){d=!0,p.call(this)},f.open(a,t,!1!==n.async,"string"==typeof n.user?n.user:void 0,"string"==typeof n.password?n.password:void 0),u&&null!=s&&!l(n,/^content-type$/i)&&f.setRequestHeader("Content-Type","application/json; charset=utf-8"),"function"==typeof n.deserialize||l(n,/^accept$/i)||f.setRequestHeader("Accept","application/json, text/*"),n.withCredentials&&(f.withCredentials=n.withCredentials),n.timeout&&(f.timeout=n.timeout),f.responseType=c,n.headers)({}).hasOwnProperty.call(n.headers,v)&&f.setRequestHeader(v,n.headers[v]);f.onreadystatechange=function(e){if(!d&&4===e.target.readyState)try{var i,l=e.target.status>=200&&e.target.status<300||304===e.target.status||/^file:\/\//i.test(t),a=e.target.response;if("json"===c?e.target.responseType||"function"==typeof n.extract||(a=JSON.parse(e.target.responseText)):c&&"text"!==c||null==a&&(a=e.target.responseText),"function"==typeof n.extract?(a=n.extract(e.target,n),l=!0):"function"==typeof n.deserialize&&(a=n.deserialize(a)),l)r(a);else{try{i=e.target.responseText}catch(e){i=a}var s=new Error(i);s.code=e.target.status,s.response=a,o(s)}}catch(e){o(e)}},"function"==typeof n.config&&(f=n.config(f,n,t)||f)!==h&&(i=f.abort,f.abort=function(){d=!0,i.call(this)}),null==s?f.send():"function"==typeof n.serialize?f.send(n.serialize(s)):s instanceof e.FormData?f.send(s):f.send(JSON.stringify(s))}),jsonp:i(function(t,n,o,i){var l=n.callbackName||"_mithril_"+Math.round(1e16*Math.random())+"_"+r++,a=e.document.createElement("script");e[l]=function(t){delete e[l],a.parentNode.removeChild(a),o(t)},a.onerror=function(){delete e[l],a.parentNode.removeChild(a),i(new Error("JSONP request failed"))},a.src=t+(t.indexOf("?")<0?"?":"&")+encodeURIComponent(n.callbackKey||"callback")+"="+encodeURIComponent(l),e.document.documentElement.appendChild(a)})}}(window,h,v.redraw),b=function(e){if(""===e||null==e)return{};"?"===e.charAt(0)&&(e=e.slice(1));for(var t=e.split("&"),n={},r={},o=0;o<t.length;o++){var i=t[o].split("="),l=decodeURIComponent(i[0]),a=2===i.length?decodeURIComponent(i[1]):"";"true"===a?a=!0:"false"===a&&(a=!1);var s=l.split(/\]\[?|\[/),u=r;l.indexOf("[")>-1&&s.pop();for(var c=0;c<s.length;c++){var f=s[c],d=s[c+1],h=""==d||!isNaN(parseInt(d,10));if(""===f)null==n[l=s.slice(0,c).join()]&&(n[l]=Array.isArray(u)?u.length:0),f=n[l]++;else if("__proto__"===f)break;if(c===s.length-1)u[f]=a;else{var p=Object.getOwnPropertyDescriptor(u,f);null!=p&&(p=p.value),null==p&&(u[f]=p=h?[]:{}),u=p}}}return r},x=function(e){var t=e.indexOf("?"),n=e.indexOf("#"),r=n<0?e.length:n,o=t<0?r:t,i=e.slice(0,o).replace(/\/{2,}/g,"/");return i?("/"!==i[0]&&(i="/"+i),i.length>1&&"/"===i[i.length-1]&&(i=i.slice(0,-1))):i="/",{path:i,params:t<0?{}:b(e.slice(t+1,r))}},k=function(e){var t=x(e),n=Object.keys(t.params),r=[],o=new RegExp("^"+t.path.replace(/:([^\/.-]+)(\.{3}|\.(?!\.)|-)?|[\\^$*+.()|\[\]{}]/g,function(e,t,n){return null==t?"\\"+e:(r.push({k:t,r:"..."===n}),"..."===n?"(.*)":"."===n?"([^/]+)\\.":"([^/]+)"+(n||""))})+"$");return function(e){for(var i=0;i<n.length;i++)if(t.params[n[i]]!==e.params[n[i]])return!1;if(!r.length)return o.test(e.path);var l=o.exec(e.path);if(null==l)return!1;for(i=0;i<r.length;i++)e.params[r[i].k]=r[i].r?l[i+1]:decodeURIComponent(l[i+1]);return!0}},E={},S=function(e,n){var r;function o(t,n,o){if(t=y(t,n),null!=r){r();var i=o?o.state:null,l=o?o.title:null;o&&o.replace?e.history.replaceState(i,l,d.prefix+t):e.history.pushState(i,l,d.prefix+t)}else e.location.href=d.prefix+t}var i,l,s,u,c=E,f=d.SKIP={};function d(a,p,v){if(null==a)throw new Error("Ensure the DOM element that was passed to `m.route` is not undefined");var m,y=0,w=Object.keys(v).map(function(e){if("/"!==e[0])throw new SyntaxError("Routes must start with a `/`");if(/:([^\/\.-]+)(\.{3})?:/.test(e))throw new SyntaxError("Route parameter names must be separated with either `/`, `.`, or `-`");return{route:e,component:v[e],check:k(e)}}),b="function"==typeof setImmediate?setImmediate:setTimeout,S=h.resolve(),j=!1;if(r=null,null!=p){var C=x(p);if(!w.some(function(e){return e.check(C)}))throw new ReferenceError("Default route doesn't match any known routes")}function z(){j=!1;var t=e.location.hash;"#"!==d.prefix[0]&&(t=e.location.search+t,"?"!==d.prefix[0]&&"/"!==(t=e.location.pathname+t)[0]&&(t="/"+t));var r=t.concat().replace(/(?:%[a-f89][a-f0-9])+/gim,decodeURIComponent).slice(d.prefix.length),a=x(r);function h(){if(r===p)throw new Error("Could not resolve default route "+p);o(p,null,{replace:!0})}g(a.params,e.history.state),function e(t){for(;t<w.length;t++)if(w[t].check(a)){var o=w[t].component,d=w[t].route,p=o,v=u=function(d){if(v===u){if(d===f)return e(t+1);i=null==d||"function"!=typeof d.view&&"function"!=typeof d?"div":d,l=a.params,s=r,u=null,c=o.render?o:null,2===y?n.redraw():(y=2,n.redraw.sync())}};return void(o.view||"function"==typeof o?(o={},v(p)):o.onmatch?S.then(function(){return o.onmatch(a.params,r,d)}).then(v,h):v("div"))}h()}(0)}return r=function(){j||(j=!0,b(z))},"function"==typeof e.history.pushState?(m=function(){e.removeEventListener("popstate",r,!1)},e.addEventListener("popstate",r,!1)):"#"===d.prefix[0]&&(r=null,m=function(){e.removeEventListener("hashchange",z,!1)},e.addEventListener("hashchange",z,!1)),n.mount(a,{onbeforeupdate:function(){return!(!(y=y?2:1)||E===c)},oncreate:z,onremove:m,view:function(){if(y&&E!==c){var e=[t(i,l.key,l)];return c&&(e=c.render(e[0])),e}}})}return d.set=function(e,t,n){null!=u&&((n=n||{}).replace=!0),u=null,o(e,t,n)},d.get=function(){return s},d.prefix="#!",d.Link={view:function(e){var t,n,r=e.attrs.options,o={};g(o,e.attrs),o.selector=o.options=o.key=o.oninit=o.oncreate=o.onbeforeupdate=o.onupdate=o.onbeforeremove=o.onremove=null;var i=a(e.attrs.selector||"a",o,e.children);return(i.attrs.disabled=Boolean(i.attrs.disabled))?(i.attrs.href=null,i.attrs["aria-disabled"]="true",i.attrs.onclick=null):(t=i.attrs.onclick,n=i.attrs.href,i.attrs.href=d.prefix+n,i.attrs.onclick=function(e){var o;"function"==typeof t?o=t.call(e.currentTarget,e):null==t||"object"!=typeof t||"function"==typeof t.handleEvent&&t.handleEvent(e),!1===o||e.defaultPrevented||0!==e.button&&0!==e.which&&1!==e.which||e.currentTarget.target&&"_self"!==e.currentTarget.target||e.ctrlKey||e.metaKey||e.shiftKey||e.altKey||(e.preventDefault(),e.redraw=!1,d.set(n,null,r))}),i}},d.param=function(e){return l&&null!=e?l[e]:l},d}(window,v),j=function(){return s.apply(this,arguments)};j.m=s,j.trust=s.trust,j.fragment=s.fragment,j.mount=v.mount,j.route=S,j.render=p,j.redraw=v.redraw,j.request=w.request,j.jsonp=w.jsonp,j.parseQueryString=b,j.buildQueryString=m,j.parsePathname=x,j.buildPathname=y,j.vnode=t,j.PromisePolyfill=d;var C=j,z={view:function(){return[C(".container-fluid",[C(".hero.row.justify-content-center.align-items-center",[C(".col-12.col-sm-auto.text-center",[C(".d-block.pb-2",[C(".img-placeholder",[C("img",{src:"https://avatars2.githubusercontent.com/u/7041324?u=888d2c7af2f9938b0ad2d22118dec324fbbe3e8b&v=4"})])]),C("svg.hero__logo",C('use[xlink:href="icons.svg#logo"]')),C(".sub-header",[C(".d-inline.d-sm-block.pr-1.p-sm-0",[C.trust("I'm a software engineer currently based out of the Netherlands.")]),C(".d-inline.d-sm-block",[C.trust("I establish an e-commerce nexus for fashion brands, labels and agencies.<br> I also create commercial and open source tools for developers.")])]),C(".row.justify-content-center.align-items-center.pt-5",[C(".col-auto",[C('a[href="mailto:nicos@gmx.com"]',[C("svg.icon",[C('use[xlink:href="icons.svg#mail"]')])])]),C(".col-auto",[C('a[href="https://twitter.com/sisselsiv"]',[C("svg.icon",[C('use[xlink:href="icons.svg#twitter"]')])])]),C(".col-auto",[C('a[href="https://github.com/panoply"]',[C("svg.icon-github",[C('use[xlink:href="icons.svg#github"]')])])])])])])])]}},A=document.getElementById("app");C.route(A,"/",{"/":{render:function(){return C(z)}}})}();
//# sourceMappingURL=bundle.js.map
