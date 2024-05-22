"use strict";(self.webpackChunkodysee_docs=self.webpackChunkodysee_docs||[]).push([[253],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>y});var r=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(o),y=a,h=m["".concat(i,".").concat(y)]||m[y]||u[y]||n;return o?r.createElement(h,l(l({ref:t},c),{},{components:o})):r.createElement(h,l({ref:t},c))}));function y(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,l=new Array(n);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var p=2;p<n;p++)l[p]=o[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},86003:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var r=o(87462),a=(o(67294),o(3905));const n={sidebar_position:5,description:"Odysee records livestreams. This is how to upload them.",sidebar_custom_props:{cardThumbnail:"/img/g_1200x600_Transparent_Placeholder.png",cardSize:4,thumbnailLocation:"top",tileColor:"orange"}},l="Uploading Replays",s={unversionedId:"category-livestreaming/replays",id:"category-livestreaming/replays",title:"Uploading Replays",description:"Odysee records livestreams. This is how to upload them.",source:"@site/docs/category-livestreaming/replays.mdx",sourceDirName:"category-livestreaming",slug:"/category-livestreaming/replays",permalink:"/category-livestreaming/replays",draft:!1,editUrl:"https://github.com/OdyseeTeam/odysee-docs/edit/main/docs/category-livestreaming/replays.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,description:"Odysee records livestreams. This is how to upload them.",sidebar_custom_props:{cardThumbnail:"/img/g_1200x600_Transparent_Placeholder.png",cardSize:4,thumbnailLocation:"top",tileColor:"orange"}},sidebar:"helphub",previous:{title:"Reusing the Stream Server/Key",permalink:"/category-livestreaming/streaminfo"},next:{title:"Playlists",permalink:"/category-playlists/"}},i={},p=[],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"uploading-replays"},"Uploading Replays"),(0,a.kt)("p",null,"At this time, there's no option to automatically publish livestream replays."),(0,a.kt)("p",null,'To publish a previous livestream that has been saved as a replay in your Odysee account, you must return to the "Go Live" page in your Odysee account to select one of the options where you want to publish the replay to your channel.'),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(95048).Z,width:"1370",height:"802"})),(0,a.kt)("p",null,"From here, you'll select ",(0,a.kt)("strong",{parentName:"p"},"Choose Replay"),". If no replays appear, you can refresh by selecting ",(0,a.kt)("strong",{parentName:"p"},"Check for Replays"),"."),(0,a.kt)("p",null,'In the "Choose Replay" tab, you will select the replay of the previous livestream you want to publish, enter the requested information in the form, and then publish the replay by clicking the "Create" button at the bottom of the page.'),(0,a.kt)("h1",{id:"post-replay-from-livestream-post"},"Post replay from livestream post"),(0,a.kt)("p",null,"Do you want to post a replay of a previous livestream with the same URL you used for the livestream post? Take a look."),(0,a.kt)("admonition",{title:"Note:",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"For this option, you can only publish a replay post with the same URL once. This is because it is the same livestream post published previously. You can edit the post and even replace the video, but you can't change the URL.")),(0,a.kt)("p",null,"A livestream post has a custom URL created by you, which you can use to post a replay. The original post you used in the livestream also saves the chat which is then published as comments on the post. However, if you choose to post a replay independently (another post/URL) the chat will not display as comments."),(0,a.kt)("p",null,'To publish a replay with the same URL you must go to the "Local setup" tab on the "Go Live" page and follow these steps:'),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://thumbs.odycdn.com/b17f6832fb4e77e63718a649cccf5f17.webp",alt:null})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click on the livestream post."),(0,a.kt)("li",{parentName:"ol"},'Click on the "Update or Publish Replay" button.'),(0,a.kt)("li",{parentName:"ol"},'In the form select the "Use Replay" option.'),(0,a.kt)("li",{parentName:"ol"},"Optional: You can upload a replay manually from your device."),(0,a.kt)("li",{parentName:"ol"},'If everything is correct in the form, click on the "Save" button.')),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://thumbs.odycdn.com/29de2849511dae624eae40a2e2bc426f.webp",alt:null})),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://thumbs.odycdn.com/f2a229180dd741f335537d8e5a82cffa.webp",alt:null})),(0,a.kt)("p",null,"After a few minutes the post with the replay will be published on your channel."),(0,a.kt)("admonition",{title:"Note:",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"In some cases Replays may cause recording or processing errors. You can email us ",(0,a.kt)("a",{parentName:"p",href:"mailto:hello@odysee.com"},"hello@odysee.com")," so we can help you. Additionally, it is not possible to merge multiple Replays for a single post. You must publish each Replay separately.")))}u.isMDXComponent=!0},95048:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/category-livestreaming11-8dd798063dd390a5a729b52e58b1df38.png"}}]);