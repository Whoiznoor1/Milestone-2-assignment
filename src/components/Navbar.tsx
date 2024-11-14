"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-orange-500 p-4 shadow-md sticky top-0 ">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">MomoMania</h1>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white md:hidden"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:flex md:items-center md:space-x-4 md:w-auto`}
        >
          <Link
            href="/"
            className="block py-2 text-white hover:text-gray-300 md:inline md:py-0"
          >
            Home
          </Link>
          <Link
            href="#menu"
            className="block py-2 text-white hover:text-gray-300 md:inline md:py-0"
          >
            Menu
          </Link>
          <Link
            href="#contact"
            className="block py-2 text-white hover:text-gray-300 md:inline md:py-0"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
