import "./sambutan.css";
import { Container } from "react-bootstrap";

const Sambutan = () => {
  return (
    <Container fluid className='sambutanContainer'>
      <div className="content">
      <h2>Sambutan Kepala Sekolah</h2>
      <br />
      <p>
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas vitae
        commodi provident culpa, ea atque odit corrupti quam ut vel! Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Ratione ipsam voluptatum
        laudantium distinctio deserunt earum blanditiis odio dignissimos totam
        ipsa amet aliquam veniam soluta, quidem nostrum impedit atque eius quasi
        porro quis obcaecati! Rem, earum autem ab nulla, vel voluptatibus
        possimus aliquam quas magni, enim aspernatur deleniti numquam modi
        assumenda."
      </p>
      </div>
    </Container>
  );
};

export default Sambutan;
