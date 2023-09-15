import React from "react";
import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <section className="mb-9 font-primary">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://preview.colorlib.com/theme/cozastore/images/slide-03.jpg.webp)",
        }}
      >
        <div className="hero-overlay bg-opacity-20"></div>
        <div className="hero-content  text-start justify-start text-neutral-content">
          <div className="">
            <h1 className="mb-5 md:text-5xl text-3xl font-bold text-white cursor-pointer hover:text-red-400">
              Semi-Urban – Your One-Stop Online Shop
            </h1>
            <p className="mb-5 max-w-sm text-gray-900">
              Experience hassle-free online shopping with our wide selection of
              products at unbeatable prices. From fashion to electronics, we’ve
              got you covered with amazing deals and discounts.
            </p>
            <Link to="">
              <button className="btn btn-primary hover:bg-red-400 mb-5 font-primary">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
