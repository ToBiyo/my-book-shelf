import Image from "next/image";
import { nanoid } from "nanoid";
import { AddToListBtn } from "./AddToListBtn";

export type BookData = {
  authors: string[];
  title: string;
  book_key: string;
  cover_url: string;
};

export const SearchPreviewCard = ({ book }: { book: BookData }) => {
  const { title, authors, cover_url } = book;
  console.log(book);

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
        {authors.map((author: string) => (
          <h2 key={nanoid()}>{author}</h2>
        ))}
      </div>
      <div className="flex flex-col gap-1">
        <AddToListBtn
          book={book}
          apiEndpoint="myBooks"
          buttonText="Add to myBooks"
        />
        <AddToListBtn
          book={book}
          apiEndpoint="readingBooks"
          buttonText="Add to reading Books"
        />
        <AddToListBtn
          book={book}
          apiEndpoint="wishReading"
          buttonText="Add to wish Reading"
        />
      </div>
    </div>
  );
};
