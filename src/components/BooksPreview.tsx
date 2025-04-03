import React from "react";
import { SearchPreviewCard } from "./SearchPreviewCard";
import { nanoid } from "nanoid";

export const BooksPreview = ({ books }: { books: any[] }) => {
  console.log(books);

  return (
    <div className="flex flex-col gap-2 w-2/3 my-5 mx-auto">
      {books &&
        books.map((book) => <SearchPreviewCard key={nanoid()} book={book} />)}
    </div>
  );
};
