import React from "react";
import s from "./Articles.module.sass";
import Article from "../../Article/";
import Title from "../../UI/Title";

export default function Articles({ articles }) {
  return (
    <div className={s.articles}>
      <Title>Articles & Resources</Title>
      <div className={s.container}>
        <div className={s.articles_info}>
          {articles.map((article, i) => (
            <Article key={i} {...article} />
          ))}
        </div>
      </div>
    </div>
  );
}
