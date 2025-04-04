"use client";
import { useEffect, useState } from "react";
import { SessionProvider } from "next-auth/react";
import { fetchSearchApiData } from "@/lib/util/utils";
import { BooksPreview } from "./BooksPreview";
import { BooksSearchBar } from "./BooksSearchBar";
import { filterBooks } from "@/lib/util/utils";
import { BookData } from "./SearchPreviewCard";

export const PreviewSearchedBooks = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [books, setBooks] = useState<BookData[] | null>();
  const [loading, setLoading] = useState<boolean>(false);
  const [display, setDisplay] = useState<boolean>(false);

  const getData = async (query: string) => {
    const booksData = await fetchSearchApiData(query);
    if (!booksData) {
      return;
    }
    let formattedBooks = filterBooks(booksData);
    setBooks(formattedBooks);
    return;
  };

  useEffect(() => {
    setLoading(true);

    const debounceData = setTimeout(() => {
      getData(searchInput);
    }, 1000);

    setDisplay(true);
    setLoading(false);
    return () => {
      return clearTimeout(debounceData);
    };
  }, [searchInput]);

  return (
    <div className="flex flex-col w-full items-center relative">
      <BooksSearchBar onSearchInputChange={setSearchInput} />
      {loading && <h2>Loading...</h2>}
      <SessionProvider>
        {books && display && (
          <BooksPreview books={books} onDisplayChange={setDisplay} />
        )}
      </SessionProvider>
    </div>
  );
};
