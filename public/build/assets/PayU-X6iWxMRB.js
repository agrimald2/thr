import m from"./Error-vzM0e-ke.js";import h from"./Loader-CYLLbiKm.js";import{_ as p}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{s as i,o,e as s,a as e,t as r,b as _,f as c,c as y,B as f,C as g}from"./app-BpstmVV7.js";const v={props:["loginKey","publicKey","apiKey","accountId","merchantId","signature","payment","confirmURL","successURL"],components:{ErrorModal:m,Loader:h},data(){return{loader:!1,haveError:!1,errorText:"",cardData:{cardholder:"",cardNumber:"",expired:{month:"",year:""},securityCode:"",email:""},amount:this.payment.amount,currency:this.payment.currency,description:this.payment.description,payu:{endpoint:"https://api.payulatam.com",endpoint_payment:"/payments-api/4.0/service.cgi",deviceSessionId:"",sandbox_mode:!0,loginKey:this.loginKey,publicKey:this.publicKey,apiKey:this.apiKey,hashSignature:this.signature}}},mounted(){console.log(this.payu),console.log("All good")},computed:{isValid(){return!(this.cardData.cardholder.length<5||this.cardData.cardNumber.replace(/\s/g,"").length<=12||this.cardData.expired.month===""||this.cardData.expired.year===""||this.cardData.securityCode.length<3)}},methods:{format(){this.cardData.cardNumber=this.cardData.cardNumber.replace(/\W/gi,"").replace(/(.{4})/g,"$1 ").trim()},noSpaces(){return this.cardData.cardNumber.replace(/\s/g,"")},showError(a){this.haveError=!0,this.errorText=a},handleCloseModal(){this.haveError=!1}}},x=a=>(f("data-v-f3af9b3e"),a=a(),g(),a),b={method:"post",action:"https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu/"},w={class:"flex items-center justify-center min-h-screen bg-gray-100"},I={class:"p-6 text-center bg-white shadow-lg rounded-lg"},C={class:"max-w-md mx-auto shadow-lg rounded-xl bg-white p-6"},D={class:"text-2xl font-semibold text-gray-800"},E={class:"uppercase"},K={class:"text-gray-600 text-sm"},N={class:"credit-card w-full sm:w-auto shadow-lg mx-auto rounded-xl bg-white"},k=["value"],L=["value"],S=["value"],U=["value"],B=["value"],M=["value"],T=["value"],R=x(()=>e("input",{name:"test",type:"hidden",value:"1"},null,-1)),V=["value"],j=["value"],P={class:"mt-2 p-4"},A={key:0,class:"flex justify-center center mb-2"},W={key:1,class:"mt-2 submit-button px-4 py-3 rounded-full bg-blue-300 text-blue-900 focus:ring focus:outline-none w-full text-xl font-semibold transition-colors",type:"submit"};function q(a,z,t,F,n,d){const l=i("Loader"),u=i("ErrorModal");return o(),s("form",b,[e("div",w,[e("div",I,[e("div",C,[e("div",D,[e("span",null,r(t.payment.amount),1),e("span",E,r(t.payment.currency),1)]),e("p",K,r(t.payment.reference_code)+" | "+r(t.payment.description),1)]),e("div",N,[e("input",{name:"merchantId",type:"hidden",value:t.merchantId},null,8,k),e("input",{name:"accountId",type:"hidden",value:t.accountId},null,8,L),e("input",{name:"description",type:"hidden",value:t.payment.description},null,8,S),e("input",{name:"referenceCode",type:"hidden",value:t.payment.reference_code},null,8,U),e("input",{name:"amount",type:"hidden",value:t.payment.amount},null,8,B),e("input",{name:"currency",type:"hidden",value:t.payment.currency},null,8,M),e("input",{name:"signature",type:"hidden",value:t.signature},null,8,T),R,e("input",{name:"responseUrl",type:"hidden",value:t.confirmURL},null,8,V),e("input",{name:"confirmationUrl",type:"hidden",value:t.successURL},null,8,j),e("footer",P,[n.loader?(o(),s("div",A,[_(l)])):c("",!0),n.loader?c("",!0):(o(),s("button",W," Pay now "))])])]),n.haveError?(o(),y(u,{key:0,errorText:n.errorText,onClose:d.handleCloseModal},null,8,["errorText","onClose"])):c("",!0)])])}const Q=p(v,[["render",q],["__scopeId","data-v-f3af9b3e"]]);export{Q as default};
