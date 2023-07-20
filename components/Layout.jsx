import React from "react";
import { AnimatePresence, motion, LayoutGroup } from "framer-motion";
import Navbar from "./Navbar";
import MenuMobile from "./MenuMobile";
import { useRouter } from "next/router";
import NavbarIndex from "./NavbarIndex";
import Footer from "./Footer";

const Layout = (props) => {
  const router = useRouter();

  // console.log(router.asPath);
  return (
    <>
      {/* {router.asPath === "/" ? <NavbarIndex /> : <Navbar />} */}
      <LayoutGroup>
        <Navbar />
        <MenuMobile />
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            className="w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              type: "spring",
              duration: 1,
            }}
            key={router.asPath}
          >
            {props.children}
          </motion.div>
          {/* {props.children} */}
        </AnimatePresence>
        <Footer />
      </LayoutGroup>
    </>
  );
};

export default Layout;
