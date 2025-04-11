"use client";
import { Star } from "./Star";

import { useState } from "react";
import { useEffect } from "react";

export const Rating = () => {
  const [rated, setRated] = useState<number[]>([0, 0, 0, 0, 0]);
  const [savedRate, setSavedRate] = useState<number[]>([0, 0, 0, 0, 0]);

  useEffect(() => {
    console.log(savedRate);
  }, [savedRate]);

  return (
    <div
      className="flex gap-1 cursor-pointer p-5 "
      onMouseLeave={() =>
        setRated((prev) => {
          return prev.map((el) => 0);
        })
      }
      onClick={() => {
        setSavedRate(rated);
      }}
    >
      {rated.map((rate, i) => (
        <Star index={i} key={i} value={rate} onStateChange={setRated} />
      ))}
    </div>
  );
};
