"use client";

import { useEffect, useRef, useState } from "react";
import { SearchIcon } from "./icons";
import CheckCircleIcon from "./icons/CheckCircleIcon";
import { motion } from "framer-motion";
import TalkToMai from "./TalkToMai";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import {
  aiText,
  dashboardData,
  originalText,
  processSteps,
  projects,
  serviceImages,
  stoneMarketplaceSteps,
  testimonials,
  users,
} from "../utils/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import {
  generateRandomGraph,
  generateRandomRating,
} from "../utils/dashboardHelpers";
import { Sparkles } from "lucide-react";
import ProcessCard from "./ProcessCard";
import ProjectCard from "./ProjectCard";
import StoneProjectForm from "./StoneProjectForm";
import TraderSlider from "./TraderSlider";
import FeaturesGrid from "./FeaturesGrid";
import BlogGrid from "./BlogGrid";
import BlogSwiper from "./BlogSwiper";
import TestimonialCard from "./TestimonialCard";
import TestimonialSwiper from "./TestimonialSwiper";
import TestimonialGrid from "./TestimonialGrid";

const words = [
  "Best Mason",
  "Trusted Builder",
  "Top Plumber",
  "Right Electrician",
  "Local Roofer",
];

const heroTitleWords = [
  "Wall Claddings",
  "Interior Decorators",
  "Worktop Fitters",
  "Local Wall Tilers",
  "Stone Offcuts",
  "Kitchen Installers",
  "Interior Decorators",
];

