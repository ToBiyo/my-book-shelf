import { redirect } from "next/navigation";
import { auth } from "../../../../auth";
import BookCard from "@/components/BookCard";
import { BookData } from "@/components/BookCard";
export default async function page() {
  const session = await auth();

  if (!session) {
    return redirect("/");
  }

  const response = await fetch(
    "https://www.googleapis.com/books/v1/volumes?q=search+terms"
  );

  const { items } = await response.json();
  const books = [] as BookData[];

  items.forEach((element) => {
    const { volumeInfo } = element;

    const bookInfo = {
      id: element.id,
      title: volumeInfo.title,
      authors: volumeInfo.authors,
      pages: volumeInfo.pageCount,
      images: volumeInfo.imageLinks,
      publishedDate: volumeInfo.publishedDate,
    };
    books.push(bookInfo);
  });
  console.log(books);

  return (
    <div>
      <h1>Search Book</h1>

      <div className="flex flex-wrap gap-7 m-52">
        {books &&
          books.map((book) => <BookCard bookInfo={book} key={book.title} />)}
      </div>
    </div>
  );
}
