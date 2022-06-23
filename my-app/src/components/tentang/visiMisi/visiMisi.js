import { Container } from "react-bootstrap";
import ReadMoreBtn from "../readMoreBtn";
import "./visiMisi.css";

const VisiMisi = (props) => {
  return (
    <Container className='visiMisiContainer'>
      <h2 className='title'>Visi & Misi</h2>
      <p className='text'>{props.visiMisiText}</p>
      <div className='mx-auto'>
        <ReadMoreBtn show={true} />
      </div>
    </Container>
  );
};

export default VisiMisi;
