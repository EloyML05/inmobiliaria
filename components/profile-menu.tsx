'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Profile from "@/assets/images/profile.png";
import { FaGoogle } from 'react-icons/fa';


export default function ProfileMenu() {

  const [isLoggedin, setIsLoggedin] = useState(true);
  const [isMenuUserOpen, setIsMenuUserOpen ]=useState(false);
  return (
   <>
    {!isLoggedin && <div className="hidden md:block md:ml-6">
            <div className="flex items-center">
              <button className="flex items-center text-white bg-gray-700 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2" onClick={() => setIsLoggedin(true)}>
                <i className="fa-brands fa-google text-white mr-2"></i>
                <FaGoogle className="fa-brands fa-google text-white mr-2"/>
                <span>Login or Register</span>
              </button>
            </div>
          </div>}

          {isLoggedin && <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
            <a href="messages.html" className="relative group">
              <button
                type="button"
                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">View notifications</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  />
                </svg>
              </button>
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                2
              </span>
            </a>
            <div className="relative ml-3">
              <div>
                <button
                  type="button"
                  className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                  onClick={() => setIsMenuUserOpen((prev) => !prev)}
                  onBlur={() => setTimeout(() => setIsMenuUserOpen(false), 200)}>
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">Open user menu</span>
                  <Image
                    className="h-8 w-8 rounded-full"
                    src={Profile}
                    alt=""
                  />
                </button>
              </div>

              {isMenuUserOpen && <div
                id="user-menu"
                className=" absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabIndex={-1}>
                <Link
                  href="/profile"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabIndex={-1}
                  id="user-menu-item-0">
                  Your Profile
                </Link>
                <Link
                  href="saved-properties.html"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabIndex={-1}
                  id="user-menu-item-2">
                  Saved Properties
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabIndex={-1}
                  id="user-menu-item-2" onClick={() => setIsLoggedin(false)}>
                  Sign Out
                </Link>
              </div>}
            </div>
          </div>}
   
   </>
  )
}
