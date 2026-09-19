import React from "react";
import { Link, useSearchParams } from "react-router";

function Navbar() {
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get("search") || "";

  const handleSearch = (e) => {
    setSearchParams({
      search: e.target.value,
    });
  };

  return (
    <div className="navbar bg-red-800 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-red-800 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/" className="text-xl font-semibold">Home</Link>
            </li>
            <li>
              <Link to="/movies" className="text-xl font-semibold">Movies</Link>
            </li>
          </ul>
        </div>

        <Link to="/" className="btn btn-ghost text-2xl font-bold">
          PagluShow
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/" className="text-xl font-semibold">Home</Link>
          </li>
          <li>
            <Link to="/movies" className="text-xl font-semibold">Movies</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end gap-4 ">
        {/* Search */}
        <label className="input input-bordered rounded-2xl bg-gray-800 flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m21 21-4.35-4.35m2.35-5.65a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
            />
          </svg>

          <input
            type="text"
            placeholder="Search movies..."
            value={search}
            onChange={handleSearch}
            className="w-32 text-black lg:w-48"
          />
        </label>

        <Link to="/movies" className="btn-black btn hidden rounded-2xl px-4 py-2 text-white lg:flex">
          Watch Movies
        </Link>
      </div>
    </div>
  );
}

export default Navbar;