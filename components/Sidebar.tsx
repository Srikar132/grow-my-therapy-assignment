"use client"

import { X } from 'lucide-react'
import React, { useEffect, useCallback } from 'react'
import NavItems from './NavItems'
import { SidebarProps } from '@/types'

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, navLinks }) => {
  const handleEscape = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape" && isOpen) {
      onClose()
    }
  }, [isOpen, onClose])

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, handleEscape])

  if (!isOpen) return null

  return (
      <div className="fixed inset-0 z-40 lg:hidden transition-opacity duration-300 opacity-100 ">
        <div
            className="fixed inset-0 bg-black/30 bg-opacity-50"
            onClick={onClose}
            aria-hidden="true"
        />

        <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 transform transition-all duration-300 ease-out translate-x-0">
          <button
              className="absolute top-4 right-4 p-2 transition-colors duration-200"
              onClick={onClose}
              aria-label="Close sidebar"
              aria-expanded={isOpen}
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center justify-center pt-20 pb-8">
            <h2 className="text-2xl text-[#127761] font-semibold">Ellie Sumekhar</h2>
          </div>

          <nav className="px-6 space-y-4 flex flex-col items-center justify-center">
            {navLinks.map((link) => (
                <div key={link.name}>
                  <NavItems
                      className="text-xl"
                      name={link.name}
                      href={link.href}
                      isMobile={true}
                      onClose={onClose}
                  />
                </div>
            ))}
          </nav>
        </div>
      </div>
  )
}

export default Sidebar