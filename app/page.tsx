import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Navbar from "./navbar";
import Hero from "./hero";
import Video from "./video"
import Rating from "./rating";
import Inside from "./inside";
import style from "./hero.module.css"
import Instructor from "./instructor";
import Instructor2 from "./instructor2";
import Courses from "./courses";
import Collaboration from "./collaboration";
import Footer from "./footer";
import ResponsiveNavbar from "./responsiveNavbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <ResponsiveNavbar/>
      <Hero />
      {/* <Video videoId="OyMTXYZsaRM" /> */}
      <Rating/>
      {/* <div className="h-1 w-full bg-green-600 lg:w-1/3"></div> */}
      {/* <div id="opac-line-break" className="py-5 bg-black"></div> */}
      <Inside/>
      <Instructor2/>
      <Courses/>
      <Collaboration/>
      <Footer/>
    </>
  );
}
