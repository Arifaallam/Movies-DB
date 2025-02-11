import { useEffect, useState } from "react";
import MovieDetails from "../components/MovieDetails";
import Pagination from "../components/Pagination";
import { MOVIE_APi_KEY } from "../Variables";

// API KEY OF THE DB
const API_KEY = MOVIE_APi_KEY;

const TopRatedPage = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(
      ` https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`
    )
      .then((response) => response.json())
      .then((data) => setMovies([data.results]));
  }, [page]);

  if (movies.length == 0) {
    return (
      <div className="bg-black flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="py-24 md:py-28 px-10 h-full text-white bg-black flex flex-col justify-center items-center">
      <div className="mb-4 -mt-5 md:-mt-5">
        <h2 className="text-2xl md:text-4xl">Top-Rated</h2>
      </div>
      <MovieDetails movie={movies} />
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};

export default TopRatedPage;
