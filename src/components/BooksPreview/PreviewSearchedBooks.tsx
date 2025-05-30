"use client";
import { useEffect, useState } from "react";
import { SessionProvider } from "next-auth/react";
import { fetchSearchApiData } from "@/lib/util/dataFetch";
import { BooksPreview } from "./BooksPreview";
import { BooksSearchBar } from "./BooksSearchBar";
import { filterBooks } from "@/lib/util/utils";
import { Book } from "@/lib/validators/BookSchema";
import { Dispatch, SetStateAction } from "react";
import { CloseButton } from "../CloseButton";

export const PreviewSearchedBooks = ({
  onXmarkClick,
}: {
  onXmarkClick: Dispatch<SetStateAction<boolean>>;
}) => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [books, setBooks] = useState<Book[] | null>();
  const [loading, setLoading] = useState<boolean>(false);

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

    setLoading(false);

    return () => {
      return clearTimeout(debounceData);
    };
  }, [searchInput]);

  return (
    <div className="flex flex-col w-full items-center absolute bg-white bg-opacity-95 z-10 left-0 top-0 min-h-full">
      <CloseButton onXmarkClick={onXmarkClick} />
      <BooksSearchBar onSearchInputChange={setSearchInput} />
      {loading && <h2>Loading...</h2>}
      <SessionProvider>
        {books && !loading && <BooksPreview books={books} />}
      </SessionProvider>
    </div>
  );
};
