"use client";
import { signOutAction } from "@/lib/util/signOutAction";
import Image from "next/image";
import Link from "next/link";
import { auth } from "../../auth";
import {
  faCaretDown,
  faGear,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSession } from "next-auth/react";
import { useState } from "react";
import deafaultUser from "../../public/defaultUser.jpg";

export default function ProfileMnagmenteBtn() {
  const { data: session } = useSession();
  const [display, setDispaly] = useState(false);

  return (
    <div>
      <button
        className="min-w-18 flex gap-1 items-center"
        onClick={() => {
          setDispaly((prev) => !prev);
        }}
      >
        <Image
          alt="user profile image"
          src={session?.user?.image || deafaultUser}
          width={40}
          height={40}
          className="rounded-full"
        ></Image>

        <FontAwesomeIcon icon={faCaretDown} className="text-emerald-400 w-3" />
      </button>
      <div
        className={`absolute top-14 flex-col gap-1 items-start ${
          display ? "flex" : "hidden"
        } `}
      >
        <Link
          href={"/profile"}
          onClick={() => {
            setDispaly((prev) => !prev);
          }}
        >
          Profile
          <FontAwesomeIcon icon={faGear} className="mx-2" />
        </Link>
        <button
          onClick={() => {
            signOutAction();
            setDispaly((prev) => !prev);
          }}
        >
          Sign Out
          <FontAwesomeIcon icon={faSignOut} className="mx-2" />
        </button>
      </div>
    </div>
  );
}
