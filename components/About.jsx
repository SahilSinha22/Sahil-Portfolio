import Image from 'next/image'
import React from 'react'
import laptop from "@/public/Inro.png"

const About = () => {
  return (
    <div className="p-16 text-[#B2BAB5] bg-[#040e0b]">
      <div className='flex flex-col lg:flex-row  justify-between '>
        <div class="flex flex-col lg:w-96 text-xl  space-y-4  items-start p-8 bg-background text-foreground">
          <h1 class="lg:text-6xl text-white font-bold mb-4">Revolutionize Your Online</h1>
          <p class="mb-2 text-sm ">Unleash the Potential of Your Brand</p>
          <p class="mb-2">Captivating Designs</p>
          <p class="mb-2">Innovative Strategies</p>
          <p class="mb-4">Elevate your digital landscape with my comprehensive web design and</p>
          <button class=" ">Lets Get Started</button>
        </div>

        <div class="  mt-8 2xl:pr-20">
          <div className="relative">
            <Image src={laptop} alt="Explore My Web Design" class="w-[700px] h-full" width={800} height={800} />
            <div class="flex absolute -top-20 -right-8 gap-40 flex-col ml-4">
              <Image src={laptop} alt="Artwork" class="w-full h-full mb-4" width={200} height={200} />
              <Image src={laptop} alt="Artwork" class="w-full h-full" width={200} height={200} />
            </div>
          </div>
        </div>
      </div>
      <div className=" items-center text-center space-y-4">
        <h2 class="text-6xl font-bold text-white mt-16">About</h2>
        <p class="text-muted-foreground">Discover the Depth of My</p>
      </div>
    </div>
  )
}

export default About
