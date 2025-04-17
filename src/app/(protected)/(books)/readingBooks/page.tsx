import { getCookiesAction } from "@/lib/util/authenticationAction";
import { BookListPreview } from "@/components/BookList/BookListPreview";
import { PreviewContainer } from "@/components/BooksPreview/PreviewContainer";

export default async function page() {
  const SessionToken = await getCookiesAction("authjs.session-token");

  const request = await fetch("http://localhost:3000/api/books/readingBooks", {
    headers: {
      "Content-Type": "application/json",
      Cookie: `authjs.session-token=${SessionToken}`,
    },
  });
  const { books } = await request.json();

  return (
    <div className="flex flex-col">
      <h1 className="text-4xl my-10 text-center">My Books</h1>
      <div className="flex flex-col w-full justify-center items-center">
        <PreviewContainer />
        {books && <BookListPreview books={books} />}
      </div>
    </div>
  );
}
