(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[966],{4641:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account",function(){return n(6464)}])},6464:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return x}});var t=n(5893),r=n(7294),c=n(5309),a=n(6154),o=n(9063),i=n(6501),u=n(1163),l=n(8893);let d=()=>{let e=(0,u.useRouter)(),[,s]=(0,r.useContext)(c.k),n=()=>{s("setUserState",{isLoaded:!0}),localStorage.removeItem("accessToken"),e.push("/")},t=async()=>{try{await a.Z.post(o.Z.signOutEndpoint),s("setUserState",{isLoaded:!0}),localStorage.removeItem("accessToken"),e.push("/")}catch(e){i.Am.error(l.Z.ToastError)}};return{signOutFromThisDevice:n,signOutFromAllDevices:t}},m=()=>{let[{userState:e}]=(0,r.useContext)(c.k),s=d();return(0,t.jsx)(r.Fragment,{children:(0,t.jsxs)("div",{className:"box",children:[(0,t.jsx)("p",{className:"branding",children:"Account"}),(0,t.jsx)("p",{className:"boxtext",children:"Access your account information and manage your preference"}),(0,t.jsxs)("p",{className:"boxtext",children:["Signed in as ",e.name]}),(0,t.jsxs)("button",{className:"mt-2 btn btnbox",onClick:s.signOutFromThisDevice,children:["Sign Out",(0,t.jsx)("i",{className:"fa-solid fa-circle-arrow-right"})]}),(0,t.jsx)("br",{}),(0,t.jsx)("p",{className:"all-device-signout",onClick:s.signOutFromAllDevices,children:"Sign Out From All Devices"})]})})};var x=m}},function(e){e.O(0,[774,888,179],function(){return e(e.s=4641)}),_N_E=e.O()}]);