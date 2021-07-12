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
const validationClose = document.querySelectorAll(".validation-close");
const validation = document.getElementById("btn-submit");
const formData = document.querySelectorAll(".formData");
const content = document.querySelectorAll(".content")[0];

// launch and close modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalClose.forEach((btn) => btn.addEventListener("click", closeModal));
validationClose.forEach((btn) => btn.addEventListener("click", closeModal));
validation.addEventListener("click", validate);  

// CLose modal if user clic outside modal content
window.onclick = function(e) {
  if (e.target == modalbg) {
    closeModal();
  }
}

// launch modal form
function launchModal() {
  content.style.animationName = "modalopen";
  modalbg.style.display = "flex";
}

// close modal with delay for animation
function closeModal() {
  content.style.animationName = "modalclose";
  setTimeout(() => {
    modalbg.style.display = "none";
  }, 800);
}

// view valdiation modal
function validationMessage() {
  let validationText = document.querySelector('.validation');
  let modalBody = document.querySelector('.modal-body');
  modalBody.style.display = 'none';
  validationText.style.display = 'flex';
  setTimeout(() => {
    document.getElementById("reserve").submit();
  }, 5000);
}

// validate form and input
function validate(e) {
  e.preventDefault();

  let firstForm = document.getElementById("first");
  let lastForm = document.getElementById("last");
  let emailForm = document.getElementById("email");
  let emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let birthdate = document.getElementById("birthdate");
  let quantity = document.getElementById("quantity");
  // Array radio input city
  let cityForm = document.querySelectorAll("[id^=location]");
  let cityFormChecked = document.querySelectorAll("[id^=location]:checked");
  let CGUForm = document.getElementById("checkbox1");

  let isValidate = true;

  if (firstForm.value.length < 2) {
    firstForm.parentNode.dataset.errorVisible = true;
    isValidate = false;
  } else {
    firstForm.parentNode.dataset.errorVisible = false;
  }
  
  if (lastForm.value.length < 2) {
    lastForm.parentNode.dataset.errorVisible = true;
    isValidate = false;
  } else {
    lastForm.parentNode.dataset.errorVisible = false;
  }

  if (emailRegex.test(emailForm.value) == false) {
    emailForm.parentNode.dataset.errorVisible = true;
    isValidate = false;
  } else {
    emailForm.parentNode.dataset.errorVisible = false;
  }

  if (birthdate.value.length == "") {
    birthdate.parentNode.dataset.errorVisible = true;
    isValidate = false;
  } else {
    birthdate.parentNode.dataset.errorVisible = false;
  }

  if (quantity.value.length == "" || isNaN(quantity.value) ) {
    quantity.parentNode.dataset.errorVisible = true;
    isValidate = false;
  } else {
    quantity.parentNode.dataset.errorVisible = false;
  }

  if (cityFormChecked.length <= 0) {
    cityForm[0].parentNode.dataset.errorVisible = true;
    isValidate = false;
  } else {
    cityForm[0].parentNode.dataset.errorVisible = false;
  }

  if (CGUForm.checked == false) {
    CGUForm.parentNode.dataset.errorVisible = true;
    isValidate = false;
  } else {
    CGUForm.parentNode.dataset.errorVisible = false;
  }

  if (isValidate == true) {
    validationMessage();
  }
  return isValidate;
}
