import Image from 'next/image'
import React from 'react'

const Graphic = () => {
    return (
        <div>
            <div class="flex h-auto flex-col md:flex-row w-full bg-[#044C35] p-8">
                <div class="  w-full bg-white">
                    <div className="grid grid-cols-3">
                    <Image class="" src="" alt="Image 1" width={6} height={10} />
                    <Image class="" src="" alt="Image 2" width={10} height={10} />
                    <Image class="" src="" alt="Image 3" width={10} height={10} />
                    <Image class="" src="" alt="Image 4" width={10} height={10} />
                    <div className='bg-black text-md rounded-xl w-60 lg:w-72 p-2 md:p-6 '>
                        <div className=" text-[#C6D1BD]">
                            <h3 class="md:text-xl font-semibold ">Unleash the power of</h3>
                            <p class="">My Comprehensive Skills</p>
                        </div>
                    </div>
                    <Image class="" src="" alt="Image 5" width={10} height={10} />
                    <Image class="" src="" alt="Image 6" width={10} height={10} />
                    <Image class="" src="" alt="Image 7" width={10} height={10} />
                    <Image class="" src="" alt="Image 8" width={10} height={10} />
                    <Image class="" src="" alt="Image 9" width={10} height={10} />
                    </div>
                    <div className='bg-[#074F3C] text-[#C6CDC5] text-md flex justify-between rounded-2xl m-2 md:m-10 p-4 md:p-10'>
                        <div className=" ">
                            <h3 class="text-sm lg:text-xl font-semibold ">Coding Expertise</h3>
                            <p class="text-xs lg:text-xl">Mastering the art of web development.</p>
                        </div>
                        <div className="">
                            <h3 class="text-sm lg:text-xl font-semibold ">Creative Visually</h3>
                            <p class="text-xs lg:text-xl">Stunning Designs.</p>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-4 my-10 space-y-6 md:grid-cols-3 lg:gap-6 lg:space-y-10 bg-card md:p-16  h-auto lg:my-10 text-[#E6EBE7] ">
                    <div className='w-full h-auto md:h-20'>
                        <h2 class="text-lg font-bold text-[#AFC4B6]">UI/UX</h2>
                        <h3 class="text-xl font-semibold text-white">Graphic Design</h3>
                        <p class="text-[#AFC4B6]  md:pr-10 mt-4">Seamlessly blending creativity and technical prowess to deliver.</p>
                    </div>
                    <div className='w-full h-auto md:h-20'>
                        <h3 class="text-lg font-semibold text-[#AFC4B6]">Graphic Design</h3>
                        <h3 class="text-xl font-semibold text-white">Branding</h3>
                        <p class="text-[#AFC4B6] md:pr-10 mt-4">With an unwavering commitment to excellence.</p>
                    </div>
                    <div className='w-full h-auto md:h-20'>
                        <h2 class="text-lg font-bold text-[#AFC4B6]">UI Design</h2>
                        <h3 class="text-xl font-semibold text-white">Motion Graphics</h3>
                        <p class="text-[#AFC4B6] pr-10 mt-4">My passion for design extends beyond the surface</p>
                    </div>
                    <div className='w-full h-auto md:h-20'>
                        <h3 class="text-lg font-semibold text-[#AFC4B6]">Proven Track Record</h3>
                        <h3 class="text-xl font-semibold text-white">My</h3>
                        <p class="text-[#AFC4B6] pr-10 mt-4">From conceptualization to execution.</p>
                    </div>
                    <div className='w-full h-auto md:h-20'>
                        <h3 class="text-lg font-semibold text-[#AFC4B6]">Web Design</h3>
                        <h3 class="text-xl font-semibold text-white">Illustration</h3>
                        <p class="text-[#AFC4B6] pr-10 mt-4">Pushing the boundaries of creativity, I seamlessly integrate cutting-edge.</p>
                    </div>
                    <div className='w-full h-auto md:h-20'>
                        <h3 class="text-lg font-semibold text-[#AFC4B6]">3D Modeling</h3>
                        <h3 class="text-xl font-semibold text-white">Photography</h3>

                        <p class="text-[#AFC4B6] pr-10 mt-4">Leveraging the power of visual storytelling, I capture the essence of.</p>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Graphic
