import { useEffect, useState } from "react";
import Movie from "../component/movieContent.";
const MOVIE_URL =
  "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year&language=ko-KR&page=1";

function Home() {
  const [movieList, setMovieLisst] = useState([]);
  const [isLoading, setLoading] = useState(true);

  async function getMovies() {
    const response = await fetch(MOVIE_URL);
    const jsonResponse = await response.json();

    setMovieLisst(jsonResponse.data.movies);
    setLoading(false);
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {isLoading ? <h1>Loading...</h1> : null}
      {movieList.map((movie) => (
        <Movie
          id={movie.id}
          title={movie.title}
          coverImg={movie.medium_cover_image}
          genres={movie.genres}
        />
      ))}
    </div>
  );
}

export default Home;
