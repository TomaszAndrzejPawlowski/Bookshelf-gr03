import axios from 'axios';

async function fetchBooksData(category) {
  const url = `https://books-backend.p.goit.global/books/category?category=${category}`;

  try {
    const response = await axios.get(url);

    if (response.status !== 200) {
      throw new Error('Failed to fetch books');
    }

    return response.data;
  } catch (error) {
    console.error('Error fetching books:', error);
    throw new Error('Failed to fetch books');
  }
}
//////////////////////////////////////////////////////////////////////// karty ksiazki po id///////////////////////////////////
async function fetchBookDetails(bookId) {
  const url = `https://books-backend.p.goit.global/books/${bookId}`;

  try {
    const response = await axios.get(url);

    if (response.status !== 200) {
      throw new Error('Failed to fetch book details');
    }

    const bookDetails = response.data;
    //console.log(bookDetails);
    return bookDetails;
  } catch (error) {
    console.error('Error fetching book details:', error);
    // można obsługę błędu - np. wyświetlenie komunikatu dla użytkownika
    throw new Error('Failed to fetch book details');
  }
}

async function fetchCategories() {
  try {
    const response = await axios.get('https://books-backend.p.goit.global/books/category-list');
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw new Error('Failed to fetch categories');
  }
}

async function fetchBooks(category) {
  const url = `https://books-backend.p.goit.global/books/top-books`;

  try {
    const response = await axios.get(url);

    if (response.status !== 200) {
      throw new Error('Failed to fetch books');
    }

    return response.data;
  } catch (error) {
    console.error('Error fetching books:', error);
    throw new Error('Failed to fetch books');
  }
}

export { fetchBooksData, fetchBookDetails, fetchCategories, fetchBooks };
