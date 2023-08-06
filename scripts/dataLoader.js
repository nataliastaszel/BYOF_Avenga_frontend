const PRODUCT_TYPES_URL =
  "https://api-eko-bazarek.azurewebsites.net/api/products/types";
const PRODUCT_CATEGORIES_URL =
  "https://api-eko-bazarek.azurewebsites.net/api/products/categories";

async function fetchDataFrom(url) {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
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
