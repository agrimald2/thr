import{y as b,s as y,o as i,e as c,a as e,t as s,l,z as g,f as p,p as u,q as v,b as w,c as D,x as m,A as k,B as S}from"./app-DV5MAQqT.js";import C from"./Error-B2jnbRCy.js";import I from"./Loader-CkPXiTwq.js";import{_ as N}from"./_plugin-vue_export-helper-DlAUqK2U.js";const T={props:["merchantId","publicKey","payment"],components:{ErrorModal:C,Loader:I},data(){return{loader:!1,haveError:!1,errorText:"",cardData:{cardholder:"",cardNumber:"",expired:{month:"",year:""},securityCode:"",email:""},amount:this.payment.amount,currency:this.payment.currency,description:this.payment.description,card:"front",openpay:{token:"",endpoint_sandbox_openpay:"https://api.openpay.pe/v1/",endpoint_payment:"/api/pay/openpay",deviceSessionId:"",openpay_id:this.merchantId,openpay_key:this.publicKey,openpay_sandbox_mode:!0}}},mounted(){OpenPay.setId(this.merchantId),OpenPay.setApiKey(this.publicKey),OpenPay.setSandboxMode(!0),this.openpay.deviceSessionId=OpenPay.deviceData.setup()},computed:{isValid(){return!(this.cardData.cardholder.length<5||this.cardData.cardNumber.replace(/\s/g,"").length<=12||this.cardData.expired.month===""||this.cardData.expired.year===""||this.cardData.securityCode.length<3)}},methods:{format(){this.cardData.cardNumber=this.cardData.cardNumber.replace(/\W/gi,"").replace(/(.{4})/g,"$1 ").trim()},noSpaces(){return this.cardData.cardNumber.replace(/\s/g,"")},onSubmit(){this.pay()},async pay(){this.loader=!0;let r=this.noSpaces();try{const a=await new Promise((d,h)=>{OpenPay.token.create({holder_name:this.cardData.cardholder,card_number:r,cvv2:this.cardData.securityCode,expiration_month:this.cardData.expired.month,expiration_year:this.cardData.expired.year},d,h)});if(this.openpay.token=a.data.id,this.openpay.token){console.log(this.openpay.token,"Token obtenido:");const d=await b.post(this.openpay.endpoint_payment,{amount:this.amount,currency:this.currency,description:this.description,deviceSessionId:this.openpay.deviceSessionId,email:this.cardData.email,last_name:this.cardData.cardholder,name:this.cardData.cardholder,token:this.openpay.token,account_id:this.payment.account_id,payment_id:this.payment.id});this.loader=!1,window.location.reload()}}catch(a){this.loader=!1,this.showError(a.data.description),console.log(a)}},showError(r){this.haveError=!0,this.errorText=r},handleCloseModal(){this.haveError=!1}}},f=r=>(k("data-v-dc29a420"),r=r(),S(),r),V={class:"flex items-center justify-center min-h-screen bg-gray-100"},E={class:"p-6 text-center bg-white shadow-lg rounded-lg"},M={class:"max-w-md mx-auto shadow-lg rounded-xl bg-white p-6"},P={class:"text-2xl font-semibold text-gray-800"},Y={class:"uppercase"},j={class:"text-gray-600 text-sm"},B={class:"credit-card w-full sm:w-auto shadow-lg mx-auto rounded-xl bg-white"},K={class:"flex flex-col justify-center items-center"},O={class:"relative"},U=f(()=>e("img",{class:"w-full h-auto",src:"https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/svg-cards/card-visa-front.png",alt:"front credit card"},null,-1)),L={class:"front bg-transparent text-lg w-full text-white px-12 absolute left-0 bottom-12"},A={class:"number mb-5 sm:text-xl"},R={class:"flex flex-row justify-between"},q={class:""},z={key:0},F={class:"relative"},W=f(()=>e("img",{class:"w-full h-auto",src:"https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/svg-cards/card-visa-back.png",alt:"back credit card"},null,-1)),G={class:"bg-transparent text-white text-xl w-full flex justify-end absolute bottom-20 px-8 sm:bottom-24 right-0 sm:px-12"},H={class:"border border-white w-16 h-9 flex justify-center items-center"},J=m('<ul class="flex" data-v-dc29a420><li class="mx-2" data-v-dc29a420><img class="w-16" src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/computop.png" alt="" data-v-dc29a420></li><li class="mx-2" data-v-dc29a420><img class="w-14" src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/verified-by-visa.png" alt="" data-v-dc29a420></li><li class="ml-5" data-v-dc29a420><img class="w-7" src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/mastercard-id-check.png" alt="" data-v-dc29a420></li></ul>',1),Q={class:"mt-4 p-4"},X={class:"my-3"},Z={class:"my-3"},$={class:"my-3 flex flex-col"},ee={class:"grid grid-cols-2 sm:grid-cols-4 gap-2"},te=m('<option value="" selected disabled data-v-dc29a420>MM</option><option value="01" data-v-dc29a420>01</option><option value="02" data-v-dc29a420>02</option><option value="03" data-v-dc29a420>03</option><option value="04" data-v-dc29a420>04</option><option value="05" data-v-dc29a420>05</option><option value="06" data-v-dc29a420>06</option><option value="07" data-v-dc29a420>07</option><option value="08" data-v-dc29a420>08</option><option value="09" data-v-dc29a420>09</option><option value="10" data-v-dc29a420>10</option><option value="11" data-v-dc29a420>11</option><option value="12" data-v-dc29a420>12</option>',13),ae=[te],oe=m('<option value="" selected disabled data-v-dc29a420>YY</option><option value="24" data-v-dc29a420>2024</option><option value="25" data-v-dc29a420>2025</option><option value="26" data-v-dc29a420>2026</option><option value="27" data-v-dc29a420>2027</option><option value="28" data-v-dc29a420>2028</option><option value="29" data-v-dc29a420>2029</option>',7),se=[oe],re={class:"mt-3"},de={class:"mt-2 p-4"},ne={key:0,class:"flex justify-center center mb-2"},le=["disabled"];function ie(r,a,d,h,t,n){const x=y("Loader"),_=y("ErrorModal");return i(),c("div",V,[e("div",E,[e("div",M,[e("div",P,[e("span",null,s(d.payment.amount),1),e("span",Y,s(d.payment.currency),1)]),e("p",j,s(d.payment.reference_code)+" | "+s(d.payment.description),1),e("p",null,s(d.merchantId),1)]),e("div",B,[e("header",K,[l(e("div",O,[U,e("div",L,[e("p",A,s(t.cardData.cardNumber!==""?t.cardData.cardNumber:"0000-0000-0000-0000"),1),e("div",R,[e("p",null,s(t.cardData.cardholder!==""?t.cardData.cardholder:"Card holder"),1),e("div",q,[e("span",null,s(t.cardData.expired.month),1),t.cardData.expired.month!==""?(i(),c("span",z,"/")):p("",!0),e("span",null,s(t.cardData.expired.year),1)])])])],512),[[g,t.card==="front"]]),l(e("div",F,[W,e("div",G,[e("div",H,[e("p",null,s(t.cardData.securityCode!==""?t.cardData.securityCode:"code"),1)])])],512),[[g,t.card==="back"]]),J]),e("main",Q,[e("div",X,[l(e("input",{type:"text",class:"block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none",placeholder:"Card holder",maxlength:"22","onUpdate:modelValue":a[0]||(a[0]=o=>t.cardData.cardholder=o)},null,512),[[u,t.cardData.cardholder]])]),e("div",Z,[l(e("input",{type:"text",class:"block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none",placeholder:"Card number","onUpdate:modelValue":a[1]||(a[1]=o=>t.cardData.cardNumber=o),onKeydown:a[2]||(a[2]=(...o)=>n.format&&n.format(...o)),onKeyup:a[3]||(a[3]=(...o)=>n.format&&n.format(...o)),maxlength:"19"},null,544),[[u,t.cardData.cardNumber]])]),e("div",$,[e("div",ee,[l(e("select",{class:"form-select appearance-none block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none","onUpdate:modelValue":a[4]||(a[4]=o=>t.cardData.expired.month=o)},ae,512),[[v,t.cardData.expired.month]]),l(e("select",{class:"form-select appearance-none block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none","onUpdate:modelValue":a[5]||(a[5]=o=>t.cardData.expired.year=o)},se,512),[[v,t.cardData.expired.year]]),l(e("input",{type:"text",class:"block w-full col-span-2 px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none",placeholder:"Security code",maxlength:"4","onUpdate:modelValue":a[6]||(a[6]=o=>t.cardData.securityCode=o),onFocus:a[7]||(a[7]=o=>t.card="back"),onBlur:a[8]||(a[8]=o=>t.card="front")},null,544),[[u,t.cardData.securityCode]])]),e("div",re,[l(e("input",{type:"email",class:"block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none",placeholder:"Email",maxlength:"45","onUpdate:modelValue":a[9]||(a[9]=o=>t.cardData.email=o)},null,512),[[u,t.cardData.email]])])])]),e("footer",de,[t.loader?(i(),c("div",ne,[w(x)])):p("",!0),t.loader?p("",!0):(i(),c("button",{key:1,class:"mt-2 submit-button px-4 py-3 rounded-full bg-blue-300 text-blue-900 focus:ring focus:outline-none w-full text-xl font-semibold transition-colors",disabled:!n.isValid,onClick:a[10]||(a[10]=(...o)=>n.onSubmit&&n.onSubmit(...o))}," Pay now ",8,le))])])]),t.haveError?(i(),D(_,{key:0,errorText:t.errorText,onClose:n.handleCloseModal},null,8,["errorText","onClose"])):p("",!0)])}const he=N(T,[["render",ie],["__scopeId","data-v-dc29a420"]]);export{he as default};
