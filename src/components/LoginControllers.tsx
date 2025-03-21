import {
  signInGoogleAction,
  signInGithubAction,
} from "@/lib/util/signInAction";

import { faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const LoginControllers = () => {
  return (
    <div className="flex gap-5 items-center">
      <button
        onClick={signInGoogleAction}
        className="bg-slate-50 p-2 text-black text-lg w-auto flex gap-2"
      >
        Login with Google
        <FontAwesomeIcon icon={faGoogle} className="w-5 text-emerald-400" />
      </button>
      <button
        onClick={signInGithubAction}
        className="bg-slate-50 p-2 text-black text-lg w-auto flex gap-2"
      >
        Login with Google
        <FontAwesomeIcon icon={faGithub} className="w-5 text-emerald-400" />
      </button>
    </div>
  );
};
