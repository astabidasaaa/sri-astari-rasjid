import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, LayoutGroup } from "framer-motion";
import { RxCross1, RxChevronRight, RxChevronLeft } from "react-icons/rx";
import { FaSquareInstagram, FaSquareYoutube } from "react-icons/fa6";
import MenuContext from "./MenuContext";
import { cohaerentia } from "./FontSrc";

const MenuMobile = () => {
  const [isOpen, setNav] = useContext(MenuContext);

  const toggleNav = () => {
    return setNav(!!isOpen);
  };

  const [subMenu, setSubMenu] = useState("main-menu");

  const toggleSubMenu = (title) => {
    if (title === subMenu) {
      return setSubMenu("main-menu");
    }
    return setSubMenu(title);
  };

  useEffect(() => {
    if (isOpen === true) {
      return toggleSubMenu("main-menu");
    }
  }, [isOpen]);

  return (
    <div
      className={`block lg:hidden fixed text-white ${
        isOpen ? "right-0" : "right-[-150%]"
      } w-screen h-screen transition-all duration-500 bg-gradient-to-l from-[#933426] from-5% via-[#933426]/75 via-30% to-[#933426]/10 backdrop-blur-[1px] z-50 ${
        cohaerentia.variable
      } font-cohaerentia`}
    >
      <div
        className={`w-full px-8 md:px-12 lg:px-24 xl:px-40 transition-all duration-500 flex flex-col justify-start items-end gap-4`}
      >
        <div
          className={`h-20 md:h-40 lg:h-48 flex flex-row justify-between items-center`}
        >
          <AnimatePresence initial={false} mode="wait">
            {subMenu === "main-menu" ? (
              <motion.button
                className="text-3xl text-white"
                onClick={toggleNav}
                initial={{ opacity: 0, rotate: -360 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 360 }}
                transition={{
                  type: "tween",
                  duration: 0.3,
                }}
                key="close-btn"
              >
                <RxCross1 key="menu-close" />
              </motion.button>
            ) : (
              <motion.button
                className="text-3xl text-white"
                onClick={() => toggleSubMenu("main-menu")}
                initial={{ opacity: 0, rotate: -360 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 360 }}
                transition={{
                  type: "tween",
                  duration: 0.3,
                }}
                key="back-btn"
              >
                <RxChevronLeft key="sub-menu-open" />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
        <MenuChanger subMenu={subMenu} toggleSubMenu={toggleSubMenu} />
        <div className="absolute bottom-64 flex flex-row justify-center items-center gap-2 text-4xl">
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
    </div>
  );
};

export default MenuMobile;

// export const SubMenuMobile = ({ children }) => {
//   return <div className="flex flex-col pl-4">{children}</div>;
// };

const MenuChanger = ({ toggleSubMenu, subMenu }) => {
  return (
    <>
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          className="mobile_menu_container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            type: "spring",
            duration: 0.3,
          }}
          key={subMenu}
        >
          {subMenu === "main-menu" && (
            <MainMenu toggleSubMenu={toggleSubMenu} />
          )}
          {subMenu === "artworks-menu" && <ArtworksMenu />}
          {subMenu === "biography-menu" && <BiographyMenu />}
          {subMenu === "publications-menu" && <PublicationsMenu />}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export const SubMenuBtn = ({ toggleSubMenu, children, subMenu }) => {
  return (
    <button
      className="px-1 py-2 my-1 flex flex-row justify-end items-center gap-2 w-48 text-lg"
      onClick={() => toggleSubMenu(subMenu)}
    >
      {children} <RxChevronRight />
    </button>
  );
};

export const SubMenuLinkMobile = ({ href, children }) => {
  const [isOpen, setNav] = useContext(MenuContext);

  const toggleNav = () => {
    setNav(!!isOpen);
  };

  return (
    <Link href={href} legacyBehavior>
      <a
        onClick={() => toggleNav()}
        className={`px-1 py-2 my-1 flex flex-row justify-end items-center gap-2 w-48 text-lg drop-shadow-lg`}
      >
        {children}
      </a>
    </Link>
  );
};

const MainMenu = ({ toggleSubMenu }) => {
  return (
    <>
      <SubMenuBtn toggleSubMenu={toggleSubMenu} subMenu="artworks-menu">
        Artworks
      </SubMenuBtn>
      <SubMenuBtn toggleSubMenu={toggleSubMenu} subMenu="biography-menu">
        Biography
      </SubMenuBtn>
      <SubMenuBtn toggleSubMenu={toggleSubMenu} subMenu="publications-menu">
        Publications
      </SubMenuBtn>
    </>
  );
};

const ArtworksMenu = () => {
  return (
    <>
      <SubMenuLinkMobile href="/artworks/painting">Painting</SubMenuLinkMobile>
      <SubMenuLinkMobile href="/artworks/sculpture">
        Sculpture
      </SubMenuLinkMobile>
      <SubMenuLinkMobile href="/artworks/installation">
        Installation
      </SubMenuLinkMobile>
      <SubMenuLinkMobile href="/artworks/donation-collection">
        Donation Collection
      </SubMenuLinkMobile>
    </>
  );
};

const BiographyMenu = () => {
  return (
    <>
      <SubMenuLinkMobile href="/biography/profile">Profile</SubMenuLinkMobile>
      <SubMenuLinkMobile href="/biography/solo-exhibitions">
        Solo Exhibitions
      </SubMenuLinkMobile>
      <SubMenuLinkMobile href="/biography/group-exhibitions">
        Group Exhibitions
      </SubMenuLinkMobile>
    </>
  );
};

const PublicationsMenu = () => {
  return (
    <>
      <SubMenuLinkMobile href="/publications/catalogues">
        Catalogues
      </SubMenuLinkMobile>
      <SubMenuLinkMobile href="/publications/articles">
        Articles
      </SubMenuLinkMobile>
      <SubMenuLinkMobile href="/publications/books">Books</SubMenuLinkMobile>
      <SubMenuLinkMobile href="/publications/archives">
        Archives
      </SubMenuLinkMobile>
    </>
  );
};
