import ProductType from "./productType";
import ProductCategory from "./productCategory";
import {
  getProductCategories,
  getProductTypes,
  getProductCategoriesItem,
} from "./dataLoader";

let productCategories;
let productTypes;
const vegeToggleCheckbox = document.querySelector('input[type="checkbox"]');
const categoriesContainer = document.querySelector(".categories");
const typesContainer = document.querySelector(".types");

function insertTypesIntoDom() {
  typesContainer.innerHTML = productTypes.generateTypesHtml();
  addEventListenerToTypeItems();
}

function addEventListenerToTypeItems() {
  const typeItems = document.querySelectorAll(".type-item");
  for (const typeItem of typeItems) {
    typeItem.addEventListener("click", () => {
      const productFilteringType = typeItem.accessKey;
      updateDomWithFilteredProductCategories(productFilteringType);

      updateSelectedTypeItem(typeItem);
    });
  }
}

function updateDomWithFilteredProductCategories(productFilteringType) {
  categoriesContainer.innerHTML =
    productCategories.generateFilteredCategoriesHtml(productFilteringType);
  addEventListenerToCategoryItems();
}

function updateSelectedTypeItem(typeItem) {
  const previousSelectedItem = document.querySelector(".selected-item");
  if (previousSelectedItem)
    previousSelectedItem.classList.remove("selected-item");
  typeItem.classList.add("selected-item");
}

function insertAllCategoriesIntoDom() {
  categoriesContainer.innerHTML = productCategories.generateAllCategoriesHtml();
}

function addEventListenerToCategoryItems() {
  const categoryItems = document.querySelectorAll(".category-item");
  for (const categoryItem of categoryItems) {
    categoryItem.addEventListener("click", async () => {
      const productCategoryItemId = categoryItem.accessKey;
      await getProductCategoriesItem(productCategoryItemId);
    });
  }
}

function addVegeToggleButtonEventListner() {
  const vegeToggleButton = document.querySelector(".vege-toggle-button");
  vegeToggleButton.addEventListener("click", vegeToggleCheckboxClickHandler);
}

function vegeToggleCheckboxClickHandler() {
  if (vegeToggleCheckbox.checked) {
    categoriesContainer.innerHTML =
      productCategories.generateVegeCategoriesHtml();
    typesContainer.innerHTML = productTypes.generateVegeTypesHtml();
    addEventListenerToTypeItems();
  } else {
    insertAllCategoriesIntoDom();
    insertTypesIntoDom();
  }
  addEventListenerToCategoryItems();
}

function resetVegeToggleButton() {
  vegeToggleCheckbox.checked = false;
}

window.addEventListener("load", async () => {
  productTypes = new ProductType(await getProductTypes());
  productCategories = new ProductCategory(await getProductCategories());
  insertTypesIntoDom();
  insertAllCategoriesIntoDom();
  addEventListenerToCategoryItems();
  resetVegeToggleButton();
  addVegeToggleButtonEventListner();
});
