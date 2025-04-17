import { Book } from "../validators/BookSchema";

export const fetchWorkApiData = async <T>(id: T) => {
  const req = await fetch(`https://openlibrary.org${id}.json`);
  const data = await req.json();

  return data;
};

export const fetchSearchApiData = async <T>(query: T) => {
  const req = await fetch("https://openlibrary.org/search.json?q=" + query);
  const data = await req.json();
  const books = data.docs;

  return books;
};

export const postNewBook = async ({
  apiEndpoint,
  book,
}: {
  apiEndpoint: string;
  book: Book;
}) => {
  const request = await fetch(
    "http://localhost:3000/api/books/" + apiEndpoint,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ book: book }),
    }
  );

  const response = await request.json();
};
