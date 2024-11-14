import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const BeritaSection = styled.section`
  min-height: 100vh;
  padding: 120px 20px 40px;
  background: #1a1a2e;
  color: white;
`;

const BeritaContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const BeritaHeader = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const BeritaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
`;

const BeritaCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const BeritaImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const BeritaContent = styled.div`
  padding: 1.5rem;
`;

const BeritaTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #60efff;
`;

const BeritaDate = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.5rem;
`;

const BeritaExcerpt = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
`;

const BeritaButton = styled(motion.button)`
  padding: 0.5rem 1rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  border: none;
  border-radius: 5px;
  color: #1a1a2e;
  font-weight: bold;
  cursor: pointer;
  margin-top: 1rem;
  
  &:hover {
    box-shadow: 0 0 15px rgba(0, 255, 135, 0.3);
  }
`;

function Berita() {
  const beritaItems = [
    {
      id: 1,
      title: "Prestasi Gemilang di Olimpiade Sains",
      date: "15 Februari 2024",
      image: "/images/berita1.jpg",
      excerpt: "Siswa SMKN 1 Bulan meraih medali emas dalam Olimpiade Sains Nasional bidang Informatika."
    },
    {
      id: 2,
      title: "Workshop Teknologi AI",
      date: "10 Februari 2024",
      image: "/images/berita2.jpg",
      excerpt: "Mengadakan workshop teknologi AI untuk meningkatkan kompetensi siswa dalam era digital."
    },
    {
      id: 3,
      title: "Kerjasama dengan Industri",
      date: "5 Februari 2024",
      image: "/images/berita3.jpg",
      excerpt: "Menjalin kerjasama dengan perusahaan teknologi untuk program magang siswa."
    }
  ];

  return (
    <BeritaSection >
      <BeritaContainer>
        <BeritaHeader>Berita Terkini</BeritaHeader>
        <BeritaGrid id="berita">
          {beritaItems.map((item) => (
            <BeritaCard
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <BeritaImage src={item.image} alt={item.title} />
              <BeritaContent>
                <BeritaTitle>{item.title}</BeritaTitle>
                <BeritaDate>{item.date}</BeritaDate>
                <BeritaExcerpt>{item.excerpt}</BeritaExcerpt>
                <BeritaButton
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Baca Selengkapnya
                </BeritaButton>
              </BeritaContent>
            </BeritaCard>
          ))}
        </BeritaGrid>
      </BeritaContainer>
    </BeritaSection>
  );
}

export default Berita; 