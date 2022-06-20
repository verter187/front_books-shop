import React, { useState, useEffect } from "react";

import Header from "../Pages/Header/Header";
import AuthorsBook from "../Pages/AuthorsBook/AuthorsBook";
import AboutAuthor from "../Pages/AboutAuthor/AboutAuthor";
import Partners from "../Pages/Partners/Partners";
import GetBookPage from "../Pages/GetBookPage/GetBookPage";
import Topics from "../Pages/Topics/Topics";
import Articles from "../Pages/Articles/Articles";
import Footer from "../Pages/Footer/Footer";
import s from "./App.module.sass";
import { getBooks, getPartners, getTopics, getArticles } from "../../requests";

console.log();
function App() {
  const [books, setBooks] = useState([]);
  const [partners, setPartners] = useState([]);
  const [topics, setTopics] = useState([]);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getBooks(setBooks);
  }, []);

  useEffect(() => {
    getPartners(setPartners);
  }, []);

  useEffect(() => {
    getTopics(setTopics);
  }, []);

  useEffect(() => {
    getArticles(setArticles);
  }, []);

  console.log(books);
  return (
    <div className={s.App}>
      <Header />
      <AuthorsBook books={books} />
      <AboutAuthor />
      <Partners partners={partners} />
      <GetBookPage />
      <Topics topics={topics} />
      <Articles articles={articles} />
      <Footer />
    </div>
  );
}

export default App;
