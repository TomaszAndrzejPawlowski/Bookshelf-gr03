// import { fetchBookDetails } from './api-books';
// import apleIcon from '../images/book.png';

// const shoppingList = document.getElementById('shoppBookList');

// //tworzenie pojedynczej karty książki
// function createItem({ bookDetails }) {
//   const markup = `<li class="shopList-item">
//   <button class="remove-button" type="button"><p class="bookId">${bookDetails._id}</p>
//   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
//   <path d="M6 2H10M2 4H14M12.6667 4L12.1991 11.0129C12.129 12.065 12.0939 12.5911 11.8667 12.99C11.6666 13.3412 11.3648 13.6235 11.0011 13.7998C10.588 14 10.0607 14 9.00623 14H6.99377C5.93927 14 5.41202 14 4.99889 13.7998C4.63517 13.6235 4.33339 13.3412 4.13332 12.99C3.90607 12.5911 3.871 12.065 3.80086 11.0129L3.33333 4M6.66667 7V10.3333M9.33333 7V10.3333" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
//   </svg>
// </button>
// <div class="shopList-item__wrapp">
// <img class="shopList-item__photo"  src=${bookDetails.book_image} alt="book photo" loading="lazy"/>
// </div>
// <div class="shopList-item__information">
// <h1>${bookDetails.title}</h1>
// <p class="shopList-item__category">${bookDetails.list_name}</p>
// <div class="shopList-item__summary">
// <p>${bookDetails.description}</p>
// </div>
// <div class="shopList-item__wrapper">
// <p class="shopList-item__author">${bookDetails.author}</p>
// <div class="shopList-item__icons">
// <a href=${bookDetails.amazon_product_url} target="_blank" rel="noopener noreferrer nofollow">
// <img src="#" width="32" height:"11" src="#" />
// </a>
// <a target="_blank" rel="noopener noreferrer nofollow" href=${bookDetails.buy_links[1].url}>
// <img src=${apleIcon} width="16" height="16" />
// </a>
// </div>
// </div>
// </div>
// </li>`;
//   shoppingList.innerHTML += markup;
// }

// //funkcja do pobierania dancyh oraz do tworzenia pojedynczego elementu
// async function createShoppingCard(id) {
//   const bookDetails = await fetchBookDetails(id);
//   createItem({ bookDetails });
// }
// //funckja do tworzenia całej sekcji shopping list
// function creatSchoppingList() {
//   const booksIdArray = localStorage.getItem('shoppingList');
//   const parsedArrayofBook = JSON.parse(booksIdArray);

//   if (parsedArrayofBook.length === 0) {
//     const emptyTemplate = document.querySelector('.empty-shopping-list');
//     emptyTemplate.classList.add('visible');
//     return;
//   } else {
//     parsedArrayofBook.forEach(e => createShoppingCard(e));
//   }
// }

// creatSchoppingList();

// // const buttonToRemove = document.querySelector('.remove-button');
// // console.log(buttonToRemove);
// // () => {
// //   const shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];
// //   const bookId = bookDetails._id;
// //   const index = shoppingList.indexOf(bookId);
// //   shoppingList.splice(index, 1);

// //   localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
// // }

// // creatSchoppingList();

// //   localStorage.setItem('shoppingList', JSON.stringify(shoppingList));

import { fetchBookDetails } from './api-books';
import apleIcon from '../images/book.png';
import amazonIcon from '../images/amazon.png';
const shoppingList = document.getElementById('shoppBookList');

//tworzenie pojedynczej karty książki
function createItem({ bookDetails }) {
  console.log(1, bookDetails);
  const markup = `<li class="shopList-item">
  <button class="remove-button" type="button"><p class="bookId">${bookDetails._id}</p>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M6 2H10M2 4H14M12.6667 4L12.1991 11.0129C12.129 12.065 12.0939 12.5911 11.8667 12.99C11.6666 13.3412 11.3648 13.6235 11.0011 13.7998C10.588 14 10.0607 14 9.00623 14H6.99377C5.93927 14 5.41202 14 4.99889 13.7998C4.63517 13.6235 4.33339 13.3412 4.13332 12.99C3.90607 12.5911 3.871 12.065 3.80086 11.0129L3.33333 4M6.66667 7V10.3333M9.33333 7V10.3333" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
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
<a href=${bookDetails.amazon_product_url} target="_blank" rel="noopener noreferrer nofollow">
<img width="32" height:"11" src=${amazonIcon} />
</a>  
<a href=${bookDetails.buy_links[1].url} target="_blank">
<img src=${apleIcon} width="16" height="16"   rel="noopener noreferrer nofollow"/>
</a>  
</div>
</div>
</div>
</li>`;
  shoppingList.innerHTML += markup;
}

//funkcja do pobierania dancyh oraz do tworzenia pojedynczego elementu
async function createShoppingCard(id) {
  const bookDetails = await fetchBookDetails(id);
  createItem({ bookDetails });
}
//funckja do tworzenia całej sekcji shopping list
function creatSchoppingList() {
  const booksIdArray = localStorage.getItem('shoppingList');
  const parsedArrayofBook = JSON.parse(booksIdArray);

  if (parsedArrayofBook === null) {
    const emptyTemplate = document.querySelector('.empty-shopping-list');
    emptyTemplate.classList.add('visible');
    return;
  } else {
    parsedArrayofBook.forEach(e => createShoppingCard(e));
  }
}

creatSchoppingList();
