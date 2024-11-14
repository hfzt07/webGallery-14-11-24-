import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { getImagePath } from '../utils/imagePath';

const ProfilSection = styled.section`
  padding: 4rem 2rem;
  background: #1a1a2e;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: -300px;
    left: 0;
    right: 0;
    height: 300px;
    background: linear-gradient(
      to bottom,
      rgba(26, 26, 46, 0),
      rgba(26, 26, 46, 0.8) 40%,
      rgba(26, 26, 46, 1) 70%
    );
    pointer-events: none;
    z-index: 2;
  }
`;

const ProfilContainer = styled.div`
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

const JurusanSection = styled.div`
  padding: 4rem 0;
  margin-top: 0;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  width: 100vw;
  position: relative;
  background: linear-gradient(
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0.8)
  ), url('https://raw.githubusercontent.com/hfzt07/dbweb/main/jurusan.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  padding: 6rem 0;

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    height: 150px;
    pointer-events: none;
  }

  &::before {
    top: 0;
    background: linear-gradient(
      to bottom,
      #1a1a2e,
      rgba(26, 26, 46, 0)
    );
  }

  &::after {
    bottom: 0;
    background: linear-gradient(
      to top,
      #1a1a2e,
      rgba(26, 26, 46, 0)
    );
  }
`;

const JurusanContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const JurusanGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 1rem;
`;

const JurusanCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    color: #00ff87;
    margin-bottom: 1rem;
    font-size: 1.5rem;
    position: relative;
    z-index: 2;
  }

  p {
    color: rgba(255, 255, 255, 0.9);
    line-height: 1.6;
    position: relative;
    z-index: 2;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(0, 255, 135, 0.2);
  }
`;

const BeritaSection = styled.div`
  padding: 4rem 0;
`;

const BeritaContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const BeritaGrid = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 1.5rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const BeritaUtama = styled(motion.div)`
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 8px 32px rgba(0, 255, 135, 0.1);
  }

  .image-container {
    width: 100%;
    height: 300px;
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
      margin-bottom: 0.8rem;
      font-size: 1.3rem;
    }

    .date {
      color: rgba(255, 255, 255, 0.6);
      font-size: 0.9rem;
      margin-bottom: 1rem;
    }

    p {
      color: rgba(255, 255, 255, 0.8);
      line-height: 1.6;
      font-size: 1rem;
      margin-bottom: 1.5rem;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }

  &:hover {
    .image-container img {
      transform: scale(1.1);
    }
  }
`;

const BeritaSampingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  height: 100%;
  justify-content: space-between;
`;

const BeritaSamping = styled(motion.div)`
  display: grid;
  grid-template-columns: 90px 1fr;
  gap: 0.8rem;
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.05);
  height: 90px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 8px 32px rgba(0, 255, 135, 0.1);
  }

  .image-container {
    width: 90px;
    height: 90px;
    overflow: hidden;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }
  }

  .content {
    padding: 0.8rem 1rem 0.8rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    h3 {
      color: #00ff87;
      margin-bottom: 0.4rem;
      font-size: 0.9rem;
      line-height: 1.4;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .date {
      color: rgba(255, 255, 255, 0.6);
      font-size: 0.75rem;
    }
  }

  &:hover {
    .image-container img {
      transform: scale(1.1);
    }
  }
`;

const BeritaButton = styled(motion.button)`
  background: linear-gradient(to right, #00ff87, #60efff);
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  color: #1a1a2e;
  font-weight: bold;
  cursor: pointer;
  font-size: 0.85rem;
`;

const ProfileGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
  margin: 0 auto 5rem;
  max-width: 1100px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const LeftCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  height: 100%;
  display: flex;
  gap: 2rem;
  align-items: center;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 8px 32px rgba(0, 255, 135, 0.1);
  }

  .content {
    flex: 1;
  }

  .image-container {
    width: 200px;
    height: 200px;
    border-radius: 15px;
    overflow: hidden;
    border: 2px solid rgba(0, 255, 135, 0.3);
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    &:hover img {
      transform: scale(1.1);
    }
  }

  h3 {
    color: #00ff87;
    margin-bottom: 1.8rem;
    font-size: 2rem;
    font-weight: 600;
  }

  p {
    color: rgba(255, 255, 255, 0.9);
    line-height: 1.8;
    font-size: 1.15rem;
    letter-spacing: 0.3px;
    text-align: justify;
    text-justify: inter-word;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    
    .image-container {
      width: 150px;
      height: 150px;
    }
  }
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const RightCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2.8rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  gap: 2.5rem;
  align-items: center;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 8px 32px rgba(0, 255, 135, 0.1);
  }

  .content {
    flex: 1;

    h3 {
      color: #00ff87;
      margin-bottom: 1.5rem;
      font-size: 1.8rem;
      font-weight: 600;
    }

    p {
      color: rgba(255, 255, 255, 0.9);
      line-height: 1.8;
      font-size: 1.1rem;
      letter-spacing: 0.3px;
      text-align: justify;
      text-justify: inter-word;
    }
  }

  .image-container {
    width: 180px;
    height: 180px;
    border-radius: 15px;
    overflow: hidden;
    position: relative;
    border: none;
    
    &::before {
      content: '';
      position: absolute;
      inset: 0;
      padding: 3px;
      border-radius: 15px;
      background: linear-gradient(
        45deg,
        #00ff87,
        #60efff,
        #00ff87
      );
      -webkit-mask: 
        linear-gradient(#fff 0 0) content-box, 
        linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
      animation: borderRotate 4s linear infinite;
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
        to bottom,
        transparent 0%,
        rgba(0, 255, 135, 0.1) 100%
      );
      z-index: 1;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
      filter: contrast(1.1) brightness(1.1);
    }

    &:hover img {
      transform: scale(1.15);
    }
  }

  @keyframes borderRotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 1024px) {
    padding: 2.5rem;
    gap: 2rem;
    
    .image-container {
      width: 150px;
      height: 150px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    
    .content p {
      text-align: justify;
    }
    
    .image-container {
      width: 140px;
      height: 140px;
    }
  }
`;

function Profil() {
  const jurusan = [
    {
      nama: "Rekayasa Perangkat Lunak",
      deskripsi: "Program keahlian yang mempelajari pengembangan aplikasi dan software"
    },
    {
      nama: "Teknik Komputer dan Jaringan",
      deskripsi: "Program keahlian yang fokus pada infrastruktur jaringan dan hardware"
    },
    {
      nama: "Multimedia",
      deskripsi: "Program keahlian yang mempelajari desain grafis dan produksi konten digital"
    },
    {
      nama: "Bisnis Digital",
      deskripsi: "Program keahlian yang mempelajari pemasaran digital dan e-commerce"
    }
  ];

  // Tambahkan data berita
  const beritaTerbaru = [
    {
      id: 1,
      judul: "Prestasi Gemilang di Olimpiade Sains",
      tanggal: "15 Februari 2024",
      gambar: "/images/berita/berita1.jpg",
      ringkasan: "Siswa SMKN 1 Bulan meraih medali emas dalam Olimpiade Sains Nasional bidang Informatika."
    },
    {
      id: 2,
      judul: "Workshop Teknologi AI",
      tanggal: "10 Februari 2024",
      gambar: "/images/berita/berita2.jpg",
      ringkasan: "Mengadakan workshop teknologi AI untuk meningkatkan kompetensi siswa dalam era digital."
    },
    {
      id: 3,
      judul: "Kerjasama dengan Industri",
      tanggal: "5 Februari 2024",
      gambar: "/images/berita/berita3.jpg",
      ringkasan: "Menjalin kerjasama dengan perusahaan teknologi untuk program magang siswa."
    },
    {
      id: 4,
      judul: "Penghargaan Sekolah Adiwiyata",
      tanggal: "1 Februari 2024",
      gambar: "/images/berita/berita4.jpg",
      ringkasan: "SMKN 1 Bulan menerima penghargaan sebagai sekolah berwawasan lingkungan."
    },
    {
      id: 5,
      judul: "Juara Umum Lomba Robotik",
      tanggal: "28 Januari 2024",
      gambar: "/images/berita/berita5.jpg",
      ringkasan: "Tim robotik sekolah berhasil meraih juara umum dalam kompetisi robotik tingkat nasional."
    },
    {
      id: 6,
      judul: "Pelatihan Digital Marketing",
      tanggal: "25 Januari 2024",
      gambar: "/images/berita/berita6.jpg",
      ringkasan: "Siswa jurusan Bisnis Digital mengikuti pelatihan intensif bersama praktisi industri."
    }
  ];

  return (
    <ProfilSection id="profil">
      <ProfilContainer>
        <SectionTitle>Profil Sekolah</SectionTitle>
        
        <ProfileGrid>
          {/* Kartu Kiri */}
          <LeftCard
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="content">
              <h3>SMKN 1 Bulan</h3>
              <p>
                Adalah lembaga pendidikan kejuruan unggulan yang berdiri 
                sejak tahun 2005. Dengan fokus pada bidang teknologi informasi dan 
                komunikasi, kami telah menghasilkan ribuan lulusan berkualitas yang 
                kini berkarya di berbagai perusahaan teknologi terkemuka.
              </p>
            </div>
          </LeftCard>

          {/* Kolom Kanan dengan 2 Kartu */}
          <RightColumn>
            <RightCard
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="image-container">
                <img 
                  src="https://raw.githubusercontent.com/hfzt07/dbweb/main/kepsek.jpg" 
                  alt="Kepala Sekolah" 
                />
              </div>
              <div className="content">
                <h3>Sambutan Kepala Sekolah</h3>
                <p>
                  "Pengembangan karakter serta etika merupakan komitmen kami 
                  untuk menghasilkan lulusan yang berkualitas dan berakhlak mulia."
                </p>
              </div>
            </RightCard>

            <RightCard
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="content">
                <h3>Visi & Misi</h3>
                <p>
                  Menjadi lembaga pendidikan teknologi terdepan yang menghasilkan lulusan 
                  berkompeten, inovatif, dan berakhlak mulia untuk membangun masa depan 
                  Indonesia yang lebih baik.
                </p>
              </div>
            </RightCard>
          </RightColumn>
        </ProfileGrid>

        {/* Berita Section */}
        <BeritaSection id="berita">
          <BeritaContainer>
            <SectionTitle>Berita Terkini</SectionTitle>
            <BeritaGrid>
              {/* Berita Utama */}
              <BeritaUtama
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -10 }}
              >
                <div className="image-container">
                  <img src={beritaTerbaru[0].gambar} alt={beritaTerbaru[0].judul} />
                </div>
                <div className="content">
                  <h3>{beritaTerbaru[0].judul}</h3>
                  <div className="date">{beritaTerbaru[0].tanggal}</div>
                  <p>{beritaTerbaru[0].ringkasan}</p>
                  <BeritaButton
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Baca Selengkapnya
                  </BeritaButton>
                </div>
              </BeritaUtama>

              {/* Berita Samping */}
              <BeritaSampingContainer>
                {beritaTerbaru.slice(1, 6).map((berita, index) => (
                  <BeritaSamping
                    key={berita.id}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="image-container">
                      <img src={berita.gambar} alt={berita.judul} />
                    </div>
                    <div className="content">
                      <h3>{berita.judul}</h3>
                      <div className="date">{berita.tanggal}</div>
                    </div>
                  </BeritaSamping>
                ))}
              </BeritaSampingContainer>
            </BeritaGrid>
          </BeritaContainer>
        </BeritaSection>

        {/* Program Keahlian */}
        <JurusanSection id="jurusan">
          <JurusanContainer>
            <SectionTitle>Program Keahlian</SectionTitle>
            <JurusanGrid>
              {jurusan.map((item, index) => (
                <JurusanCard
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 10px 30px rgba(0, 255, 135, 0.2)'
                  }}
                >
                  <h3>{item.nama}</h3>
                  <p>{item.deskripsi}</p>
                </JurusanCard>
              ))}
            </JurusanGrid>
          </JurusanContainer>
        </JurusanSection>
      </ProfilContainer>
    </ProfilSection>
  );
}

export default Profil; 