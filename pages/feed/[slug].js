import Head from "next/head";
import Layout from "../../components/Layout";
import Article from "../../components/Article";
import Paginator from "../../components/Paginator";

export default function Feed({ articles, pageNumber }) {
  return (
    <>
      <Head>
        <title>News24 | Feed</title>
      </Head>
      <Layout>
        <section className="feed-container">
          <h4 className="feed-heading">Latest headlines for today</h4>
          {articles.map((article, index) => (
            <div key={index}>
              <Article article={article} />
            </div>
          ))}
        </section>
        <Paginator pageNumber={pageNumber} />
      </Layout>
    </>
  );
}

export const getServerSideProps = async (context) => {
  const pageNumber = context.query.slug;

  if (!pageNumber || pageNumber < 0 || pageNumber > 4) {
    return {
      props: {
        articles: [],
        pageNumber: 1,
      },
    };
  }
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&page=${pageNumber}&pageSize=10&sortBy=publishedAt&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
  );
  const data = await response.json();
  const { articles } = data;
  return {
    props: {
      articles,
      pageNumber: Number.parseInt(pageNumber),
    },
  };
};
