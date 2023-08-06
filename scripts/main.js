import ProductType from "./productType";
import ProductCategory from "./productCategory";
import { getProductCategories, getProductTypes } from "./dataLoader";

let productCategories;
let productTypes;

function insertTypesIntoDom() {
  document.querySelector(".types").innerHTML = productTypes.generateTypesHtml();
  addEventListenerToTypeItems();
}

function addEventListenerToTypeItems() {
  const typeItems = document.querySelectorAll(".type-item");
  for (const typeItem of typeItems) {
    typeItem.addEventListener("click", () => {
      document.querySelector(".categories").innerHTML =
        productCategories.generateFilteredCategoriesHtml(typeItem.accessKey);
    });
  }
}

function insertAllCategoriesIntoDom() {
  document.querySelector(".categories").innerHTML =
    productCategories.generateAllCategoriesHtml();
}

window.addEventListener("load", async () => {
  productTypes = new ProductType(await getProductTypes());
  productCategories = new ProductCategory(await getProductCategories());
  insertTypesIntoDom();
  insertAllCategoriesIntoDom();
});
