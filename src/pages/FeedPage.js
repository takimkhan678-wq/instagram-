import React from 'react';
import '../styles/FeedPage.css';
import Navbar from '../components/Navbar';
import Post from '../components/Post';

function FeedPage({ userEmail, onLogout }) {
  const posts = [
    {
      id: 1,
      author: 'travel_diaries',
      avatar: '👤',
      image: '🏖️',
      likes: 1234,
      caption: 'Amazing sunset at the beach!',
      comments: 45
    },
    {
      id: 2,
      author: 'food_lover',
      avatar: '👨‍🍳',
      image: '🍕',
      likes: 856,
      caption: 'Best pizza in town!',
      comments: 32
    },
    {
      id: 3,
      author: 'nature_explorer',
      avatar: '🌿',
      image: '⛰️',
      likes: 2105,
      caption: 'Mountain hiking adventure',
      comments: 78
    }
  ];

  return (
    <div className="feed-page">
      <Navbar userEmail={userEmail} onLogout={onLogout} />
      <div className="feed-content">
        <div className="feed-main">
          {posts.map(post => (
            <Post key={post.id} post={post} />
          ))}
        </div>
        <div className="feed-sidebar">
          <div className="suggestions">
            <h3>Suggestions For You</h3>
            <div className="suggestion-item">
              <span>john_doe</span>
              <button>Follow</button>
            </div>
            <div className="suggestion-item">
              <span>jane_smith</span>
              <button>Follow</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedPage;
