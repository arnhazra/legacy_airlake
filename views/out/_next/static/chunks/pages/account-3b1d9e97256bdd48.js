(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[966],{4641:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account",function(){return n(2450)}])},2450:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return x}});var t=n(5893),a=n(7294),c=n(6154),r=n(9063);let o=()=>c.Z.post(r.Z.signOutEndpoint);var i=n(5309),l=n(6501),u=n(1163),d=n(8893);let m=()=>{let e=(0,u.useRouter)(),[{userState:s},n]=(0,a.useContext)(i.k),c=()=>{n("setUserState",{isLoaded:!0}),localStorage.removeItem("accessToken"),e.push("/")},r=async()=>{try{await o(),n("setUserState",{isLoaded:!0}),localStorage.removeItem("accessToken"),e.push("/")}catch(e){l.Am.error(d.Z.ToastError)}};return(0,t.jsx)(a.Fragment,{children:(0,t.jsxs)("div",{className:"box",children:[(0,t.jsx)("p",{className:"branding",children:"Account"}),(0,t.jsx)("p",{className:"boxtext",children:"Access your account information and manage your preference"}),(0,t.jsxs)("p",{className:"boxtext",children:["Signed in as ",s.name]}),(0,t.jsxs)("button",{className:"mt-2 btn btnbox",onClick:c,children:["Sign Out",(0,t.jsx)("i",{className:"fa-solid fa-circle-arrow-right"})]}),(0,t.jsx)("br",{}),(0,t.jsx)("p",{className:"all-device-signout",onClick:r,children:"Sign Out From All Devices"})]})})};var x=m}},function(e){e.O(0,[774,888,179],function(){return e(e.s=4641)}),_N_E=e.O()}]);