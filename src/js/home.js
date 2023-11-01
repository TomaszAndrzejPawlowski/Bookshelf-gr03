import { createBookCard } from './create-book-modal';
import { fetchBooksData, fetchBookDetails, fetchCategories, fetchBooks } from './api-books';
const loadingTxt = document.querySelector('.loader');

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

function testing() {
  setTimeout(function () {
    loadingTxt.classList.add('is-hidden');
  }, 2000);
}
fetchCategories()
  .then(categoriesData => {
    //console.log('Categories Received:', categoriesData);
    renderCategories(categoriesData);
    loadingTxt.classList.remove('is-hidden');
  })

  .catch(error => {
    // Obsługa błędów

    console.error('Error in promise chain:', error);
  })
  .finally(() => {
    testing();
  });

//   loadingTxt.classList.add('is-hidden');
// });

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

      if (categoryContainer && categoryContainer.querySelector('h2')) {
        selectedCategory = categoryContainer.querySelector('h2').textContent;
      }
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

// Wywołanie funkcji, top 5 z kazdej kategorii. best sellers- ksiazki ładują sie od razu.
fetchBooks('some-category')
  .then(data => {
    const booksContainer = document.getElementById('booksList');

    data.forEach(category => {
      // tworzy sekcję dla danej kategorii
      const categorySection = document.createElement('div');
      categorySection.className = 'category-section';

      const categoryTitle = document.createElement('h2');
      categoryTitle.innerHTML = category.list_name;
      categoryTitle.classList.add('category-title'); // Dodałem klasę 'category-title'
      categorySection.appendChild(categoryTitle);

      const categoryBooksList = document.createElement('ul');

      // if (window.innerWidth <= 768) {
      category.books.forEach(book => {
        const bookItem = document.createElement('li');
        const imageContainer = document.createElement('div');
        imageContainer.className = 'image-container';
        const image = document.createElement('img');
        image.src = book.book_image;
        image.alt = book.title;
        const h3 = document.createElement('h3');
        h3.textContent = book.title;
        h3.classList.add('book-title'); // Dodaj klasę "book-title" do elementu h3

        const p = document.createElement('p');
        p.textContent = `Author: ${book.author}`;
        p.classList.add('book-author'); // Dodaj klasę "book-author" do elementu p

        imageContainer.appendChild(image);
        bookItem.appendChild(imageContainer);
        bookItem.appendChild(h3);
        bookItem.appendChild(p);
        categoryBooksList.appendChild(bookItem);

        // ////////////////
        //Modal, ten sam kod dodany w 4 miejscach
        bookItem.addEventListener('click', async () => {
          loadingTxt.classList.remove('is-hidden');
          const bookCardContainer = document.getElementById('bookCardContainer');
          bookCardContainer.innerHTML = '';

          try {
            const bookDetails = await fetchBookDetails(book._id);

            const bookCard = createBookCard(bookDetails);

            bookCardContainer.appendChild(bookCard);

            loadingTxt.classList.add('is-hidden');
          } catch (error) {
            console.error(error);
            loadingTxt.classList.add('is-hidden');
          }
        });
        // /////////
      });

      // Dodanie klasę "category-list" do elementu <ul>
      categoryBooksList.classList.add('category-list');

      categorySection.appendChild(categoryBooksList);

      // Dodanie przycisku "See more" dla całego zestawu książek
      const seeMoreButton = document.createElement('button');
      seeMoreButton.className = 'category-button';
      seeMoreButton.innerText = 'See more';
      categorySection.appendChild(seeMoreButton);
      seeMoreButton.addEventListener('click', () => handleSeeMoreButtonClick(category.list_name));

      // Dodaj sekcję kategorii do kontenera
      booksContainer.appendChild(categorySection);
    });
  })
  .catch(error => {
    // Obsługa błędów
    console.error('Error in promise chain:', error);
  });
