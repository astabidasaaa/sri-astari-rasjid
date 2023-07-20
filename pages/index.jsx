import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaSquareInstagram, FaSquareYoutube } from "react-icons/fa6";
import { Menu } from "@/components/Navbar";

const IndexPage = () => {
  return (
    <>
      <Image
        id="index-background"
        src="/index-cropped-mobile.webp"
        alt="Background Home Page"
        // width={1920}
        // height={1080}
        // quality={100}
        fill
        priority
        className="block sm:hidden object-cover object-center h-screen"
      />
      <Image
        id="index-background"
        src="/index-cropped-tablet.webp"
        alt="Background Home Page"
        // width={1920}
        // height={1080}
        // quality={100}
        fill
        priority
        className="hidden sm:block lg:hidden object-cover object-center h-screen"
      />
      <Image
        id="index-background"
        src="/index-cropped-desktop.webp"
        alt="Background Home Page"
        // width={1920}
        // height={1080}
        // quality={100}
        fill
        priority
        className="hidden lg:block object-cover object-[42%_center] h-screen"
      />
      <main className="index_outer_container">
        <div className="index_inner_container">
          <div className="index_content">
            <Image
              id="logo-white"
              src="/logo-white-short.png"
              alt="Logo Sri Astari Rasjid putih"
              width={1237}
              height={360}
              className="home_logo max-w-md"
            />
            <Menu where="index" />
          </div>
          <div className="grow-0 flex flex-row justify-center items-center gap-2 text-6xl">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareInstagram />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareYoutube />
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default IndexPage;
