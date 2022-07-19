import { useOutletContext, Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import { useState, useEffect } from "react";
import "./kelolaBerita.css";
const KelolaBerita = () => {
  const [berita, setBerita] = useState([]);
  const [show, setShow] = useState(false);
  const [image, setImage] = useState("");
  useEffect(() => {
    getBerita();
  });

  const axiosJWT = useOutletContext();

  const getBerita = async () => {
    const response = await axiosJWT.get("http://localhost:8080/get-berita");
    setBerita(response.data);
  };

  function textLimiter(text) {
    let content = text.split(" ").splice(0, 10).join(" ");
    return content + "...";
  }

  const handleDelete = async (id) => {
    await axiosJWT.delete(`http://localhost:8080/berita/${id}`);
    console.log("berhasil hapus data");
  };

  const handleEdit = () => {};

  const showImage = (image) => {
    setShow(true);
  };

  const beritaIsi = berita.map((berita, number) => {
    number++;
    
    return (
      <tr key={berita._id} className='tableRow'>
        <td>{number++}</td>
        <td> {berita.judul}</td>
        <td> {textLimiter(berita.desc)}</td>
        <td>
          <button
            className='btn btn-primary'
            onClick={() => {
              console.log(berita);
            }}
          >
            lihat foto
          </button>
        </td>
        <td>
          <button
            className='btn btn-success commandButton me-2'
            onClick={handleEdit}
          >
            Edit
          </button>
          <button
            className='btn btn-danger commandButton'
            onClick={() => {
              handleDelete(berita._id);
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div className='kelolaBerita p-3'>
      <h2 className='title'>Kelola Berita</h2>
      <Link to='/admin/tambah-berita' className='btn btn-success'>
        Tambah Berita
      </Link>
      <div
        className={show ? "model show" : "model"}
        onClick={() => {
          setShow(false);
        }}
      >
        <img src={image} alt='foto kegiatan' />
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Judul</th>
            <th>Isi</th>
            <th>foto</th>
            <th>Perintah</th>
          </tr>
        </thead>
        <tbody>{beritaIsi}</tbody>
      </Table>
    </div>
  );
};

export default KelolaBerita;
