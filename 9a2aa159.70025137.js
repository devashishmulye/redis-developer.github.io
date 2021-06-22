(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{153:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return d})),a.d(t,"default",(function(){return b}));var r=a(3),i=a(7),n=(a(0),a(203)),s=a(208),o=a(209),c=(a(204),a(205),{id:"index-gettingstarted",title:"Getting Started with Node.js",sidebar_label:"Getting Started",slug:"/develop/node/gettingstarted"}),l={unversionedId:"develop/node/gettingstarted/index-gettingstarted",id:"develop/node/gettingstarted/index-gettingstarted",isDocsHomePage:!1,title:"Getting Started with Node.js",description:"Find tutorials, examples and technical articles that will help you to develop with Redis and Node.js/JavaScript.",source:"@site/docs/develop/node/gettingstarted/index-gettingstarted.mdx",slug:"/develop/node/gettingstarted",permalink:"/develop/node/gettingstarted",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/develop/node/gettingstarted/index-gettingstarted.mdx",version:"current",sidebar_label:"Getting Started",sidebar:"docs",previous:{title:"NodeJS and Redis",permalink:"/develop/node"},next:{title:"The Node.js Crash Course",permalink:"/develop/node/node-crash-course"}},d=[{value:"Introduction",id:"introduction",children:[{value:"Redis Marketplace",id:"redis-marketplace",children:[]},{value:"More Developer Resources",id:"more-developer-resources",children:[]},{value:"Redis University",id:"redis-university",children:[]},{value:"Redis for JavaScript Developers",id:"redis-for-javascript-developers",children:[]}]}],p={toc:d};function b(e){var t=e.components,c=Object(i.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},p,c,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Find tutorials, examples and technical articles that will help you to develop with Redis and Node.js/JavaScript."),Object(n.b)("h2",{id:"introduction"},"Introduction"),Object(n.b)("p",null,"Redis is a great database for use with Node.js. Both Redis Node.js share similar type conventions and threading models, which makes for a very predictable development experience. By pairing Node.js & Redis together you can achieve a scalable and productive development platform."),Object(n.b)("p",null,"Redis Node.js has two primary clients available ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/NodeRedis/node_redis"}),"node_redis")," and ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/luin/ioredis"}),"ioredis"),". Both are available through npm. Both clients have pros and cons, but we generally suggest node_redis, as it has wide support for Redis modules, it is easily extensible and widely used. Ioredis has better integrated support for the Redis Enterprise Cluster API, but this is only relevant if you're specifically using ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://redislabs.com/redis-enterprise/technology/linear-scaling-redis-enterprise/"}),"the Cluster API topology")," instead of the more common Proxy topology. Node_redis\u2019 support for the Cluster API is provided by an additional shim, redis-clustr. Node_redis has built-in support for Redis Enterprise features such as ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://redislabs.com/redis-enterprise/technology/active-active-geo-distribution/"}),"Active Active geo distribution"),", allowing you to have one database that spans multiple clusters. Node_redis also supports Redis-on-Flash which enables extending your database into Flash SSD storage for warm values and DRAM for hot values. Nodejs redis enables you to integrate such features."),Object(n.b)("p",null,"The Node.js community has built many client libraries that you can find ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://redis.io/clients#nodejs"}),"here"),".\nFor your first steps with Node.js and Redis, this article will show how to use the recommended libraries: ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/luin/ioredis"}),"ioredis")," and ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/NodeRedis/node-redis"}),"node-redis"),"."),Object(n.b)(s.a,{defaultValue:"ioredis",values:[{label:"IO redis",value:"ioredis"},{label:"Node Redis",value:"node_redis"}],mdxType:"Tabs"},Object(n.b)(o.a,{value:"ioredis",mdxType:"TabItem"},Object(n.b)("h4",{id:"step-1-install-the-ioredis-library-using-npm-or-yarn"},"Step 1. Install the ioredis library using ",Object(n.b)("inlineCode",{parentName:"h4"},"npm")," (or ",Object(n.b)("inlineCode",{parentName:"h4"},"yarn"),")"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"})," npm install ioredis\n")),Object(n.b)("h4",{id:"step-2-write-your-application-code"},"Step 2. Write your application code"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),' const Redis = require("ioredis");\n const redis = new Redis(6379, "localhost");\n\n redis.set("mykey", "Hello from io-redis!");\n redis.get("mykey", function(err, result){\n     if (err) { throw err; }\n \n     console.log(result);\n });\n\n // use the promise instead of callback\n redis.get("mykey").then(function (result) {\n     console.log(result);\n });\n\n redis.zadd("vehicles", 0, "car", 0, "bike");\n redis.zrange("vehicles", 0, -1, "WITHSCORES").then((res) => console.log(res));\n\n')),Object(n.b)("p",null,'Find more information about Redis & io-redis connections in the "',Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/redis-developer/redis-connect/tree/master/node.js/ioredis"}),"Redis Connect"),'" repository.')),Object(n.b)(o.a,{value:"node_redis",mdxType:"TabItem"},Object(n.b)("h4",{id:"step-1-install-the-redis-library-using-npm-or-yarn"},"Step 1. Install the Redis library using ",Object(n.b)("inlineCode",{parentName:"h4"},"npm")," (or ",Object(n.b)("inlineCode",{parentName:"h4"},"yarn"),")"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"  npm install redis\n")),Object(n.b)("h4",{id:"step-2-write-your-application-code-1"},"Step 2. Write your application code"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'  const redis = require("redis");\n  \n  const client = redis.createClient ({\n      port : 6379,\n      host : "localhost"\n  });\n\n  client.set("mykey", "Hello from node-redis!");\n  client.get("mykey", function(err, result){\n      if (err) { throw err; }\n  \n      console.log(result);\n  });\n\n  const vehiclesData = ["vehicles", 4, "car", 2, "bike"];\n  client.zadd(vehiclesData, function(addError, addResponse) {\n      if (addError) { throw addError; }\n\n      console.log("added " + addResponse + " items.");\n\n      const query = ["vehicles", 0, -1];\n      client.zrange(query, function(rangeError, rangeResponse) {\n          if (rangeError) {throw rangeError;}\n          console.log("vehicles", rangeResponse);\n      });\n  });\n\n')),Object(n.b)("p",null,'Find more information about Redis & node-redis connections in the "',Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/redis-developer/redis-connect/tree/master/node.js/node-redis"}),"Redis Connect"),'" repository.'))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"redis-marketplace"},"Redis Marketplace"),Object(n.b)("p",null,"Redis Marketplace is like an \u201cApp Store\u201d for Redis sample apps. You can easily find apps for your preferred frameworks and languages.\nBelow are few of these apps. ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://marketplace.redislabs.com"}),"Click here to access the complete lists of apps"),"."),Object(n.b)("div",{class:"row text--center"},Object(n.b)("div",{class:"col "},Object(n.b)("div",{className:"ri-container"},Object(n.b)("h4",{id:"hacker-news-clone-in-nodejs"},"Hacker News Clone in NodeJS"),Object(n.b)("p",null,Object(n.b)("img",{alt:"marketplace",src:a(549).default})),Object(n.b)("p",null,Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://marketplace.redislabs.com/?id=project%3Aredis-hacker-news-demo"}),"A Hacker News Clone project")," built in NextJS, NodeJS and Express based on RediSearch & RedisJSON"))),Object(n.b)("div",{class:"col"},Object(n.b)("div",{className:"ri-container"},Object(n.b)("h4",{id:"shopping-cart-app-in-nodejs"},"Shopping Cart app in NodeJS"),Object(n.b)("p",null,Object(n.b)("img",{alt:"marketplace",src:a(550).default})),Object(n.b)("p",null,Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://marketplace.redislabs.com/?id=project%3Abasic-redis-shopping-chart-nodejs"}),"Shopping Cart app in NodeJS")," module functionalities")))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"more-developer-resources"},"More Developer Resources"),Object(n.b)("div",{class:"row"},Object(n.b)("div",{class:"col"},Object(n.b)("h4",{id:"sample-code"},"Sample Code"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},Object(n.b)("a",Object(r.a)({parentName:"strong"},{href:"https://developer.redislabs.com/howtos/caching/"}),"Basic Redis Caching")),"\nThis application calls the GitHub API and caches the results into Redis."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},Object(n.b)("a",Object(r.a)({parentName:"strong"},{href:"https://developer.redislabs.com/howtos/ratelimiting/"}),"Redis Rate-Limiting")),"\nThis is a very simple app that demonstrates rate-limiting feature using Redis."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},Object(n.b)("a",Object(r.a)({parentName:"strong"},{href:"https://github.com/redis-developer/redis-websockets-vue-notifications"}),"Notifications with WebSocket, Vue & Redis")),"\nThis project allows you to push notifications in a Vue application from a Redis ",Object(n.b)("inlineCode",{parentName:"p"},"PUBLISH")," using WebSockets.")),Object(n.b)("div",{class:"col"},Object(n.b)("h4",{id:"technical-articles--videos"},"Technical Articles & Videos"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},Object(n.b)("a",Object(r.a)({parentName:"strong"},{href:"https://www.youtube.com/watch?v=H6rikGCYPUk"}),"Redis Rapid Tips: ioredis"))," (YouTube)"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},Object(n.b)("a",Object(r.a)({parentName:"strong"},{href:"https://www.youtube.com/watch?v=dukkMLbzPfA"}),"Mapping Objects between Node and Redis"))," (YouTube)"))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"redis-university"},"Redis University"),Object(n.b)("h3",{id:"redis-for-javascript-developers"},Object(n.b)("a",Object(r.a)({parentName:"h3"},{href:"https://university.redislabs.com/courses/ru102js/"}),"Redis for JavaScript Developers")),Object(n.b)("p",null,"Build full-fledged Redis applications with Node.js and Express."),Object(n.b)("div",{class:"text--center"},Object(n.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/Ik1WXPX3WNU",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})))}b.isMDXComponent=!0},205:function(e,t,a){"use strict";var r=a(0),i=a.n(r),n=a(203),s=a(211);a(204),a(55);t.a=function(e){var t=i.a.useState(!1),a=t[0],r=t[1];return i.a.createElement("div",{className:"ri-container"},i.a.createElement("div",{className:"ri-description-short"},i.a.createElement("div",{className:"ri-icon"},i.a.createElement("span",{className:"fe fe-zap"})),i.a.createElement("div",{className:"ri-detail"},i.a.createElement("div",{className:"ri-title"},i.a.createElement("a",{href:e.page},e.title)),i.a.createElement("div",{className:"ri-description"},e.description,i.a.Children.count(e.children)>0&&i.a.createElement("span",{className:"ri-more fe fe-more-horizontal",onClick:function(){return r(!a)}})))),a&&i.a.createElement("div",{className:"ri-description-long"},i.a.createElement(n.a,{components:s.a},e.children)))}},206:function(e,t,a){"use strict";var r=a(0),i=a(207);t.a=function(){var e=Object(r.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},207:function(e,t,a){"use strict";var r=a(0),i=Object(r.createContext)(void 0);t.a=i},208:function(e,t,a){"use strict";var r=a(0),i=a.n(r),n=a(206),s=a(210),o=a(56),c=a.n(o),l=37,d=39;t.a=function(e){var t=e.lazy,a=e.block,o=e.defaultValue,p=e.values,b=e.groupId,u=e.className,h=Object(n.a)(),m=h.tabGroupChoices,j=h.setTabGroupChoices,f=Object(r.useState)(o),g=f[0],v=f[1],O=r.Children.toArray(e.children);if(null!=b){var N=m[b];null!=N&&N!==g&&p.some((function(e){return e.value===N}))&&v(N)}var y=function(e){v(e),null!=b&&j(b,e)},w=[];return i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":a},u)},p.map((function(e){var t=e.value,a=e.label;return i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===t,className:Object(s.a)("tabs__item",c.a.tabItem,{"tabs__item--active":g===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case d:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return y(t)},onClick:function(){y(t)}},a)}))),t?Object(r.cloneElement)(O.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},O.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},209:function(e,t,a){"use strict";var r=a(3),i=a(0),n=a.n(i);t.a=function(e){var t=e.children,a=e.hidden,i=e.className;return n.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:a,className:i}),t)}},549:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/hackernews-73e1b7f0eee041728f33d22bf65e7bbb.png"},550:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/shoppingcartnodejs-b53d75830ff124d1c50f7624e43c6147.png"}}]);