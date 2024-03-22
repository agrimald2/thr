import{_ as u}from"./AppLayout-XmdQ3Pn9.js";import p from"./Table-B6YpfLhy.js";import{d as b,o as r,c as g,w as f,y,a as e,g as m,e as x,f as w,b as h}from"./app-Eei4XTAJ.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const _={class:"py-12"},v={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},k={class:"p-4 bg-white overflow-hidden shadow-xl sm:rounded-lg"},C=e("div",{class:"flex flex-wrap -mx-3 mb-6"},[e("div",{class:"w-full md:w-1/3 px-3 mb-6 md:mb-0"},[e("label",{class:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",for:"start-date"}," Inicio "),e("input",{class:"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"start-date",type:"date"})]),e("div",{class:"w-full md:w-1/3 px-3"},[e("label",{class:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",for:"end-date"}," Fin "),e("input",{class:"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"end-date",type:"date"})]),e("div",{class:"w-full md:w-1/3 px-3 mb-6 md:mb-0"},[e("label",{class:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",for:"search-input"}," Búsqueda "),e("input",{class:"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"search-input",type:"text",placeholder:"COD REFERENCIA / DESCRIPCIÓN"})])],-1),E={class:"flex justify-between items-center mb-6"},P=e("i",{class:"fas fa-file-excel"},null,-1),j={key:0,class:"flex flex-wrap -mx-3"},B=e("div",{class:"w-full md:w-1/4 px-3 mb-6 md:mb-0"},[e("label",{class:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",for:"currency-select"}," Moneda "),e("select",{class:"block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"currency-select"},[e("option",null,"USD"),e("option",null,"EUR"),e("option",null,"GBP")])],-1),N=e("div",{class:"w-full md:w-1/4 px-3 mb-6 md:mb-0"},[e("label",{class:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",for:"gateway-select"}," Pasarela "),e("select",{class:"block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"gateway-select"},[e("option",null,"Pasarela 1"),e("option",null,"Pasarela 2")])],-1),R=e("div",{class:"w-full md:w-1/4 px-3 mb-6 md:mb-0"},[e("label",{class:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",for:"account-select"}," Cuenta "),e("select",{class:"block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"account-select"},[e("option",null,"Cuenta 1"),e("option",null,"Cuenta 2")])],-1),V=e("div",{class:"w-full md:w-1/4 px-3"},[e("label",{class:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",for:"status-select"}," Estado "),e("select",{class:"block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"status-select"},[e("option",null,"Activo"),e("option",null,"Inactivo")])],-1),I=[B,N,R,V],S={class:"mt-2 p-4 bg-white overflow-hidden shadow-xl sm:rounded-lg"},A={props:{},data(){return{payments:[]}},methods:{async getPayments(){try{const o=await y.get("/api/payments");this.payments=o.data}catch(o){console.error("Error fetching payments:",o)}},exportToCSV(){const o=[],s=Object.keys(this.payments[0]);o.push(s.join(","));for(const c of this.payments){const d=s.map(i=>`"${(""+c[i]).replace(/"/g,'\\"')}"`);o.push(d.join(","))}const n=o.join(`
`),a=new Blob([n],{type:"text/csv"}),l=window.URL.createObjectURL(a),t=document.createElement("a");t.setAttribute("hidden",""),t.setAttribute("href",l),t.setAttribute("download","payments.csv"),document.body.appendChild(t),t.click(),document.body.removeChild(t)}},created(){this.getPayments()}},D=Object.assign(A,{__name:"Index",setup(o){const s=b(!1);function n(){s.value=!s.value}return(a,l)=>(r(),g(u,{title:"Payments"},{default:f(()=>[e("div",_,[e("div",v,[e("div",k,[C,e("div",E,[e("button",{onClick:n,class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"button"}," Más filtros "),e("button",{onClick:l[0]||(l[0]=(...t)=>a.exportToCSV&&a.exportToCSV(...t)),class:"bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"button"},[P,m(" Exportar Excel ")])]),s.value?(r(),x("div",j,I)):w("",!0)]),e("button",{class:"my-2 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"button",onClick:l[1]||(l[1]=t=>a.$inertia.visit("/dashboard/payments/create"))}," Nuevo "),e("div",S,[h(p,{payments:a.payments},null,8,["payments"])])])])]),_:1}))}});export{D as default};
