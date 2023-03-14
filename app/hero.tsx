"use client"
import React from 'react'
import style from "./hero.module.css"
import Navbar from './navbar'
import Video from './video'
import Link from 'next/link'

const Hero = () => {
    return (
        < div className="">
            <style jsx>{`
                .shine{
                    box-shadow: rgb(220, 220, 220) 0px 20px 30px -10px;
                }
                
            `}</style>
            <div className='text-slate-300 md:text-slate-500 pt-10 mainContainer'>
                <div className='text-center sm:w-1/2 lg:w-2/3 m-auto'>
                    <h1 className='font-bold text-4xl md:text-5xl lg:text-7xl py-5 md:py-4 lg:py-4 lg:py-3 sm:leading-snug '>
                    Master the skills <u className={style.shine}>web3.0</u> of <u className={style.shine}>Metaverse</u> development and designing.
                    </h1>
                    <h3 className='pb-3 text-2xl md:text-4xl lg:text-5xl text-white'>Master the Technologies of the Future Today</h3>
                    <button className="mb-20 bg-blue-500 hover:bg-blue-600 p-2 text-slate-300 font-bold my-5 px-4 hover:transition hover:duration-500 hover:ease-in-out hover:animate-pulse">
                        <Link href={"https://portal.piaic.org/signup"}>Enroll now</Link>
                    </button>
                </div>
                <div className="hidden tablet:block tablet:mx-3">
                    <Video videoId="_OVnXw2ldog"/>
                </div>
            </div>
        </div>
    )
}
// bg-gradient-to-tr bg-gradient-radial bg-gradient-circle bg-gradient-x-10 from-purple-400 to-pink-500
export default Hero
