//Inicia el juego se selecciona un # al azar para adivinar

let numeroAzar = Math.floor(Math.random()*50) + 1
let numeroEntrada = document.getElementById('numeroEntrada')
let mensaje = document.getElementById('mensaje')
let intento = document.getElementById('intento')
let intentos = 0

//Esta funcion se inicia cuando se oprime el boton chequear.

function chequearResultado(){
    intentos ++ 
    intento.textContent = intentos
    let numeroIngresado = parseInt(numeroEntrada.value)

    if (numeroIngresado < 1 || numeroIngresado > 50 || isNaN (numeroIngresado)){
        mensaje.textContent = 'Por favor, introduce un número valido entre 1 y 50'
        mensaje.style.color = 'red';
        return
    }

    if(numeroIngresado == numeroAzar){
        mensaje.textContent = 'Felicitaciones! ¡Has adivinado el numero!';
        mensaje.style.color = 'green';
        numeroEntrada.disabled = true;
    }
    else if(numeroIngresado < numeroAzar){
        mensaje.textContent = 'Intenta con un numero mas alto, el numero a adivinar es mayor';
        mensaje.style.color ='red';
    }
    else{
        mensaje.textContent = 'Intenta con un numero mas bajo, el numero a adivinar es menor'
        mensaje.style.color = 'red';
    }
}

function reiniciar() {
    numeroAzar = Math.floor(Math.random() * 50) + 1;
    numeroEntrada.value = ''; // Limpiar el campo de entrada
    numeroEntrada.disabled = false; // Habilitar el campo de entrada
    intentos = 0;
    intento.textContent = intentos; // Reiniciar el contador de intentos
    mensaje.textContent = ''; // Limpiar el mensaje
}
