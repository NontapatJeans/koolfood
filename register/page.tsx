"use client";

import Link from "next/link";

export default function Register() {
  return (
    <div className="auth-container flex flex-col items-center justify-center min-h-screen">
      {/* Logo */}
      <img
        src="/kool_food_logo_1.png"
        alt="Kool Food"
        className="mb-2"
        style={{ width: "800px", height: "auto" }}
      />

      <h2 className="text-xl font-semibold mb-6 text-center">สมัครสมาชิก</h2>

      {/* Form Container */}
      <div className="form-container flex flex-col items-center text-center">
        <div className="grid grid-cols-2 gap-4 w-full">
          <input type="text" placeholder="First name" className="input-field text-center" />
          <input type="text" placeholder="Last name" className="input-field text-center" />
        </div>
        <input type="email" placeholder="Enter Email Address" className="input-field w-full mt-5 text-center" />
        <input type="password" placeholder="Password" className="input-field w-full mt-5 text-center" />
      </div>

      {/* Buttons Section - Perfectly Centered */}
      <div className="flex flex-col items-center justify-center mt-10 space-y-5 w-full">
        <button className="btn-primary w-80">สร้างบัญชีใหม่</button>
        <Link href="/login">
          <p className="text-link text-center mt-3">มีบัญชีแล้ว? เข้าสู่ระบบ</p>
        </Link>
      </div>
    </div>
  );
}
