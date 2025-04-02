import { NextRequest, NextResponse } from "next/server";
import { getMyBooks, addToMyBoks } from "@/db/bookServices";
import { auth } from "../../../../../auth";

const headers = { "Content-Type": "application/json" };

type ResponseData = {
  message: string;
};

export async function GET(req: NextRequest, res: NextResponse<ResponseData>) {
  try {
    const session = await auth();

    if (session?.user?.email) {
      const email = session.user.email;

      if (email) {
        const books = await getMyBooks(email);

        return new Response(JSON.stringify({ books: books }), {
          headers: headers,
          status: 200,
        });
      }
      return new Response(
        JSON.stringify({
          message: "Was impossible to retrive your account information",
        }),
        {
          headers: headers,
          status: 404,
        }
      );
    }
    return new Response(
      JSON.stringify({ message: "You are not authenticated" }),
      {
        headers: headers,
        status: 401,
      }
    );
  } catch (error) {
    return new Response(JSON.stringify({ message: "user not found" }), {
      headers: headers,
      status: 404,
    });
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await auth();

    if (session?.user?.email) {
      const email = session.user.email;
      const body = await req.json();
      const { bookId } = body;

      const addBook = await addToMyBoks(email, bookId);
      console.log(addBook);

      return new Response(JSON.stringify(body), {
        headers: headers,
        status: 200,
      });
    }

    return new Response(
      JSON.stringify({ message: "You are not authenticated" })
    );
  } catch (error) {
    return new Response(JSON.stringify({ message: "Something wnt wrong" }));
  }
}
