function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalClose = document.querySelectorAll(".close");
const formData = document.querySelectorAll(".formData");
const content = document.querySelectorAll(".content")[0];

// launch and close modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalClose.forEach((btn) => btn.addEventListener("click", closeModal));

// launch modal form
function launchModal() {
  content.style.animationName = "modalopen";
  modalbg.style.display = "block";
}

function closeModal() {
  content.style.animationName = "modalclose";
  content.style.animationFillMode = "forwards";
  setTimeout(() => {
    modalbg.style.display = "none";
  }, 800);
}
