import React from 'react'
import rating from "../public/rating.png"
import Image from 'next/image'

const Rating = () => {
  return (
    <div className='grid grid-rows-3  tablet:grid-cols-3 tablet:grid-rows-1 m-auto px-5 tablet:py-20 tablet:px-5 space-x-3 justify-items-end'>

      <div  className=' w-full flex flex-col items-center justify-center py-5 justify-items-center  text-center text-indigo-200 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100  duration-300 hover:bg-indigo-200 hover:text-slate-900 hover:rounded-lg'>
        <Image src={rating} alt="Our students rating" width={100} className={"justify-center"}></Image>
        <p className='sm:text-16 tablet:text-xl '>
        "Accessible and flexible learning options" 
        </p>
      </div>
      <div className=' w-full flex flex-col items-center justify-center  text-indigo-200 py-5  text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100  duration-300 hover:bg-indigo-200 hover:text-slate-900 hover:rounded-lg'>
        <Image src={rating} alt="Our students rating" width={100} className={"justify-center"}></Image>
        <p className='sm:text-14 tablet:text-xl '>
        "I appreciate the high-quality content on your website" 
        </p>
      </div>
      <div className=' w-full flex flex-col items-center justify-center  text-indigo-200 py-5  text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100  duration-300 hover:bg-indigo-200 hover:text-slate-900 hover:rounded-lg'>
        <Image src={rating} alt="Our students rating"  width={100} className={"justify-center"}></Image>
        <p className='sm:text-14 tablet:text-xl '>
        "Improved balance between education and life" 
        </p>
      </div>
      
    </div>
  )
}

export default Rating
