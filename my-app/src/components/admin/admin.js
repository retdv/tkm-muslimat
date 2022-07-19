import { useState, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import axios from "axios";
import jwtDecode from "jwt-decode";

const Admin = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");

  useEffect(() => {
    refreshToken();
  }, []);

  const refreshToken = async () => {
    try {
      const response = await axios({
        url: "/token",
        method: "get",
        baseURL: "http://localhost:8080",
        withCredentials: true,
      });
      await setToken(response.data);
      const decoded = jwtDecode(token);
      setExpire(decoded.exp);
    } catch (error) {
      if (error.response) {
        navigate("/", { replace: true });
      }
    }
  };

  const axiosJWT = axios.create();

  axiosJWT.interceptors.request.use(async (config) => {
    const response = await axios({
      url: "/token",
      method: "get",
      baseURL: "http://localhost:8080",
      withCredentials: true,
    });
    config.headers["Authorization"] = `Bearer ${response.data}`;
    await setToken(response.data);
    return config;
  });
  return <Outlet context={axiosJWT} />;
};

export default Admin;
