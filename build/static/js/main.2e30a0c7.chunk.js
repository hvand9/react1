(this.webpackJsonplecture2=this.webpackJsonplecture2||[]).push([[0],{10:function(e,n,t){},12:function(e,n,t){"use strict";t.r(n);var c=t(1),r=t.n(c),s=t(4),j=t.n(s),a=(t(9),t(2)),i=(t(10),t(0)),o=function(e){return Object(i.jsxs)("div",{children:[Object(i.jsxs)("p",{children:["name: ",e.name]}),Object(i.jsxs)("p",{children:["age: ",e.age]}),Object(i.jsxs)("p",{children:["personality: ",e.personality]}),Object(i.jsx)("hr",{})]})},h=[{name:"Ghandi",age:78,personality:"Peaceful"},{name:"Malcolm X",age:39,personality:"Peaceful"},{name:"Martin Luther King",age:39,personality:"Harsh"}],b=[{name:"Christian",subject:"Frontend"},{name:"Torben",subject:"Backend"},{name:"Morten",subject:"UX"}],u=function(e){return Object(i.jsxs)("div",{children:[Object(i.jsxs)("p",{children:["name: ",e.name]}),Object(i.jsxs)("p",{children:["subject: ",e.subject]}),Object(i.jsx)("hr",{})]})};var l=function(){var e=Object(c.useState)(),n=Object(a.a)(e,2),t=n[0],r=n[1],s=Object(c.useState)("Mo"),j=Object(a.a)(s,2),l=j[0],d=j[1],O=Object(c.useState)(2020),p=Object(a.a)(O,2),m=p[0],x=p[1];return Object(c.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){return r(e)}))}),[]),Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"Dynamic Funtions"}),Object(i.jsx)("p",{children:m}),Object(i.jsx)("button",{onClick:function(){x(2021)},children:"Change to the correct year"}),Object(i.jsx)("p",{children:l}),Object(i.jsx)("button",{onClick:function(){d("Julianna")},children:"Change Name"}),Object(i.jsx)("h1",{children:Object(i.jsx)("span",{children:"Who are my teachers?"})}),Object(i.jsx)("dl",{children:b.map((function(e){return Object(i.jsx)(u,{name:e.name,subject:e.subject})}))}),Object(i.jsx)("h1",{children:Object(i.jsx)("span",{children:"Import Persons in history"})}),Object(i.jsx)("dl",{children:h.map((function(e){return Object(i.jsx)(o,{name:e.name,age:e.age,personality:e.personality})}))}),Object(i.jsx)("h1",{children:"Fetching data from an API"}),t&&t.map((function(e){return Object(i.jsx)("p",{children:e.name})}))]})};j.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(l,{})}),document.getElementById("root"))},9:function(e,n,t){}},[[12,1,2]]]);
//# sourceMappingURL=main.2e30a0c7.chunk.js.map