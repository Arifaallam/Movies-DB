import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCast from "../components/MovieCast";
import { MOVIE_APi_KEY } from "../Variables";
import MovieCrew from "../components/MovieCrew";

// API KEY OF THE DB
const API_KEY = MOVIE_APi_KEY;
// const API = import.meta.env.MOVIE_API_KEY;

// console.log(API);

const SingleMoviePage = () => {
  const [movie, setMovie] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const fetchdata = async () => {
      fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
      )
        .then((response) => response.json())
        .then((data) => setMovie(data));
    };

    fetchdata();
  }, [id]);

  if (movie.length == 0) {
    return (
      <div className="bg-black flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <div className="mt-20 md:mt-16 lg:m-20 p-8 hover:bg-white/5 duration-1000 relative md:rounded-lg shadow-lg shadow-white border border-neutral-800">
        {/* PHOTO DIV */}
        <div className="flex gap-4">
          {/* PHOTO */}
          <div className="flex-none">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt=""
              className="h-48 sm:h-60 shadow-2xl"
            />
          </div>
          {/* DETAILS */}
          <div className="ml-6">
            <h1 className="text-neutral-300 font-bold text-3xl md:text-4xl md:max-w-md">
              {movie.title}
            </h1>
            <p className="text-blue-400 font-semibold text-base md:text-2xl">
              Rating : {movie.vote_average}
            </p>
            <div className="mt-2 flex justify-start items-center gap-4 text-neutral-300">
              <p className="p-1 border border-neutral-300 w-fit text-sm sm:text-base">
                {movie.runtime} mins
              </p>
              {/* {movie.genres.map((gen, i) => (
                <p key={i}>{gen} </p>
              ))} */}
            </div>
            <p className="mt-2 text-base text-neutral-300">
              Release Date : {Date(movie.release_date).slice(4, 15)}
            </p>
          </div>
        </div>
        <h1 className="mt-4 text-2xl md:text-3xl font-bold text-neutral-300">
          Overview
        </h1>
        <p className="max-w-xl md:max-w-2xl mt-2 text-justify text-sm md:text-lg text-neutral-300">
          {movie.overview}
        </p>

        {/* RIGHT IMAGE */}
        <div className="absolute top-8 right-8 hidden xl:block">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
            alt=""
            className="h-full w-full object-cover rounded-md shadow-2xl"
          />
        </div>
      </div>

      {/* CAST DETAILS */}
      <MovieCast id={id} apiKey={API_KEY} />

      {/* CREW DETAILS */}
      <MovieCrew id={id} apiKey={API_KEY} />
    </div>
  );
};

export default SingleMoviePage;
