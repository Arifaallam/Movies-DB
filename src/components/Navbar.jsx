/* eslint-disable react/prop-types */
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [nav, setNav] = useState(false);

  return (
    <>
      <nav className="bg-gray-800/90 backdrop-blur-sm text-gray-200 p-4 fixed top-0 left-0 w-full z-50 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4 md:px-20">
          <Link to="/" className="text-xl font-semibold">
            MovieDB
          </Link>
          <div className="space-x-4 md:flex items-center hidden">
            <Link to="/" className="hover:text-yellow-300 duration-300">
              Popular
            </Link>
            <Link to="/top-rated" className="hover:text-yellow-300 duration-300">
              Top Rated
            </Link>
            <Link to="/upcoming" className="hover:text-yellow-300 duration-300">
              Upcoming
            </Link>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
              className="text-neutral-300 px-4 py-1 rounded-full placeholder:text-center placeholder:text-neutral-500 outline-none border border-neutral-600 bg-transparent "
              placeholder="Search Movie..."
            />
            <Link
              className="bg-blue-500 text-white px-2 py-1 rounded-full"
              to={
                searchQuery.length > 0
                  ? `/search/${searchQuery.toLowerCase()}`
                  : "/"
              }
              onClick={() => {
                setSearchQuery("");
              }}
            >
              Search
            </Link>
          </div>
          <div className="md:hidden flex ">
            {nav ? (
              <FaTimes
                size={25}
                className="cursor-pointer z-10 hover:text-neutral-400 duration-200"
                onClick={() => {
                  setNav(!nav);
                }}
              />
            ) : (
              <FaBars
                size={25}
                onClick={() => {
                  setNav(!nav);
                }}
                className="cursor-pointer z-10 hover:text-neutral-400 duration-200"
              />
            )}

            {nav && (
              <ul className="flex flex-col justify-center items-center gap-6 absolute top-0 right-0 h-screen w-full text-neutral-400 bg-black/90">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                    }}
                    className="text-neutral-400 bg-transparent ml-10 px-1 py-1 rounded-sm text-center placeholder:text-center outline-none border-b-2 border-neutral-500"
                    placeholder="Search Movie..."
                  />
                  <Link
                    onClick={() => {
                      setNav(!nav);
                    }}
                    className="bg-blue-600 text-white text-base px-2 py-1 rounded-sm"
                    to={
                      searchQuery.length > 0
                        ? `/search/${searchQuery.toLowerCase()}`
                        : "/"
                    }
                  >
                    Search
                  </Link>
                </div>
                <Link
                  onClick={() => {
                    setNav(!nav);
                  }}
                  to="/"
                  className="hover:text-yellow-300 duration-300 text-xl"
                >
                  Popular
                </Link>
                <Link
                  onClick={() => {
                    setNav(!nav);
                  }}
                  to="/top-rated"
                  className="hover:text-yellow-300 duration-300 text-xl"
                >
                  Top Rated
                </Link>
                <Link
                  onClick={() => {
                    setNav(!nav);
                  }}
                  to="/upcoming"
                  className="hover:text-yellow-300 duration-300 text-xl"
                >
                  Upcoming
                </Link>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
