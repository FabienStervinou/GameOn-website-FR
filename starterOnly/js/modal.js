class Modal {

  constructor() {
    this.modalbg = document.querySelector(".bground");
    this.modalBtn = document.querySelectorAll(".modal-btn");
    this.modalBtnClose = document.querySelectorAll(".close");
    this.formData = document.querySelectorAll(".formData");
    this.closeModal();
  }

  init () {
    for (let i = 0; i < this.modalBtn.length; i++) {
      const btn = this.modalBtn[i];
      btn.addEventListener("click", this.launchModal, this.modalbg);
    };
    console.log(this.modalBtnClose);
    this.modalBtnClose.addEventListener("click", this.closeModal);
  }

  launchModal() {
    const modalbg = document.querySelector(".bground");
    modalbg.style.display = "block";
    // document.querySelector(".bground").style.display = "block";
  }

  closeModal() {
    const modalbg = document.querySelector(".bground");
    console.log(modalbg, this);
    
    this.modalbg.style.display = "none";

    // modalbg.childNodes[1].className += " closeAnimation";
    // modalbg.style.display = "none";
    // modalbg.childNodes[1].className = "content";
  }
}

export default Modal;
