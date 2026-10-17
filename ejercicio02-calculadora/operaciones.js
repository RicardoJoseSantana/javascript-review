var num1;
var digit1 = [];
var num2;
var digit2 = [];
var opera;
var paso = 1;
var numeroPulsado;


var contenedor = document.getElementById('teclas');
var pantalla = document.getElementById('display');


contenedor.addEventListener('click', (tecla) => {

    if (tecla.target.tagName === 'BUTTON') {
  
        let teclaPulsada = tecla.target.id;

        switch (paso) {
            case 1: //cuando se ingresa el primer número
                if (digit1.length != 0) {

                    numeroPulsado = Number(teclaPulsada);
                    digit1.push(numeroPulsado);
                    num1 = 0;

                    for (let i = 0; i < digit1.length; i++) {
                        num1 += digit1[i]*(10**(digit1.length-i-1));
                    }

                    console.log(num1);
                    pantalla.value = num1;

                } else {
                    numeroPulsado = Number(teclaPulsada);
                    digit1.push(numeroPulsado);

                    pantalla.value = numeroPulsado;                   
                    num1 = numeroPulsado;
                }
                break;

            case 2: //cuando se ingresa el operador

                break;

            case 3: //cuando se ingresa el segundo número

                break;

            case 4: //cuando se ingresa el igual

                break;
        }

    }

});


