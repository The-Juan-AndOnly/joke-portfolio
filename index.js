// Declare Variables
const formBtn = document.querySelector('.submitBtn');
const modal = document.querySelector('#modal');
const modalContent = document.querySelector('.modal-content');
const closeBtn = document.querySelector('.close');

const onFormSubmit = e => {
  e.preventDefault;
  modal.style.display = 'block';
};

formBtn.addEventListener('click', onFormSubmit);

closeBtn.addEventListener('click', () => (modal.style.display = 'none'));

window.addEventListener('click', e => {
  if (e.target == modal || e.target == modalContent) {
    modal.style.display = 'none';
  }
});
