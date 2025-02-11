/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import MovieCastCard from "./MovieCastCard";

const MovieCast = ({ id, apiKey }) => {
  const [movieCast, setMovieCast] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      await fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=en-US`
      )
        .then((response) => response.json())
        .then((data) => setMovieCast([data.cast]));
    };

    fetchMovie();
  }, [id, apiKey]);
  // console.log(movieCast);

  return (
    <div className="md:px-10">
      <h1 className="text-neutral-300 text-3xl md:text-4xl pt-4 ml-8 md:ml-10">
        Cast
      </h1>

      <MovieCastCard cast={movieCast[0]} />
      
    </div>
  );
};

export default MovieCast;
