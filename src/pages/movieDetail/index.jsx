import React, { useEffect, useState } from "react";
import "./movieDetail.css";
import { useLocation, useParams } from "react-router-dom";
import { fetchCastDetails, fetchMovieDetails } from "../../utils/constants";

const Index = () => {
  const [cast, setCast] = useState([]);
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const location = useLocation();

  const getCastDetails = async () => {
    setIsLoading(true);
    const result = await fetchCastDetails(id);
    if (result.success === false) {
      setError(result.message);
      setIsLoading(false);
      return;
    }
    setIsLoading(false);
    setCast(result?.data);
  };

  const getMovieDetails = async () => {
    setIsLoading(true);
    const result = await fetchMovieDetails(id);
    if (result.success === false) {
      setError(result.message);
      setIsLoading(false);
      return;
    }
    setIsLoading(false);
    setMovie(result?.data);
  };

  useEffect(() => {
    const movieDetail = location.state?.movie;
    setMovie(movieDetail);
    getCastDetails();
    getMovieDetails();
  }, []);

  return (
    <div>
      {movie ? (
        <div className="movie-details">
          <div
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})`,
            }}
            className="movie-banner"
          >
            <div className="overlay"></div>
            <div className="content">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="movie-cover"
              />
              <div className="movie-info">
                <h2>{movie.title}</h2>
                <p>
                  <strong>Rating : </strong> {movie.vote_average}
                </p>
                <p>
                  <strong>Runtime : </strong> {movie.runtime} mins
                </p>
                <p>
                  <strong>Vote Count : </strong> {movie.vote_count}
                </p>
                <p>
                  <strong>Release Date : </strong> {movie.release_date}
                </p>
                <p>
                  <strong>Overview : </strong> {movie.overview}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Movie details not available. Please go back.</p>
      )}

      <div className="cast-section">
        <h3>Cast</h3>
        {error ? (
          <p className="error">{error}</p>
        ) : (
          <div className="cast-list">
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              cast.map((actor) => (
                <div key={actor.id} className="cast-card">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                    alt={actor.name}
                    className="cast-image"
                  />
                  <p className="cast-name">{actor.name}</p>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
