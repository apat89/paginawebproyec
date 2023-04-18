var audio = document.getElementById('audio');
var botonReproducir = document.getElementById('boton-reproducir');
var botonPausar = document.getElementById('boton-pausar');
var progreso = document.getElementById('progreso');

botonPausar.disabled = true;

function reproducir() {
  audio.play();
  botonReproducir.disabled = true;
  botonPausar.disabled = false;
  audio.addEventListener('timeupdate', actualizarProgreso);
}

function pausar() {
  audio.pause();
  botonReproducir.disabled = false;
  botonPausar.disabled = true;
}

function actualizarProgreso() {
  var duracion = audio.duration;
  var tiempoActual = audio.currentTime;
  var porcentajeProgreso = (tiempoActual / duracion) * 100;
  progreso.style.width = porcentajeProgreso + '%';
}

function saltar(posicion) {
  audio.currentTime = posicion;
  actualizarProgreso();
}
