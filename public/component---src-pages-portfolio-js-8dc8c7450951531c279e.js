(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{E6xs:function(e,t,n){"use strict";n.r(t);var i=n("q1tI"),o=n.n(i),r=n("Wbzz"),a=(n("VUD3"),n("ToJy"),n("R/WZ")),l=n("Ji2X"),s=n("tRbT"),c=Object(a.a)((function(e,t,n,i){var o,r,a,l,s,c,d;return{itemContainer:(o={width:"100%",height:"100%",textDecoration:"none",transition:"0.5s ease-out"},o[e.breakpoints.down("md")]={},o),titleContainer:(r={position:"absolute",color:"#F5F5F5",writingMode:"vertical-rl",transform:"rotate(180deg)",contain:"size",pointerEvents:"none",margin:"-10px -25px",inlineSize:"min-content",textAlign:"left",zIndex:3},r[e.breakpoints.down("sm")]={writingMode:"initial",transform:"rotate(0)",margin:"-40px 50px",inlineSize:function(e){return e.titleLength<14?"max-content !important":"min-content"},position:"initial"},r[e.breakpoints.down("xs")]={margin:"-29px 10px"},r),title:(a={fontSize:"2rem",fontWeight:700,fontFamily:"Montserrat",lineHeight:"1.2",inlineSize:function(e){return e.titleLength<14?"max-content":"min-content"}},a[e.breakpoints.down("sm")]={fontSize:"1.8rem",margin:"-45px -25px",inlineSize:"max-content !important"},a[e.breakpoints.down("xs")]={fontSize:"1rem",margin:"-29px 10px"},a),img:(l={width:"100%",height:"100%",position:"absolute",top:"0",left:"0% ",backgroundImage:function(e){var t;return null!==(t="url("+e.url+")")&&void 0!==t?t:"#474747"},backgroundPosition:"center",backgroundRepeat:"no-repeat",mixBlendMode:"color-burn",transition:"0.5s ease-out"},l[e.breakpoints.down("sm")]={backgroundImage:function(e){var t;return null!==(t="url("+e.urlWide+")")&&void 0!==t?t:"#474747"},backgroundSize:"cover",marginTop:"0px",position:"initial",width:"100%"},l),boxImg:(c={position:"relative",height:"95%",overflow:"hidden",backgroundColor:"rgba(33,33,33,0.55)",transition:"50ms ease-in-out","&:hover":{backgroundColor:"rgba(33,33,33,0.2)"},"& img":{transition:"0.5s ease-out"},"&:hover img":(s={mixBlendMode:"multiply"},s[e.breakpoints.down("xs")]={width:"100%"},s)},c[e.breakpoints.down("sm")]={height:"100%",width:"98%",marginLeft:"2%"},c),tag:(d={height:"5%",width:"100%"},d[e.breakpoints.down("sm")]={width:"2%",height:"250%",marginTop:"-75px"},d)}})),d=function(e){var t=e.data,n=t.porfolioBackground.file.url,i=t.porfolioBackgorundWide.file.url,r=t.newName.length,a=c({url:n,urlWide:i,titleLength:r});return o.a.createElement("div",{to:t.portfolioLink,className:a.itemContainer},o.a.createElement("div",{className:a.boxImg,"data-descr":t.portfolioLink},o.a.createElement("div",{className:a.img})),o.a.createElement("div",{className:a.titleContainer},o.a.createElement("p",{className:a.title},t.newName)),o.a.createElement("div",{className:a.tag,style:{backgroundColor:t.newColor}}))},m=Object(a.a)((function(e){var t,n,i;return{root:(t={padding:0,marginBottom:"50px"},t[e.breakpoints.down("sm")]={height:"80vh",width:"110%",marginLeft:"-5%"},t[e.breakpoints.down("xs")]={padding:e.spacing(0)},t),gridContainer:(n={width:"100%",display:"flex",justifyContent:"space-between",flexWrap:"wrap",boxSizing:"border-box",maxWidth:"unset"},n[e.breakpoints.down("sm")]={height:"95%",flexDirection:"column",justifyContent:"space-evenly"},n),boxGrid:(i={minHeight:"380px",flexWrap:"wrap",flexGrow:0,maxWidth:"11%",flexBasis:"25%",borderRadius:"8px",overflow:"hidden",transition:"0.5s ease-out",cursor:"pointer",textDecoration:"none","&:hover":{maxWidth:"20%"}},i[e.breakpoints.down("sm")]={width:"100%",maxWidth:"initial",minHeight:"11%",flexBasis:"0",borderRadius:"4px","&:hover":{minHeight:"15%",maxWidth:"initial"}},i)}})),u=function(e){var t=e.portfolios,n=e.projectsContent,i=m();return console.log(n),o.a.createElement(l.a,{className:i.root},o.a.createElement(s.a,{container:!0,xs:12,className:i.gridContainer},t.map((function(e){var t=n.some((function(t){return!!t.active&&t.category===e.category}));return o.a.createElement(r.Link,{item:!0,xs:12,md:3,container:!0,justify:"center",key:e.newName,className:i.boxGrid,to:t?"/portfolio/"+e.category:"/underConstruction/"},o.a.createElement(d,{data:e}))}))))},p=n("52AF"),g=n("+cmy"),f=Object(a.a)((function(e){return{root:{display:"flex",width:"100%",alignItems:"center",justifyContent:"center",paddingTop:"0rem",flexDirection:"column",height:"100vh",backgroundColor:"#F5F7F7","@media (max-width: 1024px)":{paddingTop:"5rem",width:"100%",height:"fit-content"}},aux:{display:"flex",width:"100%",alignItems:"center",justifyContent:"center",flexDirection:"column","@media (max-width: 1024px)":{width:"80%"}}}})),x=function(e){var t=e.data,n=f(),i=t.allContentfulBanners.edges.find((function(e){return"Our Portfolio"===e.node.title})).node,r=t.allContentfulService.nodes,a=t.allContentfulPortfolio.nodes,l=r.filter((function(e){return"Octosoft"!==e.newName})).sort((function(e,t){return e.newOrder-t.newOrder}));return o.a.createElement("div",{className:n.root},o.a.createElement(g.a,null),o.a.createElement("div",{className:n.aux},o.a.createElement(p.a,{colorTitle:i.color,title:i.title}),o.a.createElement(u,{portfolios:l,projectsContent:a})))};n("TIVw"),t.default=function(e){var t=Object(r.useStaticQuery)("2401700365");return o.a.createElement(x,{data:t})}},TIVw:function(e,t,n){e.exports=n.p+"static/Trama-8c075bb8c2ce45a13386026859cd7a81.png"}}]);
//# sourceMappingURL=component---src-pages-portfolio-js-8dc8c7450951531c279e.js.map