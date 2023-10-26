export function createBookCard(bookDetails) {
  const bookCard = document.createElement('div');
  bookCard.classList.add('book-card');

  bookCard.innerHTML = `
    <div class="modal-card-container">
        <div class="popup">
            <button class="modal-close-button">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 7L7 21M7 7L21 21" stroke="#111111" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg></button>
            <div class="popup-image-desc">
            <div>
                <img class="popup-img" src="${bookDetails.book_image}" alt="${bookDetails.title}" />
            </div>
            <div class="popup-authorandtitle">
                <h2 class="popup-title">${bookDetails.title}</h2>
                <p class="popup-author">Author: ${bookDetails.author}</p>
                <p class="popup-desc"> ${bookDetails.description}</p>
            </div>
            </div>
          <div class="modal-button-position">
                  <button class="add-to-cart-button" data-book-id="${bookDetails._id}">add to shopping list</button>
                  <p class="add-to-cart-message"></p>
          </div>
        </div>
      </div>
  `;

  const closeButton = bookCard.querySelector('.modal-close-button');
  closeButton.addEventListener('click', () => {
    const bookCardContainer = document.getElementById('bookCardContainer');
    bookCardContainer.innerHTML = '';
  });

  const addToCartButton = bookCard.querySelector('.add-to-cart-button');
  const addToCartMessage = bookCard.querySelector('.add-to-cart-message');

  const shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];
  const bookId = bookDetails._id;
  if (shoppingList.includes(bookId)) {
    addToCartButton.textContent = 'remove from list';
  }

  addToCartButton.addEventListener('click', () => {
    if (shoppingList.includes(bookId)) {
      const index = shoppingList.indexOf(bookId);
      shoppingList.splice(index, 1);
      addToCartButton.textContent = 'add to shopping list';
      addToCartMessage.textContent = 'The book has been removed from the shopping list.';
    } else {
      shoppingList.push(bookId);
      addToCartButton.textContent = 'remove from list';
      addToCartMessage.textContent =
        'Congratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list."';
    }
    localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
    console.log('Lista zakupów w localStorage:', shoppingList);
  });

  const bookCardContainer = document.getElementById('bookCardContainer');
  bookCardContainer.innerHTML = '';
  bookCardContainer.appendChild(bookCard);

  function closeModalOnEscape(event) {
    if (event.key === 'Escape') {
      const bookCardContainer = document.getElementById('bookCardContainer');
      bookCardContainer.innerHTML = '';
    }
  }

  document.addEventListener('keydown', closeModalOnEscape);

  function closeModalOnClickOutside(event) {
    if (event.target.classList.contains('modal-card-container')) {
      const bookCardContainer = document.getElementById('bookCardContainer');
      bookCardContainer.innerHTML = '';
    }
  }

  document.addEventListener('click', closeModalOnClickOutside);

  return bookCard;
}
