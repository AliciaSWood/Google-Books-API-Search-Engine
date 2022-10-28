export const tidyBookInfo = (itemEntry) => {
    const { id, volumeInfo, selfLink } = itemEntry;
    const { title, authors, imageLinks } = volumeInfo;
  
    return {
      id,
      selfLink,
      title,
      authors: authors.join(', '),
      img: imageLinks.thumbnail,
    };
  };
  
  const getBookData = async (query) => {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${query}`
    );
    const data = await response.json();
    const bookInfo = data.items.map(tidyBookInfo);
    return bookInfo;
  };

  export default tidyBookInfo