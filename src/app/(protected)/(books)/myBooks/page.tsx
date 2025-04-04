import { PreviewSearchedBooks } from "@/components/PreviewSearchedBooks";
import { BookListPreview } from "@/components/BookListPreview";
import { getCookiesAction } from "@/lib/util/authenticationAction";

export default async function page() {
  const SessionToken = await getCookiesAction("authjs.session-token");

  const request = await fetch("http://localhost:3000/api/books/myBooks", {
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
        <PreviewSearchedBooks />
        <BookListPreview books={books} />
      </div>
    </div>
  );
}
