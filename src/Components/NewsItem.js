import React, { useContext } from "react";
import { NewsContext } from "../Contexts/NewsContext";

export const NewsItem = ({ news }) => {
  const { title, spoiler, date } = news;
  const { showAllNews, setShowAllNews, setNews } = useContext(NewsContext);

  return (
    <article className="news-card">
      <header className="news-card-header">
        <h2 className="news-card-title">{title}</h2>
        <span className="news-card-date">{date}</span>
      </header>
      <p className="news-card-spoiler">{spoiler}</p>
      <button
        className="news-card-more"
        onClick={() => {
          console.log("first");
          setNews(news);
          setShowAllNews(!showAllNews);
        }}
      >
        More
      </button>
    </article>
  );
};
