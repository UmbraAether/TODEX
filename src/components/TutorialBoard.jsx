import { useEffect, useState } from "react";
import NewsItem from "./TutorialItem";

const NewsBoard = ({category}) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=50&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles));
  }, [category]);

  return (
    <div>
      <h2 className="text-center mt-2">
        Latest <span className="badge bg-danger ">News</span>
      </h2>
      <div className='d-flex flex-wrap justify-content-center'>
        {articles.map((news, index) => {
          return (
            <NewsItem className=''
              key={index}
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewsBoard;
