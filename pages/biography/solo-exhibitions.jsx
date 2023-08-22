import { cohaerentia, lucette } from "@/components/FontSrc";
import { NextSeo } from "next-seo";
import Image from "next/image";
import React from "react";

const SoloExhibitionsPage = () => {
  return (
    <>
      <NextSeo
        title="Solo Exhibition"
        description="Welcome to the official website of Sri Astari Rasjid."
        openGraph={{
          title: "Solo Exhibition - Sri Astari Rasjid",
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
            Solo Exhibitions
          </h5>
          <div className="exhibitions_outer_container">
            <div className="exhibitions_inner_container">
              {data_soloExhbition &&
                data_soloExhbition.map((item, index) => {
                  return (
                    <div
                      className="exhibitions_item_container"
                      key={`solo-exhibitions-${index}`}
                    >
                      {item.year && (
                        <h1
                          className={`display-1 ${lucette.variable} font-lucette`}
                        >
                          {item.year}
                        </h1>
                      )}
                      {item.image_url && (
                        <Image
                          src={`/${item.image_url}`}
                          alt={item.title}
                          width={328}
                          height={262}
                          className="exhibitions_item_image"
                        />
                      )}
                      {item.title && (
                        <h5
                          className={`${lucette.variable} font-lucette !mt-4 !mb-1`}
                        >
                          {item.title}
                        </h5>
                      )}
                      {item.location && (
                        <p
                          className={`${cohaerentia.variable} font-cohaerentia`}
                        >
                          {item.location}
                        </p>
                      )}
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default SoloExhibitionsPage;

const data_soloExhbition = [
  {
    year: "1991",
    image_url: "solo-exhibitions-1.jpg",
    title: "Noktah",
    location: "Contemporary Art Amerika Serikat",
  },
  {
    year: "2000",
    image_url: "solo-exhibitions-2.jpg",
    title: "Recollections",
    location: "Ganesha Gallery Four Seasons Resort Bali",
  },
  {
    year: "2000",
    image_url: "solo-exhibitions-3.jpg",
    title: "Wings & Excursions",
    location: "Ganesha Gallery, Four Seasons Resort Bali",
  },
  {
    year: "2008",
    image_url: "solo-exhibitions-4.jpg",
    title: "His/Hers Exhibition",
    location: "Vanessa Art Link 798 District, Beijing",
  },
  {
    year: "2016",
    image_url: "solo-exhibitions-5.jpg",
    title: "Yang Terhormat Ibu",
    location: "Yogyakarta",
  },
];
