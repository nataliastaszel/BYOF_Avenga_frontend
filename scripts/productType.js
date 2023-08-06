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

  #createHtmlTypeElement(type) {
    return `<div class="type-item" accesskey="${type.id}">${type.name}</div>`;
  }
}

export default ProductType;
