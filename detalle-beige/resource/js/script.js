let mensajeBienvenida = document.querySelector('.mensaje-bienvenida');
let mensajeEleccion = document.querySelector('.mensaje-eleccion');
let respuestaNo = document.querySelector('.respuesta-no');
let respuestaSi = document.querySelector('.respuesta-si');

mensajeBienvenida.classList.add('d-block');
mensajeEleccion.classList.add('d-none');
respuestaNo.classList.add('d-none');
respuestaSi.classList.add('d-none');

// Button
btnContinuar = document.querySelector('#btn-continuar');
btnNo = document.querySelector('#btn-no');
btnSi = document.querySelector('#btn-si');
btnVolver = document.querySelector('#btn-volver');
btnFelicidades = document.querySelector('#btn-felicidades');

btnContinuar.textContent = 'Continuar';
btnNo.textContent = 'No';
btnSi.textContent = 'Si';
btnVolver.textContent = 'Volver';
btnFelicidades.textContent = 'Felicidades';

function continuar() {
  mensajeBienvenida.classList.remove('d-block');
  mensajeBienvenida.classList.add('d-none');
  mensajeEleccion.classList.remove('d-none');
  mensajeEleccion.classList.add('d-block');
  respuestaNo.classList.add('d-none');
  respuestaSi.classList.add('d-none');
}

function no() {
  mensajeEleccion.classList.remove('d-block');
  mensajeEleccion.classList.add('d-none');
  respuestaNo.classList.remove('d-none');
  respuestaNo.classList.add('d-block');
}

function si() {
  mensajeEleccion.classList.remove('d-block');
  mensajeEleccion.classList.add('d-none');
  respuestaSi.classList.remove('d-none');
  respuestaSi.classList.add('d-block');
}

function volver() {
  mensajeEleccion.classList.remove('d-none');
  mensajeEleccion.classList.add('d-block');
  respuestaNo.classList.remove('d-block');
  respuestaNo.classList.add('d-none');
}

function felicidades() {
  mensajeBienvenida.classList.remove('d-none');
  mensajeBienvenida.classList.add('d-block');
  respuestaSi.classList.remove('d-block');
  respuestaSi.classList.add('d-none');
}