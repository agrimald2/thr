import{_ as n}from"./AppLayout-C74XiENT.js";import c from"./Table-CDOzMY9o.js";import{d,o as l,c as i,w as u,y as b,a as e,e as p,f as g,b as f,g as y}from"./app-13GDqpOi.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const x={class:"py-12"},m={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},w={class:"p-4 bg-white overflow-hidden shadow-xl sm:rounded-lg"},h=e("div",{class:"flex flex-wrap -mx-3 mb-6"},[e("div",{class:"w-full md:w-1/3 px-3 mb-6 md:mb-0"},[e("label",{class:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",for:"start-date"}," Inicio "),e("input",{class:"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"start-date",type:"date"})]),e("div",{class:"w-full md:w-1/3 px-3"},[e("label",{class:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",for:"end-date"}," Fin "),e("input",{class:"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"end-date",type:"date"})]),e("div",{class:"w-full md:w-1/3 px-3 mb-6 md:mb-0"},[e("label",{class:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",for:"search-input"}," Búsqueda "),e("input",{class:"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"search-input",type:"text",placeholder:"COD REFERENCIA / DESCRIPCIÓN"})])],-1),_=e("button",{class:"bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"button"},[e("i",{class:"fas fa-file-excel"}),y(" Exportar Excel ")],-1),k={key:0,class:"flex flex-wrap -mx-3"},v=e("div",{class:"w-full md:w-1/4 px-3 mb-6 md:mb-0"},[e("label",{class:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",for:"currency-select"}," Moneda "),e("select",{class:"block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"currency-select"},[e("option",null,"USD"),e("option",null,"EUR"),e("option",null,"GBP")])],-1),C=e("div",{class:"w-full md:w-1/4 px-3 mb-6 md:mb-0"},[e("label",{class:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",for:"gateway-select"}," Pasarela "),e("select",{class:"block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"gateway-select"},[e("option",null,"Pasarela 1"),e("option",null,"Pasarela 2")])],-1),E=e("div",{class:"w-full md:w-1/4 px-3 mb-6 md:mb-0"},[e("label",{class:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",for:"account-select"}," Cuenta "),e("select",{class:"block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"account-select"},[e("option",null,"Cuenta 1"),e("option",null,"Cuenta 2")])],-1),P=e("div",{class:"w-full md:w-1/4 px-3"},[e("label",{class:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",for:"status-select"}," Estado "),e("select",{class:"block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"status-select"},[e("option",null,"Activo"),e("option",null,"Inactivo")])],-1),N=[v,C,E,P],B={class:"mt-2 p-4 bg-white overflow-hidden shadow-xl sm:rounded-lg"},I={props:{},data(){return{payments:[]}},methods:{async getPayments(){try{const t=await b.get("/api/payments");this.payments=t.data}catch(t){console.error("Error fetching payments:",t)}}},created(){this.getPayments()}},j=Object.assign(I,{__name:"Index",setup(t){const o=d(!1);function r(){o.value=!o.value}return(s,a)=>(l(),i(n,{title:"Payments"},{default:u(()=>[e("div",x,[e("div",m,[e("div",w,[h,e("div",{class:"flex justify-between items-center mb-6"},[e("button",{onClick:r,class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"button"}," Más filtros "),_]),o.value?(l(),p("div",k,N)):g("",!0)]),e("button",{class:"my-2 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"button",onClick:a[0]||(a[0]=F=>s.$inertia.visit("/dashboard/payments/create"))}," Nuevo "),e("div",B,[f(c,{payments:s.payments},null,8,["payments"])])])])]),_:1}))}});export{j as default};
