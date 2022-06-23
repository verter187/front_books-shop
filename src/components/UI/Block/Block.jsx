import React from "react";
import s from "./Block.module.sass";

export default function Block({ title, text = "", color = "white" }) {
  return (
    <div className={s.block}>
      <h3 style={(color = { color })}>{title}</h3>
      {text === "" ? "" : <p>{text}</p>}
    </div>
  );
}
