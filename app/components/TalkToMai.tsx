"use client";

import { Headphones, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TalkToMai() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      {isMounted && (
        <motion.div
          className="fixed bottom-6 right-6 z-[9999]"
          initial={{
            x: "-50vw",
            y: "-50vh",
            scale: 1.4,
            opacity: 0,
          }}
          animate={{
            x: 0,
            y: 0,
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: 1.8,
            type: "spring",
            stiffness: 80,
            damping: 20,
          }}
        >
          {/* Dark Blue Message Card - Shows on Hover */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                transition={{ duration: 0.2 }}
                className="absolute bottom-16 right-0 w-72 rounded-2xl shadow-2xl p-4 mb-2 font-sans" // ← removed overflow-hidden
                style={{
                  background: "rgba(18, 24, 40, 0.97)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                    style={{
                      background:
                        "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)",
                    }}
                  >
                    <Headphones className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-white font-extrabold text-base tracking-tight font-sans">
                    Hi! I&apos;m MAI
                  </h3>
                </div>

                {/* Message */}
                <p className="text-gray-200 text-sm leading-relaxed mb-4 font-normal">
                  Hi there! I&apos;m MAI 😊 I can help you register or log in,
                  post a project, send a proposal, or apply for an internship
                  and I can even do most of it for you. What would you like to
                  do?
                </p>

                {/* Footer */}
                <div
                  className="flex items-center justify-between text-xs text-gray-400 pt-3"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <span className="flex items-center gap-1.5 cursor-move select-none">
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 9l-3 3 3 3M9 5l3-3 3 3M15 19l-3 3-3-3M19 9l3 3-3 3M12 3v18M3 12h18"
                      />
                    </svg>
                    Drag to move
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-green-400 rounded-full" />
                    Online 24/7
                  </span>
                </div>

                {/* Triangle tip — bottom-right pointing down toward FAB */}
                <span
                  className="absolute -bottom-[9px] right-5"
                  style={{
                    width: 0,
                    height: 0,
                    borderLeft: "9px solid transparent",
                    borderRight: "9px solid transparent",
                    borderTop: "9px solid rgba(18, 24, 40, 0.97)",
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>

          <div className="relative">
            {/* Glow */}
            <div className="absolute inset-0 rounded-full blur-xl bg-cyan-500/30 scale-125" />

            {/* Rotating Border */}
            <div className="absolute inset-0 rounded-full animate-spin-slow">
              <div
                className="w-14 h-14 rounded-full"
                style={{
                  background:
                    "conic-gradient(transparent 0deg, rgba(0,150,199,.8) 90deg, transparent 180deg, rgba(0,150,199,.7) 270deg, transparent 360deg)",
                  WebkitMask:
                    "radial-gradient(circle, transparent 60%, black 62%)",
                  mask: "radial-gradient(circle, transparent 60%, black 62%)",
                }}
              />
            </div>

            {/* Orbit Sparkles with Fade Animations */}
            <AnimatePresence>
              <>
                {/* Orbiting Sparkles */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {/* Sparkle 1 */}
                  <motion.div
                    className="absolute -top-2 left-1/2 -translate-x-1/2"
                    animate={{
                      scale: [0.6, 1.2, 0.6],
                      opacity: [0.2, 1, 0.2],
                      rotate: [-15, 15, -15],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Sparkles className="w-3 h-3 text-cyan-200" />
                  </motion.div>

                  {/* Sparkle 2 */}
                  <motion.div
                    className="absolute top-1/2 -right-2 -translate-y-1/2"
                    animate={{
                      scale: [0.4, 1, 0.4],
                      opacity: [0, 1, 0],
                      rotate: [0, 20, 0],
                    }}
                    transition={{
                      duration: 2.5,
                      delay: 0.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Sparkles className="w-2 h-2 text-cyan-300" />
                  </motion.div>

                  {/* Sparkle 3 */}
                  <motion.div
                    className="absolute left-0 bottom-0"
                    animate={{
                      scale: [0.5, 1.1, 0.5],
                      opacity: [0, 1, 0],
                      rotate: [-10, 10, -10],
                    }}
                    transition={{
                      duration: 2.8,
                      delay: 1.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Sparkles className="w-2 h-2 text-cyan-200" />
                  </motion.div>
                </motion.div>
              </>
            </AnimatePresence>

            {/* Main Button */}
            <button
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="
            relative
            w-14 h-14
            rounded-full
            overflow-hidden
            flex items-center justify-center
            shadow-xl
            group
            cursor-pointer
          "
            >
              <div
                className="
              absolute inset-0
              bg-linear-to-br
              from-sky-950
              via-blue-800
              to-sky-400
            "
              />

              {/* Inner Shadow */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  boxShadow:
                    "inset 0 2px 6px rgba(255,255,255,.15), inset 0 -4px 8px rgba(0,0,0,.25)",
                }}
              />

              {/* Soft Circular Gloss */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: `
      radial-gradient(
        circle at 30% 25%,
        rgba(255,255,255,.35) 0%,
        rgba(255,255,255,.15) 18%,
        rgba(255,255,255,.05) 30%,
        transparent 55%
      )
    `,
                }}
              />

              {/* Smooth Moving Shine */}
              <motion.div
                className="
    absolute
    top-0
    bottom-0
    -left-8
    w-6
    rounded-full
  "
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,255,255,.25), transparent)",
                  filter: "blur(6px)",
                }}
                animate={{
                  x: [-30, 90],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "easeInOut",
                }}
              />

              <Headphones className="w-6 h-6 text-white relative z-10" />

              <div className="absolute -top-1 -right-1">
                <Sparkles className="w-3 h-3 text-cyan-200" />
              </div>
            </button>

            {/* Tooltip */}
            <AnimatePresence>
              {!isHovered && (
                <motion.div
                  initial={{ opacity: 0, x: 6 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 6 }}
                  transition={{ duration: 0.2 }}
                  className="hidden md:block absolute right-20 top-1/2 -translate-y-1/2"
                >
                  <div className="relative bg-sky-700 text-white text-xs font-semibold px-4 py-2 rounded-full shadow-lg whitespace-nowrap font-sans">
                    Need help?
                    <span
                      className="absolute top-1/2 -translate-y-1/2 -right-[5.5px]"
                      style={{
                        width: 0,
                        height: 0,
                        borderTop: "5px solid transparent",
                        borderBottom: "5px solid transparent",
                        borderLeft: "7px solid #0369a1",
                      }}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </>
  );
}
