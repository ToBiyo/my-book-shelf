import { signOutAction } from "@/lib/util/signOutAction";
import { auth } from "../../auth";
export default async function Nav() {
  const session = await auth();

  if (session) {
    return (
      <div>
        <h2>Welcome {session.user?.name}</h2>
        <button onClick={signOutAction}>Sign Out</button>
      </div>
    );
  }
  return (
    <div>
      <h2>You are not logged in</h2>
      <button onClick={signOutAction}>Sign Out</button>
    </div>
  );
}
