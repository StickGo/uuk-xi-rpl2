"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { VscClose } from 'react-icons/vsc';
import { GiHamburgerMenu } from 'react-icons/gi';
import logo from '@/assets/PTlogo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-sky-600 text-white py-2 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <a href="/" className="text-xl font-bold flex items-center">
          <Image src={logo} alt="Inventory" width={100} height={100} />
        </a>
        <div className="hidden sm:flex space-x-4">
          <a href="/about" className="hover:text-gray-200">
            About
          </a>
          <a href="/products" className="hover:text-gray-200">
            Products
          </a>
          <a href="/contact" className="hover:text-gray-200">
            Contact
          </a>
          <a href="/inventaris" className="hover:text-gray-200">
            Inventaris
          </a>
        </div>
        <button className="sm:hidden focus:outline-none" onClick={toggleMenu}>
          {isOpen ? <VscClose size={24} /> : <GiHamburgerMenu size={24} />}
        </button>
      </div>
      {isOpen && (
        <div className="sm:hidden bg-[#4769bd] py-2 space-y-2">
          <a href="/about" className="block px-4 hover:text-gray-200">
            About
          </a>
          <a href="/products" className="block px-4 hover:text-gray-200">
            Products
          </a>
          <a href="/contact" className="block px-4 hover:text-gray-200">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
