const categoriesListRef = document.querySelector('#categories');
const numberOfCategories = categoriesListRef.children.length;

console.log(`Number of categories: ${numberOfCategories}`);

[...categoriesListRef.children].forEach((item) => {
    const categoryName = item.querySelector('h2').textContent;
    const countOfCategoryElements = item.querySelectorAll('li').length;

    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${countOfCategoryElements}`);
});