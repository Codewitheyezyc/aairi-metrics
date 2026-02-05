"use client";

import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import clsx from "clsx";

const Navbar = () => {
  const [isMobileActive, setIsMobileActive] = useState(true);

  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // scrolling down
        setHidden(true);
      } else {
        // scrolling up
        setHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={clsx(
        "fixed top-0 w-full z-50 transition-all duration-300 bg-white",
        hidden ? "-translate-y-full" : "translate-y-0",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
          <div className="">
            <Link href="/">
              <Image
                src="/aairi-icon.png"
                alt="Aairi Logo Icon"
                width={70}
                height={70}
                className="w-12 md:w-16"
              />
            </Link>
          </div>
          <ul className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link href={link.url} key={link.title}>
                <li>{link.title}</li>
              </Link>
            ))}
          </ul>
          <div className="lg:block hidden">
            <Link href="/contact">
              <Button
                type="button"
                title="get In Touch"
                icon="/message.svg"
                variant="btn_dark_blue"
              />
            </Link>
          </div>
          <button
            onClick={() => setIsMobileActive((prev) => !prev)}
            className="md:hidden inline-block p-2 text-[#0a2540] hover:text-[#09213a] transition-all duration-300"
          >
            {isMobileActive ? (
              <Menu className="w-5 h-5" />
            ) : (
              <X className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
      {isMobileActive || (
        <ul className="md:hidden flex flex-col gap-4 space-x-6 w-full bg-slate-100/20 px-4 py-6 backdrop-blur-sm">
          {navLinks.map((link) => (
            <Link
              href={link.url}
              onClick={() => setIsMobileActive(true)}
              key={link.title}
            >
              <li>{link.title}</li>
            </Link>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
