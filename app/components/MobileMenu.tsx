"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  ChevronRight,
  Home,
  Briefcase,
  Send,
  BookOpen,
  Phone,
  Video,
  User,
  HelpCircle,
  FileText,
} from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-[#00143273] backdrop-blur-sm "
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              damping: 30,
              stiffness: 300,
            }}
            className="fixed top-0 right-0 z-[61] w-80 max-w-[90vw] h-screen bg-white flex flex-col shadow-2xl border-l border-[#003F6B1F]"
          >
            <div className="absolute top-0 right-0 w-56 h-56 rounded-full bg-[radial-gradient(circle,rgba(0,119,182,0.08)_0%,transparent_70%)] translate-x-[30%] -translate-y-[30%]" />

            <div className="flex items-center justify-between px-5 py-4 border-b border-[#003F6B17]">
              <Image
                src="/images/Logo-dark.webp"
                alt="MAI"
                width={140}
                height={60}
                className="h-14 w-auto"
              />

              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full border border-[#003F6B26] bg-[#003F6B12] flex items-center justify-center font-sans relative z-10"
              >
                <X size={16} className="text-[#003F6B]" />
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto px-4 py-5 space-y-5">
              {/* Sign In */}
              <div className="flex items-center gap-3 p-4 rounded-2xl cursor-pointer border border-[#003F6B26] bg-gradient-to-br from-[#EBF5FF] to-[#DCEEF9] font-sans">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1E8AC9] to-[#003F6B] flex items-center justify-center">
                  <User size={22} className="text-white" />
                </div>

                <div className="flex-1 font-sans">
                  <p className="font-semibold text-[#003F6B]">
                    Sign In / Register
                  </p>

                  <span className="text-xs text-[#003F6B90]">
                    Access your MAI account
                  </span>
                </div>

                <ChevronRight size={16} className="text-[#003F6B66]" />
              </div>

              <div className="border-t border-[#003F6B17]" />

              {/* Quick Actions */}
              <div>
                <p className="text-[10px] uppercase tracking-[2px] font-bold text-[#003F6B73] mb-3 px-1 font-sans">
                  Quick Actions
                </p>

                <div className="space-y-2">
                  <ActionButton
                    icon={<FileText size={16} />}
                    label="Post Project"
                  />

                  <ActionButton
                    icon={<Briefcase size={16} />}
                    label="Apply Internship"
                  />

                  <ActionButton
                    icon={<Send size={16} />}
                    label="Send Proposals"
                  />
                </div>
              </div>

              <div className="border-t border-[#003F6B17]" />

              {/* Navigation */}
              <div>
                <p className="text-[10px] uppercase tracking-[2px] font-bold text-[#003F6B73] mb-3 px-1 font-sans">
                  Navigation
                </p>

                <div className="space-y-1">
                  <NavItem href="/" icon={<Home size={16} />} label="Home" />

                  <NavItem
                    href="/"
                    icon={<HelpCircle size={16} />}
                    label="How It Works"
                  />

                  <NavItem
                    href="/"
                    icon={<Briefcase size={16} />}
                    label="Projects"
                  />

                  <NavItem
                    href="/"
                    icon={<BookOpen size={16} />}
                    label="Blogs"
                  />
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-[#003F6B17] bg-[#F4F9FF] font-sans">
              <p className="text-center text-xs text-[#003F6B80] mb-3">
                Need help? We&apos;re here for you
              </p>

              <div className="flex gap-3">
                <Link
                  href="/"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white border border-[#003F6B40] text-[#003F6B] font-semibold text-sm"
                >
                  <Video size={14} />
                  Book Demo
                </Link>

                <Link
                  href="/"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#003F6B] to-[#1E8AC9] text-white font-semibold text-sm"
                >
                  <Phone size={14} />
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const ActionButton = ({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) => (
  <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-[#003F6B] to-[#1E8AC9] text-white font-semibold">
    {icon}
    {label}
  </button>
);

const NavItem = ({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) => (
  <Link
    href={href}
    className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#003F6B] hover:bg-[#F4F9FF]"
  >
    <span className="text-[#003F6B80]">{icon}</span>
    {label}
  </Link>
);

export default MobileMenu;
