(this.webpackJsonpsocialNetwork=this.webpackJsonpsocialNetwork||[]).push([[3],{294:function(t,e,s){"use strict";s.d(e,"a",(function(){return l}));var n=s(5),o=s(88),r=s(9),c=(s(0),s(15)),i=s(1),a=["isAuth"],u=function(t){return{isAuth:t.auth.isAuth}};function l(t){return Object(c.b)(u)((function(e){var s=e.isAuth,c=Object(o.a)(e,a);return s?Object(i.jsx)(t,Object(n.a)({},c)):Object(i.jsx)(r.a,{to:"/login"})}))}},295:function(t,e,s){t.exports={wrapper:"profileInfo_wrapper__3eyco",profileInfo:"profileInfo_profileInfo__1h1nc"}},296:function(t,e,s){t.exports={content:"MyPosts_content__1OSW2",postsBlock:"MyPosts_postsBlock__IRIfO"}},297:function(t,e,s){t.exports={wrapper:"MyPost_wrapper__3nwDC",content:"MyPost_content__Dj0mz"}},298:function(t,e,s){"use strict";s.r(e);var n=s(5),o=s(36),r=s(37),c=s(39),i=s(38),a=s(0),u=s.n(a),l=s(96),p=s(295),j=s.n(p),f=s(48),d=s(94),b=s(129),h=s(1),O=function(t){var e=Object(a.useState)(!1),s=Object(b.a)(e,2),n=s[0],o=s[1],r=Object(a.useState)(t.status),c=Object(b.a)(r,2),i=c[0],u=c[1];Object(a.useEffect)((function(){u(t.status)}),[t.status]);return Object(h.jsxs)("div",{children:[!n&&Object(h.jsx)("div",{children:Object(h.jsxs)("span",{onDoubleClick:function(){o(!0)},children:["Status: ",i||"----"]})}),n&&Object(h.jsx)("div",{children:Object(h.jsx)("input",{autoFocus:!0,onChange:function(t){u(t.currentTarget.value)},value:i,onBlur:function(){o(!1),t.updateStatus(i)}})})]})},v=function(t){var e=Object(a.useRef)(null);if(!t.profile.photos)return Object(h.jsx)(f.a,{});return Object(h.jsxs)("div",{className:j.a.wrapper,children:[Object(h.jsxs)("div",{className:j.a.logo,children:[Object(h.jsx)("img",{src:t.profile.photos.large?t.profile.photos.large:d.a,alt:"",onClick:function(){return e&&e.current&&e.current.click()}}),t.isOwner&&Object(h.jsx)("input",{type:"file",onChange:function(e){e.target.files.length&&t.savePhoto(e.target.files[0])},ref:e,style:{display:"none"}}),Object(h.jsx)("div",{children:Object(h.jsx)(O,{status:t.status,updateStatus:t.updateStatus})})]}),Object(h.jsxs)("div",{className:j.a.profileInfo,children:[Object(h.jsxs)("div",{children:["Full Name: ",t.profile.fullName]}),Object(h.jsxs)("div",{children:["About Me: ",t.profile.aboutMe]}),Object(h.jsxs)("ul",{className:j.a.contacts,children:["Contacts: ",Object(h.jsx)("li",{children:!t.profile.contacts.facebook&&"facebook"}),Object(h.jsx)("li",{children:!t.profile.contacts.vk&&"vk"}),Object(h.jsx)("li",{children:!t.profile.contacts.github&&"github"})]})]})]})},x=s(296),m=s.n(x),g=s(297),P=s.n(g),k=function(t){return Object(h.jsxs)("div",{className:P.a.wrapper,children:[Object(h.jsx)("div",{children:Object(h.jsx)("img",{src:d.a,alt:""})}),Object(h.jsx)("div",{className:P.a.content,children:t.message}),Object(h.jsxs)("div",{children:["Likes ",t.likesCount]})]})},y=s(127),_=s(128),S=s(73),w=s(95),I=Object(S.a)(10),N=Object(_.a)({form:"profileAddMessageForm"})((function(t){return Object(h.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(h.jsx)("div",{children:Object(h.jsx)(y.a,{component:w.b,name:"addPostBody",placeholder:"Enter your post",validate:[S.b,I]})}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{children:"Add post"})})]})})),C=s(15),M=Object(C.b)((function(t){return{posts:t.profilePage.posts}}),(function(t){return{addPost:function(e){t(Object(l.a)(e))}}}))((function(t){var e=t.posts.reverse().map((function(t){return Object(h.jsx)(k,{message:t.message,likesCount:t.likesCount})}));return Object(h.jsxs)("div",{className:m.a.postsBlock,children:["My post",Object(h.jsx)("div",{children:Object(h.jsx)(N,{onSubmit:function(e){t.addPost(e.addPostBody)}})}),Object(h.jsx)("div",{children:e})]})})),A=function(t){return Object(h.jsxs)("div",{children:[Object(h.jsx)(v,{profile:t.profilePage.profile,savePhoto:t.savePhoto,isOwner:t.isOwner,status:t.profilePage.status,updateStatus:t.updateStatus}),Object(h.jsx)(M,{})]})},B=s(10),D=s(9),F=s(294),E=function(t){Object(c.a)(s,t);var e=Object(i.a)(s);function s(){return Object(o.a)(this,s),e.apply(this,arguments)}return Object(r.a)(s,[{key:"refreshProfile",value:function(){var t=this.props.match.params.userId;t||(t=this.props.id)||this.props.history.push("/login"),this.props.getProfile(t),this.props.getStatus(t)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(t,e,s){this.props.match.params.userId!==t.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return Object(h.jsx)(A,Object(n.a)(Object(n.a)({},this.props),{},{savePhoto:this.props.savePhoto,isOwner:!this.props.match.params.userId,profilePage:this.props.profilePage,updateStatus:this.props.updateStatus}))}}]),s}(u.a.Component);e.default=Object(B.d)(Object(C.b)((function(t){return{profilePage:t.profilePage,id:t.auth.id}}),{getProfile:l.b,getStatus:l.c,updateStatus:l.f,savePhoto:l.e}),D.f,F.a)(E)}}]);
//# sourceMappingURL=3.7eae5368.chunk.js.map