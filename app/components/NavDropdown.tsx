"use client";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Link from "next/link";
import { useRef, useState } from "react";
import { ChevronDownIcon } from "./icons";

type NavDropdownItem = {
  label: string;
  href: string;
};

type NavDropdownProps = {
  label: string;
  items: NavDropdownItem[];
};

const NavDropdown = ({ label, items }: NavDropdownProps) => {
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
    <Menu as="div" className="relative">
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <MenuButton
          className="flex items-center gap-1.5 px-3 py-0.5 rounded-lg cursor-pointer text-[11px] xl:text-[14px] tracking-wider transition-all outline-none font-sans"
          style={{
            color: "rgba(255,255,255,0.92)",
            textShadow: "0px 1px 4px rgba(0,0,0,0.8)",
            background: "transparent",
          }}
        >
          {label}
          <ChevronDownIcon
            className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          />
        </MenuButton>

        {items.length > 0 && (
          <MenuItems
            static={open}
            unmount={false}
            className={`absolute top-full left-0 min-w-45 rounded-2xl overflow-hidden z-50 p-2.5 mt-1 outline-none transition duration-200 ease-out ${
              open ? "visible" : "invisible pointer-events-none"
            }`}
            style={{
              background:
                "linear-gradient(160deg, rgb(10,22,40) 0%, rgb(13,31,60) 60%, rgb(10,22,40) 100%)",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0px 16px 40px rgba(0,0,0,0.5)",
              opacity: open ? 1 : 0,
              transform: open ? "none" : "scale(0.95)",
            }}
          >
            <div
              className="absolute top-0 right-0 w-20 h-20 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(0,63,107,0.4) 0%, transparent 70%)",
                transform: "translate(30%, -30%)",
              }}
            />

            {items.map((item) => (
              <MenuItem key={item.href}>
                <Link
                  // href={item.href}
                  href="/"
                  className="relative z-10 flex items-center px-4 py-2.5 text-[14px] font-medium transition-all data-focus:text-white font-sans rounded-xl hover:bg-white/10"
                  style={{ color: "rgba(255,255,255,0.65)" }}
                >
                  {item.label}
                </Link>
              </MenuItem>
            ))}
          </MenuItems>
        )}
      </div>
    </Menu>
  );
};

export default NavDropdown;
