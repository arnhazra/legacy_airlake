(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[114],{5482:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/datasetlibrary",function(){return s(1512)}])},5930:function(e,t,s){"use strict";s.d(t,{Z:function(){return _}});var a=s(5893),r=s(1555),l=s(4184),o=s.n(l),n=s(7294),i=s(6792),d=s(6611),c=s(9602);let u=n.forwardRef(({bsPrefix:e,className:t,variant:s,as:r="img",...l},n)=>{let d=(0,i.vE)(e,"card-img");return(0,a.jsx)(r,{ref:n,className:o()(s?`${d}-${s}`:d,t),...l})});u.displayName="CardImg";var m=s(9059);let f=n.forwardRef(({bsPrefix:e,className:t,as:s="div",...r},l)=>{let d=(0,i.vE)(e,"card-header"),c=(0,n.useMemo)(()=>({cardHeaderBsPrefix:d}),[d]);return(0,a.jsx)(m.Z.Provider,{value:c,children:(0,a.jsx)(s,{ref:l,...r,className:o()(t,d)})})});f.displayName="CardHeader";let x=(0,c.Z)("h5"),h=(0,c.Z)("h6"),p=(0,d.Z)("card-body"),j=(0,d.Z)("card-title",{Component:x}),Z=(0,d.Z)("card-subtitle",{Component:h}),v=(0,d.Z)("card-link",{Component:"a"}),N=(0,d.Z)("card-text",{Component:"p"}),g=(0,d.Z)("card-footer"),b=(0,d.Z)("card-img-overlay"),C=n.forwardRef(({bsPrefix:e,className:t,bg:s,text:r,border:l,body:n,children:d,as:c="div",...u},m)=>{let f=(0,i.vE)(e,"card");return(0,a.jsx)(c,{ref:m,...u,className:o()(t,f,s&&`bg-${s}`,r&&`text-${r}`,l&&`border-${l}`),children:n?(0,a.jsx)(p,{children:d}):d})});C.displayName="Card",C.defaultProps={body:!1};var w=Object.assign(C,{Img:u,Title:j,Subtitle:Z,Body:p,Link:v,Text:N,Header:f,Footer:g,ImgOverlay:b}),y=s(1664),S=s.n(y);let E=e=>{let{id:t,category:s,name:l,price:o}=e;return(0,a.jsx)(r.Z,{xs:6,sm:6,md:4,lg:3,xl:2,className:"mb-4",children:(0,a.jsx)(S(),{href:"/viewdataset?id=".concat(t),children:(0,a.jsxs)(w,{children:[(0,a.jsx)(w.Header,{className:"pt-3",children:(0,a.jsx)("div",{className:"".concat(s.toLowerCase(),"Container pt-4")})}),(0,a.jsxs)(w.Footer,{className:"pt-4 pb-2 ps-4",children:[(0,a.jsx)("div",{className:"nameContainer",children:(0,a.jsx)("p",{className:"lead",children:l})}),(0,a.jsx)("p",{className:"smalltext",children:s})]})]})})})};var _=E},1512:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return C}});var a=s(5893),r=s(7294),l=s(682),o=s(4051),n=s(9548),i=s(7891),d=s(6154),c=s(6501),u=s(1163),m=s(9063),f=s(8893);let x=e=>{let{searchQuery:t,selectedFilter:s,selectedSortOption:a,offset:l}=e,[o,n]=(0,r.useState)({datasets:[],isLoaded:!1}),i=(0,u.useRouter)();return(0,r.useEffect)(()=>{(async()=>{try{let e=await d.Z.post(m.Z.datasetLibraryEndpoint,{selectedSortOption:a,selectedFilter:s,searchQuery:t,offset:l});n({datasets:e.data.datasets,isLoaded:!0})}catch(e){e.response&&401===e.response.status&&(localStorage.removeItem("accessToken"),i.push("/")),n({...o,isLoaded:!0}),c.ZP.error(f.Z.ToastError)}})()},[a,s,t,l]),o};var h=s(5309),p=s(1555),j=s(4119),Z=s(1358);let v=()=>{let[e,t]=(0,r.useState)({sortOptions:[],filterCategories:[],isLoaded:!1}),s=(0,u.useRouter)();return(0,r.useEffect)(()=>{(async()=>{try{let s=await d.Z.post(m.Z.datasetFiltersEndpoint);t({...e,sortOptions:s.data.sortOptions,filterCategories:s.data.filterCategories,isLoaded:!0})}catch(a){a.response&&401===a.response.status&&(localStorage.removeItem("accessToken"),s.push("/")),t({...e,isLoaded:!0}),c.ZP.error(f.Z.ToastError)}})()},[]),e},N=()=>{let e=v(),[{datasetRequestState:t},s]=(0,r.useContext)(h.k),l=e.filterCategories.map(e=>(0,a.jsx)("option",{className:"options",value:e,children:e},e));return(0,a.jsxs)(r.Fragment,{children:[(0,a.jsx)(i.Z,{condition:e.isLoaded,children:(0,a.jsxs)(o.Z,{className:"g-2 mt-4",children:[(0,a.jsx)(p.Z,{xs:12,sm:12,md:6,lg:4,xl:3,children:(0,a.jsx)(j.Z,{controlId:"floatingSelectGrid",label:"Select Filter Category",children:(0,a.jsx)(Z.Z.Select,{defaultValue:t.selectedFilter,onChange:e=>s("setDatasetRequestState",{selectedFilter:e.target.value}),children:l})})}),(0,a.jsx)(p.Z,{xs:12,sm:12,md:6,lg:4,xl:3,children:(0,a.jsx)(j.Z,{controlId:"floatingSelectGrid",label:"Sort By",children:(0,a.jsxs)(Z.Z.Select,{defaultValue:t.selectedSortOption,onChange:e=>s("setDatasetRequestState",{selectedSortOption:e.target.value}),children:[(0,a.jsx)("option",{className:"options",value:"name",children:"Dataset Name"},"name"),(0,a.jsx)("option",{className:"options",value:"price",children:"Dataset Price"},"price"),(0,a.jsx)("option",{className:"options",value:"-_id",children:"Dataset Freshness"},"freshness")]})})})]})}),(0,a.jsx)(i.Z,{condition:!e.isLoaded,children:(0,a.jsx)(n.Z,{})})]})};var g=s(5930);let b=()=>{let[{datasetRequestState:e},t]=(0,r.useContext)(h.k),s=x(e),d=s.datasets.map(e=>(0,a.jsx)(g.Z,{id:e._id,category:e.category,name:e.name,price:e.price},e._id)),c=()=>{let s=e.offset-24;t("setDatasetRequestState",{offset:s}),window.scrollTo(0,0)},u=()=>{let s=e.offset+24;t("setDatasetRequestState",{offset:s}),window.scrollTo(0,0)};return(0,a.jsxs)(r.Fragment,{children:[(0,a.jsx)(i.Z,{condition:s.isLoaded,children:(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(N,{}),(0,a.jsx)(o.Z,{className:"mt-4 mb-4",children:d}),(0,a.jsxs)("div",{className:"text-center",children:[(0,a.jsx)("button",{className:"btn",onClick:c,disabled:0===e.offset,children:(0,a.jsx)("i",{className:"fa-solid fa-circle-arrow-left"})}),(0,a.jsx)("button",{className:"btn",onClick:u,disabled:24!==s.datasets.length,children:(0,a.jsx)("i",{className:"fa-solid fa-circle-arrow-right"})})]})]})}),(0,a.jsx)(i.Z,{condition:!s.isLoaded,children:(0,a.jsx)(n.Z,{})})]})};var C=b},4051:function(e,t,s){"use strict";var a=s(4184),r=s.n(a),l=s(7294),o=s(6792),n=s(5893);let i=l.forwardRef(({bsPrefix:e,className:t,as:s="div",...a},l)=>{let i=(0,o.vE)(e,"row"),d=(0,o.pi)(),c=(0,o.zG)(),u=`${i}-cols`,m=[];return d.forEach(e=>{let t;let s=a[e];delete a[e],null!=s&&"object"==typeof s?{cols:t}=s:t=s;let r=e!==c?`-${e}`:"";null!=t&&m.push(`${u}${r}-${t}`)}),(0,n.jsx)(s,{ref:l,...a,className:r()(t,i,...m)})});i.displayName="Row",t.Z=i}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5482)}),_N_E=e.O()}]);