"use client";
import { useEffect, useState } from "react";
import { SessionProvider } from "next-auth/react";
import { fetchSearchApiData } from "@/lib/util/utils";
import { BooksPreview } from "./BooksPreview";
import { BooksSearchBar } from "./BooksSearchBar";
import { filterBooks } from "@/lib/util/utils";
import { BookData } from "./SearchPreviewCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Dispatch, SetStateAction } from "react";

export const PreviewSearchedBooks = ({
  onXmarkClick,
}: {
  onXmarkClick: Dispatch<SetStateAction<boolean>>;
}) => {
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
    <div className="flex flex-col w-full items-center absolute bg-white bg-opacity-95 z-10 left-0 top-0 min-h-full">
      <div className="w-2/3 flex justify-end mt-12">
        <button
          onClick={() => {
            onXmarkClick(false);
          }}
        >
          <FontAwesomeIcon icon={faXmark} className="text-4xl" />
        </button>
      </div>
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
