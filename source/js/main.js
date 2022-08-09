import {
  showModal
} from './modules/modals/modal.js';

import {
  makeAccordion,
  accordionHandler
} from './modules/accordion.js';

import {
  callButton,
  aboutText,
  mainForm,
  aboutButton,
  ABOUTBUTTONTEXT,
  WIDEVIEWPORT,
  accordion,
  body
} from './modules/data.js';


import {maskHandler} from './modules/inputmask.js';

const inputs = document.querySelectorAll('input[type="tel"]');

aboutText.classList.remove('about__show-text');

const callButtonHandler = (evt) => {
  evt.preventDefault();
  showModal();
};

if (WIDEVIEWPORT <= body.clientWidth) {
  callButton.addEventListener('click', callButtonHandler);
}

mainForm.addEventListener('submit', (evt)=>{
  evt.preventDefault();
  mainForm.submit();
  mainForm.reset();
});

aboutButton.addEventListener('click', ()=> {
  aboutText.classList.toggle('about__show-text');
  aboutButton.textContent = aboutButton.textContent === ABOUTBUTTONTEXT[0] ? ABOUTBUTTONTEXT[1] : ABOUTBUTTONTEXT[0];
});


makeAccordion();

window.addEventListener('resize', ()=> {
  if (WIDEVIEWPORT <= body.clientWidth) {
    callButton.removeEventListener('click', callButtonHandler);
    callButton.addEventListener('click', callButtonHandler);
  }
  accordion.removeEventListener('click', accordionHandler);
  makeAccordion();

});
// разбить на два

inputs.forEach((element) => element.addEventListener('input', maskHandler));
