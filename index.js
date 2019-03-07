// Declare Variables
const formBtn = document.querySelector('.submitBtn');
const modal = document.querySelector('#modal');
const modalContent = document.querySelector('.modal-content');
const closeBtn = document.querySelector('.close');
const mobileMenuBtn = document.querySelector('.mobile-nav');
const mobileLinks = document.querySelector('.mobile-links');

const onFormSubmit = e => {
  e.preventDefault();
  modal.style.display = 'block';
};

mobileMenuBtn.addEventListener('click', () => {
  mobileLinks.classList.toggle('show');

  if (mobileLinks.className.includes('show')) {
    document.querySelector('header').style.height = 'calc(100vh + 196px)';
  }
});

formBtn.addEventListener('click', onFormSubmit);

closeBtn.addEventListener('click', () => (modal.style.display = 'none'));

window.addEventListener('click', e => {
  if (e.target == modal || e.target == modalContent) {
    modal.style.display = 'none';
  }
});
