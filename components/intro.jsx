import Image from 'next/image'
import React from 'react'
import laptop from "@/public/Inro.png"
const Intro = () => {
    return (
        <div className="bg-[#081D16] w-full">
            <div className=" flex flex-col justify-between md:flex-row  text-[#BBBDB8] pl-8">


                <div className="mb-8 grow  px-20 pt-40">
                    <h2 className="md:text-6xl text-white font-semibold">Introducing My <br/>
                   Impressive</h2>
                    <p className="text-muted-foreground text-xl pr-40  mt-4">Welcome to my online portfolio, where I showcase my diverse skills and experiences. Explore the intricate details of my work.</p>
                    <a href="#" className="bg-secondary  text-secondary-foreground px-4 py-2 border-2 border-[#BBBDB8]  rounded-2xl mt-4 inline-block hover:bg-secondary/80">Discover More</a>
                </div>

                <div className="flex grow justify-center mb-8">
                    <Image src={laptop} alt="Portfolio Preview" className="xl:w-[1400px] h-60 w-60 xl:h-[600px] shadow-lg" width={800} height={800} />
                </div>
            </div>
            <div className="flex justify-center lg:text-4xl  lg:space-x-14 py-12">
                <span className="text-white">Shell</span>
                <span className="text-white">Ferrari</span>
                <span className="text-white">Microsoft</span>
                <span className="text-white">Apple</span>
                <span className="text-white">Google</span>
                <span className="text-white">Amazon</span>
                <span className="text-white">Walmart</span>
            </div>
        </div>
    )
}

export default Intro
