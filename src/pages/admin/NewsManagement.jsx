import React, { useState } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import AdminPageHeader from '../../components/admin/AdminPageHeader';

const Container = styled.div`
  padding: 2rem;
  color: white;
`;

const NewsGrid = styled.div`
  display: grid;
  gap: 1rem;
`;

const NewsCard = styled(motion.div)`
  display: grid;
  grid-template-columns: 100px 1fr auto;
  gap: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  align-items: center;
`;

const NewsImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 4px;
`;

const NewsContent = styled.div`
  h3 {
    color: #00ff87;
    margin-bottom: 0.5rem;
  }

  .date {
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.8);
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Button = styled(motion.button)`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background: ${props => props.delete ? '#ff4444' : props.edit ? '#ffbb33' : '#00ff87'};
  color: white;
`;

const AddNewsButton = styled(motion.button)`
  padding: 1rem 2rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  border: none;
  border-radius: 8px;
  color: #1a1a2e;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 2rem;
`;

function NewsManagement() {
  const [news, setNews] = useState([
    {
      id: 1,
      title: "Prestasi Gemilang di Olimpiade Sains",
      date: "15 Februari 2024",
      image: "/images/berita/berita1.jpg",
      excerpt: "Siswa SMKN 1 Bulan meraih medali emas..."
    },
    // ... tambahkan berita lainnya
  ]);

  return (
    <Container>
      <AdminPageHeader>Berita Sekolah</AdminPageHeader>
      <AddNewsButton
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Add New Article
      </AddNewsButton>
      
      <NewsGrid>
        {news.map(item => (
          <NewsCard
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <NewsImage src={item.image} alt={item.title} />
            <NewsContent>
              <h3>{item.title}</h3>
              <div className="date">{item.date}</div>
              <p>{item.excerpt}</p>
            </NewsContent>
            <ActionButtons>
              <Button
                edit
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Edit
              </Button>
              <Button
                delete
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Delete
              </Button>
            </ActionButtons>
          </NewsCard>
        ))}
      </NewsGrid>
    </Container>
  );
}

export default NewsManagement; 