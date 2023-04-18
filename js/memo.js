const cardsArray = ['p', 'g', 'o', 'c', 't', 'a','b'];

const board = document.getElementById('board');

let firstCard = null;
let secondCard = null;

const cards = [];

// Duplicar cada carta
for (let i = 0; i < cardsArray.length; i++) {
  cards.push(cardsArray[i], cardsArray[i]);
}

// Barajar cartas
cards.sort(() => Math.random() - 0.5);

// Crear elementos de las cartas
for (let i = 0; i < cards.length; i++) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.value = cards[i];
  board.appendChild(card);
}

board.addEventListener('click', handleCardClick);

function handleCardClick(event) {
  const target = event.target;

  if (!target.classList.contains('card')) return;

  if (!firstCard) {
    firstCard = target;
    firstCard.textContent = target.dataset.value;
    firstCard.classList.add('selected');
    return;
  }

  secondCard = target;
  secondCard.textContent = target.dataset.value;

  if (firstCard.dataset.value === secondCard.dataset.value) {
    firstCard.classList.add('matched');
    secondCard.classList.add('matched');
    firstCard = null;
    secondCard = null;
    checkGameEnd();
    return;
  }

  setTimeout(() => {
    firstCard.textContent = '';
    firstCard.classList.remove('selected');
    secondCard.textContent = '';
    firstCard = null;
    secondCard = null;
  }, 1000);
}

function checkGameEnd() {
  const matchedCards = document.querySelectorAll('.matched');
  if (matchedCards.length === cards.length) {
    alert('Ganaste');
  }
}
