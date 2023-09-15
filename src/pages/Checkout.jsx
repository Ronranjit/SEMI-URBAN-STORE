import React, { useState } from "react";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";
import { Navigate, useNavigate } from "react-router-dom";

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cardNumber: 0,

    address: "",
    zip: 0,
  });

  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { name, email, cardNumber, address, zip } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const registerData = {
      name,
      email,
      cardNumber,
      address,

      zip,
    };
    dispatch(register(registerData));
    toast.success("Your order has been successfully placed");
    navigate("/");
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <section className="mb-20">
      <div className="flex flex-col w-full lg:flex-row">
        <div className="grid flex-grow   place-items-center">
          {/* try */}
          <div class="mt-10  px-4 pt-8 lg:mt-0 font-primary w-3/5 mx-auto">
            <p class="text-2xl font-medium text-center mb-4">Payment Details</p>
            <p class="text-gray-400 text-sm text-center mb-6">
              Complete your order by providing your payment details.
            </p>
            <form onSubmit={onSubmit}>
              <div class="">
                <label for="email" class="mt-4 mb-2 block text-sm font-medium">
                  Email
                </label>
                <div class="relative">
                  <input
                    type="email"
                    class="w-full mb-5 border p-4 pe-12 text-sm  placeholder:text-sm"
                    placeholder="Enter email"
                    name="email"
                    value={email}
                    onChange={onChange}
                    id="email"
                    required
                  />
                </div>
                <label
                  for="cardNumber"
                  class="mt-4 mb-2 block text-sm font-medium"
                >
                  Card Holder
                </label>
                <div class="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    class="w-full mb-4 border p-4 pe-12 hover:outline-none text-sm  placeholder:text-sm"
                    placeholder="Your full name here"
                    value={name}
                    onChange={onChange}
                  />
                </div>
                <label
                  for="cardNumber"
                  class="mt-4 mb-2 block text-sm font-medium"
                >
                  Card Number
                </label>
                <div class="flex">
                  <input
                    id="cardNumber"
                    value={cardNumber}
                    onChange={onChange}
                    name="cardNumber"
                    type="number"
                    required
                    class="w-full mb-4 border p-4 pe-12 hover:outline-none text-sm  placeholder:text-sm"
                  />
                </div>
                <label
                  for="billing-address"
                  class="mt-4 mb-2 block text-sm font-medium"
                >
                  Billing Address
                </label>
                <div class="flex flex-col sm:flex-row">
                  <div class="relative flex-shrink-0 sm:w-7/12">
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={address}
                      onChange={onChange}
                      class="w-full  border hover:outline-none p-4 pe-12 text-sm  placeholder:text-sm"
                      placeholder="Street Address"
                      required
                    />
                  </div>

                  <input
                    type="number"
                    name="zip"
                    id="zip"
                    value={zip}
                    onChange={onChange}
                    class="w-full  border p-4 pe-12 text-sm  placeholder:text-sm hover:outline-none "
                    placeholder="ZIP"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                class="inline-block rounded-sm bg-black w-full mt-9 hover:bg-blue-300 px-5 py-3 text-sm font-medium text-white"
              >
                pay
              </button>
            </form>
          </div>

          {/* try */}
        </div>

        <div className="grid flex-grow card  place-items-center">
          <img
            src="https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fHNtaWxpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Checkout;
