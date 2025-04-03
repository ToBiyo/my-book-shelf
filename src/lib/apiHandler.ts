import { NextRequest } from "next/server";
import { auth } from "../../auth";
import { BookRecords } from "@/db/bookServices";

const headers = { "Content-Type": "application/json" };

//handler for get request

export async function getHandler(
  req: NextRequest,
  getRecords: (email: string) => Promise<BookRecords[] | []>
) {
  try {
    const session = await auth();

    if (!session?.user?.email) {
      return new Response(
        JSON.stringify({ message: "You are nout authenticated" }),
        {
          status: 401,
          headers: headers,
        }
      );
    }

    const email = session.user.email;

    const records = await getRecords(email);
    console.log(records);

    return new Response(JSON.stringify({ books: records }), {
      status: 200,
      headers: headers,
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Unexpected error occurred", error }),
      { status: 500 }
    );
  }
}

import { BookData } from "@/components/SearchPreviewCard";
//handler for post request
export async function postHandler(
  req: NextRequest,
  addRecord: (email: string, book: BookData) => Promise<BookRecords[] | []>
) {
  try {
    const session = await auth();

    if (!session?.user?.email) {
      return new Response(
        JSON.stringify({ message: "You are nout authenticated" }),
        {
          status: 401,
          headers: headers,
        }
      );
    }

    const email = session.user.email;

    const newRecord = await req.json();
    const { book } = newRecord;
    const result = await addRecord(email, book);
    return new Response(JSON.stringify({ result }), {
      status: 200,
      headers: headers,
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Unexpected error occurred", error }),
      { status: 500 }
    );
  }
}
