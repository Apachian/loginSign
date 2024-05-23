const formOpenBtn = document.querySelector("#form-open"),
  home = document.querySelector(".home"),
  formcontainer = document.querySelector(".form-container"),
  formCloseBtn = document.querySelector(".form-close"),
  signUpBtn = document.querySelector("#signup"),
  loginBtn = document.querySelector("#loginIn"),
  pwHideShow = document.querySelectorAll(".pw-hide");

formOpenBtn.addEventListener("click", () => home.classList.add("show"));
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

pwHideShow.forEach((icon) => {
  icon.addEventListener("click", () => {
    let getPwInput = icon.parentElement.querySelector("input");
    if (getPwInput.type === "password") {
      getPwInput.type = "text";
      icon.classList.replace("fa-eye-slash", "fa-eye");
    } else {
      getPwInput.type = "password";
      icon.classList.replace("fa-eye", "fa-eye-slash");
    }
  });
});

signUpBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formcontainer.classList.add("active");
});

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formcontainer.classList.remove("active");
});
