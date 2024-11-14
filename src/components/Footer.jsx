import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: #0f2027;
  color: white;
  padding: 4rem 2rem 2rem 2rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`;

const FooterSection = styled.div`
  h3 {
    color: #00ff87;
    margin-bottom: 1.5rem;
    font-size: 1.2rem;
  }

  p, a {
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 0.8rem;
    line-height: 1.6;
    display: block;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #00ff87;
    }
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 0.8rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-top: 1rem;

  a {
    color: white;
    background: rgba(255, 255, 255, 0.1);
    padding: 0.8rem;
    border-radius: 50%;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;

    &:hover {
      background: #00ff87;
      transform: translateY(-3px);
    }

    &.facebook:hover {
      background: #1877f2;
    }

    &.instagram:hover {
      background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
    }

    &.youtube:hover {
      background: #ff0000;
    }

    &.tiktok:hover {
      background: #000000;
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  
  p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.9rem;
  }
`;

const ContactInfo = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.8);

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const GoogleMapsContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 0 2rem;
  margin: 3rem auto 0;
  
  .maps-title {
    color: #00ff87;
    text-align: center;
    margin-bottom: 1.5rem;
    font-size: 1.2rem;
    font-weight: 600;
  }

  .maps-wrapper {
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    aspect-ratio: 21/9;
  }

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }

  @media (max-width: 768px) {
    padding: 0 1rem;
    
    .maps-wrapper {
      aspect-ratio: 16/9;
    }
  }
`;

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer id="kontak">
      <FooterContent>
        <FooterSection>
          <h3>SMKN 1 Bulan</h3>
          <p>Membentuk generasi digital yang inovatif dan berkarakter untuk masa depan Indonesia.</p>
          <SocialLinks>
            <a href="https://www.facebook.com/grizelleana/" target="_blank" rel="noopener noreferrer" className="facebook">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/bernadyaribka/" target="_blank" rel="noopener noreferrer" className="instagram">
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com/channel/UCY1bGdpom5tXC9M8-Ahu8dQ" target="_blank" rel="noopener noreferrer" className="youtube">
              <FaYoutube />
            </a>
            <a href="https://www.tiktok.com/@bearnotber?" target="_blank" rel="noopener noreferrer" className="tiktok">
              <FaTiktok />
            </a>
          </SocialLinks>
        </FooterSection>

        <FooterSection>
          <h3>Program Keahlian</h3>
          <ul>
            <li><a href="#jurusan">Rekayasa Perangkat Lunak</a></li>
            <li><a href="#jurusan">Teknik Komputer dan Jaringan</a></li>
            <li><a href="#jurusan">Multimedia</a></li>
            <li><a href="#jurusan">Bisnis Digital</a></li>
          </ul>
        </FooterSection>

        <FooterSection>
          <h3>Menu</h3>
          <ul>
            <li><a href="#beranda">Beranda</a></li>
            <li><a href="#profil">Profil</a></li>
            <li><a href="#berita">Berita</a></li>
            <li><a href="#jurusan">Program</a></li>
            <li><a href="#fasilitas">Fasilitas</a></li>
          </ul>
        </FooterSection>

        <FooterSection>
          <h3>Kontak Kami</h3>
          <ContactInfo
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <span>📍</span>
            <p>Jl. Contoh No. 123, Kota Bulan</p>
          </ContactInfo>
          <ContactInfo
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span>📞</span>
            <p>+62 123 4567 8900</p>
          </ContactInfo>
          <ContactInfo
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span>✉️</span>
            <p>info@smkn1bulan.sch.id</p>
          </ContactInfo>
        </FooterSection>
      </FooterContent>

      <GoogleMapsContainer>
        <h3 className="maps-title">TEMUKAN KAMI</h3>
        <div className="maps-wrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.666667!2d106.82638889999999!3d-6.175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTAnMzAuMCJTIDEwNsKwNDknMzUuMCJF!5e0!3m2!1sid!2sid!4v1234567890"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <br />
        <br />
      </GoogleMapsContainer>

      <Copyright>
        <p>&copy; {currentYear} SMKN 1 Bulan. Hak Cipta Dilindungi.</p>
      </Copyright>
    </FooterContainer>
  );
}

export default Footer;