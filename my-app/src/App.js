import "./App.css";
import Navbar from "./components/navbar/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "./components/carousel/carousel";
import Sambutan from "./components/sambutan/sambutan";
import Tentang from "./components/tentang/tentang";
import Footer from "./components/footer/footer";
import Berita from "./components/berita/berita";
import NotFound from "./components/404/404";
import Contact from "./components/contact/contact";
import Guru from "./components/guru/guru";

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
          <Route path='/tentang' element={<Tentang />} />
          <Route path='/berita' element={<Berita />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/guru' element={<Guru />} />
          <Route path='*' element={<NotFound />} />
          {/* will be guru page not found and hubungi kami */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
