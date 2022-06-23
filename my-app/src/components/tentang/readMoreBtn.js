import { Link } from "react-router-dom";

const readMoreBtn = (props) => {
  if (props.show) {
    return (
      <Link to='/tentang' className='btn btn-outline-success'>
        Read More
      </Link>
    );
  }
};

export default readMoreBtn;
