import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const ExtraSection = styled.section`
  padding: 4rem 2rem;
  overflow: hidden;
`;

const ExtraGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ExtraCard = styled(motion.div)`
  background: ${props => `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${props.bgImage})`};
  background-size: cover;
  background-position: center;
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2.5rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    background: ${props => `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${props.bgImage})`};
    background-size: cover;
    background-position: center;
  }

  h3 {
    color: #00ff87;
    margin-bottom: 1.2rem;
    font-size: 1.8rem;
    font-weight: 600;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    position: relative;
    z-index: 1;
  }

  p {
    color: #ffffff;
    line-height: 1.8;
    font-size: 1.1rem;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    position: relative;
    z-index: 1;
    opacity: 0.9;
    font-weight: 400;
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.8rem;
  margin-bottom: 4rem;
  color: #00ff87;
  font-weight: 800;
  letter-spacing: 0.5px;
  text-shadow: 0 2px 4px rgba(0, 255, 135, 0.2);

  @media (max-width: 768px) {
    font-size: 2.4rem;
    margin-bottom: 3rem;
  }
`;

function Ekstrakurikuler() {
  return (
    <ExtraSection>
      <SectionTitle>Ekstrakurikuler</SectionTitle>
      <ExtraGrid>
        <ExtraCard 
          initial={{ opacity: 1 }} 
          animate={{ opacity: 1 }}
          bgImage="https://raw.githubusercontent.com/hfzt07/dbweb/main/osis.jpg"
        >
          <h3>OSIS</h3>
          <p>Organisasi siswa intra sekolah yang mengembangkan jiwa kepemimpinan dan manajemen organisasi.</p>
        </ExtraCard>
        <ExtraCard 
          initial={{ opacity: 1 }} 
          animate={{ opacity: 1 }}
          bgImage="https://raw.githubusercontent.com/hfzt07/dbweb/main/paskibra.jpg"
        >
          <h3>Paskibra</h3>
          <p>Pasukan pengibar bendera yang melatih kedisiplinan dan jiwa nasionalisme.</p>
        </ExtraCard>
        <ExtraCard 
          initial={{ opacity: 1 }} 
          animate={{ opacity: 1 }}
          bgImage="https://raw.githubusercontent.com/hfzt07/dbweb/main/pramuka.jpg"
        >
          <h3>Pramuka</h3>
          <p>Kegiatan kepanduan yang mengembangkan karakter dan keterampilan hidup.</p>
        </ExtraCard>
        <ExtraCard 
          initial={{ opacity: 1 }} 
          animate={{ opacity: 1 }}
          bgImage="https://raw.githubusercontent.com/hfzt07/dbweb/main/pmr.jpg"
        >
          <h3>PMR</h3>
          <p>Palang Merah Remaja untuk pendidikan kesehatan dan pertolongan pertama.</p>
        </ExtraCard>
        <ExtraCard 
          initial={{ opacity: 1 }} 
          animate={{ opacity: 1 }}
          bgImage="https://raw.githubusercontent.com/hfzt07/dbweb/main/futsal.jpg"
        >
          <h3>Futsal</h3>
          <p>Olahraga tim yang mengembangkan keterampilan sepak bola dan kerja sama tim.</p>
        </ExtraCard>
        <ExtraCard 
          initial={{ opacity: 1 }} 
          animate={{ opacity: 1 }}
          bgImage="https://raw.githubusercontent.com/hfzt07/dbweb/main/basket.jpg"
        >
          <h3>Basket</h3>
          <p>Olahraga tim yang melatih koordinasi dan strategi permainan.</p>
        </ExtraCard>
        <ExtraCard 
          initial={{ opacity: 1 }} 
          animate={{ opacity: 1 }}
          bgImage="https://raw.githubusercontent.com/hfzt07/dbweb/main/volly.jpg"
        >
          <h3>Voli</h3>
          <p>Olahraga tim yang mengembangkan kerjasama dan ketangkasan.</p>
        </ExtraCard>
        <ExtraCard 
          initial={{ opacity: 1 }} 
          animate={{ opacity: 1 }}
          bgImage="https://raw.githubusercontent.com/hfzt07/dbweb/main/silat.jpg"
        >
          <h3>Pencak Silat</h3>
          <p>Seni bela diri tradisional yang mengajarkan disiplin dan ketangkasan.</p>
        </ExtraCard>
        <ExtraCard 
          initial={{ opacity: 1 }} 
          animate={{ opacity: 1 }}
          bgImage="https://raw.githubusercontent.com/hfzt07/dbweb/main/karate.jpg"
        >
          <h3>Karate</h3>
          <p>Seni bela diri yang mengembangkan kekuatan fisik dan mental.</p>
        </ExtraCard>
        <ExtraCard 
          initial={{ opacity: 1 }} 
          animate={{ opacity: 1 }}
          bgImage="https://raw.githubusercontent.com/hfzt07/dbweb/main/paduan.jpg"
        >
          <h3>Paduan Suara</h3>
          <p>Kegiatan musik vokal yang mengembangkan bakat dan harmonisasi.</p>
        </ExtraCard>
        <ExtraCard 
          initial={{ opacity: 1 }} 
          animate={{ opacity: 1 }}
          bgImage="https://raw.githubusercontent.com/hfzt07/dbweb/main/tari.jpg"
        >
          <h3>Seni Tari</h3>
          <p>Pengembangan bakat dalam bidang tari tradisional dan modern.</p>
        </ExtraCard>
        <ExtraCard 
          initial={{ opacity: 1 }} 
          animate={{ opacity: 1 }}
          bgImage="https://raw.githubusercontent.com/hfzt07/dbweb/main/english.jpg"
        >
          <h3>English Club</h3>
          <p>Klub bahasa Inggris untuk meningkatkan kemampuan berbahasa.</p>
        </ExtraCard>
      </ExtraGrid>
    </ExtraSection>
  );
}

export default Ekstrakurikuler; 