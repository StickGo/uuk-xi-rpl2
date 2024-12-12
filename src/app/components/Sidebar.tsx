import React from "react";
import Link from "next/link";
import { FaHome, FaBox, FaUsers, FaFileAlt, FaPlus } from "react-icons/fa";

const Sidebar = () => {
  const menuItems = [
    { icon: <FaHome className="text-customBlue" />, label: "Home", href: "/" },
    { icon: <FaBox className="text-customBlue" />, label: "Inventory", href: "/inventory" },
    { icon: <FaUsers className="text-customBlue" />, label: "All Account", href: "/account" },
    { icon: <FaFileAlt className="text-customBlue" />, label: "Transactions", href: "/transactions" },
  ];

  return (
    <div className="w-64 bg-white shadow-md h-screen pt-8">
      {/* Logo Section */}
      <div className="flex items-center justify-center mb-8">
        {/* New Logo with React Icon */}
        <div className=" text-lightBlue flex items-center justify-center w-16 h-16 bg-customBlue rounded-full">
          <FaPlus className="text-white text-3xl" />
        </div>
      </div>

      {/* Menu Items */}
      <div className="flex flex-col"> 
        {menuItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="flex items-center px-6 py-3 hover:bg-blue-50 text-lightBlue"
          >
            <span className="mr-3">{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
