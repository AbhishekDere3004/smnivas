import React from 'react';
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareYoutube } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
    <div className="bg-[#000000]">
      <div className="max-w-screen-lg px-4 sm:px-6 text-gray-500 sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto">
        <div className="p-5">
          <h3 className="font-bold text-xl text-white">S M Nivas</h3>
        </div>
        <div className="p-5">
          <div className="text-sm uppercase text-white font-bold">Resources</div>
          <a className="my-3 block" href="/#">Documentation <span className="text-teal-600 text-xs p-1"></span></a>
          <a className="my-3 block" href="/#">Tutorials <span className="text-teal-600 text-xs p-1"></span></a>
          <a className="my-3 block" href="/#">Support <span className="text-red-800 text-xs p-1">New</span></a>
        </div>
        <div className="p-5">
          <div className="text-sm uppercase text-white font-bold">Support</div>
          <a className="my-3 block" href="/#">Help Center <span className="text-teal-600 text-xs p-1"></span></a>
          <a className="my-3 block" href="/#">Privacy Policy <span className="text-teal-600 text-xs p-1"></span></a>
          <a className="my-3 block" href="/#">Conditions <span className="text-teal-600 text-xs p-1"></span></a>
        </div>
        <div className="p-5">
          <div className="text-sm uppercase text-white font-bold">Contact us</div>
          <a className="my-3 block" href="/#">S m Nivas No.- 146, bondarwadia/ b- bondarwadia , tal-nwar, dist - satara 

            <span className="text-teal-600 text-xs p-1"></span>
          </a>
          <a className="my-3 block" href="/#">smniwas9920@gmail.com
            <span className="text-teal-600 text-xs p-1"></span>
          </a>
          <a className="my-3 block" href="/#">8767570766
            <span className="text-teal-600 text-xs p-1"></span>
          </a>
        </div>
      </div>
    </div>

    <div className="bg-[#fdfeff] pt-2">
      <div className="flex pb-5 px-3 m-auto pt-5 border-t text-gray-800 text-sm flex-col max-w-screen-lg items-center">
        <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
          <a href="/#" className="w-6 mx-7">
           <FaSquareFacebook className='h-10  w-10'/>
          </a>
          <a href="/#" className="w-6 mx-7">
            <FaSquareInstagram className='h-10  w-10'/>
          </a>
          <a href="/#" className="w-6 mx-7">
           <FaSquareYoutube className='h-10  w-10'/>
          </a>
          <a href="/#" className="w-6 mx-7">
            <FaLinkedin className='h-10  w-10'/>
          </a>
        </div>
        <div className="my-5">© AbhishekDere 2024. All Rights Reserved.</div>
      </div>
    </div>
    </div>
  )
}

export default Footer
