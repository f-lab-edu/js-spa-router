export default class ItemDetailPage {
  constructor({ $target }) {
    this.$target = $target;
    this.$page = document.createElement("div");
  }

  render() {
    this.$page.innerHTML = `
      <h1>아이템${this.itemId} 상세</h1>
    `;

    this.$target.appendChild(this.$page);
  }
}
