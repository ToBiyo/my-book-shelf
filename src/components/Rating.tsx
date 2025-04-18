"use client";
import { Star } from "./Star";
import { useState, useEffect } from "react";

export const Rating = ({ id, rate }: { id: string; rate: number[] }) => {
  const [rated, setRated] = useState<number[]>(rate);
  const [savedRate, setSavedRate] = useState<number[]>(rate);

  const updateRate = async (rate: number) => {
    const response = await fetch(
      "http://localhost:3000/api/books/myBooks/" + id,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "appplication/json",
        },
        body: JSON.stringify({ rating: rate }),
      }
    );
  };

  useEffect(() => {
    const numericalRate: number = savedRate.reduce((prev, next) => prev + next);

    updateRate(numericalRate);
  }, [savedRate]);

  return (
    <div
      className="flex gap-1 cursor-pointer p-5 "
      onMouseLeave={() => setRated(savedRate)}
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
