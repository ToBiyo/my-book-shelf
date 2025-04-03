import React from "react";
import { auth } from "../../../../../auth";

export default async function page() {
  const session = await auth();

  const user = session?.user?.name;

  return <div>Welcome {user}</div>;
}
