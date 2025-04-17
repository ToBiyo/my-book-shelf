import { NextRequest } from "next/server";
import { auth } from "../../auth";
import { getAllRecord, addNewRecord, deleteRecord } from "@/db/bookServices";
import { Table } from "@/db/bookServices";

const headers = { "Content-Type": "application/json" };

//handler for get request

export async function getHandler(req: NextRequest, table: Table) {
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

    const records = await getAllRecord(email, table);

    if (!records.success) {
      return new Response(JSON.stringify({ message: "Records not found" }), {
        status: 404,
        headers: headers,
      });
    }

    console.log(records);

    return new Response(JSON.stringify({ books: records.data }), {
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

//handler for post request
export async function postHandler(req: NextRequest, table: Table) {
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

    if (!book) {
      return new Response(JSON.stringify({ message: "No book was selected" }), {
        status: 402,
      });
    }

    const result = await addNewRecord(email, book, table);

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

export async function deleteHandler(req: NextRequest, table: Table) {
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

    const body = await req.json();
    const { bookId } = body;

    if (!bookId) {
      return new Response(JSON.stringify({ message: "Incorrect Book Id" }), {
        status: 402,
      });
    }

    const result = await deleteRecord(bookId, email, table);

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
