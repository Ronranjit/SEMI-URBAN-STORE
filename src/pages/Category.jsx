import React from "react";

const Category = () => {
  return (
    <section>
      <div className="flex justify-center font-primary">
        <div className="md:grid md:grid-cols-3 md:gap-3">
          {/* item-1 */}
          <div
            className="hero relative w-96 border-gray-300 border h-64 "
            style={{
              backgroundImage:
                "url(https://preview.colorlib.com/theme/cozastore/images/banner-01.jpg.webp)",
            }}
          >
            <div className="hero-overlay justify-start bg-white bg-opacity-10"></div>
            <div className="   ">
              <div className="absolute top-4 left-7 capitalize">
                <h1 className="mb-2 text-3xl  font-bold  text-black">women</h1>
                <p className="mb-5 max-w-sm text-black ">spring 2023</p>
              </div>
            </div>
          </div>
          {/* item-2 */}
          <div
            className="hero relative w-96 border-gray-300 border h-64"
            style={{
              backgroundImage:
                "url(https://preview.colorlib.com/theme/cozastore/images/banner-02.jpg.webp)",
            }}
          >
            <div className="hero-overlay justify-start bg-white bg-opacity-10"></div>
            <div className="   ">
              <div className="absolute top-4 left-7 capitalize">
                <h1 className="mb-2 text-3xl  font-bold  text-black">men</h1>
                <p className="mb-5 max-w-sm text-black ">spring 2023</p>
              </div>
            </div>
          </div>
          {/* item-3 */}
          <div
            className="hero relative w-96 border-gray-300 border h-64"
            style={{
              backgroundImage:
                "url(https://preview.colorlib.com/theme/cozastore/images/banner-03.jpg.webp)",
            }}
          >
            <div className="hero-overlay justify-start bg-white bg-opacity-10"></div>
            <div className="   ">
              <div className="absolute top-4 left-7 capitalize">
                <h1 className="mb-2 text-3xl  font-bold  text-black">
                  accesories
                </h1>
                new trend
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
