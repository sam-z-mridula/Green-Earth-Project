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
        <h2 onclick="loadPlants(${category.id})" class="pl-3 py-1 rounded-sm hover:bg-green-600 hover:text-white cursor-pointer mb-1 category-btn">
            ${category.category_name}
        </h2>
        `;
        categoryContainer.appendChild(newDiv);
    });
}

/* -------------- Active Feature using Event Delegation ------------ */
const allCategoryBtn = document.getElementById("all-category-btns");
allCategoryBtn.addEventListener("click", function(event) {
    const clickedBtn = event.target;

    if (clickedBtn.matches('.category-btn')) {
      const categoryBtn = allCategoryBtn.querySelectorAll(".category-btn");
      categoryBtn.forEach(btn => btn.classList.remove("active"));

      clickedBtn.classList.add("active");
    }
})

/* -------------- Plants by Category Functionality ------------ */
const loadPlants = (id) => {

    fetch(`https://openapi.programming-hero.com/api/category/${id}`)
    .then((res) => res.json())
    .then((data) => displayPlants(data.plants))
};

loadPlants();

const displayPlants = (trees) => {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = ""; 

    trees.forEach(tree => {
        const newDiv = document.createElement("div");
        newDiv.innerHTML = `
            <div id="card" class="bg-white p-3 rounded-lg shadow-sm">
                <div class="h-40 bg-[url(${tree.image})] bg-cover bg-center rounded-lg mb-2"></div>

            <h1 class="font-semibold mt-2 mb-1">${tree.name}</h1>
            <p class="text-gray-600 text-xs mb-3">${tree.description}</p>
            <div class="flex justify-between items-center mb-3">
              <span
                class="bg-green-100 px-3 py-1 rounded-full text-[#15803d] text-sm font-medium"
                >${tree.category}</span
              >
              <span class="text-sm font-semibold">৳${tree.price}</span>
            </div>
            <button
              class="btn rounded-full bg-[#15803d] border-none text-white w-full h-8 md:h-10 text-[10px] md:text-sm shadow-none font-normal"
            >
              Add to Cart
            </button>
          </div>
        `;
        cardContainer.appendChild(newDiv);
    });
};

/* -------------- All Tree Functionality ------------ */
const loadAllTrees = () => {
    fetch("https://openapi.programming-hero.com/api/plants")
    .then((res) => res.json())
    .then((data) => displayAllTrees(data.plants))
};

const displayAllTrees = (trees) => {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";

    trees.forEach(tree => {
        const newDiv = document.createElement("div");
        newDiv.innerHTML = `
            <div id="card" class="bg-white p-3 rounded-lg shadow-sm">
                <div class="h-40 bg-[url(${tree.image})] bg-cover bg-center rounded-lg mb-2"></div>

            <h1 class="font-semibold mt-2 mb-1">${tree.name}</h1>
            <p class="text-gray-600 text-xs mb-3">${tree.description}</p>
            <div class="flex justify-between items-center mb-3">
              <span
                class="bg-green-100 px-3 py-1 rounded-full text-[#15803d] text-sm font-medium"
                >${tree.category}</span
              >
              <span class="text-sm font-semibold">৳${tree.price}</span>
            </div>
            <button
              class="btn rounded-full bg-[#15803d] border-none text-white w-full h-8 md:h-10 text-[10px] md:text-sm shadow-none font-normal"
            >
              Add to Cart
            </button>
          </div>
        `;
        cardContainer.appendChild(newDiv);
    });
};

window.onload = loadAllTrees();