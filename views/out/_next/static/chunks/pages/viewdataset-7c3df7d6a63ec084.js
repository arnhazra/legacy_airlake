(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[745],{8535:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/viewdataset",function(){return n(3806)}])},5930:function(e,t,n){"use strict";n.d(t,{Z:function(){return P}});var a=n(5893),s=n(1555),i=n(4184),r=n.n(i),o=n(7294),l=n(6792),d=n(6611),c=n(9602);let u=o.forwardRef(({bsPrefix:e,className:t,variant:n,as:s="img",...i},o)=>{let d=(0,l.vE)(e,"card-img");return(0,a.jsx)(s,{ref:o,className:r()(n?`${d}-${n}`:d,t),...i})});u.displayName="CardImg";var p=n(9059);let m=o.forwardRef(({bsPrefix:e,className:t,as:n="div",...s},i)=>{let d=(0,l.vE)(e,"card-header"),c=(0,o.useMemo)(()=>({cardHeaderBsPrefix:d}),[d]);return(0,a.jsx)(p.Z.Provider,{value:c,children:(0,a.jsx)(n,{ref:i,...s,className:r()(t,d)})})});m.displayName="CardHeader";let y=(0,c.Z)("h5"),v=(0,c.Z)("h6"),b=(0,d.Z)("card-body"),f=(0,d.Z)("card-title",{Component:y}),x=(0,d.Z)("card-subtitle",{Component:v}),h=(0,d.Z)("card-link",{Component:"a"}),T=(0,d.Z)("card-text",{Component:"p"}),w=(0,d.Z)("card-footer"),j=(0,d.Z)("card-img-overlay"),Z=o.forwardRef(({bsPrefix:e,className:t,bg:n,text:s,border:i,body:o,children:d,as:c="div",...u},p)=>{let m=(0,l.vE)(e,"card");return(0,a.jsx)(c,{ref:p,...u,className:r()(t,m,n&&`bg-${n}`,s&&`text-${s}`,i&&`border-${i}`),children:o?(0,a.jsx)(b,{children:d}):d})});Z.displayName="Card",Z.defaultProps={body:!1};var N=Object.assign(Z,{Img:u,Title:f,Subtitle:x,Body:b,Link:h,Text:T,Header:m,Footer:w,ImgOverlay:j}),g=n(1664),C=n.n(g);let E=e=>{let{id:t,category:n,name:i,price:r}=e;return(0,a.jsx)(s.Z,{xs:6,sm:6,md:4,lg:3,xl:2,className:"mb-4",children:(0,a.jsx)(C(),{href:"/viewdataset?id=".concat(t),children:(0,a.jsxs)(N,{children:[(0,a.jsx)(N.Header,{className:"pt-3",children:(0,a.jsx)("div",{className:"".concat(n.toLowerCase(),"Container pt-4")})}),(0,a.jsxs)(N.Footer,{className:"pt-4 pb-2 ps-4 ".concat(n.toLowerCase(),"Color"),children:[(0,a.jsx)("div",{className:"nameContainer",children:(0,a.jsx)("p",{className:"lead",children:i})}),(0,a.jsx)("p",{className:"smalltext",children:n})]})]})})})};var P=E},7468:function(e,t,n){"use strict";var a=n(5893),s=n(8893);let i=e=>{let{customMessage:t}=e;return(0,a.jsxs)("div",{className:"box text-center",children:[(0,a.jsx)("p",{className:"branding mb-4",children:t||s.Z.ErrorMessage}),(0,a.jsx)("i",{className:"fa-solid fa-circle-exclamation fa-4x"}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsxs)("button",{onClick:()=>window.history.back(),className:"btn mt-2",children:[(0,a.jsx)("i",{className:"fa-solid fa-circle-arrow-left"}),"Go Back"]})]})};t.Z=i},3700:function(e,t){"use strict";var n,a;(a=n||(n={})).tokenContractAddress="0xF2692150983b28E20075c855Bad60403885412C8",a.vendorContractAddress="0xBeb84d61d6aC0cBd396AAf488996e78928544A74",t.Z=n},5912:function(e,t){"use strict";var n,a;(a=n||(n={})).POST="POST",a.GET="GET",a.PATCH="PATCH",a.PUT="PUT",a.DELETE="DELETE",a.OPTIONS="OPTIONS",t.Z=n},2291:function(e,t,n){"use strict";n.d(t,{r:function(){return a}});let a=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"}]},1627:function(e,t,n){"use strict";var a=n(6154),s=n(8767),i=n(1163),r=n(6501),o=n(8893);t.Z=function(e,t,n,l,d){let c=(0,i.useRouter)(),u=async()=>{let{data:e}=await (0,a.Z)({method:n,url:t,data:l});return e},{error:p,data:m,isLoading:y}=(0,s.useQuery)([e,l,d],()=>u(),{enabled:!0,refetchOnWindowFocus:!1,retry:3,retryDelay:2500,onError(t){t.response&&401===t.response.status&&(localStorage.removeItem("accessToken"),c.push("/")),r.Am.error("".concat(o.Z.ToastError," fetching ").concat(e))}});return{error:p,data:m,isLoading:y}}},3806:function(e,t,n){"use strict";n.r(t);var a=n(5893),s=n(7294),i=n(682),r=n(4051),o=n(7918),l=n.n(o),d=n(9548),c=n(7891),u=n(6154),p=n(2291),m=n(3700),y=n(9063),v=n(6501),b=n(5930),f=n(1163),x=n(8893),h=n(1627),T=n(5912),w=n(7468);let j=new(l())(l().givenProvider),Z=()=>{var e,t,n,o,l,Z,N,g,C;let E=(0,f.useRouter)(),{id:P}=E.query,[A,S]=(0,s.useState)(Math.random().toString()),k=(0,h.Z)("view dataset",y.Z.datasetViewEndpoint,T.Z.POST,{datasetId:P}),M=(0,h.Z)("similar datasets",y.Z.findsimilarDatasets,T.Z.POST,{datasetId:P}),O=(0,h.Z)("subscription status",y.Z.checkSubscriptionEndpoint,T.Z.POST,{datasetId:P},A),[_,L]=(0,s.useState)(""),$=async()=>{if(0===k.data.price)try{await u.Z.post("".concat(y.Z.subscribeEndpoint),{datasetId:P}),S(Math.random().toString())}catch(e){v.Am.error(x.Z.ToastError)}else try{if(void 0!==window.ethereum)try{let e=await window.ethereum.request({method:"eth_requestAccounts"});L(e[0]);let t=new j.eth.Contract(p.r,m.Z.tokenContractAddress);await t.methods.transfer(m.Z.tokenContractAddress,j.utils.toWei(k.data.price.toString(),"ether")).send({from:_}),await u.Z.post("".concat(y.Z.subscribeEndpoint),{datasetId:P}),S(Math.random().toString())}catch(e){v.Am.error("Unable to connect to metamask")}else v.Am.error("Please install metamask")}catch(e){v.Am.error("Please install metamask")}},F=null==M?void 0:null===(e=M.data)||void 0===e?void 0:null===(t=e.similarDatasets)||void 0===t?void 0:t.map(e=>(0,a.jsx)(b.Z,{id:e._id,category:e.category,name:null==e?void 0:e.name,price:null==e?void 0:e.price},e._id)),I=()=>{navigator.clipboard.writeText("".concat(y.Z.datasetPreview,"/").concat(P)),v.Am.success("Copied to Clipboard")},D=()=>{var e;navigator.clipboard.writeText("".concat(y.Z.datasetFullview,"/").concat(P,"/").concat(null==O?void 0:null===(e=O.data)||void 0===e?void 0:e.subscriptionId)),v.Am.success("Copied to Clipboard")};return(0,a.jsxs)(s.Fragment,{children:[(0,a.jsxs)(c.Z,{condition:!(null==O?void 0:O.isLoading)&&!(null==k?void 0:k.isLoading)&&!(null==M?void 0:M.isLoading),children:[(0,a.jsx)(c.Z,{condition:!k.error,children:(0,a.jsxs)(i.Z,{className:"mt-4",children:[(0,a.jsxs)("div",{className:"jumbotron",children:[(0,a.jsx)("p",{className:"display-6 text-capitalize",children:null==k?void 0:null===(n=k.data)||void 0===n?void 0:n.name}),(0,a.jsx)("p",{className:"lead",children:null==k?void 0:null===(o=k.data)||void 0===o?void 0:o.description}),(0,a.jsxs)("div",{children:[(0,a.jsx)("button",{className:"btn",children:null==k?void 0:null===(l=k.data)||void 0===l?void 0:l.category}),(0,a.jsx)("button",{className:"btn",children:(null==k?void 0:null===(Z=k.data)||void 0===Z?void 0:Z.price)===0?"FREE":"".concat(null==k?void 0:null===(N=k.data)||void 0===N?void 0:N.price," ELT")})]}),(0,a.jsxs)(c.Z,{condition:!(null==O?void 0:null===(g=O.data)||void 0===g?void 0:g.isSubscribed),children:[(0,a.jsxs)("button",{className:"btn",onClick:$,children:["Subscribe",(0,a.jsx)("i",{className:"fa-solid fa-circle-plus"})]}),(0,a.jsxs)("button",{className:"btn",onClick:I,children:["Data Preview API ",(0,a.jsx)("i",{className:"fa-solid fa-copy"})]})]}),(0,a.jsx)(c.Z,{condition:null==O?void 0:null===(C=O.data)||void 0===C?void 0:C.isSubscribed,children:(0,a.jsxs)("button",{className:"btn",onClick:D,children:["Data Fullview API ",(0,a.jsx)("i",{className:"fa-solid fa-copy"})]})})]}),(0,a.jsxs)(r.Z,{children:[(0,a.jsx)("p",{className:"lead text-center text-white mb-4",children:"Similar Datasets"}),F]})]})}),(0,a.jsx)(c.Z,{condition:k.error,children:(0,a.jsx)(w.Z,{})})]}),(0,a.jsx)(c.Z,{condition:(null==O?void 0:O.isLoading)||(null==k?void 0:k.isLoading)||(null==M?void 0:M.isLoading),children:(0,a.jsx)(d.Z,{})})]})};t.default=Z},4051:function(e,t,n){"use strict";var a=n(4184),s=n.n(a),i=n(7294),r=n(6792),o=n(5893);let l=i.forwardRef(({bsPrefix:e,className:t,as:n="div",...a},i)=>{let l=(0,r.vE)(e,"row"),d=(0,r.pi)(),c=(0,r.zG)(),u=`${l}-cols`,p=[];return d.forEach(e=>{let t;let n=a[e];delete a[e],null!=n&&"object"==typeof n?{cols:t}=n:t=n;let s=e!==c?`-${e}`:"";null!=t&&p.push(`${u}${s}-${t}`)}),(0,o.jsx)(n,{ref:i,...a,className:s()(t,l,...p)})});l.displayName="Row",t.Z=l}},function(e){e.O(0,[543,774,888,179],function(){return e(e.s=8535)}),_N_E=e.O()}]);