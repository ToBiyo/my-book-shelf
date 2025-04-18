import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { Book } from "@/lib/validators/BookSchema";

/* bookShelf */
export const AddToListBtn = ({
  book,
  apiEndpoint,
  buttonText,
  onButtonClick,
}: {
  book: Book;
  apiEndpoint: string;
  buttonText: string;
  onButtonClick: Dispatch<SetStateAction<string>>;
}) => {
  const [clickedTimes, setClickedTimes] = useState<number>(0);
  const [message, setMessage] = useState<string>("");

  const addNewBook = async () => {
    const response = await fetch(
      "http://localhost:3000/api/books/" + apiEndpoint,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ book: book }),
      }
    );

    const result = await response.json();
    if (result.success) {
      const bookTitle = result.data[0].title;
      onButtonClick(
        bookTitle + " successfully addedd to " + buttonText + " list."
      );
    }
    if (response.status === 403) {
      onButtonClick(result.message);
    }
  };

  useEffect(() => {
    if (!clickedTimes) {
      return;
    }
    const debounceRequest = setTimeout(() => {
      addNewBook();
    }, 100);
    return () => clearTimeout(debounceRequest);
  }, [clickedTimes]);

  return (
    <button
      className="bg-emerald-400 rounded-lg min-w-32 text-white py-1"
      onClick={() => {
        setClickedTimes((prev) => prev + 1);
      }}
    >
      {buttonText}
    </button>
  );
};
