import Link from "next/link";
import ProfileMnagmenteBtn from "./ProfileMnagmenteBtn";
import { SessionProvider } from "next-auth/react";
export default function Nav() {
  return (
    <nav className="flex items-center justify-between my-0 mx-auto w-2/3 py-2">
      <p className="text-2xl">
        my<span className="text-emerald-300 text-4xl">Book</span>shelf
      </p>
      <div className="flex gap-2 items-center w-auto">
        <Link href="/books" className="text-lg">
          Books
        </Link>
        <Link href="/bookShelf" className="text-lg">
          MyBooks
        </Link>
        <Link href="/wishreading" className="text-lg">
          WishList
        </Link>
        <Link href="readingBooks" className="text-lg">
          Reading
        </Link>
        <Link href="/profile" className="text-lg">
          Profile
        </Link>
      </div>
      <SessionProvider>
        <ProfileMnagmenteBtn />
      </SessionProvider>
    </nav>
  );
}
