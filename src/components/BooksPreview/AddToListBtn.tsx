import { useState, useEffect } from "react";
import { Book } from "@/lib/validators/BookSchema";

/* bookShelf */
export const AddToListBtn = ({
  book,
  apiEndpoint,
  buttonText,
}: {
  book: Book;
  apiEndpoint: string;
  buttonText: string;
}) => {
  const [clickedTimes, setClickedTimes] = useState<number>(0);

  const postNewBook = async () => {
    const request = await fetch(
      "http://localhost:3000/api/books/" + apiEndpoint,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ book: book }),
      }
    );

    const response = await request.json();
    console.log(response);
  };

  useEffect(() => {
    console.log(book);
    if (!clickedTimes) {
      return;
    }
    const debounceRequest = setTimeout(() => {
      postNewBook();
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
