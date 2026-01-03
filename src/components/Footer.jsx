import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-15 bg-zinc-100">
      <div className="container px-3 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 sm:gap-15 lg:gap-0">
          <div className="col-span-1 lg:col-span-2">
            <Link to={"/"} className="text-3xl font-semibold">
              Gr<span className="text-orange-500 uppercase">o</span>cify
            </Link>
            <p className="text-zinc-600 mt-6 max-w-[350px]">
              Bred for a high content of beneficial substances. Our porducts are
              all fresh and healthy.
            </p>
            <p className="text-zinc-600 mt-6 capitalize">
              2026 &copy; all rights reserved
            </p>
          </div>
          <div>
            <ul>
              <li>
                <h5 className="text-zinc-800 text-2xl font-bold">Company</h5>
              </li>
              <li className="mt-6">
                <Link className="hover:text-orange-500 text-zinc-800">
                  About
                </Link>
              </li>
              <li className="mt-6">
                <Link className="hover:text-orange-500 text-zinc-800">
                  FAQ's
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <h5 className="text-zinc-800 text-2xl font-bold">Support</h5>
              </li>
              <li className="mt-6">
                <Link className="hover:text-orange-500 text-zinc-800">
                  Support Center
                </Link>
              </li>
              <li className="mt-6">
                <Link className="hover:text-orange-500 text-zinc-800">
                  Feedback
                </Link>
              </li>
              <li className="mt-6">
                <Link className="hover:text-orange-500 text-zinc-800">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-zinc-800 text-2xl font-bold">Stay Connected</h5>
            <p className="mt-6 text-zinc-600">
              Questions or Feedback? <br /> We'd love to hear from you.
            </p>
            <div className="bg-white mt-6 p-1 rounded-lg relative w-fit lg:w-auto">
              <input
                type="email"
                placeholder="Email Address"
                autoComplete="off"
                className="p-2 focus:outline-none h-[5vh] flex-1"
              />
              <button className="bg-gradient-to-b from-orange-400 to-orange-500 p-2 rounded-md text-white text-2xl hover:to-orange-600 cursor-pointer transition duration-100 absolute right-[4px] top-[50%] transform -translate-y-[50%]">
                <IoIosArrowForward />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
