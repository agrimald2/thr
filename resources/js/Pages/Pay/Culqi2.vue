<template>
    <div>
        <button @click="openCulqiModal">Pagar con Culqi</button>
    </div>
</template>

<script>
export default {
    props: ["publicKey", "payment", 'amount'],
    data() {
        return {
            amount: this.amount,
            currency: this.payment.currency,
            description: this.payment.description,
        }
    },
    mounted() {
        const script = document.createElement("script");
        script.src = "https://checkout.culqi.com/js/v4";
        script.async = true;
        script.onload = this.initCulqi;
        document.body.appendChild(script);

        setTimeout(function () {
            Culqi.open();
        }, 3000);

    },
    methods: {
        initCulqi() {
            Culqi.publicKey = this.publicKey;
            Culqi.settings({
                title: "THR",
                currency: this.currency,
                amount: this.amount,
                order: "ord_live_0CjjdWhFpEAZlxlz",
            });

            document.addEventListener("payment_event", this.handlePaymentEvent);
        },
        openCulqiModal() {
            Culqi.open();
        },
        handlePaymentEvent(e) {
            if (e.detail.object === "token") {
                const token = e.detail.token_id;
                console.log("Se ha creado un token:", token);
            } else if (e.detail.object === "order") {
                const order = e.detail.order;
                console.log("Se ha creado un objeto Order:", order);
            } else {
                console.log("Error:", e.detail.error);
                alert(e.detail.error.user_message);
            }
        },
    },
};
</script>
