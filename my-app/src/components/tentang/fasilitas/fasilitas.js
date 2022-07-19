import "./fasilitas.css";
import ReadMoreBtn from "../readMoreBtn";

const fasilitas = (props) => {
  return (
    <div className='container'>
      <div className='fasilitas'>
        <h2 className='title'>Fasilitas</h2>
        <p className='text'>{props.fasilitasText}</p>
        <ReadMoreBtn show={props.showBtn} />
      </div>
      <div className='pendaftaran'>
        <h2 className='title'>Pendaftaran</h2>
        <p className='text'>{props.pendaftaranText}</p>
        <ReadMoreBtn show={props.showBtn} />
      </div>
    </div>
  );
};

export default fasilitas;
