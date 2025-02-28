import LoginButton from "@/components/LoginButton";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      <h1>
        Welcome to my<span>Book</span>shelf
      </h1>
      <LoginButton />
    </div>
  );
}
