import { NextRequest, NextResponse } from "next/server";
import { getReadingBooks, addToReadingBoks } from "@/db/bookServices";
import { getHandler, postHandler } from "@/lib/apiHandler";

export async function GET(req: NextRequest) {
  return getHandler(req, getReadingBooks);
}

export async function POST(req: NextRequest) {
  return postHandler(req, addToReadingBoks);
}
