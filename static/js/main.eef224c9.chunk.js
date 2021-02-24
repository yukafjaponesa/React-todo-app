(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,a){e.exports=a(16)},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),d=a.n(n),i=a(4),l=a.n(i),o=(a(15),a(2)),u=a(5),c=a(6),s=a(1),m=a(9),r=a(8);var p=function(e){var t={fontStyle:"italic",color:"#cdcdcd",textDecoration:"line-through"},a=e.isEdited?"Update":"Edit";return d.a.createElement("div",{className:"todo-item"},d.a.createElement("input",{type:"checkbox",checked:e.item.completed,onChange:function(){return e.handleChange(e.item.id)}}),!e.isEdited&&d.a.createElement("div",null,d.a.createElement("p",{style:e.item.completed?t:null},e.item.text),d.a.createElement("p",{style:e.item.completed?t:null},e.item.deadline)),d.a.createElement("div",{className:"editable-text-dlt-edit-btn"},e.isEdited&&d.a.createElement("div",null,d.a.createElement("div",{className:"editable-text-box"},d.a.createElement("input",{type:"text",id:e.item.id,value:e.item.text,onChange:function(t){e.updateInput(t.target.value,e.item.id)}})),d.a.createElement("div",{className:"editable-text-box"},d.a.createElement("input",{type:"date",id:e.item.id,value:e.item.deadline,onChange:function(t){e.updateInputDeadline(t.target.value,e.item.id)}}))),d.a.createElement("div",{className:"delete-btn"},d.a.createElement("input",{type:"button",value:"Delete",onClick:function(){e.deleteItem(e.item.id)}})),d.a.createElement("div",{className:"edit-btn"},d.a.createElement("input",{type:"button",value:a,onClick:function(){e.isEdited?e.editItem(!1):e.editItem(e.item.id)}}))))},h=a(7),b=function(){var e=Object(n.useState)(0),t=Object(h.a)(e,2),a=t[0];t[1];return Object(n.useEffect)((function(){var e=setInterval((function(){}),1e3);return function(){return clearInterval(e)}}),[]),d.a.createElement("div",null,d.a.createElement("p",null,"You have used ",a," seconds on this website."))},v=a(18),I=function(e){Object(m.a)(a,e);var t=Object(r.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={todos:window.localStorage.getItem("todos")?JSON.parse(window.localStorage.getItem("todos")):[],id:Object(v.a)(),newItem:"",deadline:"",editing:!1},n.handleChange=n.handleChange.bind(Object(s.a)(n)),n.addTodo=n.addTodo.bind(Object(s.a)(n)),n.updateInput=n.updateInput.bind(Object(s.a)(n)),n.deleteItem=n.deleteItem.bind(Object(s.a)(n)),n.updateItem=n.updateItem.bind(Object(s.a)(n)),n.updateDeadline=n.updateDeadline.bind(Object(s.a)(n)),n.updateInputDeadline=n.updateInputDeadline.bind(Object(s.a)(n)),n.editItem=n.editItem.bind(Object(s.a)(n)),n.handleFormSubmit=n.handleFormSubmit.bind(Object(s.a)(n)),n}return Object(c.a)(a,[{key:"handleChange",value:function(e){this.setState((function(t){var a=t.todos.map((function(t){return t.id===e?Object(o.a)(Object(o.a)({},t),{},{completed:!t.completed}):t}));return localStorage.setItem("todos",JSON.stringify(a)),{todos:a}}))}},{key:"addTodo",value:function(e){var t={id:this.state.todos.length+1,text:this.state.newItem,completed:!1,deadline:this.state.deadline},a=this.state.todos.concat([t]);this.setState({todos:a,newItem:"",deadline:"",id:Object(v.a)(),editing:!1}),localStorage.setItem("todos",JSON.stringify(a))}},{key:"updateInput",value:function(e,t){this.setState((function(a){var n=a.todos.map((function(a){return a.id===t?Object(o.a)(Object(o.a)({},a),{},{text:e}):a}));return localStorage.setItem("todos",JSON.stringify(n)),{todos:n}}))}},{key:"updateInputDeadline",value:function(e,t){this.setState((function(a){var n=a.todos.map((function(a){return a.id===t?(console.log(e,t),Object(o.a)(Object(o.a)({},a),{},{deadline:e})):a}));return localStorage.setItem("todos",JSON.stringify(n)),{todos:n}}))}},{key:"updateItem",value:function(e){this.setState({newItem:e.target.value})}},{key:"updateDeadline",value:function(e){this.setState({deadline:e.target.value})}},{key:"deleteItem",value:function(e){var t=this.state.todos.filter((function(t){return t.id!==e}));this.setState({todos:t}),localStorage.setItem("todos",JSON.stringify(t))}},{key:"editItem",value:function(e){this.setState({editing:e})}},{key:"handleFormSubmit",value:function(e){e.preventDefault()}},{key:"componentDidMount",value:function(){var e=localStorage.getItem("todo"),t=e||"";console.log({result:t});var a=localStorage.getItem("deadline");this.setState({result:t,deadlineData:a})}},{key:"render",value:function(){var e=this,t=this.state.todos.map((function(t){return d.a.createElement(p,{key:t.id,item:t,handleChange:e.handleChange,addTodo:e.addTodo,deleteItem:e.deleteItem,updateInput:e.updateInput,updateInputDeadline:e.updateInputDeadline,isEdited:e.state.editing===t.id,editItem:e.editItem})}));return d.a.createElement("div",{className:"todo-list"},d.a.createElement(b,null),d.a.createElement("form",{onSubmit:this.handleFormSubmit},d.a.createElement("div",{className:"add-todo"},d.a.createElement("label",null,"Add an item..."),d.a.createElement("input",{type:"text",name:"todo",placeholder:"Type item here...",value:this.state.newItem,onChange:this.updateItem})),d.a.createElement("div",{className:"date"},d.a.createElement("label",{htmlFor:"deadline"},"Deadline"),d.a.createElement("input",{type:"date",id:"start",name:"deadline",min:"2021-01-01",max:"2024-12-31",value:this.state.deadline,onChange:this.updateDeadline})),d.a.createElement("button",{type:"submit",onClick:this.addTodo},"Add to the list")),0===t.length?d.a.createElement("p",null,"No items"):null,d.a.createElement("div",{className:"todoitems"},t))}}]),a}(d.a.Component);l.a.render(d.a.createElement(I,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.eef224c9.chunk.js.map