import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function Navbar() {
    return (
        <header className="bg-gray-500">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to="/" exact activeClassName="text-white" className="inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-600 text-4xl font-bold cursive tracking-widest" >
                        Home
                    </NavLink>
                    <NavLink to="/post" activeClassName="text-red-100 bg-gray-400" className="inline-flex items-center rounded py-3 px-3 my-6 text-red-300 hover:text-green-600" >
                        Blog posts
                    </NavLink>
                    <NavLink to="/project" activeClassName="text-red-100 bg-gray-400" className="inline-flex items-center rounded py-3 px-3 my-6 text-red-300 hover:text-green-600" >
                        Projects
                    </NavLink>
                    <NavLink to="/about" activeClassName="text-red-100 bg-gray-400" className="inline-flex items-center rounded py-3 px-3 my-6 text-red-300 hover:text-green-600" >
                        About Me
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6" >
                    <SocialIcon url="https://www.linkedin.com/in/rumendimitrov101/" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
                    <SocialIcon url="https://github.com/rndimitrov" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
                </div>
            </div>
        </header>
    )
}