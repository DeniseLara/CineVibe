import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

function StarRating({ rating }) {
  // rating esperado 0-10, convertimos a 5 estrellas (0-5)
  const ratingOutOfFive = rating / 2;
  const fullStars = Math.floor(ratingOutOfFive);
  const halfStar = ratingOutOfFive - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className='star-rating' aria-label={`Rating: ${rating} out of 10`} role="img">
      {[...Array(fullStars)].map((_, i) => <FaStar key={`full-${i}`} color="#FFD700" />)}
      {halfStar && <FaStarHalfAlt key="half" color="#FFD700" />}
      {[...Array(emptyStars)].map((_, i) => <FaRegStar key={`empty-${i}`} color="#FFD700" />)}
    </div>
  );
}

export default StarRating;
