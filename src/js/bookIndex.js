import '../sass/main.scss';
import './shoppingList';
import '../sass/partials/_header.scss';
import { createBookCard } from './create-book-modal';
import { charities } from './charity-gallery';
import { fetchBooksData, fetchBookDetails, fetchCategories, fetchBooks } from './api-books';
//import { handleSeeMoreButtonClick } from './indexCallbacks';
//export { fetchBooksData, renderBooks };
const charitiesSlider = document.getElementById('charitiesSlider');

// fundacje charytatywne
charities.forEach(charity => {
  const div = document.createElement('div');
  div.innerHTML = `<a href="${charity.url}" target="_blank">${charity.title}</a>`;
  charitiesSlider.appendChild(div);
});
////////////////////////////

// lista kategorii
function renderCategories(categoriesData) {
  const categoriesList = document.getElementById('categoriesList');

  categoriesData.forEach(category => {
    const li = document.createElement('li');
    li.classList.add('category');
    li.textContent = category.list_name;
    categoriesList.appendChild(li);
  });
}
// Wywołanie funkcji i obsługa Promise
fetchCategories()
  .then(categoriesData => {
    //console.log('Categories Received:', categoriesData);
    renderCategories(categoriesData);
  })
  .catch(error => {
    // Obsługa błędów
    console.error('Error in promise chain:', error);
  });
//////////////////////////////////////////////////
// funkcja oblsugi button 'See more'
function handleSeeMoreButtonClick(event) {
  let selectedCategory;

  if (typeof event === 'string') {
    selectedCategory = event;
  } else {
    const button = event.target.closest('.category-button');
    if (button) {
      const categoryContainer = button.closest('.category-container');
      selectedCategory = categoryContainer.querySelector('h2').textContent;
    }
  }

  if (selectedCategory) {
    fetchBooksData(selectedCategory)
      .then(booksData => {
        document.querySelectorAll('.category-container').forEach(container => {
          container.classList.remove('selected-category');
        });

        const categoryContainers = document.querySelectorAll('.category-container');
        categoryContainers.forEach(container => {
          if (container.textContent.includes(selectedCategory)) {
            container.classList.add('selected-category');
          }
        });

        bestSellersHeader.textContent = selectedCategory;
        renderBooks(booksData, selectedCategory);
      })
      .catch(error => {
        console.error('Error fetching books data:', error);
      });
  }
}
// funkcja tworzenia karty książki
function createBookElement(book) {
  const bookItem = document.createElement('li');
  bookItem.innerHTML = `
    <div>
      <img src="${book.book_image}" alt="${book.title}" />
    </div>
    <h3>${book.title}</h3>
    <p>Author: ${book.author}</p>
  `;
  return bookItem;
}
// Wywołanie funkcji, top 5 z kazdej kategorii. best sellers- ksiazki ładują sie od razu.
fetchBooks('some-category')
  .then(data => {
    const booksContainer = document.getElementById('booksList');

    data.forEach(category => {
      const categoryContainer = document.createElement('div');
      categoryContainer.classList.add('category-container');
      booksContainer.appendChild(categoryContainer);

      const categoryTitle = document.createElement('h2');
      categoryTitle.textContent = category.list_name;
      categoryContainer.appendChild(categoryTitle);

      const categoryBooksList = document.createElement('ul');
      categoryContainer.appendChild(categoryBooksList);

      category.books.forEach(book => {
        //console.log('Book Data:', book);
        const bookItem = createBookElement(book);
        categoryBooksList.appendChild(bookItem);
      });

      const seeMoreButton = document.createElement('button');
      seeMoreButton.textContent = 'See more';
      seeMoreButton.classList.add('category-button');
      categoryContainer.appendChild(seeMoreButton);
      seeMoreButton.addEventListener('click', handleSeeMoreButtonClick);
    });
  })
  .catch(error => {
    // Obsługa błędów
    console.error('Error in promise chain:', error);
  });

// ksiaki w best selerss, po kliknieciu w best selerss
function renderCategoriesWithBooks(categoriesData) {
  const booksContainer = document.getElementById('booksList');
  booksContainer.innerHTML = '';

  categoriesData.forEach(category => {
    const categoryContainer = document.createElement('div');
    categoryContainer.classList.add('category-container');
    booksContainer.appendChild(categoryContainer);

    const categoryTitle = document.createElement('h2');
    categoryTitle.textContent = category.list_name;
    categoryContainer.appendChild(categoryTitle);

    const categoryBooksList = document.createElement('ul');
    categoryContainer.appendChild(categoryBooksList);

    category.books.forEach(book => {
      const bookItem = createBookElement(book);
      categoryBooksList.appendChild(bookItem);
    });

    // Przycisk "See more" dodany raz dla całej kategorii
    const seeMoreButton = document.createElement('button');
    seeMoreButton.textContent = 'See more';
    seeMoreButton.classList.add('category-button');
    categoryContainer.appendChild(seeMoreButton);

    seeMoreButton.addEventListener('click', () => handleSeeMoreButtonClick(category.list_name));
  });
}

