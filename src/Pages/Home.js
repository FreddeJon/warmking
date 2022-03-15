import React from "react";
import { NewsItem } from "../Components/NewsItem";
import newsData from "../Data/NewsData";

export const Home = () => {
  return (
    <section>
      <h1 className="title">News</h1>
      <div>
        {newsData.map((news) => (
          <NewsItem key={news.id} news={news} />
        ))}
      </div>
    </section>
  );
};
