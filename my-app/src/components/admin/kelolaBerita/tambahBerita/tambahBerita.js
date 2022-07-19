import { Form } from "react-bootstrap";
import { useState } from "react";
import { useOutletContext, Link } from "react-router-dom";
const TambahBerita = () => {
  const [judul, setJudul] = useState("");
  const [desc, setDesc] = useState("");
  const [foto, setFoto] = useState(null);
  const axiosJWT = useOutletContext();
  const [success, setSuccess] = useState(null);
  const [err, setErr] = useState(null);

  const handleSubmit = async (e) => {
    await e.preventDefault();
    try {
      await axiosJWT({
        url: "/create-berita",
        method: "post",
        baseURL: "http://localhost:8080",
        data: { judul: judul, desc: desc, foto: foto },
        withCredentials: true,
      });
      setSuccess(
        <p>
          sukses membuat data{" "}
          <Link to='/admin/kelola-berita'>Kembali ke Dashboard</Link>
        </p>
      );
      setJudul("");
      setDesc("");
      setFoto([]);
    } catch (error) {
      console.error(error);
      setErr("gagal membuat data");
    }
  };

  const changeFoto = (event) => {
    setFoto(event.target.files[0]);
  };

  return (
    <div className='tambahBerita p-3'>
      <p className={success ? "alert alert-success" : "d-none"}>{success}</p>
      <p className={err ? "alert alert-danger" : "d-none"}>{err}</p>
      <Form onSubmit={handleSubmit}>
        <Form.Group className='mb-3' controlId='judul'>
          <Form.Label>Judul</Form.Label>
          <Form.Control
            type='text'
            placeholder='masukkan judul'
            onChange={(e) => setJudul(e.target.value)}
            value={judul}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='desc'>
          <Form.Label>Deskripsi</Form.Label>
          <Form.Control
            as='textarea'
            placeholder='masukkan deskripsi'
            rows={3}
            onChange={(e) => setDesc(e.target.value)}
            value={desc}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='foto'>
          <Form.Label>Masukkan foto</Form.Label>
          <Form.Control type='file' onChange={changeFoto} />
        </Form.Group>
        <button type='submit' className='btn btn-success'>
          Submit
        </button>
      </Form>
    </div>
  );
};

export default TambahBerita;
