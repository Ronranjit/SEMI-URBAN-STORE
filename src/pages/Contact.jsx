import React, { useState } from "react";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";
import { Navigate, useNavigate } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    personMessage: "",
  });
  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { email, personMessage } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();

    const registerData = {
      email,
      personMessage,
    };
    dispatch(register(registerData));
    toast.success("Your message has been successfully sent");
    navigate("/");
  };
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <section className="font-primary">
      {/* hero-contact */}
      <div
        className="hero h-96"
        style={{
          backgroundImage:
            "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">contact</h1>
          </div>
        </div>
      </div>
      {/* hero-contact */}
      <section className="w-11/12 mx-auto">
        <div className=" font-primary   ">
          <section class=" md:flex md:items-baseline md:flex-wrap lg:h-screen lg:items-center">
            <div class=" px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24 ">
              <div class="mx-auto max-w-lg text-center ">
                <h1 class="text-2xl font-normal  sm:text-3xl">
                  send us a message!
                </h1>
              </div>

              <form
                onSubmit={onSubmit}
                class="mx-auto mb-0 mt-8 max-w-md space-y-4"
              >
                <div>
                  <label for="email" class="sr-only">
                    Email
                  </label>

                  <div class="relative">
                    <input
                      type="email"
                      class="w-full  border p-4 pe-12 text-sm shadow-sm placeholder:text-sm"
                      placeholder="Enter email"
                      name="email"
                      id="email"
                      value={email}
                      onChange={onChange}
                      required
                    />

                    <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                        />
                      </svg>
                    </span>
                  </div>
                </div>

                <div>
                  <label for="personMessage" class="sr-only">
                    Password
                  </label>

                  <div class="relative">
                    <textarea
                      type="text"
                      rows={8}
                      class="w-full capitalize border p-4 pe-12 text-sm shadow-sm resize-y"
                      placeholder="How can we help?"
                      name="personMessage"
                      id="personMessage"
                      value={personMessage}
                      onChange={onChange}
                      required
                    />
                  </div>
                </div>

                <div class="flex items-center justify-between">
                  <button
                    type="submit"
                    class="inline-block rounded-lg bg-black w-full hover:bg-blue-300 px-5 py-3 text-sm font-medium text-white"
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>

            <div class=" px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24 ">
              {/* address */}
              <div className="mx-auto max-w-lg">
                <div className="flex gap-3 items-baseline  mb-14">
                  <div>
                    <IoLocationSharp size={20} />
                  </div>
                  <div>
                    <h3 className="text-2xl capitalize mb-4  font-normal">
                      address
                    </h3>
                    <p className="text-gray-500 ">
                      Coza Store Center 8th floor, 379 <br /> Hudson St, New
                      York, NY 10018 US{" "}
                    </p>
                  </div>
                </div>

                {/* item2 */}
                <div className="flex  gap-3 items-baseline mb-14">
                  <div>
                    <FaPhone size={20} />
                  </div>
                  <div>
                    <h3 className="text-2xl capitalize mb-4 ">lets talk</h3>
                    <a className="text-blue-400">+91 9994882491 </a>
                  </div>
                </div>

                {/* item3 */}
                <div className="flex gap-3 items-baseline">
                  <div>
                    <CiMail size={20} />
                  </div>
                  <div>
                    <h3 className="text-2xl capitalize mb-4 ">sale support</h3>
                    <a className="text-blue-400">ronnieranjit9@gmail.com</a>
                  </div>
                </div>
              </div>
              {/* end of address */}
            </div>
          </section>
        </div>
      </section>
    </section>
  );
};

export default Contact;
