import React from "react";
import SocIconPanel from "../../UI/SocIconPanel/SocIconPanel";
import Logo from "../../UI/Logo/Logo";
import s from "./Footer.module.sass";

export default function Footer() {
  return (
    <div className={s.Footer}>
      <div>
        <Logo />
        <SocIconPanel />
      </div>
    </div>
  );
}
