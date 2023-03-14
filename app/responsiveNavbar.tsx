"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'
import logo from "../../pana_web/public/logo.webp"
import About from "../../pana_web/public/about.png"
import Admin from "../../pana_web/public/admin.png"
import Courses from "../../pana_web/public/courses.png"
import { useRouter } from 'next/navigation'
import hamburger from "../public/square.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link href="/">
        <Image src={logo} alt={"logo"} ></Image>
          {/* <p className="font-semibold text-xl tracking-tight">My Logo</p> */}
        </Link>
      </div>
      <div className="block tablet:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white"
          onClick={toggleMenu}
        >
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0zm0 6h20v2H0zm0 6h20v2H0z"/></svg>
        </button>
      </div>
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } w-full block flex-grow tablet:flex tablet:items-center tablet:w-auto`}
      >
        <div className="text-md tablet:flex-grow">
          <Link href="/">
            <p
              className="block mt-4 tablet:inline-block tablet:mt-0 text-white hover:text-gray-200 mr-4"
              onClick={toggleMenu}
            >
              Home
            </p>
          </Link>
          <Link href="/about">
            <p
              className="block mt-4 tablet:inline-block tablet:mt-0 text-white hover:text-gray-200 mr-4"
              onClick={toggleMenu}
            >
              About
            </p>
          </Link>
        </div>
        <div>
          <Link href="/login">
            <p className="inline-block px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-500 hover:bg-white mt-4 tablet:mt-0">
              Login
            </p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
// In this updated example, we've added a useState hook to keep track of whether the menu is open or closed. We've also added a toggleMenu function that updates the state when the hamburger button is clicked.

// To show and hide the menu based on the state, we've added a ternary operator to the className prop of the menu element. If isOpen is true, we add the block class to show the menu. If isOpen is false, we add the hidden class to hide the menu.

// Finally, we've added an onClick handler to each navigation link to close the menu when a link is clicked. This ensures that the menu disappears after a





