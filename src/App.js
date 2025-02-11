// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Nano from "./Components/nano"; // Navbar
// import Home from "./Pages/Home";
// import TopRated from "./Pages/Toprated";
// import Upcoming from "./Pages/Upcoming";
// import PopularMovies from "./Components/Popularmovies";
// import MovieList from "./Pages/MovieList";
// import MovieDetails from "./Pages/Moviedetails";
// import SearchResults from "./Pages/SearchResult"; // SearchResults page

// function App() {
//   const [topRatedMovies, setTopRatedMovies] = useState([]);
//   const [upcomingMovies, setUpcomingMovies] = useState([]);
//   const [popularMovies, setPopularMovies] = useState([]);
//   const [category, setCategory] = useState(""); // To track the current category

//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         // Fetch Popular Movies
//         const popularResponse = await fetch(
//           "https://api.themoviedb.org/3/movie/popular?api_key=0b378a0597d810f0568cefb2b7831a85"
//         );
//         const popularData = await popularResponse.json();
//         setPopularMovies(popularData.results);

//         // Fetch Top Rated Movies
//         const topRatedResponse = await fetch(
//           "https://api.themoviedb.org/3/movie/top_rated?api_key=0b378a0597d810f0568cefb2b7831a85"
//         );
//         const topRatedData = await topRatedResponse.json();
//         setTopRatedMovies(topRatedData.results);

//         // Fetch Upcoming Movies
//         const upcomingResponse = await fetch(
//           "https://api.themoviedb.org/3/movie/upcoming?api_key=0b378a0597d810f0568cefb2b7831a85"
//         );
//         const upcomingData = await upcomingResponse.json();
//         setUpcomingMovies(upcomingData.results);
//       } catch (error) {
//         console.error("Error fetching movies:", error);
//       }
//     };

//     fetchMovies();
//   }, []);

//   return (
//     <Router>
//       <Nano setCategory={setCategory} />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route
//           path="/top-rated"
//           element={<MovieList movies={topRatedMovies} category={category} />}
//         />
//         <Route
//           path="/upcoming"
//           element={<MovieList movies={upcomingMovies} category={category} />}
//         />
//         <Route
//           path="/popular"
//           element={<MovieList movies={popularMovies} category={category} />}
//         />
//         <Route path="/movie/:id" element={<MovieDetails />} />
//         <Route path="/search" element={<SearchResults />} />{" "}
//         {/* Add search route */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;
