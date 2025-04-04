"use client";
import { SearchPreviewCard } from "./SearchPreviewCard";
import { nanoid } from "nanoid";
import { BookData } from "./SearchPreviewCard";
import { Dispatch, SetStateAction } from "react";

export const BooksPreview = ({
  books,
  onDisplayChange,
}: {
  books: BookData[];
  onDisplayChange: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className="flex flex-col  gap-2 w-full my-5 mx-auto absolute top-14 left-0 justify-center items-center bg-white">
      <div className="flex w-2/3 justify-end">
        <button
          onClick={() => {
            onDisplayChange(false);
          }}
        >
          X
        </button>
      </div>
      <div className="w-2/3">
        {books.map((book) => (
          <SearchPreviewCard key={nanoid()} book={book} />
        ))}
      </div>
    </div>
  );
};
