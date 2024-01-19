import propType from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, title, coverImg, genres }) {
  return (
    <div>
      <Link to={`/movie/${id}`}>
        <h1>{title}</h1>
      </Link>
      <img src={coverImg} alt=""></img>
      <ul>
        {genres.map((value) => (
          <li>{value}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.prototype = {
  id: propType.string.isRequired,
  title: propType.string.isRequired,
  coverImg: propType.string.isRequired,
  genres: propType.arrayOf(propType.string),
};

export default Movie;
