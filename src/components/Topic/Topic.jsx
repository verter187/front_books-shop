import React from "react";
import s from "./Topic.module.sass";

export default function Topic({ id, descr }) {
  return (
    <div className={s.topics}>
      <div className={s.radius}>{`0${id}`}</div>
      <p>{descr}</p>
    </div>
  );
}
