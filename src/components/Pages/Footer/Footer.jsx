import React from "react";
import SocIconPanel from "../../UI/SocIconPanel/SocIconPanel";
import Logo from "../../UI/Logo/Logo";
import s from "./Footer.module.sass";

import ListItem from "../../UI/ListItem";

export default function Footer() {
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

  const objInfo = {
    Adress: `24A Kingston St, Los Vegas 
      NC 28202, USA`,
    Mail: "support@pages.com",
    Phone: "(+22) 123 - 4567 - 900",
  };

  return (
    <div className={s.footer}>
      <div className={s.container}>
        <div>
          <Logo />
          <SocIconPanel footer={true} showInstagram={true} />
          {arrItems.map((item, i) => {
            return (
              <div key={i}>
                <h3>{item.title}</h3>
                {item.items.map((litem, k) => (
                  <ListItem key={k}>{litem}</ListItem>
                ))}
              </div>
            );
          })}
          <h2>Keep in Touch</h2>
          <div className={s.contacts}>
            {Object.keys(objInfo).map((infoId) => (
              <div key={infoId}>{`${infoId}: ${objInfo[infoId]}`}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
