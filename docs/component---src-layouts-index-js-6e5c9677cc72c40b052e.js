webpackJsonp([0x67ef26645b2a,60335399758886],{"./node_modules/json-loader/index.js!./.cache/json/layout-index.json":function(e,t){e.exports={data:{allSitePage:{edges:[{node:{path:"/atoms/Circle/"}},{node:{path:"/atoms/Icon/"}},{node:{path:"/atoms/Image/"}},{node:{path:"/atoms/Logo/"}},{node:{path:"/atoms/Spinner/"}},{node:{path:"/atoms/Text/"}},{node:{path:"/atoms/View/"}},{node:{path:"/behaviours/ResourceProvider/"}},{node:{path:"/behaviours/ThemeProvider/"}},{node:{path:"/molecules/Button/"}},{node:{path:"/molecules/Card/"}},{node:{path:"/molecules/ChatBubble/"}},{node:{path:"/molecules/CountIndicator/"}},{node:{path:"/molecules/List/"}},{node:{path:"/molecules/ListIcon/"}},{node:{path:"/molecules/NotificationBubble/"}},{node:{path:"/molecules/ProfileImage/"}},{node:{path:"/molecules/Slider/"}},{node:{path:"/molecules/SquareIconButton/"}},{node:{path:"/molecules/SwitchList/"}},{node:{path:"/organisms/CardList/"}},{node:{path:"/organisms/Hero/"}},{node:{path:"/organisms/TitleBar/"}}]}},layoutContext:{}}},'./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/mschwoerer/Develop/qipp/elements/documentation/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/mschwoerer/Develop/qipp/elements/documentation/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/mschwoerer/Develop/qipp/elements/documentation/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/mschwoerer/Develop/qipp/elements/documentation/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/mschwoerer/Develop/qipp/elements/documentation/node_modules/babel-preset-stage-0/lib/index.js","/Users/mschwoerer/Develop/qipp/elements/documentation/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./.cache/layouts/index.js':function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n("./node_modules/babel-runtime/helpers/extends.js"),a=l(o),s=n("./node_modules/react/react.js"),r=l(s),i=n("./src/layouts/index.js"),d=l(i),u=n("./node_modules/json-loader/index.js!./.cache/json/layout-index.json"),c=l(u);t.default=function(e){return r.default.createElement(d.default,(0,a.default)({},e,c.default))},e.exports=t.default},"./gatsby-config.js":function(e,t){(function(t){"use strict";e.exports={pathPrefix:"/elements",siteMetadata:{title:"Allthings Elements",siteUrl:"https://allthings.github.io/elements/",description:"Elements is a set of carefully crafted, high quality React UI components, that Allthings uses to build their mobile app."},plugins:["gatsby-plugin-react-helmet",{resolve:"gatsby-plugin-typography",options:{pathToConfigModule:"src/utils/typography.js"}},{resolve:"gatsby-source-filesystem",options:{name:"docs",path:t+"/src/docs"}},{resolve:"gatsby-transformer-remark"}]}}).call(t,"/")},"./node_modules/gatsby-link/index.js":function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function o(e){return e.replace(/^\/\//g,"/")}t.__esModule=!0,t.navigateTo=void 0;var a=n("./node_modules/babel-runtime/helpers/extends.js"),s=l(a),r=n("./node_modules/babel-runtime/core-js/object/keys.js"),i=l(r),d=n("./node_modules/babel-runtime/helpers/objectWithoutProperties.js"),u=l(d),c=n("./node_modules/babel-runtime/helpers/classCallCheck.js"),p=l(c),m=n("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),f=l(m),h=n("./node_modules/babel-runtime/helpers/inherits.js"),g=l(h),b=n("./node_modules/react/react.js"),C=l(b),y=n("./node_modules/react-router-dom/index.js"),_=n("./node_modules/prop-types/index.js"),x=l(_),j="/";j="/elements";var v={activeClassName:x.default.string,activeStyle:x.default.object,exact:x.default.bool,strict:x.default.bool,isActive:x.default.func,location:x.default.object},L=function(e){function t(n){(0,p.default)(this,t);var l=(0,f.default)(this,e.call(this));return l.state={to:o(j+n.to)},l}return(0,g.default)(t,e),t.prototype.componentWillReceiveProps=function(e){this.props.to!==e.to&&(this.setState({to:o(j+e.to)}),___loader.enqueue(this.state.to))},t.prototype.componentDidMount=function(){___loader.enqueue(this.state.to)},t.prototype.render=function(){var e=this,t=this.props,n=t.onClick,l=(0,u.default)(t,["onClick"]),o=void 0;return o=(0,i.default)(v).some(function(t){return e.props[t]})?y.NavLink:y.Link,C.default.createElement(o,(0,s.default)({onClick:function(t){if(n&&n(t),!(0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)){var l=e.state.to;if(l.split("#").length>1&&(l=l.split("#").slice(0,-1).join("")),l===window.location.pathname){var o=e.state.to.split("#").slice(1).join("#"),a=document.getElementById(o);if(null!==a)return a.scrollIntoView(),!0}t.preventDefault(),window.___navigateTo(e.state.to)}return!0}},l,{to:this.state.to}))},t}(C.default.Component);L.propTypes=(0,s.default)({},v,{to:x.default.string.isRequired,onClick:x.default.func}),L.contextTypes={router:x.default.object},t.default=L;t.navigateTo=function(e){window.___navigateTo(o(j+e))}},"./src/components/Logo.svg.jsx":function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n("./node_modules/react/react.js"),a=l(o);t.default=function(e){return a.default.createElement("svg",{width:112.5,height:31,viewBox:"0 0 225 62"},a.default.createElement("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},a.default.createElement("g",{id:"HTML",fillRule:"nonzero"},a.default.createElement("polygon",{id:"Shape",fill:"#3C97D2",points:"194.708 4.515 197.971 0.907 224.98 30.66 197.97 60.413 194.708 56.823 218.435 30.66"}),a.default.createElement("polygon",{id:"Shape",fill:"#26B790",points:"0 30.66 27.006 60.413 30.27 56.823 6.543 30.66 30.27 4.515 27.006 0.907"}),a.default.createElement("polygon",{id:"Shape",fill:"#ED4094",points:"151.048 61.376 146.423 59.539 169.94 0.33 174.565 2.168"})),a.default.createElement("g",{id:"Logo",transform:"translate(53.000000, 0.000000)",fillRule:"nonzero"},a.default.createElement("path",{d:"M42.74,6.743 C43.125,7.416 42.644,8.25 41.874,8.25 L36.777,8.25 C35.975,8.25 35.013,8.218 34.307,6.935 L31.807,2.703 C31.422,2.03 31.903,1.196 32.673,1.196 L37.771,1.196 C38.573,1.196 39.567,1.196 40.271,2.543 L42.741,6.743 L42.74,6.743 Z",id:"Shape",fill:"#955AA4"}),a.default.createElement("path",{d:"M56.014,6.743 L53.544,2.543 C52.84,1.196 51.846,1.196 51.044,1.196 L45.947,1.196 C45.177,1.196 44.697,2.03 45.081,2.703 L47.583,6.935 C48.288,8.218 49.25,8.25 50.053,8.25 L55.149,8.25 C55.919,8.25 56.399,7.416 56.015,6.743",id:"Shape",fill:"#F05722"}),a.default.createElement("path",{d:"M62.907,18.574 L60.437,14.374 C59.733,13.027 58.739,13.027 57.937,13.027 L52.84,13.027 C52.07,13.027 51.59,13.861 51.974,14.534 L54.474,18.766 C55.18,20.049 56.142,20.081 56.944,20.081 L62.041,20.081 C62.811,20.081 63.293,19.248 62.908,18.575",id:"Shape",fill:"#42B549"}),a.default.createElement("path",{d:"M49.633,18.574 L47.163,14.374 C46.459,13.027 45.465,13.027 44.663,13.027 L39.566,13.027 C38.796,13.027 38.316,13.861 38.7,14.534 L41.2,18.766 C41.906,20.049 42.868,20.081 43.67,20.081 L48.767,20.081 C49.537,20.081 50.017,19.248 49.633,18.575",id:"Shape",fill:"#EFC319"}),a.default.createElement("path",{d:"M36.553,18.574 L34.083,14.374 C33.379,13.027 32.385,13.027 31.583,13.027 L26.486,13.027 C25.716,13.027 25.236,13.861 25.62,14.534 L28.12,18.766 C28.826,20.049 29.788,20.081 30.59,20.081 L35.687,20.081 C36.457,20.081 36.937,19.248 36.553,18.575",id:"Shape",fill:"#3C97D2"}),a.default.createElement("path",{d:"M56.527,30.404 L54.057,26.204 C53.353,24.857 52.359,24.857 51.557,24.857 L46.46,24.857 C45.69,24.857 45.21,25.691 45.594,26.364 L48.094,30.596 C48.8,31.879 49.762,31.911 50.564,31.911 L55.661,31.911 C56.431,31.911 56.913,31.078 56.528,30.405",id:"Shape",fill:"#34495D"}),a.default.createElement("path",{d:"M43.446,30.404 L40.976,26.204 C40.272,24.857 39.278,24.857 38.476,24.857 L33.38,24.857 C32.61,24.857 32.128,25.691 32.513,26.364 L35.013,30.596 C35.719,31.879 36.681,31.911 37.483,31.911 L42.58,31.911 C43.35,31.911 43.83,31.078 43.446,30.405",id:"Shape",fill:"#C03A2A"}),a.default.createElement("path",{d:"M29.788,6.936 L27.095,2.351 L27.063,2.321 L29.788,6.936 C29.788,6.969 29.788,6.936 29.788,6.936 M58.13,26.526 L58.29,26.816 L58.13,26.526 C58.13,26.494 58.13,26.494 58.13,26.526",id:"Shape",fill:"#222222"}),a.default.createElement("path",{d:"M70.377,31.59 L70.217,31.3 L67.043,25.82 C66.53,25.178 65.953,24.953 65.375,24.89 L58.931,24.89 C58.868,24.89 58.804,24.89 58.741,24.92 C58.131,25.114 57.778,25.85 58.131,26.492 L58.323,26.812 L61.465,32.295 C61.657,32.615 61.625,33.001 61.465,33.321 L50.18,52.014 C49.986,52.302 49.666,52.494 49.313,52.494 L24.753,52.494 C24.401,52.494 24.081,52.302 23.888,52.014 L10.038,28.289 C9.846,27.969 9.846,27.583 10.038,27.263 L21.13,9.115 C21.324,8.827 21.644,8.635 21.997,8.635 L28.857,8.635 C29.691,8.635 30.203,7.737 29.819,6.999 L27.094,2.349 C26.324,0.907 25.266,0.907 24.368,0.907 L17.474,0.907 C17.122,0.907 16.801,1.099 16.609,1.387 L1.509,26.074 C0.707,27.421 0.771,28.254 1.349,29.216 L18.76,58.97 C19.464,60.156 20.17,60.38 20.78,60.413 L52.52,60.413 C54.058,60.413 54.475,60.093 55.148,59.033 L70.248,34.091 C70.794,33.194 70.986,32.681 70.378,31.591",id:"Shape",fill:"#2D3E50"}))))},e.exports=t.default},"./src/components/Navigation.js":function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n("./node_modules/babel-runtime/core-js/object/values.js"),a=l(o),s=n("./node_modules/babel-runtime/core-js/object/keys.js"),r=l(s),i=n("./node_modules/react/react.js"),d=l(i),u=n("./node_modules/gatsby-link/index.js"),c=l(u);t.default=function(e){var t=e.items,n=t.reduce(function(e,t){var n=t.node.path.split("/"),l=n[1],o=n[2];return e[l]=[].concat(e[l]||[],[{name:o,path:t.node.path}]),e},{});return d.default.createElement("div",{className:"navigation"},(0,r.default)(n).map(function(e){return d.default.createElement("ul",{className:"navigation-list"},d.default.createElement("h3",{style:{textTransform:"capitalize"}},e),(0,a.default)(n[e]).map(function(e){var t=e.name,n=e.path;return d.default.createElement("li",null,d.default.createElement(c.default,{to:n,style:{textDecoration:"none"}},t))}))}))},e.exports=t.default},"./src/layouts/index.css":function(e,t){},"./src/layouts/index.js":function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var o=n("./node_modules/babel-runtime/helpers/objectWithoutProperties.js"),a=l(o),s=n("./node_modules/react/react.js"),r=l(s),i=n("./node_modules/prop-types/index.js"),d=l(i),u=n("./node_modules/gatsby-link/index.js"),c=l(u),p=n("./node_modules/react-helmet/lib/Helmet.js"),m=l(p),f=n("./src/components/Logo.svg.jsx"),h=l(f),g=n("./src/components/Navigation.js"),b=l(g),C=n("./gatsby-config.js");n("./src/layouts/index.css");var y=function(){return r.default.createElement("div",{style:{marginBottom:"1.45rem",marginTop:"1.45rem"}},r.default.createElement("div",{style:{margin:"0 auto",maxWidth:"1200px",padding:"0px 1.0875rem 1.45rem",display:"flex",justifyContent:"space-between",alignItems:"center",flexDirection:"row",borderBottom:"1px solid #EBEBEB"}},r.default.createElement(h.default,null),r.default.createElement("h1",{style:{margin:0}},r.default.createElement(c.default,{to:"/",style:{color:"black",textDecoration:"none"}},"Allthings Elements"))))};y.displayName="Header";var _=function(e){var t=e.children,n=e.data;(0,a.default)(e,["children","data"]);return r.default.createElement("div",null,r.default.createElement(m.default,{titleTemplate:"Allthings Elements - %s",title:"Welcome",meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},r.default.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:C.pathPrefix+"/apple-touch-icon.png"}),r.default.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:C.pathPrefix+"/favicon-32x32.png"}),r.default.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:C.pathPrefix+"/favicon-16x16.png"}),r.default.createElement("link",{rel:"manifest",href:C.pathPrefix+"/manifest.json"}),r.default.createElement("link",{rel:"mask-icon",href:C.pathPrefix+"/safari-pinned-tab.svg",color:"#5bbad5"}),r.default.createElement("meta",{name:"theme-color",content:"#ffffff"})),r.default.createElement(y,null),r.default.createElement("div",{style:{margin:"0 auto",maxWidth:"1200px",padding:"0px 1.0875rem 1.45rem",paddingTop:0,display:"flex",flexDirection:"row",alignContent:"stretch"}},n.allSitePage&&r.default.createElement(b.default,{items:n.allSitePage.edges}),r.default.createElement("div",{style:{overflow:"hidden",flex:"1 1 auto"}},t())))};_.displayName="TemplateWrapper",_.propTypes={children:d.default.func},t.default=_;t.query="** extracted graphql fragment **";_.__docgenInfo={description:"",props:{children:{type:{name:"func"},required:!1,description:""}}},"undefined"!=typeof REACT_DOCS&&(REACT_DOCS["src/layouts/index.js"]={name:"TemplateWrapper",docgenInfo:_.__docgenInfo,path:"src/layouts/index.js"})}});