import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { getImagePath } from '../utils/imagePath';

const FasilitasSection = styled.section`
  padding: 4rem 2rem;
  background: #1a1a2e;
`;

const FasilitasContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
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

const FasilitasGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const FasilitasCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);

  .image-container {
    width: 100%;
    height: 200px;
    overflow: hidden;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }
  }

  .content {
    padding: 1.5rem;
    
    h3 {
      color: #00ff87;
      margin-bottom: 1rem;
      font-size: 1.3rem;
    }

    p {
      color: rgba(255, 255, 255, 0.8);
      line-height: 1.6;
      font-size: 0.9rem;
    }
  }

  &:hover {
    .image-container img {
      transform: scale(1.1);
    }
  }
`;

function Fasilitas() {
  const fasilitas = [
    {
      nama: "Perpustakaan Digital",
      deskripsi: "Perpustakaan dengan koleksi buku digital dan area belajar yang nyaman",
      image: "https://raw.githubusercontent.com/hfzt07/dbweb/main/perpustakaan.jpg"
    },
    {
      nama: "Laboratorium Komputer",
      deskripsi: "Lab komputer modern dengan perangkat terbaru untuk praktik pemrograman dan desain",
      image: "https://raw.githubusercontent.com/hfzt07/dbweb/main/lab-komputer.jpg"
    },
    {
      nama: "Studio Multimedia",
      deskripsi: "Studio produksi dengan peralatan profesional untuk praktik multimedia",
      image: "https://raw.githubusercontent.com/hfzt07/dbweb/main/studio.jpg"
    },
    {
      nama: "Ruang Praktik Jaringan",
      deskripsi: "Ruang praktik dengan peralatan jaringan lengkap untuk pembelajaran TKJ",
      image: "https://raw.githubusercontent.com/hfzt07/dbweb/main/lab-jaringan.jpg"
    },
    {
      nama: "Aula Serbaguna",
      deskripsi: "Ruang serba guna untuk berbagai kegiatan sekolah dan event",
      image: "https://raw.githubusercontent.com/hfzt07/dbweb/main/aula.jpg"
    },
    {
      nama: "Lapangan Olahraga",
      deskripsi: "Fasilitas olahraga lengkap untuk kegiatan fisik dan ekstrakurikuler",
      image: "https://raw.githubusercontent.com/hfzt07/dbweb/main/lapangan.jpg"
    },
    {
      nama: "Kantin Sehat",
      deskripsi: "Area makan yang bersih dan nyaman dengan menu sehat dan bergizi",
      image: "https://raw.githubusercontent.com/hfzt07/dbweb/main/kantin.jpg"
    },
    {
      nama: "Taman Sosial",
      deskripsi: "Ruang terbuka hijau untuk interaksi sosial dan kegiatan outdoor",
      image: "https://raw.githubusercontent.com/hfzt07/dbweb/main/taman.jpg"
    },
    {
      nama: "Titik Internet",
      deskripsi: "Akses internet berkecepatan tinggi yang tersebar di seluruh area sekolah",
      image: "https://raw.githubusercontent.com/hfzt07/dbweb/main/wifi.jpg"
    }
  ];

  return (
    <FasilitasSection id="fasilitas">
      <FasilitasContainer>
        <SectionTitle>Fasilitas Sekolah</SectionTitle>
        <FasilitasGrid>
          {fasilitas.map((item, index) => (
            <FasilitasCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="image-container">
                <img src={item.image} alt={item.nama} />
              </div>
              <div className="content">
                <h3>{item.nama}</h3>
                <p>{item.deskripsi}</p>
              </div>
            </FasilitasCard>
          ))}
        </FasilitasGrid>
      </FasilitasContainer>
    </FasilitasSection>
  );
}

export default Fasilitas; 