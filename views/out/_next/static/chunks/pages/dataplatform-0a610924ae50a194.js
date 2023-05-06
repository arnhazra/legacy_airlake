(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[122],{6414:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dataplatform",function(){return s(7961)}])},8609:function(e,t,s){"use strict";s.d(t,{Z:function(){return y}});var a=s(5893),l=s(1555),r=s(4184),n=s.n(r),i=s(7294),o=s(6792),c=s(6611),d=s(9602);let u=i.forwardRef(({bsPrefix:e,className:t,variant:s,as:l="img",...r},i)=>{let c=(0,o.vE)(e,"card-img");return(0,a.jsx)(l,{ref:i,className:n()(s?`${c}-${s}`:c,t),...r})});u.displayName="CardImg";var m=s(9059);let f=i.forwardRef(({bsPrefix:e,className:t,as:s="div",...l},r)=>{let c=(0,o.vE)(e,"card-header"),d=(0,i.useMemo)(()=>({cardHeaderBsPrefix:c}),[c]);return(0,a.jsx)(m.Z.Provider,{value:d,children:(0,a.jsx)(s,{ref:r,...l,className:n()(t,c)})})});f.displayName="CardHeader";let x=(0,d.Z)("h5"),h=(0,d.Z)("h6"),v=(0,c.Z)("card-body"),j=(0,c.Z)("card-title",{Component:x}),p=(0,c.Z)("card-subtitle",{Component:h}),N=(0,c.Z)("card-link",{Component:"a"}),g=(0,c.Z)("card-text",{Component:"p"}),Z=(0,c.Z)("card-footer"),w=(0,c.Z)("card-img-overlay"),b=i.forwardRef(({bsPrefix:e,className:t,bg:s,text:l,border:r,body:i=!1,children:c,as:d="div",...u},m)=>{let f=(0,o.vE)(e,"card");return(0,a.jsx)(d,{ref:m,...u,className:n()(t,f,s&&`bg-${s}`,l&&`text-${l}`,r&&`border-${r}`),children:i?(0,a.jsx)(v,{children:c}):c})});b.displayName="Card";var C=Object.assign(b,{Img:u,Title:j,Subtitle:p,Body:v,Link:N,Text:g,Header:f,Footer:Z,ImgOverlay:w}),E=s(1664),T=s.n(E);let S=e=>{let{id:t,category:s,name:r,price:n}=e;return(0,a.jsx)(l.Z,{xs:6,sm:6,md:4,lg:3,xl:2,className:"mb-4",children:(0,a.jsx)(T(),{href:"/viewdataset?id=".concat(t),children:(0,a.jsxs)(C,{children:[(0,a.jsx)(C.Header,{className:"pt-3",children:(0,a.jsx)("div",{className:"".concat(s.toLowerCase(),"Container pt-4")})}),(0,a.jsxs)(C.Footer,{className:"pt-4 pb-2 ps-4 ".concat(s.toLowerCase(),"Color"),children:[(0,a.jsx)("div",{className:"nameContainer",children:(0,a.jsx)("p",{children:r})}),(0,a.jsxs)("p",{className:"smalltext",children:[s," • ",n+" LFT"]})]})]})})})};var y=S},3298:function(e,t,s){"use strict";var a=s(5893),l=s(8893);let r=e=>{let{customMessage:t}=e;return(0,a.jsxs)("div",{className:"box",children:[(0,a.jsx)("p",{className:"branding mb-4",children:t||l.Z.ErrorMessage}),(0,a.jsxs)("div",{className:"text-center",children:[(0,a.jsx)("i",{className:"fa-solid fa-circle-exclamation fa-4x "}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{})]}),(0,a.jsxs)("button",{onClick:()=>window.history.back(),className:"btn mt-2",children:[(0,a.jsx)("i",{className:"fa-solid fa-circle-arrow-left"}),"Go Back"]})]})};t.Z=r},5912:function(e,t){"use strict";var s,a;(a=s||(s={})).POST="POST",a.GET="GET",a.PATCH="PATCH",a.PUT="PUT",a.DELETE="DELETE",a.OPTIONS="OPTIONS",t.Z=s},1627:function(e,t,s){"use strict";var a=s(6154),l=s(8767),r=s(1163),n=s(6501),i=s(8893);t.Z=function(e,t,s,o,c){let d=(0,r.useRouter)(),u=async()=>{let{data:e}=await (0,a.Z)({method:s,url:t,data:o});return e},{error:m,data:f,isLoading:x}=(0,l.useQuery)([e,o,c],()=>u(),{enabled:!0,refetchOnWindowFocus:!1,retry:3,retryDelay:2500,onError(t){t.response&&401===t.response.status&&(localStorage.removeItem("accessToken"),d.push("/")),n.Am.error("".concat(i.Z.ToastError," fetching ").concat(e))}});return{error:m,data:f,isLoading:x}}},7961:function(e,t,s){"use strict";s.r(t);var a=s(5893),l=s(7294),r=s(682),n=s(4051),i=s(1555),o=s(4119),c=s(1358),d=s(3056),u=s(1120),m=s(5309),f=s(8609),x=s(1627),h=s(9063),v=s(5912),j=s(3298);let p=()=>{var e,t,s,p,N,g,Z,w;let[{datasetRequestState:b},C]=(0,l.useContext)(m.k),E=(0,x.Z)("filters",h.Z.datasetFiltersEndpoint,v.Z.POST),T=(0,x.Z)("data platform",h.Z.dataplatformEndpoint,v.Z.POST,b),S=null==E?void 0:null===(e=E.data)||void 0===e?void 0:null===(t=e.filterCategories)||void 0===t?void 0:t.map(e=>(0,a.jsx)("option",{className:"options",value:e,children:e},e)),y=null==T?void 0:null===(s=T.data)||void 0===s?void 0:null===(p=s.datasets)||void 0===p?void 0:p.map(e=>(0,a.jsx)(f.Z,{id:e._id,category:e.category,name:e.name,price:e.price},e._id)),O=(0,a.jsx)(j.Z,{customMessage:"No Datasets"}),P=()=>{let e=b.offset-24;C("setDatasetRequestState",{offset:e}),window.scrollTo(0,0)},_=()=>{let e=b.offset+24;C("setDatasetRequestState",{offset:e}),window.scrollTo(0,0)};return(0,a.jsxs)(l.Fragment,{children:[(0,a.jsx)(u.Z,{condition:!T.isLoading&&!E.isLoading,children:(0,a.jsxs)(r.Z,{children:[(0,a.jsxs)(n.Z,{className:"g-2 mt-4",children:[(0,a.jsx)(i.Z,{xs:12,sm:12,md:6,lg:4,xl:3,children:(0,a.jsx)(o.Z,{controlId:"floatingSelectGrid",label:"Select Filter Category",children:(0,a.jsx)(c.Z.Select,{defaultValue:b.selectedFilter,onChange:e=>C("setDatasetRequestState",{selectedFilter:e.target.value,offset:0}),children:S})})}),(0,a.jsx)(i.Z,{xs:12,sm:12,md:6,lg:4,xl:3,children:(0,a.jsx)(o.Z,{controlId:"floatingSelectGrid",label:"Sort By",children:(0,a.jsxs)(c.Z.Select,{defaultValue:b.selectedSortOption,onChange:e=>C("setDatasetRequestState",{selectedSortOption:e.target.value}),children:[(0,a.jsx)("option",{className:"options",value:"name",children:"Name Ascending"},"nameAscending"),(0,a.jsx)("option",{className:"options",value:"-name",children:"Name Descending"},"nameDescending")]})})})]}),(0,a.jsx)(n.Z,{className:"mt-4 mb-4",children:(null==T?void 0:null===(N=T.data)||void 0===N?void 0:null===(g=N.datasets)||void 0===g?void 0:g.length)?y:O}),(0,a.jsxs)("div",{className:"text-center",children:[0!==b.offset&&(0,a.jsxs)("button",{className:"btn",onClick:P,children:["Show Prev",(0,a.jsx)("i",{className:"fa-solid fa-circle-arrow-left"})]}),(null==T?void 0:null===(Z=T.data)||void 0===Z?void 0:null===(w=Z.datasets)||void 0===w?void 0:w.length)===24&&(0,a.jsxs)("button",{className:"btn",onClick:_,children:["Show Next",(0,a.jsx)("i",{className:"fa-solid fa-circle-arrow-right"})]})]})]})}),(0,a.jsx)(u.Z,{condition:T.isLoading||E.isLoading,children:(0,a.jsx)(d.Z,{})})]})};t.default=p},4051:function(e,t,s){"use strict";var a=s(4184),l=s.n(a),r=s(7294),n=s(6792),i=s(5893);let o=r.forwardRef(({bsPrefix:e,className:t,as:s="div",...a},r)=>{let o=(0,n.vE)(e,"row"),c=(0,n.pi)(),d=(0,n.zG)(),u=`${o}-cols`,m=[];return c.forEach(e=>{let t;let s=a[e];delete a[e],null!=s&&"object"==typeof s?{cols:t}=s:t=s;let l=e!==d?`-${e}`:"";null!=t&&m.push(`${u}${l}-${t}`)}),(0,i.jsx)(s,{ref:r,...a,className:l()(t,o,...m)})});o.displayName="Row",t.Z=o}},function(e){e.O(0,[774,888,179],function(){return e(e.s=6414)}),_N_E=e.O()}]);