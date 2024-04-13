import{Q as v,d as u,D as f,o as i,e as d,n as g,a as e,f as c,t as w,i as n,E as x,b as h,u as m,Z as y,r as b,x as k}from"./app-DvJvjdOE.js";const _={class:"max-w-screen-xl mx-auto py-2 px-3 sm:px-6 lg:px-8"},$={class:"flex items-center justify-between flex-wrap"},C={class:"w-0 flex-1 flex items-center min-w-0"},j={key:0,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},z=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),B=[z],M={key:1,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},S=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"},null,-1),D=[S],P={class:"ms-3 font-medium text-sm text-white truncate"},A={class:"shrink-0 sm:ms-3"},L=e("svg",{class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})],-1),N=[L],V={__name:"Banner",setup(p){const l=v(),r=u(!0),a=u("success"),o=u("");return f(async()=>{var t,s;a.value=((t=l.props.jetstream.flash)==null?void 0:t.bannerStyle)||"success",o.value=((s=l.props.jetstream.flash)==null?void 0:s.banner)||"",r.value=!0}),(t,s)=>(i(),d("div",null,[r.value&&o.value?(i(),d("div",{key:0,class:g({"bg-indigo-500":a.value=="success","bg-red-700":a.value=="danger"})},[e("div",_,[e("div",$,[e("div",C,[e("span",{class:g(["flex p-2 rounded-lg",{"bg-indigo-600":a.value=="success","bg-red-600":a.value=="danger"}])},[a.value=="success"?(i(),d("svg",j,B)):c("",!0),a.value=="danger"?(i(),d("svg",M,D)):c("",!0)],2),e("p",P,w(o.value),1)]),e("div",A,[e("button",{type:"button",class:g(["-me-1 flex p-2 rounded-md focus:outline-none sm:-me-2 transition",{"hover:bg-indigo-600 focus:bg-indigo-600":a.value=="success","hover:bg-red-600 focus:bg-red-600":a.value=="danger"}]),"aria-label":"Dismiss",onClick:s[0]||(s[0]=n(ne=>r.value=!1,["prevent"]))},N,2)])])])],2)):c("",!0)]))}},E={class:"min-h-screen bg-gray-100"},H=k('<nav class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700"><div class="px-3 py-3 lg:px-5 lg:pl-3"><div class="flex items-center justify-between"><div class="flex items-center justify-start rtl:justify-end"><button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"><span class="sr-only">Open sidebar</span><svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path></svg></button><a href="https://flowbite.com" class="flex ms-2 md:me-24"><div class="flex center"><i class="fa-solid fa-gauge ml-2"></i><span class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">System</span></div></a></div></div></div></nav>',1),q={id:"logo-sidebar",class:"fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700","aria-label":"Sidebar"},O={class:"h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800"},Q={class:"space-y-2 font-medium"},T=e("i",{class:"fa-solid fa-chart-simple"},null,-1),Z=e("span",{class:"ms-3"},"Dashboard",-1),F=[T,Z],G=e("i",{class:"fa-solid fa-money-check-dollar"},null,-1),I=e("span",{class:"ms-3"},"Payments",-1),J=[G,I],K=e("i",{class:"fa-solid fa-money-check-dollar"},null,-1),R=e("span",{class:"ms-3"},"Cuentas",-1),U=[K,R],W=e("i",{class:"fa-solid fa-puzzle-piece"},null,-1),X=e("span",{class:"flex-1 ms-3 text-left rtl:text-right whitespace-nowrap"},"Pasarelas de Pago",-1),Y=e("svg",{class:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 10 6"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 1 4 4 4-4"})],-1),ee=[W,X,Y],te=e("i",{class:"fa-solid fa-gear"},null,-1),se=e("span",{class:"flex-1 ms-3 text-left rtl:text-right whitespace-nowrap"},"Settings",-1),re=e("svg",{class:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 10 6"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 1 4 4 4-4"})],-1),oe=[te,se,re],ae={class:"p-4 sm:ml-64"},ie={__name:"AppLayout",props:{title:String},setup(p){u(!1);const l=x({}),r=o=>{o&&(window.location.href=o)},a=o=>{l[o]===void 0&&(l[o]=!1),l[o]=!l[o]};return(o,t)=>(i(),d("div",null,[h(m(y),{title:p.title},null,8,["title"]),h(V),e("div",E,[H,e("aside",q,[e("div",O,[e("ul",Q,[e("li",null,[e("a",{onClick:t[0]||(t[0]=n(s=>r("/dashboard"),["prevent"])),class:"flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group cursor-pointer"},F)]),e("li",null,[e("a",{onClick:t[1]||(t[1]=n(s=>r("/dashboard/payments"),["prevent"])),class:"flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group cursor-pointer"},J)]),e("li",null,[e("a",{onClick:t[2]||(t[2]=n(s=>r("/dashboard/payments"),["prevent"])),class:"flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group cursor-pointer"},U)]),e("li",null,[e("button",{onClick:t[3]||(t[3]=s=>a("pasarelasDePago")),type:"button",class:"flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700","aria-controls":"dropdown-pasarelasDePago"},ee),e("ul",{id:"dropdown-pasarelasDePago",class:g([{hidden:!l.pasarelasDePago},"py-2 space-y-2"])},[e("li",null,[e("a",{onClick:t[4]||(t[4]=n(s=>r("/openpay"),["prevent"])),class:"flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 cursor-pointer"},"Openpay")]),e("li",null,[e("a",{onClick:t[5]||(t[5]=n(s=>r("/mercadopago"),["prevent"])),class:"flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 cursor-pointer"},"MercadoPago")]),e("li",null,[e("a",{onClick:t[6]||(t[6]=n(s=>r("/culqui"),["prevent"])),class:"flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text:white dark:hover:bg-gray-700 cursor-pointer"},"Culqui")]),e("li",null,[e("a",{onClick:t[7]||(t[7]=n(s=>r("/stripe"),["prevent"])),class:"flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text:white dark:hover:bg-gray-700 cursor-pointer"},"Stripe")]),e("li",null,[e("a",{onClick:t[8]||(t[8]=n(s=>r("/apple-pay"),["prevent"])),class:"flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text:white dark:hover:bg-gray-700 cursor-pointer"},"Apple Pay")]),e("li",null,[e("a",{onClick:t[9]||(t[9]=n(s=>r("/crypto"),["prevent"])),class:"flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text:white dark:hover:bg-gray-700 cursor-pointer"},"Crypto")])],2)]),e("li",null,[e("button",{onClick:t[10]||(t[10]=s=>a("settings")),type:"button",class:"flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700","aria-controls":"dropdown-settings"},oe),e("ul",{id:"dropdown-settings",class:g([{hidden:!l.settings},"py-2 space-y-2"])},[e("li",null,[e("a",{onClick:t[11]||(t[11]=n(s=>r("/accounts"),["prevent"])),class:"flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 cursor-pointer"},"Accounts")])],2)])])])]),e("div",ae,[e("main",null,[b(o.$slots,"default")])])])]))}};export{ie as _};
