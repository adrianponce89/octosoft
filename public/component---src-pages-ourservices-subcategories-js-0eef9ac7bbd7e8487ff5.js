(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"+cmy":function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("bpBt"),i=n.n(o),c=n("J4Q7"),l=n.n(c),d=n("R/WZ"),s=Object(d.a)((function(e){return{background:{width:"100%",height:"fit-content",minHeight:"100vh",backgroundColor:"#F5F7F7"},octoOne:{position:"absolute",width:"700px",top:"30%",left:"-7%",zIndex:"0","@media (max-width: 960px)":{display:"none"}},OctoThree:{position:"absolute",top:"7%",right:"0%",zIndex:"0","@media (max-width: 960px)":{display:"none"}},backgroundStart:{position:"absolute",top:"7%",right:"0%",zIndex:"0","@media (max-width: 960px)":{display:"none"}}}}));t.a=function(e){e.isFullLength;var t=s();return r.a.createElement("div",{className:"background"},r.a.createElement("img",{src:i.a,className:t.backgroundStart,alt:"background"}),r.a.createElement("img",{src:l.a,className:t.octoOne,alt:"background"}))}},J4Q7:function(e,t,n){e.exports=n.p+"static/Complete-d7c3ea53fefb871dfb278b121a4c9d7f.png"},bpBt:function(e,t,n){e.exports=n.p+"static/VectorStart-8dce9e39505776f5af132c7c9a88d390.png"},srjH:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("R/WZ"),i=n("tRbT"),c=n("ofer"),l=Object(o.a)((function(e){return{titleContainer:{display:"flex",width:"100%",textAlign:"center",marginBottom:"5rem","@media (max-width: 1024px)":{marginBottom:"1rem"}},mainTitle:{fontFamily:"Montserrat",fontWeight:900,fontSize:"12vh",color:function(e){return e.color},zIndex:"1","@media (max-width: 760px)":{alignItems:"center",textAlign:"center",width:"100%",justifyContent:"center",fontSize:40}}}}));t.a=function(e){var t=e.title,n=e.color,a=l({color:n});return r.a.createElement(i.a,{container:!0,item:!0,alignItems:"center",direction:"column",className:a.titleContainer},r.a.createElement(c.a,{variant:"h5",className:a.mainTitle},t))}},"xE+m":function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),o=n("+cmy"),i=n("HaE+"),c=(n("ToJy"),n("o0o1")),l=n.n(c),d=n("R/WZ"),s=n("srjH"),m=n("ofer"),g=Object(d.a)((function(e){return{rootFive:{display:"flex",width:"25rem",marginTop:"0.8rem",marginBottom:"0.8rem",marginLeft:"0.8rem",marginRight:"0.8rem",minHeight:"42rem",height:"fit-content",opacity:"0.8",flexDirection:"column",alignItems:"center",justifyContent:"flex-start",backgroundColor:"#FFFFFF",borderRadius:"0.8rem","@media (max-width: 800px)":{width:"20rem",margin:"0%",marginBottom:"2rem",marginTop:"2rem",height:"fit-content",minHeight:"30rem"}},root:{display:"flex",width:"25rem",marginTop:"0.8rem",marginBottom:"0.8rem",marginLeft:"0.8rem",marginRight:"0.8rem",minHeight:"42rem",height:"fit-content",opacity:"0.8",flexDirection:"column",alignItems:"center",justifyContent:"flex-start",backgroundColor:"#FFFFFF",borderRadius:"0.8rem","@media (max-width: 800px)":{width:"20rem",margin:"0%",marginBottom:"2rem",marginTop:"2rem",backgroundColor:"#FFFFFF",height:"fit-content",minHeight:"30rem"}},sortIcon:{display:"flex",width:"100%",flexDirection:"column",height:"fit-content",alignItems:"center",justifyContent:"center",position:"relative",marginBottom:"2rem",marginTop:"2.5rem"},octagon:{display:"flex",width:"250px",filter:function(e){return e.filter}},icon:{display:"flex",width:"100%",position:"absolute",alignItems:"center",justifyContent:"center",backgroundImage:function(e){return e.icon||"#ECECEC"},backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"125px 125px",paddingBottom:"100%",marginBottom:"3%",zIndex:1},title:{width:"100%",color:function(e){return e.color},fontFamily:"Montserrat",fontWeight:"700",textAlign:"center",fontSize:"3vh",margin:"0%",marginBottom:"1px","@media (max-width: 800px)":{width:"90%"}},description:{width:"85%",color:"#000000",fontFamily:"Montserrat",fontSize:"2vh",textAlign:"center",marginTop:"1rem",marginBottom:"2rem",lineHeight:"1.5","@media (max-width: 800px)":{fontSize:"1,5vh",width:"90%",marginBottom:"1.5rem"}}}})),u=function(e){var t=e.title,n=e.description,o=e.color,i=e.icon,c=e.octagon,l=e.length,d=e.titleChanged,s=e.filter,u=g({color:o,octagon:c,icon:i,filter:s}),p=Object(a.useState)(""),f=p[0],h=p[1],x=Object(a.useState)(""),b=x[0],w=x[1];return console.log("TITLE",t),Object(a.useEffect)((function(){h(t.split(" ").slice(0,1)),w(t.split(" ").slice(1,t.length))}),[t]),r.a.createElement("div",{className:l?u.rootFive:u.root},r.a.createElement("div",{className:u.sortIcon},r.a.createElement("img",{src:c,alt:"octagon",className:u.octagon}),r.a.createElement("div",{className:u.icon})),d?r.a.createElement(a.Fragment,null,r.a.createElement(m.a,{className:u.title},f),b?r.a.createElement(m.a,{className:u.title},b[0],b[1]?b[1]:null):null):r.a.createElement(m.a,{className:u.title},t),r.a.createElement(m.a,{variant:"body1",color:"initial",className:u.description},n))},p=Object(d.a)((function(e){return{root:{display:"flex",width:"100%",paddingTop:"10rem",height:"fit-content",flexDirection:"column",backgroundColor:"#F5F7F7",alignItems:"center",justifyContent:"center","@media (max-width: 800px)":{paddingTop:"8rem"}},cardContainer:{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"center",flexDirection:"row",paddingBottom:"7rem",width:function(e){return e.widthEdited||"100%"},height:"fit-content","@media (max-width: 800px)":{width:"100%",flexWrap:"nowrap",flexDirection:"column"}}}})),f=function(e){var t=e.design,n=e.media,o=e.marketing,c=e.operations,d=e.dataScience,m=e.solutions,g=e.web3,f=e.search,h=e.software,x=Object(a.useState)([]),b=x[0],w=x[1],k=Object(a.useState)(""),E=k[0],F=k[1],C=Object(a.useState)(""),v=C[0],y=C[1],S=Object(a.useState)(""),j=S[0],I=S[1],O=Object(a.useState)(!1),T=O[0],B=O[1],N=Object(a.useState)(!1),z=N[0],D=N[1],H=Object(a.useState)(""),R=H[0],W=H[1],M=p({widthEdited:j});return Object(a.useEffect)((function(){(function(){var e=Object(i.a)(l.a.mark((function e(){var a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=f,e.next="design"===e.t0?3:"media"===e.t0?10:"marketing"===e.t0?17:"operations"===e.t0?24:"data"===e.t0?32:"it"===e.t0?40:"web"===e.t0?47:"software"===e.t0?54:62;break;case 3:return w(t),F("Design"),y(null===(a=t[0])||void 0===a||null===(r=a.node)||void 0===r?void 0:r.color),I("80%"),t.length%5==0?B(!0):B(!1),W("drop-shadow(0px 4px 4px rgba(125, 219, 196, 0.4))"),e.abrupt("break",62);case 10:return w(n),F("Media"),y(n[0].node.color),I("80%"),n.length%5==0?B(!0):B(!1),W("drop-shadow(0px 4px 4px rgba(125, 219, 196, 0.4))"),e.abrupt("break",62);case 17:return w(o),F("Marketing"),y(o[0].node.color),I("80%"),o.length%5==0?B(!0):B(!1),W("drop-shadow(0px 4px 4px rgba(162, 132, 223, 1))"),e.abrupt("break",62);case 24:return w(c),F("Operations"),y(c[0].node.color),I("80%"),c.length%5==0?B(!0):B(!1),D(!0),W("drop-shadow(0px 4px 4px rgba(162, 132, 223, 1))"),e.abrupt("break",62);case 32:return w(d),F("Data Science"),y(d[0].node.color),I("80%"),d.length%5==0?B(!0):B(!1),D(!0),W("drop-shadow(0px 4px 4px rgba(219, 125, 196, 0.4))"),e.abrupt("break",62);case 40:return w(m),F("IT Solutions"),y(m[0].node.color),I("80%"),m.length%5==0?B(!0):B(!1),W("drop-shadow(0px 4px 4px rgba(219, 125, 196, 0.4))"),e.abrupt("break",62);case 47:return w(g),F("Web 3"),y(g[0].node.color),I("80%"),g.length%5==0?B(!0):B(!1),W("drop-shadow(0px 4px 4px rgba(255, 159, 59, 0.4))"),e.abrupt("break",62);case 54:return w(h),F("Software Engineering"),y(h[0].node.color),I("80%"),h.length%5==0?B(!0):B(!1),D(!0),W("drop-shadow(0px 4px 4px rgba(255, 159, 59, 0.4))"),e.abrupt("break",62);case 62:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[f]),console.log("selected",b),r.a.createElement("div",{className:M.root},r.a.createElement(s.a,{title:E,color:v}),r.a.createElement("div",{className:M.cardContainer},b&&b.sort((function(e,t){return e.node.order-t.node.order})).map((function(e,t){return r.a.createElement(u,{color:v,key:t,description:e.node.description,title:e.node.title,icon:"url("+e.node.icon.file.url+")",length:T,titleChanged:z,octagon:e.node.octagon.file.url,filter:R})}))))},h=n("mwIZ"),x=n.n(h);t.default=function(e){var t=x()(e,"data.allContentfulDesign.edges"),n=x()(e,"data.allContentfulMedia.edges"),i=x()(e,"data.allContentfulMarketing.edges"),c=x()(e,"data.allContentfulOperations.edges"),l=x()(e,"data.allContentfulDataScience.edges"),d=x()(e,"data.allContentfulItSolutions.edges"),s=x()(e,"data.allContentfulWeb3.edges"),m=x()(e,"data.allContentfulSoftwareEngineering.edges"),g=e.location.search,u=g.indexOf("%");return g=g.toLowerCase(),g=-1!==u?g.slice(1,u):g.slice(1,g.length+1),r.a.createElement(a.Fragment,null,r.a.createElement(o.a,null),r.a.createElement(f,{design:t,media:n,marketing:i,operations:c,dataScience:l,solutions:d,web3:s,software:m,search:g}))}}}]);
//# sourceMappingURL=component---src-pages-ourservices-subcategories-js-0eef9ac7bbd7e8487ff5.js.map