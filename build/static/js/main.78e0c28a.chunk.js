(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){},22:function(e,t,a){e.exports=a(35)},27:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(19),c=a.n(r),o=a(2),s=a(8),i=a(1);a(27);function m(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,"About"),l.a.createElement("p",null,"The website is a todo app where you add the todo lists and mark it done or delete. Good Luck"))}function u(){return l.a.createElement("header",{style:d},l.a.createElement("h2",null,l.a.createElement(s.b,{className:"App-link",to:"/"},"Start")),l.a.createElement(s.b,{className:"App-link",to:"/about"},"About")," ","|"," ",l.a.createElement(s.b,{className:"App-link",to:"/add"},"Add"))}var d={background:"rgb(36, 36, 36)",color:"white",textAlign:"center",padding:"5px"},p={display:"flex",margin:"auto",marginTop:"1%",fontWeight:"bold",fontSize:"80%",padding:"1%",backgroundColor:"rgb(40, 44, 52)",color:"white",border:"solid 1px",borderRadius:"3%",borderColor:"rgb(0, 0, 0)",boxShadow:"1px 2px rgb(235, 236, 237)"},b={margin:"auto"},E={margin:"auto",color:"rgb(40, 201, 250)"},f=function(e){var t=e.importance,a=e.setImportance,n=["Not-Imp","Important","Very-Imp","All"];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"impBar",style:p},["Not Important","Important","Very Important","All"].map(function(e,r){return l.a.createElement("span",{key:e,style:t===e?E:b,onClick:function(){a(e)}},n[r])})))},g={position:"fixed",left:"0%",width:"100%",marginBottom:"1%",bottom:"0%",fontWeight:"bold",fontSize:"80%",color:"white"},k={display:"flex",maxWidth:"93%",padding:"2%",margin:"auto",backgroundColor:"rgb(40, 44, 52)",border:"solid 1px",borderRadius:"3%",borderColor:"rgb(0, 0, 0)",boxShadow:"1px 2px rgb(235, 236, 237)"},N={margin:"auto",padding:".1% 2%"},h={margin:"auto",padding:".1% 2%",color:"rgb(40, 201, 250)"},v=function(e){var t=e.status,a=e.setStatus;return l.a.createElement("div",{className:"statusBar",style:g},l.a.createElement("div",{style:k},["To Do","Doing","Done","Delayed","All"].map(function(e){return l.a.createElement("span",{key:e,style:t===e?h:N,onClick:function(){a(e)}},e)})))},y=(a(16),function(e){var t=e.task,a=Object(n.useState)(t.deadline),r=Object(o.a)(a,2),c=r[0],s=r[1],i=Object(n.useState)(t.importance),m=Object(o.a)(i,2),u=m[0],d=m[1],p=Object(n.useState)(t.status),b=Object(o.a)(p,2),E=b[0],f=b[1],g=Object(n.useState)(t.description),k=Object(o.a)(g,2),N=k[0],h=k[1],v=Object(n.useState)(!1),y=Object(o.a)(v,2),S=y[0],O=y[1],T=e.alterTask,D=e.collapse,I=function(){t.deadline=c,t.importance=u,t.status=E,t.description=N,T(t),D()};return l.a.createElement("div",{style:S?{background:"rgba(95, 222, 253, 0.856)",position:"absolute",top:"10%",left:"0%",width:"100%",maxWidth:"100%",margin:"none",paddingTop:"5%",paddingBottom:"5%",zIndex:"1"}:{background:"rgba(95, 222, 253, 0.856)",position:"fixed",width:"100%",maxWidth:"100%",top:"20%",left:"0%",margin:"none",paddingTop:"2%",paddingBottom:"3%"}},l.a.createElement("button",{className:"btn",onClick:D},"X"),l.a.createElement("h3",{className:"titleStyle"},t.title),l.a.createElement("div",{className:"content"},l.a.createElement("span",{className:"heads"},"Deadline"),l.a.createElement("span",{className:"info"},t.deadline?t.deadline:"No Deadline")),l.a.createElement("div",{className:"content"},l.a.createElement("span",{className:"heads"},"Importance"),l.a.createElement("span",{className:"info"},u)),l.a.createElement("div",{className:"content"},l.a.createElement("span",{className:"heads"},"Status"),l.a.createElement("span",{className:"info"},E)),l.a.createElement("p",null,N||null),l.a.createElement("br",null),l.a.createElement("span",{className:S?"btn btnSelected fullBtn":"btn fullBtn",onClick:function(){return O(!S)}},S?"Cancel Edit":"Edit"),l.a.createElement("br",null),l.a.createElement("br",null),S?function(){var e=["Not-Imp","Important","Very-Imp","All"];return l.a.createElement("div",{className:"editPanel"},l.a.createElement("div",{className:"btnGroup"},["Not Important","Important","Very Important"].map(function(t,a){return l.a.createElement("span",{key:t,className:u===t?"btn btnSelected":"btn",onClick:function(){return d(t)}},e[a])})),l.a.createElement("br",null),l.a.createElement("div",{className:"btnGroup"},["To Do","Doing","Done","Delayed"].map(function(e){return l.a.createElement("span",{key:e,className:E===e?"btn btnSelected":"btn",onClick:function(){return f(e)}},e)})),l.a.createElement("br",null),l.a.createElement("div",{className:"formInput"},l.a.createElement("label",{for:"deadline"},l.a.createElement("b",null,"Deadline: ")),l.a.createElement("input",{id:"deadline",type:"date",value:c,onChange:function(e){return s(e.target.value)}})),l.a.createElement("br",null),l.a.createElement("input",{type:"text",className:"formInput",placeholder:"Enter Description",value:N,onChange:function(e){return h(e.target.value)}}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("span",{className:"btn fullBtn",onClick:I},"Submit"))}():null)}),S=function(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),r=a[0],c=a[1],s=e.task,i=s.id,m=s.title;return l.a.createElement("div",{key:i,style:{padding:"1px",border:"5px",borderLeftColor:"Red",borderRadius:"15px",textDecoration:"Done"===e.task.status?"line-through":"none"}},l.a.createElement("p",null,l.a.createElement("button",{style:{background:"Done"===e.task.status?"green":"red",borderRadius:"50%",float:"left"},onClick:function(){e.task.status="Done",e.alterTask(e.task),console.log("This one is Done: ",e.task)}},"o"),l.a.createElement("span",{onClick:function(){return c(!0)}},m),l.a.createElement("button",{style:{background:"red",borderRadius:"50%",float:"right"},onClick:function(){return e.delTask(e.task)}},"x")),l.a.createElement(l.a.Fragment,null,r?l.a.createElement(y,{task:e.task,collapse:function(){return c(!1)},alterTask:e.alterTask}):null))},O=function(e){return!e.tasks||e.tasks.length<1?null:(e.tasks.sort(function(e,t){var a=new Date(e.deadline)-new Date(t.deadline);return console.log("Sorting Function: ",a),a}),e.tasks.map(function(t){return l.a.createElement("div",{key:t.id},l.a.createElement(S,{task:t,alterTask:e.alterTask,delTask:e.delTask}))}))},T=function(e){var t=Object(n.useState)("All"),a=Object(o.a)(t,2),r=a[0],c=a[1],s=Object(n.useState)("All"),i=Object(o.a)(s,2),m=i[0],u=i[1];return l.a.createElement("div",null,l.a.createElement(f,{setImportance:u,importance:m}),l.a.createElement(O,{tasks:"All"!==m&&"All"!==r?e.tasks.filter(function(e){return e.importance===m&&e.status===r}):"All"!==m?e.tasks.filter(function(e){return e.importance===m}):"All"!==r?e.tasks.filter(function(e){return e.status===r}):e.tasks,alterTask:e.alterTask,delTask:e.delTask}),l.a.createElement(v,{setStatus:c,status:r}))},D=a(21),I=function(e){var t=new Date,a=Object(n.useState)(""),r=Object(o.a)(a,2),c=r[0],s=r[1],m=Object(n.useState)("".concat(t.getDate(),"-").concat(t.getMonth()+1,"-").concat(t.getFullYear())),u=Object(o.a)(m,2),d=u[0],p=u[1],b=Object(n.useState)("Important"),E=Object(o.a)(b,2),f=E[0],g=E[1],k=Object(n.useState)("To Do"),N=Object(o.a)(k,2),h=N[0],v=N[1],y=Object(n.useState)(""),S=Object(o.a)(y,2),O=S[0],T=S[1],I=e.alterTask,j=Object(i.e)(),x=function(){j.push("/")},w=function(){var e={id:Object(D.v4)(),title:c,deadline:d,importance:f,status:h,description:O};I(e),console.log("The Task thats added: ",e),x()};return l.a.createElement("div",{style:{background:"rgba(95, 222, 253, 0.856)",width:"100%",maxWidth:"100%",margin:"none",paddingTop:"2%",paddingBottom:"5%"}},l.a.createElement("button",{className:"btn",onClick:x},"X"),l.a.createElement("hr",null),l.a.createElement("h3",{className:"titleStyle"},c||"Title"),l.a.createElement("div",{className:"content"},l.a.createElement("span",{className:"heads"},"Deadline"),l.a.createElement("span",{className:"info"},d||"No Deadline")),l.a.createElement("div",{className:"content"},l.a.createElement("span",{className:"heads"},"Importance"),l.a.createElement("span",{className:"info"},f)),l.a.createElement("div",{className:"content"},l.a.createElement("span",{className:"heads"},"Status"),l.a.createElement("span",{className:"info"},h)),l.a.createElement("p",null,O||null),l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement("br",null),function(){var e=["Not-Imp","Important","Very-Imp","All"];return l.a.createElement("div",{className:"editPanel"},l.a.createElement("input",{type:"text",value:c,className:"formInput",placeholder:"Enter Title",onChange:function(e){return s(e.target.value)},required:!0}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"btnGroup"},["Not Important","Important","Very Important"].map(function(t,a){return l.a.createElement("span",{key:t,className:f===t?"btn btnSelected":"btn",onClick:function(){return g(t)}},e[a])})),l.a.createElement("br",null),l.a.createElement("div",{className:"btnGroup"},["To Do","Doing","Done","Delayed"].map(function(e){return l.a.createElement("span",{key:e,className:h===e?"btn btnSelected":"btn",onClick:function(){return v(e)}},e)})),l.a.createElement("br",null),l.a.createElement("div",{className:"formInput"},l.a.createElement("label",null,l.a.createElement("b",null,"Deadline: ")),l.a.createElement("input",{id:"deadline",type:"date",value:d,onChange:function(e){return p(e.target.value)}})),l.a.createElement("br",null),l.a.createElement("input",{type:"text",className:"formInput",placeholder:"Enter Description",value:O,onChange:function(e){return T(e.target.value)}}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("span",{className:"btn fullBtn",onClick:w},"Submit"))}())},j=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1];Object(n.useEffect)(function(){!function(){var e=window.localStorage.getItem("startAppData"),t=JSON.parse(e);r(t)}()},[]);var c=function(e){console.log("Task altered: ",e);var t=[];a&&(t=a.filter(function(t){return t.id!==e.id}));var n=t.concat(e);r(n),window.localStorage.setItem("startAppData",JSON.stringify(n)),console.log("The tasks to be written: ",a)};return l.a.createElement(s.a,null,l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"container"},l.a.createElement(u,null),l.a.createElement(i.a,{exact:!0,path:"/"},l.a.createElement(T,{tasks:a,alterTask:c,delTask:function(e){var t=a.filter(function(t){return t.id!==e.id});r(t),window.localStorage.setItem("startAppData",JSON.stringify(t)),console.log("The tasks to be written: ",t)}})),l.a.createElement(i.a,{path:"/about",component:m}),l.a.createElement(i.a,{path:"/add"},l.a.createElement(I,{alterTask:c})))))};c.a.render(l.a.createElement(j,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.78e0c28a.chunk.js.map