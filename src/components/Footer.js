import React from 'react';
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaYoutube,
    FaHome,

} from "react-icons/fa";
import { logo, paymentlogo } from "../assets/index";

const Footer = () => {
  return (
    <div className="bg-black text-[#949494] py-20 font-titleFont">
        <div className="max-w-screen-x1 mx-auto grid grid-cols-4">
            {/*============LOGO ICON=============*/}
            <div className="flex flex-col gap-7">
                <img className="w-32" src={logo} alt="logo" />
                <p className="text-white text-sm tracking-wide">nithinbabu2000@gmail.com</p>
                <img className="w-32" src={paymentlogo} alt="logo" />
                <div className="flex gap-5 text-lg text-gray-400">
                    <FaFacebookF className="hover:text-white duration-300 cursor-pointer" />
                    <FaInstagram className="hover:text-white duration-300 cursor-pointer" />
                    <FaTwitter className="hover:text-white duration-300 cursor-pointer" />
                    <FaYoutube className="hover:text-white duration-300 cursor-pointer" />
                </div>
            </div>
            {/*============LOGO ICON=============*/}
            {/*============LOGO ICON=============*/}
            <div>
            <h2 className="text-2xl font-semibold text-white mb-4">locate us</h2>
                <div className="text-base flex flex-col gap-2">
                    <p>Nithin Babu</p>
                    <p>Mobile: 6282319657</p>
                    <p>Phone: 0484-2943562</p>
                    <p>Email: nithinbabu2000@gmail.com</p>
                </div>
            </div>
            {/*============LOGO ICON=============*/}
            {/*============LOGO ICON=============*/}
            {/*============LOGO ICON=============*/}
            {/*============LOGO ICON=============*/}
        </div>
    </div>
  )
}

export default Footer