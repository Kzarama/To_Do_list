(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{90:function(e,a,t){"use strict";t.r(a);var s=t(69),c=t(129),o=t(0),l=t.n(o),n=t(10),r=t.n(n),i=t(39),d=t(18),u=t(4),b=t(130),p=t(122),j=t(51),x=t(123),m=t(132),_=t(124),f=t(92),h=t(131),O=t(121),k=t(125),g=t(126),N=t(127),v=t(128),C=t(68),w=t.n(C),y=t(67),D=t.n(y),S=t(6),I=Object(u.a)({root:{"& label.Mui-focused":{color:"#00ccff"},"& .MuiOutlinedInput-root":{"& fieldset":{border:"4px solid #00ccff"},"&:hover fieldset":{border:"5px solid #00ccff"},"&.Mui-focused fieldset":{borderColor:"white"}}}})(b.a),P=Object(p.a)({root:{color:"white",textAlign:"center"},typography_class:{textDecoration:"underline",textDecorationColor:"#00ccff",margin:"40px auto 40px auto"},textfield_label_class:{color:"white"},textfield_text_class:{color:"white"},add_button_class:{width:"30%",color:"white",margin:"10px auto 50px auto",border:"4px solid #00ccff",borderRadius:"50px",backgroundColor:"#313131","&:hover":{backgroundColor:"#00ccff"},"&:active":{borderColor:"#00ccff"},"&:focus":{boxShadow:"0 0 0 0.2rem rgba(0,240,255,.5)"}},list_class:{width:"50%",height:"58vh",margin:"auto",overflowY:"scroll",paddingRight:"10px"},"@global":{"*::-webkit-scrollbar":{width:"5px"},"*::-webkit-scrollbar-thumb":{backgroundColor:"#00ccff"}},list_item_class:{border:"4px solid #00ccff",borderRadius:"50px",background:"#313131",marginBottom:"15px",paddingLeft:"30px","&:hover":{background:"#121212"}},task_done_class:{textDecoration:"line-through",textDecorationColor:"red"},primary_text_class:{fontSize:"18px",color:"white"},secondary_text_class:{fontSize:"12px",color:"#a6a6a6"},icon_class:{color:"#00ccff",fontSize:"30px"},modal_class:{display:"flex",alignItems:"center",justifyContent:"center"},paper_class:{color:"white",backgroundColor:"#212121",border:"4px solid #00ccff",borderRadius:"25px",position:"absolute",width:"30%",padding:"15px 40px 15px 40px"},modal_title_class:{textAlign:"center",margin:"0px auto 15px auto"},modal_input_class:{width:"100%",margin:"10px auto"},modal_button_class:{color:"#00ccff",width:"35%",margin:"10px 10px 10px 10px","&:hover":{color:"white",backgroundColor:"#00ccff"},"&:active":{borderColor:"#00ccff"},"&:focus":{boxShadow:"0 0 0 0.2rem rgba(0,240,255,.5)"}},modal_div_buttons_class:{textAlign:"center"}});var T=function(){var e=P(),a=Object(o.useState)(!1),t=Object(d.a)(a,2),s=t[0],c=t[1],l=Object(o.useState)(!1),n=Object(d.a)(l,2),r=n[0],u=n[1],b=Object(o.useState)(""),p=Object(d.a)(b,2),C=p[0],y=p[1],T=Object(o.useState)(""),A=Object(d.a)(T,2),B=A[0],L=A[1],M=Object(o.useState)(),R=Object(d.a)(M,2),z=R[0],E=R[1],J=Object(o.useState)(),F=Object(d.a)(J,2),G=F[0],H=F[1],U=Object(o.useState)(-1),Y=Object(d.a)(U,2),q=Y[0],K=Y[1],Q=Object(o.useState)([]),V=Object(d.a)(Q,2),W=V[0],X=V[1];return Object(S.jsxs)("div",{className:e.root,children:[Object(S.jsx)(j.a,{variant:"h2",className:e.typography_class,children:"To Do list"}),Object(S.jsx)(x.a,{className:e.add_button_class,onClick:function(){return c(!0)},children:"Add task"}),Object(S.jsx)(m.a,{className:e.modal_class,open:s,onClose:function(){return c(!1)},closeAfterTransition:!0,BackdropComponent:_.a,BackdropProps:{timeout:500},children:Object(S.jsx)(f.a,{in:s,children:Object(S.jsxs)(h.a,{component:"div",className:e.paper_class,children:[Object(S.jsx)(j.a,{variant:"h4",className:e.modal_title_class,children:"Create task"}),Object(S.jsx)(I,{value:C,label:"Task name",className:e.modal_input_class,variant:"outlined",onChange:function(e){return y(e.target.value)},InputLabelProps:{className:e.textfield_label_class},InputProps:{className:e.textfield_text_class}}),Object(S.jsx)(I,{value:B,label:"Task description",className:e.modal_input_class,variant:"outlined",onChange:function(e){return L(e.target.value)},InputLabelProps:{className:e.textfield_label_class},InputProps:{className:e.textfield_text_class}}),Object(S.jsxs)(h.a,{component:"div",className:e.modal_div_buttons_class,children:[Object(S.jsx)(x.a,{className:e.modal_button_class,onClick:function(){return function(){var e=[].concat(Object(i.a)(W),[{taskName:C,taskDescription:B,taskDone:!1}]);X(e),y(""),L(""),c(!1)}()},children:"Create"}),Object(S.jsx)(x.a,{className:e.modal_button_class,onClick:function(){return c(!1)},children:"Cancel"})]})]})})}),Object(S.jsx)(O.a,{className:e.list_class,children:W.map((function(a,t){return Object(S.jsxs)(k.a,{className:e.list_item_class,onClick:function(){return function(e){u(!0),E(W[e].taskName),H(W[e].taskDescription),K(e)}(t)},children:[Object(S.jsx)(g.a,{className:W[t].taskDone?e.task_done_class:"",primary:Object(S.jsx)(j.a,{className:e.primary_text_class,children:a.taskName}),secondary:Object(S.jsx)(j.a,{className:e.secondary_text_class,children:a.taskDescription})}),Object(S.jsxs)(N.a,{children:[Object(S.jsx)(v.a,{onClick:function(){return function(e){var a=Object(i.a)(W);a[e].taskDone=!a[e].taskDone,X(a)}(t)},children:Object(S.jsx)(D.a,{className:e.icon_class})}),Object(S.jsx)(v.a,{onClick:function(){return function(e){var a=Object(i.a)(W);a.splice(e,1),X(a)}(t)},children:Object(S.jsx)(w.a,{className:e.icon_class})})]})]},t)}))}),Object(S.jsx)(m.a,{className:e.modal_class,open:r,onClose:function(){return u(!1)},closeAfterTransition:!0,BackdropComponent:_.a,BackdropProps:{timeout:500},children:Object(S.jsx)(f.a,{in:r,children:Object(S.jsxs)(h.a,{component:"div",className:e.paper_class,children:[Object(S.jsx)(j.a,{variant:"h4",className:e.modal_title_class,children:"Edit the task"}),Object(S.jsx)(I,{value:z,label:"Task name",className:e.modal_input_class,variant:"outlined",onChange:function(e){return E(e.target.value)},InputLabelProps:{className:e.textfield_label_class},InputProps:{className:e.textfield_text_class}}),Object(S.jsx)(I,{value:G,label:"Task name",className:e.modal_input_class,variant:"outlined",onChange:function(e){return H(e.target.value)},InputLabelProps:{className:e.textfield_label_class},InputProps:{className:e.textfield_text_class}}),Object(S.jsxs)(h.a,{component:"div",className:e.modal_div_buttons_class,children:[Object(S.jsx)(x.a,{className:e.modal_button_class,onClick:function(){return function(){var e=Object(i.a)(W);e[q].taskName=z||e[q].taskName,e[q].taskDescription=G||e[q].taskDescription,X(e),y(""),L(""),u(!1)}()},children:"Update"}),Object(S.jsx)(x.a,{className:e.modal_button_class,onClick:function(){return u(!1)},children:"Cancel"})]})]})})})]})},A=Object(s.a)({typography:{fontFamily:["Gloria Hallelujah","sans-serif"].join(",")}});r.a.render(Object(S.jsx)(l.a.StrictMode,{children:Object(S.jsx)(c.a,{theme:A,children:Object(S.jsx)(T,{})})}),document.getElementById("root"))}},[[90,1,2]]]);
//# sourceMappingURL=main.e2d0ca0a.chunk.js.map