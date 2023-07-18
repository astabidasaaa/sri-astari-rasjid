import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BiMenu, BiX } from "react-icons/bi";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { cohaerentia, krub, lucette } from "./FontSrc";
import MenuContext from "./MenuContext";

const Navbar = () => {
  return (
    <header className="header">
      <div className="nav_container">
        <nav className="nav">
          <Link href="/" legacyBehavior>
            <a>
              <Image
                id="logo-bw"
                src="/logo-black.png"
                alt="Logo Kemdikbud"
                width={1237}
                height={360}
                className="nav_logo"
              />
            </a>
          </Link>
          <Menu where="notIndex" />
          <NavMobile />
        </nav>
      </div>
    </header>
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
        className={`flex flex-row lg:gap-8 xl:gap-28 ${
          where === "notIndex" ? "text-black/40" : "text-white/70 ml-[-24px]"
        } text-2xl ${cohaerentia.variable} font-cohaerentia`}
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
