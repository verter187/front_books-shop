import React from "react";
import s from "./Partners.module.sass";
import Partner from "../../Partner/";
import Title from "../../UI/Title";

export default function Partners({ partners }) {
  return (
    <div className={s.partners}>
      <Title>Articles & Resources</Title>
      <div className={s.container}>
        <div className={s.partners_cards}>
          {partners.map((partner, i) => (
            <Partner key={i} {...partner} />
          ))}
        </div>
      </div>
    </div>
  );
}
