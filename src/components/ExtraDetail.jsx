import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';

const ExtraDetailSection = styled.section`
  padding: 8rem 2rem;
  background: #1a1a2e;
  min-height: 100vh;
`;

const ExtraContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const ExtraHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const ExtraTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ExtraDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.1rem;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.8;
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const InfoCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);

  h3 {
    color: #00ff87;
    margin-bottom: 1rem;
    font-size: 1.3rem;
  }

  p {
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;
  }
`;

const NewsSection = styled.div`
  margin-top: 4rem;
`;

const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const NewsCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
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
      margin-bottom: 0.5rem;
      font-size: 1.2rem;
    }

    .date {
      color: rgba(255, 255, 255, 0.6);
      font-size: 0.9rem;
      margin-bottom: 1rem;
    }

    p {
      color: rgba(255, 255, 255, 0.8);
      line-height: 1.6;
      font-size: 0.95rem;
    }
  }

  &:hover {
    .image-container img {
      transform: scale(1.1);
    }
  }
`;

const TeamSection = styled.div`
  margin-top: 4rem;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
`;

const TeamCard = styled(motion.div)`
  text-align: center;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);

  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin-bottom: 1rem;
    object-fit: cover;
  }

  h3 {
    color: #00ff87;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
  }

  p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.9rem;
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #00ff87;
`;

