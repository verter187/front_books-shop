import React from "react";
import s from "./Title.module.sass";

export default function Title({ children, ...props }) {
  return (
    <div {...props} className={s.title}>
      {children}
    </div>
  );
}
