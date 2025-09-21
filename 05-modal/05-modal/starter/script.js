'use strict';
// select the modal element 
const modalEl = document.querySelector(`.modal`);

// select the overlay element
const overlayEl = document.querySelector(`.overlay`);

// select the close button 
const btnCloseModalEl = 
document.querySelector(`.close-modal`);

// select ALL the open buttons using querySelectorAll
const btnsOpenModalEl = document.querySelectorAll('.show-modal');

// verify our selections worked correctly
console.log('Open buttons:', btnsOpenModalEl.length);

// SECTION 2 //

// c reate our openModal function
const openModal = function () {
  // remove the hidden class from modal to make it visible
  modalEl.classList.remove('hidden');

  // =remove the hidden class from overlay to show dark background
  overlayEl.classList.remove('hidden');
};

// SECTION 3 //

// attach openModal function to all show buttons
btnsOpenModalEl.forEach(btn => btn.addEventListener('click', openModal));

// attach closeModal function to close button
btnCloseModalEl.addEventListener('click', closeModal);

// attach closeModal function to overlay click
overlayEl.addEventListener('click', closeModal);