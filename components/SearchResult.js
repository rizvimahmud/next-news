import Link from "next/link";
import styles from "../styles/SearchResult.module.css";
import moment from "moment";

const SearchResult = ({ article }) => {
  const publishedAt = moment(article.publishedAt).format("LL");
  return (
    <article className={styles.container}>
      <h2>
        <a href={article.url} target="_blank">
          {" "}
          {article.title}{" "}
        </a>
      </h2>
      <p>{article.description}</p>
      <p className={styles.time}>{publishedAt}</p>
    </article>
  );
};

export default SearchResult;
