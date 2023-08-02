import React from 'react'
import { logo } from "../assets/index"
import { cartImg } from "../assets/index"

const Header = () => {
  return (
  <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont"> 
    <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
      <div>
        <img className="w-28" src={logo} alt="logo" />
      </div>
      <div className="flex items-center gap-8">
        <ul className="flex items-center gap-8">
          <li className=" text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Home</li>
          <li className=" text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Pages</li>
          <li className=" text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Shop</li>
          <li className=" text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Element</li>
          <li className=" text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Blog</li>
        </ul>
        <div className="relative">
          <img className="w-10" src={cartImg} alt="cartImg" />
          <span className="absolute w-6 top-1.5 left-3 text-sm flex items-center justify-center font-semibold">0</span>
        </div>
        <img className="w-8 h-8 rounded-full" 
        src="https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="userLogo" />
      </div>
      </div>
  </div>
  );
}

export default Header