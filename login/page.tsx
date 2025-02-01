"use client";

import Link from "next/link";

export default function Login() {
  return (
    <div className="auth-container flex flex-col items-center justify-center min-h-screen">
      {/* Logo */}
      <img
        src="/kool_food_logo_1.png"
        alt="Kool Food"
        className="mb-4"
        style={{ width: "800px", height: "auto" }}
      />

      <p className="mt-2 text-center">เข้าสู่ระบบ</p>

      {/* Form Container */}
      <div className="flex flex-col items-center w-full max-w-md mt-6">
        <input type="email" placeholder="Enter Email Address" className="input-field w-full text-center" />
        <input type="password" placeholder="Password" className="input-field w-full text-center mt-4" />
      </div>

      {/* Move Login Button Below Inputs and Above "Forgot Password" */}
      <button className="btn-primary w-80 mt-6">Login</button>

      {/* Centering "ลืมรหัสผ่าน?" and "สร้างบัญชีใหม่" */}
      <div className="w-full flex flex-col items-center mt-4 space-y-3">
        <p className="text-link text-center">ลืมรหัสผ่าน?</p>
        <Link href="/register">
          <p className="text-link text-center cursor-pointer hover:underline">สร้างบัญชีใหม่</p>
        </Link>
      </div>
    </div>
  );
}
