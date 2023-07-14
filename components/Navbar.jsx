import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BiMenu, BiX } from "react-icons/bi";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { cohaerentia, krub, lucette } from "./FontSrc";
import MenuContext from "./MenuContext";

const Navbar = () => {
  return (
    <header className={`fixed top-0 right-0 left-0 z-50 bg-white`}>
      <div
        className={`px-4 md:px-12 lg:px-24 xl:px-40 transition-all duration-500`}
      >
        <nav
          className={`h-20 md:h-40 lg:h-48 flex flex-row justify-between items-center`}
        >
          {/* <NavbarLogo /> */}
          <Link href="/" legacyBehavior>
            <a>
              <Image
                id="logo-bw"
                src="/logo-bw.png"
                alt="Logo Kemdikbud"
                width={1237}
                height={360}
                className="w-36 md:w-56 lg:w-72 object-contain object-center"
              />
            </a>
          </Link>

          <Menu />
          <NavMobile />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

const Menu = () => {
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
        className={`flex flex-row lg:gap-12 xl:gap-32 text-black/40 text-xl ${cohaerentia.variable} font-cohaerentia`}
      >
        <div
          onMouseEnter={() => toggleSubMenu("artworks")}
          onMouseLeave={() => toggleSubMenu("")}
          className="relative"
        >
          <button className="p-1 flex flex-row justify-center items-center gap-1">
            Artworks
          </button>
          {subMenu === "artworks" && (
            <SubMenu>
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
          <button className="p-1 flex flex-row justify-center items-center gap-1">
            Biography
          </button>
          {subMenu === "biography" && (
            <SubMenu>
              <Link href="/biography/profile">Profile</Link>
              <Link href="/biography/solo-exhibition">Solo Exhibition</Link>
              <Link href="/biography/group-exhibition">Group Exhibition</Link>
            </SubMenu>
          )}
        </div>
        <div
          onMouseEnter={() => toggleSubMenu("publications")}
          onMouseLeave={() => toggleSubMenu("")}
          className="relative"
        >
          <button className="p-1 flex flex-row justify-center items-center gap-1">
            Publications
          </button>
          {subMenu === "publications" && (
            <SubMenu>
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

const SubMenu = ({ children }) => {
  return (
    <div className="absolute right-0 flex flex-col justify-start items-end gap-3 bg-white p-6 z-40 drop-shadow-xl rounded w-56">
      {children}
    </div>
  );
};

const NavMobile = () => {
  const [isOpen, setNav] = useContext(MenuContext);

  const toggleNav = () => {
    setNav(!!isOpen);
  };

  return (
    <div className="flex lg:hidden">
      <button className="text-3xl" onClick={toggleNav}>
        {isOpen ? (
          <RxCross1 key="menu-close" />
        ) : (
          <RxHamburgerMenu key="menu-open" />
        )}
      </button>
    </div>
  );
};
