import React from "react";
import s from "./Logo.module.sass";
import logo from "../../../img/bookmarks.svg";
import title_logo from "../../../img/logo.png";
export default function Logo() {
  return (
    <div className={s.menu_logo}>
      <img src={logo} alt="logo" />
      <img className={s.menu_logo_title} src={title_logo} alt="Page" />
    </div>
  );
}
