(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){},22:function(e,t,a){e.exports=a(35)},27:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(19),c=a.n(r),o=a(2),s=a(8),i=a(1);a(27);function u(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,"About"),l.a.createElement("p",null,"The website is a todo app where you add the todo lists and mark it done or delete. Good Luck"))}function m(){return l.a.createElement("header",{style:d},l.a.createElement("h2",null,l.a.createElement(s.b,{className:"App-link",to:"/"},"Start")),l.a.createElement(s.b,{className:"App-link",to:"/about"},"About")," ","|"," ",l.a.createElement(s.b,{className:"App-link",to:"/add"},"Add"))}var d={background:"rgb(36, 36, 36)",color:"white",textAlign:"center",padding:"5px"},p={display:"flex",margin:"auto",marginTop:"1%",fontWeight:"bold",fontSize:"75%",padding:"1%",backgroundColor:"rgb(40, 44, 52)",color:"white",border:"solid 1px",borderRadius:"3%",borderColor:"rgb(0, 0, 0)",boxShadow:"1px 2px rgb(235, 236, 237)"},b={margin:"auto"},E=function(e){var t=e.setImportance,a=["NotImp","Imp","VeryImp","All"];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"impBar",style:p},["Not Important","Important","Very Important","All"].map(function(e,n){return l.a.createElement("span",{key:e,style:b,onClick:function(){t(e)}},a[n])})))},f={position:"fixed",left:"0%",width:"100%",marginBottom:"1%",bottom:"0%",fontWeight:"bold",fontSize:"75%",color:"white"},k={display:"flex",maxWidth:"93%",padding:"2%",margin:"auto",backgroundColor:"rgb(40, 44, 52)",border:"solid 1px",borderRadius:"3%",borderColor:"rgb(0, 0, 0)",boxShadow:"1px 2px rgb(235, 236, 237)"},g={margin:"auto",padding:".1% 2%"},h=function(e){var t=e.setStatus;return l.a.createElement("div",{className:"statusBar",style:f},l.a.createElement("div",{style:k},["To Do","Doing","Done","Delayed","All"].map(function(e){return l.a.createElement("span",{key:e,style:g,onClick:function(){t(e)}},e)})))},N=(a(16),function(e){var t=e.task,a=Object(n.useState)(t.deadline),r=Object(o.a)(a,2),c=r[0],s=r[1],i=Object(n.useState)(t.importance),u=Object(o.a)(i,2),m=u[0],d=u[1],p=Object(n.useState)(t.status),b=Object(o.a)(p,2),E=b[0],f=b[1],k=Object(n.useState)(t.description),g=Object(o.a)(k,2),h=g[0],N=g[1],v=Object(n.useState)(!1),y=Object(o.a)(v,2),O=y[0],T=y[1],S=e.alterTask,j=e.collapse,x=function(){t.deadline=c,t.importance=m,t.status=E,t.description=h,S(t),j()};return l.a.createElement("div",{style:O?{background:"rgba(95, 222, 253, 0.856)",position:"absolute",top:"10%",left:"0%",width:"100%",maxWidth:"100%",margin:"none",paddingTop:"5%",paddingBottom:"5%",zIndex:"1"}:{background:"rgba(95, 222, 253, 0.856)",position:"fixed",width:"100%",maxWidth:"100%",top:"20%",left:"0%",margin:"none",paddingTop:"2%",paddingBottom:"3%"}},l.a.createElement("button",{className:"btn",onClick:j},"X"),l.a.createElement("h3",{className:"titleStyle"},t.title),l.a.createElement("div",{className:"content"},l.a.createElement("span",{className:"heads"},"Deadline"),l.a.createElement("span",{className:"info"},t.deadline?t.deadline:"No Deadline")),l.a.createElement("div",{className:"content"},l.a.createElement("span",{className:"heads"},"Importance"),l.a.createElement("span",{className:"info"},m)),l.a.createElement("div",{className:"content"},l.a.createElement("span",{className:"heads"},"Status"),l.a.createElement("span",{className:"info"},E)),l.a.createElement("p",null,h||null),l.a.createElement("br",null),l.a.createElement("button",{className:"fullBtn",onClick:function(){return T(!O)}},"Edit"),l.a.createElement("br",null),O?l.a.createElement("div",{className:"editPanel"},l.a.createElement("div",{className:"importance"},["Not Important","Important","Very Important"].map(function(e){return l.a.createElement("span",{key:e},l.a.createElement("button",{className:"btn",onClick:function(){return d(e)}},e))})),l.a.createElement("br",null),l.a.createElement("div",{className:"status"},["To Do","Doing","Done","Delayed"].map(function(e){return l.a.createElement("span",{key:e},l.a.createElement("button",{className:"btn",onClick:function(){return f(e)}},e))})),l.a.createElement("br",null),l.a.createElement("input",{type:"date",onChange:function(e){return s(e.target.value)}}),l.a.createElement("br",null),l.a.createElement("input",{type:"text",value:h,onChange:function(e){return N(e.target.value)}}),l.a.createElement("br",null),l.a.createElement("button",{className:"fullBtn",onClick:x},"Submit")):null)}),v=function(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),r=a[0],c=a[1],s=e.task,i=s.id,u=s.title;return l.a.createElement("div",{key:i,style:{padding:"1px",border:"5px",borderLeftColor:"Red",borderRadius:"15px",textDecoration:"Done"===e.task.status?"line-through":"none"}},l.a.createElement("p",null,l.a.createElement("button",{style:{background:"Done"===e.task.status?"green":"red",borderRadius:"50%",float:"left"},onClick:function(){e.task.status="Done",e.alterTask(e.task),console.log("This one is Done: ",e.task)}},"o"),l.a.createElement("span",{onClick:function(){return c(!0)}},u),l.a.createElement("button",{style:{background:"red",borderRadius:"50%",float:"right"},onClick:function(){return e.delTask(e.task)}},"x")),l.a.createElement(l.a.Fragment,null,r?l.a.createElement(N,{task:e.task,collapse:function(){return c(!1)},alterTask:e.alterTask}):null))},y=function(e){return!e.tasks||e.tasks.length<1?null:e.tasks.map(function(t){return l.a.createElement("div",{key:t.id},l.a.createElement(v,{task:t,alterTask:e.alterTask,delTask:e.delTask}))})},O=function(e){var t=Object(n.useState)("All"),a=Object(o.a)(t,2),r=a[0],c=a[1],s=Object(n.useState)("All"),i=Object(o.a)(s,2),u=i[0],m=i[1];return l.a.createElement("div",null,l.a.createElement(E,{setImportance:m}),l.a.createElement(y,{tasks:"All"!==u&&"All"!==r?e.tasks.filter(function(e){return e.importance===u&&e.status===r}):"All"!==u?e.tasks.filter(function(e){return e.importance===u}):"All"!==r?e.tasks.filter(function(e){return e.status===r}):e.tasks,alterTask:e.alterTask,delTask:e.delTask}),l.a.createElement(h,{setStatus:c}))},T=a(21),S=function(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),r=a[0],c=a[1],s=Object(n.useState)(""),u=Object(o.a)(s,2),m=u[0],d=u[1],p=Object(n.useState)("Important"),b=Object(o.a)(p,2),E=b[0],f=b[1],k=Object(n.useState)("To Do"),g=Object(o.a)(k,2),h=g[0],N=g[1],v=Object(n.useState)(""),y=Object(o.a)(v,2),O=y[0],S=y[1],j=e.alterTask,x=Object(i.e)(),w=function(){x.push("/")},D=function(){var e={id:Object(T.v4)(),title:r,deadline:m,importance:E,status:h,description:O};j(e),console.log("The Task thats added: ",e),w()};return l.a.createElement("div",{style:{background:"rgba(95, 222, 253, 0.856)",width:"100%",maxWidth:"100%",margin:"none",paddingTop:"2%",paddingBottom:"5%"}},l.a.createElement("button",{className:"btn",onClick:w},"X"),l.a.createElement("hr",null),l.a.createElement("h3",{className:"titleStyle"},r||"Title"),l.a.createElement("div",{className:"content"},l.a.createElement("span",{className:"heads"},"Deadline"),l.a.createElement("span",{className:"info"},m||"No Deadline")),l.a.createElement("div",{className:"content"},l.a.createElement("span",{className:"heads"},"Importance"),l.a.createElement("span",{className:"info"},E)),l.a.createElement("div",{className:"content"},l.a.createElement("span",{className:"heads"},"Status"),l.a.createElement("span",{className:"info"},h)),l.a.createElement("p",null,O||null),l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement("br",null),l.a.createElement("div",{className:"editPanel"},l.a.createElement("input",{type:"text",value:r,placeholder:"Enter Title",onChange:function(e){return c(e.target.value)},required:!0}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"importance"},["Not Important","Important","Very Important"].map(function(e){return l.a.createElement("span",{key:e},l.a.createElement("button",{className:"btn",onClick:function(){return f(e)}},e))})),l.a.createElement("br",null),l.a.createElement("div",{className:"status"},["To Do","Doing","Done","Delayed"].map(function(e){return l.a.createElement("span",{key:e},l.a.createElement("button",{className:"btn",onClick:function(){return N(e)}},e))})),l.a.createElement("br",null),l.a.createElement("input",{type:"date",onChange:function(e){return d(e.target.value)}}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{type:"text",value:O,onChange:function(e){return S(e.target.value)}}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("button",{className:"fullBtn",onClick:D},"Submit")))},j=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1];Object(n.useEffect)(function(){!function(){var e=window.localStorage.getItem("startAppData"),t=JSON.parse(e);r(t)}()},[]);var c=function(e){console.log("Task altered: ",e);var t=[];a&&(t=a.filter(function(t){return t.id!==e.id}));var n=t.concat(e);r(n),window.localStorage.setItem("startAppData",JSON.stringify(n)),console.log("The tasks to be written: ",a)};return l.a.createElement(s.a,null,l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"container"},l.a.createElement(m,null),l.a.createElement(i.a,{exact:!0,path:"/"},l.a.createElement(O,{tasks:a,alterTask:c,delTask:function(e){var t=a.filter(function(t){return t.id!==e.id});r(t),window.localStorage.setItem("startAppData",JSON.stringify(t)),console.log("The tasks to be written: ",t)}})),l.a.createElement(i.a,{path:"/about",component:u}),l.a.createElement(i.a,{path:"/add"},l.a.createElement(S,{alterTask:c})))))};c.a.render(l.a.createElement(j,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.108bf7ce.chunk.js.map