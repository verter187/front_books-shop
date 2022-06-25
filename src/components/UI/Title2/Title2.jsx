import React from "react";
import s from "./Title2.module.sass";

export default function Title2({ children, ...props }) {
  return (
    <div {...props} className={s.title}>
      {children}
    </div>
  );
}
