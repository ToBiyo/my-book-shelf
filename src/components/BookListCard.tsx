"use client";
import { useEffect, useState } from "react";
import { fetchWorkApiData } from "@/lib/util/utils";

export const BookListCard = ({ book }) => {
  const getBookData = async () => {
    const { bookId } = book;

    const bookData = await fetchWorkApiData(bookId);

    const BookDetails = {
      title: bookData.title,
    };

    console.log(bookData);
  };
  useEffect(() => {
    getBookData();
  }, [book]);

  return <div></div>;
};
