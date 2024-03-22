import{y as p,s as d,o as a,e as i,a as t,t as s,b as y,f as l,c as f}from"./app-CPQGWO3q.js";import _ from"./Error-CvCtEbGS.js";import x from"./Loader-CVPGwszb.js";import{_ as g}from"./_plugin-vue_export-helper-DlAUqK2U.js";const b={props:["merchantId","publicKey","payment"],components:{ErrorModal:_,Loader:x},data(){return{loader:!1,haveError:!1,errorText:"",cardData:{cardholder:"",cardNumber:"",expired:{month:"",year:""},securityCode:"",email:""},amount:this.payment.amount,currency:this.payment.currency,description:this.payment.description,card:"front",settings:{title:"Test",currency:"PEN",amount:8e3},client:{email:"test@gmail.com"}}},mounted(){this.$nextTick(()=>{let e=document.createElement("script");e.src="https://checkout.culqi.com/js/v4",e.onload=()=>{document.addEventListener("payment_event",n=>{if(Culqi.token){let r=Culqi.token.id;console.log("Se ha creado un token:"+r)}else console.log(Culqi.error),alert(Culqi.error.user_message)})},document.body.appendChild(e)})},computed:{isValid(){return!(this.cardData.cardholder.length<5||this.cardData.cardNumber.replace(/\s/g,"").length<=12||this.cardData.expired.month===""||this.cardData.expired.year===""||this.cardData.securityCode.length<3)}},methods:{async createCulqui(){try{Culqi.publicKey="pk_test_f1557f2f26c65043",Culqi.settings({title:"Culqi Store",currency:"PEN",amount:1e3}),Culqi.open()}catch(e){console.error("Error opening Culqi checkout:",e),this.showError("Failed to open payment form.")}},format(){this.cardData.cardNumber=this.cardData.cardNumber.replace(/\W/gi,"").replace(/(.{4})/g,"$1 ").trim()},noSpaces(){return this.cardData.cardNumber.replace(/\s/g,"")},onSubmit(){this.pay()},async pay(){this.loader=!0,this.noSpaces();try{const e=await p.post(this.openpay.endpoint_payment,{amount:this.amount,currency:this.currency,description:this.description,deviceSessionId:this.openpay.deviceSessionId,email:this.cardData.email,last_name:this.cardData.cardholder,name:this.cardData.cardholder,token:this.openpay.token,account_id:this.payment.account_id,payment_id:this.payment.id});this.loader=!1,window.location.reload()}catch(e){this.loader=!1,this.showError(e.data.description),console.log(e)}},showError(e){this.haveError=!0,this.errorText=e},handleCloseModal(){this.haveError=!1}}},C={class:"flex items-center justify-center min-h-screen bg-gray-100"},k={class:"p-6 text-center bg-white shadow-lg rounded-lg"},v={class:"max-w-md mx-auto shadow-lg rounded-xl bg-white p-6"},w={class:"text-2xl font-semibold text-gray-800"},E={class:"uppercase"},q={class:"text-gray-600 text-sm"},D={class:"credit-card w-full sm:w-auto shadow-lg mx-auto rounded-xl bg-white"},N={class:"mt-2 p-4"},S={key:0,class:"flex justify-center center mb-2"};function T(e,n,r,M,o,c){const u=d("Loader"),m=d("ErrorModal");return a(),i("div",C,[t("div",k,[t("div",v,[t("div",w,[t("span",null,s(r.payment.amount),1),t("span",E,s(r.payment.currency),1)]),t("p",q,s(r.payment.reference_code)+" | "+s(r.payment.description),1)]),t("div",D,[t("footer",N,[o.loader?(a(),i("div",S,[y(u)])):l("",!0),o.loader?l("",!0):(a(),i("button",{key:1,class:"mt-2 submit-button px-4 py-3 rounded-full bg-blue-300 text-blue-900 focus:ring focus:outline-none w-full text-xl font-semibold transition-colors",onClick:n[0]||(n[0]=(...h)=>c.createCulqui&&c.createCulqui(...h))}," Pay now "))])])]),o.haveError?(a(),f(m,{key:0,errorText:o.errorText,onClose:c.handleCloseModal},null,8,["errorText","onClose"])):l("",!0)])}const j=g(b,[["render",T],["__scopeId","data-v-28c3d6c8"]]);export{j as default};
