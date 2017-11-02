webpackJsonp([0x67ef26645b2a,60335399758886],{192:function(e,t){e.exports={data:{allSitePage:{edges:[{node:{path:"/atoms/Circle/"}},{node:{path:"/atoms/Icon/"}},{node:{path:"/atoms/Image/"}},{node:{path:"/atoms/Logo/"}},{node:{path:"/atoms/Spinner/"}},{node:{path:"/atoms/Text/"}},{node:{path:"/atoms/View/"}},{node:{path:"/molecules/Button/"}},{node:{path:"/molecules/Card/"}},{node:{path:"/molecules/ChatBubble/"}},{node:{path:"/molecules/Checkbox/"}},{node:{path:"/molecules/CountIndicator/"}},{node:{path:"/molecules/List/"}},{node:{path:"/molecules/ListIcon/"}},{node:{path:"/molecules/NotificationBubble/"}},{node:{path:"/molecules/ProfileImage/"}},{node:{path:"/molecules/Slider/"}},{node:{path:"/molecules/SquareIconButton/"}},{node:{path:"/molecules/SwitchList/"}},{node:{path:"/molecules/TextInput/"}},{node:{path:"/organisms/CardList/"}},{node:{path:"/organisms/Hero/"}},{node:{path:"/organisms/TitleBar/"}}]}},layoutContext:{}}},392:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=n(8),i=a(l),o=n(1),r=a(o),s=n(399),d=a(s),u=n(192),c=a(u);t.default=function(e){return r.default.createElement(d.default,(0,i.default)({},e,c.default))},e.exports=t.default},395:function(e,t){(function(t){"use strict";e.exports={pathPrefix:"/elements",siteMetadata:{title:"Allthings Elements",siteUrl:"https://allthings.github.io/elements/",description:"Elements is a set of carefully crafted, high quality React UI components, that Allthings uses to build their mobile app."},plugins:["gatsby-plugin-react-helmet",{resolve:"gatsby-plugin-typography",options:{pathToConfigModule:"src/utils/typography.js"}},{resolve:"gatsby-source-filesystem",options:{name:"docs",path:t+"/src/docs"}},{resolve:"gatsby-transformer-remark"}]}}).call(t,"/")},547:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function l(e){return i(I+e)}function i(e){return e.replace(/^\/\//g,"/")}t.__esModule=!0,t.navigateTo=void 0;var o=n(8),r=a(o),s=n(99),d=a(s),u=n(9),c=a(u),p=n(3),f=a(p),m=n(5),h=a(m),g=n(4),E=a(g);t.withPrefix=l;var C=n(1),v=a(C),y=n(162),A=n(2),L=a(A),I="/";I="/elements";var x={activeClassName:L.default.string,activeStyle:L.default.object,exact:L.default.bool,strict:L.default.bool,isActive:L.default.func,location:L.default.object},M=function(e,t){var n=new window.IntersectionObserver(function(a){a.forEach(function(a){e===a.target&&a.isIntersecting&&(n.unobserve(e),n.disconnect(),t())})});n.observe(e)},b=function(e){function t(n){(0,f.default)(this,t);var a=(0,h.default)(this,e.call(this)),i=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(i=!0),a.state={to:l(n.to),IOSupported:i},a.handleRef=a.handleRef.bind(a),a}return(0,E.default)(t,e),t.prototype.componentWillReceiveProps=function(e){this.props.to!==e.to&&(this.setState({to:l(e.to)}),this.state.IOSupported||___loader.enqueue(this.state.to))},t.prototype.componentDidMount=function(){this.state.IOSupported||___loader.enqueue(this.state.to)},t.prototype.handleRef=function(e){var t=this;this.state.IOSupported&&e&&M(e,function(){___loader.enqueue(t.state.to)})},t.prototype.render=function(){var e=this,t=this.props,n=t.onClick,a=(0,c.default)(t,["onClick"]),l=void 0;return l=(0,d.default)(x).some(function(t){return e.props[t]})?y.NavLink:y.Link,v.default.createElement(l,(0,r.default)({onClick:function(t){if(n&&n(t),!(0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)){var a=e.state.to;if(a.split("#").length>1&&(a=a.split("#").slice(0,-1).join("")),a===window.location.pathname){var l=e.state.to.split("#").slice(1).join("#"),i=document.getElementById(l);if(null!==i)return i.scrollIntoView(),!0}t.preventDefault(),window.___navigateTo(e.state.to)}return!0}},a,{to:this.state.to,innerRef:this.handleRef}))},t}(v.default.Component);b.propTypes=(0,r.default)({},x,{to:L.default.string.isRequired,onClick:L.default.func}),b.contextTypes={router:L.default.object},t.default=b;t.navigateTo=function(e){window.___navigateTo(l(e))}},396:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=n(169),i=a(l),o=n(99),r=a(o),s=n(1),d=a(s),u=n(2),c=a(u),p=n(239),f=a(p),m=function(e){var t=e.items,n=t.reduce(function(e,t){var n=t.node.path.split("/"),a=n[1],l=n[2];return e[a]=[].concat(e[a]||[],[{title:l,link:t.node.path}]),e},{}),a=(0,r.default)(n).map(function(e){return{title:e.charAt(0).toUpperCase()+e.slice(1),link:"/",items:(0,i.default)(n[e])}});return d.default.createElement(f.default,{items:a})};m.displayName="ElementsNavigation",m.propTypes={items:c.default.array.isRequired},t.default=m,m.__docgenInfo={description:"",props:{items:{type:{name:"array"},required:!0,description:""}}},"undefined"!=typeof REACT_DOCS&&(REACT_DOCS["src/components/ElementsNavigation.js"]={name:"ElementsNavigation",docgenInfo:m.__docgenInfo,path:"src/components/ElementsNavigation.js"}),e.exports=t.default},397:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=n(1),i=a(l),o=function(e){return i.default.createElement("svg",{width:112.5,height:31,viewBox:"0 0 225 62"},i.default.createElement("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},i.default.createElement("g",{id:"HTML",fillRule:"nonzero"},i.default.createElement("polygon",{id:"Shape",fill:"#3C97D2",points:"194.708 4.515 197.971 0.907 224.98 30.66 197.97 60.413 194.708 56.823 218.435 30.66"}),i.default.createElement("polygon",{id:"Shape",fill:"#26B790",points:"0 30.66 27.006 60.413 30.27 56.823 6.543 30.66 30.27 4.515 27.006 0.907"}),i.default.createElement("polygon",{id:"Shape",fill:"#ED4094",points:"151.048 61.376 146.423 59.539 169.94 0.33 174.565 2.168"})),i.default.createElement("g",{id:"Logo",transform:"translate(53.000000, 0.000000)",fillRule:"nonzero"},i.default.createElement("path",{d:"M42.74,6.743 C43.125,7.416 42.644,8.25 41.874,8.25 L36.777,8.25 C35.975,8.25 35.013,8.218 34.307,6.935 L31.807,2.703 C31.422,2.03 31.903,1.196 32.673,1.196 L37.771,1.196 C38.573,1.196 39.567,1.196 40.271,2.543 L42.741,6.743 L42.74,6.743 Z",id:"Shape",fill:"#955AA4"}),i.default.createElement("path",{d:"M56.014,6.743 L53.544,2.543 C52.84,1.196 51.846,1.196 51.044,1.196 L45.947,1.196 C45.177,1.196 44.697,2.03 45.081,2.703 L47.583,6.935 C48.288,8.218 49.25,8.25 50.053,8.25 L55.149,8.25 C55.919,8.25 56.399,7.416 56.015,6.743",id:"Shape",fill:"#F05722"}),i.default.createElement("path",{d:"M62.907,18.574 L60.437,14.374 C59.733,13.027 58.739,13.027 57.937,13.027 L52.84,13.027 C52.07,13.027 51.59,13.861 51.974,14.534 L54.474,18.766 C55.18,20.049 56.142,20.081 56.944,20.081 L62.041,20.081 C62.811,20.081 63.293,19.248 62.908,18.575",id:"Shape",fill:"#42B549"}),i.default.createElement("path",{d:"M49.633,18.574 L47.163,14.374 C46.459,13.027 45.465,13.027 44.663,13.027 L39.566,13.027 C38.796,13.027 38.316,13.861 38.7,14.534 L41.2,18.766 C41.906,20.049 42.868,20.081 43.67,20.081 L48.767,20.081 C49.537,20.081 50.017,19.248 49.633,18.575",id:"Shape",fill:"#EFC319"}),i.default.createElement("path",{d:"M36.553,18.574 L34.083,14.374 C33.379,13.027 32.385,13.027 31.583,13.027 L26.486,13.027 C25.716,13.027 25.236,13.861 25.62,14.534 L28.12,18.766 C28.826,20.049 29.788,20.081 30.59,20.081 L35.687,20.081 C36.457,20.081 36.937,19.248 36.553,18.575",id:"Shape",fill:"#3C97D2"}),i.default.createElement("path",{d:"M56.527,30.404 L54.057,26.204 C53.353,24.857 52.359,24.857 51.557,24.857 L46.46,24.857 C45.69,24.857 45.21,25.691 45.594,26.364 L48.094,30.596 C48.8,31.879 49.762,31.911 50.564,31.911 L55.661,31.911 C56.431,31.911 56.913,31.078 56.528,30.405",id:"Shape",fill:"#34495D"}),i.default.createElement("path",{d:"M43.446,30.404 L40.976,26.204 C40.272,24.857 39.278,24.857 38.476,24.857 L33.38,24.857 C32.61,24.857 32.128,25.691 32.513,26.364 L35.013,30.596 C35.719,31.879 36.681,31.911 37.483,31.911 L42.58,31.911 C43.35,31.911 43.83,31.078 43.446,30.405",id:"Shape",fill:"#C03A2A"}),i.default.createElement("path",{d:"M29.788,6.936 L27.095,2.351 L27.063,2.321 L29.788,6.936 C29.788,6.969 29.788,6.936 29.788,6.936 M58.13,26.526 L58.29,26.816 L58.13,26.526 C58.13,26.494 58.13,26.494 58.13,26.526",id:"Shape",fill:"#222222"}),i.default.createElement("path",{d:"M70.377,31.59 L70.217,31.3 L67.043,25.82 C66.53,25.178 65.953,24.953 65.375,24.89 L58.931,24.89 C58.868,24.89 58.804,24.89 58.741,24.92 C58.131,25.114 57.778,25.85 58.131,26.492 L58.323,26.812 L61.465,32.295 C61.657,32.615 61.625,33.001 61.465,33.321 L50.18,52.014 C49.986,52.302 49.666,52.494 49.313,52.494 L24.753,52.494 C24.401,52.494 24.081,52.302 23.888,52.014 L10.038,28.289 C9.846,27.969 9.846,27.583 10.038,27.263 L21.13,9.115 C21.324,8.827 21.644,8.635 21.997,8.635 L28.857,8.635 C29.691,8.635 30.203,7.737 29.819,6.999 L27.094,2.349 C26.324,0.907 25.266,0.907 24.368,0.907 L17.474,0.907 C17.122,0.907 16.801,1.099 16.609,1.387 L1.509,26.074 C0.707,27.421 0.771,28.254 1.349,29.216 L18.76,58.97 C19.464,60.156 20.17,60.38 20.78,60.413 L52.52,60.413 C54.058,60.413 54.475,60.093 55.148,59.033 L70.248,34.091 C70.794,33.194 70.986,32.681 70.378,31.591",id:"Shape",fill:"#2D3E50"}))))};o.displayName="Logo",t.default=o,o.__docgenInfo={description:""},"undefined"!=typeof REACT_DOCS&&(REACT_DOCS["src/components/Logo.svg.jsx"]={name:"Logo",docgenInfo:o.__docgenInfo,path:"src/components/Logo.svg.jsx"}),e.exports=t.default},239:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=n(1),i=a(l),o=n(547),r=a(o),s=n(2),d=a(s),u=function(e){var t=e.items;return i.default.createElement("navigation",{className:"navigation"},t.map(function(e){var t=e.title,n=e.items;return i.default.createElement("ul",{className:"navigation-list",key:t},i.default.createElement("header",null,t),n.map(function(e){var t=e.title,n=e.link;return i.default.createElement("li",{key:t+n},i.default.createElement(r.default,{activeClassName:"active",exact:!0,to:n,style:{textDecoration:"none"}},t))}))}))};u.displayName="Navigation",u.propTypes={items:d.default.arrayOf(d.default.shape({title:d.default.string.isRequired,link:d.default.string.isRequired,items:d.default.arrayOf(d.default.shape({title:d.default.string.isRequired,link:d.default.string.isRequired}))}))},t.default=u,u.__docgenInfo={description:"",props:{items:{type:{name:"arrayOf",value:{name:"shape",value:{title:{name:"string",required:!0},link:{name:"string",required:!0},items:{name:"arrayOf",value:{name:"shape",value:{title:{name:"string",required:!0},link:{name:"string",required:!0}}},required:!1}}}},required:!1,description:""}}},"undefined"!=typeof REACT_DOCS&&(REACT_DOCS["src/components/Navigation.js"]={name:"Navigation",docgenInfo:u.__docgenInfo,path:"src/components/Navigation.js"}),e.exports=t.default},697:function(e,t){e.exports=[{title:"Getting started",link:"/",items:[{title:"Welcome",link:"/"},{title:"Themes and styling",link:"/using-themes.html"},{title:"Using Resouces",link:"/using-static-resources.html"}]},{title:"Forms",link:"/",items:[{title:"Forms",link:"/forms.html"},{title:"TextInput",link:"/molecules/TextInput/"},{title:"Checkbox",link:"/molecules/Checkbox/"}]}]},534:function(e,t){},399:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var l=n(9),i=a(l),o=n(1),r=a(o),s=n(2),d=a(s),u=n(224),c=a(u),p=n(397),f=a(p),m=n(239),h=a(m),g=n(396),E=a(g),C=n(697),v=a(C),y=n(395),A=n(1036),L=a(A);n(534);var I=function(){return r.default.createElement("div",{style:{marginBottom:"1.45rem",marginTop:"1.45rem"}},r.default.createElement("div",{style:{margin:"0 auto",maxWidth:"1200px",padding:"0px 1.0875rem 1.45rem",display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexDirection:"row",borderBottom:"1px solid #EBEBEB"}},r.default.createElement(f.default,null),r.default.createElement("a",{href:"https://github.com/allthings/elements",style:{height:"20px"}},r.default.createElement("img",{src:L.default,style:{height:"20px",width:"20px",margin:0}}))))};I.displayName="Header";var x=function(e){var t=e.children,n=e.data;(0,i.default)(e,["children","data"]);return r.default.createElement("div",null,r.default.createElement(c.default,{titleTemplate:"Allthings Elements - %s",title:"Welcome",meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},r.default.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:y.pathPrefix+"/apple-touch-icon.png"}),r.default.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:y.pathPrefix+"/favicon-32x32.png"}),r.default.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:y.pathPrefix+"/favicon-16x16.png"}),r.default.createElement("link",{rel:"manifest",href:y.pathPrefix+"/manifest.json"}),r.default.createElement("link",{rel:"mask-icon",href:y.pathPrefix+"/safari-pinned-tab.svg",color:"#5bbad5"}),r.default.createElement("meta",{name:"theme-color",content:"#ffffff"})),r.default.createElement(I,null),r.default.createElement("div",{style:{margin:"0 auto",maxWidth:"1200px",padding:"0px 1.0875rem 1.45rem",paddingTop:0,display:"flex",flexDirection:"row",alignContent:"stretch"}},r.default.createElement("div",{style:{minWidth:"230px"}},r.default.createElement(h.default,{items:v.default}),n.allSitePage&&r.default.createElement(E.default,{items:n.allSitePage.edges})),r.default.createElement("div",{style:{overflow:"hidden",flex:"1 1 auto"}},t())))};x.displayName="TemplateWrapper",x.propTypes={children:d.default.func,data:d.default.object},t.default=x;t.query="** extracted graphql fragment **";x.__docgenInfo={description:"",props:{children:{type:{name:"func"},required:!1,description:""},data:{type:{name:"object"},required:!1,description:""}}},"undefined"!=typeof REACT_DOCS&&(REACT_DOCS["src/layouts/index.js"]={name:"TemplateWrapper",docgenInfo:x.__docgenInfo,path:"src/layouts/index.js"})},1036:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNTE3OEEyQTk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNTE3OEEyQjk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTI4OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTI5OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+m4QGuQAAAyRJREFUeNrEl21ojWEYx895TDPbMNlBK46IUiNmPvHBSUjaqc0H8pF5+aDUKPEBqU2NhRQpX5Rv5jWlDIWlMCv7MMSWsWwmb3tpXub4XXWdPHvc9/Gc41nu+nedc7/8r/99PffLdYdDPsvkwsgkTBwsA/PADJCnzX2gHTwBt8Hl7p537/3whn04XoDZDcpBlk+9P8AFcAghzRkJwPF4zGGw0Y9QS0mAM2AnQj77FqCzrtcwB1Hk81SYojHK4DyGuQ6mhIIrBWB9Xm7ug/6B/nZrBHBegrkFxoVGpnwBMSLR9EcEcC4qb8pP14BWcBcUgewMnF3T34VqhWMFkThLJAalwnENOAKiHpJq1FZgI2AT6HZtuxZwR9GidSHtI30jOrbawxlVX78/AbNfhHlomEUJJI89O2MqeE79T8/nk8nMBm/dK576hZgmA3cp/R4l9/UeSxiHLVIlNm4nFfT0bxyuIj7LHRTKai+zdJobwMKzcZSJb0ePV5PKN+BqAAKE47UlMnERELMM3EdYP/yrd+XYb2mOiYBiQ8OQnoRBlXrl9JZix7D1pHTazu4MoyBcnYamqAjIMTR8G4FT8LuhLsexXYYjICBiqhQBvYb6fLZIJCjPypVvaOoVAW2WcasCnL2Nq82xHJNSqlCeFcDshaPK0twkAhosjZL31QYw+1rlMpWGMArl23SBsZZO58F2tlJXmjOXS+s4WGvpMiBJT/I2PInZ6lIs9/hBsNS1hS6BG0DSqmYEDRlCXQrmy50P1oDRKTSegmNbUsA0zDMwRhPJXeCE3vWLPQMvan6X8AgIa1vcR4AkGZkDR4ejJ1UHpsaVI0g2LInpOsNFUud1rhxSV+fzC9Woz2EZkWQuja7/B+jUrgtIMpy9YCW4n4K41YfzRneW5E1KJTe4B2Zq1Q5EHEtj4U3AfEzR5SVY4l7QYQPJdN2as7RKBF0BPZqqH4VgMAMBL8Byxr7y8zCZiDlnOcEKIPmUpgB5Z2ww5RdOiiRiNajUmWda5IG6WbhsyY2fx6m8gLcoJDJFkH219M3We1+cnda93pfycZpIJEL/s/wSYADmOAwAQgdpBAAAAABJRU5ErkJggg=="}});