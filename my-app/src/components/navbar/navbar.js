import "./navbar.css";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <Navbar bg='white' expand='md'>
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
          <Link to='/login' className='btn btn-outline-success disabled'>
            Masuk
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default navbar;
