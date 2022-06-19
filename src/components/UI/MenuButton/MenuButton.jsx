import React from "react";
import s from "./MenuButton.module.sass";

export default function MenuButton({ children, ...props }) {
  return (
    <a {...props} className={s.menu_link}>
      {children}
    </a>
  );
}
