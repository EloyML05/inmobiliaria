'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'   
export default function NavLink({ children,href,className,onClick,display}:{
      children:React.ReactNode,
      href:string,
      className?:string,
      onClick?:()=>void,
      display?:boolean}) {
    const pathname = usePathname(); 
    if(pathname === href)className = className + '  bg-black '
    if(!display) return null
        return (
            <Link
            href={href}
            className=  {className} 
            onClick={onClick}
            tabIndex={-1}
            role='menuitem'
            >
            {children}
          </Link>

  )
}
