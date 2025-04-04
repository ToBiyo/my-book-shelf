import { myBooks, wishRead, readingBooks } from "./schema";
import { db } from "./db";
import { getUserByEmail } from "./userServices";
import { eq } from "drizzle-orm";
import { BookData } from "@/components/SearchPreviewCard";
export type BookRecords = {
  id: string;
  userId: string | null;
  bookId: string;
};

//mybooks queries
export async function getMyBooks(email: string): Promise<BookRecords[] | []> {
  const user = await getUserByEmail(email);

  if (!user) {
    return [];
  }

  const id = user[0].id;
  const books = await db.select().from(myBooks).where(eq(myBooks.userId, id));

  return books;
}

export async function addToMyBoks(
  email: string,
  book: BookData
): Promise<BookRecords[]> {
  const user = await getUserByEmail(email);

  if (!user || !book) {
    return [];
  }

  const id = user[0].id;
  const { authors, title, book_key, cover_url } = book;

  const books = await db
    .insert(myBooks)
    .values({
      userId: id,
      bookId: book_key,
      title: title,
      coverUrl: cover_url,
      authors: authors,
    })
    .returning();

  return books;
}

//wishRead Books
export async function getWishBooks(email: string): Promise<BookRecords[] | []> {
  const user = await getUserByEmail(email);

  if (!user) {
    return [];
  }

  const id = user[0].id;
  const books = await db.select().from(wishRead).where(eq(wishRead.userId, id));

  return books;
}

export async function addToWishBoks(
  email: string,
  book: BookData
): Promise<BookRecords[] | []> {
  const user = await getUserByEmail(email);

  if (!user || !book) {
    return [];
  }

  const id = user[0].id;

  const { authors, title, book_key, cover_url } = book;

  const books = await db
    .insert(wishRead)
    .values({
      userId: id,
      bookId: book_key,
      title: title,
      coverUrl: cover_url,
      authors: authors,
    })
    .returning();

  return books;
}

//reding Books
export async function getReadingBooks(
  email: string
): Promise<BookRecords[] | []> {
  const user = await getUserByEmail(email);

  if (!user) {
    return [];
  }

  const id = user[0].id;
  const books = await db
    .select()
    .from(readingBooks)
    .where(eq(readingBooks.userId, id));

  return books;
}

export async function addToReadingBoks(
  email: string,
  book: BookData
): Promise<BookRecords[] | []> {
  const user = await getUserByEmail(email);

  if (!user || !book) {
    return [];
  }

  const id = user[0].id;
  const { authors, title, book_key, cover_url } = book;

  const books = await db
    .insert(readingBooks)
    .values({
      userId: id,
      bookId: book_key,
      title: title,
      coverUrl: cover_url,
      authors: authors,
    })
    .returning();

  return books;
}
