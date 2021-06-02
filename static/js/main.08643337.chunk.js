(this["webpackJsonpreact_list-of-posts"]=this["webpackJsonpreact_list-of-posts"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(1),s=n.n(c),o=n(10),a=n.n(o),i=n(2),r=(n(16),n(7)),u=(n(17),n(9)),l=n.n(u),j=n(11),b="https://bloggy-api.herokuapp.com";function d(t,e){return m.apply(this,arguments)}function m(){return(m=Object(j.a)(l.a.mark((function t(e,n){var c,s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e,n);case 2:if((c=t.sent).ok){t.next=5;break}throw new Error("".concat(c.status," - ").concat(c.statusText));case 5:return t.next=7,c.json();case 7:return s=t.sent,t.abrupt("return",s);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var O=n(3),h=(n(19),n(0));function p(t){var e=t.handleCreatePostButton,n=t.setNewPost,c=t.newPost;return Object(h.jsxs)("form",{action:"POST",className:"NewPostForm",children:[Object(h.jsx)("input",{type:"text",value:c.title,onChange:function(t){return n((function(e){return Object(O.a)(Object(O.a)({},e),{},{title:t.target.value})}))},className:"NewPostForm__input"}),Object(h.jsx)("input",{type:"text",value:c.body,onChange:function(t){return n((function(e){return Object(O.a)(Object(O.a)({},e),{},{body:t.target.value})}))},className:"NewPostForm__input"}),Object(h.jsx)("button",{type:"button",onClick:e,className:"NewPostForm__submit-button button",children:"Create"})]})}function f(t){var e=t.setPostId,n=Object(c.useState)([]),s=Object(i.a)(n,2),o=s[0],a=s[1],u=Object(c.useState)(""),l=Object(i.a)(u,2),j=l[0],m=l[1],O=Object(c.useState)({title:"",body:""}),f=Object(i.a)(O,2),x=f[0],N=f[1];Object(c.useEffect)((function(){d("".concat(b,"/posts")).then((function(t){return a(t)}))}),[]);var _=function(t){(function(t){return d("".concat(b,"/posts/").concat(t),{method:"DELETE"})})(t).then(a((function(e){return e.filter((function(e){return t!==e.id}))})))};return Object(h.jsxs)("div",{className:"PostsList",children:[Object(h.jsx)("h2",{children:"Posts:"}),Object(h.jsx)(p,{handleCreatePostButton:function(){(function(t){return d("".concat(b,"/posts"),{method:"POST",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(t)})})(x).then((function(t){a([].concat(Object(r.a)(o),[t])),N({title:"",body:""})}))},setNewPost:N,newPost:x}),Object(h.jsx)("ul",{className:"PostsList__list",children:o.map((function(t){return Object(h.jsxs)("li",{className:"PostsList__item",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"[Post]"}),t.title||"No title"]}),t.id!==j?Object(h.jsx)("button",{type:"button",className:"PostsList__button button",onClick:function(){return n=t.id,m(n),void e(n);var n},children:"Open"}):Object(h.jsx)("button",{type:"button",className:"PostsList__button button",onClick:function(){return m(""),void e(null)},children:"Close"}),Object(h.jsx)("button",{type:"button",className:"PostsList__button button",onClick:function(){return _(t.id)},children:"Delete post"})]},t.id)}))})]})}n(21);var x=n(6);n(22);function N(t){var e=t.addNewComment,n=Object(c.useState)({name:"",email:"",body:""}),s=Object(i.a)(n,2),o=s[0],a=s[1],r=function(t){var e=t.target,n=e.name,c=e.value;a((function(t){return Object(O.a)(Object(O.a)({},t),{},Object(x.a)({},n,c))}))};return Object(h.jsxs)("form",{className:"NewCommentForm",onSubmit:function(t){t.preventDefault(),e(o),a({name:"",email:"",body:""})},method:"POST",children:[Object(h.jsx)("div",{className:"form-field",children:Object(h.jsx)("input",{type:"text",name:"name",placeholder:"Your name",className:"NewCommentForm__input",value:o.name,onChange:function(t){return r(t)}})}),Object(h.jsx)("div",{className:"form-field",children:Object(h.jsx)("input",{type:"text",name:"email",placeholder:"Your email",className:"NewCommentForm__input",value:o.email,onChange:function(t){return r(t)}})}),Object(h.jsx)("div",{className:"form-field",children:Object(h.jsx)("textarea",{name:"body",placeholder:"Type comment here",className:"NewCommentForm__input",value:o.text,onChange:function(t){return r(t)}})}),Object(h.jsx)("button",{type:"submit",className:"NewCommentForm__submit-button button",children:"Add a comment"})]})}function _(t){var e=t.postId,n=Object(c.useState)([]),s=Object(i.a)(n,2),o=s[0],a=s[1],u=Object(c.useState)([]),l=Object(i.a)(u,2),j=l[0],m=l[1],O=Object(c.useCallback)((function(t){(function(t){return d("".concat(b,"/comments"),{method:"POST",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(t)})})(t).then(m((function(e){return[].concat(Object(r.a)(e),[t])})))}),[j]);return Object(c.useEffect)((function(){(function(t){return d("".concat(b,"/posts/").concat(t))})(e).then(a),function(t){return d("".concat(b,"/comments")).then((function(e){return e.filter((function(e){return t===e.postId}))}))}(e).then(m)}),[e]),Object(h.jsxs)("div",{className:"PostDetails",children:[Object(h.jsx)("h2",{children:"Post details:"}),Object(h.jsxs)("section",{className:"PostDetails__post",children:[Object(h.jsxs)("p",{children:["Title:",o.title]}),Object(h.jsxs)("p",{children:["Content:",o.body]})]}),Object(h.jsx)("section",{className:"PostDetails__comments",children:Object(h.jsx)("ul",{className:"PostDetails__list",children:j.map((function(t){return Object(h.jsx)("li",{className:"PostDetails__list-item",children:Object(h.jsx)("p",{children:t.body})},t.id)}))})}),Object(h.jsx)("section",{children:Object(h.jsx)("div",{className:"PostDetails__form-wrapper",children:Object(h.jsx)(N,{postId:e,addNewComment:O})})})]})}var v=function(){var t=Object(c.useState)(null),e=Object(i.a)(t,2),n=e[0],s=e[1];return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("header",{children:Object(h.jsx)("h1",{children:"List of Posts"})}),Object(h.jsx)("main",{children:Object(h.jsxs)("div",{className:"App__container",children:[Object(h.jsx)("div",{className:"App__sidebar",children:Object(h.jsx)(f,{setPostId:s})}),Object(h.jsx)("div",{className:"App__content",children:n&&Object(h.jsx)(_,{postId:n})})]})})]})};n(23);a.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(v,{})}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.08643337.chunk.js.map