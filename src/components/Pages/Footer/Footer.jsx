import React from "react";
import SocIconPanel from "../../UI/SocIconPanel/SocIconPanel";
import Logo from "../../UI/Logo/Logo";
import s from "./Footer.module.sass";
import Title from "../../UI/Title";

export default function Footer() {
  return (
    <div className={s.Footer}>
      <div>
        <Logo />
        <SocIconPanel />
        <Title>Мой текст заголовка</Title>
      </div>
    </div>
  );
}
