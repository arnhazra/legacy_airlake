"use strict";(self.webpackChunkview=self.webpackChunkview||[]).push([[961],{8961:function(e,t,s){s.r(t),s.d(t,{default:function(){return d}});var a=s(9439),n=s(8467),c=s(7313),o=s(9610),r=s(4537),i=function(){try{o.Z.defaults.headers.common.Authorization="Bearer ".concat(localStorage.getItem("accessToken")),o.Z.post(r.Z.signOutEndpoint),localStorage.removeItem("accessToken")}catch(e){localStorage.removeItem("accessToken")}},l=s(6114),u=s(6417),d=function(){var e=(0,n.s0)(),t=(0,c.useContext)(l.k),s=(0,a.Z)(t,2),o=s[0].userState,r=s[1];return(0,u.jsx)(c.Fragment,{children:(0,u.jsxs)("div",{className:"box",children:[(0,u.jsx)("p",{className:"branding",children:"Account"}),(0,u.jsx)("p",{className:"boxtext",children:"Access your account information and manage your preference"}),(0,u.jsxs)("p",{className:"boxtext",children:["Signed in as ",o.name]}),(0,u.jsxs)("button",{className:"mt-2 btn btnbox",onClick:function(){try{i(),r("setUserState",{isLoaded:!0}),e("/")}catch(t){r("setUserState",{isLoaded:!0}),e("/")}},children:["Sign Out",(0,u.jsx)("i",{className:"fa-solid fa-circle-arrow-right"})]}),(0,u.jsx)("br",{})]})})}}}]);