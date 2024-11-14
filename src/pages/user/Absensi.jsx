import React from 'react';
import styled from '@emotion/styled';

const AbsensiContainer = styled.div`
  color: white;
`;

const Title = styled.h1`
  color: #00ff87;
  margin-bottom: 2rem;
  font-size: 2rem;
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  margin-bottom: 2rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;

  th, td {
    padding: 1rem;
    text-align: left;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  th {
    color: #00ff87;
    font-weight: 600;
  }

  td {
    color: rgba(255, 255, 255, 0.8);
  }

  tbody tr:hover {
    background: rgba(255, 255, 255, 0.05);
  }

  .hadir { color: #00ff87; }
  .izin { color: #ffd700; }
  .sakit { color: #ff9800; }
  .alpha { color: #ff4444; }
`;

function UserAbsensi() {
  const absensiData = [
    { tanggal: "2024-02-01", status: "Hadir", keterangan: "-" },
    { tanggal: "2024-02-02", status: "Hadir", keterangan: "-" },
    { tanggal: "2024-02-03", status: "Izin", keterangan: "Acara Keluarga" },
    { tanggal: "2024-02-04", status: "Hadir", keterangan: "-" },
    { tanggal: "2024-02-05", status: "Sakit", keterangan: "Demam" },
  ];

  const getStatusClass = (status) => {
    switch(status.toLowerCase()) {
      case 'hadir': return 'hadir';
      case 'izin': return 'izin';
      case 'sakit': return 'sakit';
      case 'alpha': return 'alpha';
      default: return '';
    }
  };

  return (
    <AbsensiContainer>
      <Title>Rekap Absensi</Title>
      <Card>
        <Table>
          <thead>
            <tr>
              <th>Tanggal</th>
              <th>Status</th>
              <th>Keterangan</th>
            </tr>
          </thead>
          <tbody>
            {absensiData.map((absen, index) => (
              <tr key={index}>
                <td>{absen.tanggal}</td>
                <td className={getStatusClass(absen.status)}>{absen.status}</td>
                <td>{absen.keterangan}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </AbsensiContainer>
  );
}

export default UserAbsensi; 