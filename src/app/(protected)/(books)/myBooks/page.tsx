import { cookies } from "next/headers";
import { PreviewSearchedBooks } from "@/components/PreviewSearchedBooks";
import { BookListPreview } from "@/components/BookListPreview";

export default async function page() {
  const endpoint = "https://openlibrary.org";

  const getCookies = async (name: string) => {
    const response = await cookies();
    const specificCookie = response.get(name)?.value ?? "";
    return specificCookie;
  };

  const SessionToken = await getCookies("authjs.session-token");
  console.log(SessionToken);

  const request = await fetch("http://localhost:3000/api/books/myBooks", {
    headers: {
      "Content-Type": "application/json",
      Cookie: `authjs.session-token=${SessionToken}`,
    },
  });
  const { books } = await request.json();

  return (
    <div>
      <h1 className="text-4xl my-10 text-center">My Books</h1>
      <div className="flex w-full justify-center">
        <PreviewSearchedBooks />
        <BookListPreview books={books} />
      </div>
    </div>
  );
}
