(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"1iKp":function(e,t,n){"use strict";var o=n("TqRt"),a=n("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("q1tI")),r=(0,o(n("8/g6")).default)(i.createElement("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");t.default=r},I95h:function(e,t,n){"use strict";n.r(t);var o=n("KQm4"),a=(n("E9XD"),n("ToJy"),n("q1tI")),i=n.n(a),r=n("R/WZ"),s=n("Wbzz"),d=n("VUD3"),c=(n("52AF"),n("Ji2X")),l=n("tRbT"),p=n("tr08"),m=n("wx14"),u=n("DSFK"),b=n("25BE"),f=n("BsWD"),x=n("PYwp");var g=n("ODXe"),h=n("Ff2n"),w=(n("TOwV"),n("iuhU")),y=n("dRu9"),v=n("H2TA"),k=n("wpWl"),E=n("4Hym"),O=n("bfFb"),C=a.forwardRef((function(e,t){var n=e.children,o=e.classes,i=e.className,r=e.collapsedHeight,s=e.collapsedSize,d=void 0===s?"0px":s,c=e.component,l=void 0===c?"div":c,u=e.disableStrictModeCompat,b=void 0!==u&&u,f=e.in,x=e.onEnter,v=e.onEntered,C=e.onEntering,j=e.onExit,N=e.onExited,S=e.onExiting,R=e.style,I=e.timeout,T=void 0===I?k.b.standard:I,z=e.TransitionComponent,D=void 0===z?y.a:z,B=Object(h.a)(e,["children","classes","className","collapsedHeight","collapsedSize","component","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),F=Object(p.a)(),H=a.useRef(),M=a.useRef(null),A=a.useRef(),W="number"==typeof(r||d)?"".concat(r||d,"px"):r||d;a.useEffect((function(){return function(){clearTimeout(H.current)}}),[]);var L=F.unstable_strictMode&&!b,P=a.useRef(null),V=Object(O.a)(t,L?P:void 0),$=function(e){return function(t,n){if(e){var o=L?[P.current,t]:[t,n],a=Object(g.a)(o,2),i=a[0],r=a[1];void 0===r?e(i):e(i,r)}}},q=$((function(e,t){e.style.height=W,x&&x(e,t)})),K=$((function(e,t){var n=M.current?M.current.clientHeight:0,o=Object(E.a)({style:R,timeout:T},{mode:"enter"}).duration;if("auto"===T){var a=F.transitions.getAutoHeightDuration(n);e.style.transitionDuration="".concat(a,"ms"),A.current=a}else e.style.transitionDuration="string"==typeof o?o:"".concat(o,"ms");e.style.height="".concat(n,"px"),C&&C(e,t)})),J=$((function(e,t){e.style.height="auto",v&&v(e,t)})),X=$((function(e){var t=M.current?M.current.clientHeight:0;e.style.height="".concat(t,"px"),j&&j(e)})),Y=$(N),_=$((function(e){var t=M.current?M.current.clientHeight:0,n=Object(E.a)({style:R,timeout:T},{mode:"exit"}).duration;if("auto"===T){var o=F.transitions.getAutoHeightDuration(t);e.style.transitionDuration="".concat(o,"ms"),A.current=o}else e.style.transitionDuration="string"==typeof n?n:"".concat(n,"ms");e.style.height=W,S&&S(e)}));return a.createElement(D,Object(m.a)({in:f,onEnter:q,onEntered:J,onEntering:K,onExit:X,onExited:Y,onExiting:_,addEndListener:function(e,t){var n=L?e:t;"auto"===T&&(H.current=setTimeout(n,A.current||0))},nodeRef:L?P:void 0,timeout:"auto"===T?null:T},B),(function(e,t){return a.createElement(l,Object(m.a)({className:Object(w.a)(o.root,o.container,i,{entered:o.entered,exited:!f&&"0px"===W&&o.hidden}[e]),style:Object(m.a)({minHeight:W},R),ref:V},t),a.createElement("div",{className:o.wrapper,ref:M},a.createElement("div",{className:o.wrapperInner},n)))}))}));C.muiSupportAuto=!0;var j=Object(v.a)((function(e){return{root:{height:0,overflow:"hidden",transition:e.transitions.create("height")},entered:{height:"auto",overflow:"visible"},hidden:{visibility:"hidden"},wrapper:{display:"flex"},wrapperInner:{width:"100%"}}}),{name:"MuiCollapse"})(C),N=n("kKAo");var S=a.createContext({}),R=n("yCxk"),I=a.forwardRef((function(e,t){var n,o=e.children,i=e.classes,r=e.className,s=e.defaultExpanded,d=void 0!==s&&s,c=e.disabled,l=void 0!==c&&c,p=e.expanded,y=e.onChange,v=e.square,k=void 0!==v&&v,E=e.TransitionComponent,O=void 0===E?j:E,C=e.TransitionProps,I=Object(h.a)(e,["children","classes","className","defaultExpanded","disabled","expanded","onChange","square","TransitionComponent","TransitionProps"]),T=Object(R.a)({controlled:p,default:d,name:"Accordion",state:"expanded"}),z=Object(g.a)(T,2),D=z[0],B=z[1],F=a.useCallback((function(e){B(!D),y&&y(e,!D)}),[D,y,B]),H=a.Children.toArray(o),M=(n=H,Object(u.a)(n)||Object(b.a)(n)||Object(f.a)(n)||Object(x.a)()),A=M[0],W=M.slice(1),L=a.useMemo((function(){return{expanded:D,disabled:l,toggle:F}}),[D,l,F]);return a.createElement(N.a,Object(m.a)({className:Object(w.a)(i.root,r,D&&i.expanded,l&&i.disabled,!k&&i.rounded),ref:t,square:k},I),a.createElement(S.Provider,{value:L},A),a.createElement(O,Object(m.a)({in:D,timeout:"auto"},C),a.createElement("div",{"aria-labelledby":A.props.id,id:A.props["aria-controls"],role:"region"},W)))})),T=Object(v.a)((function(e){var t={duration:e.transitions.duration.shortest};return{root:{position:"relative",transition:e.transitions.create(["margin"],t),"&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:e.palette.divider,transition:e.transitions.create(["opacity","background-color"],t)},"&:first-child":{"&:before":{display:"none"}},"&$expanded":{margin:"16px 0","&:first-child":{marginTop:0},"&:last-child":{marginBottom:0},"&:before":{opacity:0}},"&$expanded + &":{"&:before":{display:"none"}},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},rounded:{borderRadius:0,"&:first-child":{borderTopLeftRadius:e.shape.borderRadius,borderTopRightRadius:e.shape.borderRadius},"&:last-child":{borderBottomLeftRadius:e.shape.borderRadius,borderBottomRightRadius:e.shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},expanded:{},disabled:{}}}),{name:"MuiAccordion"})(I),z=n("VD++"),D=n("PsDL"),B=a.forwardRef((function(e,t){var n=e.children,o=e.classes,i=e.className,r=e.expandIcon,s=e.focusVisibleClassName,d=e.IconButtonProps,c=void 0===d?{}:d,l=e.onClick,p=Object(h.a)(e,["children","classes","className","expandIcon","focusVisibleClassName","IconButtonProps","onClick"]),u=a.useContext(S),b=u.disabled,f=void 0!==b&&b,x=u.expanded,g=u.toggle;return a.createElement(z.a,Object(m.a)({focusRipple:!1,disableRipple:!0,disabled:f,component:"div","aria-expanded":x,className:Object(w.a)(o.root,i,f&&o.disabled,x&&o.expanded),focusVisibleClassName:Object(w.a)(o.focusVisible,o.focused,s),onClick:function(e){g&&g(e),l&&l(e)},ref:t},p),a.createElement("div",{className:Object(w.a)(o.content,x&&o.expanded)},n),r&&a.createElement(D.a,Object(m.a)({className:Object(w.a)(o.expandIcon,x&&o.expanded),edge:"end",component:"div",tabIndex:null,role:null,"aria-hidden":!0},c),r))})),F=Object(v.a)((function(e){var t={duration:e.transitions.duration.shortest};return{root:{display:"flex",minHeight:48,transition:e.transitions.create(["min-height","background-color"],t),padding:e.spacing(0,2),"&:hover:not($disabled)":{cursor:"pointer"},"&$expanded":{minHeight:64},"&$focused, &$focusVisible":{backgroundColor:e.palette.action.focus},"&$disabled":{opacity:e.palette.action.disabledOpacity}},expanded:{},focused:{},focusVisible:{},disabled:{},content:{display:"flex",flexGrow:1,transition:e.transitions.create(["margin"],t),margin:"12px 0","&$expanded":{margin:"20px 0"}},expandIcon:{transform:"rotate(0deg)",transition:e.transitions.create("transform",t),"&:hover":{backgroundColor:"transparent"},"&$expanded":{transform:"rotate(180deg)"}}}}),{name:"MuiAccordionSummary"})(B),H=a.forwardRef((function(e,t){var n=e.classes,o=e.className,i=Object(h.a)(e,["classes","className"]);return a.createElement("div",Object(m.a)({className:Object(w.a)(n.root,o),ref:t},i))})),M=Object(v.a)((function(e){return{root:{display:"flex",padding:e.spacing(1,2,2)}}}),{name:"MuiAccordionDetails"})(H),A=n("ofer"),W=n("1iKp"),L=n.n(W),P=n("lopY"),V=Object(r.a)((function(e){var t,n,o,a,i,r,s,d,c,l,p,m,u,b,f;return{itemContainer:(t={boxShadow:"0px 8px 8px -4px #c4c4c4",transition:"0.5s ease-out",margin:"0px 0px !important",width:"100%"},t[e.breakpoints.down("sm")]={boxShadow:"none",width:"130%",marginLeft:"-15% !important"},t),itemHeader:(o={color:"#FFF",flexDirection:"row-reverse",margin:"0px 30px !important",height:"50px",minHeight:"unset !important"},o["& .MuiAccordionSummary-content"]=(n={justifyContent:"space-between",margin:"0px 30px !important",minHeight:"unset !important",transition:"none"},n[e.breakpoints.down("sm")]={margin:"0px 15px !important"},n),o["& .MuiSvgIcon-root "]={fontSize:"1.8em"},o[e.breakpoints.down("sm")]={margin:"0px 5px !important"},o),title:(a={fontSize:"25px",fontWeight:550,fontFamily:"Montserrat",lineHeight:"normal",alignSelf:"center",margin:"0px 0px"},a[e.breakpoints.down("md")]={fontSize:"1.5rem",margin:"0px 40px"},a[e.breakpoints.down("sm")]={fontSize:"1.2rem",margin:"0px 30px",fontWeight:600},a[e.breakpoints.down("xs")]={margin:"0px 0px"},a),headerButton:(r={color:"#FFF",border:"1px solid rgb(255 255 255)",borderRadius:"4px",padding:"7px 20px",alignSelf:"center",textDecoration:"none",fontWeight:"bold"},r[e.breakpoints.down("md")]={fontSize:"1.2rem"},r[e.breakpoints.down("sm")]=(i={fontSize:"1rem",display:"none"},i["& .showInMobile"]={display:"initial"},i),r[e.breakpoints.down("xs")]={fontSize:"0.5rem"},r),itemContent:(s={minHeight:"230px",backgroundColor:"#FFF",padding:"30px 52px 0px 52px",backgroundPositionX:"right",backgroundPositionY:"bottom",backgroundSize:"290px 265px",backgroundRepeat:"no-repeat"},s[e.breakpoints.down("md")]={},s[e.breakpoints.down("sm")]={padding:"25px 25px 0 25px"},s[e.breakpoints.down("xs")]={backgroundImage:"none !important"},s),content:(d={flexDirection:"column",width:"65%"},d[e.breakpoints.down("md")]={},d[e.breakpoints.down("sm")]={width:"100%"},d[e.breakpoints.down("xs")]={},d),contentButton:(c={color:"#FFF",border:"1px solid rgb(255 255 255)",borderRadius:"4px",padding:"7px 45px",alignSelf:"center",textDecoration:"none",marginBottom:"30px",marginTop:"15px",fontWeight:"bold"},c[e.breakpoints.down("md")]={fontSize:"14px"},c[e.breakpoints.down("sm")]={fontSize:"12px"},c[e.breakpoints.down("xs")]={fontSize:"10px",display:"block",textAlign:"center",padding:"10px 45px",marginBottom:"0px",marginTop:"-10px",marginInline:"20px"},c),serviceLogo:{},subcategoriesContent:(l={display:"grid",gridTemplateColumns:"auto auto"},l[e.breakpoints.down("md")]={},l[e.breakpoints.down("sm")]={},l[e.breakpoints.down("xs")]={display:"none",gridTemplateColumns:"auto auto",alignItems:"center"},l),category:(p={color:"#999999",fontSize:"16px",fontWeight:"bold",fontFamily:"Montserrat",textTransform:"uppercase",display:"inline-block"},p[e.breakpoints.down("md")]={fontSize:"0.9rem"},p[e.breakpoints.down("sm")]={fontSize:"0.8em"},p[e.breakpoints.down("xs")]={fontSize:"0.75em"},p),text:(m={},m[e.breakpoints.down("md")]={fontSize:"0.9rem"},m[e.breakpoints.down("sm")]={fontSize:"0.8em"},m),tools:(u={margin:"60px 0px 30px 0px",display:"flex"},u[e.breakpoints.down("sm")]={flexWrap:"wrap",justifyContent:"space-between",margin:"35px 0px 30px 0px"},u),toolImage:(b={marginRight:"5px",marginBottom:"2px"},b[e.breakpoints.down("xs")]={width:"10%",marginRight:"0px"},b),showInMobile:(f={borderRadius:"4px",padding:"7px 30px",alignSelf:"center",textDecoration:"none",marginBottom:"30px",marginTop:"15px",display:"none",fontWeight:"bold"},f[e.breakpoints.down("md")]={fontSize:"1.2rem"},f[e.breakpoints.down("sm")]={fontSize:"12px",display:"inline-block",padding:"10px 27px"},f[e.breakpoints.down("xs")]={fontSize:"10px",display:"block",textAlign:"center",marginBottom:"30px",marginTop:"-10px",marginInline:"20px"},f)}})),$=function(e){var t=e.data,n=e.handleChange,o=e.expanded,a=e.porfoliosData,r=V(),d=Object(p.a)(),c=Object(P.a)(d.breakpoints.down("xs")),l=a.some((function(e){return e.category===t.category}));return i.a.createElement(T,{className:r.itemContainer,style:{backgroundColor:t.newColor},square:!0,expanded:o==="panel-"+t.newName,onChange:n("panel-"+t.newName)},i.a.createElement(F,{className:r.itemHeader,expandIcon:i.a.createElement(L.a,{style:{color:"#FFF"}}),"aria-controls":"panel1a-content",id:"panel1a-header"},i.a.createElement("p",{className:r.title},t.newName),i.a.createElement(s.Link,{to:l?"/portfolio/"+t.category:"/underConstruction",className:r.headerButton,style:{visibility:o==="panel-"+t.newName?"visible":"hidden"}},"BROWSE PORTFOLIO")),i.a.createElement(M,{className:r.itemContent,style:{backgroundImage:"url("+t.newLogo.file.url+")"}},i.a.createElement("div",{className:r.content},i.a.createElement("div",{className:r.subcategoriesContent},null===t.categories?"No categories loaded":t.categories.map((function(e,t){return i.a.createElement(A.a,{key:e,variant:"h5",className:r.category},e)}))),i.a.createElement("p",{className:r.text,style:{marginBottom:"2.5rem"}},t.description),i.a.createElement(s.Link,{to:"/ourservices/subcategories?"+t.title,className:r.contentButton,style:{backgroundColor:t.newColor}},"VIEW IN DETAIL"),i.a.createElement("br",null),i.a.createElement(s.Link,{to:l?"/portfolio/"+t.category:"/underConstruction",className:r.showInMobile,style:{color:t.newColor,border:"1px solid "+t.newColor}},"BROWSE PORTFOLIO"),i.a.createElement("div",{className:r.tools},null===t.newTools?null:t.newTools.map((function(e,t){return i.a.createElement("img",{key:e.file.url,src:e.file.url,alt:e.file.url,className:""+r.toolImage,style:{display:c&&t>=8?"none":"initial"}})}))))))},q=Object(r.a)((function(e){var t,n;return{root:(t={padding:0,marginBottom:"50px"},t[e.breakpoints.down("sm")]={},t[e.breakpoints.down("xs")]={padding:e.spacing(0)},t),gridContainer:(n={width:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between",flexWrap:"wrap",boxSizing:"border-box",maxWidth:"unset",gap:"8px"},n[e.breakpoints.down("sm")]={},n)}})),K=function(e){var t=e.data,n=e.porfoliosData,o=q(),a=i.a.useState(!1),r=a[0],s=a[1];return i.a.createElement(c.a,{className:o.root},i.a.createElement(l.a,{container:!0,className:o.gridContainer},t.map((function(e){return i.a.createElement($,{key:e.newName,data:e,handleChange:function(e){return function(e){return function(t,n){s(!!n&&e)}}(e)},expanded:r,porfoliosData:n})}))))},J=n("srjH"),X=n("+cmy"),Y=Object(r.a)((function(e){var t;return{container:(t={paddingTop:"10rem",background:"transparent"},t[e.breakpoints.down("sm")]={},t[e.breakpoints.down("xs")]={},t["@media (max-width: 1024px)"]={paddingTop:"5rem"},t)}}));t.default=function(e){var t=Y(),n=Object(s.useStaticQuery)("2863193670"),a=n.allContentfulService,r=n.allContentfulBanners,c=n.allContentfulPortfolio,l=function(e){return e.reduce((function(e,t){return e=[Object.assign({},t.node)].concat(Object(o.a)(e))}),[])},p=l(r.edges).filter((function(e){return"Our Services"===e.title})),m=l(a.edges).filter((function(e){return"Octosoft"!==e.title})).sort((function(e,t){return e.newOrder-t.newOrder})),u=c.nodes;return i.a.createElement(d.a,{className:t.container},i.a.createElement(X.a,null),i.a.createElement(J.a,{color:"#37ADD4",title:p[0].title}),i.a.createElement(K,{data:m,porfoliosData:u}))}},srjH:function(e,t,n){"use strict";var o=n("q1tI"),a=n.n(o),i=n("R/WZ"),r=n("tRbT"),s=n("ofer"),d=Object(i.a)((function(e){return{titleContainer:{display:"flex",width:"100%",textAlign:"center",marginBottom:"5rem","@media (max-width: 1024px)":{marginBottom:"1rem"}},mainTitle:{fontFamily:"Montserrat",fontWeight:900,fontSize:"12vh",color:function(e){return e.color},zIndex:"1","@media (max-width: 760px)":{alignItems:"center",textAlign:"center",width:"100%",justifyContent:"center",fontSize:40}}}}));t.a=function(e){var t=e.title,n=e.color,o=d({color:n});return a.a.createElement(r.a,{container:!0,item:!0,alignItems:"center",direction:"column",className:o.titleContainer},a.a.createElement(s.a,{variant:"h5",className:o.mainTitle},t))}}}]);
//# sourceMappingURL=component---src-pages-ourservices-index-js-95125985f4449f548d2f.js.map