import { Carousel } from "react-bootstrap";
import "./carousel.css";
import image1 from "../../assets/img/carousel/carousel1.jpg";
import image2 from "../../assets/img/carousel/carousel2.jpg";
import image3 from "../../assets/img/carousel/carousel3.jpg";

const carousel = () => {
  return (
    <Carousel>
      <Carousel.Item className='carouselItem'>
        <img className='d-block w-100' src={image1} alt='First slide' />
      </Carousel.Item>
      <Carousel.Item className='carouselItem'>
        <img className='d-block w-100' src={image2} alt='Second slide' />
      </Carousel.Item>
      <Carousel.Item className='carouselItem'>
        <img className='d-block w-100' src={image3} alt='Third slide' />
      </Carousel.Item>
    </Carousel>
  );
};

export default carousel;
