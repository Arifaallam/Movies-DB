import React, { useState, useEffect } from "react";
import { fetchMovies } from "../../utils/constants";
import { useNavigate } from "react-router-dom";
import Pagination from "../../components/pagination";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const getMovies = async () => {
    setIsLoading(true);
    const result = await fetchMovies("upcoming", page);
    if (result.success === false) {
      setError(result.message);
      setIsLoading(false);
      return;
    }
    setIsLoading(false);
    setMovies(result?.data);
  };

  useEffect(() => {
    getMovies();
  }, [page]);

  const handleMovieClick = (movie) => {
    navigate(`/movie/${movie.id}`, { state: { movie } });
  };

  return (
    <>
      <h2 className="title">Upcoming Movies</h2>
      {error && <p className="error">{error}</p>}
      <div className="movies-list">
        {movies?.results?.length === 0 && !isLoading && !error && (
          <p>No results found</p>
        )}
        {isLoading && <p>Loading...</p>}
        {movies?.results?.map((movie) => (
          <div
            key={movie.id}
            className="movie-card"
            onClick={() => handleMovieClick(movie)}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="movie-image"
            />
            <h3>{movie.title}</h3>
          </div>
        ))}
      </div>
      <Pagination
        totalPage={movies?.total_pages}
        page={page}
        setPage={setPage}
      />
    </>
  );
};

export default Home;
