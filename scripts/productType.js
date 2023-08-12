class ProductType {
  #types;

  constructor(types) {
    this.#types = types;
  }

  generateTypesHtml() {
    return this.#types
      .map((type) => this.#createHtmlTypeElement(type))
      .join("");
  }
  
  generateVegeTypesHtml() {
    return this.#types
      .filter((type) => !ProductType.NOT_VEGETERIAN_TYPES.includes(type.id))
      .map((type) => this.#createHtmlTypeElement(type))
      .join("");
  }

  #createHtmlTypeElement(type) {
    return `<div class="type-item" accesskey="${type.id}">${type.name}</div>`;
  }

  static get NOT_VEGETERIAN_TYPES() {
    return ["MEAT", "COOKED_MEATS", "FISHES"];
  }
}

export default ProductType;
