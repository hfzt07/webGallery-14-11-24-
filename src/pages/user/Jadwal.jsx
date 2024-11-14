import React from 'react';
import styled from '@emotion/styled';

const JadwalContainer = styled.div`
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
`;

function UserJadwal() {
  const jadwalData = [
    { jam: "07:00 - 08:30", senin: "Matematika", selasa: "B. Indonesia", rabu: "Pemrograman Web", kamis: "Basis Data", jumat: "PKN" },
    { jam: "08:30 - 10:00", senin: "B. Inggris", selasa: "Pemrograman Web", rabu: "Basis Data", kamis: "Matematika", jumat: "Agama" },
    { jam: "10:15 - 11:45", senin: "Pemrograman Web", selasa: "Basis Data", rabu: "B. Indonesia", kamis: "B. Inggris", jumat: "Olahraga" },
    { jam: "12:30 - 14:00", senin: "Basis Data", selasa: "PKN", rabu: "Matematika", kamis: "Pemrograman Web", jumat: "-" },
    { jam: "14:00 - 15:30", senin: "PKN", selasa: "Matematika", rabu: "B. Inggris", kamis: "Agama", jumat: "-" },
  ];

  return (
    <JadwalContainer>
      <Title>Jadwal Pelajaran</Title>
      <Card>
        <Table>
          <thead>
            <tr>
              <th>Jam</th>
              <th>Senin</th>
              <th>Selasa</th>
              <th>Rabu</th>
              <th>Kamis</th>
              <th>Jumat</th>
            </tr>
          </thead>
          <tbody>
            {jadwalData.map((jadwal, index) => (
              <tr key={index}>
                <td>{jadwal.jam}</td>
                <td>{jadwal.senin}</td>
                <td>{jadwal.selasa}</td>
                <td>{jadwal.rabu}</td>
                <td>{jadwal.kamis}</td>
                <td>{jadwal.jumat}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </JadwalContainer>
  );
}

export default UserJadwal; 