import Error from './js/error.js';
import Form from './js/form.js';
import Modal from './js/modal.js';
import Nav from './js/nav.js';

// TODO: Delete
const error = new Error();
const form = new Form();
const modal = new Modal();
const nav = new Nav();
console.log('CLG Class init');
console.log(error, form);

nav.init();
modal.init();

console.log('OK');
console.log('--------');
