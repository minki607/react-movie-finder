(this["webpackJsonpreact-movie-finder"]=this["webpackJsonpreact-movie-finder"]||[]).push([[0],{109:function(e,t,n){},110:function(e,t,n){"use strict";n.r(t);var r,a,i,c,s=n(0),l=n(27),o=(n(99),n(100),n(30)),m=n(65),u=n(5),d=function(e){var t=e.movies;return Object(u.jsx)("ul",{className:"movie-list",children:t&&t.map((function(e){return Object(u.jsxs)("li",{className:m.movieItem,children:[Object(u.jsxs)("span",{className:m.movieTitle,children:[e.title," (",e.year,")"]}),Object(u.jsx)("img",{src:e.small_cover_image,alt:e.title})]},e.id)}))})},f=n(124),b=n(78),j=n(79),p=function(e){var t=e.handleChange,n=e.handleSubmit,r=e.query;return Object(u.jsx)("form",{className:b.searchForm,onSubmit:n,children:Object(u.jsxs)("fieldset",{children:[Object(u.jsx)("legend",{className:j.a11yHidden,children:"\uc601\ud654 \uac80\uc0c9 \ud3fc"}),Object(u.jsx)(f.a,{value:r,onChange:t,placeholder:"\uac80\uc0c9...",icon:"search"})]})})};function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function h(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function O(e,t){var n=e.title,l=e.titleId,o=h(e,["title","titleId"]);return s.createElement("svg",v({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",style:{margin:"auto",background:"#fff",display:"block"},width:"200px",height:"200px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",ref:t,"aria-labelledby":l},o),n?s.createElement("title",{id:l},n):null,r||(r=s.createElement("g",{transform:"translate(20 50)"},s.createElement("circle",{cx:0,cy:0,r:6,fill:"#e15b64"},s.createElement("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.375s",calcMode:"spline",keySplines:"0.3 0 0.7 1;0.3 0 0.7 1",values:"0;1;0",keyTimes:"0;0.5;1",dur:"1s",repeatCount:"indefinite"})))),a||(a=s.createElement("g",{transform:"translate(40 50)"},s.createElement("circle",{cx:0,cy:0,r:6,fill:"#f8b26a"},s.createElement("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.25s",calcMode:"spline",keySplines:"0.3 0 0.7 1;0.3 0 0.7 1",values:"0;1;0",keyTimes:"0;0.5;1",dur:"1s",repeatCount:"indefinite"})))),i||(i=s.createElement("g",{transform:"translate(60 50)"},s.createElement("circle",{cx:0,cy:0,r:6,fill:"#abbd81"},s.createElement("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.125s",calcMode:"spline",keySplines:"0.3 0 0.7 1;0.3 0 0.7 1",values:"0;1;0",keyTimes:"0;0.5;1",dur:"1s",repeatCount:"indefinite"})))),c||(c=s.createElement("g",{transform:"translate(80 50)"},s.createElement("circle",{cx:0,cy:0,r:6,fill:"#81a3bd"},s.createElement("animateTransform",{attributeName:"transform",type:"scale",begin:"0s",calcMode:"spline",keySplines:"0.3 0 0.7 1;0.3 0 0.7 1",values:"0;1;0",keyTimes:"0;0.5;1",dur:"1s",repeatCount:"indefinite"})))))}var x=s.forwardRef(O),y=(n.p,n(82)),g=n(69),_=n(84),w=n(125),k=n(44),E=function(e){var t=e.children,n=e.header,r=e.icon,a=Object(_.a)(e,["children","header","icon"]);return Object(u.jsxs)(w.a,Object(g.a)(Object(g.a)({icon:!!r},a),{},{children:[r&&Object(u.jsx)(k.a,{name:r}),Object(u.jsxs)(w.a.Content,{children:[Object(u.jsx)(w.a.Header,{children:n}),t]})]}))},M=n(68),S=n.n(M),N=n(83),T=function(){var e=function(e){var t=Object(s.useState)(null),n=Object(o.a)(t,2),r=n[0],a=n[1],i=Object(s.useState)(null),c=Object(o.a)(i,2),l=c[0],m=c[1],u=Object(s.useState)(!1),d=Object(o.a)(u,2),f=d[0],b=d[1],j=function(){var t=Object(N.a)(S.a.mark((function t(n){var r,i;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return b(!0),t.prev=1,t.next=4,fetch(e+n);case 4:return r=t.sent,t.next=7,r.json();case 7:i=t.sent,a(i),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),m(t.t0);case 14:return t.prev=14,b(!1),t.finish(14);case 17:case"end":return t.stop()}}),t,null,[[1,11,14,17]])})));return function(e){return t.apply(this,arguments)}}();return Object(s.useEffect)((function(){j()}),[]),[r,l,f,j]}("https://yts.mx/api/v2/list_movies.json"),t=Object(o.a)(e,4),n=t[0],r=t[1],a=t[2],i=t[3],c=Object(s.useState)(""),l=Object(o.a)(c,2),m=l[0],f=l[1],b=Object(s.useRef)();return Object(u.jsxs)("main",{className:y.movieMain,children:[Object(u.jsx)(p,{query:m,handleSubmit:function(e){e.preventDefault(),f(""),i("?query_term=".concat(m)),b.current=m},handleChange:function(e){f(e.target.value)}}),a?Object(u.jsx)(x,{}):r?Object(u.jsx)(E,{warning:!0,icon:"warning",header:"\uc624\ub958 \ubc1c\uc0dd",children:"\uc601\ud654 \ubaa9\ub85d\uc744 \uac00\uc838\uc624\ub294\ub370 \uc624\ub958\uac00 \ubc1c\uc0dd\ud558\uc600\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \ud55c\ubc88 \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694"}):(null===n||void 0===n?void 0:n.data.movies)?Object(u.jsx)(d,{movies:n.data.movies,query:m}):Object(u.jsxs)(E,{info:!0,icon:"question",header:"\uac80\uc0c9 \uacb0\uacfc \uc5c6\uc74c",children:[b.current,"(\uc73c)\ub85c \uac80\uc0c9\ud55c \uacb0\uacfc\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."]})]})};n(109);var C=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(T,{})})};Object(l.render)(Object(u.jsx)(s.StrictMode,{children:Object(u.jsx)(C,{})}),document.getElementById("root"))},65:function(e,t,n){e.exports={movieItem:"MovieList_movieItem__17qhi",movieTitle:"MovieList_movieTitle__2OIbP"}},78:function(e,t,n){e.exports={searchForm:"SearchForm_searchForm__12H_N"}},79:function(e,t,n){e.exports={a11yHidden:"common_a11yHidden__1FdHF",resetBoxModel:"common_resetBoxModel__3liY2",resetList:"common_resetList__1Mbq7"}},82:function(e,t,n){e.exports={movieMain:"MovieMain_movieMain__28H1w"}},99:function(e,t,n){}},[[110,1,2]]]);
//# sourceMappingURL=main.64f47abb.chunk.js.map