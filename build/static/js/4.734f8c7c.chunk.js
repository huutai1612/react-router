(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[4],{36:function(e,t,c){"use strict";var n=c(8),s=c(37),o=c.n(s),r=c(1);t.a=function(){return Object(r.jsxs)("div",{className:o.a.noquotes,children:[Object(r.jsx)("p",{children:"No quotes found!"}),Object(r.jsx)(n.b,{to:"/new-quote",className:"btn",children:"Add a Quote"})]})}},37:function(e,t,c){e.exports={noquotes:"NoQuotesFound_noquotes__LFTz-"}},46:function(e,t,c){e.exports={comments:"Comments_comments__3YgKQ",list:"Comments_list__Hwufv"}},47:function(e,t,c){e.exports={form:"NewCommentForm_form__1Wfn3",loading:"NewCommentForm_loading__3PSaB",control:"NewCommentForm_control__2p5Bl",actions:"NewCommentForm_actions__2zCCJ"}},48:function(e,t,c){e.exports={quote:"HighlightedQuote_quote__3HM8k"}},51:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(2),o=c(8),r=c(35),a=c(34),j=c(33),u=c(15),i=c(46),d=c.n(i),m=c(47),l=c.n(m),b=c(1),O=function(e){var t=e.quoteId,c=Object(n.useRef)(),o=Object(s.h)(),r=Object(a.a)(j.a),i=r.sendRequest,d=r.status,m=r.error;Object(n.useEffect)((function(){"completed"===d&&o.push("/quotes/".concat(t))}),[d,o,t]);var O=function(e){e.preventDefault();var n=c.current.value;n.length>=10?i({quoteId:t,commentData:n}):alert("Comment must be at least 10 characters long")};return m?Object(b.jsx)("p",{className:"centered focused",children:m}):"pending"===d?Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(u.a,{})}):Object(b.jsxs)("form",{className:l.a.form,onSubmit:O,children:[Object(b.jsxs)("div",{className:l.a.control,onSubmit:O,children:[Object(b.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),Object(b.jsx)("textarea",{id:"comment",rows:"5",ref:c})]}),Object(b.jsx)("div",{className:l.a.actions,children:Object(b.jsx)("button",{className:"btn",children:"Add Comment"})})]})},h=function(e){var t=e.quoteId,c=Object(n.useState)(!1),s=Object(r.a)(c,2),o=s[0],i=s[1],m=Object(a.a)(j.c,!0),l=m.sendRequest,h=m.data,x=m.error,f=m.status;Object(n.useEffect)((function(){return l(t)}),[l,t]);var p=function(e){var t=[];for(var c in e)t.push(e[c]);return t}(h);if("pending"===f)return Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(u.a,{})});if(x)return Object(b.jsx)("p",{className:"centered focused",children:x});if("completed"===f&&0===p.length)return Object(b.jsxs)(n.Fragment,{children:[Object(b.jsx)("p",{className:"centered focused",children:"Not found any comments"}),Object(b.jsx)(O,{quoteId:t})]});var N=p.map((function(e,t){return Object(b.jsx)("p",{children:e},t)}));return Object(b.jsxs)("section",{className:d.a.comments,children:[Object(b.jsx)("h2",{children:"User Comments"}),!o&&Object(b.jsx)("button",{className:"btn",onClick:function(){i(!0)},children:"Add a Comment"}),o&&Object(b.jsx)(O,{quoteId:t}),Object(b.jsx)("div",{className:d.a.list,children:N})]})},x=c(48),f=c.n(x),p=function(e){return Object(b.jsxs)("figure",{className:f.a.quote,children:[Object(b.jsx)("p",{children:e.text}),Object(b.jsx)("figcaption",{children:e.author})]})},N=c(36);t.default=function(e){var t=Object(a.a)(j.e,!0),c=t.sendRequest,r=t.data,i=t.status,d=t.error,m=Object(s.j)().quoteId,l=Object(s.k)();return Object(n.useEffect)((function(){c(m)}),[c,m]),"pending"===i?Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(u.a,{})}):d?Object(b.jsx)("p",{className:"centered focused",children:d}):r?Object(b.jsxs)(n.Fragment,{children:[Object(b.jsx)(p,{text:r.text,author:r.author}),Object(b.jsx)(s.c,{path:"".concat(l.path),exact:!0,children:Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(o.b,{className:"btn--flat ",to:"".concat(l.url,"/comments"),children:"Load Comments"})})}),Object(b.jsx)(s.c,{path:"".concat(l.path,"/comments"),children:Object(b.jsx)(h,{quoteId:m})})]}):Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(N.a,{})})}}}]);
//# sourceMappingURL=4.734f8c7c.chunk.js.map