const Landing = () => {
  const [wordTitleIndex, setWordTitleIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let typingInterval: NodeJS.Timeout;
    let fadeTimeout: NodeJS.Timeout;
    let nextWordTimeout: NodeJS.Timeout;

    const currentWord = heroTitleWords[wordTitleIndex];

    setTypedText("");
    setIsVisible(true);

    let currentIndex = 0;

    typingInterval = setInterval(() => {
      currentIndex++;

      setTypedText(currentWord.slice(0, currentIndex));

      if (currentIndex >= currentWord.length) {
        clearInterval(typingInterval);

        // Wait after typing finishes
        fadeTimeout = setTimeout(() => {
          // Fade Down
          setIsVisible(false);

          // Change word after fade out
          nextWordTimeout = setTimeout(() => {
            setWordTitleIndex((prev) => (prev + 1) % heroTitleWords.length);
          }, 500);
        }, 1000);
      }
    }, 80);

    return () => {
      clearInterval(typingInterval);
      clearTimeout(fadeTimeout);
      clearTimeout(nextWordTimeout);
    };
  }, [wordTitleIndex]);

  //Hero search typwrite
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex <= currentWord.length) {
        setText(currentWord.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);

        setTimeout(() => {
          setWordIndex((prev) => (prev + 1) % words.length);
          setText("");
        }, 1500);
      }
    }, 80);

    return () => clearInterval(interval);
  }, [wordIndex]);

  // Mobile Detection
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 991);

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Dashboard Data
  const [rating, setRating] = useState(4.6);
  const [graphData, setGraphData] = useState(dashboardData.bars);

  // Hover State
  const [isHovered, setIsHovered] = useState(false);

  // AI Card Hover State
  const [isCardHovered, setIsCardHovered] = useState(false);
  const [displayText, setDisplayText] = useState(originalText);
  const [startTyping, setStartTyping] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const typingRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!startTyping) return;

    let index = 0;

    setDisplayText("");

    typingRef.current = setInterval(() => {
      index++;

      setDisplayText(aiText.slice(0, index));

      if (index >= aiText.length) {
        if (typingRef.current) {
          clearInterval(typingRef.current);
        }
      }
    }, 15);

    return () => {
      if (typingRef.current) {
        clearInterval(typingRef.current);
      }
    };
  }, [startTyping]);

  return (
    <main>
      <TalkToMai />

      {/* HERO */}
      <section className="w-full h-screen flex items-center justify-center ">
        <div className="relative w-full h-full before:absolute before:inset-0 before:bg-[#1f1f1f8a] before:content-[''] before:z-10 flex items-center justify-center px-4">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source
              src="https://res.cloudinary.com/dsoya5k03/video/upload/Hero_Video_f4ae4v.mp4"
              type="video/mp4"
            />
          </video>

          <div className="hero_content_wrapper">
            {/* Top */}
            <motion.div
              initial={{
                opacity: 0,
                y: -60,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
            >
              <div className="hero_top flex flex-col items-center font-sans">
                <h1 className="font-bold text-white flex flex-col md:flex-row items-center justify-center gap-x-3 gap-y-2 leading-tight text-center">
                  <span className="text-3xl md:text-4xl lg:text-[44px] xl:text-6xl md:h-[80px] h-[50px]">
                    We Find You The
                  </span>

                  <motion.span
                    animate={{
                      opacity: isVisible ? 1 : 0,
                      y: isVisible ? 0 : 30,
                      // filter: isVisible ? "blur(0px)" : "blur(4px)",
                    }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                    }}
                    className="text-3xl md:text-4xl lg:text-[44px] xl:text-6xl md:text-left items-center justify-start inline-block relative overflow-hidden text-[#ffb800] h-[80px] w-[clamp(180px,40vw,590px)]"
                  >
                    {typedText}

                    <span className="animate-pulse">|</span>
                  </motion.span>
                </h1>

                <p className="text-md md:text-lg font-light text-white text-center max-w-xl pt-1 font-sans">
                  Find Local Trusted Tradespeople in Minutes
                </p>
              </div>

              <div className="hero_search_wrapper pt-6 flex flex-col items-center ">
                <div className=" flex-1 w-full max-w-xl md:max-w-170 transition-all duration-500 translate-y-1 ">
                  <div className="flex flex-col items-center gap-5 w-full">
                    <div className="flex  items-center w-full bg-white rounded-full shadow-lg overflow-hidden h-12.5">
                      <input
                        type="text"
                        placeholder={`I want ${text}`}
                        className="flex-1 h-full px-6 text-[15px] text-gray-700 bg-transparent outline-none placeholder-gray-400 font-medium font-sans"
                      />
                      <button className="flex items-center justify-center w-10 h-10 mr-1.25 rounded-full transition hover:scale-95">
                        <SearchIcon />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Bottom */}
            <div className="text-center flex items-center justify-center w-full">
              <motion.div
                initial={{
                  opacity: 0,
                  y: 60,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: "easeOut",
                }}
                className="flex flex-wrap pt-6 text-center  max-w-4xl items-center justify-center gap-3 sm:gap-4 md:gap-8"
              >
                <p className="text-gray-200 font-sans flex items-center gap-2 text-xs sm:text-sm md:text-base">
                  {" "}
                  <CheckCircleIcon /> 200K+ Trusted Traders
                </p>
                <p className="text-gray-200 font-sans flex items-center gap-2 text-xs sm:text-sm md:text-base">
                  {" "}
                  <CheckCircleIcon /> Transparent Bidding System
                </p>
                <p className="text-gray-200 font-sans flex items-center gap-2 text-xs sm:text-sm md:text-base">
                  {" "}
                  <CheckCircleIcon /> 11K Monthly Active Users
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section_wrapper text-center font-sans py-12">
        {/* TOP */}
        <motion.div
          initial={{
            opacity: 0,
            y: -60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 1,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className="uppercase text-xs md:text-sm font-semibold text-[#1F5CAC] tracking-wide">
            Get Any Home Repair Done
          </span>
          <h3 className="text-2xl md:text-4xl font-bold text-gray-800 mb-3 mt-2.5">
            Looking For A Service?
          </h3>
          <p className="text-sm md:text-base text-gray-500">
            From a dripping tap to a full loft conversion find the right{" "}
            <span className="text-[#1F5CAC]"> verified tradesperson</span> for
            any job.
          </p>
        </motion.div>

        {/* Bottom */}
        <motion.div
          initial={{
            opacity: 0,
            y: 80,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: "easeOut",
          }}
        >
          <Marquee
            pauseOnHover
            speed={180}
            autoFill
            gradient={!isMobile}
            loop={0}
            className="overflow-hidden"
          >
            {serviceImages.map((item) => (
              <div
                key={item.id}
                className="mr-6 w-40 h-40 lg:w-45 lg:h-45 my-8 shrink-0"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={250}
                  className="h-full w-full object-cover rounded-xl"
                />
                <p className="text-center text-gray-800 font-semibold mt-2 px-2">
                  {item.title}
                </p>
              </div>
            ))}
          </Marquee>

          <button className="px-8 py-2 bg-[#1F5CAC] text-white shadow-md font-medium text-[14px] cursor-pointer rounded-full mt-8">
            View All Services
          </button>
        </motion.div>
      </section>

      {/* TOOLS */}
      <section className="section_wrapper tools_wrapper font-sans py-12">
        {/* TOP */}
        <motion.div
          initial={{
            opacity: 0,
            y: -60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 1,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-center"
        >
          <span className="uppercase text-xs font-bold text-[#1F5CAC] tracking-wide">
            Your MAI Toolkit
          </span>
          <h3 className="text-2xl md:text-4xl font-bold text-gray-800 mb-3 mt-2.5">
            Unlock Powerful Tools After Sign Up
          </h3>
          <p className="text-base md:text-lg text-gray-500 max-w-3xl mx-auto">
            Everything You Need to{" "}
            <span className="text-[#1F5CAC]">Hire the Right Tradesperson</span>
          </p>
        </motion.div>

        {/* BOTTOM */}
        <div className="tools_swiper_wrapper">
          <Swiper
            spaceBetween={24}
            modules={[Pagination]}
            slidesPerView={1}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              567: { slidesPerView: 1.5 },
              1280: { slidesPerView: 3 },
            }}
          >
            <SwiperSlide>
              <div
                onMouseEnter={() => {
                  setGraphData(generateRandomGraph(dashboardData.bars));
                  setRating(generateRandomRating());
                }}
                className="bg-white rounded-4xl p-3 md:p-5 lg:p-8 shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col items-center cursor-pointer h-111"
              >
                <h5 className="text-2xl font-bold text-center text-[#003F6B] mb-3">
                  Dashboard
                </h5>
                <p className="text-[#003F6B]/70 text-center text-sm mb-8 min-h-10">
                  Keep track of every job in one clean dashboard, from your
                  first quote request to the final sign-off.
                </p>
                <div className="w-full max-w-92.5 flex flex-col items-center gap-2 border border-gray-200 rounded-2xl pb-2">
                  {/* Chart Card */}
                  <div className="w-full h-56 xl:h-48 bg-white border border-gray-100 rounded-2xl shadow-[0_0_7px_#0000001a] p-4 relative flex flex-col">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-bold text-gray-500">
                        Project Overview
                      </span>

                      <div className="flex items-center gap-1 px-2 py-1 text-[9px] text-gray-500 font-medium bg-gray-50 border border-gray-100 rounded-full">
                        This Year - 2026
                        <svg width="6" height="4" viewBox="0 0 6 4" fill="none">
                          <path d="M3 4L0 0H6L3 4Z" fill="#A0AEC0" />
                        </svg>
                      </div>
                    </div>

                    {/* Legend */}
                    <div className="flex justify-end gap-3 flex-wrap mb-2">
                      {dashboardData.legends.map((item) => (
                        <div
                          key={item.label}
                          className="flex items-center gap-1"
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full"
                            style={{
                              backgroundColor: item.color,
                            }}
                          />

                          <span className="text-[8px] text-gray-500">
                            {item.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Graph Area */}
                    <div className="flex-1 flex items-end justify-center gap-4 border-l border-b border-gray-100 px-4 relative">
                      {/* Y Axis */}
                      <div className="absolute -left-2.5 top-0 h-full flex flex-col justify-between text-[7px] text-gray-400 pb-1">
                        <span>50</span>
                        <span>40</span>
                        <span>30</span>
                        <span>20</span>
                        <span>10</span>
                        <span>0</span>
                      </div>

                      {graphData.map((month, monthIndex) => (
                        <div
                          key={monthIndex}
                          className="flex items-end gap-1 h-25"
                        >
                          {month.map((value, barIndex) => (
                            <div
                              key={barIndex}
                              className="w-2.5 rounded-t transition-all duration-700 ease-out"
                              style={{
                                height: `${value}%`,
                                backgroundColor:
                                  dashboardData.legends[barIndex].color,
                              }}
                            />
                          ))}
                        </div>
                      ))}
                    </div>

                    {/* Month Labels */}
                    <div className="absolute bottom-1 left-0 right-0 flex justify-evenly text-[8px] text-gray-400">
                      {dashboardData.months.map((month) => (
                        <span key={month}>{month}</span>
                      ))}
                    </div>
                  </div>

                  {/* Rating Card */}
                  <div className="w-full max-w-72 bg-white border border-gray-50 rounded-lg p-2.5 shadow-[0_2px_10px_rgba(0,0,0,0.08)]">
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-[11px] font-bold text-gray-700">
                        Ratings
                      </span>

                      <span className="text-[8px] text-gray-400 bg-gray-50 px-1 py-0.5 rounded">
                        All Time
                      </span>
                    </div>

                    <div className="flex items-center gap-1">
                      <span className="text-[#FDBA31] text-[10px]">⭐</span>

                      <span className="text-xs font-bold text-gray-800">
                        {rating}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="bg-white rounded-4xl p-6 lg:p-8 shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col items-center cursor-pointer h-111"
              >
                <h5 className="text-2xl font-bold text-center text-[#003F6B] mb-3">
                  Search With Postcode
                </h5>
                <p className="text-[#003F6B]/70 text-center text-sm mb-8 min-h-10">
                  Find tradespeople near you, just enter your county and browse
                  verified, rated tradespeople in your area.
                </p>

                <div className="flex-1 mt-auto overflow-hidden flex select-none h-56 py-8 w-full">
                  {/* Left Users */}
                  <div className="hidden md:flex w-[45%] flex-col justify-center gap-2.5 p-3 bg-white relative z-10">
                    {users.map((user, index) => (
                      <div
                        key={user.id}
                        className="flex items-center gap-2.5 w-full px-2 py-1.5 rounded-xl border border-gray-100 bg-white shadow-[0_1px_5px_rgba(0,0,0,0.02)] transition-all duration-700 ease-out"
                        style={{
                          transform: isHovered
                            ? [
                                "translateY(30px)", // Devon
                                "translateY(-65px)", // Eleanor
                                "translateY(30px)", // Robert
                                "translateY(-65px)", // Wade
                              ][index]
                            : "translateY(0px)",
                        }}
                      >
                        <Image
                          src={user.image}
                          alt={user.name}
                          width={300}
                          height={60}
                          className="w-full h-full"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Right Map */}
                  <div className="relative w-full md:w-[55%] flex items-center justify-center">
                    <div className="relative w-full h-52 bg-[#EAF5F0] rounded-2xl overflow-hidden">
                      <Image
                        src="https://d2iyhd3v3rvz2k.cloudfront.net/commonFiles/1775828227781-image.png"
                        alt="Map"
                        fill
                        className={`object-cover transition-all duration-700 ${
                          isHovered ? "scale-[1.8]" : "scale-140"
                        }`}
                      />

                      <div
                        className="absolute w-6 h-6 -translate-x-1/2 translate-y-1/2 transition-all duration-1000 ease-in-out"
                        style={{
                          left: isHovered ? "50%" : "90%",
                          bottom: isHovered ? "50%" : "50%",
                        }}
                      >
                        <Image
                          src="https://d2iyhd3v3rvz2k.cloudfront.net/commonFiles/1775567468424-Frame_2147233423.png"
                          alt="Location Pin"
                          width={24}
                          height={24}
                          className="w-full h-full object-contain drop-shadow-md"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div
                onMouseEnter={() => {
                  setIsCardHovered(true);
                  timeoutRef.current = setTimeout(() => {
                    setStartTyping(true);
                  }, 1100);
                }}
                onMouseLeave={() => {
                  if (timeoutRef.current) {
                    clearTimeout(timeoutRef.current);
                  }

                  if (typingRef.current) {
                    clearInterval(typingRef.current);
                  }

                  setIsCardHovered(false);
                  setStartTyping(false);

                  setDisplayText(originalText);
                }}
                className="bg-white rounded-4xl p-6 lg:p-8 shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col items-center cursor-pointer h-111"
              >
                <h5 className="text-2xl font-bold text-center text-[#003F6B] mb-3">
                  Write With AI
                </h5>
                <p className="text-[#003F6B]/70 text-center text-sm mb-8 min-h-10">
                  Not sure how to describe your project? Our AI helps you write
                  a clear, detailed brief in seconds. Just answer a few
                  questions, we do the rest.
                </p>

                <div className="flex-1 w-full mt-auto h-56 xl:h-64 rounded-2xl p-5 flex flex-col justify-center relative overflow-hidden select-none">
                  {/* Project Title */}
                  <div className="w-full bg-[#FAFCFF] border border-gray-200 rounded-xl py-3 px-4 shadow-[0_2px_8px_rgba(0,0,0,0.02)] mb-4">
                    <p className="text-[11px] font-medium tracking-wide text-gray-600">
                      Modern Kitchen Renovation
                    </p>
                  </div>

                  {/* Description */}
                  <div className="w-full h-[120px] bg-[#FAFCFF] border border-gray-200 rounded-xl py-3 px-4 shadow-[0_2px_8px_rgba(0,0,0,0.02)] overflow-hidden">
                    <p className="h-full text-[10px] sm:text-[11px] leading-relaxed text-gray-500">
                      {displayText}

                      {startTyping && displayText.length < aiText.length && (
                        <span className="animate-pulse text-[#0077C8]">|</span>
                      )}
                    </p>
                  </div>

                  {/* AI Button */}
                  <div className="flex justify-end items-center mt-2">
                    <motion.button
                      animate={
                        isCardHovered
                          ? {
                              scale: [1, 0.92, 0.9],
                            }
                          : {}
                      }
                      transition={{
                        delay: 0.7,
                        duration: 0.35,
                      }}
                      className=" bg-[#EBF7FF] border border-[#CAE6FA] text-[#0077C8] px-4 py-1.5 rounded-full text-[10px] font-bold flex items-center gap-1.5 shadow-[0_4px_15px_rgba(0,119,200,0.12)] hover:scale-105 transition-all duration-300"
                    >
                      <motion.div
                        animate={{
                          scale: [1, 1.15, 1],
                          opacity: [0.7, 1, 0.7],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <Sparkles
                          className="w-2.5 h-2.5 text-[#0077C8]"
                          strokeWidth={2.5}
                        />
                      </motion.div>

                      <span>Write with MAI AI</span>
                    </motion.button>
                  </div>

                  {/* Cursor */}
                  <motion.div
                    animate={
                      isCardHovered
                        ? {
                            x: 250,
                            y: 0,
                            scale: 1.05,
                          }
                        : {
                            x: 0,
                            y: 0,
                            scale: 1,
                          }
                    }
                    transition={{
                      duration: 0.8,
                      ease: "easeInOut",
                    }}
                    className="absolute left-3 bottom-3 w-10 h-10 z-20 pointer-events-none"
                  >
                    <Image
                      src="https://d2iyhd3v3rvz2k.cloudfront.net/commonFiles/1775715990989-image_2808_(1).png"
                      alt="Cursor"
                      width={40}
                      height={40}
                      className="w-full h-full object-contain drop-shadow-md"
                    />
                  </motion.div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section_wrapper text-center font-sans py-12">
        <motion.div
          initial={{
            opacity: 0,
            y: -60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 1,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-center"
        >
          <span className="uppercase text-xs font-bold text-[#1F5CAC] tracking-wide">
            Simple Process
          </span>
          <h3 className="text-2xl md:text-4xl font-bold text-gray-800 mb-3 mt-2.5">
            How To Find Verified Traders
          </h3>
          <p className="text-sm md:text-md text-gray-500">
            Find trusted professionals in 4 simple steps
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-4 relative z-10 mt-14">
          <div className=" absolute top-12 left-1/2 -translate-x-1/2 w-px bottom-[10%] from-[#0C7A56] to-[#CBECE2] bg-linear-to-b md:left-[12.5%] md:translate-x-0 md:w-[76%] md:h-px md:bottom-auto md:bg-linear-to-r md:from-[#0C7A56] md:to-[#CBECE2] z-0" />
          {processSteps.map((step, index) => (
            <ProcessCard
              key={step.id}
              id={step.id}
              title={step.title}
              image={step.image}
              description={step.description}
              index={index}
            />
          ))}
        </div>
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            ease: "easeOut",
          }}
          className="text-center mt-12"
        >
          <button className="px-8 py-2 bg-[#1F5CAC] text-white shadow-md font-medium text-[14px] cursor-pointer rounded-full">
            Post Your Project Now
          </button>
        </motion.div>
      </section>

      {/* PROJECTS */}
      <section className="section_wrapper font-sans py-12 bg-[#F2F6FB]">
        <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-8">
          {/* Left Content */}
          <motion.div
            initial={{
              opacity: 0,
              x: -60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="flex flex-col"
          >
            <span className="text-xs md:text-sm font-semibold text-[#1F5CAC] uppercase tracking-wide mb-3">
              Real Work, Real Results
            </span>

            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-3">
              Explore Real UK Projects
            </h2>

            <span className="text-sm md:text-md text-gray-500">
              From loft conversions in Leeds to boiler installs in Bristol.
            </span>
          </motion.div>

          {/* Right Button */}
          <motion.div
            initial={{
              opacity: 0,
              x: 60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: "easeOut",
            }}
          >
            <button className="px-8 py-2 bg-[#1F5CAC] text-white shadow-md font-medium text-[14px] cursor-pointer rounded-full inline-block">
              Explore Projects
            </button>
          </motion.div>
        </div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </motion.div>
      </section>

      {/* STONE OFFCUT FINDER */}
      <section className="section_wrapper font-sans py-12">
        <div className="mx-auto w-full flex flex-col lg:flex-row gap-12 xl:gap-24 items-center lg:items-start px-0">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: "easeOut",
            }}
            className="w-full lg:w-5/12 flex flex-col pt-4"
          >
            <p className="text-xs md:text-sm font-semibold text-[#1F5CAC] uppercase tracking-wide mb-3">
              Stone Offcuts Marketplace
            </p>

            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-3">
              Submit Your Project. Let MAI Find Your Perfect Stone.
            </h2>

            <p className="text-sm md:text-base text-[#667588] leading-relaxed">
              Discover discounted stone offcuts on MAI, connecting you with
              verified UK sellers for secure, budget-friendly options.
            </p>

            <div className="flex flex-col space-y-8 mt-8">
              {stoneMarketplaceSteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.2,
                  }}
                  className="flex items-start gap-5"
                >
                  <div
                    className={`w-[42px] h-[42px] rounded-xl ${step.bgColor} font-bold flex items-center justify-center shrink-0 text-sm`}
                  >
                    {step.id}
                  </div>

                  <div className="mt-0.5">
                    <h4 className="text-[17px] font-bold text-gray-600 mb-1">
                      {step.title}
                    </h4>

                    <p className="text-gray-500 text-[14px]">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{
              opacity: 0,
              y: 80,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: "easeOut",
            }}
            className="w-full lg:w-7/12"
          >
            <StoneProjectForm />
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="section_wrapper font-sans py-12 bg-[#F2F6FB]">
        {/* TOP */}
        <motion.div
          initial={{
            opacity: 0,
            y: -60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 1,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-center"
        >
          <span className="uppercase text-xs font-bold text-[#1F5CAC] tracking-wide">
            TRUSTED BY HOMEOWNERS
          </span>
          <h3 className="text-2xl md:text-4xl font-bold text-gray-800 mb-3 mt-2.5">
            Why Choose MAI
          </h3>
          <p className="text-base md:text-lg text-gray-500 max-w-3xl mx-auto">
            Every trader on MAI is verified, rated, and ready to work, so you
            get competitive bids from qualified professionals, not random
            strangers.
          </p>
        </motion.div>

        <TraderSlider />
      </section>

      {/* DIFFERENCE */}
      <section className="section_wrapper font-sans py-12">
        <motion.div
          initial={{
            opacity: 0,
            y: -60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 1,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-center"
        >
          <span className="uppercase text-xs md:text-sm font-semibold text-[#1F5CAC] tracking-wide mb-3">
            Our Difference
          </span>
          <h3 className="text-2xl md:text-4xl font-bold text-gray-800 mb-3 mt-2.5">
            Where Traders & Homeowners Both Win
          </h3>
          <p className="text-sm md:text-md text-gray-500 max-w-2xl mx-auto leading-relaxed font-sans">
            From first brief to final delivery. MAI gives you the tools, talent,
            and transparency to build with confidence.
          </p>
        </motion.div>

        <FeaturesGrid />
      </section>

      {/* BLOG */}
      <section className="section_wrapper font-sans py-12 bg-[#F2F6FB]">
        <motion.div
          initial={{
            opacity: 0,
            y: -60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 1,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-center"
        >
          <span className="text-xs md:text-sm font-semibold text-[#1F5CAC] uppercase tracking-wide mb-2">
            KNOWLEDGE HUB
          </span>
          <h3 className="text-2xl md:text-4xl font-bold text-gray-800 mb-3">
            Latest Blog
          </h3>
          <p className="text-sm md:text-md text-gray-500 max-w-2xl mx-auto">
            Our articles cover a range of topics to help you stay informed and
            make better decisions. Dive into expert advice and stay ahead in the
            industry with our engaging and informative content.
          </p>
        </motion.div>

        <div className="hidden lg:block mt-10">
          <BlogGrid />
        </div>

        <div className="lg:hidden">
          <BlogSwiper />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonial_wrapper">
        <div className="section_wrapper font-sans py-12">
          <section className="flex flex-col lg:flex-row gap-12 xl:gap-20 items-start">
            {/* Left Content */}
            <motion.div
              initial={{
                x: -100,
                opacity: 0,
              }}
              whileInView={{
                x: 0,
                opacity: 1,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 1,
                delay: 0.5,
                ease: "easeOut",
              }}
              className="w-full lg:w-4/12 flex flex-col items-start text-white shrink-0 relative z-10"
            >
              <span className="text-md uppercase mb-4 text-[#BFEEFF]">
                What People Say
              </span>

              <h2 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">
                The Proof Is In The Pudding
              </h2>

              <p className="text-gray-300 mb-6 md:mb-10 max-w-lg text-md">
                Tradespeople are winning, homeowners are relieved. Don&apos;t
                take our word for it, here&apos;s what real MAI users across the
                UK have to say.
              </p>
            </motion.div>

            <div className="w-full lg:w-8/12">
              <div className="sm:hidden">
                <TestimonialSwiper />
              </div>

              <TestimonialGrid />
            </div>
          </section>
        </div>
        <div className="testimonial_overlay" />
      </section>

      {/* SIGNUP */}
      <section className="section_wrapper font-sans py-12 bg-[#F2F6FB]">
        <div className="signup_wrapper w-full h-64 md:h-80 md:rounded-4xl rounded-3xl overflow-hidden relative flex flex-col items-center justify-center">
          <h5 className="text-white text-2xl md:text-4xl font-bold">
            Ready To Get Started?
          </h5>
          <p className="text-white text-center text-sm md:text-base py-5 max-w-[650px] mx-auto px-2.5 md:px-0">
            Have 10 minutes? Check out our case studies. We&apos;ve been in the
            industry for more than a decade. So there&apos;s lots of exciting
            stuff in here.
          </p>
          <button className="px-8 py-2 mt-6 rounded-xl text-sm bg-white text-black font-medium shadow-sm hover:bg-gray-100 transition-colors cursor-pointer">
            Sign Up Now
          </button>
        </div>
      </section>
    </main>
  );
};

export default Landing;
