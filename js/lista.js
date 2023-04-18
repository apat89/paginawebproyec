var formulario = document.getElementById('formulario');
var inputTarea = document.getElementById('tarea');
var listaTareas = document.getElementById('lista');

formulario.addEventListener('submit', function(event) {
  event.preventDefault();
  var tarea = inputTarea.value.trim();
  if (tarea !== '') {
    agregarTarea(tarea);
    inputTarea.value = '';
  }
});

function agregarTarea(tarea) {
  var nuevaTarea = document.createElement('li');
  nuevaTarea.textContent = tarea;
  nuevaTarea.addEventListener('click', completarTarea);
  listaTareas.appendChild(nuevaTarea);
}

function completarTarea(event) {
  event.target.classList.toggle('completada');
}

listaTareas.addEventListener('contextmenu', function(event) {
  event.preventDefault();
  var tarea = event.target;
  tarea.remove();
});

