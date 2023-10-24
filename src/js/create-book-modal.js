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
            <div>
                <img class="popup-img" src="${bookDetails.book_image}" alt="${bookDetails.title}" />
            </div>
            <div class="popup-authorandtitle">
                <h2 class="popup-title">${bookDetails.title}</h2>
                <p class="popup-author">Author: ${bookDetails.author}</p>
            </div>

    <div class="modal-button-position">
        <button class="add-to-cart-button" data-book-id="${bookDetails._id}">add to shopping list</button>
    </div>
    </div>
    </div>
  `;

  const closeButton = bookCard.querySelector('.modal-close-button');
  closeButton.addEventListener('click', () => {
    const bookCardContainer = document.getElementById('bookCardContainer');
    bookCardContainer.innerHTML = ''; // Zamykanie modalu
  });

  const addToCartButton = bookCard.querySelector('.add-to-cart-button');
  addToCartButton.addEventListener('click', () => {
    console.log('Książka dodana/usunięta z koszyka!');
  });

  // Otwieranie modala z wygenerowanym bookCard
  const bookCardContainer = document.getElementById('bookCardContainer');
  bookCardContainer.innerHTML = '';
  bookCardContainer.appendChild(bookCard);

  return bookCard;
}
