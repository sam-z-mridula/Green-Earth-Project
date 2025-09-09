let cartCount = 0;
let totalSum = 0;

/* -------------- Categories Functionality ------------ */
const loadCategory = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((data) => displayCategory(data.categories));
};

loadCategory();

const displayCategory = (allCategories) => {
  const categoryContainer = document.getElementById("category-container");
  categoryContainer.innerHTML = "";

  allCategories.forEach((category) => {
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `
        <h2 onclick="loadPlants(${category.id})" class="pl-3 py-1 rounded-sm hover:bg-green-600 hover:text-white cursor-pointer mb-1 category-btn">
            ${category.category_name}
        </h2>
        `;
    categoryContainer.appendChild(newDiv);
  });
};

/* -------------- Active Feature using Event Delegation ------------ */
const allCategoryBtn = document.getElementById("all-category-btns");
allCategoryBtn.addEventListener("click", function (event) {
  const clickedBtn = event.target;

  if (clickedBtn.matches(".category-btn")) {
    const categoryBtn = allCategoryBtn.querySelectorAll(".category-btn");
    categoryBtn.forEach((btn) => btn.classList.remove("active"));

    clickedBtn.classList.add("active");
  }
});

/* -------------- Spinner Functionality ------------ */
const loadSpinner = (status) => {
  const spinner = document.getElementById("loading-spinner");
  const cardContainer = document.getElementById("card-container");
  if (status) {
    spinner.classList.remove("hidden");
    cardContainer.classList.add("hidden");
  } else {
    spinner.classList.add("hidden");
    cardContainer.classList.remove("hidden");
  }
}

/* -------------- Cart Functionality ------------ */
const add2Cart = (plant) => {
  const cartContainer = document.getElementById("cart-container");

  const newDiv = document.createElement("div");
  newDiv.innerHTML = `
    <div class="bg-[#f0fdf4] flex justify-between items-center p-2 rounded-lg mb-2">
      <div>
        <h1 class="text-sm mb-1 font-semibold">${plant.name}</h1>
        <p class="text-gray-400">৳<span>${plant.price}</span> x 1</p>
      </div>
      <span class="remove cursor-pointer">✖</span>
    </div>
  `;

  newDiv.querySelector(".remove").addEventListener("click", () => {
    newDiv.remove();
    totalSum -= plant.price;
    document.getElementById("sum-total").innerText = totalSum;
  })
  cartContainer.appendChild(newDiv); 

  totalSum += plant.price;
  document.getElementById("sum-total").innerText = totalSum;
}

/* -------------- Plants by Category Functionality ------------ */
const loadPlants = (id) => {

  loadSpinner(true);

  fetch(`https://openapi.programming-hero.com/api/category/${id}`)
    .then((res) => res.json())
    .then((data) => displayPlants(data.plants));
};

loadPlants();

const displayPlants = (trees) => {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";

  trees.forEach((tree) => {
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `
            <div id="card" class="bg-white rounded-lg shadow-lg cursor-pointer">
        <div class="h-45 bg-[url(${tree.image})] bg-cover bg-center rounded-t-lg mb-2"></div>
        <div class="px-3 pb-3">
          <h1 onclick="loadDetail(${tree.id})" class="plant-name font-semibold mb-2">${tree.name}</h1>
          <p class="text-gray-600 text-xs mb-3">${tree.description}</p>
          <div class="flex justify-between items-center mb-3">
            <span class="bg-green-100 px-3 py-1 rounded-full text-[#15803d] text-sm font-medium">
            ${tree.category}</span>
            <span class="plant-price text-sm font-semibold">৳${tree.price}</span>
          </div>
          <button
          class="add-btn btn rounded-full bg-[#15803d] border-none text-white w-full h-8 md:h-10 text-[10px] md:text-sm shadow-none font-normal">
          Add to Cart
          </button>
        <div>
      </div>
        `;

        const btn = newDiv.querySelector(".add-btn");
        btn.addEventListener("click", () => {
          add2Cart(tree);
        });

    cardContainer.appendChild(newDiv);
  });

  loadSpinner(false);
};

/* ------------ Modal -------------- */
const loadDetail = (id) => {
  fetch(`https://openapi.programming-hero.com/api/plant/${id}`)
    .then((res) => res.json())
    .then((data) => displayDetail(data.plants));
};

const displayDetail = (plants) => {
  const detailsContainer = document.getElementById("details-container");
  detailsContainer.innerHTML = `
            <h1 class="font-bold text-lg mb-2">${plants.name}</h1>
            <div class="h-55 bg-[url(${plants.image})] bg-cover bg-center rounded-lg mb-2"></div>
            <p class="text-sm my-3"><span class="font-bold">Category:</span> ${plants.category}</p>
            <p class="text-sm mb-2"><span class="font-bold">Price:</span> ৳${plants.price}</p>
            <p class="text-sm"><span class="font-bold">Description:</span> ${plants.description}</p>
  `;
  document.getElementById("my_modal").showModal();
};

/* -------------- All Tree Functionality ------------ */
const loadAllTrees = () => {

  loadSpinner(true);

  fetch("https://openapi.programming-hero.com/api/plants")
    .then((res) => res.json())
    .then((data) => displayAllTrees(data.plants));
};

const displayAllTrees = (trees) => {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";

  trees.forEach((tree) => {
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `
      <div id="card" class="bg-white rounded-2xl shadow-sm cursor-pointer">
        <div class="h-45 bg-[url(${tree.image})] bg-cover bg-center rounded-t-2xl mb-2"></div>
        <div class="px-3 pb-3">
          <h1 onclick="loadDetail(${tree.id})" class="plant-name font-semibold mb-2">${tree.name}</h1>
          <p class="text-gray-600 text-xs mb-3">${tree.description}</p>
          <div class="flex justify-between items-center mb-3">
            <span class="bg-green-100 px-3 py-1 rounded-full text-[#15803d] text-sm font-medium">
            ${tree.category}</span>
            <span class="plant-price text-sm font-bold">৳${tree.price}</span>
          </div>
          <button
          class="add-btn btn rounded-full bg-[#15803d] border-none text-white w-full h-8 md:h-10 text-[10px] md:text-sm shadow-none font-normal">
          Add to Cart
          </button>
        <div>
      </div>
        `;

        const btn = newDiv.querySelector(".add-btn");
        btn.addEventListener("click", () => {
          add2Cart(tree);
        });

    cardContainer.appendChild(newDiv);
  });

  document.getElementById("sum-total").innerText = totalSum;
  loadSpinner(false);
};

window.onload = loadAllTrees();
