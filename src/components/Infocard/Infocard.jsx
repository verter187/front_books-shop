import React from "react";
import s from "./Infocard.module.sass";

export default function Infocard({
  title,
  text = "",
  borderColor = "#FFCA42",
}) {
  return (
    <div style={(borderColor = { borderColor })} className={s.infocard}>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}
