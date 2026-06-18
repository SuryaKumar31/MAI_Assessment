"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { ChevronDownIcon, UserIcon } from "./icons";

const signInOptions = [
  { label: "Project Owner", href: "#" },
  { label: "Trader", href: "#" },
  { label: "Intern", href: "#" },
];

const SignInDropdown = () => {
  const [open, setOpen] = useState(false);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearCloseTimeout = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const handleMouseEnter = () => {
    clearCloseTimeout();
    setOpen(true);
  };

  const handleMouseLeave = () => {
    clearCloseTimeout();
    closeTimeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 150);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="flex items-center gap-2.5 cursor-pointer px-3 py-2 rounded-full transition-all outline-none hover:brightness-110"
        style={{
          background: "rgba(255,255,255,0.07)",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
          style={{
            background:
              "linear-gradient(135deg, rgb(30,138,201), rgb(0,63,107))",
          }}
        >
          <UserIcon className="text-white" />
        </div>

        <span className="text-white font-semibold text-sm font-sans">
          Sign In
        </span>

        <ChevronDownIcon
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          style={{ color: "rgba(255,255,255,0.4)" }}
        />
      </button>

      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`absolute z-50 mt-2 min-w-55 w-fit rounded-2xl overflow-hidden top-full right-0 header-des-dropdown p-2.5 transition duration-300 ease-out ${
          open ? "visible" : "invisible pointer-events-none"
        }`}
        style={{
          background:
            "linear-gradient(160deg, rgb(10, 22, 40) 0%, rgb(13, 31, 60) 60%, rgb(10, 22, 40) 100%)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          boxShadow: "rgba(0, 0, 0, 0.5) 0px 16px 40px",
          opacity: open ? 1 : 0,
          transform: open ? "none" : "scale(0.95)",
        }}
      >
        {signInOptions.map((option) => (
          <Link
            key={option.label}
            href={option.href}
            className="block px-4 py-3 text-white text-sm font-medium font-sans rounded-xl transition-colors hover:bg-white/10"
          >
            {option.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SignInDropdown;
