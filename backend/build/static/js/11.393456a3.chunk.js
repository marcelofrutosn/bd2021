(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[11],{706:function(e,n,t){"use strict";t.r(n);var c=t(1),a=t.n(c),s=t(83),r=t(30);var o=t(85),i=t(19),l=t(639),j=a.a.lazy((function(){return Promise.all([t.e(0),t.e(9),t.e(7)]).then(t.bind(null,709))})),b=a.a.lazy((function(){return t.e(10).then(t.bind(null,704))})),d=[{path:"/funcionarios",exact:!0,name:"Funcionarios",component:j},{path:"/temperaturas",exact:!0,name:"Temperatura",component:a.a.lazy((function(){return Promise.all([t.e(0),t.e(5),t.e(8)]).then(t.bind(null,708))}))},{path:"/",name:"Home",component:b}],m=t(29),u=["component"],O=Object(m.jsx)("div",{className:"pt-3 text-center",children:Object(m.jsx)("div",{className:"sk-spinner sk-spinner-pulse"})}),h=function(e){var n=e.component,t=function(e,n){if(null==e)return{};var t,c,a=Object(r.a)(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(c=0;c<s.length;c++)t=s[c],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}(e,u),c=Object(o.c)((function(e){return e.user})),a=Object(i.g)();return Object(m.jsx)(i.b,Object(s.a)(Object(s.a)({},t),{},{render:function(e){return null!==c?Object(m.jsx)(n,Object(s.a)(Object(s.a)({},e),t)):Object(m.jsx)(i.a,{to:{pathname:"/login",state:{from:a}}})}}))},p=function(){return Object(m.jsx)("main",{className:"c-main",children:Object(m.jsx)(l.k,{fluid:!0,children:Object(m.jsx)(c.Suspense,{fallback:O,children:Object(m.jsxs)(i.d,{children:[d.map((function(e,n){return e.component&&Object(m.jsx)(h,{path:e.path,exact:e.exact,name:e.name,component:function(n){return Object(m.jsx)(l.r,{children:Object(m.jsx)(e.component,Object(s.a)({},n))})}},n)})),Object(m.jsx)(i.a,{from:"/",to:"/"})]})})})})},x=function(){return Object(m.jsx)(l.s,{fixed:!1,children:Object(m.jsx)("div",{children:Object(m.jsxs)("span",{className:"ml-1",children:["\xa9 ",(new Date).getFullYear()," Los Perros S.A."]})})})},f=t(641),v=function(){var e=Object(o.c)((function(e){return e.user})),n=Object(o.b)();console.log(e),Object(c.useEffect)((function(){}),[]);return Object(m.jsxs)(l.n,{inNav:!0,className:"c-header-nav-items mx-2",direction:"down",children:[Object(m.jsx)(l.q,{className:"c-header-nav-link",caret:!1,children:Object(m.jsx)("div",{className:"c-avatar",children:Object(m.jsx)("div",{style:{backgroundColor:"#382052",color:"white",borderRadius:"50%",width:"35px",height:"35px",display:"flex",justifyContent:"center",alignItems:"center"},children:e&&e.nombre.charAt(0)+e.apellido.charAt(0)})})}),Object(m.jsx)(l.p,{className:"pt-0",placement:"bottom-end",children:Object(m.jsxs)(l.o,{onClick:function(){localStorage.clear(),n({type:"auth/logOut"}),window.location.reload()},children:[Object(m.jsx)(f.b,{name:"cil-lock-locked",className:"mfe-2"}),"Cerrar sesi\xf3n"]})})]})},N=function(){var e=Object(o.b)(),n=Object(o.c)((function(e){return e.sidebarShow}));return Object(m.jsxs)(l.v,{withSubheader:!0,children:[Object(m.jsx)(l.T,{inHeader:!0,className:"ml-md-3 d-lg-none",onClick:function(){var t=!![!1,"responsive"].includes(n)||"responsive";e({type:"set",sidebarShow:t})}}),Object(m.jsx)(l.T,{inHeader:!0,className:"ml-3 d-md-down-none",onClick:function(){var t=![!0,"responsive"].includes(n)&&"responsive";e({type:"set",sidebarShow:t})}}),Object(m.jsx)(l.w,{className:"d-md-down-none mr-auto",children:Object(m.jsx)(l.x,{className:"px-3",children:Object(m.jsx)(l.y,{to:"/",children:"Sistema"})})}),Object(m.jsx)(l.w,{className:"ml-auto",children:Object(m.jsx)(v,{})}),Object(m.jsx)(l.S,{className:"px-3 justify-content-between",children:Object(m.jsx)(l.d,{className:"border-0 c-subheader-nav m-0 px-0 px-md-3",routes:d})})]})},w=[{_tag:"CSidebarNavItem",style:{fontSize:"small",fontWieght:"bold"},name:"Home",to:"/",icon:Object(m.jsx)(f.a,{name:"cil-home",customClasses:"c-sidebar-nav-icon"})},{_tag:"CSidebarNavItem",style:{fontSize:"small",fontWieght:"bold"},name:"Funcionarios",to:"/funcionarios",icon:Object(m.jsx)(f.a,{name:"cil-people",customClasses:"c-sidebar-nav-icon"})},{_tag:"CSidebarNavItem",style:{fontSize:"small",fontWieght:"bold"},name:"Temperaturas",to:"/temperaturas",icon:Object(m.jsx)(f.a,{name:"cil-graph",customClasses:"c-sidebar-nav-icon"})}],S=function(){var e=Object(o.b)(),n=Object(o.c)((function(e){return e.sidebarShow}));return Object(m.jsxs)(l.L,{show:n,minimize:!0,onShowChange:function(n){return e({type:"set",sidebarShow:n})},children:[Object(m.jsx)(l.N,{children:Object(m.jsx)(l.l,{items:w,components:{CSidebarNavDivider:l.O,CSidebarNavDropdown:l.P,CSidebarNavItem:l.Q,CSidebarNavTitle:l.R,CNavLink:l.J}})}),Object(m.jsx)(l.M,{className:"c-d-md-down-none"})]})};n.default=function(){return Object(m.jsxs)("div",{className:"c-app c-default-layout",children:[Object(m.jsx)(S,{}),Object(m.jsxs)("div",{className:"c-wrapper",children:[Object(m.jsx)(N,{}),Object(m.jsx)("div",{className:"c-body",children:Object(m.jsx)(p,{})}),Object(m.jsx)(x,{})]})]})}}}]);
//# sourceMappingURL=11.393456a3.chunk.js.map