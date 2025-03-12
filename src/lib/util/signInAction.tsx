"use server";
import { signIn } from "../../../auth";

export async function signInGoogleAction() {
  return await signIn("google", { redirectTo: "/books" });
}
export async function signInGithubAction() {
  return await signIn("github", { redirectTo: "/books" });
}
