import ProductType from "./productType";

class ProductCategory {
  #categories;

  constructor(categories) {
    this.#categories = categories;
  }

  generateAllCategoriesHtml() {
    return this.#categories
      .map((category) => this.#createHtmlCategoryElement(category))
      .join("");
  }

  generateFilteredCategoriesHtml(productType) {
    return this.#categories
      .filter((category) => productType === category.type)
      .map((category) => this.#createHtmlCategoryElement(category))
      .join("");
  }

  generateVegeCategoriesHtml() {
    return this.#categories
      .filter((category) => !ProductType.NOT_VEGETERIAN_TYPES.includes(category.type))
      .map((category) => this.#createHtmlCategoryElement(category))
      .join("");
  }

  #createHtmlCategoryElement(category) {
    return `<div class="category-item" accesskey=${category.id}>
        <img class="category-icon" src="${category.iconUrl}">
        <p class="category-name">${category.name}</p>
      </div>`;
  }
}

export default ProductCategory;
