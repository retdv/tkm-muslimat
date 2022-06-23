import "./beritaCard.css";

const beritaCard = (props) => {
  return (
    <div className='beritaCard'>
      <img src={props.src} alt='berita' className='cardImage' />
      <h5 className='cardTitle fw-bold mt-2'>Card Title</h5>
      <p className='cardCaption'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus,
        consequuntur quaerat praesentium atque at fuga? Lorem ipsum dolor sit
        amet.
      </p>
    </div>
  );
};

export default beritaCard;
