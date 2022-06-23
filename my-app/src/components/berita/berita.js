import BeritaCard from "./berita-cards/beritaCard";
import berita1 from "../../assets/img/berita/kegiatan1.jpg";
import berita2 from "../../assets/img/berita/kegiatan2.jpg";
import berita3 from "../../assets/img/berita/kegiatan3.jpg";
import berita4 from "../../assets/img/berita/kegiatan4.jpg";
import "./berita.css";

const berita = (props) => {
  return (
    <div className='berita'>
      <h2 className='text-center my-4'>{props.title}</h2>
      <div className='beritaCards'>
        <BeritaCard src={berita1} />
        <BeritaCard src={berita2} />
        <BeritaCard src={berita3} />
        <BeritaCard src={berita4} />
      </div>
    </div>
  );
};

export default berita;
