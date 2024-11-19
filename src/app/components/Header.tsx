import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <Link href={"/"}>
        <h1 className="text-xl font-bold">CodeNest</h1>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-4">
        <a href="#home" className="hover:underline">
          Home
        </a>
        <a href="#about" className="hover:underline">
          About
        </a>
        <a href="#services" className="hover:underline">
          Services
        </a>
        <a href="#contact" className="hover:underline">
          Contact
        </a>
      </nav>

      {/* Mobile Navigation */}
      <DropdownMenu.Root>
        <DropdownMenu.Trigger className="md:hidden">
          <p className="p-2 bg-gray-800 rounded hover:bg-gray-900">☰</p>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content
            className="bg-white shadow-md rounded-md py-2 text-black"
            sideOffset={5}
          >
            <DropdownMenu.Item className="px-4 py-2 hover:bg-gray-200">
              <a href="#home">Home</a>
            </DropdownMenu.Item>
            <DropdownMenu.Item className="px-4 py-2 hover:bg-gray-200">
              <a href="#about">About</a>
            </DropdownMenu.Item>
            <DropdownMenu.Item className="px-4 py-2 hover:bg-gray-200">
              <a href="#services">Services</a>
            </DropdownMenu.Item>
            <DropdownMenu.Item className="px-4 py-2 hover:bg-gray-200">
              <a href="#contact">Contact</a>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </header>
  );
};

export default Header;
