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

  generateFilteredCategoriesHtml(type) {
    return this.#categories
      .filter((category) => type === category.type)
      .map((category) => this.#createHtmlCategoryElement(category))
      .join("");
  }

  #createHtmlCategoryElement(category) {
    return `<div class="category-item">
        <img class="category-icon" src="${category.iconUrl}">
        <p class="category-name">${category.name}</p>
      </div>`;
  }
}

export default ProductCategory;
