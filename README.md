## To - DO
Una multipasarela de pagos que admita distintas cuentas por cada una de las pasarelas de pago que se maneja

## Credentials
Estamos guardando las credenciales en la tabla accounts y poniéndolas en el .env, usando el id de cada cuenta como identificador:

Ejemplo:

#OPENPAY
1_OP_SECRET_KEY=
1_OP_PUBLIC_KEY=
1_OP_MERCHANT_ID=

#MERCADOPAGO
4_MP_PUBLIC_KEY=
4_MP_ACCESS_TOKEN=

#CULQUI
3_CQ_ID=
3_CQ_PUBLIC_KEY=
3_CQ_SECRET_KEY=


## Abreviaturas
OP      - OpenPay
MP      - MercadoPago
CQ      - Culqui
DLGO    - DeLocalGO

## Cuenta MercadoPago
correo: alonso.grimaldo@vici.la
código: Me lo envían al celular por whatsapp, me avisas

## Cuenta Culqui Sandbox
correo: agrimaldop@e-pask.com
contraseña: LOLeslomejor1$

## Set
php artisan migrate
php artisan db:seed 

Node 18 y PHP 8.1+