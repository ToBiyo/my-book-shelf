import { redirect } from "next/navigation";
import { auth } from "../../../../auth";
import BookCard from "@/components/BookCard";
import { BookData } from "@/components/BookCard";
import SearchBooks from "@/components/SearchBooks";

export default async function page() {
  const session = await auth();

  if (!session) {
    return redirect("/");
  }

  return (
    <div>
      <SearchBooks />
    </div>
  );
}
