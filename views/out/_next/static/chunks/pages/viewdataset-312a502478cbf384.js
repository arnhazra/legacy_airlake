(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[745],{8535:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/viewdataset",function(){return a(5856)}])},5930:function(e,t,a){"use strict";a.d(t,{Z:function(){return L}});var n=a(5893),s=a(1555),r=a(4184),i=a.n(r),d=a(7294),o=a(6792),c=a(6611),l=a(9602);let u=d.forwardRef(({bsPrefix:e,className:t,variant:a,as:s="img",...r},d)=>{let c=(0,o.vE)(e,"card-img");return(0,n.jsx)(s,{ref:d,className:i()(a?`${c}-${a}`:c,t),...r})});u.displayName="CardImg";var p=a(9059);let m=d.forwardRef(({bsPrefix:e,className:t,as:a="div",...s},r)=>{let c=(0,o.vE)(e,"card-header"),l=(0,d.useMemo)(()=>({cardHeaderBsPrefix:c}),[c]);return(0,n.jsx)(p.Z.Provider,{value:l,children:(0,n.jsx)(a,{ref:r,...s,className:i()(t,c)})})});m.displayName="CardHeader";let y=(0,l.Z)("h5"),b=(0,l.Z)("h6"),h=(0,c.Z)("card-body"),f=(0,c.Z)("card-title",{Component:y}),x=(0,c.Z)("card-subtitle",{Component:b}),v=(0,c.Z)("card-link",{Component:"a"}),j=(0,c.Z)("card-text",{Component:"p"}),w=(0,c.Z)("card-footer"),Z=(0,c.Z)("card-img-overlay"),T=d.forwardRef(({bsPrefix:e,className:t,bg:a,text:s,border:r,body:d,children:c,as:l="div",...u},p)=>{let m=(0,o.vE)(e,"card");return(0,n.jsx)(l,{ref:p,...u,className:i()(t,m,a&&`bg-${a}`,s&&`text-${s}`,r&&`border-${r}`),children:d?(0,n.jsx)(h,{children:c}):c})});T.displayName="Card",T.defaultProps={body:!1};var N=Object.assign(T,{Img:u,Title:f,Subtitle:x,Body:h,Link:v,Text:j,Header:m,Footer:w,ImgOverlay:Z}),g=a(1664),E=a.n(g);let k=e=>{let{id:t,category:a,name:r,price:i}=e;return(0,n.jsx)(s.Z,{xs:6,sm:6,md:4,lg:3,xl:2,className:"mb-4",children:(0,n.jsx)(E(),{href:"/viewdataset?id=".concat(t),children:(0,n.jsxs)(N,{children:[(0,n.jsx)(N.Header,{className:"pt-3",children:(0,n.jsx)("div",{className:"".concat(a.toLowerCase(),"Container pt-4")})}),(0,n.jsxs)(N.Footer,{className:"pt-4 pb-2 ps-4",children:[(0,n.jsx)("div",{className:"nameContainer",children:(0,n.jsx)("p",{className:"lead",children:r})}),(0,n.jsx)("p",{className:"smalltext",children:a})]})]})})})};var L=k},7468:function(e,t,a){"use strict";var n=a(5893),s=a(8893);let r=e=>{let{customMessage:t}=e;return(0,n.jsxs)("div",{className:"box text-center",children:[(0,n.jsx)("p",{className:"branding mb-4",children:t||s.Z.ErrorMessage}),(0,n.jsx)("i",{className:"fa-solid fa-circle-exclamation fa-4x"}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsxs)("button",{onClick:()=>window.history.back(),className:"btn mt-2 btnbox",children:[(0,n.jsx)("i",{className:"fa-solid fa-circle-arrow-left"}),"Go Back"]})]})};t.Z=r},3700:function(e,t){"use strict";var a,n;(n=a||(a={})).tokenContractAddress="0x9d46e816e10c6353Fcf7381343b053117641d472",n.vendorContractAddress="0xeF98846BF1e7F5f8c380F481701763650021A5d4",t.Z=a},2291:function(e,t,a){"use strict";a.d(t,{r:function(){return n}});let n=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"}]},5856:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return g}});var n=a(5893),s=a(7294),r=a(682),i=a(4051),d=a(7918),o=a.n(d),c=a(9548),l=a(7468),u=a(7891),p=a(6154),m=a(9063),y=a(1163);let b=e=>{let{id:t}=e,[a,n]=(0,s.useState)({id:"",name:"",description:"",category:"",price:0,dataLength:0,isLoaded:!1,hasError:!1}),r=(0,y.useRouter)(),i=async()=>{try{let e=await p.Z.post("".concat(m.Z.datasetViewEndpoint),{datasetId:t}),{_id:s,name:r,description:i,category:d,price:o}=e.data.metadata;n({...a,id:s,name:r,description:i,category:d,price:o,dataLength:e.data.dataLength,isLoaded:!0})}catch(e){e.response&&401===e.response.status&&(localStorage.removeItem("accessToken"),r.push("/")),n({...a,isLoaded:!0,hasError:!0})}};return(0,s.useEffect)(()=>{n({...a,isLoaded:!1}),i()},[t]),a};var h=a(6501),f=a(8893);let x=e=>{let{id:t,hasClickedSubscribed:a}=e,[n,r]=(0,s.useState)({isSubscribed:!1,subscriptionId:"",isLoaded:!1}),i=(0,y.useRouter)();return(0,s.useEffect)(()=>{(async()=>{try{let e=await p.Z.post("".concat(m.Z.checkSubscriptionEndpoint),{datasetId:t});r({isSubscribed:e.data.isSubscribed,subscriptionId:e.data.subscriptionId,isLoaded:!0})}catch(e){e.response&&401===e.response.status&&(localStorage.removeItem("accessToken"),i.push("/")),r({...n,isLoaded:!0}),h.Am.error(f.Z.ToastError)}})()},[t,a]),n},v=e=>{let{id:t}=e,[a,n]=(0,s.useState)({similarDatasets:[],isLoaded:!1}),r=(0,y.useRouter)(),i=async()=>{try{let e=await p.Z.post("".concat(m.Z.findsimilarDatasets),{datasetId:t});n({...a,similarDatasets:e.data.similarDatasets,isLoaded:!0})}catch(e){e.response&&401===e.response.status&&(localStorage.removeItem("accessToken"),r.push("/")),n({...a,isLoaded:!0}),h.ZP.error(f.Z.ToastError)}};return(0,s.useEffect)(()=>{i()},[]),a};var j=a(2291),w=a(3700),Z=a(5930);let T=new(o())(o().givenProvider),N=()=>{let[e,t]=(0,s.useState)(!1),a=(0,y.useRouter)(),{id:d}=a.query,o=b({id:d}),N=x({id:d,hasClickedSubscribed:e}),g=v({id:d}),[E,k]=(0,s.useState)(""),L=async()=>{if(0===o.price)try{await p.Z.post("".concat(m.Z.subscribeEndpoint),{datasetId:d}),t(!0)}catch(e){h.Am.error(f.Z.ToastError)}else try{if(void 0!==window.ethereum)try{let e=await window.ethereum.request({method:"eth_requestAccounts"});k(e[0]);let a=new T.eth.Contract(j.r,w.Z.tokenContractAddress);await a.methods.transfer(w.Z.tokenContractAddress,T.utils.toWei(o.price.toString(),"ether")).send({from:E}),await p.Z.post("".concat(m.Z.subscribeEndpoint),{datasetId:d}),t(!0)}catch(e){h.Am.error("Unable to connect to metamask")}else h.Am.error("Please install metamask")}catch(e){h.Am.error("Please install metamask")}},S=g.similarDatasets.map(e=>(0,n.jsx)(Z.Z,{id:e._id,category:e.category,name:e.name,price:e.price},e._id));return(0,n.jsxs)(s.Fragment,{children:[(0,n.jsxs)(u.Z,{condition:o.isLoaded&&N.isLoaded,children:[(0,n.jsx)(u.Z,{condition:!o.hasError,children:(0,n.jsxs)(r.Z,{className:"mt-4",children:[(0,n.jsxs)("div",{className:"jumbotron",children:[(0,n.jsx)("p",{className:"display-4 text-capitalize",children:o.name}),(0,n.jsx)("p",{className:"smalltext",children:o.description}),(0,n.jsxs)("div",{className:"chip-grid",children:[(0,n.jsx)("button",{className:"chip me-3",children:o.category}),(0,n.jsx)("button",{className:"chip me-3",children:0===o.price?"FREE":"".concat(o.price," LST")}),(0,n.jsxs)("button",{className:"chip",children:[o.dataLength," Datapoints"]}),(0,n.jsx)("br",{})]}),(0,n.jsx)(u.Z,{condition:!N.isSubscribed,children:(0,n.jsxs)("button",{className:"chip me-3",onClick:L,children:["Subscribe",(0,n.jsx)("i",{className:"fa-solid fa-circle-plus"})]})}),(0,n.jsx)(u.Z,{condition:!N.isSubscribed,children:(0,n.jsx)("a",{target:"_blank",rel:"noreferrer",href:"".concat(m.Z.datasetPreview,"/").concat(d),className:"chip me-3",children:"Data Preview"})}),(0,n.jsx)(u.Z,{condition:N.isSubscribed,children:(0,n.jsx)("a",{target:"_blank",rel:"noreferrer",href:"".concat(m.Z.datasetFullview,"/").concat(d,"/").concat(N.subscriptionId),className:"chip me-3",children:"Data Fullview"})})]}),(0,n.jsxs)(i.Z,{children:[(0,n.jsx)("p",{className:"lead text-center text-white mb-4",children:"Similar Datasets"}),S]})]})}),(0,n.jsx)(u.Z,{condition:o.hasError,children:(0,n.jsx)(l.Z,{})})]}),(0,n.jsx)(u.Z,{condition:!o.isLoaded||!N.isLoaded,children:(0,n.jsx)(c.Z,{})})]})};var g=N},4051:function(e,t,a){"use strict";var n=a(4184),s=a.n(n),r=a(7294),i=a(6792),d=a(5893);let o=r.forwardRef(({bsPrefix:e,className:t,as:a="div",...n},r)=>{let o=(0,i.vE)(e,"row"),c=(0,i.pi)(),l=(0,i.zG)(),u=`${o}-cols`,p=[];return c.forEach(e=>{let t;let a=n[e];delete n[e],null!=a&&"object"==typeof a?{cols:t}=a:t=a;let s=e!==l?`-${e}`:"";null!=t&&p.push(`${u}${s}-${t}`)}),(0,d.jsx)(a,{ref:r,...n,className:s()(t,o,...p)})});o.displayName="Row",t.Z=o}},function(e){e.O(0,[543,774,888,179],function(){return e(e.s=8535)}),_N_E=e.O()}]);