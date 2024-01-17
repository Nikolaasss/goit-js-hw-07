function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

document.addEventListener('DOMContentLoaded', function () {
  const input = document.querySelector('input');
  const createButton = document.querySelector('[data-create]');
  const destroyButton = document.querySelector('[data-destroy]');
  const boxesContainer = document.getElementById('boxes');

  createButton.addEventListener('click', function () {
    const amount = Number(input.value);

    if (amount >= 1 && amount <= 100) {
      createBoxes(amount);
      input.value = '';
    } else {
      alert('Enter a number between 1 and 100.');
    }
  });

  destroyButton.addEventListener('click', function () {
    destroyBoxes();
  });

  function createBoxes(amount) {
    destroyBoxes(); // Очищення попередніх елементів

    let size = 30;
    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxesContainer.appendChild(box);

      size += 10;
    }
  }

  function destroyBoxes() {
    boxesContainer.innerHTML = '';
  }
});
