import{y as _,s as h,o as i,e as c,a as e,t as r,l,z as f,f as p,p as u,q as g,b,c as w,x as m,A as D,B as k}from"./app-Eei4XTAJ.js";import C from"./Error-vZmiO30b.js";import E from"./Loader-CTNa_o_-.js";import{_ as N}from"./_plugin-vue_export-helper-DlAUqK2U.js";const S={props:["merchantId","publicKey","payment"],components:{ErrorModal:C,Loader:E},data(){return{loader:!1,haveError:!1,errorText:"",cardData:{cardholder:"",cardNumber:"",expired:{month:"",year:""},securityCode:"",email:""},amount:this.payment.amount,currency:this.payment.currency,description:this.payment.description,card:"front",settings:{title:"Test",currency:"PEN",amount:8e3},client:{email:"test@gmail.com"}}},mounted(){},computed:{isValid(){return!(this.cardData.cardholder.length<5||this.cardData.cardNumber.replace(/\s/g,"").length<=12||this.cardData.expired.month===""||this.cardData.expired.year===""||this.cardData.securityCode.length<3)}},methods:{async createCulqui(){try{const s={settings:this.settings,client:this.client};new CulqiCheckout("pk_test_f1557f2f26c65043",s).open()}catch(s){console.error("Error opening Culqi checkout:",s),this.showError("Failed to open payment form.")}},format(){this.cardData.cardNumber=this.cardData.cardNumber.replace(/\W/gi,"").replace(/(.{4})/g,"$1 ").trim()},noSpaces(){return this.cardData.cardNumber.replace(/\s/g,"")},onSubmit(){this.pay()},async pay(){this.loader=!0,this.noSpaces();try{const s=await _.post(this.openpay.endpoint_payment,{amount:this.amount,currency:this.currency,description:this.description,deviceSessionId:this.openpay.deviceSessionId,email:this.cardData.email,last_name:this.cardData.cardholder,name:this.cardData.cardholder,token:this.openpay.token,account_id:this.payment.account_id,payment_id:this.payment.id});this.loader=!1,window.location.reload()}catch(s){this.loader=!1,this.showError(s.data.description),console.log(s)}},showError(s){this.haveError=!0,this.errorText=s},handleCloseModal(){this.haveError=!1}}},y=s=>(D("data-v-2125f005"),s=s(),k(),s),T={class:"flex items-center justify-center min-h-screen bg-gray-100"},V={class:"p-6 text-center bg-white shadow-lg rounded-lg"},q={class:"max-w-md mx-auto shadow-lg rounded-xl bg-white p-6"},M={class:"text-2xl font-semibold text-gray-800"},I={class:"uppercase"},Y={class:"text-gray-600 text-sm"},j={class:"credit-card w-full sm:w-auto shadow-lg mx-auto rounded-xl bg-white"},B={class:"flex flex-col justify-center items-center"},U={class:"relative"},K=y(()=>e("img",{class:"w-full h-auto",src:"https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/svg-cards/card-visa-front.png",alt:"front credit card"},null,-1)),L={class:"front bg-transparent text-lg w-full text-white px-12 absolute left-0 bottom-12"},F={class:"number mb-5 sm:text-xl"},P={class:"flex flex-row justify-between"},z={class:""},A={key:0},R={class:"relative"},W=y(()=>e("img",{class:"w-full h-auto",src:"https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/svg-cards/card-visa-back.png",alt:"back credit card"},null,-1)),G={class:"bg-transparent text-white text-xl w-full flex justify-end absolute bottom-20 px-8 sm:bottom-24 right-0 sm:px-12"},H={class:"border border-white w-16 h-9 flex justify-center items-center"},J=m('<ul class="flex" data-v-2125f005><li class="mx-2" data-v-2125f005><img class="w-16" src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/computop.png" alt="" data-v-2125f005></li><li class="mx-2" data-v-2125f005><img class="w-14" src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/verified-by-visa.png" alt="" data-v-2125f005></li><li class="ml-5" data-v-2125f005><img class="w-7" src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/mastercard-id-check.png" alt="" data-v-2125f005></li></ul>',1),O={class:"mt-4 p-4"},Q={class:"my-3"},X={class:"my-3"},Z={class:"my-3 flex flex-col"},$={class:"grid grid-cols-2 sm:grid-cols-4 gap-2"},ee=m('<option value="" selected disabled data-v-2125f005>MM</option><option value="01" data-v-2125f005>01</option><option value="02" data-v-2125f005>02</option><option value="03" data-v-2125f005>03</option><option value="04" data-v-2125f005>04</option><option value="05" data-v-2125f005>05</option><option value="06" data-v-2125f005>06</option><option value="07" data-v-2125f005>07</option><option value="08" data-v-2125f005>08</option><option value="09" data-v-2125f005>09</option><option value="10" data-v-2125f005>10</option><option value="11" data-v-2125f005>11</option><option value="12" data-v-2125f005>12</option>',13),te=[ee],oe=m('<option value="" selected disabled data-v-2125f005>YY</option><option value="24" data-v-2125f005>2024</option><option value="25" data-v-2125f005>2025</option><option value="26" data-v-2125f005>2026</option><option value="27" data-v-2125f005>2027</option><option value="28" data-v-2125f005>2028</option><option value="29" data-v-2125f005>2029</option>',7),ae=[oe],se={class:"mt-3"},re={class:"mt-2 p-4"},le={key:0,class:"flex justify-center center mb-2"};function ne(s,o,d,ie,t,n){const v=h("Loader"),x=h("ErrorModal");return i(),c("div",T,[e("div",V,[e("div",q,[e("div",M,[e("span",null,r(d.payment.amount),1),e("span",I,r(d.payment.currency),1)]),e("p",Y,r(d.payment.reference_code)+" | "+r(d.payment.description),1)]),e("div",j,[e("header",B,[l(e("div",U,[K,e("div",L,[e("p",F,r(t.cardData.cardNumber!==""?t.cardData.cardNumber:"0000-0000-0000-0000"),1),e("div",P,[e("p",null,r(t.cardData.cardholder!==""?t.cardData.cardholder:"Card holder"),1),e("div",z,[e("span",null,r(t.cardData.expired.month),1),t.cardData.expired.month!==""?(i(),c("span",A,"/")):p("",!0),e("span",null,r(t.cardData.expired.year),1)])])])],512),[[f,t.card==="front"]]),l(e("div",R,[W,e("div",G,[e("div",H,[e("p",null,r(t.cardData.securityCode!==""?t.cardData.securityCode:"code"),1)])])],512),[[f,t.card==="back"]]),J]),e("main",O,[e("div",Q,[l(e("input",{type:"text",class:"block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none",placeholder:"Card holder",maxlength:"22","onUpdate:modelValue":o[0]||(o[0]=a=>t.cardData.cardholder=a)},null,512),[[u,t.cardData.cardholder]])]),e("div",X,[l(e("input",{type:"text",class:"block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none",placeholder:"Card number","onUpdate:modelValue":o[1]||(o[1]=a=>t.cardData.cardNumber=a),onKeydown:o[2]||(o[2]=(...a)=>n.format&&n.format(...a)),onKeyup:o[3]||(o[3]=(...a)=>n.format&&n.format(...a)),maxlength:"19"},null,544),[[u,t.cardData.cardNumber]])]),e("div",Z,[e("div",$,[l(e("select",{class:"form-select appearance-none block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none","onUpdate:modelValue":o[4]||(o[4]=a=>t.cardData.expired.month=a)},te,512),[[g,t.cardData.expired.month]]),l(e("select",{class:"form-select appearance-none block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none","onUpdate:modelValue":o[5]||(o[5]=a=>t.cardData.expired.year=a)},ae,512),[[g,t.cardData.expired.year]]),l(e("input",{type:"text",class:"block w-full col-span-2 px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none",placeholder:"Security code",maxlength:"4","onUpdate:modelValue":o[6]||(o[6]=a=>t.cardData.securityCode=a),onFocus:o[7]||(o[7]=a=>t.card="back"),onBlur:o[8]||(o[8]=a=>t.card="front")},null,544),[[u,t.cardData.securityCode]])]),e("div",se,[l(e("input",{type:"email",class:"block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none",placeholder:"Email",maxlength:"45","onUpdate:modelValue":o[9]||(o[9]=a=>t.cardData.email=a)},null,512),[[u,t.cardData.email]])])])]),e("footer",re,[t.loader?(i(),c("div",le,[b(v)])):p("",!0),t.loader?p("",!0):(i(),c("button",{key:1,class:"mt-2 submit-button px-4 py-3 rounded-full bg-blue-300 text-blue-900 focus:ring focus:outline-none w-full text-xl font-semibold transition-colors",onClick:o[10]||(o[10]=(...a)=>n.createCulqui&&n.createCulqui(...a))}," Pay now "))])])]),t.haveError?(i(),w(x,{key:0,errorText:t.errorText,onClose:n.handleCloseModal},null,8,["errorText","onClose"])):p("",!0)])}const me=N(S,[["render",ne],["__scopeId","data-v-2125f005"]]);export{me as default};
