(this.webpackJsonpsocialNetwork=this.webpackJsonpsocialNetwork||[]).push([[3],{294:function(t,e,s){"use strict";s.d(e,"a",(function(){return j}));var c=s(5),n=s(88),o=s(9),i=(s(0),s(14)),r=s(1),a=["isAuth"],u=function(t){return{isAuth:t.auth.isAuth}};function j(t){return Object(i.b)(u)((function(e){var s=e.isAuth,i=Object(n.a)(e,a);return s?Object(r.jsx)(t,Object(c.a)({},i)):Object(r.jsx)(o.a,{to:"/login"})}))}},295:function(t,e,s){t.exports={wrapper:"profileInfo_wrapper__3eyco",profileInfo:"profileInfo_profileInfo__1h1nc"}},296:function(t,e,s){t.exports={content:"MyPosts_content__1OSW2",postsBlock:"MyPosts_postsBlock__IRIfO"}},297:function(t,e,s){t.exports={wrapper:"MyPost_wrapper__3nwDC",content:"MyPost_content__Dj0mz"}},298:function(t,e,s){"use strict";s.r(e);var c=s(5),n=s(36),o=s(37),i=s(39),r=s(38),a=s(0),u=s.n(a),j=s(96),l=s(295),p=s.n(l),d=s(48),b=s(94),f=s(129),O=s(1),h=function(t){var e=Object(a.useState)(!1),s=Object(f.a)(e,2),c=s[0],n=s[1],o=Object(a.useState)(t.status),i=Object(f.a)(o,2),r=i[0],u=i[1];Object(a.useEffect)((function(){u(t.status)}),[t.status]);return Object(O.jsxs)("div",{children:[!c&&Object(O.jsx)("div",{children:Object(O.jsxs)("span",{onDoubleClick:function(){n(!0)},children:["Status: ",r||"----"]})}),c&&Object(O.jsx)("div",{children:Object(O.jsx)("input",{autoFocus:!0,onChange:function(t){u(t.currentTarget.value)},value:r,onBlur:function(){n(!1),t.updateStatus(r)}})})]})},x=function(t){return t.profile.photos?Object(O.jsxs)("div",{className:p.a.wrapper,children:[Object(O.jsxs)("div",{className:p.a.logo,children:[Object(O.jsx)("img",{src:t.profile.photos.large?t.profile.photos.large:b.a,alt:""}),Object(O.jsxs)("div",{children:[" ",Object(O.jsx)(h,{status:t.status,updateStatus:t.updateStatus})]})]}),Object(O.jsxs)("div",{className:p.a.profileInfo,children:[Object(O.jsxs)("div",{children:["Full Name: ",t.profile.fullName]}),Object(O.jsxs)("div",{children:["About Me: ",t.profile.aboutMe]}),Object(O.jsxs)("ul",{className:p.a.contacts,children:["Contacts: ",Object(O.jsx)("li",{children:!t.profile.contacts.facebook&&"facebook"}),Object(O.jsx)("li",{children:!t.profile.contacts.vk&&"vk"}),Object(O.jsx)("li",{children:!t.profile.contacts.github&&"github"})]})]})]}):Object(O.jsx)(d.a,{})},v=s(296),m=s.n(v),g=s(297),k=s.n(g),_=function(t){return Object(O.jsxs)("div",{className:k.a.wrapper,children:[Object(O.jsx)("div",{children:Object(O.jsx)("img",{src:b.a,alt:""})}),Object(O.jsx)("div",{className:k.a.content,children:t.message}),Object(O.jsxs)("div",{children:["Likes ",t.likesCount]})]})},P=s(127),S=s(128),y=s(73),w=s(95),N=Object(y.a)(10),M=Object(S.a)({form:"profileAddMessageForm"})((function(t){return Object(O.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(O.jsx)("div",{children:Object(O.jsx)(P.a,{component:w.b,name:"addPostBody",placeholder:"Enter your post",validate:[y.b,N]})}),Object(O.jsx)("div",{children:Object(O.jsx)("button",{children:"Add post"})})]})})),C=s(14),I=Object(C.b)((function(t){return{posts:t.profilePage.posts}}),(function(t){return{addPost:function(e){t(Object(j.a)(e))}}}))((function(t){var e=t.posts.reverse().map((function(t){return Object(O.jsx)(_,{message:t.message,likesCount:t.likesCount})}));return Object(O.jsxs)("div",{className:m.a.postsBlock,children:["My post",Object(O.jsx)("div",{children:Object(O.jsx)(M,{onSubmit:function(e){t.addPost(e.addPostBody)}})}),Object(O.jsx)("div",{children:e})]})})),A=function(t){return Object(O.jsxs)("div",{children:[Object(O.jsx)(x,{profile:t.profilePage.profile,status:t.profilePage.status,updateStatus:t.updateStatus}),Object(O.jsx)(I,{})]})},B=s(10),D=s(9),F=s(294),E=function(t){Object(i.a)(s,t);var e=Object(r.a)(s);function s(){return Object(n.a)(this,s),e.apply(this,arguments)}return Object(o.a)(s,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=this.props.id)||this.props.history.push("/Login"),this.props.getProfile(t),this.props.getStatus(t)}},{key:"render",value:function(){return Object(O.jsx)(A,Object(c.a)(Object(c.a)({},this.props),{},{profilePage:this.props.profilePage,updateStatus:this.props.updateStatus}))}}]),s}(u.a.Component);e.default=Object(B.d)(Object(C.b)((function(t){return{profilePage:t.profilePage,id:t.auth.id}}),{getProfile:j.b,getStatus:j.c,updateStatus:j.e}),D.f,F.a)(E)}}]);
//# sourceMappingURL=3.9fddb18b.chunk.js.map