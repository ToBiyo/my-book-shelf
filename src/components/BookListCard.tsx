import Image from "next/image";
import { nanoid } from "nanoid";

export const BookListCard = ({ book }) => {
  const { authors, bookId, coverUrl, rating, title } = book;

  return (
    <div className="flex flex-col gap-2 text-sm  border rounded-md justify-center items-center">
      <div className="flex bg-slate-100 w-full justify-center py-2 px-5">
        <Image
          src={coverUrl}
          width={120}
          height={60}
          alt={`${title} book cover`}
          className="h-auto w-32"
        ></Image>
      </div>
      <div className="px-2 py-2">
        <label htmlFor="" className="text-lg text-emerald-400">
          Title:{" "}
        </label>
        <h3 className="text-lg">{title}</h3>
        <label htmlFor="">Authors:</label>
        {authors.map((author: string[]) => (
          <h3 key={nanoid()}>{author}</h3>
        ))}
        <label htmlFor="">Rate:</label>
        {rating ? <h3>{rating}</h3> : <h3>N/A</h3>}
      </div>
    </div>
  );
};
