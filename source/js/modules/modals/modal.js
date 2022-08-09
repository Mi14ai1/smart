import {
  body,
  modal,
  modalForm,
  closeModalButton
} from '../data.js';
import {getScrollWidth} from '../../utils/utils.js';
import {maskHandler} from '../inputmask.js';

const inputName = modal.querySelector('input[name="name"]');
const modalScrollWidth = getScrollWidth();

const modalFormTel = modalForm.querySelector('input[type="tel"]');

const modalFormTelHandler = (evt) => {
  evt.preventDefault();
  maskHandler(evt.target);
};

modalFormTel.addEventListener('input', modalFormTelHandler);

const modalHandler = (evt) => {
  evt.stopPropagation();
  if (evt.target === modal || evt.target === closeModalButton) {
    closeModal();
    modal.removeEventListener('click', modalHandler);
    modalForm.removeEventListener('submit', modalSubmitHandler);
  }
};

const modalSubmitHandler = (evt) => {
  evt.preventDefault();
  modalForm.submit();
  closeModal();

};


const showModal = () => {
  inputName.focus();
  modal.classList.remove('visually-hidden');
  body.style.paddingRight = `${modalScrollWidth}px`;
  body.style.overflow = 'hidden';
  modal.addEventListener('click', modalHandler);
  modalForm.addEventListener('submit', modalSubmitHandler);
};

const closeModal = () => {
  modal.classList.add('visually-hidden');
  body.style.overflow = 'initial';
  body.style.paddingRight = 0;
  modalForm.reset();
  modalForm.removeEventListener('input', modalFormTelHandler);
  modal.removeEventListener('click', modalHandler);
  modalForm.removeEventListener('submit', modalSubmitHandler);
};

export {
  showModal,
  closeModal
};
