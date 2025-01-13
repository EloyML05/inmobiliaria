'use server'
import Link from "next/link";
import React from "react";
import  Image  from "next/image";
import LogoW from "@/assets/images/logo-white.png";
import HamburgerButton from "./hamburger-button";
import ProfileMenu from "./profile-menu";
import NavLink from "./nav-link";
import NavLinkLogged from "./nav-link-logged";


export default async function Navbar() {



    return (
    <nav className="bg-blue-700 border-b border-blue-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
            <HamburgerButton display={true}  className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium" />
          </div>

          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <Link
              className="flex flex-shrink-0 items-center"
              href="/">
              <Image
                className="h-10 w-auto"
                src={LogoW}
                alt="PropertyPulse"
                
              />

              <span className="hidden md:block text-white text-2xl font-bold ml-2">
                PropertyPulse
              </span>
            </Link>
            <div className="hidden md:ml-6 md:block">
              <div className="flex space-x-2">
                <NavLink
                display={true}
                  href="/"
                  className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2">
                  Home
                </NavLink>
                <NavLink 
                display={true}
                  href="/properties"
                  className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2">
                  Properties
                </NavLink>
                <NavLinkLogged
                  href="/properties/add"
                  className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2" 
                  display={true}>
                  Add Property
                </NavLinkLogged>
              </div>
            </div>
          </div>

          <ProfileMenu /> 
        </div>
      </div>

 
  
    </nav>
  );
}
