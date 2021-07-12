import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import Link from "next/dist/client/link";

const Home = () => {
  return (
    <Layout>
      <section className={styles.container}>
        <div className={styles.header}>
          <h1>Find everything happening around you in one place</h1>
        </div>
        <div className={styles.cta}>
          <Link href="/feed/1">
            <a>Top Stories</a>
          </Link>

          <Link href="/search">
            <a>Search News</a>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
