import { myBooks, wishRead, readingBooks } from "./schema";
import { db } from "./db";
import { and, eq } from "drizzle-orm";
import { getUserByEmail } from "./userServices";
import { Book } from "@/lib/validators/BookSchema";

export type BookRecord = {
  id: string;
  userId: string | null;
  bookKey: string;
};

export type ErrorResponse = {
  success: false;
  status: number;
  message: string;
};
export type SuccessResponse<T> = {
  success: true;
  status: number;
  data: T;
};

export type BooksResponse = SuccessResponse<BookRecord[] | []> | ErrorResponse;
export type Table = typeof myBooks | typeof wishRead | typeof readingBooks;

//queries books from selected table
export async function getAllRecord(
  email: string,
  table: Table
): Promise<BooksResponse> {
  try {
    const userResult = await getUserIdByEmail(email);

    if (!userResult.success) {
      return userResult;
    }

    const { userId } = userResult;
    const books = await db.select().from(table).where(eq(table.userId, userId));
    return {
      success: true,
      status: 200,
      data: books,
    };
  } catch (error) {
    console.error("DB error in getMyBooks: ", error);

    return {
      success: false,
      status: 500,
      message: "Unexpected error occureed while fetching books",
    };
  }
}

export async function addNewRecord(
  email: string,
  book: Book,
  table: Table
): Promise<BooksResponse> {
  try {
    const userResult = await getUserIdByEmail(email);

    if (!userResult.success) {
      return userResult;
    }

    const { userId } = userResult;
    const { authors, title, bookKey, coverUrl } = book;

    const getBook = await getBookByTitle(title, userId, table);

    if (getBook.status === 404) {
      const books = await db
        .insert(table)
        .values({
          userId: userId,
          bookKey: bookKey,
          title: title,
          coverUrl: coverUrl,
          authors: authors,
        })
        .returning();

      return {
        success: true,
        status: 200,
        data: books,
      };
    }

    return {
      success: false,
      status: 404,
      message: "Book already exist on " + table,
    };
  } catch (error) {
    console.error("DB error in getMyBooks: ", error);

    return {
      success: false,
      status: 500,
      message: "Unexpected error occureed while fetching books",
    };
  }
}

export async function deleteRecord(
  bookId: string,
  email: string,
  table: Table
): Promise<BooksResponse> {
  try {
    const userResult = await getUserIdByEmail(email);

    if (!userResult.success) {
      return userResult;
    }

    const { userId } = userResult;

    const book = await db
      .delete(table)
      .where(and(eq(table.id, bookId), eq(table.userId, userId)))
      .returning();

    return {
      success: true,
      status: 200,
      data: book,
    };
  } catch (error) {
    console.error("DB error : " + error);

    return {
      success: false,
      status: 500,
      message: "Unexpected error occureed while fetching books",
    };
  }
}

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

//recover book

export const getBookByTitle = async (
  title: string,
  userId: string,
  table: Table
) => {
  try {
    const book = await db
      .select()
      .from(table)
      .where(and(eq(table.title, title), eq(table.userId, userId)));

    if (book.length > 0) {
      return {
        success: true,
        code: 200,
        data: book,
      };
    }

    return {
      success: false,
      status: 404,
      data: book,
    };
  } catch (error) {
    console.error("DB unexpected error : " + error);

    return {
      succes: false,
      status: 500,
      message: error,
    };
  }
};

//update book rating
export const updateRating = async (bookId: string, rating: number) => {
  try {
    const updatedRecord = await db
      .update(myBooks)
      .set({ rating: rating })
      .where(eq(myBooks.id, bookId))
      .returning();

    if (updatedRecord.length > 0) {
      return {
        success: true,
        status: 200,
        data: updatedRecord,
      };
    }

    return {
      success: false,
      status: 400,
      message: "Failed to update rating",
    };
  } catch (error) {
    return {
      success: false,
      status: 500,
      message: "Unexpected db error",
    };
  }
};

//get book by id

export const getBookById = async (bookId: string, table: Table) => {
  try {
    const record = await db.select().from(table).where(eq(table.id, bookId));

    if (record.length === 0) {
      return {
        success: false,
        status: 400,
        data: record,
      };
    }

    return {
      success: true,
      status: 200,
      data: record,
    };
  } catch (error) {
    console.error("DB error : " + error);

    return {
      success: false,
      status: 500,
      message: "Unexpected database error",
    };
  }
};
