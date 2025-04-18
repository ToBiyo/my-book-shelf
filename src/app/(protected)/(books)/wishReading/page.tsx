import { getCookiesAction } from "@/lib/util/authenticationAction";
import { BookListPreview } from "@/components/BookList/BookListPreview";
import { PreviewContainer } from "@/components/BooksPreview/PreviewContainer";

export default async function page() {
  const SessionToken = await getCookiesAction("authjs.session-token");

  const response = await fetch("http://localhost:3000/api/books/wishReading", {
    headers: {
      "Content-Type": "application/json",
      Cookie: `authjs.session-token=${SessionToken}`,
    },
  });
  const result = await response.json();

  const { data } = result;

  return (
    <div className="flex flex-col">
      <h1 className="text-4xl my-10 text-center">My Books</h1>
      <div className="flex flex-col w-full justify-center items-center">
        <PreviewContainer />
        {data && <BookListPreview books={data} endpoint="wishReading" />}
      </div>
    </div>
  );
}
