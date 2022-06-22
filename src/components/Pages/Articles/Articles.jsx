import React from "react";
import s from "./Articles.module.sass";
import Article from "../../Article/";

export default function Articles({ articles }) {
  return (
    <>
      <div className={s.title}>Articles & Resources</div>
      <div className={s.articles}>
        <div className={s.container}>
          {articles.map((article, i) => (
            <Article key={i} {...article} />
          ))}
        </div>
      </div>
    </>
  );
}
