import{o as r,c as f,w as b,y as g,a as o,i as p,l as i,p as a,q as u,e as d,h as m,t as l,F as c,v as y}from"./app-DvJvjdOE.js";import{_}from"./AppLayout-Cac4SPhR.js";import"./Table-Cl2r-yPv.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const v={class:"py-12"},h={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},k={class:"p-4 bg-white overflow-hidden shadow-xl sm:rounded-lg"},w=o("h1",{class:"text-xl font-semibold mb-4"},"Create a Payment Link",-1),x=o("label",{for:"amount_usd",class:"block text-sm font-medium text-gray-700"},"Amount in USD",-1),U=o("label",{for:"currency",class:"block text-sm font-medium text-gray-700"},"Currency",-1),V=["value"],C=o("label",{for:"description",class:"block text-sm font-medium text-gray-700"},"Description",-1),B={for:"billed",class:"flex items-center"},F=o("span",{class:"ml-2 text-sm text-gray-700"},"Billed",-1),D=o("label",{for:"currency",class:"block text-sm font-medium text-gray-700"},"Account",-1),M=["value"],S=o("label",{for:"redirect_link",class:"block text-sm font-medium text-gray-700"},"Redirect Link",-1),q=o("div",{class:"flex justify-end"},[o("button",{type:"submit",class:"px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"},"Create Payment")],-1),L={props:["accounts","currencies"],data(){return{form:{amount_usd:"",currency:"",description:"",billed:!1,redirect_link:"",account_id:""}}},methods:{async submitForm(){try{const n=await g.post("/api/payments",this.form);this.$inertia.visit("/dashboard/payments")}catch{}}}},E=Object.assign(L,{__name:"Create",setup(n){return(s,t)=>(r(),f(_,{title:"Payments"},{default:b(()=>[o("div",v,[o("div",h,[o("div",k,[w,o("form",{onSubmit:t[6]||(t[6]=p((...e)=>s.submitForm&&s.submitForm(...e),["prevent"])),class:"space-y-6"},[o("div",null,[x,i(o("input",{type:"number",id:"amount_usd","onUpdate:modelValue":t[0]||(t[0]=e=>s.form.amount_usd=e),required:"",class:"mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"},null,512),[[a,s.form.amount_usd]])]),o("div",null,[U,i(o("select",{id:"currency","onUpdate:modelValue":t[1]||(t[1]=e=>s.form.currency=e),required:"",class:"mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"},[(r(!0),d(c,null,m(n.currencies,e=>(r(),d("option",{value:e.abbreviation},l(e.abbreviation)+" | "+l(e.tc),9,V))),256))],512),[[u,s.form.currency]])]),o("div",null,[C,i(o("textarea",{id:"description","onUpdate:modelValue":t[2]||(t[2]=e=>s.form.description=e),class:"mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"},null,512),[[a,s.form.description]])]),o("div",null,[o("label",B,[i(o("input",{type:"checkbox",id:"billed","onUpdate:modelValue":t[3]||(t[3]=e=>s.form.billed=e),class:"rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"},null,512),[[y,s.form.billed]]),F])]),o("div",null,[D,i(o("select",{id:"currency","onUpdate:modelValue":t[4]||(t[4]=e=>s.form.account_id=e),class:"mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"},[(r(!0),d(c,null,m(n.accounts,e=>(r(),d("option",{value:e.id},l(e.legal_representative)+" |"+l(e.payment_gateway),9,M))),256))],512),[[u,s.form.account_id]])]),o("div",null,[S,i(o("input",{type:"url",id:"redirect_link","onUpdate:modelValue":t[5]||(t[5]=e=>s.form.redirect_link=e),class:"mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"},null,512),[[a,s.form.redirect_link]])]),q],32)])])])]),_:1}))}});export{E as default};
