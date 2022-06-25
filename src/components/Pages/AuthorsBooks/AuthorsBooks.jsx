import React from "react";
import s from "./AuthorsBooks.module.sass";
import Book from "../../Book/";
import Title from "../../UI/Title";

export default function AuthorsBooks({ books }) {
  return (
    <div className={s.author_books}>
      <Title>The Author’s Book</Title>
      <div className={s.author_books_info}>
        <div className={s.container}>
          <div className={s.author_books_items}>
            {books.map((book, i) => (
              <Book key={i} {...book} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
