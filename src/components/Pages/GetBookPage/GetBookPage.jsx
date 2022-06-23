import React from "react";
import s from "./GetBookPage.module.sass";
import books_img from "../../../img/get_book.png";
import Title from "../../UI/Title";

export default function GetBookPage() {
  return (
    <div className={s.book_page}>
      <div className={s.container}>
        <div className={s.book_page_info}>
          <Title style={{ color: "#FFFFFF" }}>Get Book Copy Today!</Title>
          {/* <div className={s.title}>Get Book Copy Today!</div> */}

          <p>
            We believe that bookstores are essential to a healthy culture.
            They’re where authors can connect with readers.
          </p>
        </div>
        <div className={s.book_page_face}>
          <img src={books_img} alt="logo" />
        </div>
      </div>
    </div>
  );
}
