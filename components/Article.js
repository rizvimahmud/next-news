import moment from "moment";
import styles from "../styles/Article.module.css";

const Article = ({ article }) => {
  const time = moment(article.publishedAt).format("LL");
  const subContent = article.description;
  const imageUrl = article.urlToImage ? article.urlToImage : "/filler.png";
  return (
    <article className={styles.container}>
      <div className={styles.dateContainer}>
        <p className={styles.date}>{time}</p>
      </div>
      <div className={styles.articleContainer}>
        <a href={article.url} target="_blank">
          {" "}
          <h4 className={styles.title}>{article.title}</h4>
        </a>
        <p className={styles.content}>{subContent}</p>
        <p className={styles.author}>
          By {article.author ? article.author : article.source.name}
        </p>
      </div>
      <div className={styles.imageContainer}>
        <img className={styles.img} src={imageUrl} alt={""} />
      </div>
    </article>
  );
};

export default Article;
