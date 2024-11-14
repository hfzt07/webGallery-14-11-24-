import React from 'react';
import styled from '@emotion/styled';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { FaUsers, FaNewspaper, FaGraduationCap, FaRunning, FaUserGraduate } from 'react-icons/fa';
import { motion } from 'framer-motion';

const AdminContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background: #1a1a2e;
  position: relative;
`;

const Sidebar = styled.div`
  width: 250px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  position: fixed;
  height: 100vh;
  overflow-y: auto;
`;

const MainContent = styled.div`
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
  margin-left: 250px;
`;

const Logo = styled.div`
  color: #00ff87;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: center;
`;

const NavItem = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  margin-bottom: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 255, 135, 0.1);
    color: #00ff87;
  }

  &.active {
    background: linear-gradient(to right, #00ff87, #60efff);
    color: #1a1a2e;
  }
`;

const LogoutButton = styled(motion.button)`
  width: 100%;
  padding: 1rem;
  background: rgba(255, 59, 48, 0.1);
  border: none;
  border-radius: 8px;
  color: #ff3b30;
  cursor: pointer;
  margin-top: 2rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 59, 48, 0.2);
  }
`;

function AdminLayout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <AdminContainer>
      <Sidebar>
        <Logo>Admin Panel</Logo>
        <NavItem to="/admin">
          <FaUsers /> Dashboard
        </NavItem>
        <NavItem to="/admin/users">
          <FaUsers /> Moderator
        </NavItem>
        <NavItem to="/admin/students-teachers">
          <FaUserGraduate /> Siswa & Guru
        </NavItem>
        <NavItem to="/admin/news">
          <FaNewspaper /> Berita Sekolah
        </NavItem>
        <NavItem to="/admin/program-news">
          <FaGraduationCap /> Berita Program Keahlian
        </NavItem>
        <NavItem to="/admin/extra-news">
          <FaRunning /> Berita Ekstrakurikuler
        </NavItem>
        <LogoutButton
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleLogout}
        >
          Logout
        </LogoutButton>
      </Sidebar>
      <MainContent>
        <Outlet />
      </MainContent>
    </AdminContainer>
  );
}

export default AdminLayout; 