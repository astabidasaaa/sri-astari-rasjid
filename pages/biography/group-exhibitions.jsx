import { cohaerentia, lucette } from "@/components/FontSrc";
import Image from "next/image";
import React from "react";

const GroupExhibitionsPage = () => {
  return (
    <main className="main_outer_container">
      <div className="main_inner_container">
        <h5
          className={`exhibitions_title ${cohaerentia.variable} font-cohaerentia`}
        >
          Group Exhibitions
        </h5>
        <div className="exhibitions_outer_container">
          <div className="exhibitions_inner_container">
            {data_groupExhbition &&
              data_groupExhbition.map((item, index) => {
                return (
                  <div
                    className="exhibitions_item_container"
                    key={`group-exhibitions-${index}`}
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
                      <p className={`${cohaerentia.variable} font-cohaerentia`}>
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
  );
};

export default GroupExhibitionsPage;

const data_groupExhbition = [
  {
    year: "2005",
    image_url: "group-exhibitions-1.jpg",
    title: "Bienalle Jogja VIII 2005 “DI SINI DAN KINI”",
    location: "",
  },
  {
    year: "2010",
    image_url: "group-exhibitions-2.jpg",
    title: "Ciputra Space & Image",
    location: "",
  },
  {
    year: "2015",
    image_url: "group-exhibitions-3.jpg",
    title: "Aku Diponegoro The Prince in Our Memory",
    location: "Galeri Nasional Indonesia",
  },
  {
    year: "2017",
    image_url: "group-exhibitions-4.jpg",
    title: "Wonders of Indonesia",
    location: "National Gallery The Palace, Sofia, Bulgaria",
  },
  {
    year: "2019",
    image_url: "group-exhibitions-5.jpg",
    title: "Contemporary Art Exhibition",
    location: "Nastional Gallery Kvadrat 500, Sofia, Bulgaria",
  },
  {
    year: "2019",
    image_url: "group-exhibitions-6.jpg",
    title: "Synthesis Indonesia",
    location: "Bulgaria",
  },
  {
    year: "2019",
    image_url: "group-exhibitions-7.jpg",
    title: "San Stefano Gallery’s Contemporary Art Space",
    location: "Bulgaria",
  },
  {
    year: "2021",
    image_url: "group-exhibitions-8.jpg",
    title: "Tera (in)cognita",
    location: " Galeri Nasional Indonesia",
  },
  {
    year: "2022 - 2023",
    image_url: "group-exhibitions-9.jpg",
    title: "Wastu/Loka/Kala",
    location: "Gedung Sarinah Lantai 6, Jakarta",
  },
];
