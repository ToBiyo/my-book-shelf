const booksEndpoint = "https://openlibrary.org/search.json?q=";

export const fetchApiData = async <T,>(query: T) => {
  const req = await fetch(booksEndpoint + query);
  const data = await req.json();
  const books = data.docs;

  return books;
};
