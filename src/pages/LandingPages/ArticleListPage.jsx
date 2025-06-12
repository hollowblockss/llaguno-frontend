import React, { useEffect, useState } from 'react';
import ArticleList from '../../components/ArticleList';
import { getArticles } from '../../services/ArticleService';
import '../../styles/ArticleList.css';

function ArticleListPage() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await getArticles();
        setArticles(response.data);
      } catch (err) {
        setError('Failed to load articles.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) return <div>Loading articles...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="article-list-page">
      <h1 className="article-list-title">Articles</h1>
      <ArticleList articles={articles} />
    </div>
  );
}

export default ArticleListPage;
