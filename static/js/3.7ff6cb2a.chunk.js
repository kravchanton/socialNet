(this.webpackJsonpsocialNetwork=this.webpackJsonpsocialNetwork||[]).push([[3],{297:function(t,e,s){"use strict";s.d(e,"a",(function(){return u}));var n=s(5),o=s(85),c=s(9),i=(s(0),s(13)),r=s(1),a=function(t){return{isAuth:t.auth.isAuth}};function u(t){return Object(i.b)(a)((function(e){var s=e.isAuth,i=Object(o.a)(e,["isAuth"]);return s?Object(r.jsx)(t,Object(n.a)({},i)):Object(r.jsx)(c.a,{to:"/login"})}))}},298:function(t,e,s){t.exports={item:"profileInfo_item__3lw08",logo:"profileInfo_logo__1IkLA"}},299:function(t,e,s){t.exports={content:"MyPosts_content__1OSW2",postsBlock:"MyPosts_postsBlock__IRIfO"}},300:function(t,e,s){t.exports={content:"MyPost_content__Dj0mz"}},301:function(t,e,s){"use strict";s.r(e);var n=s(5),o=s(36),c=s(37),i=s(39),r=s(38),a=s(0),u=s.n(a),j=s(93),l=s(298),p=s.n(l),d=s(48),b=s(103),f=s(127),O=s(1),h=function(t){var e=Object(a.useState)(!1),s=Object(f.a)(e,2),n=s[0],o=s[1],c=Object(a.useState)(t.status),i=Object(f.a)(c,2),r=i[0],u=i[1];Object(a.useEffect)((function(){u(t.status)}),[t.status]);return Object(O.jsxs)("div",{children:[!n&&Object(O.jsx)("div",{children:Object(O.jsx)("span",{onDoubleClick:function(){o(!0)},children:r||"----"})}),n&&Object(O.jsx)("div",{children:Object(O.jsx)("input",{autoFocus:!0,onChange:function(t){u(t.currentTarget.value)},value:r,onBlur:function(){o(!1),t.updateStatus(r)}})})]})},x=function(t){return t.profile.photos?Object(O.jsxs)("div",{className:p.a.logo,children:[Object(O.jsx)("img",{src:t.profile.photos.large?t.profile.photos.large:b.a,alt:""}),Object(O.jsx)("div",{children:Object(O.jsx)(h,{status:t.status,updateStatus:t.updateStatus})}),Object(O.jsx)("div",{children:t.profile.fullName}),Object(O.jsx)("div",{children:t.profile.aboutMe})]}):Object(O.jsx)(d.a,{})},v=s(299),m=s.n(v),g=s(300),P=s.n(g),S=function(t){return Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:P.a.content,children:t.message}),Object(O.jsx)("span",{children:"Likes"})," ",t.likesCount]})},k=s(125),_=s(126),y=s(70),N=s(92),A=Object(y.a)(10),M=Object(_.a)({form:"profileAddMessageForm"})((function(t){return Object(O.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(O.jsx)("div",{children:Object(O.jsx)(k.a,{component:N.b,name:"addPostBody",placeholder:"Enter your post",validate:[y.b,A]})}),Object(O.jsx)("div",{children:Object(O.jsx)("button",{children:"Add post"})})]})})),w=s(13),B=Object(w.b)((function(t){return{posts:t.profilePage.posts}}),(function(t){return{addPost:function(e){t(Object(j.a)(e))}}}))((function(t){var e=t.posts.map((function(t){return Object(O.jsx)(S,{message:t.message,likesCount:t.likesCount})}));return Object(O.jsxs)("div",{className:m.a.postsBlock,children:["My post",Object(O.jsx)("div",{className:m.a.item,children:"New post"}),Object(O.jsx)("div",{children:Object(O.jsx)(M,{onSubmit:function(e){t.addPost(e.addPostBody)}})}),Object(O.jsx)("div",{children:e})]})})),C=function(t){return Object(O.jsxs)("div",{children:[Object(O.jsx)(x,{profile:t.profilePage.profile,status:t.profilePage.status,updateStatus:t.updateStatus}),Object(O.jsx)(B,{})]})},I=s(10),D=s(9),L=s(297),E=function(t){Object(i.a)(s,t);var e=Object(r.a)(s);function s(){return Object(o.a)(this,s),e.apply(this,arguments)}return Object(c.a)(s,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=this.props.id)||this.props.history.push("/Login"),this.props.getProfile(t),this.props.getStatus(t)}},{key:"render",value:function(){return Object(O.jsx)(C,Object(n.a)(Object(n.a)({},this.props),{},{profilePage:this.props.profilePage,updateStatus:this.props.updateStatus}))}}]),s}(u.a.Component);e.default=Object(I.d)(Object(w.b)((function(t){return{profilePage:t.profilePage,id:t.auth.id}}),{getProfile:j.b,getStatus:j.c,updateStatus:j.e}),D.f,L.a)(E)}}]);
//# sourceMappingURL=3.7ff6cb2a.chunk.js.map