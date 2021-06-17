class Nav {

  constructor() {
    this.nav = document.getElementById("myTopnav");
  }

  init() {
    this.nav.addEventListener("click", this.toggle);
  }

  toggle(e) {
    let nav = e.path[3];
    if (nav.className === "topnav") {
      nav.className += " responsive";
    } else {
      nav.className = "topnav";
    }
  }
}

export default Nav;
