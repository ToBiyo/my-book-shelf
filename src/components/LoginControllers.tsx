import React from "react";
import {
  signInGoogleAction,
  signInGithubAction,
} from "@/lib/util/signInAction";

export const LoginControllers = () => {
  return (
    <div className="flex gap-5 items-center">
      <button
        onClick={signInGoogleAction}
        className="bg-slate-50 p-2 text-black text-lg"
      >
        Login with Google
      </button>
      <button
        onClick={signInGithubAction}
        className="bg-slate-50 p-2 text-black text-lg"
      >
        Login with Github
      </button>
    </div>
  );
};
