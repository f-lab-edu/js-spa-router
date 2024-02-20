export default class ItemListPage {
  constructor({ $target }) {
    this.$target = $target;
    this.$page = document.createElement("div");
    this.data = {
      itemList: [
        { id: 1, text: "아이템1" },
        { id: 2, text: "아이템2" },
        { id: 3, text: "아이템3" },
      ],
    };
  }

  render() {
    this.$page.innerHTML = `
      <h1>아이템 목록</h1>
      <ul class='list'>
      ${this.data.itemList
        .map((item) => {
          return `
            <li class='item' data-id=${item.id}>${item.text}</li>
          `;
        })
        .join("")}
      </ul>
    `;

    this.$target.appendChild(this.$page);
  }
}
