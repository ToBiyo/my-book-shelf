import { BookListCard } from "./BookListCard";
import { Book } from "@/lib/validators/BookSchema";
import { nanoid } from "nanoid";

export const BookListPreview = ({ books }: { books: Book[] }) => {
  return (
    <div className="flex flex-row flex-wrap my-8 gap-5 justify-center">
      {books.map((book: Book) => {
        return <BookListCard book={book} key={nanoid()} />;
      })}
    </div>
  );
};
