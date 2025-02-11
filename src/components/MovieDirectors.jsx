/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const MoviesDirectors = ({ movie }) => {
  return (
    <>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:max-w-6xl">
        {movie[0]?.map((mov, index) => {
          const { id, title, poster_path, vote_average } = mov;

          return (
            <Link
              to={`/movie/${id}`}
              key={index}
              className="text-white hover:bg-white/5 rounded-md duration-300 p-4 flex flex-col items-center hover:cursor-pointer hover:shadow-2xl border border-neutral-800"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt="image"
                className="rounded-md h-60"
              />
              <h1 className="text-xl mt-3 text-center">{title}</h1>
              <h1 className="text-sm mt-2">Rating : {vote_average}</h1>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default MoviesDirectors;
