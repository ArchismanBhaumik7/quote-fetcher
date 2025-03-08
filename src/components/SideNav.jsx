import React, { useState } from 'react'
import { createBrowserRouter, Link } from 'react-router-dom'
import menuIcon from "../assets/menu.svg";

const SideNav = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            {/* Menu Icon (Top Left Corner) */}
            <button
                className="fixed top-4 left-4 z-50 p-2 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <img src={menuIcon} alt="Menu" className="w-8 h-8" />
            </button>

            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full w-[360px] bg-black text-white shadow-lg 
                transform transition-transform duration-300 ease-in-out 
                ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
            >

                {/* Navigation Links */}
                <nav className="mt-16 flex flex-col space-y-4 p-10">
                    <Link
                        to="/"
                        className="p-4 rounded-3xl bg-gray-900 hover:bg-gray-800 transition"
                        onClick={() => setIsOpen(false)}
                    >
                        Home
                    </Link>
                    <Link
                        to="/quotes"
                        className="p-4 rounded-3xl bg-gray-900 hover:bg-gray-800 transition"
                        onClick={() => setIsOpen(false)}
                    >
                        Quotes
                    </Link>
                </nav>
            </div>
        </>
    );

    /* return (
        <div>
            <nav>
                <Link to='/'><li>Home</li></Link>
                <Link to='/quotes'><li>Quotes</li></Link>
            </nav>
        </div>
    ) */
}

export default SideNav
