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

// create our openModal function
let lastFocusedButton = null;

const openModal = function () {
  // remove the hidden class from modal to make it visible
  modalEl.classList.remove('hidden');

  // remove the hidden class from overlay to show dark background
  overlayEl.classList.remove('hidden');

  // save last focused element
  lastFocusedButton = document.activeElement;

  // move focus to modal
  modalEl.focus();
};

//  create our closeModal function
const closeModal = function () {
  modalEl.classList.add('hidden');
  overlayEl.classList.add('hidden');

  // restore focus
  if (lastFocusedButton) lastFocusedButton.focus();
};

// SECTION 3 //

// attach openModal function to all show buttons
btnsOpenModalEl.forEach(btn => btn.addEventListener('click', openModal));

// attach closeModal function to close button
btnCloseModalEl.addEventListener('click', closeModal);

// attach closeModal function to overlay click
overlayEl.addEventListener('click', closeModal);

document.addEventListener(`keydown`, function (e)  {
    console.log(`key passed: `, e );
    console.log(`Key name:`, e.key);

    // close modal when Escape is pressed
    if (e.key === 'Escape' && !modalEl.classList.contains('hidden')) {
        closeModal();
    }
});


modalEl.setAttribute(`role`, `dialog`);
modalEl.setAttribute(`aria-modal`, `true`);
btnCloseModalEl.setAttribute(`aria-label`, `close modal`);
