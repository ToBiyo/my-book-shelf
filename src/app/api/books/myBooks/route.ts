import { NextRequest } from "next/server";

import { myBooks } from "@/db/schema";

import { deleteHandler, getHandler, postHandler } from "@/lib/apiHandler";

export async function GET(req: NextRequest) {
  return getHandler(req, myBooks);
}
export async function POST(req: NextRequest) {
  return postHandler(req, myBooks);
}

export async function DELETE(req: NextRequest) {
  return deleteHandler(req, myBooks);
}
