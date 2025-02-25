'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Briefcase, Book, Mail } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#fff2e9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <a href="/">
          <div className="text-xl font-bold text-gray-900 cursor-pointer">Pir Adnan</div>
          </a>
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="/work" className="flex items-center text-gray-700 font-medium hover:text-black">
              <Briefcase className="w-5 h-5 mr-1" /> Work
            </Link>
            <Link href="/blogs" className="flex items-center text-gray-700 font-medium hover:text-black">
              <Book className="w-5 h-5 mr-1" /> Blogs
            </Link>
            <Link href="/contact" className="flex items-center text-gray-700 font-medium hover:text-black">
              <Mail className="w-5 h-5 mr-1" /> Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white absolute w-full left-0 top-16 py-2">
          <Link href="/work" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center">
            <Briefcase className="w-5 h-5 mr-2" /> Work
          </Link>
          <Link href="/blogs" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center">
            <Book className="w-5 h-5 mr-2" /> Blogs
          </Link>
          <Link href="/contact" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center">
            <Mail className="w-5 h-5 mr-2" /> Contact
          </Link>
        </div>
      )}
    </nav>
  );
}