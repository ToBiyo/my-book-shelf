import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

interface ChildProps {
  onSearchInputChange: React.Dispatch<React.SetStateAction<string>>;
}

export const BooksSearchBar: React.FC<ChildProps> = ({
  onSearchInputChange,
}) => {
  return (
    <div className="my-14 flex items-center">
      <input
        className="p-2 flex items-center justify-center text-lg text-black outline-none"
        type="text"
        placeholder="Book title"
        onKeyUp={(e) => {
          onSearchInputChange(e.target.value);
        }}
      />
    </div>
  );
};
