import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import "./navbar.css";

const navLinks = [
  {
    to: "/",
    text: "Popular",
  },
  {
    to: "/top-rated",
    text: "Top Rated",
  },
  {
    to: "/upcoming",
    text: "Upcoming",
  },
];

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search/${searchTerm}`);
    }
  };

  return (
    <nav className="nano">
      <h1>
        <Link className="logo" to="/">
          MovieDB
        </Link>
      </h1>
      <div className="nano-links">
        {navLinks.map((link, id) => (
          <Link key={id} to={link.to} className="nano-link">
            {link.text}
          </Link>
        ))}
      </div>
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button">
          <CiSearch />
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
