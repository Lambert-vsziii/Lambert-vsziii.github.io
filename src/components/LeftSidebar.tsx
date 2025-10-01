
import React from 'react';
import Image from 'next/image';
import { AiFillHome, AiOutlineClose } from 'react-icons/ai';
import { FaBlog, FaTags, FaArchive, FaGithub, FaEnvelope, FaRss, FaTimes } from 'react-icons/fa';
import { BiCategory } from 'react-icons/bi';

interface LeftSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const LeftSidebar: React.FC<LeftSidebarProps> = ({ isOpen, onClose }) => {
  return (
    <aside
      className={`fixed lg:relative inset-y-0 left-0 transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 transition-transform duration-300 ease-in-out
      w-64 flex-shrink-0 px-8 py-12 flex flex-col items-center bg-[#191919] z-50`}
    >
      <button
        className="lg:hidden absolute top-5 right-5 text-gray-400 hover:text-white"
        onClick={onClose}
        aria-label="Close menu"
      >
        <FaTimes size={24} />
      </button>

      <div className="flex flex-col items-center text-center mt-8 lg:mt-0">
        <Image
          src="https://placehold.co/100x100/333333/FFF?text=L"
          alt="Lambert"
          width={100}
          height={100}
          className="rounded-full"
        />
        <h1 className="text-2xl font-semibold mt-4">Lambert</h1>
        <p className="text-sm text-gray-400 mt-1">Welcome to the nexus of creation 👋</p>
      </div>

      <nav className="mt-8 w-full">
        <ul>
          <li className="mb-4">
            <a href="#" className="flex items-center p-2 text-lg bg-gray-700 rounded-md">
              <AiFillHome className="mr-3" />
              首页
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="flex items-center p-2 text-lg hover:bg-gray-700 rounded-md">
              <FaBlog className="mr-3" />
              博客
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="flex items-center p-2 text-lg hover:bg-gray-700 rounded-md">
              <BiCategory className="mr-3" />
              分类
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="flex items-center p-2 text-lg hover:bg-gray-700 rounded-md">
              <FaTags className="mr-3" />
              标签
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="flex items-center p-2 text-lg hover:bg-gray-700 rounded-md">
              <FaArchive className="mr-3" />
              归档
            </a>
          </li>
        </ul>
      </nav>

      <div className="mt-auto flex space-x-4">
        <a href="#" className="text-gray-400 hover:text-white"><FaGithub size={20} /></a>
        <a href="#" className="text-gray-400 hover:text-white"><FaEnvelope size={20} /></a>
        <a href="#" className="text-gray-400 hover:text-white"><FaRss size={20} /></a>
      </div>
    </aside>
  );
};

export default LeftSidebar;
