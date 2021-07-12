import { useRouter } from "next/dist/client/router";
import styles from "../styles/Paginator.module.css";

const Paginator = ({ pageNumber }) => {
  const router = useRouter();
  return (
    <div className={styles.paginator}>
      <p
        onClick={() => {
          router
            .push(`/feed/${pageNumber - 1}`)
            .then(() => window.scrollTo(0, 0));
        }}
        className={pageNumber === 1 ? styles.disabled : styles.active}
      >
        Previous Page
      </p>
      <p className={styles.currentPage}>{pageNumber}</p>
      <p
        onClick={() => {
          router
            .push(`/feed/${pageNumber + 1}`)
            .then(() => window.scrollTo(0, 0));
        }}
        className={pageNumber === 4 ? styles.disabled : styles.active}
      >
        Next Page
      </p>
    </div>
  );
};

export default Paginator;
