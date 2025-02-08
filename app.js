let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = []; 
let numeroMaximo = 10;
let limiteDeSorteos = 5;  

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function verificarIntento() {
  let numeroDeUsuario= parseInt(document.getElementById('valorUsuario').value);

  console.log(intentos);
  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`); 
    document.getElementById('reiniciar').removeAttribute('disabled');
    
  } else {
    //el usuario no acertó
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento('p', 'El número secreto es menor'); 
    } else {
      asignarTextoElemento('p', 'El número secreto es mayor');
    }
    intentos++; 
    limpiarCaja(); //llamamos a la funcion para que limpie, si no acierto
  }
  return; 
}

//necesito crear una funcion que limpie para que no sea tedioso borrar el numero y volver a poner otro
function limpiarCaja() {
  let valorCaja = document.querySelector('#valorUsuario').value = ''; 
}

//para que el numero secreto sea aleatorio//
function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1; 
  // si el numero generado está en la lista

  console.log(numeroGenerado);
  console.log(listaNumerosSorteados);
  // Si ya sorteamos todos los numeros 
  if (listaNumerosSorteados.length == limiteDeSorteos) {
    asignarTextoElemento('p', 'Alcanzaste el límite de números sorteados!');
    document.querySelector('#jugar').setAttribute('disabled', 'true');

  } else { 

    if (listaNumerosSorteados.includes(numeroGenerado)) { 
    //el include recorre todo nuestro arreglo y verifica si algo ya existe, 
    // por lo tanto nos devuelve un true/false booleano y en el parametro va el valor a chequear 
     return generarNumeroSecreto(); // RECURSIVIDAD//
    } else {
    listaNumerosSorteados.push(numeroGenerado);
    return numeroGenerado;
    }
  }
}

function condicionesIniciales() {
  asignarTextoElemento('h1', 'Juego del número secreto');
  asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`); 
  numeroSecreto = generarNumeroSecreto(); //acá obtiene el valor por eso arriba cuando declaramos la variables pusimos 0
  intentos= 1;
}


function reiniciarJuego() { //aún no hay parametros, no es necesario
  //limpiar la caja
  limpiarCaja();
  //indicar mensaje de intervalo de numeros
  //generar el numero aleatorio 
  //inicializar el numero de intentos 
  condicionesIniciales();
  //deshabilitar el boton de nuevo juego
   document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();

