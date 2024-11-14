import React from 'react';
import styled from '@emotion/styled';

const NilaiContainer = styled.div`
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

const Semester = styled.h2`
  color: #00ff87;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

function UserNilai() {
  const nilaiData = [
    {
      mapel: "Pemrograman Web",
      tugas: 85,
      uts: 88,
      uas: 90,
      nilai_akhir: 88
    },
    {
      mapel: "Basis Data",
      tugas: 90,
      uts: 85,
      uas: 88,
      nilai_akhir: 87
    },
    {
      mapel: "Pemrograman Mobile",
      tugas: 88,
      uts: 90,
      uas: 92,
      nilai_akhir: 90
    },
    // ... tambahkan mata pelajaran lainnya
  ];

  return (
    <NilaiContainer>
      <Title>Nilai Akademik</Title>
      <Card>
        <Semester>Semester Genap 2023/2024</Semester>
        <Table>
          <thead>
            <tr>
              <th>Mata Pelajaran</th>
              <th>Nilai Tugas</th>
              <th>Nilai UTS</th>
              <th>Nilai UAS</th>
              <th>Nilai Akhir</th>
            </tr>
          </thead>
          <tbody>
            {nilaiData.map((nilai, index) => (
              <tr key={index}>
                <td>{nilai.mapel}</td>
                <td>{nilai.tugas}</td>
                <td>{nilai.uts}</td>
                <td>{nilai.uas}</td>
                <td>{nilai.nilai_akhir}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </NilaiContainer>
  );
}

export default UserNilai; 