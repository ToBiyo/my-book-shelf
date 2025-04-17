import { NextRequest } from "next/server";
import { readingBooks } from "@/db/schema";
import { getHandler, postHandler, deleteHandler } from "@/lib/apiHandler";

export async function GET(req: NextRequest) {
  return getHandler(req, readingBooks);
}

export async function POST(req: NextRequest) {
  return postHandler(req, readingBooks);
}

export async function DELETE(req: NextRequest) {
  return deleteHandler(req, readingBooks);
}
