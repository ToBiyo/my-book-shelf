import { BookListCard } from "./BookListCard";
import { Book } from "@/lib/validators/BookSchema";
import { nanoid } from "nanoid";
import { ReadedBook } from "@/lib/validators/BookSchema";

export const BookListPreview = ({
  books,
  endpoint,
}: {
  books: ReadedBook[];
  endpoint: string;
}) => {
  return (
    <div className="flex flex-row flex-wrap my-8 gap-5 justify-center">
      {books.map((book: ReadedBook) => {
        return <BookListCard book={book} key={nanoid()} endpoint={endpoint} />;
      })}
    </div>
  );
};
