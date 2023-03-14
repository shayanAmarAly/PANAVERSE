import Image from "next/image";
import blockchain from "../public/blockchain.jpg";
import { useEffect, useState } from 'react';
import fetch from 'isomorphic-unfetch';
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
          background-color: #eee;
        }
      `}</style>
    <div className="gridItem hover:rounded-lg hover:text-indigo-500 m-2">
      <Image src={props.image} alt={"not availabkle"} width={"100"} height={"500"} className={"w-[100%] h-[55%]"}/>
      <h2 className="font-bold text-2xl py-1 tablet:py-3">{props.title}</h2>
      <p>{props.description}</p>
    </div>
    </>
  );
}

// gABjxLDxqDtQ2qfWo9p4Yt2eRnpMix4AmTiDr17FalU

// function RandomImage() {
//   const [imageUrl, setImageUrl] = useState('');

//   useEffect(() => {
//     async function fetchRandomImage() {
//       const response = await fetch('https://api.unsplash.com/photos/random', {
//         headers: {
//           Authorization: 'gABjxLDxqDtQ2qfWo9p4Yt2eRnpMix4AmTiDr17FalU',
//         },
//       });
//       const data = await response.json();
//       setImageUrl(data.urls.regular);
//     }
//     fetchRandomImage();
//   }, []);

//   return (
//     imageUrl
//   );
// }


export default MyImageComponent;


