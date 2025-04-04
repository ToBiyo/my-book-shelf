import { BookListCard } from "./BookListCard";

export const BookListPreview = ({ books }) => {
  return (
    <div className="flex flex-row flex-wrap my-8 gap-5 justify-start">
      {books.map((book) => {
        return <BookListCard book={book} key={book.bookId} />;
      })}
    </div>
  );
};
