import { useNews } from "../hooks/useNews";

export default function NewsPage() {
  const { articles, loading, error, fetchNews } = useNews();

  return (
    <div>
      <h1>News</h1>
      <button onClick={fetchNews} disabled={loading}>
        Fetch
      </button>
      {loading && <p>Loading...</p>}
      {error && <p>Error...</p>}
      <ul>
        {articles.map((article, index) => (
          <li key={index}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              <strong>{article.title}</strong>
              <p>{article.publishedAt.toString()}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
