"use client";
import { useState } from "react";
import { PreviewSearchedBooks } from "./PreviewSearchedBooks";

export const PreviewContainer = () => {
  const [display, setDisplay] = useState<boolean>(false);

  return (
    <div className="w-2/3 flex justify-end">
      <button
        onClick={() => setDisplay(true)}
        className="bg-emerald-400 p-3 rounded-xl text-white text-lg"
      >
        New Book
      </button>
      {display && <PreviewSearchedBooks onXmarkClick={setDisplay} />}
    </div>
  );
};
