"use client"
import React from 'react'
import style from "./hero.module.css"
import Image from 'next/image'
import traning from "../public/traning.png"
import training from "../public/training.jpg"

const Inside = () => {
  return (
    <>
      <h1 className='text-4xl md:text-7xl font-bold text-center text-indigo-200 py-5 '> What <u className={style.shine}>inside...</u> </h1>
      <div className=''>

      <div className='w-3/4 m-auto grid grid-cols-1 tablet:grid-cols-2 tablet:gap-3 space-y-3 tablet:space-y-0'>
        <div className='gridItem bg-violet-100 p-5 desktop:flex desktop:flex-col desktop:justify-center desktop:items-center'>
          <Image src={training} alt={"Training sessions"}></Image>
          <div>
          <h3 className='font-bold text-xl desktop:text-left py-3'>Training</h3>
          </div>
          <p className='desktop:px-7'>Zero fluff trainings from industry experts that are packed full of knowledge you won't find anywhere else.</p>
        </div>
        <div className='gridItem bg-violet-100 p-5 desktop:flex desktop:flex-col desktop:justify-center desktop:items-center'>
          <Image src={training} alt={"Training sessions"}></Image>
          <div>
          <h3 className='font-bold text-xl desktop:text-left py-3'>Session</h3>
          </div>
          <p className='desktop:px-7'>Zero fluff trainings from industry experts that are packed full of knowledge you won't find anywhere else.</p>
        </div>
        <div className='gridItem bg-violet-100 p-5 desktop:flex desktop:flex-col desktop:justify-center desktop:items-center'>
          <Image src={training} alt={"Training sessions"}></Image>
          <div>
          <h3 className='font-bold text-xl desktop:text-left py-3'>Physical classes</h3>
          </div>
          <p className='desktop:px-7'>Zero fluff trainings from industry experts that are packed full of knowledge you won't find anywhere else.</p>
        </div>
        <div className='gridItem bg-violet-100 p-5 desktop:flex desktop:flex-col desktop:justify-center desktop:items-center'>
          <Image src={training} alt={"Training sessions"}></Image>
          <div>
          <h3 className='font-bold text-xl desktop:text-left py-3'>Events</h3>
          </div>
          <p className='desktop:px-7'>Zero fluff trainings from industry experts that are packed full of knowledge you won't find anywhere else.</p>
        </div>
      </div>
      </div>
    </>
  )
}

export default Inside
