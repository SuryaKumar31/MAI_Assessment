"use client";

import Link from "next/link";
import NavDropdown from "./NavDropdown";
import {
  ApplyInternshipIcon,
  PostProjectIcon,
  SendProposalsIcon,
} from "./icons";
import { howItWorksItems, maiAwardsItems } from "../utils/data";

const navLinkClassName =
  "flex items-center gap-1.5 px-3 py-1.5 rounded-lg cursor-pointer text-[11px] xl:text-[14px] tracking-wider transition-all font-sans ";

const navLinkStyle = {
  color: "rgba(255,255,255,0.82)",
  textShadow: "0px 1px 4px rgba(0,0,0,0.8)",
  background: "transparent",
} as const;

const actionLinkClassName =
  "flex items-center gap-1.5 px-3 rounded-full text-white text-[11px] xl:text-[14px] font-medium uppercase tracking-wider cursor-pointer font-sans";

const SecondaryNav = () => {
  return (
    <div className="hidden lg:flex items-center justify-between px-6 sm:px-10 xl:px-24 h-11 backdrop-blur-md border-b border-white/10 bg-[linear-gradient(90deg,_rgba(5,12,28,0.45)_0%,_rgba(10,22,40,0.45)_100%)]">
      <div className="flex items-center gap-1">
        <div className="relative">
          <Link href="/">
            <span className={navLinkClassName} style={navLinkStyle}>
              Home
            </span>
          </Link>
        </div>

        <NavDropdown label="How It Works" items={howItWorksItems} />

        <div className="relative">
          <Link href="/">
            <span className={navLinkClassName} style={navLinkStyle}>
              Projects
            </span>
          </Link>
        </div>

        <div className="relative">
          <Link href="/">
            <span className={navLinkClassName} style={navLinkStyle}>
              Blogs
            </span>
          </Link>
        </div>

        <NavDropdown label="Mai Awards" items={maiAwardsItems} />
      </div>

      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2">
          <Link href="/" className={actionLinkClassName}>
            <PostProjectIcon />
            Post a Project
          </Link>

          <div
            style={{
              width: "1px",
              height: "16px",
              background: "rgba(255,255,255,0.12)",
            }}
          />
        </div>

        <div className="flex items-center gap-2">
          <Link href="/" className={actionLinkClassName}>
            <SendProposalsIcon />
            Send Proposals
          </Link>

          <div
            style={{
              width: "1px",
              height: "16px",
              background: "rgba(255,255,255,0.12)",
            }}
          />
        </div>

        <div className="flex items-center gap-2">
          <Link href="/" className={actionLinkClassName}>
            <ApplyInternshipIcon />
            Apply Internship
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SecondaryNav;
