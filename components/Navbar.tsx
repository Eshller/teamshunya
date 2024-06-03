"use client";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

  return (
    <div>
      <nav className="max-containertransition-all padding-container relative z-30 py-5">
        <div className="px-8 mx-auto max-w-7xl">
          <div className="flex items-center justify-between h-16">
            <div className="w-full justify-between flex items-center">
              <a className="flex-shrink-0" href="/">
                <Image src="/ts_logo.png" alt="logo" width={174} height={129} />
              </a>
              <div className="hidden md:block transition-all">
                <ul className="hidden h-full gap-12 lg:flex transition-all">
                  {NAV_LINKS.map((link) => (
                    <div key={link.key} className="relative">
                      <Link
                        href={link.href}
                        className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
                        onMouseEnter={() =>
                          link.subLinks && setIsDropdownOpen(true)
                        }
                        onMouseLeave={() =>
                          link.subLinks && setIsDropdownOpen(false)
                        }
                      >
                        {link.label}
                      </Link>
                      {link.subLinks && isDropdownOpen && (
                        <div
                          className="absolute left-0 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                          onMouseEnter={() => setIsDropdownOpen(true)}
                          onMouseLeave={() => setIsDropdownOpen(false)}
                        >
                          <ul>
                            {link.subLinks.map((subLink) => (
                              <li key={subLink.key}>
                                <Link
                                  href={subLink.href}
                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                  {subLink.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </ul>
              </div>
            </div>
            <div className="block">
              <div className="flex items-center ml-4 md:ml-6"></div>
            </div>
            <div className="flex -mr-2 md:hidden transition-all">
              <button
                className="text-gray-800 hover:text-gray-600 transition-all hover:transition-all inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="w-8 h-8"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden transition-all">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {NAV_LINKS.map((link) => (
                <div key={link.key}>
                  <Link
                    href={link.href}
                    className="transition-all hover:font-bold hover:text-gray-800 text-gray-50 block px-3 py-2 rounded-md text-base font-medium"
                  >
                    {link.label}
                  </Link>
                  {link.subLinks && (
                    <div className="pl-4">
                      {link.subLinks.map((subLink) => (
                        <Link
                          href={subLink.href}
                          key={subLink.key}
                          className="block px-3 py-2 rounded-md text-base font-medium text-gray-50 hover:text-gray-800 hover:bg-gray-100"
                        >
                          {subLink.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
