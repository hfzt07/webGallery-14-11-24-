import React from 'react';
import styled from '@emotion/styled';

const Header = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 250px;
  height: 70px;
  background: rgba(26, 26, 46, 0.8);
  backdrop-filter: blur(10px);
  padding: 1rem 2rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 100;
`;

function UserHeader() {
  return (
    <Header>
      {/* Tambahkan komponen lain jika diperlukan */}
    </Header>
  );
}

export default UserHeader; 