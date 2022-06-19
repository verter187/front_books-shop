import React from "react";
import s from "./AuthorsBook.module.sass";
import img from "../../../img/book.png";

export default function AuthorsBook({ title, price, descr, type, img_name }) {
  return (
    <div className={s.books}>
      <img src={img} alt={img_name} />
      <div>
        <h3>{title}</h3>
        <h3>{price}</h3>
        <h3>{descr}</h3>
        <h3>{type}</h3>
      </div>
    </div>
  );
}
