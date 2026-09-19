import React from "react";
import hero from "../../../assets/hero.jpg";
import { Link } from "react-router";
function Hero() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100%",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-black text-5xl font-bold">Watch Movies</h1>
          <p className="mb-5 text-lg text-red-800 font-bold ">
The fire keeps rising.
Step into a world where every story comes alive. From timeless classics to the hottest new blockbusters, explore a cinematic universe packed with action, comedy, drama, thriller, and everything in between.Your next obsession is just one movie away.
          </p>
          <button className="btn btn-dash  h-16 text-2xl text-white font-extrabold"><Link to="/movies">PagluDanceDance....</Link></button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
