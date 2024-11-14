import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import UserSidebar from './UserSidebar';
import UserHeader from './UserHeader';

const LayoutContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background: #1a1a2e;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 2rem;
  margin-left: 250px;
  margin-top: 70px;
`;

function UserLayout() {
  return (
    <LayoutContainer>
      <UserSidebar />
      <UserHeader />
      <MainContent>
        <Outlet />
      </MainContent>
    </LayoutContainer>
  );
}

export default UserLayout; 