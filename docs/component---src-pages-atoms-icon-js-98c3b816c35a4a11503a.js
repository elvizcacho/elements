webpackJsonp([0x5e50aac99ae0],{'./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/mschwoerer/Develop/qipp/elements/documentation/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/mschwoerer/Develop/qipp/elements/documentation/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/mschwoerer/Develop/qipp/elements/documentation/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/mschwoerer/Develop/qipp/elements/documentation/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/mschwoerer/Develop/qipp/elements/documentation/node_modules/babel-preset-stage-0/lib/index.js","/Users/mschwoerer/Develop/qipp/elements/documentation/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/atoms/Icon.js':function(e,t,s){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=s("./node_modules/babel-runtime/helpers/classCallCheck.js"),n=l(a),r=s("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),o=l(r),d=s("./node_modules/babel-runtime/helpers/inherits.js"),i=l(d),u=s("./node_modules/react/react.js"),c=l(u),m=s("./src/components/Example.js"),f=l(m),p=s("./src/components/Notes.jsx"),b=l(p),h=s("../src/atoms/Text.jsx"),_=l(h),j=s("../src/atoms/View.jsx"),x=l(j),g=s("../src/organisms/CardList/CardList.jsx"),C=l(g),E=s("../src/molecules/List/ListItem.jsx"),I=l(E),L=s("../src/atoms/Icon.jsx"),y=l(L),v=s("../src/behaviour/ResourceProvider.jsx"),w=l(v),D=s("../src/behaviour/ThemeProvider.jsx"),T=l(D),q=function(e){function t(){return(0,n.default)(this,t),(0,o.default)(this,e.apply(this,arguments))}return(0,i.default)(t,e),t.prototype.render=function(){return c.default.createElement(w.default,null,c.default.createElement(T.default,null,c.default.createElement(x.default,null,c.default.createElement(b.default,{for:y.default}),c.default.createElement(f.default,null,'<Icon name="servingFilled" size="l" color="#bada55" />'),c.default.createElement("h3",null,"List of all Icons"),c.default.createElement("p",null,"This example uses the ",c.default.createElement("a",{href:"#"},"ListIcon"),". Make sure to check it out if you like to display a Icon in a List"),c.default.createElement(C.default,{title:"Available Icons"},L.Icons.map(function(e){return c.default.createElement(I.default,{alignV:"stretch",key:e},c.default.createElement(x.default,{direction:"row",alignH:"space-between",flex:40},c.default.createElement(y.default,{color:"#bada55",name:e,size:"s"}),c.default.createElement(y.default,{color:"#bada55",name:e,size:"m"}),c.default.createElement(y.default,{color:"#bada55",name:e,size:"l"})),c.default.createElement(x.default,{flex:60,alignH:"end"},c.default.createElement(_.default,{align:"right"},e)))})))))},t}(c.default.Component);t.default=q,q.__docgenInfo={description:""},"undefined"!=typeof REACT_DOCS&&(REACT_DOCS["src/pages/atoms/Icon.js"]={name:"IconStory",docgenInfo:q.__docgenInfo,path:"src/pages/atoms/Icon.js"}),e.exports=t.default},"../src/organisms/CardList/CardList.jsx":function(e,t,s){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=s("./node_modules/react/react.js"),n=l(a),r=s("./node_modules/prop-types/index.js"),o=l(r),d=s("../src/molecules/List/index.jsx"),i=s("../src/molecules/Card/index.js"),u=l(i),c=function(e){var t=e.children;return n.default.createElement(u.default,null,n.default.createElement(d.List,null,t))};c.displayName="CardList",c.propTypes={children:o.default.node},t.default=c,c.__docgenInfo={description:"The CardList is a molecule that is a card containing a list.",props:{children:{type:{name:"node"},required:!1,description:"Array of ListItem"}}},"undefined"!=typeof REACT_DOCS&&(REACT_DOCS["../src/organisms/CardList/CardList.jsx"]={name:"CardList",docgenInfo:c.__docgenInfo,path:"../src/organisms/CardList/CardList.jsx"}),e.exports=t.default}});