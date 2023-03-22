(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[745],{8535:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/viewdataset",function(){return a(8921)}])},5930:function(e,t,a){"use strict";a.d(t,{Z:function(){return k}});var s=a(5893),n=a(1555),r=a(4184),i=a.n(r),o=a(7294),d=a(6792),c=a(6611),l=a(9602);let u=o.forwardRef(({bsPrefix:e,className:t,variant:a,as:n="img",...r},o)=>{let c=(0,d.vE)(e,"card-img");return(0,s.jsx)(n,{ref:o,className:i()(a?`${c}-${a}`:c,t),...r})});u.displayName="CardImg";var p=a(9059);let m=o.forwardRef(({bsPrefix:e,className:t,as:a="div",...n},r)=>{let c=(0,d.vE)(e,"card-header"),l=(0,o.useMemo)(()=>({cardHeaderBsPrefix:c}),[c]);return(0,s.jsx)(p.Z.Provider,{value:l,children:(0,s.jsx)(a,{ref:r,...n,className:i()(t,c)})})});m.displayName="CardHeader";let y=(0,l.Z)("h5"),b=(0,l.Z)("h6"),f=(0,c.Z)("card-body"),h=(0,c.Z)("card-title",{Component:y}),x=(0,c.Z)("card-subtitle",{Component:b}),j=(0,c.Z)("card-link",{Component:"a"}),w=(0,c.Z)("card-text",{Component:"p"}),v=(0,c.Z)("card-footer"),T=(0,c.Z)("card-img-overlay"),Z=o.forwardRef(({bsPrefix:e,className:t,bg:a,text:n,border:r,body:o,children:c,as:l="div",...u},p)=>{let m=(0,d.vE)(e,"card");return(0,s.jsx)(l,{ref:p,...u,className:i()(t,m,a&&`bg-${a}`,n&&`text-${n}`,r&&`border-${r}`),children:o?(0,s.jsx)(f,{children:c}):c})});Z.displayName="Card",Z.defaultProps={body:!1};var N=Object.assign(Z,{Img:u,Title:h,Subtitle:x,Body:f,Link:j,Text:w,Header:m,Footer:v,ImgOverlay:T}),g=a(1664),E=a.n(g);let S=e=>{let{id:t,category:a,name:r,price:i}=e;return(0,s.jsx)(n.Z,{xs:12,sm:12,md:6,lg:4,xl:3,className:"mb-4",children:(0,s.jsx)(E(),{href:"/viewdataset?id=".concat(t),children:(0,s.jsxs)(N,{children:[(0,s.jsx)(N.Header,{className:"pt-3",children:(0,s.jsx)("div",{className:"".concat(a.toLowerCase(),"Container pt-4")})}),(0,s.jsxs)(N.Footer,{className:"pt-4 pb-2 ps-4",children:[(0,s.jsx)("p",{className:"lead",children:r}),(0,s.jsx)("p",{className:"smalltext",children:a}),(0,s.jsx)("button",{className:"chip",children:0===i?"FREE":i+" FLG"}),(0,s.jsx)("br",{})]})]})})})};var k=S},7468:function(e,t,a){"use strict";var s=a(5893),n=a(8893);let r=e=>{let{customMessage:t}=e;return(0,s.jsxs)("div",{className:"box text-center",children:[(0,s.jsx)("p",{className:"branding mb-4",children:t||n.Z.ErrorMessage}),(0,s.jsx)("i",{className:"fa-solid fa-circle-exclamation fa-4x"}),(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsxs)("button",{onClick:()=>window.history.back(),className:"btn mt-2 btnbox",children:[(0,s.jsx)("i",{className:"fa-solid fa-circle-arrow-left"}),"Go Back"]})]})};t.Z=r},3700:function(e,t){"use strict";var a,s;(s=a||(a={})).tokenContractAddress="0x9d46e816e10c6353Fcf7381343b053117641d472",s.vendorContractAddress="0xeF98846BF1e7F5f8c380F481701763650021A5d4",t.Z=a},2291:function(e,t,a){"use strict";a.d(t,{r:function(){return s}});let s=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"}]},8921:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return g}});var s=a(5893),n=a(7294),r=a(682),i=a(4051),o=a(7918),d=a.n(o),c=a(9548),l=a(7468),u=a(7891),p=a(6154),m=a(9063),y=a(1163);let b=e=>{let{id:t}=e,[a,s]=(0,n.useState)({id:"",name:"",description:"",category:"",price:0,dataLength:0,isLoaded:!1,hasError:!1}),r=(0,y.useRouter)(),i=async()=>{try{let e=await p.Z.post("".concat(m.Z.datasetViewEndpoint),{datasetId:t}),{_id:n,name:r,description:i,category:o,price:d}=e.data.metadata;s({...a,id:n,name:r,description:i,category:o,price:d,dataLength:e.data.dataLength,isLoaded:!0})}catch(e){e.response&&401===e.response.status&&(localStorage.removeItem("accessToken"),r.push("/")),s({...a,isLoaded:!0,hasError:!0})}};return(0,n.useEffect)(()=>{s({...a,isLoaded:!1}),i()},[t]),a};var f=a(6501),h=a(8893);let x=e=>{let{id:t,hasClickedSubscribed:a}=e,[s,r]=(0,n.useState)({isSubscribed:!1,subscriptionId:"",isLoaded:!1}),i=(0,y.useRouter)();return(0,n.useEffect)(()=>{(async()=>{try{let e=await p.Z.post("".concat(m.Z.checkSubscriptionEndpoint),{datasetId:t});r({isSubscribed:e.data.isSubscribed,subscriptionId:e.data.subscriptionId,isLoaded:!0})}catch(e){e.response&&401===e.response.status&&(localStorage.removeItem("accessToken"),i.push("/")),r({...s,isLoaded:!0}),f.Am.error(h.Z.ToastError)}})()},[t,a]),s},j=e=>{let{id:t}=e,[a,s]=(0,n.useState)({similarDatasets:[],isLoaded:!1}),r=(0,y.useRouter)(),i=async()=>{try{let e=await p.Z.post("".concat(m.Z.findsimilarDatasets),{datasetId:t});s({...a,similarDatasets:e.data.similarDatasets,isLoaded:!0})}catch(e){e.response&&401===e.response.status&&(localStorage.removeItem("accessToken"),r.push("/")),s({...a,isLoaded:!0}),f.ZP.error(h.Z.ToastError)}};return(0,n.useEffect)(()=>{i()},[]),a};var w=a(2291),v=a(3700),T=a(5930);let Z=new(d())(d().givenProvider),N=()=>{let[e,t]=(0,n.useState)(!1),a=(0,y.useRouter)(),{id:o}=a.query,d=b({id:o}),N=x({id:o,hasClickedSubscribed:e}),g=j({id:o}),[E,S]=(0,n.useState)(""),k=async()=>{if(0===d.price)try{await p.Z.post("".concat(m.Z.subscribeEndpoint),{id:o}),t(!0)}catch(e){f.Am.error(h.Z.ToastError)}else try{if(void 0!==window.ethereum)try{let e=await window.ethereum.request({method:"eth_requestAccounts"});S(e[0]);let a=new Z.eth.Contract(w.r,v.Z.tokenContractAddress);await a.methods.transfer(v.Z.tokenContractAddress,Z.utils.toWei(d.price.toString(),"ether")).send({from:E}),await p.Z.post("".concat(m.Z.subscribeEndpoint,"/").concat(o)),t(!0)}catch(e){f.Am.error("Unable to connect to metamask")}else f.Am.error("Please install metamask")}catch(e){f.Am.error("Please install metamask")}},L=g.similarDatasets.map(e=>(0,s.jsx)(T.Z,{id:e._id,category:e.category,name:e.name,price:e.price},e._id));return(0,s.jsxs)(n.Fragment,{children:[(0,s.jsxs)(u.Z,{condition:d.isLoaded&&N.isLoaded,children:[(0,s.jsx)(u.Z,{condition:!d.hasError,children:(0,s.jsxs)(r.Z,{className:"mt-4",children:[(0,s.jsxs)("div",{className:"jumbotron",children:[(0,s.jsx)("p",{className:"display-4 text-capitalize",children:d.name}),(0,s.jsxs)("div",{className:"chip-grid",children:[(0,s.jsx)("button",{className:"chip me-3",children:d.category}),(0,s.jsx)("button",{className:"chip me-3",children:0===d.price?"FREE":"".concat(d.price," LST")}),(0,s.jsxs)("button",{className:"chip",children:[d.dataLength," Datapoints"]}),(0,s.jsx)("br",{})]}),(0,s.jsx)("p",{className:"smalltext",children:d.description}),(0,s.jsxs)("button",{disabled:N.isSubscribed,className:"btn",onClick:k,children:[N.isSubscribed?"Subscribed":"Subscribe",N.isSubscribed?(0,s.jsx)("i",{className:"fa-solid fa-circle-check fa-white"}):(0,s.jsx)("i",{className:"fa-solid fa-circle-plus"})]}),!N.isSubscribed&&(0,s.jsxs)("a",{target:"_blank",rel:"noreferrer",href:"".concat(m.Z.datasetPreview,"/").concat(o),className:"btn",children:["Preview Data",(0,s.jsx)("i",{className:"fa-solid fa-circle-arrow-right"})]}),N.isSubscribed&&(0,s.jsxs)("a",{target:"_blank",rel:"noreferrer",href:"".concat(m.Z.datasetFullview,"/").concat(o,"/").concat(N.subscriptionId),className:"btn",children:["View Data - Full",(0,s.jsx)("i",{className:"fa-solid fa-circle-arrow-right"})]})]}),(0,s.jsxs)(i.Z,{children:[(0,s.jsx)("p",{className:"lead text-center text-white mb-4",children:"Similar Datasets"}),L]})]})}),(0,s.jsx)(u.Z,{condition:d.hasError,children:(0,s.jsx)(l.Z,{})})]}),(0,s.jsx)(u.Z,{condition:!d.isLoaded||!N.isLoaded,children:(0,s.jsx)(c.Z,{})})]})};var g=N},4051:function(e,t,a){"use strict";var s=a(4184),n=a.n(s),r=a(7294),i=a(6792),o=a(5893);let d=r.forwardRef(({bsPrefix:e,className:t,as:a="div",...s},r)=>{let d=(0,i.vE)(e,"row"),c=(0,i.pi)(),l=(0,i.zG)(),u=`${d}-cols`,p=[];return c.forEach(e=>{let t;let a=s[e];delete s[e],null!=a&&"object"==typeof a?{cols:t}=a:t=a;let n=e!==l?`-${e}`:"";null!=t&&p.push(`${u}${n}-${t}`)}),(0,o.jsx)(a,{ref:r,...s,className:n()(t,d,...p)})});d.displayName="Row",t.Z=d}},function(e){e.O(0,[543,774,888,179],function(){return e(e.s=8535)}),_N_E=e.O()}]);