(this["webpackJsonpcost-tracker"]=this["webpackJsonpcost-tracker"]||[]).push([[0],[,,,,,,,,,,,,,function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){},,function(t,e,c){},function(t,e,c){},function(t,e,c){"use strict";c.r(e);var n=c(1),s=c.n(n),a=c(3),i=c.n(a),r=(c(13),c(6)),o=c(4),j=c(5),h=c(8),d=c(7),l=(c(14),c(15),c(16),c(0)),u=function(t){return Object(l.jsxs)("div",{className:"val",children:[Object(l.jsx)("div",{className:"type",children:t.type}),Object(l.jsx)("div",{className:"type2",children:t.cost})]})},b=function(t){var e=Object(l.jsx)("div",{children:t.data.map((function(t){return Object(l.jsx)(u,{type:t.type,cost:t.cost})}))});return Object(l.jsxs)("div",{className:"data",children:[Object(l.jsx)("h4",{children:"History"}),Object(l.jsx)("hr",{}),e]})},O=(c(18),function(t){var e=0,c=0,n=0;return t.data.forEach((function(t){e+=t.cost,t.cost>0?c+=t.cost:n+=t.cost})),n=Math.abs(n),Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:"Expense Tracker"}),Object(l.jsx)("h5",{children:"YOUR BALANCE"}),Object(l.jsxs)("h2",{children:["$",e,".00"]}),Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"income",children:["Income",Object(l.jsxs)("h3",{children:["$",c,".00"]})]}),Object(l.jsxs)("div",{className:"expense",children:["Expense",Object(l.jsxs)("h3",{children:["$",n,".00"]})]})]})]})}),x=(c(19),function(t){var e,c;return Object(l.jsxs)("div",{className:"new",children:[Object(l.jsx)("h4",{children:"Add New Transaction"}),Object(l.jsx)("hr",{}),Object(l.jsxs)("form",{children:[Object(l.jsx)("h5",{children:"Text"}),Object(l.jsx)("input",{type:"text",name:"name",onChange:function(t){e=t.target.value}}),Object(l.jsx)("h5",{children:"Amount"}),Object(l.jsx)("input",{type:"number",name:"cost",onChange:function(t){c=parseInt(t.target.value)}}),Object(l.jsx)("button",{onClick:function(n){n.preventDefault(),console.log(e),console.log(c);var s={type:e,cost:c};t.change(s)},children:"Submit"})]})]})}),p=function(t){Object(h.a)(c,t);var e=Object(d.a)(c);function c(){var t;Object(o.a)(this,c);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(t=e.call.apply(e,[this].concat(s))).state={history:[{id:"1234",type:"Cash",cost:500},{id:"1235",type:"Book",cost:-40},{id:"1236",type:"Camera",cost:-200}]},t.AddName=function(e){var c=Object(r.a)(t.state.history);c.push({id:Math.random().toString,type:e.type,cost:e.cost}),t.setState({history:c})},t}return Object(j.a)(c,[{key:"render",value:function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(O,{data:this.state.history}),Object(l.jsx)(b,{data:this.state.history}),Object(l.jsx)(x,{change:this.AddName}),console.log(this.state.history)]})}}]),c}(n.Component),f=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,21)).then((function(e){var c=e.getCLS,n=e.getFID,s=e.getFCP,a=e.getLCP,i=e.getTTFB;c(t),n(t),s(t),a(t),i(t)}))};i.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(p,{})}),document.getElementById("root")),f()}],[[20,1,2]]]);
//# sourceMappingURL=main.d84452a5.chunk.js.map