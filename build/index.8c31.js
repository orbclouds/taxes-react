/*! For license information please see index.8c31.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return s}));n(5);function r(e,t,n){return e(n={path:t,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==t&&n.path)}},n.exports),n.exports}var o=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var u=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,r,u=i(e),l=1;l<arguments.length;l++){for(var s in n=Object(arguments[l]))a.call(n,s)&&(u[s]=n[s]);if(o){r=o(n);for(var f=0;f<r.length;f++)c.call(n,r[f])&&(u[r[f]]=n[r[f]])}}return u},l=r((function(e,t){var n=60103,r=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var o=60109,a=60110,c=60112;t.Suspense=60113;var i=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var s=Symbol.for;n=s("react.element"),r=s("react.portal"),t.Fragment=s("react.fragment"),t.StrictMode=s("react.strict_mode"),t.Profiler=s("react.profiler"),o=s("react.provider"),a=s("react.context"),c=s("react.forward_ref"),t.Suspense=s("react.suspense"),i=s("react.memo"),l=s("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function p(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v={};function g(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||y}function d(){}function b(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||y}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(p(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},d.prototype=g.prototype;var h=b.prototype=new d;h.constructor=b,u(h,g.prototype),h.isPureReactComponent=!0;var m={current:null},O=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,r){var o,a={},c=null,i=null;if(null!=t)for(o in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(c=""+t.key),t)O.call(t,o)&&!w.hasOwnProperty(o)&&(a[o]=t[o]);var u=arguments.length-2;if(1===u)a.children=r;else if(1<u){for(var l=Array(u),s=0;s<u;s++)l[s]=arguments[s+2];a.children=l}if(e&&e.defaultProps)for(o in u=e.defaultProps)void 0===a[o]&&(a[o]=u[o]);return{$$typeof:n,type:e,key:c,ref:i,props:a,_owner:m.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var j=/\/+/g;function S(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function _(e,t,o,a,c){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var u=!1;if(null===e)u=!0;else switch(i){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case n:case r:u=!0}}if(u)return c=c(u=e),e=""===a?"."+S(u,0):a,Array.isArray(c)?(o="",null!=e&&(o=e.replace(j,"$&/")+"/"),_(c,t,o,"",(function(e){return e}))):null!=c&&(x(c)&&(c=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(c,o+(!c.key||u&&u.key===c.key?"":(""+c.key).replace(j,"$&/")+"/")+e)),t.push(c)),1;if(u=0,a=""===a?".":a+":",Array.isArray(e))for(var l=0;l<e.length;l++){var s=a+S(i=e[l],l);u+=_(i,t,o,s,c)}else if("function"==typeof(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e)))for(e=s.call(e),l=0;!(i=e.next()).done;)u+=_(i=i.value,t,o,s=a+S(i,l++),c);else if("object"===i)throw t=""+e,Error(p(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return u}function k(e,t,n){if(null==e)return e;var r=[],o=0;return _(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function P(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var A={current:null};function C(){var e=A.current;if(null===e)throw Error(p(321));return e}var N={ReactCurrentDispatcher:A,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:m,IsSomeRendererActing:{current:!1},assign:u};t.Children={map:k,forEach:function(e,t,n){k(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return k(e,(function(){t++})),t},toArray:function(e){return k(e,(function(e){return e}))||[]},only:function(e){if(!x(e))throw Error(p(143));return e}},t.Component=g,t.PureComponent=b,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N,t.cloneElement=function(e,t,r){if(null==e)throw Error(p(267,e));var o=u({},e.props),a=e.key,c=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,i=m.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)O.call(t,s)&&!w.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==l?l[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){l=Array(s);for(var f=0;f<s;f++)l[f]=arguments[f+2];o.children=l}return{$$typeof:n,type:e.type,key:a,ref:c,props:o,_owner:i}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:a,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:o,_context:e},e.Consumer=e},t.createElement=E,t.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=x,t.lazy=function(e){return{$$typeof:l,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:i,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return C().useCallback(e,t)},t.useContext=function(e,t){return C().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return C().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return C().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return C().useLayoutEffect(e,t)},t.useMemo=function(e,t){return C().useMemo(e,t)},t.useReducer=function(e,t,n){return C().useReducer(e,t,n)},t.useRef=function(e){return C().useRef(e)},t.useState=function(e){return C().useState(e)},t.version="17.0.1"})),s=r((function(e){e.exports=l}))},function(e,t,n){(function(t){var n=function(e){return e&&e.Math==Math&&e};e.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof t&&t)||function(){return this}()||Function("return this")()}).call(this,n(33))},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},function(e,t,n){var r=n(6),o=n(20),a=n(17);e.exports=r?function(e,t,n){return o.f(e,t,a(1,n))}:function(e,t,n){return e[t]=n,e}},function(e,t,n){"use strict";var r=n(30),o=n(9),a=n(27),c=n(10),i=n(7),u=n(58),l=n(60),s=n(62),f=Math.max,p=Math.min;r("replace",2,(function(e,t,n,r){var y=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,v=r.REPLACE_KEEPS_$0,g=y?"$":"$0";return[function(n,r){var o=i(this),a=null==n?void 0:n[e];return void 0!==a?a.call(n,o,r):t.call(String(o),n,r)},function(e,r){if(!y&&v||"string"==typeof r&&-1===r.indexOf(g)){var i=n(t,e,this,r);if(i.done)return i.value}var d=o(e),b=String(this),h="function"==typeof r;h||(r=String(r));var m=d.global;if(m){var O=d.unicode;d.lastIndex=0}for(var w=[];;){var E=s(d,b);if(null===E)break;if(w.push(E),!m)break;""===String(E[0])&&(d.lastIndex=u(b,a(d.lastIndex),O))}for(var x,j="",S=0,_=0;_<w.length;_++){E=w[_];for(var k=String(E[0]),P=f(p(c(E.index),b.length),0),A=[],C=1;C<E.length;C++)A.push(void 0===(x=E[C])?x:String(x));var N=E.groups;if(h){var T=[k].concat(A,P,b);void 0!==N&&T.push(N);var I=String(r.apply(void 0,T))}else I=l(k,b,P,A,N,r);P>=S&&(j+=b.slice(S,P)+I,S=P+k.length)}return j+b.slice(S)}]}))},function(e,t,n){var r=n(2);e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(e,t){e.exports=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e}},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t,n){var r=n(8);e.exports=function(e){if(!r(e))throw TypeError(String(e)+" is not an object");return e}},function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?r:n)(e)}},function(e,t,n){var r=n(35),o=n(7);e.exports=function(e){return r(o(e))}},function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},function(e,t,n){var r=n(1),o=n(4);e.exports=function(e,t){try{o(r,e,t)}catch(n){r[e]=t}return t}},function(e,t,n){var r=n(1),o=n(13),a="__core-js_shared__",c=r[a]||o(a,{});e.exports=c},function(e,t,n){"use strict";var r,o,a=n(51),c=n(52),i=RegExp.prototype.exec,u=String.prototype.replace,l=i,s=(r=/a/,o=/b*/g,i.call(r,"a"),i.call(o,"a"),0!==r.lastIndex||0!==o.lastIndex),f=c.UNSUPPORTED_Y||c.BROKEN_CARET,p=void 0!==/()??/.exec("")[1];(s||p||f)&&(l=function(e){var t,n,r,o,c=this,l=f&&c.sticky,y=a.call(c),v=c.source,g=0,d=e;return l&&(-1===(y=y.replace("y","")).indexOf("g")&&(y+="g"),d=String(e).slice(c.lastIndex),c.lastIndex>0&&(!c.multiline||c.multiline&&"\n"!==e[c.lastIndex-1])&&(v="(?: "+v+")",d=" "+d,g++),n=new RegExp("^(?:"+v+")",y)),p&&(n=new RegExp("^"+v+"$(?!\\s)",y)),s&&(t=c.lastIndex),r=i.call(l?n:c,d),l?r?(r.input=r.input.slice(g),r[0]=r[0].slice(g),r.index=c.lastIndex,c.lastIndex+=r[0].length):c.lastIndex=0:s&&r&&(c.lastIndex=c.global?r.index+r[0].length:t),p&&r&&r.length>1&&u.call(r[0],n,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)})),r}),e.exports=l},function(e,t,n){var r=n(6),o=n(34),a=n(17),c=n(11),i=n(18),u=n(3),l=n(19),s=Object.getOwnPropertyDescriptor;t.f=r?s:function(e,t){if(e=c(e),t=i(t,!0),l)try{return s(e,t)}catch(e){}if(u(e,t))return a(!o.f.call(e,t),e[t])}},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t,n){var r=n(8);e.exports=function(e,t){if(!r(e))return e;var n,o;if(t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;if("function"==typeof(n=e.valueOf)&&!r(o=n.call(e)))return o;if(!t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},function(e,t,n){var r=n(6),o=n(2),a=n(36);e.exports=!r&&!o((function(){return 7!=Object.defineProperty(a("div"),"a",{get:function(){return 7}}).a}))},function(e,t,n){var r=n(6),o=n(19),a=n(9),c=n(18),i=Object.defineProperty;t.f=r?i:function(e,t,n){if(a(e),t=c(t,!0),a(n),o)try{return i(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},function(e,t,n){var r=n(1),o=n(4),a=n(3),c=n(13),i=n(22),u=n(37),l=u.get,s=u.enforce,f=String(String).split("String");(e.exports=function(e,t,n,i){var u,l=!!i&&!!i.unsafe,p=!!i&&!!i.enumerable,y=!!i&&!!i.noTargetGet;"function"==typeof n&&("string"!=typeof t||a(n,"name")||o(n,"name",t),(u=s(n)).source||(u.source=f.join("string"==typeof t?t:""))),e!==r?(l?!y&&e[t]&&(p=!0):delete e[t],p?e[t]=n:o(e,t,n)):p?e[t]=n:c(t,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&l(this).source||i(this)}))},function(e,t,n){var r=n(14),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(e){return o.call(e)}),e.exports=r.inspectSource},function(e,t,n){var r=n(40),o=n(14);(e.exports=function(e,t){return o[e]||(o[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.9.1",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},function(e,t){var n=0,r=Math.random();e.exports=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++n+r).toString(36)}},function(e,t){e.exports={}},function(e,t,n){var r=n(43),o=n(1),a=function(e){return"function"==typeof e?e:void 0};e.exports=function(e,t){return arguments.length<2?a(r[e])||a(o[e]):r[e]&&r[e][t]||o[e]&&o[e][t]}},function(e,t,n){var r=n(10),o=Math.min;e.exports=function(e){return e>0?o(r(e),9007199254740991):0}},function(e,t,n){var r=n(54),o=n(55),a=n(2);e.exports=!!Object.getOwnPropertySymbols&&!a((function(){return!Symbol.sham&&(r?38===o:o>37&&o<41)}))},,function(e,t,n){"use strict";n(31);var r=n(21),o=n(2),a=n(53),c=n(15),i=n(4),u=a("species"),l=!o((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),s="$0"==="a".replace(/./,"$0"),f=a("replace"),p=!!/./[f]&&""===/./[f]("a","$0"),y=!o((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));e.exports=function(e,t,n,f){var v=a(e),g=!o((function(){var t={};return t[v]=function(){return 7},7!=""[e](t)})),d=g&&!o((function(){var t=!1,n=/a/;return"split"===e&&((n={}).constructor={},n.constructor[u]=function(){return n},n.flags="",n[v]=/./[v]),n.exec=function(){return t=!0,null},n[v](""),!t}));if(!g||!d||"replace"===e&&(!l||!s||p)||"split"===e&&!y){var b=/./[v],h=n(v,""[e],(function(e,t,n,r,o){return t.exec===c?g&&!o?{done:!0,value:b.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}}),{REPLACE_KEEPS_$0:s,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),m=h[0],O=h[1];r(String.prototype,e,m),r(RegExp.prototype,v,2==t?function(e,t){return O.call(e,this,t)}:function(e){return O.call(e,this)})}f&&i(RegExp.prototype[v],"sham",!0)}},function(e,t,n){"use strict";var r=n(32),o=n(15);r({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},function(e,t,n){var r=n(1),o=n(16).f,a=n(4),c=n(21),i=n(13),u=n(41),l=n(50);e.exports=function(e,t){var n,s,f,p,y,v=e.target,g=e.global,d=e.stat;if(n=g?r:d?r[v]||i(v,{}):(r[v]||{}).prototype)for(s in t){if(p=t[s],f=e.noTargetGet?(y=o(n,s))&&y.value:n[s],!l(g?s:v+(d?".":"#")+s,e.forced)&&void 0!==f){if(typeof p==typeof f)continue;u(p,f)}(e.sham||f&&f.sham)&&a(p,"sham",!0),c(n,s,p,e)}}},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,a=o&&!r.call({1:2},1);t.f=a?function(e){var t=o(this,e);return!!t&&t.enumerable}:r},function(e,t,n){var r=n(2),o=n(12),a="".split;e.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==o(e)?a.call(e,""):Object(e)}:Object},function(e,t,n){var r=n(1),o=n(8),a=r.document,c=o(a)&&o(a.createElement);e.exports=function(e){return c?a.createElement(e):{}}},function(e,t,n){var r,o,a,c=n(38),i=n(1),u=n(8),l=n(4),s=n(3),f=n(14),p=n(39),y=n(25),v=i.WeakMap;if(c){var g=f.state||(f.state=new v),d=g.get,b=g.has,h=g.set;r=function(e,t){return t.facade=e,h.call(g,e,t),t},o=function(e){return d.call(g,e)||{}},a=function(e){return b.call(g,e)}}else{var m=p("state");y[m]=!0,r=function(e,t){return t.facade=e,l(e,m,t),t},o=function(e){return s(e,m)?e[m]:{}},a=function(e){return s(e,m)}}e.exports={set:r,get:o,has:a,enforce:function(e){return a(e)?o(e):r(e,{})},getterFor:function(e){return function(t){var n;if(!u(t)||(n=o(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}}},function(e,t,n){var r=n(1),o=n(22),a=r.WeakMap;e.exports="function"==typeof a&&/native code/.test(o(a))},function(e,t,n){var r=n(23),o=n(24),a=r("keys");e.exports=function(e){return a[e]||(a[e]=o(e))}},function(e,t){e.exports=!1},function(e,t,n){var r=n(3),o=n(42),a=n(16),c=n(20);e.exports=function(e,t){for(var n=o(t),i=c.f,u=a.f,l=0;l<n.length;l++){var s=n[l];r(e,s)||i(e,s,u(t,s))}}},function(e,t,n){var r=n(26),o=n(44),a=n(49),c=n(9);e.exports=r("Reflect","ownKeys")||function(e){var t=o.f(c(e)),n=a.f;return n?t.concat(n(e)):t}},function(e,t,n){var r=n(1);e.exports=r},function(e,t,n){var r=n(45),o=n(48).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,o)}},function(e,t,n){var r=n(3),o=n(11),a=n(46).indexOf,c=n(25);e.exports=function(e,t){var n,i=o(e),u=0,l=[];for(n in i)!r(c,n)&&r(i,n)&&l.push(n);for(;t.length>u;)r(i,n=t[u++])&&(~a(l,n)||l.push(n));return l}},function(e,t,n){var r=n(11),o=n(27),a=n(47),c=function(e){return function(t,n,c){var i,u=r(t),l=o(u.length),s=a(c,l);if(e&&n!=n){for(;l>s;)if((i=u[s++])!=i)return!0}else for(;l>s;s++)if((e||s in u)&&u[s]===n)return e||s||0;return!e&&-1}};e.exports={includes:c(!0),indexOf:c(!1)}},function(e,t,n){var r=n(10),o=Math.max,a=Math.min;e.exports=function(e,t){var n=r(e);return n<0?o(n+t,0):a(n,t)}},function(e,t){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(e,t){t.f=Object.getOwnPropertySymbols},function(e,t,n){var r=n(2),o=/#|\.prototype\./,a=function(e,t){var n=i[c(e)];return n==l||n!=u&&("function"==typeof t?r(t):!!t)},c=a.normalize=function(e){return String(e).replace(o,".").toLowerCase()},i=a.data={},u=a.NATIVE="N",l=a.POLYFILL="P";e.exports=a},function(e,t,n){"use strict";var r=n(9);e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},function(e,t,n){"use strict";var r=n(2);function o(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=r((function(){var e=o("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=o("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},function(e,t,n){var r=n(1),o=n(23),a=n(3),c=n(24),i=n(28),u=n(57),l=o("wks"),s=r.Symbol,f=u?s:s&&s.withoutSetter||c;e.exports=function(e){return a(l,e)&&(i||"string"==typeof l[e])||(i&&a(s,e)?l[e]=s[e]:l[e]=f("Symbol."+e)),l[e]}},function(e,t,n){var r=n(12),o=n(1);e.exports="process"==r(o.process)},function(e,t,n){var r,o,a=n(1),c=n(56),i=a.process,u=i&&i.versions,l=u&&u.v8;l?o=(r=l.split("."))[0]+r[1]:c&&(!(r=c.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=c.match(/Chrome\/(\d+)/))&&(o=r[1]),e.exports=o&&+o},function(e,t,n){var r=n(26);e.exports=r("navigator","userAgent")||""},function(e,t,n){var r=n(28);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(e,t,n){"use strict";var r=n(59).charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},function(e,t,n){var r=n(10),o=n(7),a=function(e){return function(t,n){var a,c,i=String(o(t)),u=r(n),l=i.length;return u<0||u>=l?e?"":void 0:(a=i.charCodeAt(u))<55296||a>56319||u+1===l||(c=i.charCodeAt(u+1))<56320||c>57343?e?i.charAt(u):a:e?i.slice(u,u+2):c-56320+(a-55296<<10)+65536}};e.exports={codeAt:a(!1),charAt:a(!0)}},function(e,t,n){var r=n(61),o=Math.floor,a="".replace,c=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,i=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,n,u,l,s){var f=n+e.length,p=u.length,y=i;return void 0!==l&&(l=r(l),y=c),a.call(s,y,(function(r,a){var c;switch(a.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,n);case"'":return t.slice(f);case"<":c=l[a.slice(1,-1)];break;default:var i=+a;if(0===i)return r;if(i>p){var s=o(i/10);return 0===s?r:s<=p?void 0===u[s-1]?a.charAt(1):u[s-1]+a.charAt(1):r}c=u[i-1]}return void 0===c?"":c}))}},function(e,t,n){var r=n(7);e.exports=function(e){return Object(r(e))}},function(e,t,n){var r=n(12),o=n(15);e.exports=function(e,t){var n=e.exec;if("function"==typeof n){var a=n.call(e,t);if("object"!=typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(e,t)}},function(e,t,n){"use strict";n.r(t);const r="60661c9a92b45e0abe0e0560";n(5);var o=n(0);function a(){}function c(){}c.resetWarningCache=a;var i=Object(o.a)((function(e){e.exports=function(){function e(e,t,n,r,o,a){if("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"!==a){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:c,resetWarningCache:a};return n.PropTypes=n,n}()}));function u(e){console.warn("[react-ga]",e)}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){O(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m(e);if(t){var o=m(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return b(this,n)}}function b(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?h(e):t}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var w="_blank",E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(c,e);var t,n,r,a=d(c);function c(){var e;y(this,c);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return O(h(e=a.call.apply(a,[this].concat(n))),"handleClick",(function(t){var n=e.props,r=n.target,o=n.eventLabel,a=n.to,i=n.onClick,u=n.trackerNames,l={label:o},s=r!==w,f=!(t.ctrlKey||t.shiftKey||t.metaKey||1===t.button);s&&f?(t.preventDefault(),c.trackLink(l,(function(){window.location.href=a}),u)):c.trackLink(l,(function(){}),u),i&&i(t)})),e}return t=c,(n=[{key:"render",value:function(){var e=this.props,t=e.to,n=e.target,r=f(f({},p(e,["to","target"])),{},{target:n,href:t,onClick:this.handleClick});return n===w&&(r.rel="".concat(r.rel?r.rel:""," noopener noreferrer").trim()),delete r.eventLabel,delete r.trackerNames,o.c.createElement("a",r)}}])&&v(t.prototype,n),r&&v(t,r),c}(o.c.Component);O(E,"trackLink",(function(){u("ga tracking not enabled")})),E.propTypes={eventLabel:i.string.isRequired,target:i.string,to:i.string,onClick:i.func,trackerNames:i.arrayOf(i.string)},E.defaultProps={target:null,to:null,onClick:null,trackerNames:null};function x(e){return"string"==typeof(t=e)&&-1!==t.indexOf("@")?(u("This arg looks like an email address, redacting."),"REDACTED (Potential Email Address)"):e;var t}function j(e){return e&&e.toString().replace(/^\s+|\s+$/g,"")}var S=/^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;function _(e){return j(e).replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g,(function(e,t,n){return t>0&&t+e.length!==n.length&&e.search(S)>-1&&":"!==n.charAt(t-2)&&("-"!==n.charAt(t+e.length)||"-"===n.charAt(t-1))&&n.charAt(t-1).search(/[^\s-]/)<0?e.toLowerCase():e.substr(1).search(/[A-Z]|\../)>-1?e:e.charAt(0).toUpperCase()+e.substr(1)}))}var k=!1;function P(e){console.info("[react-ga]",e)}var A=[],C={calls:A,ga:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];A.push([].concat(t))},resetCalls:function(){A.length=0}};function N(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function I(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function R(e){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function D(e){return function(e){if(Array.isArray(e))return $(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return $(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return $(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function $(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var L="undefined"==typeof window||"undefined"==typeof document,q=!1,M=!0,U=!1,F=!0,z=!0,B=function(){var e;return U?C.ga.apply(C,arguments):!L&&(window.ga?(e=window).ga.apply(e,arguments):u("ReactGA.initialize must be called first or GoogleAnalytics should be loaded manually"))};function V(e){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=e||"";return(arguments.length>1?arguments[1]:void 0)&&(n=_(e)),t&&(n=x(n)),n}(e,M,z)}function G(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=n[0];"string"==typeof o?(!F&&Array.isArray(e)||B.apply(void 0,n),Array.isArray(e)&&e.forEach((function(e){B.apply(void 0,D(["".concat(e,".").concat(o)].concat(n.slice(1))))}))):u("ga command must be a string")}function K(e,t){e?t&&(t.debug&&!0===t.debug&&(q=!0),!1===t.titleCase&&(M=!1),!1===t.redactEmail&&(z=!1),t.useExistingGa)||(t&&t.gaOptions?B("create",e,t.gaOptions):B("create",e,"auto")):u("gaTrackingID is required in initialize()")}function J(e,t){return Array.isArray(e)?e.forEach((function(e){"object"===R(e)?K(e.trackingId,e):u("All configs must be an object")})):K(e,t),!0}function W(e,t){if(t&&!0===t.testMode)U=!0;else{if(L)return;t&&!0===t.standardImplementation||function(e){if(!k){k=!0;var t="https://www.google-analytics.com/analytics.js";e&&e.gaAddress?t=e.gaAddress:e&&e.debug&&(t="https://www.google-analytics.com/analytics_debug.js");var n,r,o,a,c,i,u,l=e&&e.onerror;n=window,r=document,o="script",a=t,c="ga",n.GoogleAnalyticsObject=c,n.ga=n.ga||function(){(n.ga.q=n.ga.q||[]).push(arguments)},n.ga.l=1*new Date,i=r.createElement(o),u=r.getElementsByTagName(o)[0],i.async=1,i.src=a,i.onerror=l,u.parentNode.insertBefore(i,u)}}(t)}F=!t||"boolean"!=typeof t.alwaysSendToDefaultTracker||t.alwaysSendToDefaultTracker,J(e,t)}function H(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length>0&&(B.apply(void 0,t),q&&(P("called ga('arguments');"),P("with arguments: ".concat(JSON.stringify(t))))),window.ga}function Y(e,t){e?"object"===R(e)?(0===Object.keys(e).length&&u("empty `fieldsObject` given to .set()"),G(t,"set",e),q&&(P("called ga('set', fieldsObject);"),P("with fieldsObject: ".concat(JSON.stringify(e))))):u("Expected `fieldsObject` arg to be an Object"):u("`fieldsObject` is required in .set()")}function Z(e,t){G(t,"send",e),q&&(P("called ga('send', fieldObject);"),P("with fieldObject: ".concat(JSON.stringify(e))),P("with trackers: ".concat(JSON.stringify(t))))}function X(e,t,n){if(e){var r=j(e);if(""!==r){var o={};if(n&&(o.title=n),G(t,"send",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){I(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({hitType:"pageview",page:r},o)),q){P("called ga('send', 'pageview', path);");var a="";n&&(a=" and title: ".concat(n)),P("with path: ".concat(r).concat(a))}}else u("path cannot be an empty string in .pageview()")}else u("path is required in .pageview()")}function Q(e,t){if(e){var n,r="/"===(n=j(e)).substring(0,1)?n.substring(1):n;if(""!==r){var o="/modal/".concat(r);G(t,"send","pageview",o),q&&(P("called ga('send', 'pageview', path);"),P("with path: ".concat(o)))}else u("modalName cannot be an empty string or a single / in .modalview()")}else u("modalName is required in .modalview(modalName)")}function ee(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.category,n=e.variable,r=e.value,o=e.label,a=arguments.length>1?arguments[1]:void 0;if(t&&n&&"number"==typeof r){var c={hitType:"timing",timingCategory:V(t),timingVar:V(n),timingValue:r};o&&(c.timingLabel=V(o)),Z(c,a)}else u("args.category, args.variable AND args.value are required in timing() AND args.value has to be a number")}function te(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.category,n=e.action,r=e.label,o=e.value,a=e.nonInteraction,c=e.transport,i=N(e,["category","action","label","value","nonInteraction","transport"]),l=arguments.length>1?arguments[1]:void 0;if(t&&n){var s={hitType:"event",eventCategory:V(t),eventAction:V(n)};r&&(s.eventLabel=V(r)),void 0!==o&&("number"!=typeof o?u("Expected `args.value` arg to be a Number."):s.eventValue=o),void 0!==a&&("boolean"!=typeof a?u("`args.nonInteraction` must be a boolean."):s.nonInteraction=a),void 0!==c&&("string"!=typeof c?u("`args.transport` must be a string."):(-1===["beacon","xhr","image"].indexOf(c)&&u("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"),s.transport=c)),Object.keys(i).filter((function(e){return"dimension"===e.substr(0,"dimension".length)})).forEach((function(e){s[e]=i[e]})),Object.keys(i).filter((function(e){return"metric"===e.substr(0,"metric".length)})).forEach((function(e){s[e]=i[e]})),Z(s,l)}else u("args.category AND args.action are required in event()")}function ne(e,t){var n=e.description,r=e.fatal,o={hitType:"exception"};n&&(o.exDescription=V(n)),void 0!==r&&("boolean"!=typeof r?u("`args.fatal` must be a boolean."):o.exFatal=r),Z(o,t)}var re={require:function(e,t,n){if(e){var r=j(e);if(""!==r){var o=n?"".concat(n,".require"):"require";if(t){if("object"!==R(t))return void u("Expected `options` arg to be an Object");0===Object.keys(t).length&&u("Empty `options` given to .require()"),H(o,r,t),q&&P("called ga('require', '".concat(r,"', ").concat(JSON.stringify(t)))}else H(o,r),q&&P("called ga('require', '".concat(r,"');"))}else u("`name` cannot be an empty string in .require()")}else u("`name` is required in .require()")},execute:function(e,t){for(var n,r,o=arguments.length,a=new Array(o>2?o-2:0),c=2;c<o;c++)a[c-2]=arguments[c];if(1===a.length?n=a[0]:(r=a[0],n=a[1]),"string"!=typeof e)u("Expected `pluginName` arg to be a String.");else if("string"!=typeof t)u("Expected `action` arg to be a String.");else{var i="".concat(e,":").concat(t);n=n||null,r&&n?(H(i,r,n),q&&(P("called ga('".concat(i,"');")),P('actionType: "'.concat(r,'" with payload: ').concat(JSON.stringify(n))))):n?(H(i,n),q&&(P("called ga('".concat(i,"');")),P("with payload: ".concat(JSON.stringify(n))))):(H(i),q&&P("called ga('".concat(i,"');")))}}};function oe(e,t,n){if("function"==typeof t)if(e&&e.label){var r={hitType:"event",eventCategory:"Outbound",eventAction:"Click",eventLabel:V(e.label)},o=!1,a=setTimeout((function(){o=!0,t()}),250);r.hitCallback=function(){clearTimeout(a),o||t()},Z(r,n)}else u("args.label is required in outboundLink()");else u("hitCallback function is required")}var ae=C,ce={initialize:W,ga:H,set:Y,send:Z,pageview:X,modalview:Q,timing:ee,event:te,exception:ne,plugin:re,outboundLink:oe,testModeAPI:C},ie=Object.freeze({__proto__:null,addTrackers:J,initialize:W,ga:H,set:Y,send:Z,pageview:X,modalview:Q,timing:ee,event:te,exception:ne,plugin:re,outboundLink:oe,testModeAPI:ae,default:ce});function ue(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function le(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ue(Object(n),!0).forEach((function(t){se(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ue(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function se(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}E.origTrackLink=E.trackLink,E.trackLink=oe;var fe=E,pe=(le(le({},ie),{},{OutboundLink:fe}),o.c.StrictMode),ye=o.c.useCallback,ve=o.c.useEffect,ge=o.c.useMemo,de=o.c.useState,be=n(29);var he=()=>{const[e,t]=de(!1);return ve((()=>{t(!0)}),[]),{show:e}},me="_3xF9bC7rNphr2NaxV5fUwN",Oe="_1o8mjehahsy_NskHo57EmD",we="_1Kb1Ib4NATS_d6JM34zTDL";const Ee=`?id=${r}`;var xe=()=>{const{show:e}=he();return o.c.createElement("aside",{className:`${me}${e?" "+Oe:""}`},"Deploy full-stack apps fast on Orb!",o.c.createElement("a",{className:we,href:`https://www.orbclouds.com${Ee}`,title:"Deploy on Orb"},"Go"))},je="_3dcKhsWI8Q1ZPeNSLnjamF";var Se=e=>o.c.createElement("input",{className:je,placeholder:"Enter an income to see tax calculations",type:"number",min:0,...e});const _e=e=>"$"+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");var ke="_32jO5dH-9t2lGuzTmr_yn";var Pe=({children:e})=>o.c.createElement("span",{className:ke},e),Ae="_1NuyZE9jhCnWjvU5D2VL6Y";var Ce=({children:e})=>o.c.createElement("section",{className:Ae},e),Ne="_27D78zI-UTUfGn8znVdbC9";var Te=({children:e})=>o.c.createElement("span",{className:Ne},e),Ie={Container:"_3mcyH-ZkjUjXF6s5DIZ1c8",Bar:"_2ifxBBNK0_FX8kAG2Dijts",Value:"_2wesez0Cc0igcspvSTMQqy"};const Re=({factor:e,width:t,index:n})=>({height:100*n+"%",width:e*t+"%"});var De=({factor:e,label:t,value:n,index:r,width:a=60})=>o.c.createElement("div",{className:Ie.Container,style:Re({index:r,width:a,factor:e})},o.c.createElement("div",{className:Ie.Value},_e(Math.floor(n))),o.c.createElement("div",{className:Ie.Bar}),o.c.createElement("div",{className:Ie.Label},t));var $e=e=>({max:ge((()=>{let t=null;for(let n=0;n<e.length;n++){const{value:r,label:o}=e[n];(null===t||r>t)&&(t=r)}return t}),[e])}),Le="XC0yxxpb_qgOrzjldNK_r";var qe=({values:e})=>{const{max:t}=$e(e);return o.c.createElement("article",{className:Le},e.map((({value:n,label:r},a)=>o.c.createElement(De,{key:a,value:n,label:r,index:n/t,factor:1/e.length}))))},Me="SAXM7pmrmnRO0a89-IMcT",Ue="_3UIoZ9WhrqqKm3pmxwPT1E";var Fe=({income:e,rate:t,tax:n,cap:r})=>o.c.createElement("section",{className:Me},o.c.createElement(Ce,null,o.c.createElement("div",{className:Ue},o.c.createElement("div",null,o.c.createElement(Pe,null,"Tax rate: "),o.c.createElement(Te,null,(e=>100*e+"%")(t))),o.c.createElement("div",null,o.c.createElement(Pe,null,"Income bracket: "),o.c.createElement(Te,null,r===1/0?"NA":_e(r))))),o.c.createElement(Ce,null,o.c.createElement(qe,{values:[{value:n,label:"Taxes paid"},{value:Math.min(n/t,r),label:"Income within bracket"}]})));const ze=[{rate:.1,cap:9950},{rate:.12,cap:40525},{rate:.22,cap:86275},{rate:.24,cap:164925},{rate:.32,cap:209425},{rate:.35,cap:523600},{rate:.37,cap:1/0}];var Be="_3WFEGjnQTwswnOV61cG-vH";var Ve=({income:e})=>{const t=((e,t)=>{let n=[],r=e;for(let e=0;e<t.length&&0!==r;e++){const{rate:o,cap:a}=t[e],c=Math.min(Number.isNaN(a)?r:a,r),i=c*o;r-=c,n=[...n,{rate:o,cap:a,tax:i}]}return n})(e,ze);return o.c.createElement("section",{className:Be},t.map(((t,n)=>o.c.createElement(Fe,{key:n,income:e,...t}))))};var Ge=()=>{const[e,t]=de("");return{value:e,onChange:ye((({currentTarget:e})=>{const{value:n}=e;t(n)}),[])}},Ke="_1ER73B1zzv5Euo-KsqQvmY",Je="AiESWOqIuLuBC0IJy9J6L";var We=()=>{const{...e}=Ge(),t=parseInt(e.value);return o.c.createElement(o.c.Fragment,null,o.c.createElement(xe,null),o.c.createElement("main",{className:Ke},o.c.createElement("header",{className:Je},o.c.createElement(Se,{...e})),o.c.createElement(Ve,{income:Number.isNaN(t)?0:t})))};const He=document.getElementById("app");Object(be.a)(o.c.createElement(pe,null,o.c.createElement(We,null)),He)}],[[63,3,2,1]]]);