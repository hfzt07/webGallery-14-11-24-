import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const ProgramSection = styled.section`
  padding: 6rem 2rem;
  background: #0f0f1a;
  overflow: hidden;
`;

const ProgramGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
  position: static;
`;

const ProgramCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);

  h3 {
    color: #00ff87;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  p {
    color: #ffffff90;
    line-height: 1.6;
  }
`;

const SectionTitle = styled(motion.h2)`
  color: #fff;
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
`;

function Programs() {
  return (
    <ProgramSection>
      <SectionTitle
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
      >
        Ekstrakulikuler
      </SectionTitle>
      <ProgramGrid>
        <ProgramCard initial={{ opacity: 1 }} animate={{ opacity: 1 }}>
          <h3>Pramuka</h3>
          <p>Kegiatan kepanduan yang mengembangkan karakter dan keterampilan hidup.</p>
        </ProgramCard>
        <ProgramCard initial={{ opacity: 1 }} animate={{ opacity: 1 }}>
          <h3>PMR</h3>
          <p>Palang Merah Remaja untuk pendidikan kesehatan dan pertolongan pertama.</p>
        </ProgramCard>
        <ProgramCard initial={{ opacity: 1 }} animate={{ opacity: 1 }}>
          <h3>Futsal</h3>
          <p>Olahraga tim yang mengembangkan keterampilan sepak bola dan kerja sama tim.</p>
        </ProgramCard>
      </ProgramGrid>
    </ProgramSection>
  );
}

export default Programs;