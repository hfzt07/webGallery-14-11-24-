import React, { useState } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import AdminPageHeader from '../../components/admin/AdminPageHeader';

const Container = styled.div`
  padding: 2rem;
  color: white;
`;

const ProgramGrid = styled.div`
  display: grid;
  gap: 1rem;
`;

const ProgramCard = styled(motion.div)`
  display: grid;
  grid-template-columns: 150px 1fr auto;
  gap: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  align-items: center;
`;

const ProgramImage = styled.img`
  width: 150px;
  height: 100px;
  object-fit: cover;
  border-radius: 4px;
`;

const ProgramContent = styled.div`
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

  .category {
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
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

function ProgramNews() {
  const [programs] = useState([
    {
      id: 1,
      title: "Prestasi RPL di Lomba Coding",
      author: "Moderator RPL",
      status: "pending",
      category: "Rekayasa Perangkat Lunak",
      image: "/images/program/rpl.jpg",
      description: "Tim RPL berhasil meraih juara dalam kompetisi coding tingkat nasional."
    },
    {
      id: 2,
      title: "Workshop Jaringan Cisco",
      author: "Moderator TKJ",
      status: "approved",
      category: "Teknik Komputer dan Jaringan",
      image: "/images/program/tkj.jpg",
      description: "Siswa TKJ mengikuti workshop sertifikasi Cisco."
    },
    {
      id: 3,
      title: "Proyek Multimedia Interaktif",
      author: "Moderator MM",
      status: "pending",
      category: "Multimedia",
      image: "/images/program/mm.jpg",
      description: "Karya siswa MM dipamerkan dalam expo teknologi."
    }
  ]);

  return (
    <Container>
      <AdminPageHeader>Berita Program Keahlian</AdminPageHeader>
      
      <ProgramGrid>
        {programs.map((program) => (
          <ProgramCard
            key={program.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <ProgramImage src={program.image} alt={program.title} />
            <ProgramContent status={program.status}>
              <h3>{program.title}</h3>
              <div className="status">{program.status.toUpperCase()}</div>
              <div className="author">By: {program.author}</div>
              <div className="category">{program.category}</div>
              <p>{program.description}</p>
            </ProgramContent>
            <ActionButtons>
              <Button
                view
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View
              </Button>
              {program.status === 'pending' && (
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
          </ProgramCard>
        ))}
      </ProgramGrid>
    </Container>
  );
}

export default ProgramNews; 