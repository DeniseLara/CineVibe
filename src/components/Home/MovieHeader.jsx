import { Link } from 'react-router-dom';
import { IoIosArrowRoundBack } from "react-icons/io";

function MovieHeader() {
  return (
    <Link to="/" className="back-arrow-link" title='go back to home page'>
      <div className="back-arrow">
        <IoIosArrowRoundBack />
      </div>
    </Link>
  );
}

export default MovieHeader;
