import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Dispatch, SetStateAction } from "react";

export const CloseButton = ({
  onXmarkClick,
}: {
  onXmarkClick: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className="w-2/3 flex justify-end mt-12">
      <button
        onClick={() => {
          onXmarkClick(false);
        }}
      >
        <FontAwesomeIcon icon={faXmark} className="text-4xl" />
      </button>
    </div>
  );
};
