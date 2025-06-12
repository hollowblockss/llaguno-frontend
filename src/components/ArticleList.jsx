import React from 'react';
import { Link } from 'react-router-dom';

function ArticleList({ articles }) {
  return (
    <div className="article-list-container">
      {articles.map((a) => (
        <Link key={a.name} to={`/articles/${a.name}`} className="article-item">
          <h3 className="article-title">{a.title}</h3>
          <p className="article-preview">{a.content[0].substring(0, 150)}...</p>
        </Link>
      ))}
    </div>
  );
}

export default ArticleList;
