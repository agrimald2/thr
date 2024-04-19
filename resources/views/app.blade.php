<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
        <script src="https://kit.fontawesome.com/2780e63ff4.js" crossorigin="anonymous"></script>

        <!-- Scripts -->
        @routes
        @vite(['resources/js/app.js', "resources/js/Pages/{$page['component']}.vue"])
        @inertiaHead

        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>

    </head>
    <body class="font-sans antialiased">

    <script type="text/javascript" src="https://js.openpay.pe/openpay.v1.min.js"></script>
    <script type='text/javascript' src="https://js.openpay.pe/openpay-data.v1.min.js"></script>

    <script src="https://sdk.mercadopago.com/js/v2"></script>
    <script src="https://checkout.culqi.com/js/v4"></script>
    
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.6.8/axios.min.js" integrity="sha512-PJa3oQSLWRB7wHZ7GQ/g+qyv6r4mbuhmiDb8BjSFZ8NZ2a42oTtAq5n0ucWAwcQDlikAtkub+tPVCw4np27WCg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

        @inertia

        <?php
        $orderId = request()->route('reference_code');
        ?>

        <input type="hidden" id="orderId" value="<?php echo $orderId; ?>">

    <script>
        window.culqi = function() {
            if (Culqi.token) {
                // ¡Objeto Token creado exitosamente!
                const token = Culqi.token.id;
                const orderId = document.getElementById('orderId').value;
                
                console.log('Se ha creado un Token: ', orderId);

                axios.post('/process-payment-culqi', { token, orderId })
                .then(response => {
                    console.dir(response);
                    Culqi.close();
                    let icon = 'success';
                    let text = '¡Order Payed!'; 
                    let button = '¡Finish!';

                    if(!response.data.success){
                        icon = 'error';
                        text = 'Payment Failed';
                        button = 'Retry';
                    }
                    Swal.fire({
                      title: text,
                      text: response.data.message,
                      icon: icon,
                      confirmButtonText: 'Next'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            window.location.reload(); // Refresca la página
                        }
                    });
                })
                .catch(error => {
                    console.log("Hola");
                    console.log(error);
                });
            } else if (Culqi.order) {
                // ¡Objeto Order creado exitosamente!
                const order = Culqi.order;
                console.log('Se ha creado el objeto Order: ', order);
            } else {
                // Mostramos JSON de objeto error en consola
                console.log('Error : ', Culqi.error);
            }
        }
    </script>
    </body>
</html>
