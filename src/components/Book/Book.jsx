import React from "react";
import Block from "../UI/Block/Block";
// import img_path from "../../img/";
import s from "./Book.module.sass";

export default function Book({ title, price, descr, type, img_name }) {
  return (
    <div className={s.books}>
      <img
        src={`${window.location.origin}/backImg/${img_name}`}
        alt={img_name}
      />
      <div className={s.books_info}>
        <h2>{title}</h2>
        <h3>{`$ ${price} USD`}</h3>
        <p>{descr}</p>
        <div className={s.books_block}>
          <Block title={type} color={"#1B3764"} />
        </div>
      </div>
    </div>
  );
}
