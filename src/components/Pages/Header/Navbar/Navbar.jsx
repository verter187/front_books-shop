import React from "react";
import s from "./Navbar.module.sass";
import MenuButton from "../../../UI/MenuButton/MenuButton";

export default function Navbar() {
  return (
    <ul className={s.menu}>
      <MenuButton>Home</MenuButton>
      <MenuButton>About</MenuButton>
      <MenuButton>Pages</MenuButton>
      <MenuButton>Contact Us</MenuButton>
    </ul>
  );
}
