import React from "react";
import s from "./Partners.module.sass";
import Partner from "../../Partner/";
import Title from "../../UI/Title";

export default function Partners({ partners }) {
  return (
    <>
      {/* <div className={s.title}>Trusted By The Best</div> */}
      <Title>Trusted By The Best</Title>
      <div className={s.partners}>
        <div className={s.container}>
          {partners.map((partner, i) => (
            <Partner key={i} {...partner} />
          ))}
        </div>
      </div>
    </>
  );
}
