import React from "react";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-orange-500 py-8 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold text-black">Momo Mania</h1>
          <p className="mt-2 font-bold text-sm">
            Enjoy the finest momos and smoothies with us!
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          <Link href="/" passHref>
            <span className="hover:text-white font-extrabold cursor-pointer">
              Home
            </span>
          </Link>
          <Link href="#menu" passHref>
            <span className="hover:text-white font-extrabold cursor-pointer">
              Menu
            </span>
          </Link>
          <Link href="#contact" passHref>
            <span className="hover:text-white font-extrabold cursor-pointer">
              Contact
            </span>
          </Link>
        </div>

        <div className="flex space-x-4">
          <Link href="https://facebook.com" passHref>
            <span className="text-xl text-blue-700 hover:text-black cursor-pointer">
              <FaFacebook />
            </span>
          </Link>
          <Link href="https://twitter.com" passHref>
            <span className="text-xl text-blue-500 hover:text-black cursor-pointer">
              <FaTwitter />
            </span>
          </Link>
          <Link href="https://instagram.com" passHref>
            <span className="text-xl text-pink-700 hover:text-black cursor-pointer">
              <FaInstagram />
            </span>
          </Link>
        </div>
      </div>

      <div className="mt-6 border-t font-bold border-black pt-4 text-center text-sm">
        © {new Date().getFullYear()} Momo Mania. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
