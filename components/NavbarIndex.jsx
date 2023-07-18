import React from "react";
import Link from "next/link";
import Image from "next/image";
import { NavMobile } from "./Navbar";

const NavbarIndex = () => {
  return (
    <header className="header block lg:hidden !text-white !bg-transparent">
      <div className="nav_container">
        <nav className="nav">
          <Link href="/" legacyBehavior>
            <a>
              <Image
                id="logo-bw"
                src="/logo-white-short.png"
                alt="Logo Kemdikbud"
                width={1237}
                height={360}
                className="nav_logo"
              />
            </a>
          </Link>
          {/* <Menu /> */}
          <NavMobile />
        </nav>
      </div>
    </header>
  );
};

export default NavbarIndex;
