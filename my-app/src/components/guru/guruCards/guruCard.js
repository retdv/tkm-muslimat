import "./guruCard.css";

const guruCard = (props) => {
  return (
    <div className='guruCard'>
      <img src={props.src} className='cardImage' alt='foto guru' />
      <h5 className='cardTitle fw-bold mt-2'>{props.name}</h5>
      <p className='cardCaption'>{props.description}</p>
    </div>
  );
};

export default guruCard;
