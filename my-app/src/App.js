import "./App.css";
import Navbar from "./components/navbar/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "./components/carousel/carousel";
import Sambutan from "./components/sambutan/sambutan";
import Tentang from "./components/tentang/tentang";
import TentangFull from "./components/tentang/tentangFull";
import Footer from "./components/footer/footer";
import Berita from "./components/berita/berita";
import NotFound from "./components/404/404";
import Contact from "./components/contact/contact";
import Guru from "./components/guru/guru";
import Login from "./components/login/login";
import Admin from "./components/admin/admin";
import KelolaGuru from "./components/admin/kelolaGuru/kelolaGuru";
import KelolaBerita from "./components/admin/kelolaBerita/kelolaBerita";
import TambahBerita from "./components/admin/kelolaBerita/tambahBerita/tambahBerita";
import EditBerita from "./components/admin/kelolaBerita/editBerita/editBerita";
import Dashboard from "./components/admin/dashboard/dashboard";

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route
            path='/'
            element={
              <div className='content'>
                <Carousel />
                <Sambutan />
                <Tentang />
              </div>
            }
          />
          <Route path='/tentang' element={<TentangFull />} />
          <Route path='/berita' element={<Berita />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/guru' element={<Guru />} />
          <Route path='/login' element={<Login />} />
          <Route path='/admin' element={<Admin />}>
            <Route path='kelola-guru' element={<KelolaGuru />} />
            <Route path='tambah-berita' element={<TambahBerita />} />
            <Route path='kelola-berita' element={<KelolaBerita />} />
            <Route path='edit-berita' element={<EditBerita />} />
            <Route path='dashboard' element={<Dashboard />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
