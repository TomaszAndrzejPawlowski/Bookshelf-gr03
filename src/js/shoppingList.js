import { fetchBookDetails } from './api-books';
import apleIcon from '../images/book.png';
import amazonIcon from '../images/amazon.png';
import trashIcon from '../images/trash.svg';

const shoppingList = document.getElementById('shoppBookList');

//tworzenie pojedynczej karty książki
function createItem({ bookDetails }) {
  const markup = `<li class="shopList-item">
  <button class="remove-button" type="button"><p class="bookId">${bookDetails._id}</p>
  <img class="remove-button__icon" alt="trash icon" src=${trashIcon}/>
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
<img alt ="amazon icon" class="icon-shopping amazon-icon" width="32" height:"11" src=${amazonIcon} />
</a>  
<a href=${bookDetails.buy_links[1].url} target="_blank">
<img class="icon-shopping aple-icon" src=${apleIcon} width="16" height="16" alt="aple icon"  rel="noopener noreferrer nofollow"/>
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
// funckja do tworzenia całej sekcji shopping list
function creatSchoppingList() {
  const booksIdArray = localStorage.getItem('shoppingList');
  const parsedArrayofBook = JSON.parse(booksIdArray);
  console.log(parsedArrayofBook);

  if (parsedArrayofBook === null || parsedArrayofBook.length === 0) {
    const emptyTemplate = document.querySelector('.empty-shopping-list');
    emptyTemplate.classList.add('visible');
    return;
  } else {
    parsedArrayofBook.forEach(e => createShoppingCard(e));
  }
}

// function test() {
//   const booksIdArray = localStorage.getItem('shoppingList');
//   const parsedArrayofBook = JSON.parse(booksIdArray);
//   return parsedArrayofBook;
// }

// function test2(parsedArrayofBookaaaa) {
//   if (parsedArrayofBookaaaa === null) {
//     const emptyTemplate = document.querySelector('.empty-shopping-list');
//     emptyTemplate.classList.add('visible');
//     return;
//   } else {
//     parsedArrayofBookaaaa.forEach(e => createShoppingCard(e));
//   }
// }

// async function creatSchoppingList() {
//   const parsedArrayofBookaaaa = await test();
//   console.log(parsedArrayofBookaaaa);
//   await test2(parsedArrayofBookaaaa);

//   const trash = document.querySelector('.remove-button');
//   console.log(trash);
// }

creatSchoppingList();
