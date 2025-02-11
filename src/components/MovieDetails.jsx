  /* eslint-disable react/prop-  const MovieDetails = ({ movie }) => {
    return (
      <>
        <div className="text-neutral-300 flex overflow-x-scroll scrollbar-hidden py-2 md:py-5 md:px-4 mb-10 md:border border-neutral-900 mt-4">
          {movie ? (
            <div className="flex-none flex flex-col items-center justify-center h-full rounded-lg shadow-2xl">
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie?.profile_path}`}
                alt={movie?.title || movie?.name}
                className="rounded-3xl object-contain w-40 h-40 md:h-60 md:w-60 md:hover:scale-105 duration-300"
              />
              <p className="text-xl mt-4">{movie?.name || movie?.title}</p>
              <p className="text-sm w-32 text-center">
                Character: {movie?.character || "N/A"}
              </p>
            </div>
          ) : (
            <p className="text-neutral-400">No data found</p>
          )}
        </div>
      </>
    );
  };

  export default MovieDetails;
