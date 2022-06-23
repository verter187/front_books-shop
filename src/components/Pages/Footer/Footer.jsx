import React from "react";
import SocIconPanel from "../../UI/SocIconPanel/SocIconPanel";
import Logo from "../../UI/Logo/Logo";
import s from "./Footer.module.sass";

import ListItem from "../../UI/ListItem";

const arrItems = [
  {
    title: "Explore",
    items: ["Home", "About", "Articles", "Our Store", "Contact Us"],
  },
  {
    title: "Utility Pages",
    items: [
      "Style Guide",
      "404 Not Found",
      "Password Protected",
      "Licenses",
      "Changelog",
    ],
  },
];
export default function Footer() {
  return (
    <div className={s.footer}>
      <div className={s.container}>
        <div>
          <Logo />
          <SocIconPanel footer={true} showInsta={true} />
          {arrItems.map((item) => {
            return (
              <div>
                <h3>{item.title}</h3>
                {item.items.map((litem) => (
                  <ListItem>{litem}</ListItem>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
