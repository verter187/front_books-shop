import React from "react";
import Button from "../../UI/Button/Button";
import s from "./Header.module.sass";

import SocIconPanel from "../../UI/SocIconPanel/SocIconPanel";
import Navbar from "../Header/Navbar/Navbar";
import Welcome from "../Header/Welcome/Welcome";
import Logo from "../../UI/Logo/Logo";

export default function Header() {
  return (
    <div className={s.header}>
      <div className={s.nav}>
        <div className={s.container}>
          <div className={s.menu_container}>
            <Logo />
            <SocIconPanel />
            <Navbar />
            <Button>Order Today</Button>
          </div>
        </div>
      </div>
      <Welcome />
    </div>
  );
}
