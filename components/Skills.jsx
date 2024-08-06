import Image from 'next/image'
import React from 'react'
import laptop from "@/public/Inro.png"
const Skills = () => {
  return (
    <>
    <div className='bg-[#F3F5F9] p-4 md:p-16'>
      <div class=" ">
        <h2 class="text-4xl font-bold text-[#2C3F33]">My Skills</h2>
        <div className="text-left mt-4">
          <h3 class="text-4xl font-medium text-[#283A28]">Exploring My Diverse</h3>
        </div>
        <div class="grid grid-cols-1 mt-20 md:grid-cols-3 gap-10 ">
          <div class="flex flex-col text-center justify-center ">
            <div className="">
              <Image src={laptop} alt="Web Design" class="w-96 h-60  object-cover" width={400} height={400} />
            </div>
            <div class="p-4 mt-4 justify-center">
              <h4 class="text-lg font-semibold text-[#4D4C4F]">Web Design</h4>
              <p class="text-sm text-[#615F62]">User Experience</p>
            </div>
          </div>

          <div class="flex flex-col text-center justify-center ">
            <div className="">
              <Image src={laptop} alt="Web Design" class="w-96 h-60  object-cover" width={400} height={400} />
            </div>
            <div class="p-4 mt-4 justify-center">
              <h4 class="text-lg font-semibold text-[#4D4C4F]">Graphic  Design</h4>
              <p class="text-sm text-[#615F62]">Branding</p>
            </div>
          </div>

          <div class="flex flex-col text-center justify-center ">
            <div className="">
              <Image src={laptop} alt="Web Design" class="w-96 h-60  object-cover" width={400} height={400} />
            </div>
            <div class="p-4 mt-4 justify-center">
              <h4 class="text-lg font-semibold text-[#4D4C4F]">Crafting</h4>
              <p class="text-sm text-[#615F62]">Capitivating Digital</p>
            </div>
          </div>
        </div>
        </div>
        </div>
        <div class="flex justify-between text-center text-sm lg:text-xl text-[#7D7B7C] font-semibold px-4 lg:px-16 py-6 bg-white">
          <button class="rounded">Contact</button>
          <button class=" px-2 py-2 md:px-6 md:py-2 border-2 border-[#7D7B7C] rounded-3xl  ">Get in Touch</button>
          <button class=" px-2 py-2 md:px-6 md:py-2 border-2 border-[#7D7B7C] rounded-3xl">Lets Collaborate</button>
        </div>
      

    
    </>
  )
}

export default Skills
