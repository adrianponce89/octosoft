(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"+cmy":function(t,e,n){"use strict";var i=n("q1tI"),a=n.n(i),o=n("bpBt"),r=n.n(o),s=n("J4Q7"),c=n.n(s),d=n("R/WZ"),l=Object(d.a)((function(t){return{background:{width:"100%",height:"fit-content",minHeight:"100vh",backgroundColor:"#F5F7F7"},octoOne:{position:"absolute",width:"700px",top:"30%",left:"-7%",zIndex:"0","@media (max-width: 960px)":{display:"none"}},OctoThree:{position:"absolute",top:"7%",right:"0%",zIndex:"0","@media (max-width: 960px)":{display:"none"}},backgroundStart:{position:"absolute",top:"7%",right:"0%",zIndex:"0","@media (max-width: 960px)":{display:"none"}}}}));e.a=function(t){t.isFullLength;var e=l();return a.a.createElement("div",{className:"background"},a.a.createElement("img",{src:r.a,className:e.backgroundStart,alt:"background"}),a.a.createElement("img",{src:c.a,className:e.octoOne,alt:"background"}))}},"52AF":function(t,e,n){"use strict";var i=n("q1tI"),a=n.n(i),o=n("R/WZ"),r=n("hlFM"),s=n("tRbT"),c=n("ofer"),d=Object(o.a)((function(t){var e,n;return{root:(e={padding:t.spacing(8),marginTop:t.spacing(8),zIndex:1},e[t.breakpoints.down("md")]={padding:t.spacing(7),marginTop:t.spacing(7)},e[t.breakpoints.down("sm")]={padding:t.spacing(1),marginTop:t.spacing(1)},e),box:{zIndex:3},media:{height:"100%",width:"100%"},titleCard:(n={color:function(t){var e=t.colorTitle;return null!=e?e:"#8249DC"},fontSize:"6rem",fontWeight:900,fontFamily:"Montserrat",marginBottom:t.spacing(4)},n[t.breakpoints.down("sm")]={textAlign:"center",fontSize:"3rem",marginBottom:t.spacing(2)},n[t.breakpoints.down("xs")]={textAlign:"center",fontSize:"1.8rem",marginBottom:t.spacing(1)},n)}}));e.a=function(t){var e=t.colorTitle,n=t.title,i=d({colorTitle:e});return a.a.createElement(r.a,{className:i.root},a.a.createElement(s.a,{item:!0,xs:12,container:!0,justify:"center",className:i.box},a.a.createElement(c.a,{variant:"h5",className:i.titleCard},n||"Our Portfolio")))}},E6xs:function(t,e,n){"use strict";n.r(e);var i=n("q1tI"),a=n.n(i),o=n("Wbzz"),r=(n("VUD3"),n("ToJy"),n("R/WZ")),s=n("Ji2X"),c=n("tRbT"),d=Object(r.a)((function(t,e,n,i){var a,o,r,s,c,d,l;return{itemContainer:(a={width:"100%",height:"100%",textDecoration:"none",transition:"0.5s ease-out"},a[t.breakpoints.down("md")]={},a),titleContainer:(o={position:"absolute",color:"#F5F5F5",writingMode:"vertical-rl",transform:"rotate(180deg)",contain:"size",pointerEvents:"none",margin:"-10px -25px",inlineSize:"min-content",textAlign:"left",zIndex:3},o[t.breakpoints.down("sm")]={writingMode:"initial",transform:"rotate(0)",margin:"-40px 50px",inlineSize:function(t){return t.titleLength<14?"max-content !important":"min-content"},position:"initial"},o[t.breakpoints.down("xs")]={margin:"-29px 10px"},o),title:(r={fontSize:"2rem",fontWeight:700,fontFamily:"Montserrat",lineHeight:"1.2",inlineSize:function(t){return t.titleLength<14?"max-content":"min-content"}},r[t.breakpoints.down("sm")]={fontSize:"1.8rem",margin:"-45px -25px",inlineSize:"max-content !important"},r[t.breakpoints.down("xs")]={fontSize:"1rem",margin:"-29px 10px"},r),img:(s={width:"100%",height:"100%",position:"absolute",top:"0",left:"0% ",backgroundImage:function(t){var e;return null!==(e="url("+t.url+")")&&void 0!==e?e:"#474747"},backgroundPosition:"center",backgroundRepeat:"no-repeat",mixBlendMode:"color-burn",transition:"0.5s ease-out"},s[t.breakpoints.down("sm")]={backgroundImage:function(t){var e;return null!==(e="url("+t.urlWide+")")&&void 0!==e?e:"#474747"},backgroundSize:"cover",marginTop:"0px",position:"initial",width:"100%"},s),boxImg:(d={position:"relative",height:"95%",overflow:"hidden",backgroundColor:"rgba(33,33,33,0.55)",transition:"50ms ease-in-out","&:hover":{backgroundColor:"rgba(33,33,33,0.2)"},"& img":{transition:"0.5s ease-out"},"&:hover img":(c={mixBlendMode:"multiply"},c[t.breakpoints.down("xs")]={width:"100%"},c)},d[t.breakpoints.down("sm")]={height:"100%",width:"98%",marginLeft:"2%"},d),tag:(l={height:"5%",width:"100%"},l[t.breakpoints.down("sm")]={width:"2%",height:"250%",marginTop:"-75px"},l)}})),l=function(t){var e=t.data,n=e.porfolioBackground.file.url,i=e.porfolioBackgorundWide.file.url,o=e.newName.length,r=d({url:n,urlWide:i,titleLength:o});return a.a.createElement("div",{to:e.portfolioLink,className:r.itemContainer},a.a.createElement("div",{className:r.boxImg,"data-descr":e.portfolioLink},a.a.createElement("div",{className:r.img})),a.a.createElement("div",{className:r.titleContainer},a.a.createElement("p",{className:r.title},e.newName)),a.a.createElement("div",{className:r.tag,style:{backgroundColor:e.newColor}}))},m=Object(r.a)((function(t){var e,n,i;return{root:(e={padding:0,marginBottom:"50px"},e[t.breakpoints.down("sm")]={height:"80vh",width:"110%",marginLeft:"-5%"},e[t.breakpoints.down("xs")]={padding:t.spacing(0)},e),gridContainer:(n={width:"100%",display:"flex",justifyContent:"space-between",flexWrap:"wrap",boxSizing:"border-box",maxWidth:"unset"},n[t.breakpoints.down("sm")]={height:"95%",flexDirection:"column",justifyContent:"space-evenly"},n),boxGrid:(i={minHeight:"380px",flexWrap:"wrap",flexGrow:0,maxWidth:"11%",flexBasis:"25%",borderRadius:"8px",overflow:"hidden",transition:"0.5s ease-out",cursor:"pointer",textDecoration:"none","&:hover":{maxWidth:"20%"}},i[t.breakpoints.down("sm")]={width:"100%",maxWidth:"initial",minHeight:"11%",flexBasis:"0",borderRadius:"4px","&:hover":{minHeight:"15%",maxWidth:"initial"}},i)}})),u=function(t){var e=t.portfolios,n=t.projectsContent,i=m();return console.log(n),a.a.createElement(s.a,{className:i.root},a.a.createElement(c.a,{container:!0,xs:12,className:i.gridContainer},e.map((function(t){var e=n.some((function(e){return!!e.active&&e.category===t.category}));return a.a.createElement(o.Link,{item:!0,xs:12,md:3,container:!0,justify:"center",key:t.newName,className:i.boxGrid,to:e?"/portfolio/"+t.category:"/underConstruction/"},a.a.createElement(l,{data:t}))}))))},p=n("52AF"),g=n("+cmy"),b=Object(r.a)((function(t){return{root:{display:"flex",width:"100%",alignItems:"center",justifyContent:"center",paddingTop:"0rem",flexDirection:"column",height:"100vh",backgroundColor:"#F5F7F7","@media (max-width: 1024px)":{paddingTop:"5rem",width:"100%",height:"fit-content"}},aux:{display:"flex",width:"100%",alignItems:"center",justifyContent:"center",flexDirection:"column","@media (max-width: 1024px)":{width:"80%"}}}})),h=function(t){var e=t.data,n=b(),i=e.allContentfulBanners.edges.find((function(t){return"Our Portfolio"===t.node.title})).node,o=e.allContentfulService.nodes,r=e.allContentfulPortfolio.nodes,s=o.filter((function(t){return"Octosoft"!==t.newName})).sort((function(t,e){return t.newOrder-e.newOrder}));return a.a.createElement("div",{className:n.root},a.a.createElement(g.a,null),a.a.createElement("div",{className:n.aux},a.a.createElement(p.a,{colorTitle:i.color,title:i.title}),a.a.createElement(u,{portfolios:s,projectsContent:r})))};n("TIVw"),e.default=function(t){var e=Object(o.useStaticQuery)("2401700365");return a.a.createElement(h,{data:e})}},J4Q7:function(t,e,n){t.exports=n.p+"static/Complete-d7c3ea53fefb871dfb278b121a4c9d7f.png"},Ji2X:function(t,e,n){"use strict";n("E9XD");var i=n("wx14"),a=n("Ff2n"),o=n("rePB"),r=n("q1tI"),s=n("iuhU"),c=n("H2TA"),d=n("NqtD"),l=r.forwardRef((function(t,e){var n=t.classes,o=t.className,c=t.component,l=void 0===c?"div":c,m=t.disableGutters,u=void 0!==m&&m,p=t.fixed,g=void 0!==p&&p,b=t.maxWidth,h=void 0===b?"lg":b,f=Object(a.a)(t,["classes","className","component","disableGutters","fixed","maxWidth"]);return r.createElement(l,Object(i.a)({className:Object(s.a)(n.root,o,g&&n.fixed,u&&n.disableGutters,!1!==h&&n["maxWidth".concat(Object(d.a)(String(h)))]),ref:e},f))}));e.a=Object(c.a)((function(t){return{root:Object(o.a)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:t.spacing(2),paddingRight:t.spacing(2),display:"block"},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(t.breakpoints.values).reduce((function(e,n){var i=t.breakpoints.values[n];return 0!==i&&(e[t.breakpoints.up(n)]={maxWidth:i}),e}),{}),maxWidthXs:Object(o.a)({},t.breakpoints.up("xs"),{maxWidth:Math.max(t.breakpoints.values.xs,444)}),maxWidthSm:Object(o.a)({},t.breakpoints.up("sm"),{maxWidth:t.breakpoints.values.sm}),maxWidthMd:Object(o.a)({},t.breakpoints.up("md"),{maxWidth:t.breakpoints.values.md}),maxWidthLg:Object(o.a)({},t.breakpoints.up("lg"),{maxWidth:t.breakpoints.values.lg}),maxWidthXl:Object(o.a)({},t.breakpoints.up("xl"),{maxWidth:t.breakpoints.values.xl})}}),{name:"MuiContainer"})(l)},TIVw:function(t,e,n){t.exports=n.p+"static/Trama-8c075bb8c2ce45a13386026859cd7a81.png"},VUD3:function(t,e,n){"use strict";var i=n("q1tI"),a=n.n(i),o=n("R/WZ"),r=Object(o.a)((function(t){return{outsideBox:function(t){return{width:"100%",height:"100%",minHeight:t.partial?"50vh":"100vh",margin:0,padding:0,display:"flex",justifyContent:"center"}},background:function(e){return{width:"100%",height:"100%",minHeight:e.partial?"50vh":"100vh",opacity:e.opacity||.2,top:0,left:0,bottom:0,right:0,position:"absolute",background:e.background||"none",backgroundColor:e.backgroundColor||t.palette.background.default,backgroundPosition:"initial",backgroundRepeat:"repeat",backgroundSize:"100vw",zIndex:"-1"}},innerBox:function(e){return{width:"100%",maxWidth:"80%","@media (min-width: 1362px)":{maxWidth:"95%"},background:e.innerBackground||t.palette.common.white,padding:e.innerPadding||"80px 0 0 0"}}}}));e.a=function(t){var e=r(t);return a.a.createElement("div",{className:e.outsideBox},a.a.createElement("div",{className:e.background}),a.a.createElement("div",{className:e.innerBox+" "+t.className},t.children))}},bpBt:function(t,e,n){t.exports=n.p+"static/VectorStart-8dce9e39505776f5af132c7c9a88d390.png"}}]);
//# sourceMappingURL=component---src-pages-portfolio-js-fd9e383cea86531f91b4.js.map