import "./guru.css";
import GuruCard from "./guruCards/guruCard";
import guru1 from "../../assets/img/guru/img1.jpg";
import guru2 from "../../assets/img/guru/img2.jpg";
import guru3 from "../../assets/img/guru/img3.jpg";
import guru4 from "../../assets/img/guru/img4.jpg";
import guru5 from "../../assets/img/guru/img5.jpg";

const guru = () => {
  return (
    <div>
      <h2 className='title text-center mb-5'>Guru Kami</h2>
      <div className='gurus'>
        <GuruCard
          name='guru'
          description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, itaque.'
          src={guru1}
        />
        <GuruCard
          name='guru'
          description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, itaque.'
          src={guru2}
        />
        <GuruCard
          name='guru'
          description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, itaque.'
          src={guru3}
        />
        <GuruCard
          name='guru'
          description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, itaque.'
          src={guru4}
        />
        <GuruCard
          name='guru'
          description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, itaque.'
          src={guru5}
        />
        <GuruCard
          name='guru'
          description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, itaque.'
          src={guru5}
        />
      </div>
    </div>
  );
};

export default guru;