function ExtraDetail() {
  const { id } = useParams();

  const extraId = id.toLowerCase().replace(/-/g, '-');

  const extraData = {
    'robotika': {
      name: 'Robotika',
      description: 'Ekstrakurikuler Robotika adalah wadah bagi siswa yang tertarik dengan teknologi robotika dan otomasi. Kami fokus pada pengembangan keterampilan dalam pemrograman, elektronika, dan mekanika untuk menciptakan robot yang inovatif.',
      info: [
        { title: 'Jadwal Latihan', content: 'Setiap Jumat, 15:00 - 17:00 WIB' },
        { title: 'Pembina', content: 'Bpk. Ahmad Robotika, S.T.' },
        { title: 'Prestasi', content: '3x Juara Nasional Kontes Robot' }
      ],
      news: [
        {
          title: 'Juara 1 Kontes Robot Nasional',
          date: '15 Februari 2024',
          image: '/images/berita/robotika1.jpg',
          content: 'Tim Robotika berhasil meraih juara 1 dalam Kontes Robot Nasional 2024.'
        }
      ]
    },
    'english-club': {
      name: 'English Club',
      description: 'English Club merupakan wadah bagi siswa untuk mengembangkan kemampuan berbahasa Inggris melalui berbagai aktivitas interaktif dan menyenangkan.',
      info: [
        { title: 'Jadwal Latihan', content: 'Setiap Selasa, 14:00 - 16:00 WIB' },
        { title: 'Pembina', content: 'Mrs. Sarah English, M.Pd.' },
        { title: 'Prestasi', content: 'Juara Speech Contest Tingkat Provinsi' }
      ],
      news: [
        {
          title: 'English Speech Competition',
          date: '10 Februari 2024',
          image: '/images/berita/english1.jpg',
          content: 'Anggota English Club meraih prestasi dalam kompetisi pidato bahasa Inggris.'
        }
      ]
    },
    'pramuka': {
      name: 'Pramuka',
      description: 'Pramuka SMKN 1 Bulan membentuk karakter kepemimpinan dan kemandirian siswa melalui berbagai kegiatan kepanduan.',
      info: [
        { title: 'Jadwal Latihan', content: 'Setiap Sabtu, 08:00 - 11:00 WIB' },
        { title: 'Pembina', content: 'Kak Pramuka Sejati, S.Pd.' },
        { title: 'Prestasi', content: 'Juara Umum Kemah Nasional' }
      ],
      news: [
        {
          title: 'Kemah Bakti Sosial',
          date: '5 Februari 2024',
          image: '/images/berita/pramuka1.jpg',
          content: 'Pramuka SMKN 1 Bulan mengadakan kemah bakti sosial di desa binaan.'
        }
      ]
    },
    'futsal': {
      name: 'Futsal',
      description: 'Tim futsal sekolah yang berlatih intensif untuk mengembangkan kemampuan bermain futsal dan strategi permainan tim.',
      info: [
        { title: 'Jadwal Latihan', content: 'Senin & Rabu, 15:30 - 17:30 WIB' },
        { title: 'Pelatih', content: 'Coach Bambang Futsal, S.Pd.' },
        { title: 'Prestasi', content: 'Juara 1 Liga Futsal Pelajar' }
      ],
      news: [
        {
          title: 'Juara Liga Futsal',
          date: '12 Februari 2024',
          image: '/images/berita/futsal1.jpg',
          content: 'Tim futsal sekolah menjuarai liga futsal pelajar tingkat kota.'
        }
      ]
    },
    'seni-musik': {
      name: 'Seni Musik',
      description: 'Ekstrakurikuler musik untuk mengembangkan bakat dan kreativitas siswa dalam bermusik, meliputi vokal, instrumen, dan komposisi musik.',
      info: [
        { title: 'Jadwal Latihan', content: 'Setiap Kamis, 15:00 - 17:00 WIB' },
        { title: 'Pembina', content: 'Bpk. Musisi Pro, S.Sn.' },
        { title: 'Prestasi', content: 'Juara 1 Festival Band Antar SMA/SMK' }
      ],
      news: [
        {
          title: 'Konser Tahunan',
          date: '20 Februari 2024',
          image: '/images/berita/musik1.jpg',
          content: 'Tim musik sekolah menggelar konser tahunan dengan penampilan memukau.'
        }
      ]
    },
    'fotografi': {
      name: 'Fotografi',
      description: 'Wadah kreativitas siswa dalam bidang fotografi dan videografi, mengajarkan teknik pengambilan gambar hingga editing.',
      info: [
        { title: 'Jadwal Latihan', content: 'Setiap Jumat, 14:00 - 16:00 WIB' },
        { title: 'Pembina', content: 'Bpk. Foto Pro, S.Sn.' },
        { title: 'Prestasi', content: 'Best Photography School Award 2024' }
      ],
      news: [
        {
          title: 'Pameran Foto',
          date: '25 Februari 2024',
          image: '/images/berita/foto1.jpg',
          content: 'Pameran karya fotografi siswa mendapat apresiasi tinggi dari pengunjung.'
        }
      ]
    },
    'pmr': {
      name: 'PMR',
      description: 'Palang Merah Remaja yang fokus pada kegiatan sosial dan kesehatan.',
      info: [
        { title: 'Jadwal Latihan', content: 'Setiap Sabtu, 13:00 - 15:00 WIB' },
        { title: 'Pembina', content: 'Ibu PMR Pro, S.Kep.' },
        { title: 'Prestasi', content: 'Juara Lomba PMR Tingkat Provinsi' }
      ],
      news: [
        {
          title: 'Donor Darah',
          date: '18 Februari 2024',
          image: '/images/berita/pmr1.jpg',
          content: 'Kegiatan donor darah massal sukses dilaksanakan.'
        }
      ]
    },
    'basket': {
      name: 'Basket',
      description: 'Tim basket sekolah yang berlatih untuk kompetisi dan pengembangan skill.',
      info: [
        { title: 'Jadwal Latihan', content: 'Selasa & Kamis, 15:30 - 17:30 WIB' },
        { title: 'Pelatih', content: 'Coach Basket Pro, S.Pd.' },
        { title: 'Prestasi', content: 'Juara 2 Turnamen Basket Antar SMA/SMK' }
      ],
      news: [
        {
          title: 'Final Basket',
          date: '22 Februari 2024',
          image: '/images/berita/basket1.jpg',
          content: 'Tim basket putra melaju ke final turnamen provinsi.'
        }
      ]
    },
    'teater': {
      name: 'Teater',
      description: 'Ekstrakurikuler yang fokus pada pengembangan kemampuan akting, tata panggung, dan produksi pertunjukan.',
      info: [
        { title: 'Jadwal Latihan', content: 'Setiap Rabu, 15:00 - 17:00 WIB' },
        { title: 'Pembina', content: 'Ibu Teater Pro, S.Pd.' },
        { title: 'Prestasi', content: 'Juara 1 Festival Teater Pelajar' }
      ],
      news: [
        {
          title: 'Pentas Drama',
          date: '28 Februari 2024',
          image: '/images/berita/teater1.jpg',
          content: 'Pertunjukan drama musikal mendapat standing ovation dari penonton.'
        }
      ]
    },
    'jurnalistik': {
      name: 'Jurnalistik',
      description: 'Wadah pengembangan kemampuan menulis, jurnalistik, dan produksi media sekolah.',
      info: [
        { title: 'Jadwal Latihan', content: 'Setiap Senin, 14:00 - 16:00 WIB' },
        { title: 'Pembina', content: 'Bpk. Jurnalis Pro, S.Pd.' },
        { title: 'Prestasi', content: 'Best School Magazine Award 2024' }
      ],
      news: [
        {
          title: 'Peluncuran Majalah',
          date: '15 Februari 2024',
          image: '/images/berita/jurnalistik1.jpg',
          content: 'Tim jurnalistik meluncurkan edisi terbaru majalah sekolah.'
        }
      ]
    }
  };

  const currentExtra = extraData[extraId] || {
    name: 'Ekstrakurikuler Tidak Ditemukan',
    description: 'Maaf, ekstrakurikuler yang Anda cari tidak ditemukan.'
  };

  return (
    <ExtraDetailSection>
      <ExtraContainer>
        <ExtraHeader>
          <ExtraTitle>{currentExtra.name}</ExtraTitle>
          <ExtraDescription>{currentExtra.description}</ExtraDescription>
        </ExtraHeader>

        <InfoGrid>
          {currentExtra.info.map((info, index) => (
            <InfoCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <h3>{info.title}</h3>
              <p>{info.content}</p>
            </InfoCard>
          ))}
        </InfoGrid>

        <NewsSection>
          <SectionTitle>Berita Terkini</SectionTitle>
          <NewsGrid>
            {currentExtra.news.map((news, index) => (
              <NewsCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="image-container">
                  <img src={news.image} alt={news.title} />
                </div>
                <div className="content">
                  <h3>{news.title}</h3>
                  <div className="date">{news.date}</div>
                  <p>{news.content}</p>
                </div>
              </NewsCard>
            ))}
          </NewsGrid>
        </NewsSection>
      </ExtraContainer>
    </ExtraDetailSection>
  );
}

export default ExtraDetail; 