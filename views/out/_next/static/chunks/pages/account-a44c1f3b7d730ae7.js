(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[966],{4641:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account",function(){return n(6807)}])},6807:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return k}});var r=n(5893),t=n(7294),a=n(5309),i=n(6154),c=n(9063),l=n(6501),o=n(1163),d=n(8893);let h=()=>{let e=(0,o.useRouter)(),s=()=>{localStorage.removeItem("accessToken"),e.push("/")},n=async()=>{try{await i.Z.post(c.Z.signOutEndpoint),localStorage.removeItem("accessToken"),e.push("/")}catch(e){l.Am.error(d.Z.ToastError)}};return{signOutFromThisDevice:s,signOutFromAllDevices:n}},u=()=>{let[e,s]=(0,t.useState)({transactions:[],isLoaded:!1}),n=(0,o.useRouter)();return(0,t.useEffect)(()=>{(async()=>{try{let n=await i.Z.post(c.Z.getTransactionsEndpoint);s({...e,transactions:n.data.transactions,isLoaded:!0})}catch(r){r.response&&401===r.response.status&&(localStorage.removeItem("accessToken"),n.push("/")),s({...e,isLoaded:!0}),l.Am.error(d.Z.ToastError)}})()},[]),e};var x=n(381),m=n.n(x),j=n(7891),p=n(682),f=n(4184),N=n.n(f),E=n(6792);let g=t.forwardRef(({bsPrefix:e,className:s,striped:n,bordered:t,borderless:a,hover:i,size:c,variant:l,responsive:o,...d},h)=>{let u=(0,E.vE)(e,"table"),x=N()(s,u,l&&`${u}-${l}`,c&&`${u}-${c}`,n&&`${u}-${"string"==typeof n?`striped-${n}`:"striped"}`,t&&`${u}-bordered`,a&&`${u}-borderless`,i&&`${u}-hover`),m=(0,r.jsx)("table",{...d,className:x,ref:h});if(o){let e=`${u}-responsive`;return"string"==typeof o&&(e=`${e}-${o}`),(0,r.jsx)("div",{className:e,children:m})}return m});var v=n(1664),T=n.n(v),b=n(9548);let w=()=>{let[{userState:e}]=(0,t.useContext)(a.k),s=h(),n=u(),i=n.transactions.map(e=>(0,r.jsxs)("tr",{children:[(0,r.jsxs)("td",{children:[e.transactionType," ELT"]}),(0,r.jsxs)("td",{children:[e.eltAmount," ELT"]}),(0,r.jsxs)("td",{children:[e.ethAmount," ETH"]}),(0,r.jsx)("td",{children:m()(e.date).format("MMM, Do YYYY, h:mm a")}),(0,r.jsx)("td",{children:(0,r.jsx)("a",{href:"".concat(c.Z.etherScanEndpoint,"/").concat(e.txHash),target:"_blank",rel:"noopener noreferrer",className:"link-table",children:"View on EtherScan"})})]},e._id));return(0,r.jsxs)(t.Fragment,{children:[(0,r.jsx)(j.Z,{condition:n.isLoaded,children:(0,r.jsxs)(p.Z,{children:[(0,r.jsxs)("div",{className:"jumbotron mt-4 pl-5",children:[(0,r.jsx)("p",{className:"display-6",children:"Account"}),(0,r.jsxs)("div",{className:"info",children:[(0,r.jsxs)("p",{className:"lead",children:["Signed in as ",e.name]}),(0,r.jsx)("p",{className:"lead",children:d.Z.Info}),(0,r.jsx)("p",{className:"lead",children:d.Z.Warning}),(0,r.jsxs)(T(),{href:"/buycoin",className:"btn chip",children:["Buy ELT",(0,r.jsx)("i",{className:"fa-solid fa-circle-arrow-right"})]}),(0,r.jsxs)(T(),{href:"/sellcoin",className:"btn chip",children:["Sell ELT",(0,r.jsx)("i",{className:"fa-solid fa-circle-arrow-right"})]}),(0,r.jsxs)("button",{className:"btn chip ",onClick:s.signOutFromThisDevice,children:["Sign Out",(0,r.jsx)("i",{className:"fa-solid fa-circle-arrow-right"})]}),(0,r.jsx)("br",{}),(0,r.jsxs)("button",{className:"btn chip ",onClick:s.signOutFromAllDevices,children:["Sign Out From All Devices",(0,r.jsx)("i",{className:"fa-solid fa-circle-arrow-right"})]})]})]}),(0,r.jsxs)(j.Z,{condition:n.transactions.length>0,children:[(0,r.jsx)("p",{className:"lead text-center text-white mb-4",children:"Transactions"}),(0,r.jsxs)(g,{responsive:!0,hover:!0,variant:"dark",children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Event"}),(0,r.jsx)("th",{children:"ELT Amount"}),(0,r.jsx)("th",{children:"ETH Amount"}),(0,r.jsx)("th",{children:"Transaction Time"}),(0,r.jsx)("th",{children:"EtherScan Link"})]})}),(0,r.jsx)("tbody",{children:i})]})]})]})}),(0,r.jsx)(j.Z,{condition:!n.isLoaded,children:(0,r.jsx)(b.Z,{})})]})};var k=w}},function(e){e.O(0,[885,774,888,179],function(){return e(e.s=4641)}),_N_E=e.O()}]);