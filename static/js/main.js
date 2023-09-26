class Main {
  constructor() {
    this.form = new Form();
    this.boxes = new Boxes();
    this.hamburger = new hamburger();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new Main();
});
