import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="">
      <div className="flex justify-center h-screen  text-3xl font-semibold  text-black">
        <div className="flex justify-center items-center text-center h-full">
          <div>
            <p className="text-8xl mb-5">Oops!</p>
            <p className="mb-5 text-6xl">404</p>
            <p className="mb-5">page not found</p>
            <Link to="/">
              <button className="btn btn-primary ">back to home </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
