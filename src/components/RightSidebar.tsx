
import React from 'react';
import { FaSearch } from 'react-icons/fa';

const RightSidebar = () => {
  const recentUpdates = [
    "Meditation on Entropy and Void...",
    "A Brief History of Chronomancy...",
    "Deconstructing Cthulhu's non-Euclidean...",
    "My coffee machine became self-aware...",
    "Beginner's guide to summoning a familiar...",
  ];

  const hotTags = [
    "Quantum Foam", "Elder Gods", "Singularity",
    "42", "TARDIS Maintenance", "Glitch in the Matrix",
    "Paradox", "Subspace", "Alchemy",
    "Cyberpunk",
  ];

  return (
    <aside className="w-80 flex-shrink-0 px-8 py-12 bg-[#191919]">
      <div className="relative">
        <input
          type="text"
          placeholder="搜索多元宇宙..."
          className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold border-b-2 border-gray-700 pb-2">位面广播</h3>
        <ul className="mt-4 space-y-2">
          {recentUpdates.map((item, index) => (
            <li key={index}>
              <a href="#" className="text-gray-300 hover:text-white text-sm">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold border-b-2 border-gray-700 pb-2">模因碎片</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {hotTags.map((tag, index) => (
            <a key={index} href="#" className="bg-gray-700 text-gray-300 text-xs font-semibold px-2 py-1 rounded-md hover:bg-gray-600">
              {tag}
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default RightSidebar;
