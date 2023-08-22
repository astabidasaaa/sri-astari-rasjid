import React from "react";
import Image from "next/image";
import { FaSquareInstagram, FaSquareYoutube } from "react-icons/fa6";
import { Menu } from "@/components/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay } from "swiper/modules";
import { NextSeo } from "next-seo";

const IndexPage = () => {
  return (
    <>
      <NextSeo
        title="Home"
        description="Welcome to the official website of Sri Astari Rasjid."
        openGraph={{
          title: "Home - Sri Astari Rasjid",
          images: [
            {
              url: "/index-bg-4.webp",
              width: 1920,
              height: 1080,
              alt: "Sri Astari Rasjid",
              type: "image/webp",
            },
          ],
        }}
      />
      <Swiper
        spaceBetween={0}
        effect={"fade"}
        navigation={false}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        grabCursor={false}
        loop={true}
        speed={2000}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[Autoplay, EffectFade]}
        className="mySwiper h-screen w-screen !z-0"
      >
        <SwiperSlide>
          <Image
            src={"/index-cropped-desktop.webp"}
            alt={`Image`}
            fill
            unoptimized
            quality={100}
            priority={true}
            className="object-cover object-[42%_center] h-screen"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/index-bg-2.webp"}
            alt={`Image`}
            fill
            unoptimized
            quality={100}
            priority={true}
            className="object-cover object-center h-screen"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/index-bg-3.webp"}
            alt={`Image`}
            fill
            unoptimized
            quality={100}
            priority={true}
            className="object-cover object-[20%_center] h-screen"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/index-bg-4.webp"}
            alt={`Image`}
            fill
            unoptimized
            quality={100}
            priority={true}
            className="object-cover object-center h-screen"
          />
        </SwiperSlide>
      </Swiper>

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

// {
//   /* <Image
//         id="index-background"
//         src="/index-cropped-mobile.webp"
//         alt="Background Home Page"
//         // width={1920}
//         // height={1080}
//         // quality={100}
//         fill
//         priority
//         className="block sm:hidden object-cover object-center h-screen"
//       />
//       <Image
//         id="index-background"
//         src="/index-cropped-tablet.webp"
//         alt="Background Home Page"
//         // width={1920}
//         // height={1080}
//         // quality={100}
//         fill
//         priority
//         className="hidden sm:block lg:hidden object-cover object-center h-screen"
//       />
//       <Image
//         id="index-background"
//         src="/index-cropped-desktop.webp"
//         alt="Background Home Page"
//         // width={1920}
//         // height={1080}
//         // quality={100}
//         fill
//         priority
//         className="hidden lg:block object-cover object-[42%_center] h-screen"
//       /> */
// }
