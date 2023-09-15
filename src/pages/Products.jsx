import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../features/products/productSlice";
import { Link } from "react-router-dom";

const Products = () => {
  const { products, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.cloth
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <section className="container mx-auto ">
      <div className="flex justify-start px-11 md:mt-20  ">
        <h1 className="text-4xl font-bold uppercase ">product overview</h1>
      </div>

      <div className="md:grid md:grid-cols-3 md:gap-20 mt-8 p-8">
        {products.map((item) => {
          return (
            <div className="flex justify-center mb-8">
              {/* old one */}
              <div className="">
                <div className=" ">
                  <div className="  ">
                    <div className="font-primary hover:bg hover01">
                      <Link
                        to={{
                          pathname: `/product/${item.id}`,
                          state: {
                            name: item.name,
                            company: item.company,
                            price: item.price,
                            colors: item.colors,
                            image: item.image,
                            description: item.description,
                            category: item.category,
                          },
                        }}
                      >
                        <img
                          className="bg-transparent mb-4 hover:opacity-70"
                          src={item.image}
                          alt=""
                        />
                      </Link>

                      <div className="flex justify-between">
                        <p className=" capitalize text-gray-400">{item.name}</p>
                        <div className="rating">
                          <input
                            type="radio"
                            name="rating-3"
                            className="mask mask-heart bg-b border"
                          />
                        </div>
                      </div>
                      <p className="text-gray-600">$ {item.price}</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* old one end */}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Products;
