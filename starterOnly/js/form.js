class Form {
  constructor() {
    this.firstName = document.getElementById("first");
    this.lastName = document.getElementById("last");
    this.email = document.getElementById("email");
    this.birthdate = document.getElementById("birthdate");
    
    this.quantity = document.getElementById("quantity");
  }

  validate() {
    if (this.firstName.length < 3) {
      console.log("Veuillez entrer 2 caractères ou plus pour le champ du nom");
      return false
    }

    if (this.lastName.length < 3) {
      console.log("Veuillez entrer 2 caractères ou plus pour le champ du nom");
      return false
    }

    const EMAIL_REGEX = "/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$";

    if (this.email.match(EMAIL_REGEX)) {
      console.log("L'adresse email est valide");
    } else {
      console.log("L'adresse email n'est pas valide");
      return false
    }

    if (isEmpty(this.birthdate)) {
      console.log("Vous devez saisir votre date de naissance");
      return false
    }

    if (isNaN(this.quantity)) {
      console.log("Une valeur numérique doit être saisie");
      return false
    }

    return true
  }

  isEmpty(str) {
    return (!str || str.length === 0 );
  }

  //TODO: City input validation
  //TODO: User condition validation
  //TODO: Maintaine data if the form not passed all validation 
}

export default Form;