import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai";
import { krub, lucette } from "./FontSrc";
import { useRouter } from "next/router";

// BsInstagram;
// AiOutlineYoutube;
// AiOutlineInstagram;

const Footer = () => {
  const router = useRouter();
  const isIndex = router.asPath === "/";

  return (
    <AnimatePresence initial={false} mode="wait">
      <motion.div
        className={`footer ${isIndex ? "hidden" : "block"}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          type: "spring",
          duration: 1,
        }}
        key={isIndex ? "index-footer" : "main-footer"}
      >
        <div className="footer_container">
          <div className="flex flex-col lg:flex-row justify-between items-center text-white  gap-4">
            <span
              className={`text-xs lg:text-sm text-center lg:text-left ${krub.variable} font-krub  order-2 lg:order-1 lg:text-black`}
            >
              Sri Astari Rasjid Official Site | Developed by Humanika Creative
              Design
            </span>
            <div className="flex flex-row justify-center items-center gap-2 text-4xl order-1 lg:order-2 lg:text-[#933426] text-4xl">
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
      </motion.div>
    </AnimatePresence>
  );
};

export default Footer;
