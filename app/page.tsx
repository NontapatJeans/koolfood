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
        <div>
          <Link href="/login">
            <button className="btn-primary w-60 py-3 text-lg rounded-lg">Login / Register</button>
          </Link>
        </div>
      </header>

      {/* Search Bar */}
      <div className="w-full bg-black text-white px-6 py-3 flex items-center justify-between shadow-md mt-6">
        <div className="flex space-x-6 text-lg items-center">
          <button className="text-white font-medium">วันที่</button>
          <span className="text-white">|</span>
          <button className="text-white font-medium">จำนวนคน</button>
          <span className="text-white">|</span>
          <button className="text-white font-medium">ประเภทอาหาร</button>
          <span className="text-white">|</span>
        </div>
        <div className="flex flex-1 items-center bg-gray-300 rounded-full overflow-hidden mx-4">
          <input
            type="text"
            placeholder="ค้นหาร้านอาหาร"
            className="w-full px-4 py-2 bg-gray-300 text-gray-600 placeholder-gray-500 focus:outline-none"
            disabled
          />
        </div>
        <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full text-lg shadow-md transition duration-300">
          ค้นหาเลย!
        </button>
      </div>
    </div>
  );
}
