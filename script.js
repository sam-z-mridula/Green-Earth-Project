/* -------------- Categories Functionality ------------ */
const loadCategory = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((data) => displayCategory(data.categories))
};

loadCategory();

const displayCategory = (allCategories) => {
    const categoryContainer = document.getElementById("category-container");
    categoryContainer.innerHTML = "";

    allCategories.forEach(category => {
        const newDiv = document.createElement("div");
        newDiv.innerHTML = `
        <h2  class="pl-3 py-1 rounded-sm hover:bg-green-600 hover:text-white cursor-pointer mb-1">
            ${category.category_name}
        </h2>
        `;
        categoryContainer.appendChild(newDiv);
    });
}