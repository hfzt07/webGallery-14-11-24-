import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Profil from './components/Profil';
import Program from './components/Program';
import Fasilitas from './components/Fasilitas';
import Footer from './components/Footer';
import Login from './components/Login';
import { LoginProvider } from './context/LoginContext';
import AdminLayout from './pages/admin/AdminLayout';
import AdminDashboard from './pages/admin/Dashboard';
import ModManagement from './pages/admin/UserManagement';
import SiswaGuru from './pages/admin/StudentTeacherManagement';
import BeritaSekolah from './pages/admin/NewsManagement';
import BeritaProgram from './pages/admin/ProgramNews';
import BeritaEkskul from './pages/admin/ExtraNews';
import UserLayout from './pages/user/UserLayout';
import UserDashboard from './pages/user/Dashboard';
import UserProfile from './pages/user/Profile';
import UserNilai from './pages/user/Nilai';
import UserAbsensi from './pages/user/Absensi';
import UserJadwal from './pages/user/Jadwal';

function App() {
  return (
    <LoginProvider>
      <div className="App" style={{ background: '#1a1a2e' }}>
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <Hero />
              <Profil />
              <Program />
              <Fasilitas />
              <Footer />
            </>
          } />
          <Route path="/admin/*" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="users" element={<ModManagement />} />
            <Route path="students-teachers" element={<SiswaGuru />} />
            <Route path="news" element={<BeritaSekolah />} />
            <Route path="program-news" element={<BeritaProgram />} />
            <Route path="extra-news" element={<BeritaEkskul />} />
          </Route>
          <Route path="/user/*" element={<UserLayout />}>
            <Route index element={<UserDashboard />} />
            <Route path="profile" element={<UserProfile />} />
            <Route path="nilai" element={<UserNilai />} />
            <Route path="absensi" element={<UserAbsensi />} />
            <Route path="jadwal" element={<UserJadwal />} />
          </Route>
        </Routes>
        <Login />
      </div>
    </LoginProvider>
  );
}

export default App; 