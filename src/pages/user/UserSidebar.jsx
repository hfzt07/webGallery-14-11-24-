import React from 'react';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { FaHome, FaUser, FaBook, FaCalendarAlt, FaClipboardList, FaSignOutAlt, FaCamera } from 'react-icons/fa';
import { useLogin } from '../../context/LoginContext';

const Sidebar = styled.aside`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 250px;
  background: rgba(26, 26, 46, 0.95);
  backdrop-filter: blur(10px);
  padding: 2rem 0;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 100;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0 2rem;
  margin-bottom: 3rem;

  img {
    width: 40px;
    height: auto;
  }

  h1 {
    color: #00ff87;
    font-size: 1.2rem;
  }
`;

const NavMenu = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0 1rem;
  height: calc(100% - 120px);
`;

const NavItem = styled(NavLink)`
  color: white;
  text-decoration: none;
  padding: 1rem;
  border-radius: 10px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1rem;

  svg {
    font-size: 1.2rem;
  }

  &:hover {
    background: rgba(0, 255, 135, 0.1);
    color: #00ff87;
  }

  &.active {
    background: rgba(0, 255, 135, 0.1);
    color: #00ff87;
    font-weight: 600;
  }
`;

const LogoutButton = styled(NavLink)`
  color: #ff4444;
  text-decoration: none;
  padding: 1rem;
  border-radius: 10px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1rem;
  margin-top: auto;
  cursor: pointer;

  svg {
    font-size: 1.2rem;
  }

  &:hover {
    background: rgba(255, 68, 68, 0.1);
    color: #ff4444;
  }
`;

function UserSidebar() {
  const { handleLogout } = useLogin();

  return (
    <Sidebar>
      <Logo>
        <img src="https://raw.githubusercontent.com/hfzt07/dbweb/main/logo.png" alt="Logo" />
        <h1>SMKN 1 Bulan</h1>
      </Logo>
      <NavMenu>
        <NavItem to="/user" end>
          <FaHome /> Beranda
        </NavItem>
        <NavItem to="/user/profile">
          <FaUser /> Profil
        </NavItem>
        <NavItem to="/user/nilai">
          <FaBook /> Nilai
        </NavItem>
        <NavItem to="/user/absensi">
          <FaClipboardList /> Absensi
        </NavItem>
        <NavItem to="/user/jadwal">
          <FaCalendarAlt /> Jadwal
        </NavItem>
        <NavItem to="/user/posting">
          <FaCamera /> Posting Foto
        </NavItem>
        <LogoutButton onClick={handleLogout}>
          <FaSignOutAlt /> Logout
        </LogoutButton>
      </NavMenu>
    </Sidebar>
  );
}

export default UserSidebar; 