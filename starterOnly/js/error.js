class Error {
  constructor(errorMessage) {
    this.errorMessage = errorMessage;
  }

  injectMessage (errorMessgae) {
    console.log(errorMessgae);
  }
}

export default Error;
