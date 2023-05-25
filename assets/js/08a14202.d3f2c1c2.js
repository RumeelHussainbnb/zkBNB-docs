"use strict";(self.webpackChunkzkbnb_docs=self.webpackChunkzkbnb_docs||[]).push([[3184],{95327:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>u,contentTitle:()=>g,default:()=>b,frontMatter:()=>d,metadata:()=>y,toc:()=>f});var a=s(87462),i=(s(67294),s(3905)),r=s(26389),n=s(94891),m=s(75190),o=s(47507),l=s(24310),p=s(63303),c=(s(75035),s(85162));const d={id:"get-assets",title:"Get assets",description:"Get assets",sidebar_label:"Get assets",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Asset"],operationId:"GetAssets",parameters:[{name:"offset",in:"query",description:"The query offset to get some specific range of the asset list data.",required:!0,schema:{type:"integer",format:"int32"}},{name:"limit",in:"query",description:"The query limit size to get some specific range of the asset list data.",required:!0,schema:{type:"integer",format:"int32"}}],responses:{200:{description:"A successful response.",content:{"application/json":{schema:{title:"Assets",required:["assets","total"],type:"object",properties:{code:{type:"integer",format:"int32"},message:{type:"string"},total:{type:"integer",format:"int32"},assets:{type:"array",items:{title:"Asset",required:["address","decimals","icon","id","is_gas_asset","name","price","symbol"],type:"object",properties:{code:{type:"integer",format:"int32"},message:{type:"string"},id:{type:"integer",format:"int32"},name:{type:"string"},decimals:{type:"integer",format:"int32"},symbol:{type:"string"},address:{type:"string"},price:{type:"string"},is_gas_asset:{type:"integer",format:"int32"},icon:{type:"string"}}}}}}}}}},description:"Get assets",method:"get",path:"/api/v1/assets",servers:[{url:"https://testapi.zkbnbchain.org/"}],info:{title:"ZKBNB API Document",description:"Public APIs for zkbnb",version:"1.0"},postman:{name:"Get assets",description:{type:"text/plain"},url:{path:["api","v1","assets"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) The query offset to get some specific range of the asset list data.",type:"text/plain"},key:"offset",value:""},{disabled:!1,description:{content:"(Required) The query limit size to get some specific range of the asset list data.",type:"text/plain"},key:"limit",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/zkbnb/zkbnb-api-document",custom_edit_url:null},g=void 0,y={unversionedId:"zkbnb/get-assets",id:"zkbnb/get-assets",title:"Get assets",description:"Get assets",source:"@site/docs/zkbnb/get-assets.api.mdx",sourceDirName:"zkbnb",slug:"/zkbnb/get-assets",permalink:"/zkbnb-docs/docs/zkbnb/get-assets",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-assets",title:"Get assets",description:"Get assets",sidebar_label:"Get assets",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Asset"],operationId:"GetAssets",parameters:[{name:"offset",in:"query",description:"The query offset to get some specific range of the asset list data.",required:!0,schema:{type:"integer",format:"int32"}},{name:"limit",in:"query",description:"The query limit size to get some specific range of the asset list data.",required:!0,schema:{type:"integer",format:"int32"}}],responses:{200:{description:"A successful response.",content:{"application/json":{schema:{title:"Assets",required:["assets","total"],type:"object",properties:{code:{type:"integer",format:"int32"},message:{type:"string"},total:{type:"integer",format:"int32"},assets:{type:"array",items:{title:"Asset",required:["address","decimals","icon","id","is_gas_asset","name","price","symbol"],type:"object",properties:{code:{type:"integer",format:"int32"},message:{type:"string"},id:{type:"integer",format:"int32"},name:{type:"string"},decimals:{type:"integer",format:"int32"},symbol:{type:"string"},address:{type:"string"},price:{type:"string"},is_gas_asset:{type:"integer",format:"int32"},icon:{type:"string"}}}}}}}}}},description:"Get assets",method:"get",path:"/api/v1/assets",servers:[{url:"https://testapi.zkbnbchain.org/"}],info:{title:"ZKBNB API Document",description:"Public APIs for zkbnb",version:"1.0"},postman:{name:"Get assets",description:{type:"text/plain"},url:{path:["api","v1","assets"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"(Required) The query offset to get some specific range of the asset list data.",type:"text/plain"},key:"offset",value:""},{disabled:!1,description:{content:"(Required) The query limit size to get some specific range of the asset list data.",type:"text/plain"},key:"limit",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/zkbnb/zkbnb-api-document",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Get asset",permalink:"/zkbnb-docs/docs/zkbnb/get-asset"},next:{title:"Get block by its height or commitment",permalink:"/zkbnb-docs/docs/zkbnb/get-block"}},u={},f=[{value:"Get assets",id:"get-assets",level:2}],h={toc:f};function b(e){let{components:t,...s}=e;return(0,i.kt)("wrapper",(0,a.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"get-assets"},"Get assets"),(0,i.kt)("p",null,"Get assets"),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Query Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(m.Z,{className:"paramsItem",param:{name:"offset",in:"query",description:"The query offset to get some specific range of the asset list data.",required:!0,schema:{type:"integer",format:"int32"}},mdxType:"ParamsItem"}),(0,i.kt)(m.Z,{className:"paramsItem",param:{name:"limit",in:"query",description:"The query limit size to get some specific range of the asset list data.",required:!0,schema:{type:"integer",format:"int32"}},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)(r.Z,{mdxType:"ApiTabs"},(0,i.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"A successful response.")),(0,i.kt)("div",null,(0,i.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(p.Z,{mdxType:"SchemaTabs"},(0,i.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!1,name:"code",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"total",required:!0,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"assets"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.kt)(l.Z,{collapsible:!1,name:"code",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"id",required:!0,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"decimals",required:!0,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"symbol",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"address",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"price",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"is_gas_asset",required:!0,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"icon",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,i.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(o.Z,{responseExample:'{\n  "code": 0,\n  "message": "string",\n  "total": 0,\n  "assets": [\n    {\n      "code": 0,\n      "message": "string",\n      "id": 0,\n      "name": "string",\n      "decimals": 0,\n      "symbol": "string",\n      "address": "string",\n      "price": "string",\n      "is_gas_asset": 0,\n      "icon": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);