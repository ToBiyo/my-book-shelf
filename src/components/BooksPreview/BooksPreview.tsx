"use client";
import { SearchPreviewCard } from "./SearchPreviewCard";
import { nanoid } from "nanoid";
import { Book } from "@/lib/validators/BookSchema";
import { Dispatch, SetStateAction, useState } from "react";

export const BooksPreview = ({ books }: { books: Book[] }) => {
  const [message, setMessage] = useState<string>("");
  console.log(message);

  return (
    <div className="flex flex-col  w-full my-5 mx-auto justify-center items-center">
      <div className="flex flex-col gap-8">
        {message && (
          <ActionFeedBack message={message} onButtonClick={setMessage} />
        )}
        {books.map((book) => (
          <SearchPreviewCard
            key={nanoid()}
            book={book}
            onButtonClick={setMessage}
          />
        ))}
      </div>
    </div>
  );
};

const ActionFeedBack = ({
  message,
  onButtonClick,
}: {
  message: string;
  onButtonClick: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div className="fixed w-screen h-screen bg-black flex items-center justify-center left-0 top-0 bg-opacity-25">
      <div className="flex flex-col gap-3 bg-white   rounded-lg items-center justify-center max-w-96 overflow-hidden">
        <div className=" bg-emerald-400 h-16 w-full"></div>
        <h2 className="text-lg text-center m-5">{message}</h2>
        <button
          className="bg-emerald-400 text-black py-2 max-w-52 px-8 rounded-2xl m-2"
          onClick={() => {
            onButtonClick("");
          }}
        >
          Ok
        </button>
      </div>
    </div>
  );
};
