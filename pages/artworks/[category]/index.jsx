import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { cohaerentia, lucette } from "@/components/FontSrc";
import { useRouter } from "next/router";
import { kebabCase } from "@/components/KebabCase";
import data_artworks from "/data/data_artworks.json";

const ArtworksIndexPage = ({ category, artworks_list }) => {
  const router = useRouter();

  return (
    <main className="main_outer_container">
      <div className="main_inner_container">
        <div className="artworks_container">
          <div
            className={`${cohaerentia.variable} font-cohaerentia artworks_menu`}
          >
            <Link
              href="/artworks/painting"
              className={
                category === "painting" ? "translate-x-16" : "translate-x-0"
              }
            >
              Painting
            </Link>
            <Link
              href="/artworks/sculpture"
              className={
                category === "sculpture" ? "translate-x-16" : "translate-x-0"
              }
            >
              Sculpture
            </Link>
            <Link
              href="/artworks/installation"
              className={
                category === "installation" ? "translate-x-16" : "translate-x-0"
              }
            >
              Installation
            </Link>
            <Link
              href="/artworks/donation-collection"
              className={
                category === "donation-collection"
                  ? "translate-x-16"
                  : "translate-x-0"
              }
            >
              Donation Collection
            </Link>
          </div>
          <div className="artworks_display_outer_container">
            <h5
              className={`exhibitions_title ${cohaerentia.variable} font-cohaerentia lg:hidden capitalize !w-max`}
            >
              {category}
            </h5>
            <div className="artworks_display_inner_container">
              {artworks_list.map((item, index) => {
                return (
                  <Link
                    href={`/artworks/${category}/${kebabCase(item.title)}`}
                    key={`artworks-${category}-${index}`}
                  >
                    <div className="flex flex-col justify-start items-start gap-2 w-min">
                      <div className="artworks_item_container">
                        <Image
                          src={`/${item.image_url}`}
                          alt=""
                          // width={360}
                          // height={288}
                          fill
                          className="object-cover object-center"
                        />
                        <div
                          className={`artworks_item_overlay ${lucette.variable} font-lucette `}
                        >
                          <p className="!my-0 !text-left">{item.title}</p>
                          <p className="!my-0 !text-left">{item.year}</p>
                        </div>
                      </div>
                      <div
                        className={`flex flex-col lg:hidden ${lucette.variable} font-lucette `}
                      >
                        <h5 className="!my-0 !text-left">{item.title}</h5>
                        <h5 className="!my-0 !text-left">{item.year}</h5>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ArtworksIndexPage;

export async function getServerSideProps({ params }) {
  try {
    // const res = await fetch(

    // );

    // let data_program = {};
    // if (res.ok) {
    //   data_program = await res.json();
    // }

    return {
      props: {
        category: params.category,
        artworks_list: data_artworks[params.category],
      },
    };
  } catch (error) {
    console.error("ERROR:", error);
    return {};
  }
}

const data_painting = [
  { title: "Judul Karya", year: "2014", image_url: "artworks-placeholder.jpg" },
  {
    title: "Karya 13444",
    year: "2014",
    image_url: "artworks-placeholder.jpg",
  },
  {
    title: "Sebuah Jalan Menuju Semesta yang Abadi",
    year: "2014",
    image_url: "image-placeholder-2.jpg",
  },
  {
    title: "Random Judul",
    year: "2014",
    image_url: "artworks-placeholder.jpg",
  },
  { title: "Relative", year: "2014", image_url: "artworks-placeholder.jpg" },
  {
    title: "0928080938439",
    year: "2014",
    image_url: "image-placeholder-2.jpg",
  },
  {
    title: "Kenapa ini jadi judul?",
    year: "2014",
    image_url: "image-placeholder-2.jpg",
  },
];

const data_sculpture = [{ title: "", year: "", image_url: "" }];
