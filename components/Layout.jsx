import React from "react";
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
      {router.asPath === "/" ? <NavbarIndex /> : <Navbar />}
      <MenuMobile />
      {props.children}
      {router.asPath !== "/" && <Footer />}
    </>
  );
};

export default Layout;
