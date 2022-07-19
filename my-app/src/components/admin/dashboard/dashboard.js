import { Link } from "react-router-dom";
import "./dashboard.css";
const Dashboard = () => {
  return (
    <div className='dashboard'>
      <h3 className='title'>Selamat Datang di Halaman Admin</h3>
      <p>
        <strong>kelola data:</strong>
      </p>
      <div className='links'>
        <Link to='/admin/kelola-guru' className='btn btn-success me-3'>
          Kelola data Guru
        </Link>
        <Link to='/admin/kelola-berita' className='btn btn-success'>
          Kelola Berita
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
