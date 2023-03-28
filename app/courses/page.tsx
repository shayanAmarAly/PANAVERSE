import React from 'react'
import Image from 'next/image'
import ResponsiveNavbar from "../responsiveNavbar"

const Page = () => {
    return (
        <div>
            <ResponsiveNavbar/>
            <h1 className="text-center text-4xl tablet:text-6xl font-bold text-slate-200 my-10">Current courses </h1>
            <div className=" flex justify-around flex-wrap gap-2 py-5">
                <div className="flex flex-col w-48 rounded-xl bg-violet-300 bg-opacity-25 justify-center items-center">
                    <Image src="https://cdn-icons-png.flaticon.com/512/1671/1671631.png" className="w-20 my-7" alt="" width={"0"} height={"0"}/>
                        <h1 className="text-lg font-semibold mb-5 text-violet-100">Artificial Intelligence </h1>
                </div>
                <div className="flex flex-col w-48 rounded-xl bg-violet-300 bg-opacity-25 justify-center items-center">
                    <Image src="https://cdn-icons-png.flaticon.com/512/8749/8749978.png" className="w-20 my-7" alt="" width={"0"} height={"0"}/>
                        <h1 className="text-lg font-semibold mb-5 text-violet-100">Internet of things </h1>
                </div>
                <div className="flex flex-col w-48 rounded-xl bg-violet-300 bg-opacity-25 justify-center items-center">
                    <Image src="https://cdn-icons-png.flaticon.com/512/5347/5347272.png" className="w-20 my-7" alt="" width={"0"} height={"0"}/>
                        <h1 className="text-lg font-semibold mb-5 text-violet-100">Blockchain </h1>
                </div>
                <div className="flex flex-col w-48 rounded-xl bg-violet-300 bg-opacity-25 justify-center items-center">
                    <Image src="https://cdn-icons-png.flaticon.com/512/7587/7587540.png" className="w-20 my-7" alt="" width={"0"} height={"0"}/>
                        <h1 className="text-lg text-center font-semibold mb-5 text-violet-100">Web3.0 and <br /> metaverse </h1>
                </div>
            </div>
        </div>
    )
}

export default Page
