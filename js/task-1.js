const categoriesList = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach(categories => {
  const categoriesName = categories.querySelector('h2').textContent;
  const categoriesLength = categories.querySelectorAll('li').length;
  console.log(`Category: ${categoriesName}`);
  console.log(`Elements: ${categoriesLength}`);
});
