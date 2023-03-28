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
            <div className='text-slate-300 tablet:text-slate-500 pt-10 mainContainer'>
                <div className='text-center w-full m-auto desktop:w-2/3'>
                    <h1 className='font-bold text-slate-200 tablet:w-full m-auto px-3 text-4xl tablet:text-6xl desktop:text-7xl py-5 tablet:py-4 desktop:py-4 sm:leading-snug '>
                    Master the skills <u className={style.shine}>web3.0</u> and <u className={style.shine}>Metaverse</u>.
                    </h1>
                    <h3 className='py-5 px-6 text-xl w-3/4 m-auto tablet:text-xl desktop:text-3xl text-white'>Master the Technologies of the Future Today</h3>
                    <button className="tablet:mb-14 bg-blue-500 hover:bg-blue-600 p-2 text-slate-300 font-bold my-5 px-4 hover:transition hover:duration-500 hover:ease-in-out hover:animate-pulse">
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
