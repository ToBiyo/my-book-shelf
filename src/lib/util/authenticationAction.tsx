"use server";
import { signIn } from "../../../auth";
import { cookies } from "next/headers";

export async function signInGoogleAction() {
  return await signIn("google", { redirectTo: "/books" });
}
export async function signInGithubAction() {
  return await signIn("github", { redirectTo: "/books" });
}
import { signOut } from "../../../auth";

export async function signOutAction() {
  return await signOut();
}

export const getCookiesAction = async (name: string) => {
  const response = await cookies();
  const specificCookie = response.get(name)?.value ?? "";
  return specificCookie;
};
