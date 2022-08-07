const body = document.querySelector('body');
const callButton = body.querySelector('.callback-button');
const modal = body.querySelector('.modal');

const aboutText = document.querySelector('.about__text-container');

aboutText.classList.remove('about__show-text');

callButton.addEventListener('click', (e) => {
  e.preventDefault();
  modal.classList.remove('visually-hidden');
  body.style.overflow = 'hidden';
});
