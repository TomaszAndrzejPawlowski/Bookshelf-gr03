import { fetchBookDetails } from './api-books';
//uzyłam tu tablicy ponieważ jeszcze nie ma funkcji dodawania do localStorage jak będzie to trzeba będzie to poprawić.
const bookId = [
  '643282b1e85766588626a0ba',
  '643282b2e85766588626a0f2',
  '643282b2e85766588626a158',
  '643282b2e85766588626a152',
];

localStorage.setItem('id', JSON.stringify(bookId));
const shoppingList = document.getElementById('shoppBookList');
// tworzy pojedynczy element li
function createItem({ bookDetails }) {
  const markup = `<li class="shopList-item">
  <button class="remove-button" type="button" book-id="${bookDetails._id}"><svg class="remove-button__icon">
  <use href="../images/icons.svg#icon-icon_dump"></use>
  </svg></button>
<div class="shopList-item__wrapp">
<img class="shopList-item__photo"  src=${bookDetails.book_image} alt="book photo" loading="lazy"/>
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
<img src="../images/amazon.png" alt="Amazon link"/>
</a>  
<a href="#">
<img src="#"/>
</a>  
</div>
</div>
</div>
</li>`;
  shoppingList.innerHTML += markup;
}

//funcka do pobierania dancyh oraz do tworzenia pojedynczego elementu
async function createShoppingCard(id) {
  const bookDetails = await fetchBookDetails(id);
  createItem({ bookDetails });
}
//funckja do tworzenia całej sekcji shopping list
function creatSchoppingList() {
  const booksIdArray = localStorage.getItem('id');
  const parsedArrayofBook = JSON.parse(booksIdArray);
  if (parsedArrayofBook.length === 0) {
    const emptyTemplate = document.querySelector('.empty-shopping-list');
    emptyTemplate.add('visible');
    return;
  } else {
    parsedArrayofBook.forEach(e => createShoppingCard(e));
  }
}

creatSchoppingList();
