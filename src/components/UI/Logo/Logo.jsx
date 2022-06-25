import React from "react";
import s from "./Logo.module.sass";
import logo from "../../../img/bookmarks.svg";
import title_logo from "../../../img/logo.png";
export default function Logo() {
  return (
    <a href="#" className={s.menu_logo}>
      <img src={logo} alt="logo" />
      <img className={s.title_logo} src={title_logo} alt="Page" />
    </a>
  );
}
