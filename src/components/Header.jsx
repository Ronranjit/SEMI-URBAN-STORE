import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
const Header = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle(!toggle);
  };
  return (
    <div className="w-full h-[80px] bg-white border-b font-primary md:px-5 px-2 ">
      <div className="container  md:max-w-[1480px] max-w-[600px] mx-auto w-full h-full flex justify-between items-center ">
        <Link to="/">semi-urban</Link>
        <div className="hidden md:flex items-center ">
          <ul className="flex gap-4 ">
            <li className=" hover:text-blue-300">
              <Link to="/">home</Link>
            </li>
            <li className=" hover:text-blue-300">
              <Link to="/feature">feature</Link>
            </li>
            <li className=" hover:text-blue-300">
              <Link to="/cart">bag</Link>
            </li>
            <li className=" hover:text-blue-300">
              <Link to="/about">about</Link>
            </li>
            <li className=" hover:text-blue-300">
              <Link to="/contact">contact</Link>
            </li>
          </ul>
        </div>
        <div className="md:hidden" onClick={handleClick}>
          {toggle ? <AiOutlineClose /> : <RxHamburgerMenu />}
        </div>
      </div>
      <div
        className={
          toggle ? "absolute z-10 p-4 bg-white w-full px-8 md:hidden" : "hidden"
        }
      >
        <ul>
          <li className="p-2 hover:text-blue-400">
            <Link to="/">home</Link>
          </li>
          <li className="p-2">
            <Link to="/feature">feature</Link>
          </li>
          <li className="p-2">
            <Link to="/cart">bag</Link>
          </li>
          <li className="p-2">
            <Link to="/about">about</Link>
          </li>
          <li className="p-2">
            <Link to="/contact">contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
