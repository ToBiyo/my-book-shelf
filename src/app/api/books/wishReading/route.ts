import { NextRequest } from "next/server";
import { getHandler, postHandler, deleteHandler } from "@/lib/apiHandler";
import { wishRead } from "@/db/schema";

export async function GET(req: NextRequest) {
  return getHandler(req, wishRead);
}

export async function POST(req: NextRequest) {
  return postHandler(req, wishRead);
}

export async function DELETE(req: NextRequest) {
  return deleteHandler(req, wishRead);
}
