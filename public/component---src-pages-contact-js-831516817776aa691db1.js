(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"Cuy+":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),c=a("R/WZ"),i=a("mwIZ"),l=a.n(i),o=a("tRbT"),m=a("Z3vd"),s=a("1NhI"),u=a("VUD3"),d=a("TIVw"),g=a.n(d),f=a("7Qib"),p=a("3YHm"),b=a("6xAE"),h=a.n(b),E=a("lnML"),v=a.n(E),I=a("wuqc"),N=a.n(I),x=Object(c.a)((function(e){return{root:{},formContainer:{display:"flex",alignItems:"stretch",justifyContent:"center"},gridContainer:{flex:1,margin:30},gridItem:{padding:"0 5px"},title:{margin:"10px 10px 30px 0",fontFamily:"Montserrat",fontWeight:900,fontSize:48,lineHeight:1,color:function(e){return e.contactBanner.color},width:"100%"},division:{width:0,borderWidth:2,borderStyle:"solid",borderColor:function(e){return e.contactBanner.color},marginTop:60,marginBottom:60},imgContainer:{flex:1,display:"flex",justifyContent:"center"},smartphoneImg:{width:"100%",height:"100%",backgroundImage:function(e){return"url("+e.contactBanner.image.file.url+")"},backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"contain"},buttonContainer:{flex:1,display:"flex",justifyContent:"center"},button:{margin:5,width:200,borderRadius:0,background:function(e){return e.contactBanner.color},"&:hover":{background:function(e){return Object(f.c)(e.contactBanner.color,.8)}}},phoneImg:{display:"flex",alignItems:"center",justifyContent:"space-between"},icon:{height:"50px",width:"50px",margin:"0 20px"},imgMobileContainer:{margin:e.spacing(7,0),flex:1,display:"flex",justifyContent:"flex-start",alignItems:"center",flexDirection:"column"}}}));t.default=function(e){var t=Object(n.useState)(""),a=t[0],c=t[1],i=Object(n.useState)(""),d=i[0],b=i[1],E=Object(n.useState)(""),I=E[0],C=E[1],w=Object(n.useState)(""),y=w[0],j=w[1],S=Object(n.useState)(""),O=S[0],B=S[1],k=Object(n.useState)(""),q=k[0],R=k[1],D=Object(n.useState)(""),P=D[0],T=D[1],U=l()(e,"data.allContentfulBanners.edges").find((function(e){return"ContactUs"===e.node.type})).node,W=x({contactBanner:U}),L=e.location,M=L.hash,Y=L.search;Object(n.useEffect)((function(){if(M){C(decodeURI(M.slice(1)));var e=new URLSearchParams(Y);j(e.get("budged"))}}),[]);return r.a.createElement(u.a,{className:W.root,background:"url("+g.a+")",innerBackground:"none"},r.a.createElement("form",{name:"contact",onSubmit:function(e){e.preventDefault(),Object(f.i)("contact",{name:a,lastName:d,subject:I,budget:y,email:O,phone:q,content:P}).then((function(){return alert("Your message was received. We will contact you shortly.")})).catch((function(e){return alert(e)})),c(""),b(""),C(""),j(""),B(""),R(""),T("")},"data-netlify":"true"},r.a.createElement("input",{type:"hidden",name:"form-name",value:"contact"}),r.a.createElement("div",{className:W.formContainer},r.a.createElement(s.a,{smDown:!0},r.a.createElement(o.a,{item:!0,className:W.imgContainer,md:5},r.a.createElement("div",{className:W.smartphoneImg})),r.a.createElement("div",{className:W.division})),r.a.createElement(o.a,{className:W.gridContainer,container:!0,md:6,spacing:3},r.a.createElement("h1",{className:W.title},U.title),r.a.createElement(o.a,{className:W.gridItem,item:!0,xs:6},r.a.createElement(p.a,{id:"NameInput",value:a,name:"name",onChange:function(e){var t=e.target;return c(t.value)},label:"Name",required:!0})),r.a.createElement(o.a,{className:W.gridItem,item:!0,xs:6},r.a.createElement(p.a,{id:"LastNameInput",value:d,name:"lastName",onChange:function(e){var t=e.target;return b(t.value)},label:"Last Name",required:!0})),r.a.createElement(o.a,{className:W.gridItem,item:!0,xs:6},r.a.createElement(p.a,{id:"SubjectInput",value:I,name:"subject",onChange:function(e){var t=e.target;return C(t.value)},label:"Subject (Optional)"})),r.a.createElement(o.a,{className:W.gridItem,item:!0,xs:6},r.a.createElement(p.a,{id:"BudgetInput",value:y,name:"budget",onChange:function(e){var t=e.target;return j(t.value)},label:"Budget (Optional)"})),r.a.createElement(o.a,{className:W.gridItem,item:!0,xs:12,sm:6},r.a.createElement(p.a,{id:"EmailInput",value:O,name:"email",type:"email",onChange:function(e){var t=e.target;return B(t.value)},label:"Your Email",required:!0})),r.a.createElement(o.a,{className:W.gridItem,item:!0,xs:12,sm:6},r.a.createElement(p.a,{id:"PhoneInput",value:q,name:"phone",onChange:function(e){var t=e.target;return R(t.value)},label:"Your Phone Number",required:!0})),r.a.createElement(o.a,{className:W.gridItem,item:!0,xs:12},r.a.createElement(p.a,{id:"ContentInput",value:P,name:"content",onChange:function(e){var t=e.target;return T(t.value)},multiline:!0,rows:8,size:"small"}),r.a.createElement(s.a,{lgUp:!0},r.a.createElement(o.a,{item:!0,className:W.imgMobileContainer,xs:12},r.a.createElement("div",{className:W.phoneImg},r.a.createElement("a",{href:"https://wa.me/14152864255"},r.a.createElement("img",{className:W.icon,src:v.a,alt:"whatsapp"})),r.a.createElement("a",{href:"https://telegram.me/14152864255"},r.a.createElement("img",{className:W.icon,src:N.a,alt:"telegram"})),r.a.createElement("a",{href:"https://discord.gg/rWPADbXrEd"},r.a.createElement("img",{className:W.icon,src:h.a,alt:"discord"})))))),r.a.createElement("div",{className:W.buttonContainer},r.a.createElement(m.a,{variant:"contained",color:"primary",type:"submit",className:W.button},"Send"))))))}},TIVw:function(e,t,a){e.exports=a.p+"static/Trama-8c075bb8c2ce45a13386026859cd7a81.png"}}]);
//# sourceMappingURL=component---src-pages-contact-js-831516817776aa691db1.js.map