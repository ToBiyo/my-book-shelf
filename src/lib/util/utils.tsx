export const fetchSearchApiData = async <T,>(query: T) => {
  const req = await fetch("https://openlibrary.org/search.json?q=" + query);
  const data = await req.json();
  const books = data.docs;

  return books;
};

export const fetchWorkApiData = async <T,>(id: T) => {
  const req = await fetch(`https://openlibrary.org${id}.json`);
  const data = await req.json();

  return data;
};

export const filterBooks = (books: any[]) => {
  const filteredBooks = books
    .filter((book: any) => "author_name" in book && "cover_edition_key" in book)
    .map((book: any) => {
      return {
        authors: book.author_name,
        title: book.title,
        book_key: book.key,
        cover_url: `https://covers.openlibrary.org/b/olid/${book.cover_edition_key}-L.jpg`,
      };
    });
  return filteredBooks;
};
