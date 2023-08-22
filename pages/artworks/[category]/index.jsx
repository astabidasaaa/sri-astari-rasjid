import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import slugify from "@sindresorhus/slugify";
import { cohaerentia, lucette } from "@/components/FontSrc";
import { NextSeo } from "next-seo";
// import { useRouter } from "next/router";
// import data_artworks from "/data/data_artworks.json";

const ArtworksIndexPage = ({ category, artworks_list }) => {
  // function capitalizeFirstLetter(string) {
  //   return string.charAt(0).toUpperCase() + string.slice(1);
  // }

  return (
    <>
      <NextSeo
        title={category
          .replace(/-/g, " ")
          .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase())}
        description="Welcome to the official website of Sri Astari Rasjid."
        openGraph={{
          title: `${category
            .replace(/-/g, " ")
            .replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
              letter.toUpperCase()
            )} – Sri Astari Rasjid`,
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
                  category === "installation"
                    ? "translate-x-16"
                    : "translate-x-0"
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
                {category.replace(/-/g, " ")}
              </h5>
              <div className="artworks_display_inner_container">
                {artworks_list.map((item, index) => {
                  const artwork = item.attributes;
                  return (
                    <Link
                      href={`/artworks/${category}/${slugify(artwork?.Title)}`}
                      key={`artworks-${category}-${index}`}
                    >
                      <div className="flex flex-col justify-start items-start gap-2 w-min">
                        <div className="artworks_item_container">
                          {artwork?.Image?.data?.attributes?.url && (
                            <Image
                              src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${artwork.Image.data.attributes.url}`}
                              alt={artwork.Title}
                              // width={360}
                              // height={288}
                              fill
                              className="object-cover object-center"
                            />
                          )}
                          <div
                            className={`artworks_item_overlay ${lucette.variable} font-lucette `}
                          >
                            {artwork?.Title && (
                              <p className="!my-0 !text-left">
                                {artwork.Title}
                              </p>
                            )}
                            {artwork?.Year && (
                              <p className="sub-p !my-0 !text-left">
                                ({artwork.Year})
                              </p>
                            )}
                          </div>
                        </div>
                        <div
                          className={`flex flex-col lg:hidden ${lucette.variable} font-lucette `}
                        >
                          {artwork?.Title && (
                            <h5 className="!my-0 !text-left">
                              {artwork.Title}
                            </h5>
                          )}
                          {artwork?.Year && (
                            <h5 className="!my-0 !text-left">
                              ({artwork.Year})
                            </h5>
                          )}
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
    </>
  );
};

export default ArtworksIndexPage;

export async function getServerSideProps({ params }) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/${params.category}s?fields[0]=Title&fields[1]=UID&fields[2]=Year&populate[Image][fields][0]=url`,
      {
        headers: {
          Authorization: `Bearer 1980c7031fefeea162837e4cdcb9a38f39cc74907c3c8f3786572933001eeb61bdd485ea41bc53f63e26b3b52aaace462944c35171ca9ddf335c68da41e233cc8bff51032dc6ff3b120bc12e4d37dd28077e782bb4ba8c69698bc5f3b6513700ee3919edfb234cb9dfc6c64f680520a5b37afa948af0c484292af7567d4c9dd1`,
        },
      }
    );

    const data_artworks = await res.json();

    return {
      props: {
        category: params.category,
        artworks_list: data_artworks.data,
      },
    };
  } catch (error) {
    console.error("ERROR:", error);
    return {};
  }
}

// const data_painting = [
//   { title: "Judul Karya", year: "2014", image_url: "artworks-placeholder.jpg" },
//   {
//     title: "Karya 13444",
//     year: "2014",
//     image_url: "artworks-placeholder.jpg",
//   },
//   {
//     title: "Sebuah Jalan Menuju Semesta yang Abadi",
//     year: "2014",
//     image_url: "image-placeholder-2.jpg",
//   },
//   {
//     title: "Random Judul",
//     year: "2014",
//     image_url: "artworks-placeholder.jpg",
//   },
//   { title: "Relative", year: "2014", image_url: "artworks-placeholder.jpg" },
//   {
//     title: "0928080938439",
//     year: "2014",
//     image_url: "image-placeholder-2.jpg",
//   },
//   {
//     title: "Kenapa ini jadi judul?",
//     year: "2014",
//     image_url: "image-placeholder-2.jpg",
//   },
// ];

// const data_sculpture = [{ title: "", year: "", image_url: "" }];
