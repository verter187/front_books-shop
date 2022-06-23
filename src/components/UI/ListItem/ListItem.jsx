import React from "react";
import s from "./ListItem.module.sass";

export default function ListItem({ children, ...props }) {
  return (
    <a {...props} className={s.list_item}>
      {children}
    </a>
  );
}
