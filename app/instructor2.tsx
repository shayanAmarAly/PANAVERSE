"use client"
import React from 'react'
import Image from 'next/image'
import verified from "../public/verified.png";
import Link from "next/link";
import style from "./hero.module.css"
import danial from "../public/danial.jpg";
import hira from "../public/hira.jpg";
import adil from "../public/instructors/adil.png";
import zeeshan from "../public/zeeshan.jpg";
const Instructor2 = () => {
    return (
        <>
            <style jsx>{`
        .shine {
          text-shadow: 0 0 35px hsl(0deg 0% 100% / 64%);
          background-image: none;
          color: #fff;
          text-decoration: none;
          text-shadow: 0 0 25px hsl(0deg 0% 100% / 64%);
          box-shadow: inset 1px 0 0 0 hsl(0deg 0% 100% / 17%), -18px 0 20px 3px hsl(0deg 0% 100% / 10%);
          background-clip: border-box;
          -webkit-text-fill-color: inherit;
        }
      `}</style>
            <h1 className='text-4xl w-3/4 m-auto tablet:text-7xl font-bold text-center text-indigo-200 py-10 tablet:py-10 '> <u className={style.shine}>Learn </u> from the best</h1>
            <div className="flex flex-wrap justify-center items-center text-slate-200 tablet:w-1/2 tablet:m-auto tablet:my-3 gap-3">
                <div className="flex justify-center items-center space-x-3 border-2 border-slate-900 w-[150px] sm:my-3  rounded-full p-1">
                    <Image width={"0"} height={"0"} src="https://media.licdn.com/dms/image/C4E03AQEbUWdZxS_8ig/profile-displayphoto-shrink_800_800/0/1638368405154?e=2147483647&v=beta&t=Y2ESnL7WajFCydNTJL3gcxKbO-5jF6Y0Ci0ZlN47M4E" className="rounded-full flex-shrink w-7 border-2 border-slate-900" alt="" />
                    <h1 >Zia khan </h1>
                </div>
                <div className="flex justify-center items-center   space-x-3 border-2 border-slate-900 w-[150px]  sm:my-3 rounded-full p-1">
                    <Image width={"0"} height={"0"} src="https://media.licdn.com/dms/image/C4D03AQFuhdYPmkC0sA/profile-displayphoto-shrink_800_800/0/1562700934047?e=2147483647&v=beta&t=Bwruo2OggLTrCos4804rppZq0UbhmXmPlr5LxDobq74" className="rounded-full flex-shrink w-7 border-2 border-slate-900" alt="" />
                    <h1 className="truncate">Hira Khan </h1>
                </div>
                <div className="flex justify-center items-center  space-x-3 border-2 border-slate-900 w-[150px] sm:my-3  rounded-full p-1">
                    <Image width={"0"} height={"0"} src="https://avatars.githubusercontent.com/u/62209503?v=4" className="rounded-full flex-shrink w-7 border-2 border-slate-900" alt="" />
                    <h1>Adil Altaf </h1>
                </div>
                <div className="flex justify-center items-center  space-x-3 border-2 border-slate-900 w-[150px] sm:my-3 rounded-full p-1">
                    <Image width={"0"} height={"0"} src="https://media.licdn.com/dms/image/C4D03AQE1Hzv61ccMVw/profile-displayphoto-shrink_200_200/0/1556048207367?e=1685577600&v=beta&t=rpPJAJQvzZqDrFGlsz8iM7aWxHpoptGwWQUW8Y8llS8" className="rounded-full flex-shrink w-7 border-2 border-slate-900" alt="" />
                    <h1 className="truncate">Danial Nagori </h1>
                </div>
                <div className="flex justify-center items-center space-x-3 border-2 border-slate-900 w-[150px] sm:my-3 rounded-full p-1">
                    <Image width={"0"} height={"0"} src="https://avatars.githubusercontent.com/u/1311782?v=4" className="rounded-full flex-shrink w-7 border-2 border-slate-900" alt="" />
                    <h1>Sir Zeeshan </h1>
                </div>
                <div className="flex justify-center items-center space-x-3 border-2 border-slate-900 w-[150px] sm:my-3 rounded-full p-1">
                    <Image width={"0"} height={"10"} src="https://image.lexica.art/full_jpg/ebb79af2-e76d-40aa-b10e-8466f5ab3fa8" className="rounded-full flex-shrink w-7 border-2 border-slate-900" alt="" />
                    <h1>Mr. XYZ </h1>
                </div>
                <div className="flex justify-center items-center space-x-3 border-2 border-slate-900 w-[150px]  rounded-full p-1">
                    <Image width={"0"} height={"0"} src="https://image.lexica.art/full_jpg/8138ff5e-2dc5-43f1-a09e-677c84226f52" className="rounded-full flex-shrink w-7 border-2 border-slate-900" alt="" />
                    <h1>Mr. XYZEE</h1>
                </div>
            </div>
        </>
    )
}

export default Instructor2
