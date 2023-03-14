import blockchain from "../public/blockchain.jpg"
import ai from "../public/ai.jpg"
import meta from "../public/meta.webp"


export const data = [
    {
        image: "https://pbs.twimg.com/media/EDyx04JWkAETwPM?format=jpg&name=large",
        title: "Blockchain",
        description: "This course is about Blockchain"
    },
    {
        image: "https://electricenjin.com/img/cms/blogimageassets/_1200x630_crop_center-center_82_none/Chatbots-For-Your-Business-Ecommerce-Chatbot-Facebook-Bot.jpg",
        title: "Internet of things",
        description: "This course is about Internet of things"
    },
    {
        image: "https://www.snotradigital.com/wp-content/uploads/2022/06/Uretimde-Digital-Donusum-1.jpg",
        title: "IOT",
        description: "This course is about mobile app development"
    },
    {
        image: "https://i.pinimg.com/originals/98/7e/f9/987ef99f648b4e5fdafefeb17bf4a39f.jpg",
        title: "Cloud Native",
        description: "This course is about Artificial intelligent"
    },
    {
        image: "https://www.block-chain24.com/sites/default/files/styles/full_bg/public/img/obem_torgov_v_sektore_metavselennoi_upal_na_80_no_azhiotazh_ne_umenshilsya.jpg?itok=_5mNAsnU",
        title: "Metaverse and web3.0",
        description: "This course is about Metaverse and web3.0"
    },
  ]
// import { useEffect, useState } from 'react';
// import fetch from 'isomorphic-unfetch';

// export default function RandomImage() {
//     const [imageUrl, setImageUrl] = useState('');

//     useEffect(() => {
//         async function fetchRandomImage() {
//             const response = await fetch('https://api.unsplash.com/photos/random', {
//                 headers: {
//                     Authorization: 'gABjxLDxqDtQ2qfWo9p4Yt2eRnpMix4AmTiDr17FalU',
//                 },
//             });
//             const data = await response.json();
//             setImageUrl(data.urls.regular);
//         }
//         fetchRandomImage();
//     }, []);
//     console.log(imageUrl);
//     return (
//         <div>
//             <img src={imageUrl} alt="Random Image" />
//         </div>
//     );
// }