document.getElementById('bestSellers').addEventListener('click', async event => {
  if (event.target.tagName === 'LI') {
    const selectedCategory = event.target.textContent;

    if (selectedCategory === 'Best Sellers Books') {
      try {
        const booksData = await fetchBooks('best-sellers');
        document.getElementById('bestSellersHeader').textContent = 'Best Sellers Books';
        renderCategoriesWithBooks(booksData, 'booksList');
      } catch (error) {
        console.error('Error fetching best sellers:', error);
        alert('Failed to fetch best sellers. Please try again.');
      }
    } else {
      const booksData = await fetchBooks(selectedCategory);
      document.getElementById('bestSellersHeader').textContent = selectedCategory;
      renderCategoriesWithBooks(booksData, 'booksList');
    }
  }
});
////////////////////////////
//funkcja do tworzenia karty w modal
//function createBookModal(bookDetails) {
//  const bookCard = document.createElement('div');
//  bookCard.classList.add('book-card');
//
//  bookCard.innerHTML = `
//    <div class="modal-card-container">
//      <span class="close-button" title="Close">&times;</span>
//      <img src="${bookDetails.book_image}" alt="${bookDetails.title}" />
//      <h2>${bookDetails.title}</h2>
//      <p>Author: ${bookDetails.author}</p>
//      <p>Description: ${bookDetails.description}</p>
//      <p>Amazon Product URL: <a href="${
//        bookDetails.amazon_product_url
//      }" target="_blank">${bookDetails.amazon_product_url}</a></p>
//      <ul>
//        ${bookDetails.buy_links
//          .map(
//            link =>
//              `<li><a href="${link.url}" target="_blank">${link.name}</a></li>`
//          )
//          .join('')}
//      </ul>
//      <button class="add-to-cart-button" data-book-id="${
//        bookDetails._id
//      }">Add to Cart</button>
//    </div>
//  `;
//
//  const closeButton = bookCard.querySelector('.close-button');
//  closeButton.addEventListener('click', () => {
//    bookCardContainer.innerHTML = ''; // Close the modal
//  });
//
//  const addToCartButton = bookCard.querySelector('.add-to-cart-button');
//  addToCartButton.addEventListener('click', () => {
//    console.log('Book added/removed from the cart!');
//  });
//
//  return bookCard;
//}

function renderBooks(booksData, category) {
  const booksContainer = document.getElementById('booksList');
  booksContainer.innerHTML = '';

  if (booksData && booksData.length > 0) {
    const categoryBooksList = document.createElement('ul');
    booksContainer.appendChild(categoryBooksList);

    booksData.forEach(book => {
      //const bookItem = document.createElement('li');

      const bookItem = createBookElement(book);
      categoryBooksList.appendChild(bookItem);
      //console.log(book._id);

      bookItem.addEventListener('click', async () => {
        const bookCardContainer = document.getElementById('bookCardContainer');
        bookCardContainer.innerHTML = '';

        try {
          const bookDetails = await fetchBookDetails(book._id);
          const bookCard = createBookCard(bookDetails);

          bookCardContainer.appendChild(bookCard);

          console.log(bookDetails);
        } catch (error) {
          console.error(error);
        }
      });

      categoryBooksList.appendChild(bookItem);
    });
  } else {
    // gdy nie ma ksiązki
    const noBooksMessage = document.createElement('p');
    noBooksMessage.textContent = 'No books found in this category.';
    booksContainer.appendChild(noBooksMessage);
  }
}

////////////////////////////////////// Dodanie obsługi zdarzenia dla każdej kategorii, dodanie ksiazek z danej kategori, pogrubienie trzcionki kazdej kategori i pierwszej kategoti
const categoryElements = document.querySelectorAll('.category');
const bestSellersHeader = document.getElementById('bestSellersHeader');

document.getElementById('categoriesList').addEventListener('click', async event => {
  const clickedCategory = event.target.closest('.category, .categoryTop');

  if (clickedCategory) {
    const selectedCategory = clickedCategory.textContent;
    const booksData = await fetchBooksData(selectedCategory);

    // usuwamy klasę selected-category od wszystkich kategorii
    document.querySelectorAll('.category, .categoryTop').forEach(element => {
      element.classList.remove('selected-category');
    });

    bestSellersHeader.textContent = selectedCategory;
    renderBooks(booksData, selectedCategory);

    // dodana  klasa selected-category tylko do klikniętej kategorii
    clickedCategory.classList.add('selected-category');
  }
});
