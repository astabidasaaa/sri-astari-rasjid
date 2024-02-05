import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { RxCross1, RxChevronRight, RxChevronLeft } from "react-icons/rx";
// import data_artworks from "/data/data_artworks.json";
import slugify from "@sindresorhus/slugify";
import { cohaerentia, krub, lucette } from "@/components/FontSrc";
import { NextSeo } from "next-seo";

const ArtworkTemplate = ({ category, artwork }) => {
  // const data =  artwork?.data?.attributes;
  // console.log(data);

  return (
    <>
      <NextSeo
        title={`${artwork?.data?.attributes?.Title || " "}`}
        description="Welcome to the official website of Sri Astari Rasjid."
        openGraph={{
          title: `${
            artwork?.data?.attributes?.Title || " "
          } – Sri Astari Rasjid`,
          images: [
            {
              url:
                artwork?.data?.attributes?.Image.data.attributes.url ||
                "/index-bg-4.webp",
              width:
                artwork?.data?.attributes?.Image.data.attributes.width || 1920,
              height:
                artwork?.data?.attributes?.Image.data.attributes.height || 1080,
              alt: "Sri Astari Rasjid",
              type: "image/webp",
            },
          ],
        }}
      />
      <main className="main_outer_container">
        <div className="main_inner_container">
          <div className="relative flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-10 lg:gap-16 w-full">
            <Link
              href={`/artworks/${category}`}
              className="absolute top-0 right-0 hidden lg:block text-2xl text-black/60 hover:text-black"
            >
              <RxCross1 key="menu-close" />
            </Link>
            {artwork?.data?.attributes?.Image.data.attributes.url && (
              <div className="relative flex justify-center items-center w-full lg:w-[60%] lg:max-w-[434px] lg:h-screen lg:max-h-[560px]">
                <Image
                  src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${artwork.data.attributes.Image.data.attributes.url}`}
                  alt={artwork.data.attributes.Title}
                  // width={360}
                  // height={288}
                  quality={90}
                  fill
                  className="!relative object-contain object-center !w-full !h-[unset] !max-h-[560px]"
                />
              </div>
            )}

            <div className="w-full">
              {category && (
                <h5
                  className={`w-full text-[#00000066] ${cohaerentia.variable} font-cohaerentia capitalize`}
                >
                  {category.replace(/-/g, " ")}
                </h5>
              )}
              {artwork?.data?.attributes?.Title && (
                <h1
                  className={`w-full ${lucette.variable} font-lucette capitalize !m-0`}
                >
                  {artwork.data.attributes.Title}{" "}
                  {artwork?.data?.attributes?.Year && (
                    <span className="text-2xl text-[#00000066]">
                      ({artwork.data.attributes.Year})
                    </span>
                  )}
                </h1>
              )}
              <div
                className={`flex flex-row gap-6 lg:gap-12 ${cohaerentia.variable} font-cohaerentia mb-8`}
              >
                {artwork?.data?.attributes?.Media && (
                  <h6 className="!m-0">{artwork.data.attributes.Media}</h6>
                )}
                {artwork?.data?.attributes?.Size && (
                  <h6 className="!m-0">{artwork.data.attributes.Size}</h6>
                )}
              </div>
              <div
                className={`w-full lg:max-h-[320px] lg:overflow-y-auto pr-4 ${krub.variable} font-krub`}
              >
                <div className="h-max">
                  {artwork?.data?.attributes?.Description && (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: artwork.data.attributes.Description,
                      }}
                    />
                  )}
                  <p className="sub-p !m-0">
                    <b>Status:</b> {artwork?.data?.attributes?.Status || "-"}
                  </p>
                  <p className="sub-p !m-0">
                    <b>Exhibited:</b>{" "}
                    {artwork?.data?.attributes?.Exhibited || "-"}
                  </p>
                  <p className="sub-p !m-0">
                    <b>Exhibition Date:</b>{" "}
                    {artwork?.data?.attributes?.Exhibition_Date || "-"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ArtworkTemplate;

export const getStaticPaths = async () => {
  let paths = [];
  const category_list = [
    "painting",
    "sculpture",
    "installation",
    "donation-collection",
  ];

  // await Promise.all(
  category_list.map(async (cat) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/${cat}s?fields[0]=uid`,
        {
          headers: {
            Authorization: process.env.TOKEN_SECRET,
          },
        }
      );

      const data = await response.json();

      // Create paths for each artwork in the category
      data.data.map((artwork) => {
        paths.push({
          params: {
            category: cat,
            url: artwork.attributes.UID, // Use the correct field name for the title
          },
        });
      });
    } catch (error) {
      console.error(`Error fetching data for category ${cat}:`, error);
    }
  });
  // );

  return {
    paths,
    fallback: true, // false or 'blocking'
  };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/${params.category}s/${params.url}?populate[Image][fields][0]=url&populate[Image][fields][1]=width&populate[Image][fields][2]=height`,
    {
      headers: {
        Authorization: `Bearer 1980c7031fefeea162837e4cdcb9a38f39cc74907c3c8f3786572933001eeb61bdd485ea41bc53f63e26b3b52aaace462944c35171ca9ddf335c68da41e233cc8bff51032dc6ff3b120bc12e4d37dd28077e782bb4ba8c69698bc5f3b6513700ee3919edfb234cb9dfc6c64f680520a5b37afa948af0c484292af7567d4c9dd1`,
      },
    }
  );
  const data_artwork = await res.json();

  if (!data_artwork) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      category: params.category,
      artwork: data_artwork,
    },
    revalidate: 30,
  };
};

// 1980c7031fefeea162837e4cdcb9a38f39cc74907c3c8f3786572933001eeb61bdd485ea41bc53f63e26b3b52aaace462944c35171ca9ddf335c68da41e233cc8bff51032dc6ff3b120bc12e4d37dd28077e782bb4ba8c69698bc5f3b6513700ee3919edfb234cb9dfc6c64f680520a5b37afa948af0c484292af7567d4c9dd1
