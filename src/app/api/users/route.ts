import { getUserByEmail } from "@/db/userServices";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "../../../../auth";

const headers = { "Content-Type": "appliclation/json" };

export async function GET(req: NextRequest) {
  const session = await auth();
  if (session) {
    return new Response(JSON.stringify({ session: session }), {
      status: 200,
      headers: headers,
    });
  }

  return new Response(JSON.stringify("you are not logged in"), {
    headers: headers,
    status: 404,
  });
}
