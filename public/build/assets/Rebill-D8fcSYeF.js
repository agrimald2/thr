import{o as n,e as u,a as e,t as a,l as c,p as l,A as m,B as h}from"./app-9pntS5Lc.js";import{_ as p}from"./_plugin-vue_export-helper-DlAUqK2U.js";const _={props:["organization_id","api_key","amount","customer","payment"],data(){return{cardData:{cardholderDNI:"",cardholder:"",cardNumber:"",expired:{month:"",year:""},securityCode:"",email:"agrimaldopci18@gmail.com"},amount:this.amount,currency:"PEN",description:"Pago de prueba",card:"front",rebill:{organization_id:this.organization_id,api_key:this.api_key,api_url:"https://api.rebill.com/v2"},rebill_checkout:null}},mounted(){this.rebill_checkout=new Rebill.PhantomSDK(this.rebill),this.rebill_checkout.setElements("rebill_elements"),this.rebill_checkout.setCustomer(this.customer)},computed:{isValid(){return!(this.cardData.cardholder.length<5||this.cardData.cardNumber.replace(/\s/g,"").length<=12||this.cardData.expired.month===""||this.cardData.expired.year===""||this.cardData.securityCode.length<3)}},methods:{format(){this.cardData.cardNumber=this.cardData.cardNumber.replace(/\W/gi,"").replace(/(.{4})/g,"$1 ").trim()},noSpaces(){return this.cardData.cardNumber.replace(/\s/g,"")},onSubmit(){this.pay()},async pay(){this.rebill_checkout.setCardHolder({name:this.cardData.cardholder,identification:{type:"DNI",value:this.cardData.cardholderDNI}}),this.rebill_checkout.setTransaction()}}},i=t=>(m("data-v-b3b8a5fa"),t=t(),h(),t),b={class:"flex items-center justify-center min-h-screen bg-gray-100"},f={class:"p-6 text-center bg-white shadow-lg rounded-lg"},g={class:"max-w-md mx-auto shadow-lg rounded-xl bg-white p-6"},y={class:"text-2xl font-semibold text-gray-800"},x={class:"uppercase"},D={class:"text-gray-600 text-sm"},w={class:"credit-card w-full sm:w-auto shadow-lg mx-auto rounded-xl bg-white"},k={class:"mb-4"},v=i(()=>e("label",{for:"cardholder",class:"block text-sm font-medium text-gray-700"},"Card Holder",-1)),N={class:"mb-4"},I=i(()=>e("label",{for:"dni",class:"block text-sm font-medium text-gray-700"},"DNI",-1)),S=i(()=>e("div",{id:"rebill_elements"},null,-1));function C(t,r,s,B,o,V){return n(),u("div",b,[e("div",f,[e("div",g,[e("div",y,[e("span",null,a(s.payment.amount),1),e("span",x,a(s.payment.currency),1)]),e("p",D,a(s.payment.reference_code)+" | "+a(s.payment.description),1),e("p",null,a(t.publicKey),1)]),e("div",w,[e("div",k,[v,c(e("input",{type:"text",id:"cardholder","onUpdate:modelValue":r[0]||(r[0]=d=>o.cardData.cardholder=d),class:"mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"},null,512),[[l,o.cardData.cardholder]])]),e("div",N,[I,c(e("input",{type:"text",id:"dni","onUpdate:modelValue":r[1]||(r[1]=d=>o.cardData.cardholderDNI=d),class:"mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",placeholder:"Document number"},null,512),[[l,o.cardData.cardholderDNI]])]),S])])])}const P=p(_,[["render",C],["__scopeId","data-v-b3b8a5fa"]]);export{P as default};
