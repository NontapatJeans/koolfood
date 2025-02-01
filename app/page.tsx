'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-gray-100 font-sans flex flex-col items-center">
      {/* Header */}
      <header className="w-full flex justify-between items-center px-10 py-4 bg-white shadow-md">
        <div className="flex items-center">
          <Image src="/kool_food_logo_1.png" alt="Logo" width={200} height={200} />
        </div>
        <div className="ml-auto">
          <Link href="/login">
            <button className="btn-primary w-60 py-3 text-lg rounded-lg">Login / Register</button>
          </Link>
        </div>
      </header>

      {/* Search Bar */}
      <div className="w-full bg-black text-white px-6 py-3 flex items-center justify-between shadow-md mt-6 rounded-full max-w-4xl mx-auto">
        <div className="flex items-center space-x-4">
          <button className="text-white font-medium flex items-center px-3 py-2">วันที่</button>
          <span className="text-gray-400">|</span>
          <button className="text-white font-medium flex items-center px-3 py-2">จำนวนคน</button>
          <span className="text-gray-400">|</span>
          <button className="text-white font-medium flex items-center px-3 py-2">ประเภทอาหาร</button>
        </div>
        <div className="flex flex-1 items-center bg-gray-300 rounded-full overflow-hidden mx-4 px-4 py-2 max-w-lg">
          <input
            type="text"
            placeholder="ค้นหาร้านอาหาร"
            className="w-full bg-gray-300 text-gray-600 placeholder-gray-500 focus:outline-none"
          />
        </div>
        <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full text-lg shadow-md transition duration-300 flex items-center">
          ค้นหาเลย!
        </button>
      </div>

      {/* ร้านแนะนำ */}
      <section className="w-full max-w-6xl mt-8 px-6">
        <h2 className="text-lg font-semibold mb-4">ร้านแนะนำ</h2>
        <div className="flex space-x-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-60 h-40 bg-gray-200 rounded-lg shadow-md"></div>
          ))}
        </div>
      </section>

      {/* เมนูยอดนิยม */}
      <section className="w-full max-w-6xl mt-8 px-6">
        <h2 className="text-lg font-semibold mb-4">เมนูยอดนิยม</h2>
        <div className="flex space-x-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-60 h-40 bg-gray-200 rounded-lg shadow-md"></div>
          ))}
        </div>
      </section>

      {/* แบรนด์ */}
      <section className="w-full max-w-6xl mt-8 px-6">
        <h2 className="text-lg font-semibold mb-4">แบรนด์</h2>
        <div className="flex space-x-4">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="w-20 h-20 bg-gray-200 rounded-full shadow-md flex items-center justify-center"></div>
          ))}
        </div>
      </section>
    </div>
  );
}
