import Link from "next/link";
import { ManageProfileBtn } from "./ManageProfileBtn";
import { SessionProvider } from "next-auth/react";
export default function Nav() {
  return (
    <nav className="flex items-center justify-between my-0 mx-auto w-2/3 py-2">
      <p className="text-2xl">
        my<span className="text-emerald-300 text-4xl">Book</span>shelf
      </p>
      <div className="flex gap-4 items-center w-auto">
        <Link href="/myBooks" className="text-lg">
          MyBooks
        </Link>
        <Link href="/wishReading" className="text-lg">
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
        <ManageProfileBtn />
      </SessionProvider>
    </nav>
  );
}
