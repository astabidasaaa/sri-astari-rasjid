import React from "react";
import { FaSquareInstagram, FaSquareYoutube } from "react-icons/fa6";
import { AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai";
import { krub, lucette } from "./FontSrc";

// BsInstagram;
// AiOutlineYoutube;
// AiOutlineInstagram;

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_container">
        <div className="flex flex-col lg:flex-row justify-between items-center text-white  gap-4">
          <span
            className={`text-xs lg:text-sm text-center lg:text-left ${krub.variable} font-krub  order-2 lg:order-1 lg:text-black`}
          >
            Sri Astari Rasjid Official Site | Developed by Humanika Creative
            Design
          </span>
          <div className="flex flex-row justify-center items-center gap-2 text-4xl order-1 lg:order-2 lg:text-[#933426]">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="lg:hover:text-[#933426]/70"
            >
              <AiOutlineInstagram />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="lg:hover:text-[#933426]/70"
            >
              <AiOutlineYoutube />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
