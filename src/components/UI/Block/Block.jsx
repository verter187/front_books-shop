import React from "react";
import s from "./Block.module.sass";

export default function Block({ title, text }) {
  return (
    <div className={s.block}>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}
