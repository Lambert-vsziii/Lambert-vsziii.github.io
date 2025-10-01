
import React from 'react';

const MainContent = () => {
  return (
    <main className="flex-1 p-12">
      <section>
        <h2 className="text-4xl font-bold">Greetings, Traveler 👋</h2>
        <p className="mt-4 text-gray-300">
          You&apos;ve reached the digital consciousness of Lambert. What you see is a projection from the 11th dimension.
        </p>
        <p className="text-gray-300">
          你好，旅人。你已抵达兰伯特的数字意识位面。此乃第十一维度的投影，请谨慎浏览。
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold border-b-2 border-gray-700 pb-2">Lambert - 维度旅人</h2>
        <ul className="mt-4 space-y-2 list-disc list-inside text-gray-300">
          <li>A graduate of the Interdimensional Academy of Quantum Engineering (c. 3042).</li>
          <li>My research focuses on <span className="font-semibold text-white">sentient AI ethics</span> and <span className="font-semibold text-white">subspace communication protocols</span>.</li>
          <li>Currently architecting a Dyson sphere around a black hole for a client. Discussions are welcome via telepathy.</li>
          <li>Hobbies include reverse-engineering pulsars, composing symphonies with cosmic background radiation, and skateboarding on Mobius strips.</li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold border-b-2 border-gray-700 pb-2">Education - 圣殿研修</h2>
        <ul className="mt-4 space-y-4">
          <li>
            <p className="font-semibold text-white">Doctorate in Metaphysical Engineering, The Void University</p>
            <p className="text-sm text-gray-400">Eon 14 - Eon 17</p>
          </li>
          <li>
            <p className="font-semibold text-white">Bachelor of Arcane Sciences, Miskatonic University</p>
            <p className="text-sm text-gray-400">Sept. 1928 - Jun. 1932</p>
          </li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold border-b-2 border-gray-700 pb-2">Work Experience - 契约任务</h2>
        <ul className="mt-4 space-y-6">
          <li className="flex items-center">
            <div className="w-12 h-12 mr-4 bg-gray-700 rounded-md flex items-center justify-center font-bold text-purple-400">
              Ω
            </div>
            <div>
              <p className="font-semibold text-white">Omega Collective - The Finality</p>
              <p className="text-sm text-gray-400">End of Time</p>
            </div>
            <div className="ml-auto text-right">
              <p className="font-semibold">Reality Integrity Engineer</p>
              <p className="text-sm text-gray-400">Present</p>
            </div>
          </li>
          <li className="flex items-center">
            <div className="w-12 h-12 mr-4 bg-gray-700 rounded-md flex items-center justify-center font-bold text-cyan-400">
              Ygg
            </div>
            <div>
              <p className="font-semibold text-white">Yggdrasil Corp.</p>
              <p className="text-sm text-gray-400">Nexus of All Realities</p>
            </div>
            <div className="ml-auto text-right">
              <p className="font-semibold">Lead Branch Manager</p>
              <p className="text-sm text-gray-400">Unknown Era</p>
            </div>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default MainContent;
