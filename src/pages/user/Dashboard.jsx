import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaHeart, FaComment, FaShare } from 'react-icons/fa';

const DashboardContainer = styled.div`
  color: white;
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  color: #00ff87;
  margin-bottom: 2rem;
  font-size: 2rem;
`;

const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const PostCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
`;

const PostHeader = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .user-info {
    flex: 1;
    
    .username {
      font-weight: 600;
      color: #00ff87;
    }
    
    .timestamp {
      font-size: 0.8rem;
      color: rgba(255, 255, 255, 0.6);
    }
  }
`;

const PostImage = styled.div`
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const PostActions = styled.div`
  padding: 1rem;
  display: flex;
  gap: 1.5rem;

  button {
    background: none;
    border: none;
    color: rgba(255, 255, 255, 0.8);
    font-size: 1.2rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: color 0.3s ease;

    span {
      font-size: 0.9rem;
    }

    &:hover {
      color: #00ff87;
    }
  }
`;

const PostCaption = styled.div`
  padding: 0 1rem 1rem;
  color: rgba(255, 255, 255, 0.9);
  
  .username {
    color: #00ff87;
    font-weight: 600;
    margin-right: 0.5rem;
  }
`;

function UserDashboard() {
  const posts = [
    {
      id: 1,
      username: "john_doe",
      avatar: "https://raw.githubusercontent.com/hfzt07/dbweb/main/profile.jpg",
      image: "https://raw.githubusercontent.com/hfzt07/dbweb/main/kegiatan1.jpg",
      caption: "Kegiatan praktek di lab komputer 🖥️",
      likes: 124,
      comments: 8,
      timestamp: "2 jam yang lalu"
    },
    {
      id: 2,
      username: "jane_smith",
      avatar: "https://raw.githubusercontent.com/hfzt07/dbweb/main/profile2.jpg",
      image: "https://raw.githubusercontent.com/hfzt07/dbweb/main/kegiatan2.jpg",
      caption: "Workshop UI/UX Design bersama praktisi industri 🎨",
      likes: 89,
      comments: 5,
      timestamp: "5 jam yang lalu"
    },
    {
      id: 3,
      username: "mike_wilson",
      avatar: "https://raw.githubusercontent.com/hfzt07/dbweb/main/profile3.jpg",
      image: "https://raw.githubusercontent.com/hfzt07/dbweb/main/kegiatan3.jpg",
      caption: "Presentasi project akhir semester 📊",
      likes: 156,
      comments: 12,
      timestamp: "8 jam yang lalu"
    }
  ];

  return (
    <DashboardContainer>
      <Title>Beranda</Title>
      <PostsContainer>
        {posts.map((post) => (
          <PostCard
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <PostHeader>
              <div className="avatar">
                <img src={post.avatar} alt={post.username} />
              </div>
              <div className="user-info">
                <div className="username">{post.username}</div>
                <div className="timestamp">{post.timestamp}</div>
              </div>
            </PostHeader>
            <PostImage>
              <img src={post.image} alt="Post" />
            </PostImage>
            <PostActions>
              <button>
                <FaHeart /> <span>{post.likes}</span>
              </button>
              <button>
                <FaComment /> <span>{post.comments}</span>
              </button>
              <button>
                <FaShare />
              </button>
            </PostActions>
            <PostCaption>
              <span className="username">{post.username}</span>
              {post.caption}
            </PostCaption>
          </PostCard>
        ))}
      </PostsContainer>
    </DashboardContainer>
  );
}

export default UserDashboard; 