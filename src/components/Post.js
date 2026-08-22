import React, { useState } from 'react';
import '../styles/Post.css';

function Post({ post }) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes);

  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setLiked(!liked);
  };

  return (
    <div className="post">
      <div className="post-header">
        <div className="post-user">
          <span className="avatar">{post.avatar}</span>
          <span className="username">{post.author}</span>
        </div>
        <span className="more-options">⋯</span>
      </div>
      <div className="post-image">
        {post.image}
      </div>
      <div className="post-actions">
        <button 
          className={`action-btn ${liked ? 'liked' : ''}`}
          onClick={handleLike}
        >
          {liked ? '❤️' : '🤍'}
        </button>
        <button className="action-btn">💬</button>
        <button className="action-btn">📤</button>
        <button className="action-btn save">🔖</button>
      </div>
      <div className="post-info">
        <p className="likes"><strong>{likeCount}</strong> likes</p>
        <p className="caption">
          <strong>{post.author}</strong> {post.caption}
        </p>
        <p className="comments-link">View all {post.comments} comments</p>
      </div>
    </div>
  );
}

export default Post;
