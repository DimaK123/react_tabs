(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(3),a=n.n(c),i=n(5),s=n(1),d=n.n(s),b=(n(10),n(11),n(12),n(4)),o=n.n(b),r=n(0),l=d.a.memo((function(t){var e=t.tabs,n=t.selectedTabId,c=t.onTabSelected,a=e.find((function(t){return t.id===n}))||e[0];return Object(r.jsxs)("div",{"data-cy":"TabsComponent",children:[Object(r.jsx)("div",{className:"tabs is-boxed",children:Object(r.jsx)("ul",{children:e.map((function(t){var e=t.id,i=t.title;return Object(r.jsx)("li",{"data-cy":"Tab",className:o()({"is-active":n===e}),children:Object(r.jsx)("a",{href:"#".concat(e),"data-cy":"TabLink",onClick:function(){return a!==t&&c(e)},children:i})},e)}))})}),Object(r.jsx)("div",{className:"block","data-cy":"TabContent",children:a.content})]})})),j=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],u=function(){var t=Object(s.useState)("tab-1"),e=Object(i.a)(t,2),n=e[0],c=e[1],a=j.find((function(t){return t.id===n}))||j[0];return Object(r.jsxs)("div",{className:"section",children:[Object(r.jsx)("h1",{className:"title",children:"Selected tab is ".concat(a.title)}),Object(r.jsx)(l,{tabs:j,selectedTabId:n,onTabSelected:function(t){j.find((function(e){return e.id===t}))?c(t):c(j[0].id)}})]})};a.a.render(Object(r.jsx)(u,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.22837589.chunk.js.map