import React, { useState } from 'react';
import './app.css';
import pengibaranImg from './assets/pengibaran.jpg';
import mplsImg from './assets/mpls.jpg';
import rplcImg from './assets/rplc.jpg';
import profileImg from './assets/profile.jpg'; 

const aboutMe = {
  id: 0,
  title: 'About Me',
  image: profileImg,
  content: `Hi! I'm Sasa, a student at SMKN8 with a passion for new experiences and stories.

I love sharing moments that shape who I am, from school events to personal growth. Welcome to my world of "firsts" — where every memory tells a story.`,
};

const experiences = [
  {
    id: 1,
    title: 'First Day at SMKN8',
    image: mplsImg,
    content:
      'Hari pertama masuk sekolah, tentu saja ada kegiatan MPLS. Yap, di hari pertama itu aku hampir terlambat dan langsung kena semprotan pagi dari yang sekarang kami kenal sebagai Bu Andjar dan Pak Soni. Aku cukup kelimpungan saat mencari kelompokku, tapi untungnya kakak-kakak anggota OSIS sangat gercep membantu kami. Di awal-awal masuk SMK 8, aku cukup terkejut dengan tradisinya, yang berbeda jauh dari masa SMP-ku. Tapi sekarang, aku mulai terbiasa.',
  },
  {
    id: 2,
    title: 'First Time, Paskibra',
    image: pengibaranImg,
    content:
      'Pertama kalinya jadi anggota pengibaran bendera di 17 Agustus. Yang awalnya hanya bisa memandang kagum setiap ada event paskibra — segitu kagumnya aku. Entah kenapa, di mataku paskibra itu keren: dari postur tubuh yang terbentuk, kebijaksanaan yang terpancar, sampai mental yang ditempa dengan keras. Takut? Sama sekali tidak. Justru aku sangat ingin membentuk mentalku — setidaknya, sedikit demi sedikit.',
  },
  {
    id: 3,
    title: 'First time at X RPL C',
    image: rplcImg,
    content:
      'Masa MPLS telah usai, dan kami sudah menerima edaran pembagian kelas. Aku masuk ke kelas C, tepatnya 10 RPL C. Aku masuk tanpa mengenal seorang pun di sana — entah ada yang sekelompok denganku saat MPLS atau tidak, yang jelas aku nggak kenal mereka. Namun, itu bukan hambatan bagiku untuk menerima kelas 10 RPL C. Waktu itu, aku sangat senang bisa menjadi bagian dari mereka..',
  },
];

function App() {
  const [selectedId, setSelectedId] = useState(aboutMe.id);

  const slides = [aboutMe, ...experiences];
  const selectedSlide = slides.find(slide => slide.id === selectedId);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>My First Experiences</h1>
        <p className="subtitle">My yapping about my experiences</p>
      </header>

      <nav className="experience-nav">
        {slides.map(slide => (
          <button
            key={slide.id}
            className={`nav-button ${slide.id === selectedId ? 'active' : ''}`}
            onClick={() => setSelectedId(slide.id)}
          >
            {slide.title}
          </button>
        ))}
      </nav>

      <section className="experience-story">
        <h2>{selectedSlide.title}</h2>
        {selectedSlide.image && (
          <img
            src={selectedSlide.image}
            alt={selectedSlide.title}
            className="experience-image"
          />
        )}
        <p style={{ whiteSpace: 'pre-line' }}>{selectedSlide.content}</p>
      </section>

      <footer className="app-footer">
        <p>© sasa's yapping, shevlove.</p>
      </footer>
    </div>
  );
}

export default App;
