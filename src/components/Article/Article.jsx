import React from "react";
import s from "./Article.module.sass";

export default function Article({ title, descr, date, img_name }) {
  return (
    <div className={s.articles}>
      <img
        src={`${window.location.origin}/backImg/${img_name}`}
        alt={img_name}
      />
      <div className={s.articles_info}>
        <h2>{title}</h2>
        <p>{descr}</p>
        <h3>{date}</h3>
      </div>
    </div>
  );
}
