"use client"
import React, { useState } from "react";
import MyImageComponent from "./course";
// import { data } from "./data";
// import randomImages from "./data";
import style from "./hero.module.css"
import blockchain from "../public/blockchain.jpg"
// import imag1 from "../public/blockchain.jpg"
// import imag1 from "../public/blockchain.jpg"
// import imag1 from "../public/blockchain.jpg"
import { AnyARecord } from "dns";

const Courses = () => {
  
const data = [
  {
      image: "https://pbs.twimg.com/media/EDyx04JWkAETwPM?format=jpg&name=large",
      title: "Blockchain",
      description: "This course is about Blockchain"
  },
  {
      image: "https://rocknyc.live/wp-content/uploads/2018/11/5b8813050ccb2_image.jpg",
      title: "Internet of things",
      description: "This course is about Internet of things"
  },
  {
      image: "https://www.snotradigital.com/wp-content/uploads/2022/06/Uretimde-Digital-Donusum-1.jpg",
      title: "IOT",
      description: "This course is about mobile app development"
  },
  {
      image: "https://www.processmaker.com/wp-content/uploads/2019/11/770.jpg",
      title: "Cloud Native",
      description: "This course is about Artificial intelligent"
  },
  {
      image: "https://www.block-chain24.com/sites/default/files/styles/full_bg/public/img/obem_torgov_v_sektore_metavselennoi_upal_na_80_no_azhiotazh_ne_umenshilsya.jpg?itok=_5mNAsnU",
      title: "Metaverse and web3.0",
      description: "This course is about Metaverse and web3.0"
  },
]
  return (
    <>
      <style jsx>{`
        .gridContainer {
          display: grid;
          width: 80%;
          grid-template-columns: repeat(3, 1fr);
          grid-gap: 1rem;
          margin-left: 10%;
        }
      `}</style>
        <h1 className='text-4xl tablet:text-7xl font-bold text-center text-indigo-200 py-10 px-5 tablet:py-20 '> <u className={style.shine}>Courses</u> Available</h1>
      <div className="text-center w-4/5 tablet:w-8/12 m-auto justify-center">

        <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 tablet:flex-wrap flex-wrap ">
          {data.map((imgData, index) => (
            <>
            <MyImageComponent
            key={index} // Don't forget to add a unique key prop to each element when rendering a list
            image={imgData.image}
            title={imgData.title}
            description={imgData.description}
            /></>
          ))}
        </div>
      </div>
    </>
  );
};

export default Courses;


