import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLogin } from '../context/LoginContext';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 2rem;
  transition: background-color 0.3s ease;
  background-color: ${props => props.scrolled ? 'rgba(26, 26, 46, 0.8)' : 'transparent'};
  backdrop-filter: ${props => props.scrolled ? 'blur(15px)' : 'none'};
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
`;

const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 1rem;
`;

const Logo = styled.img`
  height: 50px;
  width: auto;
`;

const SchoolName = styled.div`
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  position: relative;
  cursor: pointer;
  
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 0;
    background: linear-gradient(to right, #00ff87, #60efff);
    transition: width 0.3s ease;
  }
  
  &:hover:after {
    width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const LoginIcon = styled(motion.button)`
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  border: none;
  border-radius: 30px;
  color: #1a1a2e;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(0, 255, 135, 0.4);
  }

  @media (max-width: 768px) {
    margin-top: 2rem;
    width: 200px;
  }
`;

// Tambahkan komponen untuk menu mobile
const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1001;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(26, 26, 46, 0.98);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
`;

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setShowLogin, isLoggedIn, handleLogout } = useLogin();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80; // Sesuaikan dengan tinggi navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Nav scrolled={scrolled}>
      <NavContainer>
        <LogoContainer to="/" onClick={() => scrollToSection('beranda')}>
          <Logo src="https://raw.githubusercontent.com/hfzt07/dbweb/main/logo.png" alt="SMKN 1 Bulan Logo" />
          <SchoolName>SMKN 1 Bulan</SchoolName>
        </LogoContainer>

        <MobileMenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? '✕' : '☰'}
        </MobileMenuButton>

        <RightSection>
          <NavLinks>
            <NavLink to="/" onClick={() => scrollToSection('beranda')}>Beranda</NavLink>
            <NavLink to="/" onClick={() => scrollToSection('profil')}>Profil</NavLink>
            <NavLink to="/" onClick={() => scrollToSection('berita')}>Berita</NavLink>
            <NavLink to="/" onClick={() => scrollToSection('jurusan')}>Program</NavLink>
            <NavLink to="/" onClick={() => scrollToSection('fasilitas')}>Fasilitas</NavLink>
          </NavLinks>
          <LoginIcon
            onClick={() => {
              if (isLoggedIn) {
                handleLogout();
              } else {
                setShowLogin(true);
              }
              setIsMenuOpen(false);
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isLoggedIn ? 'Logout' : 'Login'}
          </LoginIcon>
        </RightSection>

        <MobileMenu isOpen={isMenuOpen}>
          <NavLinks>
            <NavLink to="/" onClick={() => {
              scrollToSection('beranda');
              setIsMenuOpen(false);
            }}>Beranda</NavLink>
            <NavLink to="/" onClick={() => {
              scrollToSection('profil');
              setIsMenuOpen(false);
            }}>Profil</NavLink>
            <NavLink to="/" onClick={() => {
              scrollToSection('berita');
              setIsMenuOpen(false);
            }}>Berita</NavLink>
            <NavLink to="/" onClick={() => {
              scrollToSection('jurusan');
              setIsMenuOpen(false);
            }}>Program</NavLink>
            <NavLink to="/" onClick={() => {
              scrollToSection('fasilitas');
              setIsMenuOpen(false);
            }}>Fasilitas</NavLink>
          </NavLinks>
          <LoginIcon
            onClick={() => {
              if (isLoggedIn) {
                handleLogout();
              } else {
                setShowLogin(true);
              }
              setIsMenuOpen(false);
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isLoggedIn ? 'Logout' : 'Login'}
          </LoginIcon>
        </MobileMenu>
      </NavContainer>
    </Nav>
  );
}

export default Navbar;