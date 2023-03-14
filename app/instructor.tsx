"use client"
import React from "react";
import verified from "../public/verified.png";
import Image from "next/image";
import Link from "next/link";
import more from "../public/more.png";
import mortal from "../public/instructors/man.png";
import danial from "../public/instructors/danial.png";
import hira from "../public/instructors/hira.png";
import adil from "../public/instructors/adil.png";
import style from "./hero.module.css";

const Instructor = () => {
  const shine = {
    boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
  };

  return (
    <>
      <style jsx>{`
        .shine {
          text-shadow: 0 0 35px hsl(0deg 0% 100% / 64%);
          background-image: none;
          color: #fff;
          text-decoration: none;
          text-shadow: 0 0 25px hsl(0deg 0% 100% / 64%);
          box-shadow: inset 1px 0 0 0 hsl(0deg 0% 100% / 17%), -18px 0 20px 3px hsl(0deg 0% 100% / 10%);
          background-clip: border-box;
          -webkit-text-fill-color: inherit;
        }
      `}</style>
      <div className="w-10/12 m-auto text-white pb-30">
        <h1 className="text-3xl md:text-7xl font-bold text-center py-5"><u className={style.shine}>Learn</u>  From The Best</h1>
        
        <div className="space-x-7 ml-4 pt-2 pb-1 lg:ml-40 lg:pt-20 lg:pb-14 grid grid-cols-2 md:grid-cols-5">

          <div className="flex shine rounded-full py-2 p-2  items-center">
            <Image src={mortal} alt={"Sir zia khan"}></Image>
            <h1 className="ml-3 top-2">Sir Zia Khan</h1>
            <Image
              src={verified}
              alt={"verified"}
              className=" w-4 h-4 mt-1 mr-2"
            ></Image>
          </div>
          <div className="flex shine rounded-full items-center py-2 p-2">
            <Image src={adil} alt={"Danial"}></Image>
            <h1 className="ml-3 top-2">Danial Nagori</h1>
            <Image
              src={verified}
              alt={"verified"}
              className=" w-4 h-4 mt-1 mr-2"
            ></Image>
          </div>
          <div className="flex shine rounded-full items-center py-2 p-2">
            <Image src={hira} alt={"maam hira khan"}></Image>
            <h1 className="ml-3 top-2">Maam Hira Khan</h1>
            <Image
              src={verified}
              alt={"verified"}
              className=" w-4 h-4 mt-1 mr-2"
            ></Image>
          </div>
          <div className="flex shine rounded-full items-center py-2 p-2">
            <Image src={adil} alt={"adil altaf"}></Image>
            <h1 className="ml-3 top-2">Adil Altaf</h1>
            <Image
              src={verified}
              alt={"verified"}
              className=" w-4 h-4 mt-1 mr-2"
            ></Image>
          </div>
        </div>
        {/* <Image unoptimized={true} src={GIF} alt="the gif" height={25} width={25} /> FOR ANIMATED IMAGES FORMAT LIKE GIF. for add images: [format of animated] in next.config.js*/}
        <div className="flex space-x-7 ml-64 ">
          <div className="flex shine rounded-full items-center py-2 p-2">
            <Image src={hira} alt={"Maam hira"}></Image>
            <h1 className="ml-3 top-2">Hira khan</h1>
            <Image
              src={verified}
              alt={"verified"}
              className=" w-4 h-4 mt-1 mr-2"
            ></Image>
          </div>
          <div className="flex shine rounded-full items-center py-2 p-2">
            <Image src={adil} alt={"Adil"}></Image>
            <h1 className="ml-3 top-2">Adil Altaf</h1>
            <Image
              src={verified}
              alt={"verified"}
              className=" w-4 h-4 mt-1 mr-2"
            ></Image>
          </div>
          <div className="flex shine rounded-full items-center py-2 p-2">
            <Image src={adil} alt={"Danial"}></Image>
            <h1 className="ml-3 top-2">Danial Nagori</h1>
            <Image
              src={verified}
              alt={"verified"}
              className=" w-4 h-4 mt-1 mr-2"
            ></Image>
          </div>
        </div>
        <div className="flex py-5 text-indigo-300 justify-center">
          <Link href={"/"} className={"flex"}>
            <i className="text-xl font-bold text-center">+ tons more</i>
            {/* <Image
              src={more}
              alt={"see more instructors"}
              className={" mt-2"}
            ></Image> */}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Instructor;

// #41416B purple
// #FF4155 red
