import React from "react";
import s from "./Logo.module.sass";
import logo from "../../../img/bookmarks.svg";

export default function Logo() {
  return (
    <a href="#" className={s.menu_logo}>
      <img src={logo} alt="logo" />
      Pages
    </a>
  );
}
