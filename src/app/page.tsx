import { LoginControllers } from "@/components/LoginControllers";
import { auth } from "../../auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();

  if (session) {
    redirect("/bookShelf");
  }

  return (
    <div className=" min-h-screen flex flex-col items-center justify-center gap-14">
      <h1 className="text-4xl">
        Welcome to my<span className="text-emerald-400 text-5xl">Book</span>
        shelf
      </h1>
      <LoginControllers />
    </div>
  );
}
