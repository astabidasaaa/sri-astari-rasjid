import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { BiMenu, BiX } from "react-icons/bi";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { cohaerentia, krub, lucette } from "./FontSrc";
import MenuContext from "./MenuContext";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const isIndex = router.asPath === "/";

  return (
    <AnimatePresence initial={false} mode="wait">
      <motion.header
        className={`fixed top-0 right-0 left-0 z-40 bg-white transition-all duration-[2000] ${
          isIndex
            ? "block lg:opacity-0 lg:hidden !text-white !bg-transparent"
            : "opacity-100"
        } transition-all duration-[4000] delay-1000`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          type: "spring",
          duration: 1,
        }}
        key={isIndex ? "index-nav" : "main-nav"}
      >
        <div className="nav_container">
          <nav className="nav">
            <Link href="/" legacyBehavior>
              <a>
                <Image
                  id="logo-bw"
                  src={isIndex ? "/logo-white-short.png" : "/logo-black.png"}
                  alt="Logo Sri Astari Rasjid"
                  width={1237}
                  height={360}
                  className="nav_logo"
                />
              </a>
            </Link>
            {!isIndex && <Menu where="notIndex" />}
            <NavMobile />
          </nav>
        </div>
      </motion.header>
    </AnimatePresence>
  );
};

export default Navbar;

export const Menu = ({ where }) => {
  const [subMenu, setSubMenu] = useState("");

  const toggleSubMenu = (title) => {
    if (title === subMenu) {
      return setSubMenu("");
    }
    return setSubMenu(title);
  };
  return (
    <div className="hidden lg:flex flex-row justify-center items-center">
      <div
        className={`flex flex-row lg:gap-8 xl:gap-16 2xl:gap-28 ${
          where === "notIndex" ? "text-black/40" : "text-white/70 ml-[-24px]"
        } lg:text-xl 2xl:text-2xl ${cohaerentia.variable} font-cohaerentia`}
      >
        <div
          onMouseEnter={() => toggleSubMenu("artworks")}
          onMouseLeave={() => toggleSubMenu("")}
          className="relative"
        >
          <button className="menu_btn">Artworks</button>
          {subMenu === "artworks" && (
            <SubMenu where={where}>
              <Link href="/artworks/painting">Painting</Link>
              <Link href="/artworks/sculpture">Sculpture</Link>
              <Link href="/artworks/installation">Installation</Link>
              <Link href="/artworks/donation-collection">
                Donation Collection
              </Link>
            </SubMenu>
          )}
        </div>
        <div
          onMouseEnter={() => toggleSubMenu("biography")}
          onMouseLeave={() => toggleSubMenu("")}
          className="relative"
        >
          <button className="menu_btn">Biography</button>
          {subMenu === "biography" && (
            <SubMenu where={where}>
              <Link href="/biography/profile">Profile</Link>
              <Link href="/biography/solo-exhibitions">Solo Exhibition</Link>
              <Link href="/biography/group-exhibitions">Group Exhibition</Link>
            </SubMenu>
          )}
        </div>
        <div
          onMouseEnter={() => toggleSubMenu("publications")}
          onMouseLeave={() => toggleSubMenu("")}
          className="relative"
        >
          <button className="menu_btn">Publications</button>
          {subMenu === "publications" && (
            <SubMenu where={where}>
              <Link href="/publications/catalogues">Catalogues</Link>
              <Link href="/publications/articles">Articles</Link>
              <Link href="/publications/books">Books</Link>
              <Link href="/publications/archives">Archives</Link>
            </SubMenu>
          )}
        </div>
      </div>
    </div>
  );
};

export const SubMenu = ({ where, children }) => {
  return (
    <div
      className={`absolute ${
        where === "notIndex"
          ? "right-0 items-end bg-white"
          : "left-0 items-start bg-gradient-to-t from-white/20 from-80% to-white/0"
      } flex flex-col justify-start gap-1 p-6 z-40 drop-shadow-xl rounded w-64`}
    >
      {children}
    </div>
  );
};

export const NavMobile = () => {
  const [isOpen, setNav] = useContext(MenuContext);

  const toggleNav = () => {
    setNav(!!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("touch-none");
    }

    // if (!isOpen) {
    return () => document.body.classList.remove("touch-none");
    // }
  }, [isOpen]);

  return (
    <div className="flex lg:hidden">
      <button className="text-3xl" onClick={toggleNav}>
        <RxHamburgerMenu key="menu-open" />
      </button>
    </div>
  );
};

{
  /* <button className="text-3xl" onClick={toggleNav}>
  {isOpen ? <RxCross1 key="menu-close" /> : <RxHamburgerMenu key="menu-open" />}
</button>; */
}
