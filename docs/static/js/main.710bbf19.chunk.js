(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{37:function(e,t,a){e.exports=a(79)},46:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),l=a.n(c),s=a(21),o=a(17),i=a(34),u=a(2),m=(a(46),function(){return r.a.createElement(u.b,{className:"logo",to:"/"},"Blog")}),p=(a(52),function(e){return r.a.createElement("nav",{className:"menu header__menu"},r.a.createElement("ul",{className:"menu__list"},e.children))}),E=function(e){return r.a.createElement("li",{className:"menu__item"},r.a.createElement(u.c,{className:"menu__link",to:e.to},e.children))},_=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(m,null),r.a.createElement(p,null,r.a.createElement(E,{to:"/"},"Home")))},d=(a(53),function(e){return r.a.createElement(n.Fragment,null,r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"container header__container"},r.a.createElement(_,null))),r.a.createElement("main",{className:"content"},r.a.createElement("div",{className:"container"},e.children)))}),h=a(10),f=a(11),N=a(13),v=a(12),b=a(14),g=a(15),y=a(36),O=a.n(y).a.create({baseURL:"https://jsonplaceholder.typicode.com"}),S=(a(73),function(e){return r.a.createElement("article",{className:"post"},r.a.createElement("h3",{className:"post__title"},r.a.createElement(u.b,{to:"/posts/".concat(e.id),className:"post__title-link"},e.title)),r.a.createElement("p",{className:"post__message"},e.message),r.a.createElement("p",{className:"post__author"},r.a.createElement(u.b,{className:"post__author_link",to:"/users/".concat(e.id)},e.author)))}),j=(a(74),function(e){var t=e.posts.map(function(e){return r.a.createElement(S,{key:e.id,id:e.id,title:e.title,message:e.body,author:e.author})});return r.a.createElement("section",{className:"posts"},t)}),G=(a(75),function(){return r.a.createElement("div",{className:"spinner"},r.a.createElement("div",{id:"circularG"},r.a.createElement("div",{id:"circularG_1",className:"circularG"}),r.a.createElement("div",{id:"circularG_2",className:"circularG"}),r.a.createElement("div",{id:"circularG_3",className:"circularG"}),r.a.createElement("div",{id:"circularG_4",className:"circularG"}),r.a.createElement("div",{id:"circularG_5",className:"circularG"}),r.a.createElement("div",{id:"circularG_6",className:"circularG"}),r.a.createElement("div",{id:"circularG_7",className:"circularG"}),r.a.createElement("div",{id:"circularG_8",className:"circularG"})))}),k=(a(76),function(e){function t(){return Object(h.a)(this,t),Object(N.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.props.onFetchPosts()}},{key:"render",value:function(){return this.props.posts.length?r.a.createElement(n.Fragment,null,r.a.createElement("h1",{className:"main_title"},"Posts"),r.a.createElement(j,{posts:this.props.posts})):r.a.createElement(G,null)}}]),t}(n.Component)),C=Object(s.b)(function(e){return{posts:e.posts}},function(e){return{onFetchPosts:function(){return e(function(e){return O.get("/posts").then(function(e){var t=e.data.map(function(e){return O.get("/users/".concat(e.userId)).then(function(t){return Object(g.a)({},e,{author:t.data.name})})});return Promise.all(t)}).then(function(t){e(function(e){return{type:"FETCH_POSTS_SUCCESS",posts:e}}(t))}).catch(function(t){e({type:"FETCH_POSTS_SUCCESS",error:t})})})}}})(k),w=a(4),P=(a(77),a(78),function(e){var t;return"link"===e.type?t=r.a.createElement(u.b,{className:"button",to:e.to},e.children):"button"===e.type&&(t=r.a.createElement("button",{className:"button"},e.children)),r.a.createElement(n.Fragment,null,t)}),F=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(N.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={post:null,error:null},a}return Object(b.a)(t,e),Object(f.a)(t,[{key:"componentWillMount",value:function(){var e=this,t=this.props.match.params.id;O.get("/posts/".concat(t)).then(function(t){var a=t.data;O.get("/users/".concat(a.userId)).then(function(t){a.author=t.data.name,e.setState({post:a})}).catch(function(t){e.setState({error:t})})})}},{key:"render",value:function(){var e=this.state.post;return e?r.a.createElement(n.Fragment,null,r.a.createElement("section",{className:"post post-full"},r.a.createElement("h1",{className:"post__title"},e.title),r.a.createElement("p",{className:"post__author post__author-full_post"},"Author: ",r.a.createElement(u.b,{className:"post__author_link",to:"/users/".concat(e.userId)},e.author)),r.a.createElement("p",{className:"post__message"},e.body),r.a.createElement(P,{type:"link",to:"/"},"Go Back"))):r.a.createElement(G,null)}}]),t}(n.Component),T=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(N.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={user:null},a}return Object(b.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;O.get("/users/".concat(t)).then(function(t){var a=t.data;e.setState({user:a})})}},{key:"render",value:function(){var e=this.state.user;return e?r.a.createElement("div",{className:"user"},r.a.createElement("h1",{className:"main_title"},e.name),r.a.createElement("ul",{className:"user__info"},r.a.createElement("li",{className:"user__info_item"},r.a.createElement("b",null,"Username"),": ",e.username),r.a.createElement("li",{className:"user__info_item"},r.a.createElement("b",null,"Email"),": ",e.email),r.a.createElement("li",{className:"user__info_item"},r.a.createElement("b",null,"Address"),":",r.a.createElement("ul",{className:"user__info"},r.a.createElement("li",{className:"user__info_item"},"City: ",e.address.city),r.a.createElement("li",{className:"user__info_item"},"Street: ",e.address.street),r.a.createElement("li",{className:"user__info_item"},"Suite: ",e.address.suite))),r.a.createElement("li",{className:"user__info"},r.a.createElement("b",null,"Company"),r.a.createElement("ul",{className:"user__info_item"},r.a.createElement("li",{className:"user__info_item"},'"',e.company.name,'" - ',e.company.catchPhrase))))):r.a.createElement(G,null)}}]),t}(n.Component);var H=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d,null,r.a.createElement(w.c,null,r.a.createElement(w.a,{path:"/",exact:!0,component:C}),r.a.createElement(w.a,{path:"/posts",exact:!0,component:C}),r.a.createElement(w.a,{path:"/posts/:id",component:F}),r.a.createElement(w.a,{path:"/users/:id",component:T}))))},U={posts:[],singlePost:null,error:null},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_POSTS_SUCCESS":return Object(g.a)({},e,{posts:t.posts,singlePost:null});case"FETCH_SINGLE_POST_SUCCESS":return Object(g.a)({},e,{singlePost:t.post});case"FETCH_POSTS_ERROR":return Object(g.a)({},e,{error:t.error});default:return e}};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var I=Object(o.c)(A,Object(o.a)(i.a)),B=r.a.createElement(s.a,{store:I},r.a.createElement(u.a,null,r.a.createElement(H,null)));l.a.render(B,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[37,1,2]]]);
//# sourceMappingURL=main.710bbf19.chunk.js.map