import { Book } from "../validators/BookSchema";
import { getUserByEmail } from "@/db/userServices";

export const filterBooks = (books: any[]) => {
  const filteredBooks = books
    .filter((book: any) => "author_name" in book && "cover_edition_key" in book)
    .map((item: any) => {
      const book: Book = {
        authors: item.author_name,
        title: item.title,
        bookKey: item.key,
        coverUrl: `https://covers.openlibrary.org/b/olid/${item.cover_edition_key}-L.jpg`,
      };

      return book;
    });
  return filteredBooks;
};

/* //get userId
type GetUserResult =
  | { success: true; userId: string }
  | { success: false; status: number; message: string };

export const getUserIdByEmail = async (
  email: string
): Promise<GetUserResult> => {
  const user = await getUserByEmail(email);

  if (!user) {
    return {
      success: false,
      status: 404,
      message: "Unauthenticated or book data missing",
    };
  }

  return {
    success: true,
    userId: user[0].id,
  };
};
 */
