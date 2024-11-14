import React from 'react';
import Program from '../components/Program';
import './Home.css';

const Home = () => {
  const programs = [
    {
      title: "Rekayasa Perangkat Lunak (RPL)",
      description: "Program keahlian yang mempelajari pengembangan perangkat lunak.",
      image: "/images/rpl.jpg"
    },
    {
      title: "Teknik Komputer dan Jaringan (TKJ)",
      description: "Program keahlian yang fokus pada jaringan komputer dan infrastruktur IT.",
      image: "/images/tkj.jpg"
    },
    {
      title: "Multimedia (MM)",
      description: "Program keahlian yang mempelajari desain grafis dan media digital.",
      image: "/images/mm.jpg"
    }
  ];

  return (
    <div>
      <section className="program-section">
        <h2>Program Keahlian</h2>
        <div className="program-grid">
          {programs.map((program, index) => (
            <Program 
              key={index}
              title={program.title}
              description={program.description}
              image={program.image}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home; 