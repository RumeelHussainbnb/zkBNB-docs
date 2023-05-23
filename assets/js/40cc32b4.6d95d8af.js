"use strict";(self.webpackChunkzkbnb_docs=self.webpackChunkzkbnb_docs||[]).push([[673],{64467:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>x,contentTitle:()=>f,default:()=>h,frontMatter:()=>m,metadata:()=>u,toc:()=>b});var i=n(87462),a=(n(67294),n(3905)),o=n(26389),s=n(94891),r=n(75190),c=n(47507),p=n(24310),l=n(63303),d=(n(75035),n(85162));const m={id:"get-nft-next-nonce",title:"Get nft next nonce",description:"Get nft next nonce",sidebar_label:"Get nft next nonce",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Nft"],operationId:"GetNftNextNonce",parameters:[{name:"nft_index",in:"query",description:"The nft index query condition for getting the next nonce data.",required:!0,schema:{type:"integer",format:"int64"}}],responses:{200:{description:"A successful response.",content:{"application/json":{schema:{title:"NextNonce",required:["nonce"],type:"object",properties:{code:{type:"integer",format:"int32"},message:{type:"string"},nonce:{type:"integer",format:"int64"}}}}}}},description:"Get nft next nonce",method:"get",path:"/api/v1/nftNextNonce",servers:[{url:"https://testapi.zkbnbchain.org/"}],info:{title:"ZKBNB API Document",description:"Public APIs for zkbnb",version:"1.0"},postman:{name:"Get nft next nonce",description:{type:"text/plain"},url:{path:["api","v1","nftNextNonce"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) The nft index query condition for getting the next nonce data.",type:"text/plain"},key:"nft_index",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/zkbnb/zkbnb-api-document",custom_edit_url:null},f=void 0,u={unversionedId:"zkbnb/get-nft-next-nonce",id:"zkbnb/get-nft-next-nonce",title:"Get nft next nonce",description:"Get nft next nonce",source:"@site/docs/zkbnb/get-nft-next-nonce.api.mdx",sourceDirName:"zkbnb",slug:"/zkbnb/get-nft-next-nonce",permalink:"/docs/zkbnb/get-nft-next-nonce",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-nft-next-nonce",title:"Get nft next nonce",description:"Get nft next nonce",sidebar_label:"Get nft next nonce",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Nft"],operationId:"GetNftNextNonce",parameters:[{name:"nft_index",in:"query",description:"The nft index query condition for getting the next nonce data.",required:!0,schema:{type:"integer",format:"int64"}}],responses:{200:{description:"A successful response.",content:{"application/json":{schema:{title:"NextNonce",required:["nonce"],type:"object",properties:{code:{type:"integer",format:"int32"},message:{type:"string"},nonce:{type:"integer",format:"int64"}}}}}}},description:"Get nft next nonce",method:"get",path:"/api/v1/nftNextNonce",servers:[{url:"https://testapi.zkbnbchain.org/"}],info:{title:"ZKBNB API Document",description:"Public APIs for zkbnb",version:"1.0"},postman:{name:"Get nft next nonce",description:{type:"text/plain"},url:{path:["api","v1","nftNextNonce"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) The nft index query condition for getting the next nonce data.",type:"text/plain"},key:"nft_index",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/zkbnb/zkbnb-api-document",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Get max nft offer id for a specific account",permalink:"/docs/zkbnb/get-max-offer-id"},next:{title:"update nft metadata by nft_index",permalink:"/docs/zkbnb/update-nft-by-index"}},x={},b=[{value:"Get nft next nonce",id:"get-nft-next-nonce",level:2}],g={toc:b};function h(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"get-nft-next-nonce"},"Get nft next nonce"),(0,a.kt)("p",null,"Get nft next nonce"),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Query Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(r.Z,{className:"paramsItem",param:{name:"nft_index",in:"query",description:"The nft index query condition for getting the next nonce data.",required:!0,schema:{type:"integer",format:"int64"}},mdxType:"ParamsItem"})))),(0,a.kt)("div",null,(0,a.kt)(o.Z,{mdxType:"ApiTabs"},(0,a.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"A successful response.")),(0,a.kt)("div",null,(0,a.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(l.Z,{mdxType:"SchemaTabs"},(0,a.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(p.Z,{collapsible:!1,name:"code",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"nonce",required:!0,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"},mdxType:"SchemaItem"})))),(0,a.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(c.Z,{responseExample:'{\n  "code": 0,\n  "message": "string",\n  "nonce": 0\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}h.isMDXComponent=!0}}]);