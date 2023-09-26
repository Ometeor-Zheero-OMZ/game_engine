class Form {
  constructor() {
    this.DOM = {};
    this.DOM.signupModal = document.querySelector(".signup-form-wrapper");
    this.DOM.loginModal = document.querySelector(".login-form-wrapper");
    this.DOM.signupBtn = document.querySelector("#signup-btn");
    this.DOM.loginBtn = document.querySelector("#login-btn");
    this.DOM.signupX = document.querySelector(".signup-x");
    this.DOM.loginX = document.querySelector(".login-x");
    this.DOM.formContainer = document.querySelector(".form-container");
    this.openSignupForm = this._openSignupForm.bind(this);
    this.openLoginForm = this._openLoginForm.bind(this);
    this._openSignupForm();
    this._openLoginForm();
    this._closeSignupForm();
    this._closeLoginForm();
  }

  _openSignupForm() {
    this.DOM.signupBtn.addEventListener("click", () => {
      this.DOM.signupModal.classList.add("display");
      this.DOM.formContainer.classList.add("disable");
    });
  }

  _openLoginForm() {
    this.DOM.loginBtn.addEventListener("click", () => {
      this.DOM.loginModal.classList.add("display");
      this.DOM.formContainer.classList.add("disable");
    });
  }

  _closeSignupForm() {
    this.DOM.signupX.addEventListener("click", () => {
      this.DOM.signupModal.classList.remove("display");
      this.DOM.formContainer.classList.remove("disable");
    });
  }

  _closeLoginForm() {
    this.DOM.loginX.addEventListener("click", () => {
      this.DOM.loginModal.classList.remove("display");
      this.DOM.formContainer.classList.remove("disable");
    });
  }
}

// const signupModal = document.querySelector(".signup-form-wrapper");
// const loginModal = document.querySelector(".login-form-wrapper");
// const signupBtn = document.querySelector("#signup-btn");
// const loginBtn = document.querySelector("#login-btn");
// const signupX = document.querySelector(".signup-x");
// const loginX = document.querySelector(".login-x");
// const formContainer = document.querySelector(".form-container");

// signupBtn.addEventListener("click", () => {
//   signupModal.classList.add("display");
//   formContainer.classList.add("disable");
// });

// loginBtn.addEventListener("click", () => {
//   loginModal.classList.add("display");
//   formContainer.classList.add("disable");
// });

// signupX.addEventListener("click", () => {
//   signupModal.classList.remove("display");
//   formContainer.classList.remove("disable");
// });

// loginX.addEventListener("click", () => {
//   loginModal.classList.remove("display");
//   formContainer.classList.remove("disable");
// });
