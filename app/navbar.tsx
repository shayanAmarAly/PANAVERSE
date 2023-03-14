"use client"
import React from 'react'
import Image from 'next/image'
import logo from "../../pana_web/public/logo.webp"
import About from "../../pana_web/public/about.png"
import Admin from "../../pana_web/public/admin.png"
import Courses from "../../pana_web/public/courses.png"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import hamburger from "../public/square.png"
import Aboutpage from './about'

// import styles from "./hero.module.css"
// import { TbChristmasTree } from "react-icons/tb";

import { useState, useEffect } from 'react';

function Navbar() {
  const router = useRouter();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navbarColor, setNavbarColor] = useState({ backgroundColor: 'transparent', boxShadow: 'none' });

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      setScrollPosition(currentPosition);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition > 100) {
      setNavbarColor({ backgroundColor: '#221b57', boxShadow: '0 2px 4px rgba(92, 92, 92, 0.2)' }); // Change the color and shadow to whatever you want
    } else {
      setNavbarColor({ backgroundColor: 'transparent', boxShadow: 'none' });
    }
  }, [scrollPosition]);

  return (
    <div className='fixed w-full z-10 top-0 text-slate-300' style={{ ...navbarColor }}>
      <div className='flex py-3 px-10 button'>
        {/* First container */}
        <div className='logo mr-32 sm:hidden'>
          <Link href={"/"}>
            <Image src={logo} alt={"Panaverse"}></Image>
          </Link>
        </div>
        <div className='lg:hidden tablet:hidden'>
          <Image src={hamburger} alt={"navbar"} className={"bg-white w-10"}></Image>
        </div>
        {/* Second container */}
        <div className='menu flex space-x-14 mt-3 mx-36 sm:hidden'>
          <button className='text-xl flex p-2 rounded-md'><Image src={About} alt={"about panaverse"} width={20} height={20} ></Image>
            <Link href={""}></Link> About</button>
          <button className="flex  text-xl p-2 rounded-md"><Image src={Courses} alt={"courses panaverse"} width={20} height={20}></Image>
            <Link href={"https://www.piaic.org/howitworks"}>Courses</Link> </button>
          <button className="flex text-xl p-2 rounded-md">
            <Link href={"https://www.piaic.org/howitworks"}>Admission</Link>  </button>
        </div>
        {/* Third container */}
        <div className='loginBtn space-x-14 mt-5 ml-32 sm:hidden'>
          <button className="border-2 p-2 rounded-md"><Link href={"https://portal.piaic.org/signup"}>Login</Link> </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
// In this example, we use the useState hook to create two state variables: scrollPosition to keep track of the current scroll position, and navbarColor to keep track of the color of the navbar.
// We use the useEffect hook with an empty dependency array to add an event listener to the window object that listens for the scroll event. When the event is triggered, we update the scrollPosition state variable.
// We use another useEffect hook with the scrollPosition variable as a dependency to update the navbarColor state variable. If the scrollPosition is greater than zero, we set the navbarColor to a specific color, otherwise we set it to transparent. Finally, we render the nav element with an inline style that sets the backgroundColor to the value of the navbarColor state variable.

// const Navbar = () => {
//     const router = useRouter();
//     function login() {router.push("./login")}
//     function about() {router.push("./about")}
//     function courses() {router.push("./courses")}
//     function admission() {router.push("./admission")}

//   return (
//     <div >
//     <div className='flex justify-between py-3 px-10 button'>
//       {/* First container */}
//       <div className='logo'>
//         <Link href={"/"}>
//           <Image src={logo} alt={"Panaverse"}></Image>
//         </Link>
//       </div>
//         {/* Second container */}
//       <div className='menu flex space-x-14 mt-3'>
//           <button  onClick={about} className='cursor-pointer flex border-2 p-2 rounded-md'><Image src={About} alt={"about panaverse"} width={20} height={20} ></Image>About</button>
//           <button onClick={courses} className="flex border-2 p-2 rounded-md"><Image src={Courses} alt={"courses panaverse"} width={20} height={20}></Image>Courses</button>
//           <button onClick={admission} className="flex border-2 p-2 rounded-md"><Image src={Admin} alt={"admission panaverse"} width={20} height={20}></Image>Admission</button>
//       </div>
//       {/* Third container */}
//       <div className='loginBtn space-x-14 mt-5'>
//               <button onClick={login} className="border-2 p-2 rounded-md">Login</button>
//       </div>
//     </div>
//     </div>
//   )
// }
// // FaInfoCircle
// export default Navbar
