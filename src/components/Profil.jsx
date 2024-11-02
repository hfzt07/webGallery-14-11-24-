import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { getImagePath } from '../utils/imagePath';

const ProfilSection = styled.section`
  padding: 8rem 2rem;
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

const Title = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #1a1a2e;
`;

const VisiMisiContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const VisiCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  height: 100%;

  h3 {
    color: #00ff87;
    margin-bottom: 1.5rem;
    font-size: 1.8rem;
    display: flex;
    align-items: center;
    gap: 1rem;

    &::before {
      content: '🎯';
      font-size: 2rem;
    }
  }

  p {
    color: rgba(255, 255, 255, 0.9);
    line-height: 1.8;
    font-size: 1.1rem;
    text-align: justify;
  }
`;

const MisiCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);

  h3 {
    color: #00ff87;
    margin-bottom: 1.5rem;
    font-size: 1.8rem;
    display: flex;
    align-items: center;
    gap: 1rem;

    &::before {
      content: '🚀';
      font-size: 2rem;
    }
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 1rem;
    padding-left: 2rem;
    position: relative;
    line-height: 1.8;
    font-size: 1.1rem;

    &::before {
      content: '✨';
      position: absolute;
      left: 0;
      color: #00ff87;
    }
  }
`;

const JurusanSection = styled.div`
  margin-top: 4rem;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  width: 100vw;
  position: relative;
  background: linear-gradient(
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0.8)
  ), url('/images/jurusan.png');
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

const SubTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

// Tambahkan styled components untuk bagian berita
const BeritaSection = styled.div`
  margin-top: 4rem;
  padding: 4rem 0;
  background: rgba(255, 255, 255, 0.02);
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
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);

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
    padding: 1.2rem;
    
    h3 {
      color: #00ff87;
      margin-bottom: 0.5rem;
      font-size: 1.3rem;
    }

    .date {
      color: rgba(255, 255, 255, 0.6);
      font-size: 0.9rem;
      margin-bottom: 0.6rem;
    }

    p {
      color: rgba(255, 255, 255, 0.8);
      line-height: 1.5;
      font-size: 0.95rem;
      margin-bottom: 1rem;
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

  @media (max-width: 768px) {
    .image-container {
      height: 200px;
    }

    .content {
      h3 {
        font-size: 1.1rem;
      }
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
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  height: 90px;

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
    padding: 0.6rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    h3 {
      color: #00ff87;
      margin-bottom: 0.3rem;
      font-size: 0.85rem;
      line-height: 1.3;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .date {
      color: rgba(255, 255, 255, 0.6);
      font-size: 0.7rem;
    }
  }

  &:hover {
    .image-container img {
      transform: scale(1.1);
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 70px 1fr;
    height: 70px;

    .image-container {
      width: 70px;
      height: 70px;
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
        <Title>Profil SMKN 1 Bulan</Title>
        
        {/* Visi Misi */}
        <VisiMisiContainer>
          <VisiCard
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
          >
            <h3>Visi</h3>
            <p>
              Menjadi lembaga pendidikan teknologi terdepan yang menghasilkan lulusan berkompeten,
              inovatif, dan berakhlak mulia, siap menjadi pemimpin di era digital.
            </p>
          </VisiCard>

          <MisiCard
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
          >
            <h3>Misi</h3>
            <ul>
              <motion.li
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                Menyelenggarakan pendidikan berbasis teknologi dengan standar industri
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                Mengembangkan kreativitas dan inovasi dalam pembelajaran
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                Membentuk karakter kepemimpinan dan jiwa wirausaha
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                Membangun kerjasama dengan industri dan perguruan tinggi
              </motion.li>
            </ul>
          </MisiCard>
        </VisiMisiContainer>

        {/* Berita Section */}
        <BeritaSection id="berita">
          <BeritaContainer>
            <SubTitle>Berita Terkini</SubTitle>
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
            <SubTitle>Program Keahlian</SubTitle>
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