"use strict";(self.webpackChunkzkbnb_docs=self.webpackChunkzkbnb_docs||[]).push([[1973],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),b=i,m=u["".concat(l,".").concat(b)]||u[b]||d[b]||a;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},21264:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const a={title:"zkBNB Reactjs Integration Example",id:"reactjs-integration-example",tags:["zkbnb-web-sdk"],keywords:["zkbnb-dx"]},o="Quickstart",s={unversionedId:"sdks/tutorials/reactjs-integration-example/reactjs-integration-example",id:"sdks/tutorials/reactjs-integration-example/reactjs-integration-example",title:"zkBNB Reactjs Integration Example",description:"To quickly get started building your website or integration the zkBNB, you can reference the zkbnb-reactjs-integration-example repository, which is a great starting point for beginners and experienced web3 developers alike. This repository is set up with Reactjs and provides some use cases examples.",source:"@site/docs/sdks/tutorials/reactjs-integration-example/index.md",sourceDirName:"sdks/tutorials/reactjs-integration-example",slug:"/sdks/tutorials/reactjs-integration-example/",permalink:"/zkBNB-docs/docs/sdks/tutorials/reactjs-integration-example/",draft:!1,editUrl:"https://github.com/RumeelHussainbnb/zkBNB-docs/docs/sdks/tutorials/reactjs-integration-example/index.md",tags:[{label:"zkbnb-web-sdk",permalink:"/zkBNB-docs/docs/tags/zkbnb-web-sdk"}],version:"current",frontMatter:{title:"zkBNB Reactjs Integration Example",id:"reactjs-integration-example",tags:["zkbnb-web-sdk"],keywords:["zkbnb-dx"]},sidebar:"sdkSidebar",previous:{title:"zkBNB Web SDK",permalink:"/zkBNB-docs/docs/sdks/zkbnb-web-sdk/quickstart"}},l={},p=[{value:"Step 1: Clone the boilerplate repository",id:"step-1-clone-the-boilerplate-repository",level:2},{value:"Step 2: Install dependencies",id:"step-2-install-dependencies",level:2},{value:"Step 3: Run the application",id:"step-3-run-the-application",level:2},{value:"Step 4: View and Operate it in the Browser",id:"step-4-view-and-operate-it-in-the-browser",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"quickstart"},"Quickstart"),(0,i.kt)("p",null,"To quickly get started building your website or integration the zkBNB, you can reference the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/zkbnb-reactjs-integration-example"},"zkbnb-reactjs-integration-example")," repository, which is a great starting point for beginners and experienced web3 developers alike. This repository is set up with Reactjs and provides some use cases examples."),(0,i.kt)("h2",{id:"step-1-clone-the-boilerplate-repository"},"Step 1: Clone the boilerplate repository"),(0,i.kt)("p",null,"Clone ",(0,i.kt)("em",{parentName:"p"},"zkbnb-reactjs-integration-example")," repository from Github to your local machine using the following command:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"git clone https://github.com/bnb-chain/zkbnb-reactjs-integration-example.git")),(0,i.kt)("h2",{id:"step-2-install-dependencies"},"Step 2: Install dependencies"),(0,i.kt)("p",null,"Once you have the repository on your local machine, you can install the dependencies using the following command:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"npm install")),(0,i.kt)("h2",{id:"step-3-run-the-application"},"Step 3: Run the application"),(0,i.kt)("p",null,"To run the application, use the following command:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"npm start")),(0,i.kt)("h2",{id:"step-4-view-and-operate-it-in-the-browser"},"Step 4: View and Operate it in the Browser"),(0,i.kt)("p",null,"Once the application is running, you can open ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:3000")," to view it in the browser."))}u.isMDXComponent=!0}}]);