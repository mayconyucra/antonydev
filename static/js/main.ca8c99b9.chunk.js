(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{55:function(e,t,c){},56:function(e,t,c){},57:function(e,t,c){},63:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},93:function(e,t,c){},94:function(e,t,c){},95:function(e,t,c){},98:function(e,t,c){},99:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c(2),n=c(19),i=c.n(n),r=(c(55),c(7)),l=c(4),o=(c(56),c(18)),j=function(){return Object(a.jsxs)("div",{className:"contact",children:[Object(a.jsx)("div",{className:"descriptionepis",children:Object(a.jsx)("span",{children:"DevMayden | Sitio Web Oficial"})}),Object(a.jsxs)("div",{className:"email",children:[Object(a.jsx)("span",{className:"mail",children:"devmayden@gmail.com"}),Object(a.jsx)(o.b,{className:"iconmail"})]})]})},d=c(13),b=(c(57),c.p+"static/media/logo.75ebdcc4.png");var u=function(){var e=Object(s.useState)(!1),t=Object(d.a)(e,2),c=t[0],n=t[1];return window.addEventListener("scroll",(function(){window.scrollY>=40?n(!0):n(!1)}),{passive:!0}),Object(a.jsxs)("nav",{className:c?"navbar active":"navbar",children:[Object(a.jsx)("div",{className:"logo",children:Object(a.jsx)(r.b,{to:"/",children:Object(a.jsx)("img",{className:"navbar-logo",src:b,alt:"devmayden"})})}),Object(a.jsx)("label",{htmlFor:"btn",className:"icon",children:Object(a.jsx)(o.c,{})}),Object(a.jsx)("input",{type:"checkbox",id:"btn",style:{display:"none"}}),Object(a.jsxs)("ul",{className:"navbar-content",children:[Object(a.jsx)("li",{className:"navbar-list",children:Object(a.jsx)(r.b,{className:"navbar-link",to:"/",children:"Inicio"})}),Object(a.jsx)("li",{className:"navbar-list",children:Object(a.jsx)(r.b,{className:"navbar-link",to:"/blog",children:"Blog"})}),Object(a.jsx)("li",{className:"navbar-list",children:Object(a.jsx)(r.b,{className:"navbar-link",to:"/nosotros",children:"Nosotros"})}),Object(a.jsx)("li",{className:"navbar-list",children:Object(a.jsx)(r.b,{className:"navbar-link",to:"/servicios",children:"Servicios"})}),Object(a.jsx)("li",{className:"navbar-list",children:Object(a.jsx)(r.b,{className:"navbar-link",to:"/equipo",children:"Nuestro Equipo"})}),Object(a.jsx)("li",{className:"navbar-list",children:Object(a.jsx)(r.b,{to:"/contacto",children:Object(a.jsx)("button",{className:"btn1",children:"Contacto"})})})]})]})},h=c(14),x=c.n(h),m=c(17),O=(c(63),c(64),c(101)),p=c(102),f=c(49),v=c(103),g=c(104),N=function(){var e=Object(s.useState)([]),t=Object(d.a)(e,2),c=t[0],n=t[1];Object(s.useEffect)((function(){document.title="DevMayden | Sitio Web Oficial",i()}),[]);var i=function(){var e=Object(m.a)(x.a.mark((function e(){var t,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://devmaydenheroku.herokuapp.com/portada");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n(c.portada);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),r=Object(s.useState)(0),l=Object(d.a)(r,2),o=l[0],j=l[1],b=Object(s.useState)(!1),u=Object(d.a)(b,2),h=u[0],N=u[1],y=function(){if(!h){var e=o===c.length-1?0:o+1;j(e)}},k=function(){if(!h){var e=0===o?c.length-1:o-1;j(e)}};return Object(a.jsxs)(O.a,{activeIndex:o,next:y,previous:k,children:[Object(a.jsx)(p.a,{items:c,activeIndex:o,onClickHandler:function(e){h||j(e)}}),c.map((function(e){return Object(a.jsxs)(f.a,{onExiting:function(){return N(!0)},onExited:function(){return N(!1)},className:"img-portada",children:[Object(a.jsx)("img",{src:"https://devmaydenheroku.herokuapp.com".concat(e.url),className:"imgport",alt:"portada"}),Object(a.jsx)(v.a,{className:"carousel-caption",captionHeader:e.caption,captionText:""})]},e.id)})),Object(a.jsx)(g.a,{direction:"prev",directionText:"Previous",onClickHandler:k}),Object(a.jsx)(g.a,{direction:"next",directionText:"Next",onClickHandler:y})]})},y=(c(72),function(){var e=Object(s.useState)([]),t=Object(d.a)(e,2),c=t[0],n=t[1];Object(s.useEffect)((function(){i()}),[]);var i=function(){var e=Object(m.a)(x.a.mark((function e(){var t,c,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://devmaydenheroku.herokuapp.com/blogs");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,a=c.slice(-3).reverse(),n(a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsx)("div",{className:"threecards",children:Object(a.jsxs)("div",{className:"sectioncard",children:[Object(a.jsxs)("div",{className:"cardheader",children:[Object(a.jsx)("h3",{children:"Publicaciones Recientes"}),Object(a.jsx)(r.b,{to:"/blog",children:"Ver m\xe1s"})]}),Object(a.jsx)("div",{className:"cardcontainer",children:c.map((function(e){return Object(a.jsx)("section",{className:"cardnotice",children:Object(a.jsxs)(r.b,{className:"linkcard",to:"/blog/".concat(e.id),children:[Object(a.jsx)("div",{className:"imgcard",children:Object(a.jsx)("img",{className:"cardportada",src:"https://devmaydenheroku.herokuapp.com".concat(e.portadablog.url),alt:""})}),Object(a.jsx)("div",{className:"titlecard",children:Object(a.jsx)("h3",{children:e.tituloblog})}),Object(a.jsxs)("div",{className:"datecard",children:[Object(a.jsx)(o.a,{className:"iconcalendarcards"})," ",e.fechablog]})]})},e.id)}))})]})})}),k=(c(73),function(){return Object(a.jsxs)("div",{className:"textcontainer",children:[Object(a.jsx)("div",{className:"textanimation",children:"Tecnolog\xeda "}),Object(a.jsx)("div",{className:"textanimation",children:Object(a.jsx)("span",{children:"e Innovaci\xf3n"})})]})}),w=(c(74),function(){return Object(a.jsx)("footer",{id:"footer",children:Object(a.jsxs)("div",{class:"container",children:[Object(a.jsxs)("div",{class:"row text-center text-xs-center text-sm-left text-md-left",children:[Object(a.jsxs)("div",{class:"col-xs-12 col-sm-4 col-md-4",children:[Object(a.jsx)("h5",{children:"Acerca De"}),Object(a.jsx)("ul",{class:"list-unstyled quick-links",children:Object(a.jsx)("li",{children:Object(a.jsx)("p",{style:{color:"white"},children:"Dev Mayden es una empresa que se dedica al desarollo de plataformas web para organizaciones"})})})]}),Object(a.jsxs)("div",{class:"col-xs-12 col-sm-4 col-md-4",children:[Object(a.jsx)("h5",{children:"Mas"}),Object(a.jsx)("ul",{class:"list-unstyled quick-links",children:Object(a.jsx)("li",{children:Object(a.jsx)(r.b,{to:"/blog",children:"Blog"})})})]})]}),Object(a.jsx)("div",{class:"row",children:Object(a.jsx)("div",{class:"col-xs-12 col-sm-12 col-md-12 mt-4 mt-sm-2 text-center text-white",children:Object(a.jsxs)("p",{class:"h6",children:[" ",Object(a.jsx)("strong",{children:"\xa9 2021. Todos los derechos reservados "})]})})})]})})}),D=c(42),C=c(43),P=c(20),S=c(48),E=c(47),M=c(44),F=c.n(M),T=c(45),q=c.n(T),L=(c(93),c(94),function(e){return Object(a.jsx)("div",{className:"portadacomponent",children:Object(a.jsx)("h3",{children:e.title})})}),B=function(e){Object(S.a)(c,e);var t=Object(E.a)(c);function c(e){var a;return Object(D.a)(this,c),(a=t.call(this,e)).handlePageClick=function(e){var t=e.selected,c=t*a.state.perPage;a.setState({currentPage:t,offset:c},(function(){a.loadMoreData()}))},a.state={offset:0,tableData:[],orgtableData:[],perPage:9,currentPage:0},a.handlePageClick=a.handlePageClick.bind(Object(P.a)(a)),a}return Object(C.a)(c,[{key:"loadMoreData",value:function(){var e=this.state.orgtableData,t=e.slice(this.state.offset,this.state.offset+this.state.perPage);this.setState({pageCount:Math.ceil(e.length/this.state.perPage),tableData:t})}},{key:"componentDidMount",value:function(){this.getData(),document.title="Blog Principal | DevMayden"}},{key:"getData",value:function(){var e=this;F.a.get("https://devmaydenheroku.herokuapp.com/blogs").then((function(t){var c=t.data.reverse(),a=c.slice(e.state.offset,e.state.offset+e.state.perPage);e.setState({pageCount:Math.ceil(c.length/e.state.perPage),orgtableData:t.data,tableData:a})}))}},{key:"render",value:function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(L,{title:"Entradas Principales"}),Object(a.jsx)("hr",{}),Object(a.jsx)("div",{class:"container",style:{marginTop:"20px"},children:Object(a.jsx)("div",{class:"row",children:this.state.tableData.map((function(e){return Object(a.jsx)("div",{class:"col-md-4",style:{marginBottom:"20px"},children:Object(a.jsx)(r.b,{to:"/blog/".concat(e.id),children:Object(a.jsxs)("div",{style:{background:"#ffffff",borderRadius:"5px",boxShadow:"0px 0px 14px 0px rgb(109,118,128)"},children:[Object(a.jsx)("div",{style:{height:"221px"},children:Object(a.jsx)("img",{class:"img-fluid d-xl-flex justify-content-xl-center align-items-xl-center",src:"https://devmaydenheroku.herokuapp.com".concat(e.portadablog.url),style:{width:"100%",height:"230px"},alt:"xd"})}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{class:"d-xl-flex m-auto justify-content-xl-center",style:{paddingTop:"38px",width:"287px",textAlign:"left",paddingLeft:"0",color:"#1888ff"},children:e.tituloblog}),Object(a.jsx)("div",{children:Object(a.jsx)("p",{class:"mx-auto",style:{fontSize:"0.86em",width:"330px",paddingTop:"9px"}})}),Object(a.jsxs)("p",{class:"mx-auto",style:{fontSize:"0.75em",width:"332px",paddingBottom:"17px",color:"#1888ff"},children:["Fecha de Publicai\xf3n: ",e.fechablog]})]})]})})},e.id)}))})}),Object(a.jsx)(q.a,{previousLabel:"Anterior",nextLabel:"Siguiente",breakLabel:"...",breakClassName:"break-me",pageCount:this.state.pageCount,marginPagesDisplayed:2,pageRangeDisplayed:3,onPageChange:this.handlePageClick,containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active"})]})}}]),c}(s.PureComponent),H=function(){var e=Object(l.f)().id,t=Object(s.useState)([]),c=Object(d.a)(t,2),n=c[0],i=c[1];return Object(s.useEffect)((function(){(function(){var t=Object(m.a)(x.a.mark((function t(){var c,a;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://devmaydenheroku.herokuapp.com/blogs/".concat(e));case 2:return c=t.sent,t.next=5,c.json();case 5:a=t.sent,i(a);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]),Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:n.tituloblog}),Object(a.jsx)("p",{children:n.descripcionblog}),Object(a.jsx)("p",{children:n.fechablog})]})},I=function(){return Object(s.useEffect)((function(){document.title="Nosotros | DevMayden"}),[]),Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(L,{title:"Nosotros"})})},A=function(){return Object(s.useEffect)((function(){document.title="Servicios | DevMayden"}),[]),Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(L,{title:"Nuestros Servicios"})})},R=(c(95),function(){var e=Object(s.useState)([]),t=Object(d.a)(e,2),c=t[0],n=t[1];Object(s.useEffect)((function(){document.title="Plana Profesional | Dev Mayden",i()}),[]);var i=function(){var e=Object(m.a)(x.a.mark((function e(){var t,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://devmaydenheroku.herokuapp.com/teams");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(L,{title:"Conoce a Nuestro Team"}),Object(a.jsx)("div",{class:"container",children:Object(a.jsx)("div",{class:"row",children:c.map((function(e){return Object(a.jsx)("div",{class:"col-12 col-sm-6 col-md-4 col-lg-3",children:Object(a.jsxs)("div",{class:"our-team",children:[Object(a.jsx)("div",{class:"picture",children:Object(a.jsx)("img",{class:"img-fluid",src:"https://devmaydenheroku.herokuapp.com".concat(e.perfil.url),alt:e.nombre})}),Object(a.jsxs)("div",{class:"team-content",children:[Object(a.jsx)("h3",{class:"name",children:e.nombre}),Object(a.jsx)("h4",{class:"title",children:e.cargo})]}),Object(a.jsx)("ul",{class:"social",children:Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:e.url,target:"_team",class:"fa fa-facebook","aria-hidden":"true"})})})]})},e.id)}))})})]})}),_=c(46),z=c.n(_),J=(c(98),c(26));function W(){return Object(s.useEffect)((function(){document.title="Contacto | DevMayden"}),[]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(L,{title:"Formulario de Contacto"}),Object(a.jsxs)("div",{className:"contactcontainer",children:[Object(a.jsx)("h1",{children:"Contacto"}),Object(a.jsxs)("div",{className:"contacto",children:[Object(a.jsxs)("div",{className:"info",children:[Object(a.jsxs)("div",{className:"col",children:[Object(a.jsx)(J.b,{}),Object(a.jsx)("p",{children:"devmayden@gmail.com"})]}),Object(a.jsx)("div",{className:"redes-s",children:Object(a.jsx)("a",{href:"https://www.facebook.com/mayconyucra",target:"developer",children:Object(a.jsx)(J.a,{})})})]}),Object(a.jsxs)("form",{className:"column",onSubmit:function(e){e.preventDefault(),z.a.sendForm("service_0q5mxtw","template_gx7thae",e.target,"user_3EiM4ZLRPpxAYaOXH8LxS").then((function(e){alert("mensaje enviado")}),(function(e){alert(e.message)})),e.target.reset()},children:[Object(a.jsx)("input",{type:"text",placeholder:"Nombre",className:"form-control",name:"name"}),Object(a.jsx)("input",{type:"email",placeholder:"Email",className:"form-control",name:"email"}),Object(a.jsx)("textarea",{name:"message",placeholder:"Mensaje",id:"",className:"form-control",cols:"30",rows:"5"}),Object(a.jsx)("input",{type:"submit",className:"btn btn-primary",value:"Enviar"})]})]})]})]})}var Y=function(){return Object(a.jsxs)(r.a,{basename:"/antonydev",children:[Object(a.jsx)(j,{}),Object(a.jsx)(u,{}),Object(a.jsxs)(l.c,{children:[Object(a.jsxs)(l.a,{path:"/",exact:!0,children:[Object(a.jsx)(N,{}),Object(a.jsx)(y,{}),Object(a.jsx)(k,{})]}),Object(a.jsx)(l.a,{path:"/blog/:id",children:Object(a.jsx)(H,{})}),Object(a.jsx)(l.a,{path:"/blog",children:Object(a.jsx)(B,{})}),Object(a.jsx)(l.a,{path:"/nosotros",children:Object(a.jsx)(I,{})}),Object(a.jsx)(l.a,{path:"/servicios",children:Object(a.jsx)(A,{})}),Object(a.jsx)(l.a,{path:"/equipo",children:Object(a.jsx)(R,{})}),Object(a.jsx)(l.a,{path:"/contacto",children:Object(a.jsx)(W,{})})]}),Object(a.jsx)(w,{})]})};i.a.render(Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(Y,{})}),document.getElementById("root"))}},[[99,1,2]]]);
//# sourceMappingURL=main.ca8c99b9.chunk.js.map