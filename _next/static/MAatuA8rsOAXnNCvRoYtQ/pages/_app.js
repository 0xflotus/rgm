(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"/vpQ":function(r,n,t){"use strict";function o(r,n){if(null==r)return{};var t,o,p={},e=Object.keys(r);for(o=0;o<e.length;o++)t=e[o],n.indexOf(t)>=0||(p[t]=r[t]);return p}t.d(n,"a",(function(){return x})),t.d(n,"b",(function(){return O}));var p=t("wx14"),e=t("q1tI"),a=t("qKvR"),i=function(r){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.literal,o=n.overlap,p=t?r:["&"].concat(r);function e(r){if("object"!==typeof r||null==r)return[];if(Array.isArray(r))return r.map(e);var n={},a={},i={};return Object.keys(r).forEach((function(s){var c=r[s];if(!Array.isArray(c)&&t&&(c=[c]),(t||Array.isArray(c))&&38!==s.charCodeAt(0)){var f=void 0;c.forEach((function(r,e){if((!o||f!==r)&&null!=r)if(f=r,0!==e||t)if(void 0===n[p[e]]){var a;n[p[e]]=((a={})[s]=r,a)}else n[p[e]][s]=r;else i[s]=r}))}else"object"===typeof c?a[s]=e(c):i[s]=c})),p.forEach((function(r){n[r]&&(i[r]=n[r])})),Object.assign(i,a),i}return function(){for(var r=arguments.length,n=Array(r),t=0;t<r;t++)n[t]=arguments[t];return n.map(e)}},s=Object(e.createContext)({breakpoints:[768,1280,1920],spaces:[0,4,8,16,32,64,128,256]}),c=function(r){return"screen and (min-width: "+("number"===typeof r?Math.ceil(r/16)+"em":r)+")"},f=(s.Provider,function(r){var n=r.breakpoints.map((function(r){return"@media "+c(r)})),t=i(n),o=function(r){return function(n){var t=Object(p.a)({},n[0]);return n.slice(1).forEach((function(n,o){t[r[o]]=n})),t}}(n);return function(r){return Array.isArray(r)?o(r):t(r)}}),u=function(){var r=Object(e.useContext)(s),n=Object(e.useMemo)((function(){return f(r)}),[r]),t=function(n){return Array.isArray(n)?n.map((function(n){return l(n,r)})):l(n,r)},o=function(r){return n({paddingTop:t(r)})},p=function(r){return n({paddingRight:t(r)})},a=function(r){return n({paddingBottom:t(r)})},i=function(r){return n({paddingLeft:t(r)})},c=function(r){return n({marginTop:t(r)})},u=function(r){return n({marginRight:t(r)})},m=function(r){return n({marginBottom:t(r)})},d=function(r){return n({marginLeft:t(r)})};return{media:n,pt:o,pr:p,pb:a,pl:i,px:function(r){return[i(r),p(r)]},py:function(r){return[o(r),a(r)]},p:function(r){return[o(r),p(r),a(r),i(r)]},mt:c,mr:u,mb:m,ml:d,mx:function(r){return[d(r),u(r)]},my:function(r){return[c(r),m(r)]},m:function(r){return[c(r),u(r),m(r),d(r)]}}},m=function(r,n){return r},d=function(r){return"number"===typeof r?function(r){return 0===r?0:100*r+"%"}(Math.max(0,Math.min(r,1))):r},l=function(r,n){var t,o=n.spaces;if("number"===typeof r){var p=o.length-1,e=Math.max(-p,Math.min(r,p));return t=e,(Number(t>0)-Number(t<0)||+t)*o[Math.abs(e)]}return r},g=[{prop:"width",transform:d},{prop:"height",transform:d}],h=[{prop:"p",cssProp:"paddingTop",transform:l},{prop:"p",cssProp:"paddingRight",transform:l},{prop:"p",cssProp:"paddingBottom",transform:l},{prop:"p",cssProp:"paddingLeft",transform:l},{prop:"ph",cssProp:"paddingLeft",transform:l},{prop:"ph",cssProp:"paddingRight",transform:l},{prop:"px",cssProp:"paddingLeft",transform:l},{prop:"px",cssProp:"paddingRight",transform:l},{prop:"pv",cssProp:"paddingTop",transform:l},{prop:"pv",cssProp:"paddingBottom",transform:l},{prop:"py",cssProp:"paddingTop",transform:l},{prop:"py",cssProp:"paddingBottom",transform:l},{prop:"pt",cssProp:"paddingTop",transform:l},{prop:"pr",cssProp:"paddingRight",transform:l},{prop:"pb",cssProp:"paddingBottom",transform:l},{prop:"pl",cssProp:"paddingLeft",transform:l},{prop:"m",cssProp:"marginTop",transform:l},{prop:"m",cssProp:"marginRight",transform:l},{prop:"m",cssProp:"marginBottom",transform:l},{prop:"m",cssProp:"marginLeft",transform:l},{prop:"mh",cssProp:"marginLeft",transform:l},{prop:"mh",cssProp:"marginRight",transform:l},{prop:"mx",cssProp:"marginLeft",transform:l},{prop:"mx",cssProp:"marginRight",transform:l},{prop:"mv",cssProp:"marginTop",transform:l},{prop:"mv",cssProp:"marginBottom",transform:l},{prop:"my",cssProp:"marginTop",transform:l},{prop:"my",cssProp:"marginBottom",transform:l},{prop:"mt",cssProp:"marginTop",transform:l},{prop:"mr",cssProp:"marginRight",transform:l},{prop:"mb",cssProp:"marginBottom",transform:l},{prop:"ml",cssProp:"marginLeft",transform:l}],b=[{prop:"flexGrow"},{prop:"flexShrink"},{prop:"flexBasis"},{prop:"justifySelf"},{prop:"alignSelf"},{prop:"order"}],v=[{prop:"alignItems"},{prop:"alignContent"},{prop:"justifyItems"},{prop:"justifyContent"},{prop:"flexWrap"},{prop:"flexDirection"}],P=function(r,n){var t={};for(var o in r)-1===n.indexOf(o)&&(t[o]=r[o]);return t},y=function(r){return r.prop},j=function(r,n,t){for(var o={},p=function(p){var e=t[p],a=e.prop,i=e.cssProp,s=void 0===i?a:i,c=e.transform,f=void 0===c?m:c,u=r[a];null!=u&&(o[s]=Array.isArray(u)?u.map((function(r){return f(r,n)})):f(u,n))},e=0;e<t.length;e+=1)p(e);return o},x=Object(e.forwardRef)((function(r,n){var t=r.as,i=void 0===t?"div":t,c=r.css,f=r.children,m=o(r,["as","css","children"]),d=Object(e.useContext)(s),l=u().media,v=[].concat(g,h,b),x=j(m,d,v),O=P(m,v.map(y));return Object(a.c)(i,Object(p.a)({ref:n,css:[{boxSizing:"border-box",minWidth:0,minHeight:0},c,l(x)]},O),null==f?null:f)}));x.displayName="Box";var O=Object(e.forwardRef)((function(r,n){var t=r.as,i=void 0===t?"div":t,c=r.css,f=r.children,m=o(r,["as","css","children"]),d=Object(e.useContext)(s),l=u().media,x=[].concat(g,h,b,v),O=j(m,d,x),w=P(m,x.map(y));return Object(a.c)(i,Object(p.a)({ref:n,css:[{display:"flex",boxSizing:"border-box",minWidth:0,minHeight:0},c,l(O)]},w),null==f?null:f)}));O.displayName="Flex"},0:function(r,n,t){t("cM/9"),r.exports=t("nOHt")},"1TCz":function(r,n,t){"use strict";t.r(n);var o=t("q1tI"),p=t("/vpQ"),e=t("TOXp"),a=t("qKvR");o.createElement;n.default=function(r){var n,t,i,s,c=r.Component,f=r.pageProps,u=r.router,m=null!==(n=null===(t=f.pageDocs)||void 0===t?void 0:t.find((function(r){return r.pathname===u.pathname})))&&void 0!==n?n:null;return Object(a.c)(e.d,{nav:Object(a.c)(o.Fragment,null,Object(a.c)(p.a,{as:"h3",mb:"0.75rem"},"Examples"),null===(i=f.pageDocs)||void 0===i?void 0:i.filter((function(r){return r.order<100})).map((function(r){return Object(a.c)(e.f,{key:r.pathname,href:r.pathname},r.title)})),Object(a.c)(p.a,{as:"h3",mb:"0.75rem",mt:"2rem"},"Tests"),null===(s=f.pageDocs)||void 0===s?void 0:s.filter((function(r){return r.order>=100})).map((function(r){return Object(a.c)(e.f,{key:r.pathname,href:r.pathname},r.title)})))},Object(a.c)(e.i,null,m&&Object(a.c)(e.e,null,m.markdown),Object(a.c)(c,null),m&&Object(a.c)(e.b,null,m.source)))}},"cM/9":function(r,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t("1TCz")}])}},[[0,0,1,3,2,4]]]);