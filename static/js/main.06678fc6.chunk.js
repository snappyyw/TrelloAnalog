(this["webpackJsonpreact-trello"]=this["webpackJsonpreact-trello"]||[]).push([[0],{69:function(t,e,a){},70:function(t,e,a){"use strict";a.r(e);var n=a(2),c=a(0),r=a.n(c),i=a(18),o=a.n(i),s=a(28),d=a(6),l=a(20),b=function(t){var e=t.active,a=t.setActive;return Object(n.jsx)(n.Fragment,{children:e&&Object(n.jsx)("div",{className:"modal",onClick:function(){return a(!1)},children:Object(n.jsxs)("div",{className:"modal-content",onClick:function(t){return t.stopPropagation()},children:[Object(n.jsx)("p",{children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}),Object(n.jsx)("button",{onClick:function(){return a(!1)},children:"\u041e\u043a"})]})})})},j=a(12),u=function(t){return function(e,a){var n=a().activeBoard,c="".concat(Math.floor(100*Math.random()),"_").concat(Math.floor(100*Math.random()),"_").concat(Math.floor(100*Math.random()));e({type:"ADD_LIST",payload:{title:t,boardID:n,id:c}})}},O=function(t,e,a,n,c,r){return function(i,o){var s=o().activeBoard;i({type:"DRAG_HAPPENED",payload:{droppableIdStart:t,droppableIdEnd:e,droppableIndexEnd:n,droppableIndexStart:a,draggableId:c,type:r,boardID:s}})}},p=function(t,e){return{type:"ADD_CARD",payload:{text:e,listID:t,id:"".concat(Math.floor(100*Math.random()),"_").concat(Math.floor(100*Math.random()),"_").concat(Math.floor(100*Math.random()))}}};var h=Object(j.b)((function(t){return{boards:t.boards,boardOrder:t.boardOrder}}))((function(t){var e=t.boards,a=t.boardOrder,r=t.dispatch,i=Object(c.useState)(!1),o=Object(l.a)(i,2),d=o[0],j=o[1],u=Object(c.useState)(!1),O=Object(l.a)(u,2),p=O[0],h=O[1],f=Object(c.useState)(""),v=Object(l.a)(f,2),x=v[0],A=v[1];return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:"bloc-smile",children:Object(n.jsx)("a",{className:"smile"})}),Object(n.jsxs)("div",{className:"content",children:[Object(n.jsxs)("div",{className:"main-block",children:[Object(n.jsxs)("div",{className:"main-header",onClick:function(){return j(!d)},children:[Object(n.jsx)("img",{src:"data:image/png;base64,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",alt:""}),Object(n.jsx)("p",{children:"\u041d\u043e\u0432\u0430\u044f \u0434\u043e\u0441\u043a\u0430"})]}),d&&Object(n.jsxs)("div",{className:"creating-list",children:[Object(n.jsx)("p",{children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0434\u043e\u0441\u043a\u0438"}),Object(n.jsx)("input",{type:"text",value:x,onChange:function(t){return A(t.target.value)}}),Object(n.jsx)("button",{className:"button-cancel",onClick:function(){return j(!d)},children:"\u041e\u0442\u043c\u0435\u043d\u0430"}),Object(n.jsx)("button",{className:"button-save",onClick:function(){x?(r({type:"ADD_BOARD",payload:{title:x,id:"".concat(Math.floor(100*Math.random()),"_").concat(Math.floor(100*Math.random()),"_").concat(Math.floor(100*Math.random()))}}),A(""),j(!d)):h(!0)},children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})]}),Object(n.jsx)("div",{className:"my-list",children:Object(n.jsx)("ul",{children:a.map((function(t){var a=e[t];return Object(n.jsx)(s.b,{to:"/".concat(a.id),style:{textDecoration:"none"},children:Object(n.jsx)("li",{children:a.title},a.id)},t)}))})})]}),Object(n.jsx)(b,{active:p,setActive:h})]})})),f=a(3),v=a(34),x=a(35),A=a(38),m=a(37),D=a(23),I=a(90),y=a(88),g=a(87),E=a(26),C=a(27),T=a(52);function k(){var t=Object(E.a)(["\n  resize: none;\n  width: 100%;\n  overflow: hidden;\n  outline: none;\n  border: none;\n"]);return k=function(){return t},t}function w(){var t=Object(E.a)(["\n  min-height: 80px;\n  padding: 6px 10px 2px;\n"]);return w=function(){return t},t}var S=Object(C.a)(I.a)(w()),M=Object(C.a)(T.a)(k()),N=r.a.memo((function(t){var e=t.text,a=void 0===e?"":e,c=t.onChange,r=t.closeForm,i=t.children;return Object(n.jsxs)("div",{className:"bloc-edit",children:[Object(n.jsx)(S,{children:Object(n.jsx)(M,{autoFocus:!0,onFocus:function(t){t.target.select()},value:a,onChange:function(t){return c(t)},onBlur:r})}),Object(n.jsxs)("div",{className:"button-container",children:[i,Object(n.jsx)("button",{className:"button-close",onMouseDown:r,children:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"})]})]})})),R=a(89);function Y(){var t=Object(E.a)(["\n  && {\n    color: white;\n    background: #5aac44;\n  }\n"]);return Y=function(){return t},t}var B=Object(C.a)(R.a)(Y()),z=function(t){var e=t.children,a=t.onClick;return Object(n.jsx)(B,{variant:"contained",onMouseDown:a,children:e})},W=r.a.memo((function(t){var e=t.text,a=t.id,r=t.listID,i=t.index,o=t.dispatch,s=Object(c.useState)(!1),d=Object(l.a)(s,2),b=d[0],j=d[1],u=Object(c.useState)(e),O=Object(l.a)(u,2),p=O[0],h=O[1],v=function(t){j(!1)},x=function(t){h(t.target.value)},A=function(t){t.preventDefault(),o(function(t,e,a){return{type:"EDIT_CARD",payload:{id:t,listID:e,newText:a}}}(a,r,p)),j(!1)},m=function(t){console.log(r),o(function(t,e){return{type:"DELETE_CARD",payload:{id:t,listID:e}}}(a,r))};return b?Object(n.jsx)(N,{text:p,onChange:x,closeForm:v,children:Object(n.jsx)(z,{onClick:A,children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})}):Object(n.jsx)(D.b,{draggableId:String(a),index:i,children:function(t){return Object(n.jsx)("div",Object(f.a)(Object(f.a)(Object(f.a)({className:"card-items"},t.draggableProps),t.dragHandleProps),{},{ref:t.innerRef,onDoubleClick:function(){return j(!0)},children:Object(n.jsxs)(I.a,{children:[Object(n.jsx)("button",{className:"delate-button",onMouseDown:m,children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"}),Object(n.jsx)(g.a,{children:Object(n.jsx)(y.a,{children:e})})]})}))}})})),G=Object(j.b)()(W);function H(){var t=Object(E.a)(["\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n    border-radius: 3px;\n    height: 36px;\n    margin-left: 10px;\n    width: 250px;\n    padding-left: 20px;\n    padding-right: 10px;\n    opacity: 1;\n    color: white;\n    background-color: ",";\n  "]);return H=function(){return t},t}var K=function(t){var e=t.list,a=t.children,c=t.onClick,r=e?"rgba(0,0,0,.15)":"inherit",i=C.a.div(H(),r);return Object(n.jsx)(i,{onClick:c,children:Object(n.jsx)("p",{style:{flexShrink:0},children:a})})},L=function(t){Object(A.a)(a,t);var e=Object(m.a)(a);function a(){var t;Object(v.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={formOpen:!1,text:""},t.openForm=function(){t.setState({formOpen:!0})},t.closeForm=function(e){t.setState({formOpen:!1})},t.handleInputChange=function(e){t.setState({text:e.target.value})},t.handleAddList=function(){var e=t.props.dispatch,a=t.state.text;a&&(t.setState({text:""}),e(u(a)))},t.handleAddCard=function(){var e=t.props,a=e.dispatch,n=e.listID,c=t.state.text;c&&(t.setState({text:""}),a(p(n,c)))},t}return Object(x.a)(a,[{key:"render",value:function(){var t=this.state.text,e=this.props.list;return this.state.formOpen?Object(n.jsx)(N,{text:t,onChange:this.handleInputChange,closeForm:this.closeForm,children:Object(n.jsx)(z,{onClick:e?this.handleAddList:this.handleAddCard,children:e?"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443"})}):Object(n.jsx)(K,{list:e,onClick:this.openForm,children:e?"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0435\u0449\u0435 \u043e\u0434\u0438\u043d \u0441\u043f\u0438\u0441\u043e\u043a":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0435\u0449\u0435 \u043e\u0434\u0438\u043d\u0443 \u0437\u0430\u0434\u0430\u0447\u0443"})}}]),a}(r.a.PureComponent),J=Object(j.b)()(L),F=Object(j.b)()((function(t){var e=t.title,a=t.cards,r=t.listID,i=t.index,o=t.dispatch,s=Object(c.useState)(!1),d=Object(l.a)(s,2),b=d[0],j=d[1],u=Object(c.useState)(e),O=Object(l.a)(u,2),p=O[0],h=O[1],v=function(t){t.target.select()},x=function(t){t.preventDefault(),h(t.target.value)},A=function(t){j(!1),o(function(t,e){return{type:"EDIT_LIST_TITLE",payload:{listID:t,newTitle:e}}}(r,p))},m=function(){o(function(t){return function(e,a){var n=a().activeBoard;return e({type:"DELETE_LIST",payload:{listID:t,boardID:n}})}}(r))};return Object(n.jsx)(D.b,{draggableId:String(r),index:i,children:function(t){return Object(n.jsx)("div",Object(f.a)(Object(f.a)(Object(f.a)({className:"container"},t.draggableProps),t.dragHandleProps),{},{ref:t.innerRef,children:Object(n.jsx)(D.c,{droppableId:String(r),type:"card",children:function(t){return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{children:b?Object(n.jsx)("form",{onSubmit:A,children:Object(n.jsx)("input",{className:"input-heder",type:"text",value:p,onChange:x,autoFocus:!0,onFocus:v,onBlur:A})}):Object(n.jsxs)("div",{className:"title-container",onClick:function(){return j(!0)},children:[Object(n.jsx)("h3",{children:p}),Object(n.jsx)("button",{onClick:m,children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]})}),Object(n.jsxs)("div",Object(f.a)(Object(f.a)({},t.droppableProps),{},{ref:t.innerRef,children:[a.map((function(t,e){return Object(n.jsx)(G,{text:t.text,id:t.id,index:e,listID:r},t.id)})),t.placeholder,Object(n.jsx)(J,{listID:r})]}))]})}})}))}})})),P=function(t){Object(A.a)(a,t);var e=Object(m.a)(a);function a(){var t;Object(v.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).onDragEnd=function(e){var a=e.destination,n=e.source,c=e.draggableId,r=e.type;a&&t.props.dispatch(O(n.droppableId,a.droppableId,n.index,a.index,c,r))},t}return Object(x.a)(a,[{key:"componentDidMount",value:function(){var t=this.props.match.params.boardID;this.props.dispatch({type:"SET_ACTIVE_BOARD",payload:t})}},{key:"render",value:function(){var t=this.props,e=t.lists,a=t.cards,c=t.match,r=t.boards[c.params.boardID],i=r.lists;return Object(n.jsxs)(D.a,{onDragEnd:this.onDragEnd,children:[Object(n.jsx)("div",{className:"bloc-smile",children:Object(n.jsx)(s.b,{to:"/",children:Object(n.jsx)("a",{className:"smile"})})}),Object(n.jsx)("h2",{className:"name-board",children:r.title}),Object(n.jsx)(D.c,{droppableId:"all-lists",direction:"horizontal",type:"list",children:function(t){return Object(n.jsxs)("div",Object(f.a)(Object(f.a)({className:"lists-container"},t.droppableProps),{},{ref:t.innerRef,children:[i.map((function(t,c){var r=e[t];if(r){var i=r.cards.map((function(t){return a[t]}));return Object(n.jsx)(F,{listID:r.id,title:r.title,cards:i,index:c},r.id)}})),t.placeholder,Object(n.jsx)(J,{list:!0})]}))}})]})}}]),a}(c.PureComponent),Z=Object(j.b)((function(t){return{lists:t.lists,cards:t.cards,boards:t.boards}}))(P);var V=function(){return Object(n.jsx)(s.a,{children:Object(n.jsxs)("div",{children:[Object(n.jsx)(d.a,{path:"/",exact:!0,component:h}),Object(n.jsx)(d.a,{path:"/:boardID",component:Z})]})})},X=a(11),U=a(24),q=a(10),Q={"list-0":{id:"list-0",cards:["card-0"],title:"\u0414\u0430",board:"board-0"}},_=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_LIST":var a=e.payload,n=a.title,c=a.id,r={title:n,id:"list-".concat(c),cards:[]},i=Object(f.a)(Object(f.a)({},t),{},Object(q.a)({},"list-".concat(c),r));return i;case"ADD_CARD":var o=e.payload,s=o.listID,d=o.id,l=t[s];return l.cards.push("card-".concat(d)),Object(f.a)(Object(f.a)({},t),{},Object(q.a)({},s,l));case"DRAG_HAPPENED":var b=e.payload,j=b.droppableIdStart,u=b.droppableIdEnd,O=b.droppableIndexEnd,p=b.droppableIndexStart,h=b.type;if("list"===h)return t;if(j===u){var v,x=t[j],A=x.cards.splice(p,1);return(v=x.cards).splice.apply(v,[O,0].concat(Object(U.a)(A))),Object(f.a)(Object(f.a)({},t),{},Object(q.a)({},j,x))}if(j!==u){var m,D,I=t[j],y=I.cards.splice(p,1),g=t[u];return(m=g.cards).splice.apply(m,[O,0].concat(Object(U.a)(y))),Object(f.a)(Object(f.a)({},t),{},(D={},Object(q.a)(D,j,I),Object(q.a)(D,u,g),D))}return t;case"DELETE_CARD":var E=e.payload,C=E.listID,T=E.id,k=t[C],w=k.cards.filter((function(t){return t!==T}));return Object(f.a)(Object(f.a)({},t),{},Object(q.a)({},C,Object(f.a)(Object(f.a)({},k),{},{cards:w})));case"EDIT_LIST_TITLE":var S=e.payload,M=S.listID,N=S.newTitle,R=t[M];return R.title=N,Object(f.a)(Object(f.a)({},t),{},Object(q.a)({},M,R));case"DELETE_LIST":var Y=e.payload.listID,B=t;return delete B[Y],B;default:return t}},$={"card-0":{text:"\u041d\u0435\u0442",id:"card-0",list:"list-0"}},tt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_CARD":var a=e.payload,n=a.text,c=a.listID,r=a.id,i={text:n,id:"card-".concat(r),list:c};return Object(f.a)(Object(f.a)({},t),{},Object(q.a)({},"card-".concat(r),i));case"EDIT_CARD":var o=e.payload,s=o.id,d=o.newText,l=t[s];return l.text=d,Object(f.a)(Object(f.a)({},t),{},Object(q.a)({},"card-".concat(s),l));case"DELETE_CARD":var b=e.payload.id,j=t;return delete j[b],j;default:return t}},et=["board-0"],at=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:et,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_BOARD":return[].concat(Object(U.a)(t),["board-".concat(e.payload.id)]);default:return t}},nt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_ACTIVE_BOARD":return e.payload;default:return t}},ct={"board-0":{id:"board-0",lists:["list-0"],title:"\u042b\u044b\u044b\u044b"}},rt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ct,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_LIST":var a=e.payload,n=a.boardID,c=a.id,r=t[n],i="list-".concat(c),o=[].concat(Object(U.a)(r.lists),[i]);return r.lists=o,Object(f.a)(Object(f.a)({},t),{},Object(q.a)({},n,r));case"DRAG_HAPPENED":var s=e.payload.boardID,d=t[s],l=d.lists,b=e.payload,j=b.droppableIndexEnd,u=b.droppableIndexStart,O=b.type;if("list"===O){var p=l.splice(u,1);return l.splice.apply(l,[j,0].concat(Object(U.a)(p))),d.lists=l,Object(f.a)(Object(f.a)({},t),{},Object(q.a)({},s,d))}return t;case"DELETE_LIST":var h=e.payload,v=h.listID,x=h.boardID,A=t[x],m=A.lists,D=m.filter((function(t){return t!==v}));return A.lists=D,Object(f.a)(Object(f.a)({},t),{},Object(q.a)({},x,A));case"ADD_BOARD":var I=e.payload,y=I.title,g=I.id,E="board-".concat(g),C={id:E,title:y,lists:[]};return Object(f.a)(Object(f.a)({},t),{},Object(q.a)({},E,C));default:return t}},it=Object(X.c)({lists:_,cards:tt,boards:rt,boardOrder:at,activeBoard:nt}),ot=a(49),st=a(51),dt=a(50),lt={key:"root",storage:a.n(dt).a},bt=Object(st.a)(lt,it),jt=(a(69),{store:Object(X.e)(bt,Object(X.a)(ot.a))}.store);o.a.render(Object(n.jsx)(j.a,{store:jt,children:Object(n.jsx)(V,{})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.06678fc6.chunk.js.map