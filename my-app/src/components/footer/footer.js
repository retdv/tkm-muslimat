import "./footer.css";
import { Link } from "react-router-dom";

const footer = () => {
  return (
    <div className='footer'>
      <div className='widget'>
        <div className='widgetCol'>
          <Link to='/' className='widgetLink title'>
            Home
          </Link>
        </div>
        <div className='widgetCol'>
          <Link to='/guru' className='widgetLink'>
            Guru Kami
          </Link>
          <Link to='/tentang' className='widgetLink'>
            Visi & Misi
          </Link>
          <Link to='/tentang' className='widgetLink'>
            Fasilitas & Pendaftaran
          </Link>
        </div>
        <div className='widgetCol'>
          <Link to='/berita' className='widgetLink'>
            Berita
          </Link>
          <Link to='/contact' className='widgetLink'>
            Hubungi Kami
          </Link>
          <Link to='/login' className='widgetLink disabled'>
            Masuk
          </Link>
        </div>
      </div>
      <div className='copyright'>
        <p>Copyright &copy; 2020 TKM Wedoro</p>
      </div>
    </div>
  );
};

export default footer;
