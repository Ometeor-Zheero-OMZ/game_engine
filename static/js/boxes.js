class Boxes {
  constructor() {
    this.DOM = {};
    this.DOM.boxes = document.querySelectorAll(".box");
    this.DOM.heading = document.querySelector(".heading span");
    this.DOM.btn = document.querySelector(".btn");
    this.DOM.textStyle = this.autoChangeTextStyle.bind(this); // バインドされたメソッドを作成
    this.DOM.interval = setInterval(() => this.autoChangeBoxed(), 3000); // バインドされたメソッドを呼び出す
    this.colors = [
      "#efd81d",
      "#61dbfb",
      "#41b883",
      "#b52e31",
      "#43853d",
      "#cf6491",
      "#e04e39",
    ];
    this.techs = [
      "Atari Engine",
      "Atari 2D Games",
      "Atari Dot Maker",
      "Atari 3D Games",
      "Atari 3D Modeling",
      "Atari VR",
      "Atari Music Composer",
    ];
    this.current = 1;
    this.clickBoxes(); // clickBoxes メソッドを呼び出す
  }

  autoChangeTextStyle() {
    this.DOM.heading.style.color = this.colors[this.current - 1];
    this.DOM.heading.textContent = this.techs[this.current - 1];
    this.DOM.btn.style.backgroundColor = this.colors[this.current - 1];
    this.DOM.btn.firstElementChild.textContent = this.techs[this.current - 1];
  }

  autoChangeBoxed() {
    this.DOM.boxes.forEach((box) => {
      if (this.current > this.DOM.boxes.length) this.current = 1;
      if (box.classList[1].split("-")[1] * 1 === this.current) {
        box.classList.add("active");
      } else {
        box.classList.remove("active");
      }
    });
    this.DOM.textStyle(); // メソッドを呼び出す
    this.current++;
  }

  clickBoxes() {
    this.DOM.boxes.forEach((box) => {
      box.addEventListener("click", () => {
        this.DOM.boxes.forEach((cube) => {
          cube.classList.remove("active");
        });
        box.classList.add("active");
        this.current = box.classList[1].split("-")[1] * 1;
        this.DOM.textStyle(); // メソッドを呼び出す
        clearInterval(this.DOM.interval); // インターバルをクリア
      });
    });
  }
}

// function boxes() {
//   const boxes = document.querySelectorAll(".box");
//   const heading = document.querySelector(".heading span");
//   const btn = document.querySelector(".btn");

//   const colors = [
//     "#efd81d",
//     "#61dbfb",
//     "#41b883",
//     "#b52e31",
//     "#43853d",
//     "#cf6491",
//     "#e04e39",
//   ];

//   const techs = ["JS", "React", "Vue", "Angular", "Node", "Sass", "Ember"];

//   let current = 1;

//   const textStyle = () => {
//     heading.style.color = colors[current - 1];
//     heading.textContent = techs[current - 1];
//     btn.style.backgroundColor = colors[current - 1];
//     btn.firstElementChild.textContent = techs[current - 1];
//   };

//   let interval = setInterval(() => {
//     boxes.forEach((box) => {
//       if (current > boxes.length) current = 1; // reset current for looping each box
//       if (box.classList[1].split("-")[1] * 1 === current) {
//         box.classList.add("active");
//       } else {
//         box.classList.remove("active");
//       }
//     });
//     textStyle();
//     current++;
//   }, 3000);

//   boxes.forEach((box) => {
//     box.addEventListener("click", () => {
//       boxes.forEach((cube) => {
//         cube.classList.remove("active");
//       });
//       box.classList.add("active");
//       current = box.classList[1].split("-")[1] * 1;
//       textStyle();
//       clearInterval(interval);
//     });
//   });
// }
