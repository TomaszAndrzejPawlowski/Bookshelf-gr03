import { fetchBookDetails } from './api-books';
import apleIcon from '../images/apple.svg';
import amazonIcon from '../images/amazon.svg';
import trashIcon from '../images/trash.svg';

const shoppingList = document.getElementById('shoppBookList');

//tworzenie pojedynczej karty książki
function createBookCard(bookDetails) {
  const markup = `<li class="shopList-item" id="${bookDetails._id}">
  <button class="remove-button" type="button" data-book_id="${bookDetails._id}">
  <img class="remove-button__icon" alt="trash icon" src=${trashIcon} data-book_id="${bookDetails._id}"/>
</button>
<div class="shopList-item__wrapp">
<img class="shopList-item__photo" src=${bookDetails.book_image} alt="book photo" loading="lazy"/>
</div>
<div class="shopList-item__information">
<h1>${bookDetails.title}</h1>
<p class="shopList-item__category">${bookDetails.list_name}</p>
<div class="shopList-item__summary">
<p>${bookDetails.description}</p>
</div>
<div class="shopList-item__wrapper">
<p class="shopList-item__author">${bookDetails.author}</p>
<div class="shopList-item__icons">
<a href=${bookDetails.amazon_product_url} target="_blank" rel="noreferrer nofollow">
<img class="amazon-icon icon-shopping" alt="amazon-icon" src=${amazonIcon} />
</a>
<a href=${bookDetails.buy_links[1].url} target="_blank" rel="noopener noreferrer nofollow">
<img class="apple-icon icon-shopping" alt="apple-icon" src=${apleIcon} />
</a>
</div>
</div>
</div>
</li>`;
  shoppingList.innerHTML += markup;
}

function removeBook(e) {
  e.preventDefault();
  if (!e.target.dataset.book_id) {
    return;
  } else {
    const removeBookID = e.target.dataset.book_id;
    const shoppingList = JSON.parse(localStorage.getItem('shoppingList'));
    const indexRemoveBook = shoppingList.indexOf(removeBookID);
    console.log(indexRemoveBook);
    shoppingList.splice(indexRemoveBook, 1);
    localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
    const shoppingListAfterChange = JSON.parse(localStorage.getItem('shoppingList'));
    if (shoppingListAfterChange.length === 0) {
      const emptyTemplate = document.querySelector('.empty-shopping-list');
      emptyTemplate.classList.add('visible');
    }
    const removeBookElementDOM = document.getElementById(removeBookID);
    removeBookElementDOM.remove();
  }
}

async function createSchoppingList() {
  const booksIdArray = localStorage.getItem('shoppingList');
  const parsedArrayofBook = JSON.parse(booksIdArray);
  if (parsedArrayofBook === null || parsedArrayofBook.length === 0) {
    const emptyTemplate = document.querySelector('.empty-shopping-list');
    emptyTemplate.classList.add('visible');
    return;
  }

  parsedArrayofBook.forEach(async bookId => {
    const bookDetails = await fetchBookDetails(bookId);
    createBookCard(bookDetails);
  });
  shoppingList.addEventListener('click', removeBook);
}

createSchoppingList();

{
  /* <img alt ="amazon icon" class="icon-shopping amazon-icon" width="32" height:"11" src=${amazonIcon} /> */
}
