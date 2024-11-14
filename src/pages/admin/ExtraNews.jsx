import React, { useState } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import AdminPageHeader from '../../components/admin/AdminPageHeader';

const Container = styled.div`
  padding: 2rem;
  color: white;
`;

const Title = styled.h2`
  color: #00ff87;
  margin-bottom: 2rem;
`;

const ExtraGrid = styled.div`
  display: grid;
  gap: 1rem;
`;

const ExtraCard = styled(motion.div)`
  display: grid;
  grid-template-columns: 150px 1fr auto;
  gap: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  align-items: center;
`;

const ExtraImage = styled.img`
  width: 150px;
  height: 100px;
  object-fit: cover;
  border-radius: 4px;
`;

const ExtraContent = styled.div`
  h3 {
    color: #00ff87;
    margin-bottom: 0.5rem;
  }

  .status {
    display: inline-block;
    padding: 0.3rem 0.8rem;
    border-radius: 15px;
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
    background: ${props => 
      props.status === 'pending' ? '#ffd700' :
      props.status === 'approved' ? '#00ff87' : '#ff4444'
    };
    color: #1a1a2e;
  }

  .author {
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
  flex-direction: column;
  gap: 0.5rem;
`;

const Button = styled(motion.button)`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background: ${props => 
    props.approve ? '#00ff87' : 
    props.reject ? '#ff4444' : 
    props.view ? '#60efff' : 'rgba(255, 255, 255, 0.1)'
  };
  color: white;
  width: 100px;
`;

function ExtraNews() {
  const [extraNews] = useState([
    {
      id: 1,
      title: "Lomba Futsal Antar Sekolah",
      author: "Moderator Olahraga",
      status: "pending",
      image: "/images/extra/futsal.jpg",
      description: "Tim futsal sekolah akan mengikuti turnamen antar SMK se-Kota."
    },
    {
      id: 2,
      title: "Festival Seni Tahunan",
      author: "Moderator Seni",
      status: "approved",
      image: "/images/extra/seni.jpg",
      description: "Penampilan spektakuler dari klub seni dalam festival tahunan."
    },
    {
      id: 3,
      title: "Kompetisi Robotik",
      author: "Moderator Robotik",
      status: "rejected",
      image: "/images/extra/robotik.jpg",
      description: "Persiapan tim robotik menghadapi kompetisi nasional."
    }
  ]);

  return (
    <Container>
      <AdminPageHeader>Berita Ekstrakurikuler</AdminPageHeader>
      
      <ExtraGrid>
        {extraNews.map((item, index) => (
          <ExtraCard
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <ExtraImage src={item.image} alt={item.title} />
            <ExtraContent status={item.status}>
              <h3>{item.title}</h3>
              <div className="status">{item.status.toUpperCase()}</div>
              <div className="author">By: {item.author}</div>
              <p>{item.description}</p>
            </ExtraContent>
            <ActionButtons>
              <Button
                view
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View
              </Button>
              {item.status === 'pending' && (
                <>
                  <Button
                    approve
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Approve
                  </Button>
                  <Button
                    reject
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Reject
                  </Button>
                </>
              )}
            </ActionButtons>
          </ExtraCard>
        ))}
      </ExtraGrid>
    </Container>
  );
}

export default ExtraNews; 