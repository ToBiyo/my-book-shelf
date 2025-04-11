import Image from "next/image";
import { nanoid } from "nanoid";
import Link from "next/link";

export const BookListCard = ({ book }) => {
  const { authors, bookId, coverUrl, rating, title } = book;
  const bookIdSegemtns = bookId.split("/");
  const id = bookIdSegemtns[2];

  const authorsFormatted = authors.reduce(
    (prev: string, next: string) => prev + "," + next
  );

  console.log(authorsFormatted);

  const dynamicEndPoint = authorsFormatted + "," + id;

  console.log(dynamicEndPoint);

  return (
    <div className="flex flex-col gap-2 text-sm  border rounded-md  items-center min-w-64 min-h-80">
      <div className="flex bg-slate-100 w-full justify-center py-2 px-5">
        <Image
          src={coverUrl}
          width={120}
          height={60}
          alt={`${title} book cover`}
          className="h-auto w-32 shadow-lg shadow-black"
        ></Image>
      </div>
      <div className="px-2 py-2 w-full">
        <label htmlFor="" className="text-xl text-emerald-400">
          Title:{" "}
        </label>
        <h3 className="text-xl">{title}</h3>
        <label htmlFor="" className="text-lg text-emerald-400">
          Authors:
        </label>
        {authors.map((author: string[]) => (
          <h3 key={nanoid()} className="text-lg">
            {author}
          </h3>
        ))}
        <label htmlFor="">Rate:</label>
        {rating ? <h3>{rating}</h3> : <h3>N/A</h3>}
      </div>
      <Link
        href={"/myBooks/" + dynamicEndPoint}
        className="p-3 bg-emerald-400 rounded-xl text-white my-2"
      >
        See more
      </Link>
    </div>
  );
};
