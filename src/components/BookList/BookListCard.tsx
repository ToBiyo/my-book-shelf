"use client";

import Image from "next/image";
import { nanoid } from "nanoid";
import Link from "next/link";
import { ReadedBook } from "@/lib/validators/BookSchema";
import { useState, useEffect } from "react";
import { Rating } from "../Rating";
import { formatRating } from "@/lib/util/utils";

export const BookListCard = ({
  book,
  endpoint,
}: {
  book: ReadedBook;
  endpoint: string;
}) => {
  const { id, authors, bookKey, coverUrl, title, rating } = book;
  const [clicked, setclicked] = useState<number>(0);
  const formattedRating = formatRating(rating);

  const deleteBook = async () => {
    const request = await fetch("http://localhost:3000/api/books/" + endpoint, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ bookId: id }),
    });

    const response = await request.json();
    //aggiungere feedback per libro rimosso e refreshare i dati della pagina
  };

  useEffect(() => {
    if (!clicked) {
      return;
    }

    const debounceRequest = setTimeout(() => {
      deleteBook();
    }, 100);

    return () => clearTimeout(debounceRequest);
  }, [clicked]);

  return (
    <div className="flex flex-col gap-2 text-sm rounded-md  items-center min-w-64 min-h-80">
      <div className="flex bg-slate-100 w-full justify-center py-5 px-5">
        <Image
          src={coverUrl}
          width={120}
          height={60}
          alt={`${title} book cover`}
          className="h-56 w-auto shadow-lg shadow-black"
        ></Image>
      </div>
      <div className="px-2 py-2 w-full">
        <label htmlFor="" className="text-xl text-emerald-400">
          Title:{" "}
        </label>
        <h3 className="text-xl">{title}</h3>
        <label htmlFor="" className="text-lg text-emerald-400">
          Authors:
        </label>
        {authors.map((author) => (
          <h3 key={nanoid()} className="text-lg">
            {author}
          </h3>
        ))}

        <Rating id={id} rate={formattedRating}></Rating>
      </div>
      <div className="flex gap-x-3">
        <Link
          href={"/myBooks/" + id}
          className="p-3 bg-emerald-400 rounded-xl text-white my-2"
        >
          See more
        </Link>
        <button
          className="p-3 bg-emerald-400 rounded-xl text-white my-2"
          onClick={() => {
            setclicked((prev) => prev + 1);
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
};
