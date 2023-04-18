var juego = document.getElementById('juego');
var cartas = [
  { id: 1, icono: 'fa-diamond' },
  { id: 2, icono: 'fa-paper-plane-o' },
  { id: 3, icono: 'fa-anchor' },
  { id: 4, icono: 'fa-bolt' },
  { id: 5, icono: 'fa-cube' },
  { id: 6, icono: 'fa-anchor' },
  { id: 7, icono: 'fa-leaf' },
  { id: 8, icono: 'fa-bicycle' },
  { id: 9, icono: 'fa-diamond' },
  { id: 10, icono: 'fa-bomb' },
  { id: 11, icono: 'fa-leaf' },
  { id: 12, icono: 'fa-bomb' },
  { id: 13, icono: 'fa-bolt' },
  { id: 14, icono: 'fa-bicycle' },
  { id: 15, icono: 'fa-paper-plane-o' },
  { id: 16, icono: 'fa-cube' }
];
var cartasVolteadas = [];
var cartasCorrectas = [];
var final = document.createElement('div');

cartas = cartas.concat(cartas);

cartas.sort(function() {
    return
}