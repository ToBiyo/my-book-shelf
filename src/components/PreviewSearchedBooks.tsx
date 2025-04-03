"use client";
import { useEffect, useState } from "react";
import { SessionProvider } from "next-auth/react";
import { fetchSearchApiData } from "@/lib/util/utils";
import { BooksPreview } from "./BooksPreview";
import { BooksSearchBar } from "./BooksSearchBar";

export const PreviewSearchedBooks = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [books, setBooks] = useState(null);
  const [loading, setLoading] = useState<boolean>(false);

  const getData = async (query: string) => {
    setLoading(true);

    const books = await fetchSearchApiData(query);

    if (!books) {
      setBooks(null);
      return;
    }

    let formatted = books
      .filter(
        (book: any) => "author_name" in book && "cover_edition_key" in book
      )
      .map((book: any) => {
        return {
          authors: book.author_name,
          title: book.title,
          book_key: book.key,
          cover_url: `https://covers.openlibrary.org/b/olid/${book.cover_edition_key}-L.jpg`,
        };
      });
    setLoading(false);
    setBooks(formatted);
  };

  useEffect(() => {
    const debounceData = setTimeout(() => {
      getData(searchInput);
    }, 300);
    return () => clearTimeout(debounceData);
  }, [searchInput]);

  return (
    <div className="flex flex-col items-center absolute">
      <BooksSearchBar onSearchInputChange={setSearchInput} />
      {loading && <h2>Loading...</h2>}

      <SessionProvider>
        {books && <BooksPreview books={books} />}
      </SessionProvider>
    </div>
  );
};
