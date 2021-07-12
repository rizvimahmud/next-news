import Head from "next/head";
import styles from "../styles/Search.module.css";
import Layout from "../components/Layout";
import useSWR from "swr";
import SearchResult from "../components/SearchResult";

import { useState } from "react";

const Search = () => {
  const [query, setQuery] = useState("");
  const [articles, setArticles] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const url = `https://newsapi.org/v2/everything?q=${query}&pageSize=50&language=en&sortBy=publishedAt&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}
  `;
  const fetcher = (url) => {
    return fetch(url).then((res) => res.json());
  };
  const { data, error } = useSWR(url, fetcher);
  const fetchData = () => {
    data ? setArticles(data.articles) : setFetchError(error);
  };
  console.log(process.env.NEXT_APP_NEWS_API_KEY);
  return (
    <>
      <Head>
        <title>News24 | Search</title>
      </Head>
      <Layout>
        <section className={styles.container}>
          <div>
            <p className={styles.searchheader}>
              Search for Latest Stories, Top Headlines, Breaking news...
            </p>
            <div className={styles.inputcontainer}>
              <label>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Search"
                  autoComplete="off"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <span className={styles.icon} onClick={fetchData}>
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 13 13"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#999"
                  >
                    <path d="M8.87 8.16l3.25 3.25-.7.71-3.26-3.25a5 5 0 1 1 .7-.7zM5 9a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path>
                  </svg>
                </span>
              </label>
            </div>
          </div>
        </section>
        <section>
          {fetchError ? (
            <div className={styles.error}>
              Something went wrong : {fetchError.message}
            </div>
          ) : (
            articles.length > 0 &&
            articles.map((article, index) => (
              <div key={index}>
                <SearchResult article={article} />
              </div>
            ))
          )}
        </section>
      </Layout>
    </>
  );
};

export default Search;
