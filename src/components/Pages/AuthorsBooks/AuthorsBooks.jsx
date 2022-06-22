import React from "react";
import s from "./AuthorsBooks.module.sass";
import Book from "../../Book/";

export default function AuthorsBooks({ books }) {
  return (
    <>
      <div className={s.title}>The Author’s Book</div>
      <div className={s.author_books}>
        <div className={s.container}>
          {books.map((book, i) => (
            <Book key={i} {...book} />
          ))}
        </div>
      </div>
    </>
  );
}
