import { useState } from "react";

const useActiveNews = (bool = true) => {
  const [showAllNews, setShowAllNews] = useState(bool);
  const [news, setNews] = useState({});

  return { showAllNews, setShowAllNews, news, setNews };
};

export default useActiveNews;
