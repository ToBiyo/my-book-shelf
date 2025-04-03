import { BookListCard } from "./BookListCard";

export const BookListPreview = ({ books }) => {
  console.log(books);

  return (
    <div>
      {books.map((book) => {
        return <BookListCard book={book} key={book.bookId} />;
      })}
    </div>
  );
};
