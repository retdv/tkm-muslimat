import "./footer.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Footer = () => {
  const navigate = useNavigate();
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  }

  const logOut = async () => {
    try {
      await axios({
        url: "/logout",
        method: "delete",
        baseURL: "http://localhost:8080",
        withCredentials: true,
      });
      navigate("/", { replace: true });
    } catch (error) {
      console.error(error);
    }
  };

  const logged = getCookie("logged");

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
          {logged ? (
            <button onClick={logOut} className='btn btn-outline-success'>
              Keluar
            </button>
          ) : (
            <Link to='/login' className='widgetLink'>
              Masuk
            </Link>
          )}
        </div>
      </div>
      <div className='copyright'>
        <p>Copyright &copy; 2020 TKM Wedoro</p>
      </div>
    </div>
  );
};

export default Footer;
