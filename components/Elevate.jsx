import Image from 'next/image'
import React from 'react'
import laptop from "@/public/Inro.png"

const Elevate = () => {
  return (
    <div>
      <div class="bg-[#040e0b] text-[#BDBCBA] p-16">
        <div className="flex flex-row">
          <div className=" w-full">
            <div className="lg:w-[600px] mt-20 ">
            <h1 class="text-5xl text-white font-bold mb-4 pr-40">Elevate Your Online Presence</h1>
            <p class="mb-8 text-xl ">
              Unlock the full potential of your digital landscape <br/> with my comprehensive web design and <br/>development services. From stunning visuals to <br/> seamless functionality, I’ll help you create an <br/> online
              presence that commands attention.
            </p>
            </div>
          </div>
          <div className=" ">
            <Image src={laptop} alt=" " className='w-auto  h-auto ' width={800} height={800} />
          </div>
        </div>

        <div class="flex flex-col md:flex-row md:space-x-8 mt-20 mb-8">
          <div class="flex-1 bg-card p-4 rounded-lg shadow-lg">
            <div className="lg:w-96 mt-20">
            <h2 class="text-4xl text-white font-semibold">Web Development</h2>
            <p className='mt-6 text-xl text-[#BBBABB]'>Harness the power of cutting-edge technologies and innovative strategies to build web experiences that captivate, engage, and drive tangible results for your business.</p>
            </div>
          </div>

          <div class="flex-1 bg-card bg-white p-4 rounded-lg shadow-lg">
            <div className="p-10 ">
            <h2 class="text-4xl font-semibold text-[#223F2C]">Graphic Design</h2>
            <p className='mt-6 text-xl  text-[#888588]'>
              Elevate your brand’s visual identity with my expertise in graphic design. From bold logos to captivating marketing materials, I’ll help you create a cohesive and memorable brand presence that
              resonates with your target.
            </p>
            </div>
            <div class="grid grid-cols-2 gap-4 mt-4">
              <div class="bg-muted p-2 rounded-lg text-center">
                <Image aria-hidden="true" alt="Branding" src="" width={10} height={10} />
                <p>Branding</p>
              </div>
              <div class="bg-muted p-2 rounded-lg text-center">
                <Image aria-hidden="true" alt="UI Design" src="" width={10} height={10} />
                <p>UI Design</p>
              </div>
              <div class="bg-muted p-2 rounded-lg text-center">
                <Image aria-hidden="true" alt="Illustration" src="" width={10} height={10} />
                <p>Illustration</p>
              </div>
              <div class="bg-muted p-2 rounded-lg text-center">
                <Image aria-hidden="true" alt="3D Modelling" src="" width={10} height={10} />
                <p>3D Modelling</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Elevate
