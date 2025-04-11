import Image from "next/image";
import { nanoid } from "nanoid";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const decodedQuery = decodeURIComponent(id);

  const queryData = decodedQuery.split(",");

  const workId = queryData.pop();

  const endpoint = "https://openlibrary.org/works/" + workId + ".json";
  const response = await fetch(endpoint);
  const data = await response.json();
  console.log(data);

  const { covers, title, description } = data;

  console.log(data);

  const coverUrl =
    "https://covers.openlibrary.org/b/id/" + covers[0] + "-L.jpg";

  return (
    <div className="flex flex-col items-center my-20 mx-auto gap-10 w-2/3">
      <h2 className="text-4xl">{title}</h2>
      <div className="flex gap-3">
        {queryData.map((author: string) => (
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
      {/* <p>{description}</p> */}
    </div>
  );
}
