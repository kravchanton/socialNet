(this.webpackJsonpsocialNetwork=this.webpackJsonpsocialNetwork||[]).push([[0],{126:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return o}));var r=n(33),s=n(5),a=function(e){return{type:"ADD-MESSAGE",newMessage:e}},i=function(e){return{type:"UPDATE-NEW-MESSAGE-TEXT",text:e}},c={dialogs:[{name:"Victor",id:"1"},{name:"Anton",id:"2"},{name:"Andrey",id:"3"},{name:"Sveta",id:"4"},{name:"Anna",id:"5"},{name:"Dmitry",id:"6"}],messages:[{message:"Hi",id:"1"},{message:"How are you?",id:"2"},{message:"fdsfdsa",id:"3"}]},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;return"ADD-MESSAGE"===t.type?Object(s.a)(Object(s.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{message:t.newMessage,id:"4"}])}):e}},14:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return c}));var r=n(132),s=n.n(r).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"f834a8c4-9e98-4ab1-bfe3-8b09b66ab744"}}),a={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return s.get("users?page=".concat(e,"&count=").concat(t),{}).then((function(e){return e.data}))},unFollow:function(e){return s.delete("follow/".concat(e),{}).then((function(e){return e.data}))},follow:function(e){return s.post("follow/".concat(e),{},{}).then((function(e){return e.data}))},getProfile:function(e){return i.getProfile(e)}},i={getProfile:function(e){return s.get("profile/".concat(e)).then((function(e){return e.data}))},getStatus:function(e){return s.get("profile/status/".concat(e)).then((function(e){return e.data}))},updateStatus:function(e){return s.put("profile/status",{status:e}).then((function(e){return e.data}))},savePhoto:function(e){var t=new FormData;return t.append("image",e),s.put("/profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))}},c={me:function(){return s.get("auth/me").then((function(e){return e.data}))},login:function(e,t,n){return s.post("/auth/login",{email:e,password:t,rememberMe:n}).then((function(e){return e.data}))},logout:function(){return s.delete("/auth/login").then((function(e){return e.data}))}}},164:function(e,t,n){},165:function(e,t,n){},17:function(e,t,n){e.exports={nav:"navbar_nav__3VX9y",item:"navbar_item__2gggN",active:"navbar_active__3Eseg"}},192:function(e,t,n){},292:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n.n(r),a=n(63),i=n.n(a),c=(n(164),n(36)),o=n(37),u=n(39),l=n(38),d=(n(165),n(17)),j=n.n(d),f=n(13),b=n(1),p=function(){return Object(b.jsxs)("nav",{className:j.a.nav,children:[Object(b.jsx)("div",{className:j.a.item,children:Object(b.jsx)(f.b,{to:"/profile/",activeClassName:j.a.active,children:"Profile"})}),Object(b.jsx)("div",{className:j.a.item,children:Object(b.jsx)(f.b,{to:"/dialogs",activeClassName:j.a.active,children:"Messages"})}),Object(b.jsx)("div",{className:j.a.item,children:Object(b.jsx)(f.b,{to:"/news",activeClassName:j.a.active,children:"News"})}),Object(b.jsx)("div",{className:j.a.item,children:Object(b.jsx)(f.b,{to:"/music",activeClassName:j.a.active,children:"Music"})}),Object(b.jsx)("div",{className:j.a.item,children:Object(b.jsx)(f.b,{to:"/users",activeClassName:j.a.active,children:"Find users"})}),Object(b.jsx)("div",{className:j.a.item,children:Object(b.jsx)(f.b,{to:"/settings",activeClassName:j.a.active,children:"Settings"})})]})},h=n(9),g=function(){return Object(b.jsx)("div",{children:"in progress..."})},O=function(){return Object(b.jsx)("div",{children:"in progress..."})},m=function(){return Object(b.jsx)("div",{children:"in progress..."})},x=n(15),v=n(12),w=n.n(v),P=n(25),S=n(33),A=n(5),C=n(14),E=function(e){return{type:"FOLLOW",userID:e}},N=function(e){return{type:"UNFOLLOW",userID:e}},y=function(e){return{type:"SET-TOGGLE-IS-FETCHING",isFetching:e}},I=function(e,t){return{type:"SET-FOLLOWING-IS-PROGRESS",isFetching:e,userId:t}},T={users:[],totalUsersCount:0,sizePage:12,currentPage:1,isFetching:!1,followingInProgress:[]},L=function(){var e=Object(P.a)(w.a.mark((function e(t,n,r,s){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(I(!0,n)),e.next=3,r(n);case 3:0===e.sent.resultCode&&t(s(n)),t(I(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,s){return e.apply(this,arguments)}}(),Y=n(129),F=n(91),U=n.n(F);function M(e){for(var t=Math.ceil(e.totalItemsCount/e.sizePage),n=[],s=1;s<t+1;s++)n.push(s);var a=Math.ceil(t/10),i=Object(r.useState)(1),c=Object(Y.a)(i,2),o=c[0],u=c[1],l=10*(o-1)+1,d=10*o;return Object(b.jsxs)("div",{className:U.a.paginator,children:[o>1&&Object(b.jsx)("button",{onClick:function(){return u(o-1)},children:"Prev"}),n.filter((function(e){return e>=l&&e<=d})).map((function(t){return Object(b.jsx)("span",{className:e.currentPage===t&&U.a.selectedPage,onClick:function(){e.onPageChanged(t)},children:t})})),a>o&&Object(b.jsx)("button",{onClick:function(){return u(o+1)},children:"Next"})]})}var z=n(51),k=n.n(z),D=n(94);function R(e){var t=e.user;return Object(b.jsx)("div",{className:k.a.item,children:Object(b.jsxs)("div",{id:t.id,children:[Object(b.jsx)("div",{children:Object(b.jsxs)(f.b,{to:"profile/"+t.id,children:[" ",Object(b.jsx)("img",{src:null!=t.photos.small?t.photos.small:D.a,className:k.a.img})," "]})}),Object(b.jsx)("div",{children:t.name}),Object(b.jsx)("div",{children:t.followed?Object(b.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.unFollow(t.id)},children:"unfollow"}):Object(b.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.follow(t.id)},children:"follow"})}),Object(b.jsx)("span",{})]})})}function G(e){return Object(b.jsxs)("div",{children:[Object(b.jsx)(M,{totalItemsCount:e.totalUsersCount,sizePage:e.sizePage,onPageChanged:e.onPageChanged,currentPage:e.currentPage}),Object(b.jsxs)("div",{className:k.a.users,children:[" ",e.users.map((function(t){return Object(b.jsx)(R,{user:t,follow:e.follow,followingInProgress:e.followingInProgress,unFollow:e.unFollow},t.id)}))]})]})}var V=n(48),W=function(e){return e.usersPage.users},H=function(e){return e.usersPage.totalUsersCount},B=function(e){return e.usersPage.sizePage},_=function(e){return e.usersPage.currentPage},X=function(e){return e.usersPage.isFetching},Z=function(e){return e.usersPage.followingInProgress},J=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).onPageChanged=function(t){e.props.getUsers(t,e.props.sizePage),e.props.setCurrentPage(t)},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.sizePage)}},{key:"render",value:function(){return Object(b.jsxs)(b.Fragment,{children:[this.props.isFetching?Object(b.jsx)(V.a,{}):null,Object(b.jsx)(G,{totalUsersCount:this.props.totalUsersCount,sizePage:this.props.sizePage,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,unFollow:this.props.unFollow,follow:this.props.follow,followingInProgress:this.props.followingInProgress})]})}}]),n}(s.a.Component),Q=Object(x.b)((function(e){return{users:W(e),totalUsersCount:H(e),sizePage:B(e),currentPage:_(e),isFetching:X(e),followingInProgress:Z(e)}}),{follow:function(e){return function(){var t=Object(P.a)(w.a.mark((function t(n){var r;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=C.c.follow.bind(C.c),L(n,e,r,E);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unFollow:function(e){return function(){var t=Object(P.a)(w.a.mark((function t(n){var r;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=C.c.unFollow.bind(C.c),L(n,e,r,N);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:function(e){return{type:"SET-CURRENT-PAGE",currentPage:e}},getUsers:function(e,t){return function(){var n=Object(P.a)(w.a.mark((function n(r){var s;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(y(!0)),n.next=3,C.c.getUsers(e,t);case 3:s=n.sent,r({type:"SET-USERS",users:s.items}),r({type:"SET-TOTAL-COUNT",totalCount:s.totalCount}),r(y(!1));case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}})(J),q=Q,K=n(127),$=n(128),ee=n(73),te=n(95),ne=n(54),re=function(e,t,n,r){return{type:"SET-USER-DATA",data:{id:e,email:t,login:n,isAuth:r}}},se={id:null,email:null,login:null,isAuth:!1},ae=function(){return function(){var e=Object(P.a)(w.a.mark((function e(t){var n,r,s,a,i;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.me();case 2:0===(n=e.sent).resultCode&&(r=n.data,s=r.id,a=r.email,i=r.login,t(re(s,a,i,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},ie=n(34),ce=n.n(ie),oe=(n(192),Object($.a)({form:"login"})((function(e){return Object(b.jsx)("div",{className:"login",children:Object(b.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(b.jsx)("h1",{children:"Login"}),Object(b.jsx)("div",{children:"Email: free@samuraijs.com"}),Object(b.jsx)("div",{children:"Password: free"}),Object(b.jsx)("div",{children:Object(b.jsx)(K.a,{placeholder:"Login",name:"login",validate:[ee.b],component:te.a})}),Object(b.jsx)("div",{children:Object(b.jsx)(K.a,{placeholder:"password",name:"password",type:"password",validate:[ee.b],component:"input"})}),Object(b.jsxs)("div",{children:[Object(b.jsx)(K.a,{type:"checkBox",name:"rememberMe",component:"input"})," remember me"]}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{children:"Login"})}),e.error&&Object(b.jsx)("div",{className:ce.a.FormSummaryError,children:e.error})]})})}))),ue=Object(x.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(P.a)(w.a.mark((function r(s){var a,i;return w.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,C.a.login(e,t,n);case 2:0===(a=r.sent).resultCode?s(ae()):(i=a.messages.length>0?a.messages[0]:"Some error",s(Object(ne.a)("login",{_error:i})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return Object(b.jsx)(b.Fragment,{children:e.isAuth?Object(b.jsx)(h.a,{to:"/profile"}):Object(b.jsx)(oe,{onSubmit:function(t){e.login(t.login,t.password,t.rememberMe)}})})})),le=n(69),de=n.n(le),je=function(e){return Object(b.jsxs)("header",{className:de.a.header,children:[Object(b.jsx)(f.b,{to:"/profile/",children:Object(b.jsxs)("div",{className:de.a.logo,children:[Object(b.jsx)("img",{src:"data:image/png;base64,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",alt:"logo"}),Object(b.jsx)("span",{children:"SocialV"})]})}),Object(b.jsx)("div",{className:de.a.login,children:e.isAuth?Object(b.jsxs)("div",{children:[e.login," - ",Object(b.jsx)("button",{onClick:e.logout,children:"Log out"})]}):Object(b.jsx)(f.b,{to:"/login",children:"Login"})})]})},fe=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsx)(je,{login:this.props.login,id:this.props.id,email:this.props.email,isAuth:this.props.isAuth,logout:this.props.logout})}}]),n}(s.a.Component),be=Object(x.b)((function(e){return{login:e.auth.login,id:e.auth.id,email:e.auth.email,isAuth:e.auth.isAuth}}),{logout:function(){return function(){var e=Object(P.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.logout();case 2:0===e.sent.resultCode&&t(re(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(fe),pe=n(10),he={initialized:!1},ge=s.a.lazy((function(){return n.e(4).then(n.bind(null,299))})),Oe=s.a.lazy((function(){return n.e(3).then(n.bind(null,298))})),me=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(b.jsx)(f.a,{children:Object(b.jsxs)("div",{className:"app-wrapper",children:[Object(b.jsx)(be,{}),Object(b.jsxs)("div",{className:"app-body",children:[this.props.isAuth?Object(b.jsx)(p,{}):Object(b.jsx)(h.a,{to:"/login"}),Object(b.jsx)(s.a.Suspense,{fallback:Object(b.jsx)(V.a,{}),children:Object(b.jsxs)("div",{className:"app-wrapper-content",children:[Object(b.jsx)(h.b,{path:"/profile/:userId?",render:function(){return Object(b.jsx)(Oe,{})}}),Object(b.jsx)(h.b,{path:"/dialogs",render:function(){return Object(b.jsx)(ge,{})}}),Object(b.jsx)(h.b,{path:"/users",render:function(){return Object(b.jsx)(q,{})}}),Object(b.jsx)(h.b,{path:"/login",render:function(){return Object(b.jsx)(ue,{})}}),Object(b.jsx)(h.b,{path:"/news",component:g}),Object(b.jsx)(h.b,{path:"/music",component:O}),Object(b.jsx)(h.b,{path:"/settings",component:m})]})})]})]})}):Object(b.jsx)(V.a,{})}}]),n}(s.a.Component),xe=Object(pe.d)(Object(x.b)((function(e){return{initialized:e.app.initialized,isAuth:e.auth.isAuth}}),{initializeApp:function(){return function(e){var t=e(ae());Promise.all([t]).finally((function(){e({type:"INITIALIZED-SUCCESS"})}))}}})(me)),ve=n(96),we=n(126),Pe=n(134),Se=n(130),Ae=Object(pe.c)({profilePage:ve.d,messagesPage:we.b,usersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(A.a)(Object(A.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userID?Object(A.a)(Object(A.a)({},e),{},{followed:!0}):e}))});case"UNFOLLOW":return Object(A.a)(Object(A.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userID?Object(A.a)(Object(A.a)({},e),{},{followed:!1}):e}))});case"SET-USERS":return Object(A.a)(Object(A.a)({},e),{},{users:Object(S.a)(t.users)});case"SET-CURRENT-PAGE":return Object(A.a)(Object(A.a)({},e),{},{currentPage:t.currentPage});case"SET-TOTAL-COUNT":return Object(A.a)(Object(A.a)({},e),{},{totalUsersCount:t.totalCount});case"SET-TOGGLE-IS-FETCHING":return Object(A.a)(Object(A.a)({},e),{},{isFetching:t.isFetching});case"SET-FOLLOWING-IS-PROGRESS":return Object(A.a)(Object(A.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(S.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;return"SET-USER-DATA"===t.type?Object(A.a)(Object(A.a)({},e),t.data):e},form:Se.a,app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;return"INITIALIZED-SUCCESS"===t.type?Object(A.a)(Object(A.a)({},e),{},{initialized:!0}):e}}),Ce=Object(pe.e)(Ae,Object(pe.a)(Pe.a));window.store=Ce;var Ee=Ce,Ne=function(){i.a.render(Object(b.jsx)(x.a,{store:Ee,children:Object(b.jsx)(xe,{})}),document.getElementById("root"))};Ne(),Ee.subscribe(Ne)},34:function(e,t,n){e.exports={error:"FormsControls_error__1uvkq",FormSummaryError:"FormsControls_FormSummaryError__1ns6K"}},48:function(e,t,n){"use strict";var r=n.p+"static/media/preloader.385f97b7.svg",s=(n(0),n(1));t.a=function(){return Object(s.jsx)("img",{src:r})}},51:function(e,t,n){e.exports={item:"users_item__3BspD",users:"users_users__mubLr",img:"users_img__1nIxD"}},69:function(e,t,n){e.exports={header:"Header_header__3gTDx",logo:"Header_logo___XbQP",login:"Header_login__1tmw3"}},73:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return s}));var r=function(e){if(!e)return"Field is required"},s=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},91:function(e,t,n){e.exports={paginator:"Paginator_paginator__1dCoz",selectedPage:"Paginator_selectedPage__3GNfO"}},94:function(e,t,n){"use strict";t.a=n.p+"static/media/user.7bc1f545.png"},95:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return d}));var r=n(5),s=n(88),a=(n(0),n(34)),i=n.n(a),c=n(1),o=["input","meta"],u=["input","meta"],l=function(e){var t=e.input,n=e.meta,a=Object(s.a)(e,o),u=n.touched&&n.error;return Object(c.jsxs)("div",{className:u?i.a.error:"",children:[Object(c.jsx)("textarea",Object(r.a)(Object(r.a)({className:i.a.error},t),a)),Object(c.jsx)("div",{children:u&&Object(c.jsx)("span",{children:n.error})})]})},d=function(e){var t=e.input,n=e.meta,a=Object(s.a)(e,u),o=n.touched&&n.error;return Object(c.jsxs)("div",{className:o?i.a.error:"",children:[Object(c.jsx)("input",Object(r.a)(Object(r.a)({className:i.a.error},t),a)),Object(c.jsx)("div",{children:o&&Object(c.jsx)("span",{children:n.error})})]})}},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"d",(function(){return u})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return d})),n.d(t,"f",(function(){return j})),n.d(t,"e",(function(){return f}));var r=n(33),s=n(5),a=n(14),i=function(e){return{type:"ADD-POST",text:e}},c=function(e){return{type:"GET-STATUS",status:e}},o={posts:[{message:"Hi, how are you?",likesCount:4,id:"1"},{message:"Its my first post",likesCount:1,id:"2"},{message:"yesd",likesCount:12,id:"3"}],profile:{},status:""},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={message:t.text,likesCount:0,id:"5"};return Object(s.a)(Object(s.a)({},e),{},{posts:[].concat(Object(r.a)(e.posts),[n])});case"SET-USER-PROFILE":return Object(s.a)(Object(s.a)({},e),{},{profile:t.profile});case"GET-STATUS":return Object(s.a)(Object(s.a)({},e),{},{status:t.status});case"SAVE-PHOTO-SUCCESS":return Object(s.a)(Object(s.a)({},e),{},{profile:Object(s.a)(Object(s.a)({},e.profile),{},{photos:t.photo})});default:return e}},l=function(e){return function(t){a.c.getProfile(e).then((function(e){t({type:"SET-USER-PROFILE",profile:e})}))}},d=function(e){return function(t){a.b.getStatus(e).then((function(e){t(c(e))}))}},j=function(e){return function(t){a.b.updateStatus(e).then((function(n){0===n.resultCode&&t(c(e))}))}},f=function(e){return function(t){a.b.savePhoto(e).then((function(e){0===e.resultCode&&t(function(e){return{type:"SAVE-PHOTO-SUCCESS",photo:e}}(e.data.photos))}))}}}},[[292,1,2]]]);
//# sourceMappingURL=main.801f2264.chunk.js.map