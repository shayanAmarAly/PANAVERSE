import Image from "next/image";
import blockchain from "../public/blockchain.jpg";
import { useEffect, useState } from 'react';
// import  randomImages from "./data";
interface imageData{
  image: string, 
  title: string,
  description: string
}

function MyImageComponent(props: imageData) {
  
  return (
    <>
      <style jsx>{`
        .gridItem {
          padding: 1rem;
          background-color: #292b44;
          color: "#e1d7ff"
          border: 2px solid #e1d7ff
        }
      `}</style>
    <div className="gridItem text-slate-200 border-2 border-slate-500 hover:rounded-lg hover:text-indigo-500 m-2">
      <Image src={props.image} alt={"not availabkle"} width={"100"} height={"500"} className={"w-[100%] h-[55%]"}/>
      <h2 className="font-bold text-slate-100 text-2xl py-1 tablet:py-3">{props.title}</h2>
      <p className="pb-3 ">{props.description}</p>
    </div>
    </>
  );
}



export default MyImageComponent;


