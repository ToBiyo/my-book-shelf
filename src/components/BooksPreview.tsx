import React from "react";
import BookCard from "./BookCard";
import { nanoid } from "nanoid";

export const BooksPreview = ({ books }: { books: any[] }) => {
  return (
    <div className="flex flex-col gap-2 w-1/3 my-5 mx-auto">
      {books.map((book) => (
        <BookCard key={nanoid()} bookInfo={book} />
      ))}
    </div>
  );
};
