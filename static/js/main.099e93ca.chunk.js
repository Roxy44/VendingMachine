(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{126:function(t,e,r){t.exports=r(145)},143:function(t,e,r){},144:function(t,e,r){},145:function(t,e,r){"use strict";r.r(e);var n=r(0),a=r.n(n),o=r(110),c=r(38),i=r(76),u=r(120),l=r(50),s={products:[],withdraw:[],count:1,balance:0},h=r(23),f=r(154),p=r(152),d={products:[{name:"Lays",count:10,price:100},{name:"Cola",count:5,price:50},{name:"Snickers",count:20,price:33},{name:"Twix",count:8,price:26},{name:"M&Ms",count:13,price:58},{name:"Sandwiches",count:5,price:100},{name:"Water",count:10,price:40},{name:"Cookie",count:30,price:20}],withdraw:[{value:1,count:100},{value:5,count:50},{value:10,count:50},{value:50,count:25},{value:100,count:25},{value:500,count:10}],balance:0};function v(){v=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",i=a.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(C){u=function(t,e,r){return t[e]=r}}function l(t,e,r,a){var o=e&&e.prototype instanceof f?e:f,c=Object.create(o.prototype),i=new L(a||[]);return n(c,"_invoke",{value:O(t,r,i)}),c}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(C){return{type:"throw",arg:C}}}t.wrap=l;var h={};function f(){}function p(){}function d(){}var m={};u(m,o,function(){return this});var y=Object.getPrototypeOf,b=y&&y(y(N([])));b&&b!==e&&r.call(b,o)&&(m=b);var g=d.prototype=f.prototype=Object.create(m);function w(t){["next","throw","return"].forEach(function(e){u(t,e,function(t){return this._invoke(e,t)})})}function E(t,e){var a;n(this,"_invoke",{value:function(n,o){function c(){return new e(function(a,c){!function n(a,o,c,i){var u=s(t[a],t,o);if("throw"!==u.type){var l=u.arg,h=l.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then(function(t){n("next",t,c,i)},function(t){n("throw",t,c,i)}):e.resolve(h).then(function(t){l.value=t,c(l)},function(t){return n("throw",t,c,i)})}i(u.arg)}(n,o,a,c)})}return a=a?a.then(c,c):c()}})}function O(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return A()}for(r.method=a,r.arg=o;;){var c=r.delegate;if(c){var i=x(c,r);if(i){if(i===h)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function x(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var a=s(n,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,h;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function N(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:A}}function A(){return{value:void 0,done:!0}}return p.prototype=d,n(g,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:p,configurable:!0}),p.displayName=u(d,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,u(t,i,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},w(E.prototype),u(E.prototype,c,function(){return this}),t.AsyncIterator=E,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var c=new E(l(e,r,n,a),o);return t.isGeneratorFunction(r)?c:c.next().then(function(t){return t.done?t.value:c.next()})},w(g),u(g,i,"Generator"),u(g,o,function(){return this}),u(g,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=N,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return c.type="throw",c.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],c=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var i=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(i&&u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=t,c.arg=e,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;_(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:N(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}var m=v().mark(j),y=v().mark(_),b=v().mark(L),g=v().mark(N),w=v().mark(A),E=v().mark(C),O=v().mark(k),x="https://vendingmachineserver.onrender.com";function j(){var t,e,r;return v().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(h.b)(p.a.get,"".concat(x,"/machine"));case 3:return t=n.sent,e=t.data,r=e.products.map(function(t){return t.count}).reduce(function(t,e){return t+e},0),n.next=8,Object(h.d)({type:"SET_PRODUCT_DATA",payload:e.products});case 8:return n.next=10,Object(h.d)({type:"SET_MACHINE_WITHDRAW",payload:e.withdraw});case 10:return n.next=12,Object(h.d)({type:"SET_MACHINE_BALANCE",payload:e.balance});case 12:return n.next=14,Object(h.d)({type:"SET_PRODUCT_COUNT",payload:r});case 14:n.next=19;break;case 16:n.prev=16,n.t0=n.catch(0),f.a.error("Error!");case 19:case"end":return n.stop()}},m,null,[[0,16]])}function _(t){var e,r,n;return v().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(h.e)(function(t){return t.machineData});case 3:return e=a.sent,r=e.balance,n=e.products,a.next=8,Object(h.b)(p.a.post,"".concat(x,"/machine"),{products:n,withdraw:t.changedWithdraw,balance:r+t.cashValue});case 8:return a.next=10,Object(h.b)(j);case 10:a.next=15;break;case 12:a.prev=12,a.t0=a.catch(0),f.a.error("Error");case 15:case"end":return a.stop()}},y,null,[[0,12]])}function L(t){var e,r,n;return v().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(h.e)(function(t){return t.machineData});case 3:return e=a.sent,r=e.products,n=t.changedProduct.length?t.changedProduct:r,a.next=8,Object(h.b)(p.a.post,"".concat(x,"/machine"),{products:n,withdraw:t.changedWithdraw,balance:0});case 8:return a.next=10,Object(h.b)(j);case 10:a.next=15;break;case 12:a.prev=12,a.t0=a.catch(0),f.a.error("Error");case 15:case"end":return a.stop()}},b,null,[[0,12]])}function N(t){var e,r,n;return v().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(h.e)(function(t){return t.machineData});case 3:return e=a.sent,r=e.withdraw,n=e.balance,a.next=8,Object(h.b)(p.a.post,"".concat(x,"/machine"),{products:t.changedProduct,withdraw:r,balance:n});case 8:return a.next=10,Object(h.b)(j);case 10:a.next=15;break;case 12:a.prev=12,a.t0=a.catch(0),f.a.error("Error");case 15:case"end":return a.stop()}},g,null,[[0,12]])}function A(t){var e,r,n;return v().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(h.e)(function(t){return t.machineData});case 3:return e=a.sent,r=e.balance,n=e.withdraw,a.next=8,Object(h.b)(p.a.post,"".concat(x,"/machine"),{products:t.changedProduct,withdraw:n,balance:t.price?r-t.price:r});case 8:return a.next=10,Object(h.b)(j);case 10:a.next=15;break;case 12:a.prev=12,a.t0=a.catch(0),f.a.error("Error");case 15:case"end":return a.stop()}},w,null,[[0,12]])}function C(){return v().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(h.b)(p.a.post,"".concat(x,"/machine"),d);case 3:return t.next=5,Object(h.b)(j);case 5:t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),f.a.error("Error");case 10:case"end":return t.stop()}},E,null,[[0,7]])}function k(){return v().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(h.a)([Object(h.f)("GET_MACHINE_DATA_FROM_JSON",j),Object(h.f)("INCREASE_MACHINE_BALANCE",_),Object(h.f)("DECREASE_MACHINE_BALANCE",L),Object(h.f)("BUY_PRODUCT",A),Object(h.f)("CHANGE_MACHINE_PRODUCT",N),Object(h.f)("RESET_MACHINE_DATA",C)]);case 2:case"end":return t.stop()}},O)}function T(){T=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",i=a.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(A){u=function(t,e,r){return t[e]=r}}function l(t,e,r,a){var o=e&&e.prototype instanceof f?e:f,c=Object.create(o.prototype),i=new _(a||[]);return n(c,"_invoke",{value:E(t,r,i)}),c}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(A){return{type:"throw",arg:A}}}t.wrap=l;var h={};function f(){}function p(){}function d(){}var v={};u(v,o,function(){return this});var m=Object.getPrototypeOf,y=m&&m(m(L([])));y&&y!==e&&r.call(y,o)&&(v=y);var b=d.prototype=f.prototype=Object.create(v);function g(t){["next","throw","return"].forEach(function(e){u(t,e,function(t){return this._invoke(e,t)})})}function w(t,e){var a;n(this,"_invoke",{value:function(n,o){function c(){return new e(function(a,c){!function n(a,o,c,i){var u=s(t[a],t,o);if("throw"!==u.type){var l=u.arg,h=l.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then(function(t){n("next",t,c,i)},function(t){n("throw",t,c,i)}):e.resolve(h).then(function(t){l.value=t,c(l)},function(t){return n("throw",t,c,i)})}i(u.arg)}(n,o,a,c)})}return a=a?a.then(c,c):c()}})}function E(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return N()}for(r.method=a,r.arg=o;;){var c=r.delegate;if(c){var i=O(c,r);if(i){if(i===h)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function O(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,O(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var a=s(n,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,h;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function L(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:N}}function N(){return{value:void 0,done:!0}}return p.prototype=d,n(b,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:p,configurable:!0}),p.displayName=u(d,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,u(t,i,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},g(w.prototype),u(w.prototype,c,function(){return this}),t.AsyncIterator=w,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var c=new w(l(e,r,n,a),o);return t.isGeneratorFunction(r)?c:c.next().then(function(t){return t.done?t.value:c.next()})},g(b),u(b,i,"Generator"),u(b,o,function(){return this}),u(b,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=L,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return c.type="throw",c.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],c=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var i=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(i&&u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=t,c.arg=e,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;j(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:L(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}var S=T().mark(P);function P(){return T().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(h.a)([Object(h.c)(k)]);case 2:case"end":return t.stop()}},S)}var D=Object(i.b)({machineData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_PRODUCT_DATA":return Object(l.a)({},t,{products:e.payload});case"SET_MACHINE_WITHDRAW":return Object(l.a)({},t,{withdraw:e.payload});case"SET_MACHINE_BALANCE":return Object(l.a)({},t,{balance:e.payload});case"SET_PRODUCT_COUNT":return Object(l.a)({},t,{count:e.payload});default:return t}}}),I=Object(u.a)(),M=Object(i.d)(D,Object(i.a)(I));I.run(P);var G=r(155),R=(r(143),r(82)),H=r(10),F=r(153),B=function(){var t=Object(c.b)(),e=Object(c.c)(function(t){return t.machineData}),r=e.withdraw,o=e.balance,i=e.products,u=Object(n.useState)(null),s=Object(H.a)(u,2),h=s[0],p=s[1];return a.a.createElement("div",{className:"operationButtons"},a.a.createElement("div",{className:"depositCash"},a.a.createElement(F.a,{placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443",onChange:function(t){return p(t)},options:[{value:50,label:"50"},{value:100,label:"100"},{value:500,label:"500"},{value:1e3,label:"1000"}]}),a.a.createElement(G.a,{onClick:function(){if(h){var e=r.map(function(t){return t.value===h?Object(l.a)({},t,{count:t.count+1}):2*t.value===1e3&&1e3===h?Object(l.a)({},t,{count:t.count+2}):t});t({type:"INCREASE_MACHINE_BALANCE",cashValue:h,changedWithdraw:e})}}},"\u0412\u043d\u0435\u0441\u0442\u0438")),a.a.createElement(G.a,{className:"withdrawCash",onClick:function(){if(0!==o){var e=function(){for(var t=Object(R.a)(r).reverse(),e=o,n=[],a=0,c=1;e>0;)e<t[a].value?(a++,c=1):e>=t[a].value*(c+1)?c++:(n.push({value:t[a].value,count:c}),e-=t[a].value*c,a++,c=1);var u=o,s=Object(R.a)(r).reverse().map(function(t){if(0!==t.count&&u>0&&u>=t.value){for(var e=0;u>=t.value&&e!==t.count;)u-=t.value,e++;return Object(l.a)({},t,{count:t.count-e})}return t});if(n.length>0){var h="\u0412\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u043b\u0438 ";n.forEach(function(t){return h=h+t.value+" \u0440\u0443\u0431. \u0432 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0435 "+t.count+", "}),f.a.success(h,10)}u&&f.a.success("\u0430 \u0442\u0430\u043a\u0436\u0435: ".concat(u," \u0440\u0443\u0431. \u0432 \u0432\u0438\u0434\u0435:"),10);var p=i;if(0!==u){for(var d=[],v=function(){var t=p,e={price:0,name:""};t.forEach(function(t){(u>t.price||2*u>=t.price)&&e.price<t.price&&0!==t.count&&(e={price:t.price,name:t.name})}),0===e.price&&(u=0),u-=e.price,d.push(e),p=t.map(function(t){return t.name===e.name&&0!==t.count?Object(l.a)({},t,{count:t.count-1}):t})};u>0;)v();var m="";d.forEach(function(t){return m=m+t.name+" \u0432 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0435 1\u0448\u0442, "}),f.a.success(m,10)}return{changedWithdraw:s.reverse(),changedProduct:p}}(),n=e.changedWithdraw,a=e.changedProduct;t({type:"DECREASE_MACHINE_BALANCE",changedWithdraw:n,changedProduct:a})}}},"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0441\u0434\u0430\u0447\u0443"))},U=function(){var t=Object(c.c)(function(t){return t.machineData.balance});return a.a.createElement("div",{className:"techMenu"},a.a.createElement("div",{className:"userIntrfaceContainer"},a.a.createElement("div",{className:"balance"},"\u0411\u0410\u041b\u0410\u041d\u0421 : ",t),a.a.createElement("div",{className:"buyProduct"})),a.a.createElement(B,null))},W=r(74),Y=r(73),J=function(){var t=Object(c.c)(function(t){return t.machineData.products}),e=Object(c.c)(function(t){return t.machineData.balance}),r=Object(c.b)();return a.a.createElement("div",{className:"shopContainer"},t.length?t.map(function(n,o){return a.a.createElement("div",{key:o,className:"shopShelf"},0!==n.count?a.a.createElement(G.a,{onClick:function(){return function(n,a){if(e>=a){var o=t.map(function(t,e){return e===n?{name:t.name,count:t.count-1,price:t.price}:t});r({type:"BUY_PRODUCT",productId:n,price:a,changedProduct:o}),f.a.success("\u0412\u044b \u043a\u0443\u043f\u0438\u043b\u0438 ".concat(t.filter(function(t,e){return e===n})[0].name))}else f.a.warning("\u041d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0434\u043b\u044f \u043f\u043e\u043a\u0443\u043f\u043a\u0438, \u043f\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0431\u0430\u043b\u0430\u043d\u0441!")}(o,n.price)}},a.a.createElement("span",{style:{whiteSpace:"pre-line"}},"".concat(n.name,"\n                                    \u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c: ").concat(n.price,"\n                                    \u041e\u0441\u0442\u0430\u043b\u043e\u0441\u044c: ").concat(n.count," \u0448\u0442."))):a.a.createElement("div",{className:"noProduct"},a.a.createElement(Y.a,{className:"noProductIcon"}),a.a.createElement("span",null,"\u041d\u0435\u0442 \u0432 \u043d\u0430\u043b\u0438\u0447\u0438\u0438")))}):a.a.createElement("div",{className:"noProduct dataBaseError"},a.a.createElement(W.a,{image:W.a.PRESENTED_IMAGE_SIMPLE})))},V=r(151),q=function(){var t=Object(c.c)(function(t){return t.machineData.withdraw});return a.a.createElement(V.a,{title:"\u0412\u0430\u043b\u044e\u0442\u0430 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0430",className:"withdrawCard"},t.map(function(t,e){return a.a.createElement("div",{key:e},"\u041d\u043e\u043c\u0438\u043d\u0430\u043b: ",t.value,", \u043a\u043e\u043b\u0438\u0447\u0435\u0442\u0441\u0432\u043e: ",t.count)}))},z=function(){var t=Object(c.b)(),e=Object(c.c)(function(t){return t.machineData.count});Object(n.useEffect)(function(){t({type:"GET_MACHINE_DATA_FROM_JSON"})},[]);return a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"adminPanel"},a.a.createElement(G.a,{type:"primary",style:0===e?{background:"red"}:{background:"grey"},onClick:function(){t({type:"RESET_MACHINE_DATA"})}},"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u043c\u0430\u0433\u0430\u0437\u0438\u043d")),a.a.createElement("div",{className:"container"},a.a.createElement(q,null),a.a.createElement("div",{className:"ATMContainer"},a.a.createElement(J,null),a.a.createElement(U,null))))},K=(r(144),document.getElementById("root"));Object(o.createRoot)(K).render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(c.a,{store:M},a.a.createElement(z,null))))}},[[126,1,2]]]);
//# sourceMappingURL=main.099e93ca.chunk.js.map