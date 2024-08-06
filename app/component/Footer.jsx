import Image from 'next/image'
import React from 'react'
import Virtual from "@/public/Virtual.png"

const Footer = () => {
  return (
    <footer className="bg-[#07493A] text-[#A2AFA5] py-8">
        <div className="container mx-auto flex justify-between items-start">
          <div className="flex flex-col items-center">
            <Image aria-hidden="true" alt="logo" src={Virtual} className="" width={200} height={200} />
            <span>© 2024 Portfolio, Inc. All rights reserved.</span>
          </div>
         
          <div className="flex flex-col gap-2 text-xl ">
            <h3 className="font-bold text-2xl">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-muted">Home</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-muted">About</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-muted">Services</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-muted">Contact</a></li>
            </ul>
          </div>
          <div className="flex flex-col gap-2 text-xl">
            <h3 className="font-bold text-2xl">Explore Mores</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-muted">Web Design</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-muted">Graphic Design</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-muted">Branding</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-muted">UI/UX</a></li>
            </ul>
          </div>
          <div className="flex flex-col gap-2 text-xl">
            <h3 className="font-bold text-2xl">Get in Touch</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-muted">Inquiry</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-muted">Portfolio</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-muted">Testimonials</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-muted">Hire Me</a></li>
            </ul>
          </div>
         
        </div>
      </footer>
  )
}

export default Footer
