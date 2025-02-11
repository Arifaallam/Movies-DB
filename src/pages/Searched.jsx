import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
// import MovieDetails from "../components/MovieDetails";
import SearchedMovieDetails from "../components/SearchedMovieDetails";
import Pagination from "../components/Pagination";
import { MOVIE_APi_KEY } from "../Variables";

// API KEY OF THE DB
const API_KEY = MOVIE_APi_KEY;

const Searched = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const { query } = useParams();

  useEffect(() => {
    const fetchdata = async () => {
      await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}`
      )
        .then((response) => response.json())
        .then((d) => setData(d?.results));
    };

    fetchdata();
  }, [query, page]);

  if (data.length == 0) {
    return (
      <div className="bg-black h-screen flex justify-center items-center">
        <h1 className="text-2xl md:text-4xl text-neutral-300">
          No Such Movies
        </h1>
      </div>
    );
  }

  return (
    <div className="py-24 md:py-28 px-10 min-h-screen text-white bg-black flex flex-col justify-center items-center">
      <div className="mb-4 -mt-5 md:-mt-5">
        <h2 className="text-2xl md:text-4xl">Search : {query} results</h2>
      </div>
      <SearchedMovieDetails movie={data} />
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};

export default Searched;
