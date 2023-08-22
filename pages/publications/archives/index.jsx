import React from "react";
import Image from "next/image";
import { cohaerentia, krub, lucette } from "@/components/FontSrc";
import { NextSeo } from "next-seo";

const ArchivesIndexPage = () => {
  return (
    <>
      <NextSeo
        title="Archives"
        description="Welcome to the official website of Sri Astari Rasjid."
        openGraph={{
          title: "Archives - Sri Astari Rasjid",
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
      <main className="main_outer_container">
        <div className="main_inner_container">
          <h5
            className={`exhibitions_title ${cohaerentia.variable} font-cohaerentia`}
          >
            Archives
          </h5>
        </div>
      </main>
    </>
  );
};

export default ArchivesIndexPage;
