import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { motion } from 'framer-motion';
import AdminPageHeader from '../../components/admin/AdminPageHeader';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const DashboardContainer = styled.div`
  padding: 1rem 2rem 2rem 2rem;
  color: white;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 1.2rem;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);

  h3 {
    color: #00ff87;
    margin-bottom: 0.5rem;
    font-size: 1rem;
  }

  p {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

const ChartContainer = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 2rem;
  margin-top: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  height: calc(100vh - 300px); // Mengambil sisa tinggi viewport
`;

const FilterContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const Select = styled.select`
  padding: 0.5rem 1rem;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  cursor: pointer;

  option {
    background: #1a1a2e;
    color: white;
  }
`;

const ExtraContainer = styled.div`
  margin-top: 2rem;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const ExtraTitle = styled.h3`
  color: #00ff87;
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
`;

const ExtraScroll = styled(motion.div)`
  display: flex;
  gap: 2rem;
  padding: 1rem 0;
`;

const ExtraCard = styled(motion.div)`
  min-width: 250px;
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.2);

  h4 {
    color: #00ff87;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.9rem;
  }

  .members {
    margin-top: 1rem;
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.8rem;
  }
`;

function Dashboard() {
  const [selectedYear, setSelectedYear] = useState('2024');
  const [selectedMonth, setSelectedMonth] = useState('all');

  // Data pengunjung per tahun
  const visitorData = {
    '2024': {
      'Jan': 1200,
      'Feb': 1900,
      'Mar': 3000,
      'Apr': 5000,
      'Mei': 4000,
      'Jun': 3000,
      'Jul': 6000,
      'Agu': 7000,
      'Sep': 4500,
      'Okt': 5500,
      'Nov': 6500,
      'Des': 8000
    },
    '2023': {
      'Jan': 800,
      'Feb': 1200,
      'Mar': 2000,
      'Apr': 3000,
      'Mei': 3500,
      'Jun': 2500,
      'Jul': 4000,
      'Agu': 5000,
      'Sep': 3500,
      'Okt': 4000,
      'Nov': 4500,
      'Des': 5000
    }
  };

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
  const years = ['2023', '2024'];

  const getFilteredData = () => {
    const yearData = visitorData[selectedYear];
    if (selectedMonth === 'all') {
      return {
        labels: months,
        data: months.map(month => yearData[month])
      };
    } else {
      return {
        labels: [selectedMonth],
        data: [yearData[selectedMonth]]
      };
    }
  };

  const filteredData = getFilteredData();
  const data = {
    labels: filteredData.labels,
    datasets: [
      {
        label: 'Pengunjung Website',
        data: filteredData.data,
        borderColor: '#00ff87',
        backgroundColor: 'rgba(0, 255, 135, 0.1)',
        tension: 0.4,
        fill: true,
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: 'white'
        }
      },
      title: {
        display: true,
        text: `Statistik Pengunjung Website Tahun ${selectedYear}${selectedMonth !== 'all' ? ` - Bulan ${selectedMonth}` : ''}`,
        color: 'white',
        font: {
          size: 16
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        },
        ticks: {
          color: 'white'
        }
      },
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        },
        ticks: {
          color: 'white'
        }
      }
    }
  };

  const extrakulikuler = [
    {
      name: "Robotika",
      description: "Pengembangan dan pemrograman robot",
      members: 25
    },
    {
      name: "English Club",
      description: "Peningkatan kemampuan bahasa Inggris",
      members: 30
    },
    {
      name: "Pramuka",
      description: "Pembentukan karakter dan kepemimpinan",
      members: 45
    },
    {
      name: "Futsal",
      description: "Olahraga tim dan kompetisi",
      members: 20
    },
    {
      name: "Seni Musik",
      description: "Pengembangan bakat musik dan vokal",
      members: 15
    },
    {
      name: "Fotografi",
      description: "Teknik fotografi dan editing",
      members: 18
    },
    {
      name: "PMR",
      description: "Palang Merah Remaja",
      members: 22
    },
    {
      name: "Basket",
      description: "Olahraga tim dan strategi",
      members: 24
    },
    {
      name: "Teater",
      description: "Seni peran dan drama",
      members: 16
    },
    {
      name: "Jurnalistik",
      description: "Penulisan dan media sekolah",
      members: 20
    }
  ];

  return (
    <DashboardContainer>
      <AdminPageHeader>Dashboard</AdminPageHeader>
      <StatsGrid>
        <StatCard>
          <h3>Total Moderator</h3>
          <p>25</p>
        </StatCard>
        <StatCard>
          <h3>Total Guru</h3>
          <p>45</p>
        </StatCard>
        <StatCard>
          <h3>Total Siswa</h3>
          <p>520</p>
        </StatCard>
        <StatCard>
          <h3>Berita Sekolah</h3>
          <p>12</p>
        </StatCard>
        <StatCard>
          <h3>Berita Program Keahlian</h3>
          <p>4</p>
        </StatCard>
        <StatCard>
          <h3>Berita Ekstrakurikuler</h3>
          <p>3</p>
        </StatCard>
      </StatsGrid>

      <ExtraContainer>
        <ExtraTitle>Ekstrakurikuler Aktif</ExtraTitle>
        <ExtraScroll
          animate={{ x: [0, -1500] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {[...extrakulikuler, ...extrakulikuler].map((extra, index) => (
            <ExtraCard key={index}>
              <h4>{extra.name}</h4>
              <p>{extra.description}</p>
              <div className="members">
                {extra.members} Anggota Aktif
              </div>
            </ExtraCard>
          ))}
        </ExtraScroll>
      </ExtraContainer>

      <ChartContainer>
        <FilterContainer>
          <Select 
            value={selectedYear} 
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            {years.map(year => (
              <option key={year} value={year}>Tahun {year}</option>
            ))}
          </Select>
          <Select 
            value={selectedMonth} 
            onChange={(e) => setSelectedMonth(e.target.value)}
          >
            <option value="all">Semua Bulan</option>
            {months.map(month => (
              <option key={month} value={month}>{month}</option>
            ))}
          </Select>
        </FilterContainer>
        <Line data={data} options={options} />
      </ChartContainer>
    </DashboardContainer>
  );
}

export default Dashboard; 