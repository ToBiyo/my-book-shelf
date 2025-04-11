import React, { Dispatch, SetStateAction } from "react";

export const Star = ({
  index,
  value,
  onStateChange,
}: {
  index: number;
  value: number;
  onStateChange: Dispatch<SetStateAction<number[]>>;
}) => {
  return (
    <div
      className={`h-5 w-5 star-clip-path border ${
        value ? "bg-yellow-400" : "bg-slate-400"
      }`}
      onMouseOver={() => {
        onStateChange((prev: number[]) => {
          return prev.map((el, i) => {
            if (i <= index) {
              return 1;
            }

            return 0;
          });
        });
      }}
    ></div>
  );
};
