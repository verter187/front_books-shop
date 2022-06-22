import React from "react";
import Block from "../UI/Block/Block";

import s from "./Partner.module.sass";

export default function Partner({ title, descr, img_name }) {
  return (
    <div className={s.partners}>
      <img
        src={`${window.location.origin}/backImg/${img_name}`}
        alt={img_name}
      />
      <div className={s.partners_info}>
        <h2>{title}</h2>
        <p>{descr}</p>
      </div>
    </div>
  );
}
