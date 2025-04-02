import Image from "next/image";
import { nanoid } from "nanoid";
import { AddToMyBooksBtn } from "./AddToMyBooksBtn";
import { AddToWishBooksBtn } from "./AddToWishBooksBtn";
import { AddtoReadingBooksBtn } from "./AddToReadingBooksBtn";

export type BookData = {
  author: string[];
  title: string;
  book_key: string;
  cover_url: string;
};

export default function BookCard({ bookInfo }: { bookInfo: BookData }) {
  const { title, author, cover_url, book_key } = bookInfo;

  return (
    <div className="flex items-center w-full gap-28">
      <Image
        src={cover_url}
        width={80}
        height={70}
        alt={title + " book cover"}
      ></Image>
      <h3 className="w-2/4">{title}</h3>
      <div className="flex flex-col gap-1">
        {author.map((author: string) => (
          <h2 key={nanoid()}>{author}</h2>
        ))}
      </div>
      <div className="flex flex-col gap-1">
        {" "}
        <AddToMyBooksBtn bookId={book_key} />
        <AddtoReadingBooksBtn bookId={book_key} />
        <AddToWishBooksBtn bookId={book_key} />
      </div>
    </div>
  );
}
