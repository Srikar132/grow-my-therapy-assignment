"use client"

import { navLinks } from '@/constants'
import { Menu, Sparkles } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'
import NavItems from './NavItems'
import Sidebar from './Sidebar'
import Link from 'next/link'

const Header = () => {

    const [isSidebarOpen , setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }

  return (
      <>
          <header className="sticky top-0 backdrop-blur-3xl opacity-95 shadow-md bg-zinc-100/90 z-30  common-padding">
              <div className="flex items-center justify-between screen-max-width">
                  <Link href={"/"} className="flex-shrink-0 flex items-center gap-2">
                      <Image
                          src="/logo.png"
                          alt="logo"
                          width={200}
                          height={100}
                          className="object-contain cursor-pointer sm:h-15 sm:w-40 md:h-30  md:w-60 md:scale-120"
                          priority
                      />
                  </Link>

              <nav className="hidden lg:flex items-center space-x-3 sm:space-x-4 lg:space-x-6">
                      {navLinks.map((link) => (
                          <NavItems
                              className="'text-[20px] font-bold text-[#024742] leading-tight'"
                              key={link.name}
                              name={link.name}
                              href={link.href}
                              dropdownItems={link.dropdownItems}
                              isMobile = {false}
                          />
                      ))}
                  </nav>

                  {/* CTA Button */}
                  <div className="hidden lg:flex flex-shrink-0">
                      <button
                          className="flex items-center text-black gap-2 border border-black rounded-lg bg-white px-3 py-2 sm:px-3 sm:py-2 lg:px-4 lg:py-2 hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                          aria-label="Get started"
                      >
                          <Sparkles className="w-4 h-4 lg:w-5 lg:h-5" />
                          <span className="text-lg cursor-pointer">Get started</span>
                      </button>
                  </div>

                  <button
                      title='s'
                      onClick={toggleSidebar}
                      className='lg:hidden p-2 rounded-lg hover:bg-[#a6b8b1] transition-colors'
                      aria-expanded={isSidebarOpen}
                      aria-label='open menu'
                  >
                      <Menu className='w-6 h-6'/>

                  </button>
              </div>

          </header>
          <Sidebar
              isOpen={isSidebarOpen}
              onClose={closeSidebar}
              navLinks={navLinks}
          />
      </>

  )
}

export default Header