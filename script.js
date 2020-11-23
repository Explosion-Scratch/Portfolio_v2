window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 5);
});
function menu() {
  var menuToggle = document.querySelector(".toggle");
  var menu = document.querySelector(".menu");
  menuToggle.classList.toggle("active");
  menu.classList.toggle("active");
  var body = document.querySelector(".sections");
  if (menu.classList.contains("active")) {
    body.style.transition = "filter .4s ease";
    document.documentElement.style.overflow = "hidden";
    body.style.pointerEvents = "none";
    body.style.filter = "brightness(30%)";
  } else {
    body.style.transition = "filter .4s ease";
    body.style.pointerEvents = "auto";
    document.documentElement.style.overflow = "auto";
    body.style.filter = "";
  }
}
function sendemail() {
  window.open(
    `mailto:explosion.scratch@gmail.com?subject=${
      document.querySelector(".formBx form input").value
    }&body=${document.querySelector(".formBx form textarea").value}`
  );
}
document.addEventListener("click", function (e) {
  if (e.target.tagName === "BODY") {
    closemenu();
  }
});
function closemenu() {
  var menu = document.querySelector(".menu");
  var body = document.querySelector(".sections");
  var menuToggle = document.querySelector(".toggle");
  menu.classList.remove("active");
  menuToggle.classList.remove("active");
  body.style.transition = "filter .4s ease";
  body.style.pointerEvents = "auto";
  document.documentElement.style.overflow = "auto";
  body.style.filter = "";
}

function validateemail() {
  var input = document.querySelector(".formBx form textarea");
  if (email().length > 2048) {
    input.style.border = "1px solid tomato";
    document.querySelector(".formBx form button").disabled = true;
  } else {
    input.style.border = "1px solid transparent";
  }
}
function email() {
  var email = `mailto:explosion.scratch@gmail.com?subject=${
    document.querySelector(".formBx form input").value
  }&body=${document.querySelector(".formBx form textarea").value}`;
  return email;
}
