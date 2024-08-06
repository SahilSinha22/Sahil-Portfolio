import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className="bg-[#081D16] text-center  text-[#BBBDB8] p-8 2xl:px-28">
            <header className="flex flex-col md:flex-row justify-between items-center max-w-6xl 2xl:max-w-screen-2xl  2xl:w-full mb-8">
                <h1 className="text-4xl font-bold">Portfolio</h1>
                <nav>
                    <ul className="flex  justify-around md:space-x-10 2xl:text-xl 2xl:pl-20">
                        <li><a href="#" className="text-[#BBBDB8] ">Home</a></li>
                        <li><a href="#" className="text-[#BBBDB8]">About</a></li>
                        <li><a href="#" className="text-[#BBBDB8]">Services</a></li>
                        <li><a href="#" className="text-[#BBBDB8]">Contact</a></li>
                        <li><a href="#" className="bg-gradient-to-r from-[#082016] to-[#1C2F25] border rounded-2xl text-primary-foreground px-4 py-2  hover:bg-primary/80">Hire Me</a></li>
                    </ul>
                </nav>
            </header>
            </div>
    </div>
  )
}

export default Navbar
