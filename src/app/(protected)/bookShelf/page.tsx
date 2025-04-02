/* "use client";
import { useEffect } from "react"; */

import { cookies } from "next/headers";

export default async function page() {
  const endpoint = "https://openlibrary.org";
  const getCookies = async (name: string) => {
    const response = await cookies();
    const specificCookie = response.get(name)?.value ?? "";

    return specificCookie;
  };

  const SessionToken = await getCookies("authjs.session-token");
  console.log(SessionToken);

  const request = await fetch("http://localhost:3000/api/books/bookShelf", {
    headers: {
      "Content-Type": "application/json",
      Cookie: `authjs.session-token=${SessionToken}`,
    },
  });
  const { books } = await request.json();
  const { bookId } = books[0];

  const dataUri = endpoint + bookId + ".json";

  const dataResponse = await fetch(dataUri);
  const book = await dataResponse.json();
  console.log(book);

  return (
    <div>
      <pre>{dataUri}</pre>
    </div>
  );
}
