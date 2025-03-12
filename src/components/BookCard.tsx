import Image from "next/image";
export type BookData = {
  title: string;
  authors: string[];
  images: BookImage;
  pages: number;
  publishedDate: string;
};
type BookImage = {
  thumbnail: string;
  smallThumbnail: string;
};

export default function BookCard({ bookInfo }: { bookInfo: BookData }) {
  const { title, authors, images, pages, publishedDate } = bookInfo;
  const { smallThumbnail, thumbnail } = images;

  return (
    <div className="flex flex-col gap-1 items-center justify-center  rounded-2xl max-w-52 min-h-44 text-center bg-emerald-400">
      <Image
        src={thumbnail}
        width={80}
        height={70}
        alt={title + " book cover"}
      ></Image>
      <h3>{title}</h3>
      {authors.map((author: string) => (
        <h2 key={author}>{author}</h2>
      ))}
      <h2>Pages : {pages}</h2>
      <h2>Published Date : {publishedDate}</h2>
    </div>
  );
}
