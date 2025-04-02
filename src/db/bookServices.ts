import { myBooks, wishRead, readingBooks } from "./schema";
import { db } from "./db";
import { getUserByEmail } from "./userServices";
import { eq } from "drizzle-orm";

//mybooks queries
export async function getMyBooks(email: string) {
  const user = await getUserByEmail(email);

  if (!user) {
    return [];
  }

  const id = user[0].id;
  const books = await db.select().from(myBooks).where(eq(myBooks.userId, id));

  return books;
}

export async function addToMyBoks(email: string, bookId: string) {
  const user = await getUserByEmail(email);

  if (!user || !bookId) {
    return;
  }

  const id = user[0].id;

  const books = await db
    .insert(myBooks)
    .values({ userId: id, bookId: bookId })
    .returning();

  return books;
}

//wishRead Books
export async function getWishBooks(email: string) {
  const user = await getUserByEmail(email);

  if (!user) {
    return [];
  }

  const id = user[0].id;
  const books = await db.select().from(wishRead).where(eq(myBooks.userId, id));

  return books;
}

export async function addToWishBoks(email: string, bookId: string) {
  const user = await getUserByEmail(email);

  if (!user || !bookId) {
    return;
  }

  const id = user[0].id;

  const books = await db
    .insert(wishRead)
    .values({ userId: id, bookId: bookId })
    .returning();

  return books;
}
//reding Books
export async function getReadingBooks(email: string) {
  const user = await getUserByEmail(email);

  if (!user) {
    return [];
  }

  const id = user[0].id;
  const books = await db
    .select()
    .from(readingBooks)
    .where(eq(myBooks.userId, id));

  return books;
}

export async function addToReadingBoks(email: string, bookId: string) {
  const user = await getUserByEmail(email);

  if (!user || !bookId) {
    return;
  }

  const id = user[0].id;

  const books = await db
    .insert(readingBooks)
    .values({ userId: id, bookId: bookId })
    .returning();

  return books;
}