// funkjca tworzenia karty
// ksiaki w best selerss, po kliknieciu w best selerss
function renderCategoriesWithBooks(categoriesData) {
  const booksContainer = document.getElementById('booksList');
  booksContainer.innerHTML = '';

  categoriesData.forEach(category => {
    const categoryContainer = document.createElement('div');
    categoryContainer.classList.add('category-section');
    booksContainer.appendChild(categoryContainer);

    const categoryTitle = document.createElement('h2');
    categoryTitle.textContent = category.list_name;
    categoryTitle.classList.add('category-title');
    categoryContainer.appendChild(categoryTitle);

    const categoryBooksList = document.createElement('ul');
    categoryBooksList.classList.add('category-list');
    categoryContainer.appendChild(categoryBooksList);

    category.books.forEach(book => {
      const bookItem = document.createElement('li');
      bookItem.classList.add('book-item');
      bookItem.innerHTML = `
        <div class="image-container">                    
         <img src="${book.book_image}" width="180px" height="256px" alt="${book.title}" />
         </div>
         <h3 class="book-title">${book.title}</h3>
         <p class="book-author">Author: ${book.author}</p>
         `;

      categoryBooksList.appendChild(bookItem);

      // /////////
      //Modal, ten sam kod dodany w 4 miejscach
      bookItem.addEventListener('click', async () => {
        loadingTxt.classList.remove('is-hidden');
        const bookCardContainer = document.getElementById('bookCardContainer');
        bookCardContainer.innerHTML = '';

        try {
          const bookDetails = await fetchBookDetails(book._id);

          const bookCard = createBookCard(bookDetails);

          bookCardContainer.appendChild(bookCard);
          loadingTxt.classList.add('is-hidden');
        } catch (error) {
          console.error(error);
          loadingTxt.classList.add('is-hidden');
        }
      });
      // /////////
    });

    // Przycisk "See more" dodany raz dla całej kategorii, na końcu zestawu książek
    const seeMoreButton = document.createElement('button');
    seeMoreButton.textContent = 'See more';
    seeMoreButton.classList.add('category-button');
    categoryContainer.appendChild(seeMoreButton);

    seeMoreButton.addEventListener('click', () => handleSeeMoreButtonClick(category.list_name));
  });
}

document.getElementById('bestSellers').addEventListener('click', async event => {
  if (event.target.tagName === 'LI') {
    let selectedCategory = event.target.textContent;

    if (selectedCategory === 'All categories') {
      // selectedCategory = 'Best Sellers Book';
      try {
        const booksData = await fetchBooks('best-sellers');

        document.getElementById('bestSellersHeader').innerHTML = `
          Best Sellers <span class="blue-text">Books</span>
        `;
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
      bookItem.className = 'list-container';
      bookItem.innerHTML = `
        <div class="category-container">
          <div class="image-container">         
            <img src="${book.book_image}" alt="${book.title}" />
          </div>
          <h3 class="book-title">${book.title}</h3>
          <p class="book-author">Author: ${book.author}</p>
        </div>
      `;

      bookItem.addEventListener('click', async () => {
        const bookCardContainer = document.getElementById('bookCardContainer');
        bookCardContainer.innerHTML = '';
        loadingTxt.classList.remove('is-hidden');

        try {
          const bookDetails = await fetchBookDetails(book._id);

          const bookCard = createBookCard(bookDetails);

          bookCardContainer.appendChild(bookCard);
          loadingTxt.classList.add('is-hidden');
        } catch (error) {
          console.error(error);
          loadingTxt.classList.add('is-hidden');
        }
      });

      booksContainer.appendChild(bookItem);
    });
  } else {
    const noBooksMessage = document.createElement('p');
    noBooksMessage.textContent = 'No books found in this category.';
    booksContainer.appendChild(noBooksMessage);
  }

  // Zmiana nazwy klasy sekcji
  if (category === 'All categories') {
    booksContainer.classList.replace('books_category-list', 'books-list');
  } else {
    booksContainer.classList.replace('books-list', 'books_category-list');
  }
}

////////////////////////////////////// Dodanie obsługi zdarzenia dla każdej kategorii, dodanie ksiazek z danej kategori, pogrubienie trzcionki kazdej kategori i pierwszej kategoti
const categoryElements = document.querySelectorAll('.category');
const bestSellersHeader = document.getElementById('bestSellersHeader');
function getLastWord(text) {
  const words = text.split(' ');
  return words[words.length - 1];
}

document.getElementById('categoriesList').addEventListener('click', async event => {
  const clickedCategory = event.target.closest('.category, .categoryTop');

  if (clickedCategory) {
    const selectedCategory = clickedCategory.textContent;
    const booksData = await fetchBooksData(selectedCategory);
    const lastWord = getLastWord(selectedCategory);

    // Usuwa klasę selected-category od wszystkich elementów o klasie 'category' lub 'categoryTop'
    document
      .querySelectorAll('.category, .categoryTop')
      .forEach(element => element.classList.remove('selected-category'));

    // Ustawia treść nagłówka
    bestSellersHeader.innerHTML = `
  ${selectedCategory.replace(
    new RegExp(`${lastWord}$`),
    `<span class="blue-text">${lastWord}</span>`,
  )}
`;

    renderBooks(booksData, selectedCategory);

    // Dodaje klasę 'selected-category' tylko do klikniętej kategorii
    clickedCategory.classList.add('selected-category');
  }
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ciemny motyw
// const themeSwitch = document.getElementById('themeSwitch');

// themeSwitch.addEventListener('change', () => {
//   const isDarkMode = themeSwitch.checked;
//   document.body.classList.toggle('dark-mode', isDarkMode);
//   localStorage.setItem('darkMode', isDarkMode.toString());
//   if (isDarkMode === true) {
//     li.addEventListener('mouseover', () => {
//       li.style.color = '#eac645';
//     });
//     li.addEventListener('mouseout', () => {
//       li.style.color = 'inherit';
//     });
//   }
// });
