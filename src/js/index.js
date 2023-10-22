import '../sass/main.scss';

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
    /// kategoria - powiekszona trzcionka po wyborze
    //li.classList.add('selected-category');

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
  const button = event.target.closest('.category-button');
  if (button) {
    const bookItem = button.closest('li');
    const selectedCategory = bookItem.querySelector('h2').textContent;
    fetchBooksData(selectedCategory)
      .then(booksData => {
        document.querySelectorAll('.category, .categoryTop, .category-button').forEach(element => {
          element.classList.remove('selected-category');
        });

        bestSellersHeader.textContent = selectedCategory;
        renderBooks(booksData, selectedCategory);

        // dodana klasa selected-category tylko do klikniętej kategorii
        bookItem.classList.add('selected-category');
      })
      .catch(error => {
        console.error('Error fetching books data:', error);
      });
  }
}

// Wywołanie funkcji, top 5 z kazdej kategorii. best sellers- ksiazki ładują sie od razu.
fetchBooks('some-category')
  .then(data => {
    //console.log('Data Received:', data);

    const booksContainer = document.getElementById('booksList');

    data.forEach(category => {
      const categoryBooksList = document.createElement('ul');
      booksContainer.appendChild(categoryBooksList);

      category.books.forEach(book => {
        const bookItem = document.createElement('li');
        bookItem.innerHTML = `
          <div>
            <h2>${category.list_name}</h2>
            <img src="${book.book_image}" alt="${book.title}" />
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <button class="category-button">See more</button>
          </div>
        `;
        categoryBooksList.appendChild(bookItem);
        bookItem.addEventListener('click', handleSeeMoreButtonClick);
      });
    });
  })
  .catch(error => {
    // Obsługa błędów
    console.error('Error in promise chain:', error);
  });
//////////////////////////////////////

// ksiaki w best selerss, po kliknieciu w best selerss
function renderCategoriesWithBooks(categoriesData) {
  const booksContainer = document.getElementById('booksList');
  booksContainer.innerHTML = '';

  categoriesData.forEach(category => {
    const categoryBooksList = document.createElement('ul');
    booksContainer.appendChild(categoryBooksList);

    category.books.forEach(book => {
      const bookItem = document.createElement('li');
      bookItem.innerHTML = `
        <div>
          <h2>${category.list_name}</h2>          
          <img src="${book.book_image}" alt="${book.title}" />
          <h3>${book.title}</h3>
          <p>Author: ${book.author}</p>
          <button class="category-button">See more</button>
        </div>
      `;
      categoryBooksList.appendChild(bookItem);
      bookItem.addEventListener('click', handleSeeMoreButtonClick);
    });
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

function renderBooks(booksData, category) {
  const booksContainer = document.getElementById('booksList');
  booksContainer.innerHTML = '';

  if (booksData && booksData.length > 0) {
    booksData.forEach(book => {
      const bookItem = document.createElement('li');

      bookItem.innerHTML = `
        <div>             
          <img src="${book.book_image}" alt="${book.title}" />
          <h3>${book.title}</h3>
          <p>Author: ${book.author}</p>
        </div>
      `;

      bookItem.addEventListener('click', async () => {
        const bookCardContainer = document.getElementById('bookCardContainer');
        bookCardContainer.innerHTML = '';

        try {
          const bookDetails = await fetchBookDetails(book._id);

          const bookCard = document.createElement('div');
          bookCard.classList.add('book-card');

          bookCard.innerHTML = `<div class="modal-card-container">
          <div class="book-card">
            <span class="close-button" title="Close">&times;</span>
            <img src="${bookDetails.book_image}" alt="${bookDetails.title}" />
            <h2>${bookDetails.title}</h2>
            <p>Author: ${bookDetails.author}</p>
            <p>Description: ${bookDetails.description}</p>
            <p>Amazon Product URL: <a href="${bookDetails.amazon_product_url}" target="_blank">${
            bookDetails.amazon_product_url
          }</a></p>
            <ul>
              ${bookDetails.buy_links
                .map(link => `<li><a href="${link.url}" target="_blank">${link.name}</a></li>`)
                .join('')}
            </ul>
            <button class="add-to-cart-button" data-book-id="${
              bookDetails._id
            }">Add to Cart</button>
            </div></div>
          `;

          const closeButton = bookCard.querySelector('.close-button');
          closeButton.addEventListener('click', () => {
            bookCardContainer.innerHTML = ''; // Close the modal
          });

          const addToCartButton = bookCard.querySelector('.add-to-cart-button');
          addToCartButton.addEventListener('click', () => {
            console.log('Book added/removed from the cart!');
          });

          bookCardContainer.appendChild(bookCard);
        } catch (error) {
          console.error(error);
        }
      });

      booksContainer.appendChild(bookItem);
    });
  } else {
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

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ciemny motyw
/*const themeSwitch = document.getElementById('themeSwitch');
const isDarkMode = localStorage.getItem('darkMode') === 'true';

document.body.classList.toggle('dark-mode', isDarkMode);

themeSwitch.addEventListener('change', () => {
  const isDarkMode = themeSwitch.checked;
  document.body.classList.toggle('dark-mode', isDarkMode);
  localStorage.setItem('darkMode', isDarkMode.toString());
});*/
