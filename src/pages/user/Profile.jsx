import React, { useState } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaEdit, FaCamera } from 'react-icons/fa';

const ProfileContainer = styled.div`
  color: white;
`;

const Title = styled.h1`
  color: #00ff87;
  margin-bottom: 2rem;
  font-size: 2rem;
`;

const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 3rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ProfileImage = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid #00ff87;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .edit-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.7);
    padding: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transform: translateY(100%);
    transition: transform 0.3s ease;
  }

  &:hover .edit-overlay {
    transform: translateY(0);
  }
`;

const ProfileInfo = styled.div`
  flex: 1;

  h2 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 1rem;
  }
`;

const ProfileGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const InfoCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);

  h3 {
    color: #00ff87;
    margin-bottom: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background: none;
      border: none;
      color: #00ff87;
      cursor: pointer;
      font-size: 1.2rem;
      
      &:hover {
        color: white;
      }
    }
  }
`;

const InfoItem = styled.div`
  margin-bottom: 1.5rem;

  label {
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
    display: block;
  }

  p {
    color: white;
    font-size: 1.1rem;
  }
`;

const AchievementSection = styled.div`
  margin-top: 2rem;
`;

const AchievementGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AchievementCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;

  .icon {
    font-size: 2.5rem;
    color: #00ff87;
    margin-bottom: 1rem;
  }

  h4 {
    color: #00ff87;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
  }

  p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.9rem;
  }
`;

const BadgeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
`;

const Badge = styled(motion.div)`
  background: rgba(0, 255, 135, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  border: 1px solid rgba(0, 255, 135, 0.2);
  color: #00ff87;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    font-size: 1rem;
  }
`;

function UserProfile() {
  const [isEditing, setIsEditing] = useState(false);

  const achievements = [
    {
      icon: "🏆",
      title: "Juara 1 LKS Web Design",
      year: "2023"
    },
    {
      icon: "🥇",
      title: "Best Student of The Year",
      year: "2023"
    },
    {
      icon: "🎯",
      title: "Perfect Attendance",
      year: "2023"
    }
  ];

  const badges = [
    { icon: "💻", name: "Web Developer" },
    { icon: "🎨", name: "UI/UX Designer" },
    { icon: "🤖", name: "AI Enthusiast" },
    { icon: "📱", name: "Mobile Developer" },
    { icon: "🎮", name: "Game Developer" }
  ];

  return (
    <ProfileContainer>
      <Title>Profil Saya</Title>
      
      <ProfileHeader>
        <ProfileImage>
          <img src="https://raw.githubusercontent.com/hfzt07/dbweb/main/profile.jpg" alt="Profile" />
          <div className="edit-overlay">
            <FaCamera /> Ubah Foto
          </div>
        </ProfileImage>
        <ProfileInfo>
          <h2>John Doe</h2>
          <p>XII RPL 1</p>
          <p>NISN: 1234567890</p>
        </ProfileInfo>
      </ProfileHeader>

      <ProfileGrid>
        <InfoCard
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h3>
            Data Pribadi
            <button onClick={() => setIsEditing(!isEditing)}>
              <FaEdit />
            </button>
          </h3>
          <InfoItem>
            <label>Tempat, Tanggal Lahir</label>
            <p>Jakarta, 15 Agustus 2006</p>
          </InfoItem>
          <InfoItem>
            <label>Alamat</label>
            <p>Jl. Contoh No. 123, Jakarta</p>
          </InfoItem>
          <InfoItem>
            <label>No. Telepon</label>
            <p>081234567890</p>
          </InfoItem>
          
          <BadgeContainer>
            {badges.map((badge, index) => (
              <Badge
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                {badge.icon} {badge.name}
              </Badge>
            ))}
          </BadgeContainer>
        </InfoCard>

        <InfoCard
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h3>Data Akademik</h3>
          <InfoItem>
            <label>Tahun Masuk</label>
            <p>2021</p>
          </InfoItem>
          <InfoItem>
            <label>Wali Kelas</label>
            <p>Budi Santoso, S.Pd</p>
          </InfoItem>
          <InfoItem>
            <label>Ekstrakurikuler</label>
            <p>OSIS, English Club</p>
          </InfoItem>

          <AchievementSection>
            <h3 style={{ marginBottom: '1.5rem' }}>Prestasi</h3>
            <AchievementGrid>
              {achievements.map((achievement, index) => (
                <AchievementCard
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="icon">{achievement.icon}</div>
                  <h4>{achievement.title}</h4>
                  <p>{achievement.year}</p>
                </AchievementCard>
              ))}
            </AchievementGrid>
          </AchievementSection>
        </InfoCard>
      </ProfileGrid>
    </ProfileContainer>
  );
}

export default UserProfile; 