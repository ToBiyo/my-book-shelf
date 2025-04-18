import { NextRequest } from "next/server";
import { myBooks } from "@/db/schema";
import { getBookById, updateRating } from "@/db/bookServices";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  try {
    const record = await getBookById(id, myBooks);
    console.log(record);

    if (record.success) {
      return new Response(JSON.stringify(record), { status: 200 });
    }

    return new Response(JSON.stringify(record), { status: 404 });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Something went wrong" }), {
      status: 500,
    });
  }
}

//update myBooks rating
export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const { rating } = await request.json();
    const record = await updateRating(id, rating);

    if (record.success) {
      return new Response(JSON.stringify(record), { status: 200 });
    }

    return new Response(JSON.stringify(record), { status: 400 });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Something went wrong" }), {
      status: 500,
    });
  }
}
