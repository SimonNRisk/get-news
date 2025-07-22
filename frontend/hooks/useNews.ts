import { useState } from "react";
import axios from "axios";

type Article = {
  title: string;
  url: string;
  publishedAt: Date;
};

export function useNews() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchNews = async () => {
    setLoading(true);
    setError(null);
    try {
      const { data } = await axios.get("/api/news");
      setArticles(data.articles || []);
    } catch (error: any) {
      setError(
        error.response?.data?.error || error.message || "An error occured"
      );
    } finally {
      setLoading(false);
    }
  };
  return { articles, loading, error, fetchNews };
}
