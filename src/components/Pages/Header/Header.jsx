import React from "react";
import Button from "../../UI/Button/Button";
import s from "./Header.module.sass";
import logo from "../../../img/bookmarks.svg";
import SocIconPanel from "../../UI/SocIconPanel/SocIconPanel";
import Navbar from "../Header/Navbar/Navbar";

export default function Header() {
  return (
    <div className={s.header}>
      <div className={s.nav}>
        <div className={s.container}>
          <div className={s.menu_container}>
            <div>
              <a href="#" className={s.menu_logo}>
                <img src={logo} alt="logo" />
                Pages
              </a>
              <SocIconPanel />
            </div>
            <Navbar />
            <Button>Order Today</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
