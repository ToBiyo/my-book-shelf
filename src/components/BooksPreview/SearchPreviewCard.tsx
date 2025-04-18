import Image from "next/image";
import { nanoid } from "nanoid";
import { AddToListBtn } from "./AddToListBtn";
import { Book } from "@/lib/validators/BookSchema";
import { Dispatch, SetStateAction } from "react";

export const SearchPreviewCard = ({
  book,
  onButtonClick,
}: {
  book: Book;
  onButtonClick: Dispatch<SetStateAction<string>>;
}) => {
  const { title, authors, coverUrl } = book;

  return (
    <div className="flex items-center  justify-between">
      <Image
        src={coverUrl}
        width={80}
        height={70}
        alt={title + " book cover"}
        className="min-w-28"
      />
      <div className="flex flex-col gap-1">
        <h3 className="text-xl">{title}</h3>
        {authors.map((author: string) => (
          <h2 key={nanoid()} className="text-lg">
            {author}
          </h2>
        ))}
      </div>
      <div className="flex flex-col gap-1">
        <AddToListBtn
          book={book}
          apiEndpoint="myBooks"
          buttonText="My Books"
          onButtonClick={onButtonClick}
        />
        <AddToListBtn
          book={book}
          apiEndpoint="readingBooks"
          buttonText="Reading"
          onButtonClick={onButtonClick}
        />
        <AddToListBtn
          book={book}
          apiEndpoint="wishReading"
          buttonText="Wishlist"
          onButtonClick={onButtonClick}
        />
      </div>
    </div>
  );
};
