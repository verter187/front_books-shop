import React from "react";
import Header from "../Pages/Header/Header";
import Welcome from "../Pages/Welcome/Welcome";
import AuthorsBook from "../Pages/AuthorsBook/AuthorsBook";
import AboutAuthor from "../Pages/AboutAuthor/AboutAuthor";
import Achievements from "../Pages/Achievements/Achievements";
import GetBookPage from "../Pages/GetBookPage/GetBookPage";
import Topics from "../Pages/Topics/Topics";
import Articles from "../Pages/Articles/Articles";
import Footer from "../Pages/Footer/Footer";
import s from "./App.module.sass";

function App() {
  return (
    <div className={s.App}>
      <Header />
      <Welcome />
      <AuthorsBook />
      <AboutAuthor />
      <Achievements />
      <GetBookPage />
      <Topics />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
