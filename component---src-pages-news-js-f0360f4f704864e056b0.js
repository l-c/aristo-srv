(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{FJi0:function(t,e,n){"use strict";n.r(e);var o=n("KQm4"),a=n("q1tI"),r=n.n(a),s=n("b6MC"),i=n("Kvkj"),c=n("ijoI");e.default=function(){var t=Object(a.useState)({}),e=t[0],n=t[1],u=Object(a.useState)([]),l=u[0],p=u[1],f=Object(a.useState)(""),d=f[0],m=f[1],h={limit:4},b=function(t){Object(s.a)(Object(s.b)(h,t)).then((function(t){console.log(t.response),n(t.response)}))};return Object(a.useEffect)((function(){b()}),[]),Object(a.useEffect)((function(){e&&e.posts&&e.posts.length>0&&p([].concat(Object(o.a)(l),Object(o.a)(e.posts)))}),[e]),Object(a.useEffect)((function(){e._links&&l.length<e.total_posts?m(e._links.next.href):m("")}),[l]),r.a.createElement(i.r,{pageContext:c},r.a.createElement(i.e,null,l.map((function(t,e){return r.a.createElement(i.y,{key:e,imagePath:t.photos&&t.photos[0].alt_sizes[3].url,title:t.tags&&t.tags[0],text:(n=t.caption,o=60,n.replace(/(<([^>]+)>)/gi,"").split(" ").splice(0,o).join(" ")+"..."),ctaProps:{to:"/post/"+t.id_string+"/"+t.slug}});var n,o})),d&&r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(i.a,{type:"button",gutter:{left:"auto",right:"auto"},onClick:function(){b(d)}},"Load more news posts"))))}},b6MC:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return r}));var o="a9rmrkt46nr8csi1Fkp9VarPafZws8ZQJZyitfTtDWcwB5GhHe",a=function(t,e){return void 0===t&&(t={}),t.api_key=o,e?"https://api.tumblr.com"+e+"&api_key="+o:"https://api.tumblr.com/v2/blog/aristowealth.tumblr.com/posts?"+function(t){return void 0===t&&(t={}),Object.keys(t).map((function(e){return e+"="+t[e]})).join("&")}(t)},r=function(t,e){return void 0===t&&(t=""),void 0===e&&(e={method:"GET",headers:{"Content-Type":"application/json; charset=utf-8"}}),window.fetch(t,e).then((function(t){var e=t.ok,n=t.status,o=t.statusText,a=t.url;if(e)return t.json();var r={message:n+": "+o+", failure for call to "+a,response:t,status:n,statusText:o};return Promise.reject(r)})).catch((function(t){return Promise.reject(t)}))}},ijoI:function(t){t.exports=JSON.parse('{"url":"/news","title":"News & Current Events","description":"Stay informed aboutAristo updates and market trends.","template":"other","content":{"hero":{"imagePath":"news/hero.jpg","title":"Stay informed about Aristo updates and market trends"},"endHero":{"imagePath":"news/hero-end.jpg","title":"It’s never too late to start planning for a better future","text":"Schedule a meeting with us today to facilitate in identifying and reaching your goals.","cta":{"label":"Setup a Meeting","src":"/contact"}}}}')}}]);
//# sourceMappingURL=component---src-pages-news-js-f0360f4f704864e056b0.js.map