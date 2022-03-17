import React, { useContext } from "react";
import { NewsItem } from "../Components/NewsItem";
import { NewsContext, NewsProvider } from "../Contexts/NewsContext";
import newsData from "../Data/NewsData";

export const Home = () => {
  return (
    <NewsProvider>
      <HomeWithProvider></HomeWithProvider>
    </NewsProvider>
  );
};

const HomeWithProvider = () => {
  const { showAllNews } = useContext(NewsContext);

  return (
    <section>{showAllNews ? <HomeAllNews /> : <HomeWithOnewNews />}</section>
  );
};

const HomeAllNews = () => {
  return (
    <>
      <h1 className="title">News</h1>
      <div>
        {newsData.map((news) => (
          <NewsItem key={news.id} news={news} />
        ))}
      </div>
    </>
  );
};

const HomeWithOnewNews = () => {
  const { news, setShowAllNews } = useContext(NewsContext);

  return (
    <>
      <span className="go-back" onClick={() => setShowAllNews(true)}>
        <i class="bx bx-arrow-back"></i>
      </span>
      <div className="full-news-header">
        <h1 className="full-news-title">{news.title}</h1>
        <span className="full-news-date">{news.date}</span>
      </div>
      <p className="full-news-text">{news.text}</p>
    </>
  );
};
