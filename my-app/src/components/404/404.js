import { Link } from "react-router-dom";

const notFound = () => {
  return (
    <div className='container-fluid text-center' style={{ height: 270 }}>
      <h1>
        <strong>Halaman tidak ditemuakan</strong>
      </h1>
      <Link to='/'>kembali ke halaman home?</Link>
    </div>
  );
};

export default notFound;
