"use client";
import { SearchPreviewCard } from "./SearchPreviewCard";
import { nanoid } from "nanoid";
import { Book } from "@/lib/validators/BookSChema";
import { Dispatch, SetStateAction } from "react";

export const BooksPreview = ({
  books,
  onDisplayChange,
}: {
  books: Book[];
  onDisplayChange: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className="flex flex-col  w-full my-5 mx-auto justify-center items-center">
      <div className="flex flex-col gap-8">
        {books.map((book) => (
          <SearchPreviewCard key={nanoid()} book={book} />
        ))}
      </div>
    </div>
  );
};
