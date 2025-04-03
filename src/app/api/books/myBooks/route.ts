import { NextRequest } from "next/server";
import { getMyBooks, addToMyBoks } from "@/db/bookServices";

import { getHandler, postHandler } from "@/lib/apiHandler";

export async function GET(req: NextRequest) {
  return getHandler(req, getMyBooks);
}
export async function POST(req: NextRequest) {
  return postHandler(req, addToMyBoks);
}
