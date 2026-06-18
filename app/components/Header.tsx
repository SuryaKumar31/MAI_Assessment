"use client";

import Image from "next/image";
import Link from "next/link";
import { MenuIcon, SearchIcon, UserIcon } from "./icons";
import SecondaryNav from "./SecondaryNav";
import SignInDropdown from "./SignInDropdown";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowSearch(window.scrollY > window.innerHeight - 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className="w-full top-0 fixed z-50">
        {/* Top nav */}
        <div className="bg-[linear-gradient(90deg,rgb(10,22,40)_0%,rgb(13,31,60)_100%)]">
          <nav className="flex items-center justify-between pointer-events-auto px-4 sm:px-10 xl:px-24 h-22">
            {/* LOGO */}
            <Link href="/">
              <Image
                src="/images/Logo.webp"
                className="w-22 md:w-24 xl:w-28 h-auto brightness-0 invert"
                alt="MAI Logo"
                width={180}
                height={60}
                priority
              />
            </Link>

            <AnimatePresence>
              {showSearch && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: -10,
                    scale: 0.98,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    y: -10,
                    scale: 0.98,
                  }}
                  transition={{
                    duration: 0.35,
                    ease: "easeOut",
                  }}
                  className="hidden lg:flex flex-1 max-w-md"
                >
                  <div className="flex flex-col items-center gap-5 w-full">
                    <div className="flex items-center w-full bg-white rounded-full shadow-lg overflow-hidden h-12.5">
                      <input
                        type="text"
                        placeholder="Search Here"
                        className="flex-1 h-full px-6 font-sans text-[15px] text-gray-700 bg-transparent outline-none placeholder-gray-400 font-medium"
                      />
                      <button className="flex items-center justify-center w-10 h-10 mr-1.25 rounded-full transition hover:scale-95">
                        <SearchIcon />
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Signin dropdown */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <SignInDropdown />
            </div>

            {/* Mobile menus */}
            <div className="flex items-center gap-3 lg:hidden">
              <button className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer">
                <SearchIcon />
              </button>
              <button
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                }}
              >
                <UserIcon className="text-white" />
              </button>
              <button
                onClick={() => setIsMenuOpen(true)}
                className="text-white text-2xl focus:outline-none cursor-pointer"
              >
                <MenuIcon />
              </button>
            </div>
          </nav>
        </div>

        {/* secondary nav */}
        <SecondaryNav />
      </header>

      {/* Mobile side menu - when click hamburger button */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Header;
