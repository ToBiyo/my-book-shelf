import { NextRequest } from "next/server";
import { getWishBooks, addToWishBoks } from "@/db/bookServices";
import { getHandler, postHandler } from "@/lib/apiHandler";

export async function GET(req: NextRequest) {
  return getHandler(req, getWishBooks);
}

export async function POST(req: NextRequest) {
  return postHandler(req, addToWishBoks);
}
