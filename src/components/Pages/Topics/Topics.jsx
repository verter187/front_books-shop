import React from "react";
import s from "./Topics.module.sass";
import Topic from "../../Topic";
import topics_img from "../../../img/topics.png";
import Title from "../../UI/Title";

export default function Topics({ topics }) {
  return (
    <div className={s.topics}>
      <Title>What Will You Learn?</Title>

      <div className={s.container}>
        <div className={s.topics_info}>
          {topics.map((topic, i) => (
            <Topic key={i} {...topic} />
          ))}
        </div>
        <div className={s.books_face}>
          <img src={topics_img} alt="topics" />
        </div>
      </div>
    </div>
  );
}
