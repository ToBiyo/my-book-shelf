import Image from "next/image";
import { nanoid } from "nanoid";
import { Rating } from "@/components/Rating";
import { getCookiesAction } from "@/lib/util/authenticationAction";
import { formatRating } from "@/lib/util/utils";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const SessionToken = await getCookiesAction("authjs.session-token");

  const response = await fetch(
    "http://localhost:3000/api/books/myBooks/" + id,
    {
      headers: {
        "Content-Type": "application/json",
        Cookie: `authjs.session-token=${SessionToken}`,
      },
    }
  );

  const result = await response.json();

  console.log(result.data[0]);

  const { title, coverUrl, authors, rating } = result.data[0];
  console.log(result.data[0]);

  const formattedRate = formatRating(rating);

  return (
    <div className="flex flex-col items-center my-20 mx-auto gap-10 w-2/3">
      <h2 className="text-4xl">{title}</h2>
      <div className="flex gap-3">
        {authors.map((author: string) => (
          <h3 key={nanoid()}>{author}</h3>
        ))}
      </div>
      <Image
        height={200}
        width={100}
        src={coverUrl}
        alt="book cover"
        className="min-w-44 shadow-xl shadow-black"
      ></Image>
      <Rating id={id} rate={formattedRate}></Rating>
    </div>
  );
}
