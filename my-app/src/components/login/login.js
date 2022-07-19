import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import axios from "axios";
const Login = () => {
  const apiUrl = "http://localhost:8080/login";
  const idRef = useRef();
  const errRef = useRef();
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [pass, setPass] = useState("");
  const [err, setErr] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setErr("");
  }, [id, pass]);

  const handleSubmit = async (event) => {
    await event.preventDefault();
    try {
      await axios({
        url: "/login",
        method: "post",
        baseURL: "http://localhost:8080",
        data: { id: id, password: pass },
        withCredentials: true,
      });
      navigate("/admin/dashboard", { replace: true });
    } catch (error) {
      if (error.response) {
        setErr(error.response.data.msg);
      }
    }
  };
  return (
    <div className='login text-center'>
      <p ref={errRef} className={err ? "alert alert-danger" : "d-none"}>
        {err}
      </p>
      <h2 className='title mb-4'>Login Sebagai Admin</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label htmlFor='id' className='form-label'>
            Masukkan Id
          </label>
          <input
            type='text'
            className='form-control'
            id='id'
            autoComplete='off'
            ref={idRef}
            onChange={(e) => setId(e.target.value)}
            required
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='pass' className='form-label'>
            Masukkan password
          </label>
          <input
            type='password'
            className='form-control'
            id='pass'
            onChange={(e) => setPass(e.target.value)}
            required
          />
        </div>

        <button type='submit' className='btn btn-success'>
          Masuk
        </button>
      </form>
    </div>
  );
};

export default Login;
