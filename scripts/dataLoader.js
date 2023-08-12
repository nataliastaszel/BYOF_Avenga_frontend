import { showErrorToaster } from "./toaster";

const PRODUCT_TYPES_URL =
  "https://api-eko-bazarek.azurewebsites.net/api/products/types";
const PRODUCT_CATEGORIES_URL =
  "https://api-eko-bazarek.azurewebsites.net/api/products/categories";
const PRODUCT_CATEGORY_ITEM_URL =
  "https://api-eko-bazarek.azurewebsites.net/api/products/";

async function fetchDataFrom(url) {
  const response = await fetch(url);
  if (!response.ok) {
    showErrorToaster(response.statusText, response.status);
  }
  return await response.json();
}

function sortArrayByName(array) {
  return array.sort((a, b) => a.name.localeCompare(b.name));
}

export async function getProductTypes() {
  return sortArrayByName(await fetchDataFrom(PRODUCT_TYPES_URL));
}

export async function getProductCategories() {
  return sortArrayByName(await fetchDataFrom(PRODUCT_CATEGORIES_URL));
}

export async function getProductCategoriesItem(productCategoryId) {
  return await fetchDataFrom(PRODUCT_CATEGORY_ITEM_URL + productCategoryId);
}
