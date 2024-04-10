import{_ as g}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{z as i,o as y,e as w,x as E}from"./app-13GDqpOi.js";var c={};Object.defineProperty(c,"__esModule",{value:!0});var s=c.loadMercadoPago=void 0;const l="https://sdk.mercadopago.com/js/v2",k=/^https:\/\/sdk\.mercadopago\.com\/js\/v2\/?(\?.*)?$/,n="MercadoPago has already been initialized in your window, please remove the duplicate import",M="MercadoPago.js not available",P="Failed to load MercadoPago.js",S=()=>{for(var t=document.querySelectorAll(`script[src^="${l}"`),e=0;e<t.length;e++){var o=t[e];if(k.test(o.src))return o}return null},N=()=>{const t=document.createElement("script");t.src=l;const e=document.head||document.body;if(!e)throw new Error("Expected document.body or document.head not to be null. MercadoPago requires a <body> or a <head> element, please add on your project.");return e.appendChild(t),t};let d=null;const T=()=>(d!==null||(d=new Promise((t,e)=>{if(typeof window>"u"){t(null);return}if(window.MercadoPago){console.warn(n),t(window.MercadoPago);return}try{let o=S();o?console.warn(n):o||(o=N()),o.addEventListener("load",()=>{window.MercadoPago?t(window.MercadoPago):e(new Error(M))}),o.addEventListener("error",()=>{e(new Error(P))})}catch(o){e(o);return}})),d);s=c.loadMercadoPago=T;const I={class:"flex items-center justify-center min-h-screen bg-gray-100"},A=E('<div class="p-6 text-center bg-white shadow-lg rounded-lg" data-v-137058b6><div class="credit-card w-full sm:w-auto shadow-lg mx-auto rounded-xl bg-white" data-v-137058b6><main class="mt-4 p-4" data-v-137058b6><form id="form-checkout" data-v-137058b6><div id="form-checkout__cardNumber" class="container" data-v-137058b6></div><div id="form-checkout__expirationDate" class="container" data-v-137058b6></div><div id="form-checkout__securityCode" class="container" data-v-137058b6></div><input type="text" id="form-checkout__cardholderName" data-v-137058b6><select id="form-checkout__issuer" data-v-137058b6></select><select id="form-checkout__installments" data-v-137058b6></select><select id="form-checkout__identificationType" data-v-137058b6></select><input type="text" id="form-checkout__identificationNumber" data-v-137058b6><input type="email" id="form-checkout__cardholderEmail" data-v-137058b6><button type="submit" id="form-checkout__submit" data-v-137058b6>Pagar</button><progress value="0" class="progress-bar" data-v-137058b6>Cargando...</progress></form></main></div></div>',1),x=[A],C={__name:"MercadoPago",async setup(t){let e,o;[e,o]=i(()=>s()),await e,o();const u=([e,o]=i(()=>new window.MercadoPago("TEST-603ad88a-3821-4a03-8dfd-d5dc949e7c60")),e=await e,o(),e).cardForm({amount:"100.5",iframe:!0,form:{id:"form-checkout",cardNumber:{id:"form-checkout__cardNumber",placeholder:"Numero de tarjeta"},expirationDate:{id:"form-checkout__expirationDate",placeholder:"MM/YY"},securityCode:{id:"form-checkout__securityCode",placeholder:"Código de seguridad"},cardholderName:{id:"form-checkout__cardholderName",placeholder:"Titular de la tarjeta"},issuer:{id:"form-checkout__issuer",placeholder:"Banco emisor"},installments:{id:"form-checkout__installments",placeholder:"Cuotas"},identificationType:{id:"form-checkout__identificationType",placeholder:"Tipo de documento"},identificationNumber:{id:"form-checkout__identificationNumber",placeholder:"Número del documento"},cardholderEmail:{id:"form-checkout__cardholderEmail",placeholder:"E-mail"}},callbacks:{onFormMounted:r=>{if(r)return console.warn("Form Mounted handling error: ",r);console.log("Form mounted")},onSubmit:r=>{r.preventDefault();const{paymentMethodId:a,issuerId:m,cardholderEmail:_,amount:p,token:h,installments:f,identificationNumber:b,identificationType:v}=u.getCardFormData();fetch("/process_payment",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:h,issuer_id:m,payment_method_id:a,transaction_amount:Number(p),installments:Number(f),description:"Descripción del producto",payer:{email:_,identification:{type:v,number:b}}})})},onFetching:r=>{console.log("Fetching resource: ",r);const a=document.querySelector(".progress-bar");return a.removeAttribute("value"),()=>{a.setAttribute("value","0")}}}});return(r,a)=>(y(),w("div",I,x))}},L=g(C,[["__scopeId","data-v-137058b6"]]);export{L as default};