import React from 'react'
import Navbar from '../navbar'
import Image from 'next/image'
import about from "../../public/aboutPana.jpg"
import ResponsiveNavbar from "../responsiveNavbar"
const Page = () => {
  return (
    <>    
        <ResponsiveNavbar/>
    <div className='w-3/4 bg-indigo-100 text-indigo-500 m-auto my-10 tablet:mt-40  tablet:flex justify-between  rounded-lg'>
        <p className='w-full text-lg tablet:text-base shadow-md px-3 py-3 rounded-lg tablet:px-16 tablet:py-10'>
        Panaverse DAO is a movement to spread Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient 
        Computing/IoT, Network Automation, and Bioinformatics Technologies technolgies globally. It is community of 
        Web 3 and Metaverse developers, designers, trainers, startup founders and service providers.
        </p>
      <Image src={about} alt={"About panaverse"} className={""}></Image>
    </div>
    </>

  )
}

export default Page
