(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{12:function(t,n,o){},14:function(t,n,o){"use strict";o.r(n);var e=o(5),c=o.n(e),r=o(6),i=o(1),u=(o(12),o(0)),a=function(t){var n=t.goods;return Object(u.jsx)("ul",{children:n.map((function(t){return Object(u.jsx)("li",{style:{color:t.color},"data-cy":"good",children:t.name},t.id)}))})},s=o(7);function d(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){if(!t.ok)throw new Error("".concat(t.status," - ").concat(t.statusText));return t.json()}))}var f=function(){return d().then((function(t){return Object(s.a)(t).sort((function(t,n){return t.name.localeCompare(n.name)})).slice(0,5)})).catch((function(t){throw new Error(t)}))},l=function(){return d().then((function(t){return t.filter((function(t){return"red"===t.color}))})).catch((function(t){throw new Error(t)}))},b=function(){var t=Object(i.useState)([]),n=Object(r.a)(t,2),o=n[0],e=n[1],c=function(t){t().then((function(t){return e(t)}))};return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Dynamic list of Goods"}),Object(u.jsx)("button",{type:"button","data-cy":"all-button",onClick:function(){return c(d)},children:"Load all goods"}),Object(u.jsx)("button",{type:"button","data-cy":"first-five-button",onClick:function(){return c(f)},children:"Load 5 first goods"}),Object(u.jsx)("button",{type:"button","data-cy":"red-button",onClick:function(){return c(l)},children:"Load red goods"}),Object(u.jsx)(a,{goods:o})]})};c.a.render(Object(u.jsx)(b,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.d95b133e.chunk.js.map