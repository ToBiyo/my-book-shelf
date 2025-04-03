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
