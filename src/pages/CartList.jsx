import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  calculateTotal,
  cartMinus,
  cartPlus,
  clearCart,
  decreaseCart,
  increaseCart,
  removeFromCart,
} from "../features/cart/cartSlice";

const CartList = () => {
  const { cart, totalPrice } = useSelector((state) => state.shoppingCart);

  const dispatch = useDispatch();

  const shipping = 8.0;

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cart]);
  const onRemove = (cartItem) => {
    window.confirm("Are you sure you want to delete");
    dispatch(removeFromCart(cartItem));
  };
  const onDecrease = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  };
  const onIncrease = (cartItem) => {
    dispatch(increaseCart(cartItem));
  };
  const onClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <section className="font-primary">
      <div>
        <div>
          {cart.length === 0 ? (
            <div className="flex justify-center h-screen  text-3xl font-semibold  text-black">
              <div className="flex justify-center items-center text-center h-full">
                <div>
                  <p className="text-8xl mb-5">Oops!</p>
                  <p className="mb-5">your cart is empty</p>
                  <Link to="/">
                    <button className="btn btn-primary ">start shopping</button>
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div>
                <div className="">
                  <section class=" py-12 sm:py-16 lg:py-20">
                    <div class="mx-auto px-4 sm:px-6 lg:px-8">
                      <div class="flex items-center justify-center">
                        <h1 class="text-2xl font-semibold text-gray-900">
                          Your Cart
                        </h1>
                      </div>

                      <div class="mx-auto mt-8 max-w-2xl md:mt-12">
                        <div class="bg-white shadow">
                          <div class="px-4 py-6 sm:px-8 sm:py-10">
                            <div class="flow-root">
                              <ul class="-my-8">
                                {cart.map((cartItem) => (
                                  <li class="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                                    <div class="shrink-0">
                                      <img
                                        class="h-24 w-24 max-w-full rounded-lg object-cover"
                                        src={cartItem.image[0].url}
                                        alt=""
                                      />
                                    </div>

                                    <div class="relative flex flex-1 flex-col justify-between">
                                      <div class="sm:col-gap-5 sm:grid sm:grid-cols-2">
                                        <div class="pr-8 sm:pr-5">
                                          <p class="text-base font-semibold text-gray-900">
                                            {cartItem.name}
                                          </p>
                                          <p class="mx-0 mt-1 mb-0 text-sm text-gray-400">
                                            36EU - 4US
                                          </p>
                                        </div>

                                        <div class="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                                          <p class="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">
                                            ${cartItem.price}
                                          </p>

                                          <div class="sm:order-1">
                                            <div class="mx-auto flex h-8 items-stretch text-gray-600">
                                              <button
                                                onClick={() =>
                                                  onDecrease(cartItem)
                                                }
                                                class="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-black hover:text-white"
                                              >
                                                -
                                              </button>
                                              <div class="flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition">
                                                {cartItem.cartQuantity}
                                              </div>
                                              <button
                                                onClick={() =>
                                                  onIncrease(cartItem)
                                                }
                                                class="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-black hover:text-white"
                                              >
                                                +
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      <div class="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                                        <button
                                          onClick={() => onRemove(cartItem)}
                                          type="button"
                                          class="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900"
                                        >
                                          <svg
                                            class="h-5 w-5"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                          >
                                            <path
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                              stroke-width="2"
                                              d="M6 18L18 6M6 6l12 12"
                                              class=""
                                            ></path>
                                          </svg>
                                        </button>
                                      </div>
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div class="mt-6 border-t border-b py-2">
                              <div class="flex items-center justify-between">
                                <p class="text-sm text-gray-400">Subtotal</p>
                                <p class="text-lg font-semibold text-gray-900">
                                  ${totalPrice}.00
                                </p>
                              </div>
                              <div class="flex items-center justify-between">
                                <p class="text-sm text-gray-400">Shipping</p>
                                <p class="text-lg font-semibold text-gray-900">
                                  ${shipping}
                                </p>
                              </div>
                            </div>
                            <div class="mt-6 flex items-center justify-between">
                              <p class="text-sm font-medium text-gray-900">
                                Total
                              </p>
                              <p class="text-2xl font-semibold text-gray-900">
                                <span class="text-xs font-normal text-gray-400">
                                  USD
                                </span>{" "}
                                {totalPrice + shipping}
                              </p>
                            </div>

                            <div class="mt-6 text-center">
                              <Link to="/checkout">
                                <button
                                  type="button"
                                  class="group mb-5 inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
                                >
                                  Checkout
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="group-hover:ml-8 ml-4 h-6 w-6 transition-all"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                                    />
                                  </svg>
                                </button>
                              </Link>
                              <button
                                onClick={() => onClearCart()}
                                type="button"
                                class="group border inline-flex w-full items-center justify-center rounded-md bg-blue-300 px-6 py-4  font-semibold capitalize text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-white hover:text-black"
                              >
                                clear cart
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CartList;
