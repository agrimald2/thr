import{y as _,o as b,e as y,a as e,l as s,z as g,t as n,f as v,p as c,q as p,x as m,A as f,B as x}from"./app-BQwZZ9jc.js";import{_ as w}from"./_plugin-vue_export-helper-DlAUqK2U.js";var u={BASE_URL:"/build/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const D={props:["openpay_id","openpay_key"],data(){return{cardData:{cardholder:"",cardNumber:"",expired:{month:"",year:""},securityCode:"",email:"agrimaldopci18@gmail.com"},amount:100,currency:"PEN",description:"Pago de prueba",card:"front",openpay:{token:"",endpoint_sandbox_openpay:"https://sandbox-api.openpay.pe/v1/",endpoint_payment:"/charge",deviceSessionId:"",openpay_id:this.openpay_id,openpay_key:this.openpay_key,openpay_sandbox_mode:!0}}},mounted(){OpenPay.setId(u.VITE_OPENPAY_ID),OpenPay.setApiKey(u.VITE_OPENPAY_PK),OpenPay.setSandboxMode(u.VITE_OPENPAY_SANDBOX_MODE==="true"),this.openpay.deviceSessionId=OpenPay.deviceData.setup()},computed:{isValid(){return!(this.cardData.cardholder.length<5||this.cardData.cardNumber.replace(/\s/g,"").length<=12||this.cardData.expired.month===""||this.cardData.expired.year===""||this.cardData.securityCode.length<3)}},methods:{format(){this.cardData.cardNumber=this.cardData.cardNumber.replace(/\W/gi,"").replace(/(.{4})/g,"$1 ").trim()},noSpaces(){return this.cardData.cardNumber.replace(/\s/g,"")},onSubmit(){this.pay()},async pay(){let l=this.noSpaces();try{const o=await new Promise((i,h)=>{OpenPay.token.create({holder_name:this.cardData.cardholder,card_number:l,cvv2:this.cardData.securityCode,expiration_month:this.cardData.expired.month,expiration_year:this.cardData.expired.year},i,h)});if(this.openpay.token=o.data.id,this.openpay.token){console.log(this.openpay.token,"Token obtenido:");const i=await _.post(this.openpay.endpoint_payment,{amount:this.amount,currency:this.currency,description:this.description,deviceSessionId:this.openpay.deviceSessionId,email:this.cardData.email,last_name:this.cardData.cardholder,name:this.cardData.cardholder,token:this.openpay.token});alert(`You did it ${this.cardData.cardholder}.`),console.log(i)}}catch(o){console.log(o)}}}},d=l=>(f("data-v-e86db060"),l=l(),x(),l),k={class:"flex items-center justify-center min-h-screen bg-gray-100"},S={class:"p-6 text-center bg-white shadow-lg rounded-lg"},N={class:"credit-card w-full sm:w-auto shadow-lg mx-auto rounded-xl bg-white"},P={class:"flex flex-col justify-center items-center"},V={class:"relative"},E=d(()=>e("img",{class:"w-full h-auto",src:"https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/svg-cards/card-visa-front.png",alt:"front credit card"},null,-1)),O={class:"front bg-transparent text-lg w-full text-white px-12 absolute left-0 bottom-12"},C={class:"number mb-5 sm:text-xl"},I={class:"flex flex-row justify-between"},M={class:""},T={key:0},Y={class:"relative"},U=d(()=>e("img",{class:"w-full h-auto",src:"https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/svg-cards/card-visa-back.png",alt:"back credit card"},null,-1)),A={class:"bg-transparent text-white text-xl w-full flex justify-end absolute bottom-20 px-8 sm:bottom-24 right-0 sm:px-12"},B={class:"border border-white w-16 h-9 flex justify-center items-center"},j=m('<ul class="flex" data-v-e86db060><li class="mx-2" data-v-e86db060><img class="w-16" src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/computop.png" alt="" data-v-e86db060></li><li class="mx-2" data-v-e86db060><img class="w-14" src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/verified-by-visa.png" alt="" data-v-e86db060></li><li class="ml-5" data-v-e86db060><img class="w-7" src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/mastercard-id-check.png" alt="" data-v-e86db060></li></ul>',1),R={class:"mt-4 p-4"},K=d(()=>e("h1",{class:"text-xl font-semibold text-gray-700 text-center"},"MONTO / MONEDA",-1)),X={class:"my-3"},L={class:"my-3"},q=d(()=>e("option",{value:"",selected:"",disabled:""},"Currency",-1)),z=d(()=>e("option",{value:"USD"},"USD",-1)),F=d(()=>e("option",{value:"PEN"},"PEN",-1)),G=d(()=>e("option",{value:"MXN"},"MXN",-1)),W=[q,z,F,G],H=d(()=>e("h1",{class:"text-xl font-semibold text-gray-700 text-center"},"Card payment",-1)),J={class:"my-3"},Q={class:"my-3"},Z={class:"my-3 flex flex-col"},$={class:"mb-2"},ee={class:"text-gray-700"},te={class:"grid grid-cols-2 sm:grid-cols-4 gap-2"},oe=m('<option value="" selected disabled data-v-e86db060>MM</option><option value="01" data-v-e86db060>01</option><option value="02" data-v-e86db060>02</option><option value="03" data-v-e86db060>03</option><option value="04" data-v-e86db060>04</option><option value="05" data-v-e86db060>05</option><option value="06" data-v-e86db060>06</option><option value="07" data-v-e86db060>07</option><option value="08" data-v-e86db060>08</option><option value="09" data-v-e86db060>09</option><option value="10" data-v-e86db060>10</option><option value="11" data-v-e86db060>11</option><option value="12" data-v-e86db060>12</option>',13),ae=[oe],se=m('<option value="" selected disabled data-v-e86db060>YY</option><option value="24" data-v-e86db060>2024</option><option value="25" data-v-e86db060>2025</option><option value="26" data-v-e86db060>2026</option><option value="27" data-v-e86db060>2027</option><option value="28" data-v-e86db060>2028</option><option value="29" data-v-e86db060>2029</option>',7),de=[se],re={class:"mt-6 p-4"},ne=["disabled"];function le(l,o,i,h,t,r){return b(),y("div",k,[e("div",S,[e("div",N,[e("header",P,[s(e("div",V,[E,e("div",O,[e("p",C,n(t.cardData.cardNumber!==""?t.cardData.cardNumber:"0000-0000-0000-0000"),1),e("div",I,[e("p",null,n(t.cardData.cardholder!==""?t.cardData.cardholder:"Card holder"),1),e("div",M,[e("span",null,n(t.cardData.expired.month),1),t.cardData.expired.month!==""?(b(),y("span",T,"/")):v("",!0),e("span",null,n(t.cardData.expired.year),1)])])])],512),[[g,t.card==="front"]]),s(e("div",Y,[U,e("div",A,[e("div",B,[e("p",null,n(t.cardData.securityCode!==""?t.cardData.securityCode:"code"),1)])])],512),[[g,t.card==="back"]]),j]),e("main",R,[K,e("div",X,[s(e("input",{type:"number",class:"block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none",placeholder:"Amount","onUpdate:modelValue":o[0]||(o[0]=a=>t.amount=a)},null,512),[[c,t.amount]])]),e("div",L,[s(e("select",{class:"form-select appearance-none block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none","onUpdate:modelValue":o[1]||(o[1]=a=>t.currency=a)},W,512),[[p,t.currency]])]),H,e("div",J,[s(e("input",{type:"text",class:"block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none",placeholder:"Card holder",maxlength:"22","onUpdate:modelValue":o[2]||(o[2]=a=>t.cardData.cardholder=a)},null,512),[[c,t.cardData.cardholder]])]),e("div",Q,[s(e("input",{type:"text",class:"block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none",placeholder:"Card number","onUpdate:modelValue":o[3]||(o[3]=a=>t.cardData.cardNumber=a),onKeydown:o[4]||(o[4]=(...a)=>r.format&&r.format(...a)),onKeyup:o[5]||(o[5]=(...a)=>r.format&&r.format(...a)),maxlength:"19"},null,544),[[c,t.cardData.cardNumber]])]),e("div",Z,[e("div",$,[e("label",ee,n(t.cardData.expired.month)+" / "+n(t.cardData.expired.year),1)]),e("div",te,[s(e("select",{class:"form-select appearance-none block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none","onUpdate:modelValue":o[6]||(o[6]=a=>t.cardData.expired.month=a)},ae,512),[[p,t.cardData.expired.month]]),s(e("select",{class:"form-select appearance-none block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none","onUpdate:modelValue":o[7]||(o[7]=a=>t.cardData.expired.year=a)},de,512),[[p,t.cardData.expired.year]]),s(e("input",{type:"text",class:"block w-full col-span-2 px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none",placeholder:"Security code",maxlength:"4","onUpdate:modelValue":o[8]||(o[8]=a=>t.cardData.securityCode=a),onFocus:o[9]||(o[9]=a=>t.card="back"),onBlur:o[10]||(o[10]=a=>t.card="front")},null,544),[[c,t.cardData.securityCode]])])])]),e("footer",re,[e("button",{class:"submit-button px-4 py-3 rounded-full bg-blue-300 text-blue-900 focus:ring focus:outline-none w-full text-xl font-semibold transition-colors",disabled:!r.isValid,onClick:o[11]||(o[11]=(...a)=>r.onSubmit&&r.onSubmit(...a))}," Pay now ",8,ne)])])])])}const pe=w(D,[["render",le],["__scopeId","data-v-e86db060"]]);export{pe as default};