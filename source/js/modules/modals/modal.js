import {
  body,
  modal,
  modalForm,
  closeModalButton
} from '../data.js';
import {getScrollWidth} from '../../utils/utils.js';

const inputName = modal.querySelector('input[name="name"]');
const modalScrollWidth = getScrollWidth();

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
  modal.removeEventListener('click', modalHandler);
  modalForm.removeEventListener('submit', modalSubmitHandler);
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
};

export {
  showModal,
  closeModal
};
