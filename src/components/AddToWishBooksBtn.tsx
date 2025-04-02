import { useState, useEffect } from "react";

export const AddToWishBooksBtn = ({ bookId }: { bookId: string }) => {
  const [clickedTimes, setClickedTimes] = useState<number>(0);

  const postNewBook = async () => {
    const request = await fetch("http://localhost:3000/api/books/wishlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ bookId: bookId }),
    });

    const response = await request.json();

    console.log(response);
  };

  useEffect(() => {
    if (!clickedTimes) {
      return;
    }
    const debounceRequest = setTimeout(() => {
      postNewBook();
    }, 300);
    return () => clearTimeout(debounceRequest);
  }, [clickedTimes]);

  return (
    <button
      className="bg-slate-50 rounded-lg min-w-32 text-black py-1"
      onClick={() => {
        setClickedTimes((prev) => prev + 1);
      }}
    >
      My Books +
    </button>
  );
};
