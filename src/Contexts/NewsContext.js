import { createContext } from "react";
import useActiveNews from "../Hooks/useActiveNews";

const NewsContext = createContext();

const NewsProvider = ({ children }) => {
  const { showAllNews, setShowAllNews, news, setNews } = useActiveNews();

  return (
    <NewsContext.Provider
      value={{
        showAllNews,
        setShowAllNews,
        news,
        setNews,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};
export { NewsContext, NewsProvider };
