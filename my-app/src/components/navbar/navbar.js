import "./navbar.css";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

const MyNavbar = () => {
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  }
  const navigate = useNavigate();

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
    <Navbar bg='white' expand='md' className='navBar'>
      <Container fluid>
        <Link to='/' className='fw-bold navbar-brand'>
          TKM Wedoro
        </Link>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto my-2 my-lg-0 fw-bold'>
            <NavDropdown
              title='Tentang Kami'
              id='basic-nav-dropdown'
              className='classItem'
            >
              <Link to='/guru' className='dropdown-item'>
                Guru Kami
              </Link>
              <Link to='/tentang' className='dropdown-item'>
                Visi dan Misi
              </Link>
              <Link to='/tentang' className='dropdown-item'>
                Fasilitas dan Pendaftaran
              </Link>
            </NavDropdown>
            <Link to='/berita' className='nav-item nav-link'>
              Berita
            </Link>
            <Link to='/contact' className='nav-item nav-link'>
              Hubungi Kami
            </Link>
          </Nav>
          {logged ? (
            <button onClick={logOut} className='btn btn-outline-success'>
              Keluar
            </button>
          ) : (
            <Link to='/login' className='btn btn-outline-success'>
              Masuk
            </Link>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
