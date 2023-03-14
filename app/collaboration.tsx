import React from 'react'
import Image from 'next/image'
import panacloud from "../public/panacouldu.svg"
import saylani from "../public/saylanilogo.png"

const Collaboration = () => {
  return (
    <div className='w-3/4 text-center tablet:w-2/3 tablet:my-10 m-auto flex flex-col justify-center items-center py-5'>
      <div>
        <h1 className='font-bold text-4xl tablet:text-7xl tablet:my-5 my-5 r text-indigo-200'>Our Colaborations</h1>
      </div>
    <div className='flex'>
      <Image src={panacloud} alt={"Panacloud"} width={"0"} className="w-[100px] tablet:w-[200px] shadow-md hover:rounded-lg hover:bg-indigo-200"></Image>
      <Image src={saylani} alt={"Saylani"} width={"0"} className="w-[100px] tablet:w-[350px] shadow-md hover:rounded-lg hover:bg-indigo-200"></Image>
    </div>
    </div>
  )
}

export default Collaboration
