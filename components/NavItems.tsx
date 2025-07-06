import { NavItemsProps } from "@/types";
import Link from "next/link";
import React from "react";

const NavItems: React.FC<NavItemsProps> = ({
  name,
  href,
  dropdownItems,
  className = "",
  isMobile = false,
  onClose,
}) => {
  const handleLinkClick = () => {
    if (isMobile && onClose) {
      onClose();
    }
  };

  if (isMobile) {
    return (
      <Link
        href={href}
        onClick={handleLinkClick}
        className={`block text-lg text-gray-800 px-4 py-3 transition hover:bg-gray-100 rounded-lg font-medium ${className}`}
      >
        {name}
      </Link>
    );
  }

  return (
    <div className="group relative">
      <Link
        href={href}
        className={`text-base text-gray-800 px-3 py-2 transition hover:bg-white hover:rounded-lg font-medium ${className}`}
      >
        {name}
      </Link>

      {dropdownItems && dropdownItems.length > 0 && (
        <div className="absolute -left-1  overflow-hidden  hidden group-hover:grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1 bg-white shadow-xl rounded-md p-6 min-w-[500px] z-50">
          {dropdownItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="hover:bg-[#9ecdca] backdrop-blur-lg p-2 rounded-lg transition duration-200"
            >
              <p className="font-bold text-[14px] font-sans text-[#1d6554] leading-4">{item.name}</p>
              {item.description && (
                <p className="text-[12px] font-sans text-gray-600 mt-1 leading-tight">
                  {item.description}
                </p>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavItems;
