(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[350],{5337:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/lstswap",function(){return n(6911)}])},3700:function(e,t){"use strict";var n,a;(a=n||(n={})).tokenContractAddress="0xE7f2cF68e353cB1Fa43846f3F395475267fbFbf0",a.vendorContractAddress="0x09203B8d2132a05a2CC3bE3068d8A8198D89788e",t.Z=n},2291:function(e,t,n){"use strict";n.d(t,{r:function(){return a}});let a=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"}]},6911:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return T}});var a=n(5893),s=n(7294),i=n(4119),r=n(1358),o=n(1120),l=n(2291);let d=[{inputs:[{internalType:"address",name:"tokenAddress",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"buyer",type:"address"},{indexed:!1,internalType:"uint256",name:"amountOfETH",type:"uint256"},{indexed:!1,internalType:"uint256",name:"amountOfTokens",type:"uint256"}],name:"BuyTokens",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{inputs:[],name:"buyTokens",outputs:[{internalType:"uint256",name:"tokenAmount",type:"uint256"}],stateMutability:"payable",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenAmountToSell",type:"uint256"}],name:"sellTokens",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"tokensPerETH",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferToken",outputs:[],stateMutability:"nonpayable",type:"function"}];var c=n(7918),u=n.n(c),p=n(6154),y=n(3700),m=n(9063),x=n(6501);let f=new(u())(u().givenProvider),h=()=>{let[e,t]=(0,s.useState)(""),[n,c]=(0,s.useState)(0),[u,h]=(0,s.useState)(""),[T,b]=(0,s.useState)(1),[j,w]=(0,s.useState)(!1),[v,k]=(0,s.useState)("");(0,s.useEffect)(()=>{c(Number(e)/1e4)},[e]);let N=async e=>{try{if(void 0!==window.ethereum)try{let t=await window.ethereum.request({method:"eth_requestAccounts"});h(t[0]),k(e)}catch(e){x.Am.error("Unable to connect to metamask")}else x.Am.error("Please install metamask")}catch(e){x.Am.error("Please install metamask")}},A=async()=>{try{b(2);let t=new f.eth.Contract(d,y.Z.vendorContractAddress),a=await t.methods.buyTokens().send({from:u,value:f.utils.toWei(n.toString(),"ether")}),s={fromAddress:a.from||"0x",transactionType:"Buy",lstAmount:e,ethAmount:n,txHash:a.transactionHash};await p.Z.post(m.Z.createTransactionEndpoint,s),b(3),x.Am.success("You have successfully bought LST tokens")}catch(e){w(!0),b(3),x.Am.error("Error purchasing LST tokens")}},g=async()=>{try{b(2);let t=await f.eth.getAccounts(),a=new f.eth.Contract(l.r,y.Z.tokenContractAddress),s=await a.methods.approve(y.Z.vendorContractAddress,f.utils.toWei(e,"ether")).send({from:t[0]}),i=new f.eth.Contract(d,y.Z.vendorContractAddress);s=await i.methods.sellTokens(f.utils.toWei(e,"ether")).send({from:t[0]});let r={fromAddress:s.from||"0x",transactionType:"Sell",lstAmount:e,ethAmount:n,txHash:s.transactionHash};await p.Z.post(m.Z.createTransactionEndpoint,r),b(3),x.Am.success("You have successfully sold LST tokens!")}catch(e){w(!0),b(3),x.Am.error("Error selling LST tokens")}};return(0,a.jsx)(s.Fragment,{children:(0,a.jsxs)("div",{className:"box",children:[(0,a.jsxs)(o.Z,{condition:""===u,children:[(0,a.jsx)("p",{className:"branding",children:"Swap LST"}),(0,a.jsxs)("button",{className:"btn",onClick:()=>N("buy"),children:["Buy Lenstack Token",(0,a.jsx)("i",{className:"fa-solid fa-circle-arrow-up"})]}),(0,a.jsxs)("button",{className:"btn",onClick:()=>N("sell"),children:["Sell Lenstack Token",(0,a.jsx)("i",{className:"fa-solid fa-circle-arrow-down"})]})]}),(0,a.jsxs)(o.Z,{condition:""!==u,children:[(0,a.jsxs)(o.Z,{condition:"buy"===v,children:[(0,a.jsxs)(o.Z,{condition:1===T,children:[(0,a.jsx)("p",{className:"branding",children:"Buy LST"}),(0,a.jsx)(i.Z,{controlId:"floatingAmount",label:"Amount of tokens",children:(0,a.jsx)(r.Z.Control,{autoFocus:!0,type:"email",placeholder:"Amount of tokens",onChange:e=>t(e.target.value),required:!0})}),(0,a.jsxs)("p",{id:"alert",children:["ETH equivalent: ",n]}),(0,a.jsxs)("button",{className:"btn",onClick:A,children:["Buy",(0,a.jsx)("i",{className:"fa-solid fa-circle-arrow-right"})]})]}),(0,a.jsxs)(o.Z,{condition:2===T,children:[(0,a.jsx)("p",{className:"branding",children:"Transaction Status"}),(0,a.jsxs)("div",{className:"text-center mt-4",children:[(0,a.jsx)("i",{className:"fa-solid fa-circle-notch fa-spin text-center fa-6x"}),(0,a.jsx)("p",{className:"lead text-center mt-4",children:"Processing"})]})]}),(0,a.jsxs)(o.Z,{condition:3===T,children:[(0,a.jsx)("p",{className:"branding",children:"Transaction Status"}),(0,a.jsx)(o.Z,{condition:!j,children:(0,a.jsxs)("div",{className:"text-center",children:[(0,a.jsx)("i",{className:"fa-solid fa-circle-check fa-6x"}),(0,a.jsx)("p",{className:"lead text-center mt-4",children:"Success"})]})}),(0,a.jsx)(o.Z,{condition:j,children:(0,a.jsxs)("div",{className:"text-center",children:[(0,a.jsx)("i",{className:"fa-solid fa-circle-xmark fa-6x"}),(0,a.jsx)("p",{className:"lead text-center mt-4",children:"Failed"})]})})]})]}),(0,a.jsxs)(o.Z,{condition:"sell"===v,children:[(0,a.jsxs)(o.Z,{condition:1===T,children:[(0,a.jsx)("p",{className:"branding",children:"Sell LST"}),(0,a.jsx)(i.Z,{controlId:"floatingAmount",label:"Amount of tokens",children:(0,a.jsx)(r.Z.Control,{autoFocus:!0,type:"email",placeholder:"Amount of tokens",onChange:e=>t(e.target.value),required:!0})}),(0,a.jsxs)("p",{id:"alert",children:["ETH equivalent: ",n]}),(0,a.jsxs)("button",{className:"btn",onClick:g,children:["Sell",(0,a.jsx)("i",{className:"fa-solid fa-circle-arrow-right"})]})]}),(0,a.jsxs)(o.Z,{condition:2===T,children:[(0,a.jsx)("p",{className:"branding",children:"Transaction Status"}),(0,a.jsxs)("div",{className:"text-center mt-4",children:[(0,a.jsx)("i",{className:"fa-solid fa-circle-notch fa-spin text-center fa-6x"}),(0,a.jsx)("p",{className:"lead text-center mt-4",children:"Processing"})]})]}),(0,a.jsxs)(o.Z,{condition:3===T,children:[(0,a.jsx)("p",{className:"branding",children:"Transaction Status"}),(0,a.jsx)(o.Z,{condition:!j,children:(0,a.jsxs)("div",{className:"text-center",children:[(0,a.jsx)("i",{className:"fa-solid fa-circle-check fa-6x"}),(0,a.jsx)("p",{className:"lead text-center mt-4",children:"Success"})]})}),(0,a.jsx)(o.Z,{condition:j,children:(0,a.jsxs)("div",{className:"text-center",children:[(0,a.jsx)("i",{className:"fa-solid fa-circle-xmark fa-6x"}),(0,a.jsx)("p",{className:"lead text-center mt-4",children:"Failed"})]})})]})]})]})]})})};var T=h}},function(e){e.O(0,[543,774,888,179],function(){return e(e.s=5337)}),_N_E=e.O()}]);