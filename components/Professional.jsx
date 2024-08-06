import Image from 'next/image'
import React from 'react'
import laptop from "@/public/Inro.png"

const Professional = () => {
  return (
    <div>
      <div class="bg-[#F2F4F7] flex flex-col p-16">
        <div className="p-6 ">
          <h1 class="text-6xl  mb-4">Unlock the<br />Power of</h1>
          <p class="text-[#636265]  font-medium pr-60 mb-6">As a skilled and versatile professional, I am committed to delivering exceptional results for my clients.</p>
          <button class=" text-[#BDB8B8] px-6 py-2 rounded-2xl border-2 bg-black">Hire Me</button>
        </div>
        <div class="grid grid-row-2 md:grid-cols-2 gap-6 mt-8">
          <div class="bg-card scale-x-105  rounded-lg shadow-md">
            <Image aria-hidden="true" alt="Web Development Prowess" src={laptop} class="rounded-md mb-2" width={400} height={400} />
            <div className="px-6">
              <h2 class="text-xl font-semibold">Web Development Prowess</h2>
              <p class="text-muted-foreground">Graphic Design Mastery</p>
            </div>
          </div>

          <div class="bg-card scale-90 align-top rounded-lg shadow-md">
            <Image aria-hidden="true" alt="Branding Brilliance" src={laptop} class="rounded-md mb-2" width={400} height={400} />
            <h2 class="text-lg font-semibold">Branding Brilliance</h2>
            <p class="text-muted-foreground">UI/UX Expertise</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Professional
