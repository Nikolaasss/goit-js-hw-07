// Отримання елемента ul#categories
const categoriesList = document.getElementById('categories');

// Отримання всіх елементів li.item
const categoryItems = categoriesList.querySelectorAll('li.item');

// Виведення кількості категорій
console.log(`Кількість категорій: ${categoryItems.length}`);

// Цикл для обробки кожної категорії
categoryItems.forEach(category => {
  // Отримання заголовка категорії
  const categoryName = category.querySelector('h2').textContent;

  // Отримання кількості елементів у категорії
  const categoryElements = category.querySelectorAll('ul li').length;

  // Виведення інформації у консоль
  console.log(`Категорія: ${categoryName}`);
  console.log(`Кількість елементів: ${categoryElements}`);
  console.log('------------------------');
});
