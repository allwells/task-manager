(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{25:function(n,e,t){},50:function(n,e,t){"use strict";t.r(e);t(25);var r,o,i=t(6),a=t(0),c=t.n(a),s=t(3),d=t(4),u={text:"#F5F5F5",black:"#000000",text02:"#303137",button:"#B6296F",primary:"#F0F0F0",textField:"#1D222E",secondary:"#292E39",buttonHover:"#770E3F",transparent:"transparent",notification:{success:{border:"#080",background:"#0806"},error:{border:"#800",background:"#8006"}}},l=d.a.div(r||(r=Object(s.a)(["\n  * {\n    font-family: inherit;\n  }\n\n  .error {\n    left: 40%;\n    right: 40%;\n    z-index: 1;\n    top: 1.5rem;\n    display: flex;\n    padding: 10px;\n    font-weight: 300;\n    font-size: 0.8rem;\n    position: absolute;\n    place-items: center;\n    border-radius: 0.2rem;\n    color: ",";\n    justify-content: center;\n    background: ",";\n    border: 2px solid ",";\n  }\n\n  .success {\n    left: 40%;\n    right: 40%;\n    z-index: 1;\n    top: 1.5rem;\n    display: flex;\n    padding: 10px;\n    font-weight: 300;\n    font-size: 0.8rem;\n    position: absolute;\n    place-items: center;\n    border-radius: 0.2rem;\n    color: ",";\n    justify-content: center;\n    background: ",";\n    border: 2px solid ",";\n  }\n"])),u.text02,u.notification.error.background,u.notification.error.border,u.text02,u.notification.success.background,u.notification.success.border),b=t(1);function f(n){var e=n.messageType,t=n.message;return null===t?null:Object(b.jsx)(l,{children:Object(b.jsx)("div",{className:e,children:t})})}var h,m,p=d.a.div(o||(o=Object(s.a)(["\n  width: 100%;\n  height: auto;\n  display: flex;\n  place-items: center;\n  flex-direction: column;\n  justify-content: center;\n  background: ",";\n\n  .taskManagerLayout {\n    width: 30%;\n    height: 70%;\n    align-self: center;\n    display: flex;\n    place-items: center;\n    flex-direction: column;\n    justify-content: center;\n    border-radius: 0.4rem;\n    background: ",";\n    box-shadow: 0 0.5rem 1rem ",";\n  }\n"])),u.primary,u.secondary,u.black+"77"),g=d.a.div(h||(h=Object(s.a)(["\n  width: 30%;\n  padding: 2% 0;\n  margin-top: 3rem;\n\n  * {\n    font-family: inherit;\n  }\n\n  h2 {\n    font-weight: 200;\n    font-size: 1.5rem;\n    text-align: center;\n    margin-bottom: 3rem;\n    color: ",";\n  }\n\n  div {\n    width: 100%;\n    display: flex;\n    height: fit-content;\n    place-items: center;\n    justify-content: center;\n\n    input,\n    button {\n      border: none;\n      outline: none;\n      font-weight: 300;\n      font-size: 0.7rem;\n      border-radius: 3rem;\n      color: ",";\n      background: ",";\n    }\n  }\n\n  .inputField {\n    margin-bottom: 0.5rem;\n\n    input {\n      width: 100%;\n      height: 2rem;\n      padding: 0 1rem;\n      font-size: 0.8rem;\n      background: ",";\n    }\n  }\n\n  .buttonSet {\n    display: flex;\n    place-items: center;\n    justify-content: space-evenly;\n\n    input,\n    button {\n      width: 5rem;\n      height: 1.6rem;\n      box-shadow: 0 0.3rem 0.3rem ",";\n\n      &:hover {\n        background: ",";\n      }\n\n      &:focus {\n        background: ",";\n        box-shadow: 0 0.1rem 0.2rem ",";\n      }\n    }\n  }\n"])),u.text02,u.text,u.button,u.textField,u.secondary+"88",u.buttonHover,u.buttonHover,u.secondary+"88");function j(n){var e=n.addTask,t=n.onChange,r=n.newTask;n.updateTask;return Object(b.jsxs)(g,{children:[Object(b.jsx)("h2",{children:"Task Manager"}),Object(b.jsxs)("form",{onSubmit:e,children:[Object(b.jsx)("div",{className:"inputField",children:Object(b.jsx)("input",{type:"text",onChange:t,placeholder:"Add Task...",value:r})}),Object(b.jsx)("div",{className:"buttonSet",children:Object(b.jsx)("input",{type:"submit",value:"Add Task"})})]})]})}var x=d.a.div(m||(m=Object(s.a)(["\n  width: 30%;\n  height: auto;\n  margin-top: 0.5rem;\n\n  * {\n    font-family: inherit;\n  }\n\n  .todos {\n    width: 100%;\n    height: auto;\n    display: flex;\n    margin: 0.5rem 0;\n    padding: 0 0.5rem;\n    border-radius: 0.3rem;\n    justify-content: space-between;\n    background: ",";\n\n    &:hover {\n      background: ",";\n    }\n\n    p {\n      cursor: default;\n      font-weight: 200;\n      font-size: 0.8rem;\n      color: ",";\n    }\n  }\n\n  .buttonSet {\n    height: auto;\n    display: flex;\n    width: fit-content;\n    place-items: center;\n    justify-content: center;\n\n    button {\n      border: none;\n      outline: none;\n      display: flex;\n      cursor: default;\n      padding: 0.5rem;\n      border-radius: 50%;\n      place-items: center;\n      flex-direction: column;\n      justify-content: center;\n      background: ",";\n\n      &:hover {\n        background: ",";\n      }\n    }\n  }\n"])),u.black+"11",u.black+"22",u.text02,u.transparent,u.black+"11"),k=(t.p,t.p+"static/media/trash.9c028c94.svg");function y(n){var e=n.todos,t=n.deleteTask;n.editTask;return Object(b.jsx)(x,{children:e.map((function(n){return Object(b.jsxs)("div",{className:"todos",children:[Object(b.jsx)("p",{children:n.task}),Object(b.jsx)("div",{className:"buttonSet",children:Object(b.jsx)("button",{className:"deleteBtn",onClick:function(){return t(n.id,n.task)},children:Object(b.jsx)("img",{src:k,width:16,height:16,alt:"trash"})})})]},n.id)}))})}var v=t(5),O=t.n(v),w="/api/tasks",T=function(){return O.a.get(w).then((function(n){return n.data}))},F=function(n){return O.a.post(w,n).then((function(n){return n.data}))},S=function(n){return O.a.delete("".concat(w,"/").concat(n)).then((function(n){return n}))};function z(){var n=c.a.useState([]),e=Object(i.a)(n,2),t=e[0],r=e[1],o=c.a.useState(""),a=Object(i.a)(o,2),s=a[0],d=a[1],u=c.a.useState(""),l=Object(i.a)(u,2),h=l[0],m=l[1],g=c.a.useState(""),x=Object(i.a)(g,2),k=x[0],v=x[1];c.a.useEffect((function(){T().then((function(n){r(n)}))}),[]);return Object(b.jsxs)(p,{children:[Object(b.jsx)(f,{messageType:k,message:h}),Object(b.jsx)(j,{addTask:function(n){n.preventDefault(),F({task:s}).then((function(n){r(t.concat(n)),d(""),v("success"),m("Task added!"),setTimeout((function(){m(null)}),5e3)}))},onChange:function(n){d(n.target.value)},newTask:s}),Object(b.jsx)(y,{todos:t,deleteTask:function(n,e){S(n).then((function(o){200===o.status&&(r(t.filter((function(e){return e.id!==n}))),v("success"),m("Task deleted: ".concat(e,"!")),setTimeout((function(){m(null)}),5e3))})).catch((function(e){v("error"),m("Task already deleted!"),setTimeout((function(){m(null)}),5e3),r(t.filter((function(e){return e.id!==n})))}))}})]})}var N=t(24);t.n(N).a.render(Object(b.jsx)(z,{}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.5ff507d2.chunk.js.map