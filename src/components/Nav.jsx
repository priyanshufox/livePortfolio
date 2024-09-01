"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { RiMenu3Fill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6";

import Link from "next/link";

function Nav() {
  const [isOpen,setIsOpen] = useState(false);
  const pathname = usePathname();
  const com = "https://drive.google.com/file/d/1uJl9qgMZV9nIwtzq6TX_hWjBEJF8ijdo/view";
  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-50 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="#"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          Priyanshu.dev
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link
            type="button"
            className="hidden md:block text-black shadow-[5px_5px_0px_0px_rgba(109,40,217)]  bg-[#D9FB69] hover:bg-black  hover:text-white  focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700"
             href={"https://github.com/priyanshufox"}
            target="_blank"
          >
            <FaGithub className="text-[2em]" />
          </Link>
          <button
            data-collapse-toggle="navbar-sticky"
           onClick={()=>{
            setIsOpen((prev)=>!prev);
           }}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <RiMenu3Fill className="text-2xl" />
          </button>
        </div>
        <div
          className={`items-center justify-between ${isOpen?"block":"hidden"} w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className=" flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {
              [
                {
                  label:"Home",
                  url:"#"
                },
                {
                  label:"Projects",
                  url:"#projects"
                },
                {
                  label:"Skills",
                  url:"#skill"
                },
                {
                  label:"Contacts",
                  url:"#contacts"
                },
                {
                  label:"About",
                  url:"#about"
                }
              ].map((link,index)=>(
                <li key={index}>
                <a
                  href={link.url}
                  className={`block py-2 px-3 ${pathname==link.url?"bg-blue-500 text-white":"text-black"} rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 `}
                  aria-current="page"
                >
                  {link.label}
                </a>
              </li>
              
              ))

            }
          
            <li >
                <a
                  href={com}
                  className={`block font-bold py-2 px-3 ${pathname==com?"bg-blue-500 text-white":"text-black"} rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 `}
                  aria-current="page"
                >
                
                Download Resume 
                </a>
              </li>
            
            
           
           
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
