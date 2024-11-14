import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import AdminPageHeader from '../../components/admin/AdminPageHeader';

const Container = styled.div`
  padding: 1rem 2rem 2rem 2rem;
  color: white;
`;

const TabContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const Tab = styled.button`
  padding: 0.8rem 1.5rem;
  background: ${props => props.active ? 'rgba(0, 255, 135, 0.2)' : 'rgba(255, 255, 255, 0.1)'};
  color: ${props => props.active ? '#00ff87' : 'white'};
  border: 1px solid ${props => props.active ? '#00ff87' : 'rgba(255, 255, 255, 0.1)'};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 255, 135, 0.1);
    color: #00ff87;
  }
`;

const DataContainer = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const DataGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const DataCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  width: 100%;

  h3 {
    color: #00ff87;
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }

  p {
    color: rgba(255, 255, 255, 0.8);
    margin: 0.5rem 0;
    font-size: 0.9rem;
  }

  .status {
    display: inline-block;
    padding: 0.3rem 0.8rem;
    border-radius: 15px;
    font-size: 0.8rem;
    margin-top: 1rem;
    background: ${props => props.status === 'Aktif' ? 'rgba(0, 255, 135, 0.2)' : 'rgba(255, 59, 48, 0.2)'};
    color: ${props => props.status === 'Aktif' ? '#00ff87' : '#ff3b30'};
  }

  display: flex;
  justify-content: space-between;
  align-items: center;

  .card-content {
    flex: 1;
  }

  .card-status {
    margin-left: 2rem;
  }
`;

const SearchInput = styled.input`
  padding: 0.8rem 1.2rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  color: white;
  width: 300px;
  margin-bottom: 1.5rem;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const StatsContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const StatBox = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 1.2rem;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  min-width: 200px;

  h4 {
    color: #00ff87;
    margin-bottom: 0.5rem;
    font-size: 1rem;
  }

  p {
    font-size: 1.8rem;
    font-weight: bold;
    color: white;
  }

  .sub-text {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.6);
    margin-top: 0.5rem;
  }
`;

const AddButton = styled(motion.button)`
  padding: 1rem 2rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  border: none;
  border-radius: 8px;
  color: #1a1a2e;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 2rem;
  margin-top: 1rem;
`;

function StudentTeacherManagement() {
  const [activeTab, setActiveTab] = React.useState('students');
  const [searchTerm, setSearchTerm] = React.useState('');

  const studentData = [
    { id: 1, name: 'Ahmad Rizki', kelas: 'XII RPL 1', nis: '12345', status: 'Aktif' },
    { id: 2, name: 'Siti Nurhaliza', kelas: 'XII RPL 1', nis: '12346', status: 'Aktif' },
    { id: 3, name: 'Budi Santoso', kelas: 'XII RPL 2', nis: '12347', status: 'Aktif' },
    { id: 4, name: 'Dewi Putri', kelas: 'XII RPL 2', nis: '12348', status: 'Tidak Aktif' },
    { id: 5, name: 'Eko Prasetyo', kelas: 'XII RPL 3', nis: '12349', status: 'Aktif' },
    { id: 6, name: 'Fitri Handayani', kelas: 'XII RPL 3', nis: '12350', status: 'Aktif' },
  ];

  const teacherData = [
    { id: 1, name: 'Drs. Suryanto', mapel: 'Matematika', nip: '198501012010011001', status: 'Aktif' },
    { id: 2, name: 'Sri Wahyuni, S.Pd', mapel: 'Bahasa Indonesia', nip: '198601022010012002', status: 'Aktif' },
    { id: 3, name: 'Ahmad Hidayat, M.Pd', mapel: 'Pemrograman Web', nip: '198701032010013003', status: 'Aktif' },
    { id: 4, name: 'Rina Susanti, S.Kom', mapel: 'Basis Data', nip: '198801042010014004', status: 'Tidak Aktif' },
    { id: 5, name: 'Dr. Bambang Kusuma', mapel: 'Sistem Operasi', nip: '198901052010015005', status: 'Aktif' },
  ];

  const activeStudents = studentData.filter(student => student.status === 'Aktif').length;
  const activeTeachers = teacherData.filter(teacher => teacher.status === 'Aktif').length;

  const filteredData = activeTab === 'students' 
    ? studentData.filter(student => 
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.nis.includes(searchTerm)
      )
    : teacherData.filter(teacher => 
        teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        teacher.nip.includes(searchTerm)
      );

  return (
    <Container>
      <AdminPageHeader>Manajemen Siswa & Guru</AdminPageHeader>
      
      <StatsContainer>
        <StatBox>
          <h4>Total Siswa</h4>
          <p>{studentData.length}</p>
          <div className="sub-text">Aktif: {activeStudents}</div>
        </StatBox>
        <StatBox>
          <h4>Total Guru</h4>
          <p>{teacherData.length}</p>
          <div className="sub-text">Aktif: {activeTeachers}</div>
        </StatBox>
      </StatsContainer>

      <TabContainer>
        <Tab 
          active={activeTab === 'students'} 
          onClick={() => setActiveTab('students')}
        >
          Data Siswa
        </Tab>
        <Tab 
          active={activeTab === 'teachers'} 
          onClick={() => setActiveTab('teachers')}
        >
          Data Guru
        </Tab>
      </TabContainer>

      <AddButton
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Add New {activeTab === 'students' ? 'Siswa' : 'Guru'}
      </AddButton>
      
      <DataContainer>
        <SearchInput 
          type="text" 
          placeholder={`Cari ${activeTab === 'students' ? 'siswa' : 'guru'}...`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
        <DataGrid>
          {filteredData.map((item) => (
            <DataCard 
              key={item.id}
              status={item.status}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <div className="card-content">
                <h3>{item.name}</h3>
                {activeTab === 'students' ? (
                  <>
                    <p>Kelas: {item.kelas}</p>
                    <p>NIS: {item.nis}</p>
                  </>
                ) : (
                  <>
                    <p>Mata Pelajaran: {item.mapel}</p>
                    <p>NIP: {item.nip}</p>
                  </>
                )}
              </div>
              <div className="card-status">
                <div className="status">{item.status}</div>
              </div>
            </DataCard>
          ))}
        </DataGrid>
      </DataContainer>
    </Container>
  );
}

export default StudentTeacherManagement; 