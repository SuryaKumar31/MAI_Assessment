"use client";

import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { footerLinks, socialLinks } from "../utils/footerData";
import FooterLinks from "./FooterLinks";
import Image from "next/image";
import GlowGrid from "./GlowGrid";
import { useState } from "react";

const Footer = () => {
  const [mousePos, setMousePos] = useState({
    x: 0,
    y: 0,
  });

  return (
    <footer
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();

        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }}
      className="relative w-full overflow-hidden bg-[#020D18] text-white font-sans"
    >
      <GlowGrid mousePos={mousePos} />

      <div className="section_wrapper relative z-10 border-b border-white/[0.07] py-12">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10">
          <div className="max-w-2xl">
            <span className="text-[#4DB8FF] text-xs font-bold uppercase tracking-[0.3em] mb-4">
              Start Today — It&apos;s Free
            </span>
            <h3 className="text-4xl md:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tight text-white">
              Let&apos;s{" "}
              <span className="bg-linear-to-r from-[#4DB8FF] via-[#00D4FF] to-[#0077B6] bg-clip-text text-transparent">
                Build
              </span>
              <br />
              <span className="text-white/80 text-3xl md:text-5xl xl:text-6xl font-bold">
                Our Nation Great.
              </span>
            </h3>
            <p className="mt-5 text-white text-[16px] md:text-base max-w-lg leading-relaxed">
              Connect with verified UK tradespeople or find your next project.
              MAI brings the right people together.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <button className="group inline-flex items-center gap-2 bg-[#1F5CAC] hover:bg-[#164a8a] text-white font-semibold px-7 py-3 rounded-full transition-all duration-300 text-[14px] shadow-[0_0_30px_rgba(31,92,172,0.4)] hover:shadow-[0_0_40px_rgba(31,92,172,0.6)] cursor-pointer">
              Post a Project{" "}
              <ArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </button>
            <button className="inline-flex items-center gap-2 border border-white/15 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white font-semibold px-7 py-3 rounded-full transition-all duration-300 text-[14px]">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="section_wrapper py-12 ">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
          {/* Logo + About */}
          <div className="col-span-2 md:col-span-1 space-y-5 pr-4">
            <Image
              src="/images/Logo.webp"
              alt="MAI Logo"
              width={96}
              height={96}
              className="w-24"
            />

            <p className="text-[16px] leading-relaxed">
              A premier platform connecting homeowners with certified, skilled
              Traders across the UK.
            </p>

            <div className="flex gap-2.5 flex-wrap pt-1">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      flex
                      items-center
                      justify-center
                      w-9
                      h-9
                      rounded-full
                      shadow-md
                      hover:scale-110
                      hover:shadow-lg
                      transition-all
                      duration-200
                      text-white
                      ${social.bg}
                    `}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Company + Platform */}
          {footerLinks.map((section) => (
            <FooterLinks
              key={section.title}
              title={section.title}
              links={section.links}
            />
          ))}

          {/* Contact */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/25 mb-5">
              Contact
            </p>

            <ul className="space-y-4">
              <li>
                <div className="flex items-start gap-3 text-[16px] text-white">
                  <span className="mt-0.5 shrink-0 flex items-center justify-center w-6 h-6 rounded-lg bg-[#0077B6]/20">
                    <MapPin className="h-3 w-3 text-[#4DB8FF]" />
                  </span>

                  <span className="wrap-break-word min-w-0">
                    1 De La Warr Way, Cambourne, Cambridge CB23 6DX
                  </span>
                </div>
              </li>

              <li>
                <Link
                  href="tel:+442080043345"
                  className="group flex items-start gap-3 text-[16px]"
                >
                  <span className="mt-0.5 shrink-0 flex items-center justify-center w-6 h-6 rounded-lg bg-[#0077B6]/20 group-hover:bg-[#0077B6]/40 transition-colors duration-200">
                    <Phone className="h-3 w-3 text-[#4DB8FF]" />
                  </span>

                  <span className="wrap-break-word min-w-0">
                    +44 208 004 3345
                  </span>
                </Link>
              </li>

              <li>
                <Link
                  href="mailto:info@myproject.ai"
                  className="group flex items-start gap-3 text-[16px]"
                >
                  <span className="mt-0.5 shrink-0 flex items-center justify-center w-6 h-6 rounded-lg bg-[#0077B6]/20 group-hover:bg-[#0077B6]/40 transition-colors duration-200">
                    <Mail className="h-3 w-3 text-[#4DB8FF]" />
                  </span>

                  <span className="wrap-break-word min-w-0">
                    info@myproject.ai
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="section_wrapper my-4 pb-4 border-b border-white/6">
        <Image
          src="https://d2iyhd3v3rvz2k.cloudfront.net/commonFiles/EUGDPRComplaint.png"
          alt="MAI Copyright"
          width={60}
          height={60}
          className="w-12.5 h-12.5 md:w-15 md:h-15"
        />
      </div>

      <div className="section_wrapper">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-white/25 text-center">
            &copy; 2023 - 2026 MAI Corporation Ltd. MAI Corporation Ltd is a
            UK-based holding company overseeing subsidiaries and affiliated
            operations across the UK, EU, Asia and Africa. Incorporated in
            England & Wales under Company No. 15469340. All rights
            reserved.{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
