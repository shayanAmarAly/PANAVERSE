import React from 'react'
import Image from 'next/image'
import send from "../public/send-mail.png"
import footer from "../public/footer.png"
import facebook from "../public/facebook.png"
import insta from "../public/instagram.png"
import twitter from "../public/twitter.png"
import github from "../public/github.png"
import linkedIn from "../public/linkedin.png"
import panaverse from "../../pana_web/public/panaverse.png"
import Link from 'next/link'

const Footer = () => {
    return (
        <>
            <div className='w-full bg-[#1a1543] px-5'>
                <div id='row-1' className='flex justify-around'>
                    <div>
                        <h2 className='text-2xl font-bold py-10 text-yellow-50'>
                            Start your learning with PIAIC.
                        </h2>
                        <div className='flex border-b-2 border-b-white justify-between'>
                            <input type="text" className='flex-grow bg-[#1a1543] text-indigo-100' placeholder='piaic@gmail.com' width={900} />
                            <button>
                                <Image src={send} alt={"send email"} width={30}></Image>
                            </button>
                        </div>
                    </div>
                    <div className='hidden tablet:block'>
                        <Image src={footer} alt={"send email"} width={400} height={350} className={"object-scale-down "}></Image>
                    </div>
                </div>


                <div id='row-2' className='flex flex-col py-5 text-indigo-100 tablet:w-3/4 tablet:m-auto'>
                    <div className='space-y-5 tablet:pb-3'>
                        <Image src={panaverse} alt={"panaverse"} width={60} className={"pb-3"}></Image>
                        <i className=''>'Unleash the power of tomorrow with us.'</i>
                    </div>
                    <div className='grid tablet:grid-cols-3 grid-cols-1 '>
                        <div className='leading-loose'>
                            <h4 className='hover:underline'>
                                <Link href={"/about"}>About</Link>
                            </h4>
                            <h4 className='hover:underline'>
                                <Link href={"/courses"}>Courses</Link>
                            </h4>
                            <h4 className='hover:underline'>
                                <Link href={"/admission"}>Admission</Link>
                            </h4>
                        </div>
                        <div className='leading-loose hidden tablet:block'>
                            <h4 className='hover:underline'>
                                <Link href={"/termServices"}>Terms and condition.</Link>
                            </h4>
                            <h4 className='hover:underline'>
                                <Link href={"/privacy"}>Privacy policy</Link>
                            </h4>
                            <h4 className='hover:underline'>
                                <Link href={"/cookieP"}>Cookie policy</Link>
                            </h4>
                        </div>
                        <div className='leading-loose'>
                            <h4>Let's Learn.</h4>
                            <p>piaic@hotmail.com</p>
                            <div className='flex justify-between tablet:justify-start space-x-5 py-5'>
                                <Image src={twitter} alt={"twitter"}></Image>
                                <Image src={github} alt={"github"}></Image>
                                <Image src={linkedIn} alt={"linkedIn"}></Image>
                                <Image src={facebook} alt={"facebook"}></Image>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
