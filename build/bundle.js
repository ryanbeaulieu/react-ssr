(()=>{"use strict";var t={n:e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},d:(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};require("@babel/polyfill");const e=require("express");var n=t.n(e);const r=require("react-router-config"),o=require("express-http-proxy");var c=t.n(o);const u=require("react");var i=t.n(u);const a=require("react-redux"),s=require("react-router-dom"),f=(0,a.connect)((function(t){return{auth:t.auth}}))((function(t){var e=t.auth;return i().createElement("header",null,i().createElement(s.Link,{to:"/"},"Home"),i().createElement(s.Link,{to:"/users"},"Users"),i().createElement(s.Link,{to:"/admins"},"Admins"),e?i().createElement("a",{href:"/api/logout"},"Logout"):i().createElement("a",{href:"/api/auth/google"},"Log In"))}));function l(t,e,n,r,o,c,u){try{var i=t[c](u),a=i.value}catch(t){return void n(t)}i.done?e(a):Promise.resolve(a).then(r,o)}function p(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var c=t.apply(e,n);function u(t){l(c,r,o,u,i,"next",t)}function i(t){l(c,r,o,u,i,"throw",t)}u(void 0)}))}}var y="fetch_users",h=function(){return function(){var t=p(regeneratorRuntime.mark((function t(e,n,r){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.get("/users");case 2:o=t.sent,e({type:y,payload:o});case 4:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}()},m="fetch_current_user",d="fetch_admins",b=function(){return function(){var t=p(regeneratorRuntime.mark((function t(e,n,r){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.get("/admins");case 2:o=t.sent,e({type:d,payload:o});case 4:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}()};const v={component:function(t){var e=t.route;return i().createElement("div",null,i().createElement(f,null),(0,r.renderRoutes)(e.routes))},loadData:function(t){return(0,t.dispatch)(function(){var t=p(regeneratorRuntime.mark((function t(e,n,r){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.get("/current_user");case 2:o=t.sent,e({type:m,payload:o});case 4:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}())}};function g(t){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function O(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function w(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function E(t,e){return(E=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function j(t,e){return!e||"object"!==g(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function P(t){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function R(t){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function S(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function x(t,e){return(x=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function k(t,e){return!e||"object"!==R(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function D(t){return(D=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var T=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&x(t,e)}(u,t);var e,n,r,o,c=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=D(r);if(o){var n=D(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return k(this,t)});function u(){return _(this,u),c.apply(this,arguments)}return e=u,(n=[{key:"componentDidMount",value:function(){this.props.fetchAdmins()}},{key:"render",value:function(){return i().createElement("div",null,"This is a list of admins",i().createElement("ul",null,this.props.admins.map((function(t){return i().createElement("li",{key:t.id},t.name)}))))}}])&&S(e.prototype,n),u}(u.Component);const q={component:(0,a.connect)((function(t){return{admins:t.admins}}),{fetchAdmins:b})((C=T,L=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&E(t,e)}(u,t);var e,n,r,o,c=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=P(r);if(o){var n=P(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return j(this,t)});function u(){return O(this,u),c.apply(this,arguments)}return e=u,(n=[{key:"render",value:function(){switch(this.props.auth){case!1:return i().createElement(s.Redirect,{to:"/"});case null:return i().createElement("p",null,"Loading...");default:return i().createElement(C,this.props)}}}])&&w(e.prototype,n),u}(u.Component),(0,a.connect)((function(t){return{auth:t.auth}}))(L))),loadData:function(t){return(0,t.dispatch)(b())}};var C,L;const M={component:function(){return i().createElement("div",null,i().createElement("div",null,"This is dfgfd the new home component"),i().createElement("button",{onClick:function(){return console.log("Working?")}},"Click me"))}},A={component:function(t){var e=t.staticContext;return(void 0===e?{}:e).notFound=!0,i().createElement("h1",null,"Page not found.")}},I=require("react-helmet");function U(t){return(U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function H(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function F(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function z(t,e){return(z=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function N(t,e){return!e||"object"!==U(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function W(t){return(W=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var B=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&z(t,e)}(u,t);var e,n,r,o,c=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=W(r);if(o){var n=W(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return N(this,t)});function u(){return H(this,u),c.apply(this,arguments)}return e=u,(n=[{key:"componentDidMount",value:function(){this.props.fetchUsers()}},{key:"setMetaTags",value:function(){return i().createElement(I.Helmet,null,i().createElement("title",null,"".concat(this.props.users.length," users loaded")),i().createElement("meta",{property:"og:title",content:"Meta Tag title"}))}},{key:"render",value:function(){return i().createElement("div",null,this.setMetaTags(),"This is a list of users",i().createElement("ul",null,this.props.users.map((function(t){return i().createElement("li",{key:t.id},t.name)}))))}}])&&F(e.prototype,n),u}(u.Component);const G={component:(0,a.connect)((function(t){return{users:t.users}}),{fetchUsers:h})(B),loadData:function(t){return t.dispatch(h())}};function J(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function K(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?J(Object(n),!0).forEach((function(e){Q(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):J(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function Q(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const V=[K(K({},v),{},{routes:[K(K({},M),{},{path:"/",exact:!0}),K(K({},G),{},{path:"/users",exact:!0}),K(K({},q),{},{path:"/admins",exact:!0}),K({},A)]})],X=require("react-dom/server"),Y=require("serialize-javascript");var Z=t.n(Y);const $=require("redux"),tt=require("redux-thunk");var et=t.n(tt);const nt=(0,$.combineReducers)({users:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case y:return e.payload.data;default:return t}},auth:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case m:return e.payload.data||!1;default:return t}},admins:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case d:return e.payload.data;default:return t}}}),rt=require("axios");var ot=t.n(rt),ct=process.env.port||"3000",ut=n()();ut.use("/api",c()("http://react-ssr-api.herokuapp.com",{proxyReqOptDecorator:function(t){return t.headers["x-forwarded-host"]="localhost:".concat(ct),t}})),ut.use(n().static("public")),ut.get("*",(function(t,e){var n=function(t){var e=ot().create({baseURL:"http://react-ssr-api.herokuapp.com",headers:{cookie:t.get("cookie")||""}});return(0,$.createStore)(nt,{},(0,$.applyMiddleware)(et().withExtraArgument(e)))}(t),o=(0,r.matchRoutes)(V,t.path).map((function(t){var e=t.route;return e.loadData?e.loadData(n):null})).map((function(t){if(t)return new Promise((function(e,n){t.then(e).catch(e)}))}));Promise.all(o).then((function(){var o={},c=function(t,e,n){var o=(0,X.renderToString)(i().createElement(a.Provider,{store:e},i().createElement(s.StaticRouter,{location:t.path,context:n},(0,r.renderRoutes)(V)))),c=I.Helmet.renderStatic();return"\n        <html>\n            <head>\n            ".concat(c.title.toString(),"\n            ").concat(c.meta.toString(),'\n            </head>\n            <body>\n                <div id="root">').concat(o,"</div>\n                <script>\n                window.INITIAL_STATE = ").concat(Z()(e.getState()),'\n                <\/script>\n                <script src="bundle.js"><\/script>\n            </body>\n        </html>\n    ')}(t,n,o);if(o.url)return e.redirect(301,o.url);o.notFound&&e.status(404),e.send(c)}))})),ut.listen(ct,(function(){console.log("Listening on port "+ct)}))})();