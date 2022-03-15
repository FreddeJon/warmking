import React from "react";

export const NewsItem = ({ news }) => {
  const { title, spoiler, date } = news;
  return (
    <article className="news-card">
      <header className="news-card-header">
        <h2 className="news-card-title">{title}</h2>
        <span className="news-card-date">{date}</span>
      </header>
      <p className="news-card-spoiler">{spoiler}</p>
      <button className="news-card-more">More</button>
    </article>
  );
};
