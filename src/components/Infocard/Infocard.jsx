import React from "react";
import s from "./Infocard.module.sass";

export default function Infocard({ title, text = "" }) {
  return (
    <div className={s.infocard}>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}
