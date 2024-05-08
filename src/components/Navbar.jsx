import React from 'react';
import { IoMenu } from "react-icons/io5";
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <header className="lg:px-16 px-4 bg-[#000000] flex flex-wrap items-center py-4 shadow-md ">
            <div className="flex-1 flex justify-between items-center">
                <a href="/" className="text-[30px] font-bold text-white ">S M Nivas</a>
            </div>

            <label htmlFor="menu-toggle" className="pointer-cursor md:hidden block">
                <IoMenu className="fill-current text-gray-900 h-10 w-10" />
            </label>
            <input className="hidden" type="checkbox" id="menu-toggle" />

            <div className="hidden md:flex md:items-center md:w-auto w-full" id="menu">
                <nav>
                    <ul className="md:flex items-center justify-between text-base text-white font-bold pt-4 md:pt-0">
                        <li><a className="md:p-4 py-3 px-0 block" href="/">About Us</a></li>
                        <li><Link className="md:p-4 py-3 px-0 block" to="/offers">Offers</Link></li>
                        <li><Link className="md:p-4 py-3 px-0 block" to="/blogs">Blog</Link></li>
                        <li><a className="md:p-4 py-3 px-0 block md:mb-0 mb-2" href="/">Contact Us</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;
