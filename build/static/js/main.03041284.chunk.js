(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){},22:function(e,t,a){e.exports=a(35)},27:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(19),c=a.n(r),s=a(3),o=a(8),i=a(1);a(27);function u(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,"About"),l.a.createElement("p",null,"The website is a todo app where you add the todo lists and mark it done or delete. Good Luck"))}function m(){return l.a.createElement("header",{style:d},l.a.createElement("h2",null,"Tasks"),l.a.createElement(o.b,{className:"App-link",to:"/"},"Home")," ","|"," ",l.a.createElement(o.b,{className:"App-link",to:"/about"},"About")," ","|"," ",l.a.createElement(o.b,{className:"App-link",to:"/add"},"Add"))}var d={background:"#333",color:"white",textAlign:"center",padding:"5px"},p={display:"flex",width:"100%",margin:"0%"},E={margin:"auto",padding:"1%",fontWeight:"bold"},b=function(e){var t=e.tasks,a=e.setDisplay;return l.a.createElement("div",{className:"impBar",style:p},["Not Important","Important","Very Important","All"].map(function(e){return l.a.createElement("span",{key:e,style:E,onClick:function(){!function(e){if(console.log("The imp value set: ",e),"All"!==e){console.log("THE TASKS TO START WITH: ",t);var n=t.filter(function(t){return t.importance===e});a(n)}else a(t)}(e)}},e)}))},k=function(){return null},f=(a(16),function(e){var t=e.task,a=Object(n.useState)(t.deadline),r=Object(s.a)(a,2),c=r[0],o=r[1],i=Object(n.useState)(t.importance),u=Object(s.a)(i,2),m=u[0],d=u[1],p=Object(n.useState)(t.status),E=Object(s.a)(p,2),b=E[0],k=E[1],f=Object(n.useState)(t.description),g=Object(s.a)(f,2),v=g[0],N=g[1],h=Object(n.useState)(!1),T=Object(s.a)(h,2),y=T[0],O=T[1],j=e.alterTask,S=e.collapse,D=function(){t.deadline=c,t.importance=m,t.status=b,t.description=v,j(t),S()};return l.a.createElement("div",{style:{background:"rgba(95, 222, 253, 0.856)",position:"fixed",width:"100%",maxWidth:"100%",top:y?"15vh":"25vh",margin:"none",paddingTop:"1%",paddingBottom:"1%",overflowY:"scroll"}},l.a.createElement("button",{className:"btn",onClick:S},"X"),l.a.createElement("h3",{className:"titleStyle"},t.title),l.a.createElement("div",{className:"content"},l.a.createElement("span",{className:"heads"},"Deadline"),l.a.createElement("span",{className:"info"},t.deadline?t.deadline:"No Deadline")),l.a.createElement("div",{className:"content"},l.a.createElement("span",{className:"heads"},"Importance"),l.a.createElement("span",{className:"info"},m)),l.a.createElement("div",{className:"content"},l.a.createElement("span",{className:"heads"},"Status"),l.a.createElement("span",{className:"info"},b)),l.a.createElement("p",null,v||null),l.a.createElement("br",null),l.a.createElement("button",{className:"fullBtn",onClick:function(){return O(!y)}},"Edit"),l.a.createElement("br",null),y?l.a.createElement("div",{className:"editPanel"},l.a.createElement("div",{className:"importance"},["Not Important","Important","Very Important"].map(function(e){return l.a.createElement("span",{key:e},l.a.createElement("button",{className:"btn",onClick:function(){return d(e)}},e))})),l.a.createElement("br",null),l.a.createElement("div",{className:"status"},["To Do","Doing","Done","Delayed"].map(function(e){return l.a.createElement("span",{key:e},l.a.createElement("button",{className:"btn",onClick:function(){return k(e)}},e))})),l.a.createElement("br",null),l.a.createElement("input",{type:"date",onChange:function(e){return o(e.target.value)}}),l.a.createElement("br",null),l.a.createElement("input",{type:"text",value:v,onChange:function(e){return N(e.target.value)}}),l.a.createElement("br",null),l.a.createElement("button",{className:"fullBtn",onClick:D},"Submit")):null)}),g=function(e){var t=Object(n.useState)(!1),a=Object(s.a)(t,2),r=a[0],c=a[1],o=e.task,i=o.id,u=o.title;return l.a.createElement("div",{key:i,style:{padding:"1px",border:"5px",borderLeftColor:"Red",borderRadius:"15px",textDecoration:"Done"===e.task.status?"line-through":"none"}},l.a.createElement("p",null,l.a.createElement("button",{style:{background:"Done"===e.task.status?"green":"red",borderRadius:"50%",float:"left"},onClick:function(){e.task.status="Done",e.alterTask(e.task),console.log("This one is Done: ",e.task)}},"o"),l.a.createElement("span",{onClick:function(){return c(!0)}},u),l.a.createElement("button",{style:{background:"red",borderRadius:"50%",float:"right"},onClick:function(){return e.delTask(e.task)}},"x")),l.a.createElement(l.a.Fragment,null,r?l.a.createElement(f,{task:e.task,collapse:function(){return c(!1)},alterTask:e.alterTask}):null))},v=function(e){return!e.tasks||e.tasks.length<1?null:e.tasks.map(function(t){return l.a.createElement("div",{key:t.id},l.a.createElement(g,{task:t,alterTask:e.alterTask,delTask:e.delTask}))})},N=function(e){return l.a.createElement("div",null,l.a.createElement(b,{setDisplay:e.setDisplay,tasks:e.tasks}),l.a.createElement(v,{tasks:e.displayTasks,alterTask:e.alterTask,delTask:e.delTask}),l.a.createElement(k,{setDisplay:e.setDisplay,tasks:e.tasks}))},h=a(21),T=function(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),r=a[0],c=a[1],o=Object(n.useState)(""),u=Object(s.a)(o,2),m=u[0],d=u[1],p=Object(n.useState)("Important"),E=Object(s.a)(p,2),b=E[0],k=E[1],f=Object(n.useState)("To Do"),g=Object(s.a)(f,2),v=g[0],N=g[1],T=Object(n.useState)(""),y=Object(s.a)(T,2),O=y[0],j=y[1],S=e.alterTask,D=Object(i.e)(),w=function(){D.push("/")},C=function(){var e={id:Object(h.v4)(),title:r,deadline:m,importance:b,status:v,description:O};S(e),console.log("The Task thats added: ",e),w()};return l.a.createElement("div",{style:{background:"rgba(95, 222, 253, 0.856)",position:"fixed",width:"100%",maxWidth:"100%",top:"15vh",margin:"none",paddingTop:"1%",paddingBottom:"1%",overflowY:"scroll"}},l.a.createElement("button",{className:"btn",onClick:w},"X"),l.a.createElement("hr",null),l.a.createElement("h3",{className:"titleStyle"},r||"Title"),l.a.createElement("div",{className:"content"},l.a.createElement("span",{className:"heads"},"Deadline"),l.a.createElement("span",{className:"info"},m||"No Deadline")),l.a.createElement("div",{className:"content"},l.a.createElement("span",{className:"heads"},"Importance"),l.a.createElement("span",{className:"info"},b)),l.a.createElement("div",{className:"content"},l.a.createElement("span",{className:"heads"},"Status"),l.a.createElement("span",{className:"info"},v)),l.a.createElement("p",null,O||null),l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement("br",null),l.a.createElement("div",{className:"editPanel"},l.a.createElement("input",{type:"text",value:r,placeholder:"Enter Title",onChange:function(e){return c(e.target.value)},required:!0}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"importance"},["Not Important","Important","Very Important"].map(function(e){return l.a.createElement("span",{key:e},l.a.createElement("button",{className:"btn",onClick:function(){return k(e)}},e))})),l.a.createElement("br",null),l.a.createElement("div",{className:"status"},["To Do","Doing","Done","Delayed"].map(function(e){return l.a.createElement("span",{key:e},l.a.createElement("button",{className:"btn",onClick:function(){return N(e)}},e))})),l.a.createElement("br",null),l.a.createElement("input",{type:"date",onChange:function(e){return d(e.target.value)}}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{type:"text",value:O,onChange:function(e){return j(e.target.value)}}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("button",{className:"fullBtn",onClick:C},"Submit")))},y=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)([]),d=Object(s.a)(c,2),p=d[0],E=d[1];Object(n.useEffect)(function(){!function(){var e=window.localStorage.getItem("startAppData"),t=JSON.parse(e);r(t),console.log("The data from Browser: ",t),E(t)}()},[]);var b=function(e){console.log("Task altered: ",e);var t=[];a&&(t=a.filter(function(t){return t.id!==e.id}));var n=t.concat(e);r(n),E(n),window.localStorage.setItem("startAppData",JSON.stringify(n)),console.log("The tasks to be written: ",a)};return l.a.createElement(o.a,null,l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"container"},l.a.createElement(m,null),l.a.createElement(i.a,{exact:!0,path:"/"},l.a.createElement(N,{tasks:a,displayTasks:p,alterTask:b,setDisplay:E,delTask:function(e){var t=a.filter(function(t){return t.id!==e.id});r(t),E(t),window.localStorage.setItem("startAppData",JSON.stringify(t)),console.log("The tasks to be written: ",t)}})),l.a.createElement(i.a,{path:"/about",component:u}),l.a.createElement(i.a,{path:"/add"},l.a.createElement(T,{alterTask:b})))))};c.a.render(l.a.createElement(y,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.03041284.chunk.js.map