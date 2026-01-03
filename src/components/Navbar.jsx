import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GoHeartFill } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { GiCrossedSwords } from "react-icons/gi";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const hamburgerClick = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setIsScrolled(true) : setIsScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 left-0 right-0 py-5 z-50 bg-white ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="container px-3 mx-auto ">
        <nav className="flex justify-between items-center">
          <Link to={"/"} className="text-3xl font-semibold">
            Gr<span className="text-orange-500 uppercase">o</span>cify
          </Link>
          <ul className="hidden lg:flex items-center gap-x-12">
            <li>
              <Link className="font-semibold tracking-wide text-orange-500 capitalize">
                Home
              </Link>
            </li>
            <li>
              <Link className="font-semibold tracking-wide text-zinc-800 hover:text-orange-500 transition duration-200 capitalize">
                About Us
              </Link>
            </li>
            <li>
              <Link className="font-semibold tracking-wide text-zinc-800 hover:text-orange-500 transition duration-200 capitalize">
                Process
              </Link>
            </li>
            <li>
              <Link className="font-semibold tracking-wide text-zinc-800 hover:text-orange-500 transition duration-200 capitalize">
                Contact us
              </Link>
            </li>
          </ul>
          <div className="search_area flex items-center gap-x-5">
            <div className="hidden md:flex items-center p-1 border-2 border-orange-500 rounded-full relative">
              <input
                type="text"
                placeholder="Search..."
                className="focus:outline-none px-3  py-1"
              />
              <button className="w-9 h-9 text-xl bg-gradient-to-b from-orange-400 to-orange-500 text-white flex items-center justify-center rounded-full absolute right-[2px] top-[50%] transform -translate-y-[50%] cursor-pointer">
                <IoSearch />
              </button>
            </div>
            <Link className="text-zinc-800 text-2xl hover:text-orange-500 transition duration-200">
              <GoHeartFill />
            </Link>
            <Link className="text-zinc-800 text-2xl hover:text-orange-500 transition duration-200">
              <HiShoppingBag />
            </Link>
            <button
              onClick={hamburgerClick}
              className="text-zinc-800 text-3xl lg:hidden cursor-pointer"
            >
              {showMenu ? <GiCrossedSwords /> : <IoMenu />}
            </button>
          </div>

          {/* Mobile Menu */}

          <ul
            className={`lg:hidden flex flex-col flex-wrap items-center gap-y-12 absolute top-1/2 shadow-xl ${
              showMenu ? "left-1/2" : "-left-full"
            } transform -translate-x-1/2 translate-y-1/7  bg-orange-500/30 backdrop-blur-xl p-10 rounded-lg transition-all duration-300 ease-in-out`}
          >
            <li>
              <Link className="font-semibold tracking-wide text-orange-500 capitalize">
                Home
              </Link>
            </li>
            <li>
              <Link className="font-semibold tracking-wide text-zinc-800 hover:text-orange-500 transition duration-200 capitalize">
                About Us
              </Link>
            </li>
            <li>
              <Link className="font-semibold tracking-wide text-zinc-800 hover:text-orange-500 transition duration-200 capitalize">
                Process
              </Link>
            </li>
            <li>
              <Link className="font-semibold tracking-wide text-zinc-800 hover:text-orange-500 transition duration-200 capitalize">
                Contact us
              </Link>
            </li>
            <li className="flex items-center p-1 border-2 border-orange-500 rounded-full md:hidden">
              <input
                type="text"
                placeholder="Search..."
                className="focus:outline-none px-3 "
              />
              <button className="w-9 h-9 text-xl bg-gradient-to-b from-orange-400 to-orange-500 text-white flex items-center justify-center rounded-full">
                <IoSearch />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
