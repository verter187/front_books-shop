import React from "react";
import s from "./AuthorsBooks.module.sass";
import Book from "../../Book/";
import Title from "../../UI/Title";

export default function AuthorsBooks({ books }) {
  return (
    <>
      {/* <div className={s.title}>The Author’s Book</div> */}
      <Title>The Author’s Book</Title>
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
