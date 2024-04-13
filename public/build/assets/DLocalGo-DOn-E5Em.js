import _ from"./Error-Bv6qLq1a.js";import p from"./Loader-BeaUHoaC.js";import{_ as f}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{s as i,o as s,e as a,a as e,t as n,b as x,f as l,c as y}from"./app-DvJvjdOE.js";const b={props:["payment","response","error"],components:{ErrorModal:_,Loader:p},data(){return{loader:!1,haveError:!1,errorText:"",amount:this.payment.amount,currency:this.payment.currency,description:this.payment.description}},mounted(){console.log(this.response),console.log("All good")},computed:{isValid(){return!0}},methods:{onSubmit(){this.pay()},pay(){this.loader=!0,console.log(this.response.redirect_url),window.location.href=this.response.redirect_url},showError(c){this.haveError=!0,this.errorText=c},handleCloseModal(){this.haveError=!1}}},g={class:"flex items-center justify-center min-h-screen bg-gray-100"},w={class:"p-6 text-center bg-white shadow-lg rounded-lg"},v={class:"max-w-md mx-auto shadow-lg rounded-xl bg-white p-6"},E={class:"text-2xl font-semibold text-gray-800"},k={class:"uppercase"},C={class:"text-gray-600 text-sm"},M={class:"credit-card w-full sm:w-auto shadow-lg mx-auto rounded-xl bg-white"},T={class:"mt-2 p-4"},V={key:0,class:"flex justify-center center mb-2"},B=["disabled"];function L(c,d,o,S,t,r){const u=i("Loader"),m=i("ErrorModal");return s(),a("div",g,[e("div",w,[e("div",v,[e("div",E,[e("span",null,n(o.payment.amount),1),e("span",k,n(o.payment.currency),1)]),e("p",C,n(o.payment.reference_code)+" | "+n(o.payment.description),1)]),e("div",M,[e("footer",T,[t.loader?(s(),a("div",V,[x(u)])):l("",!0),t.loader?l("",!0):(s(),a("button",{key:1,class:"mt-2 submit-button px-4 py-3 rounded-full bg-blue-300 text-blue-900 focus:ring focus:outline-none w-full text-xl font-semibold transition-colors",disabled:!r.isValid,onClick:d[0]||(d[0]=(...h)=>r.onSubmit&&r.onSubmit(...h))}," Pay now ",8,B))])])]),t.haveError?(s(),y(m,{key:0,errorText:t.errorText,onClose:r.handleCloseModal},null,8,["errorText","onClose"])):l("",!0)])}const G=f(b,[["render",L],["__scopeId","data-v-f5b3ffb5"]]);export{G as default};
