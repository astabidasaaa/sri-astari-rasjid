import React from "react";
import Image from "next/image";
import data_artworks from "/data/data_artworks.json";
import { kebabCase } from "@/components/KebabCase";
import { cohaerentia, lucette } from "@/components/FontSrc";

const ArtworkTemplate = ({ category, artwork }) => {
  // const a = artwork;

  // console.log(a);
  return (
    <main className="main_outer_container">
      <div className="main_inner_container">
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-10 lg:gap-16 w-full">
          <div className="relative flex justify-center items-center w-full lg:w-[60%] lg:max-w-[434px] lg:h-screen lg:max-h-[560px]">
            <Image
              src={`/artworks-placeholder.jpg`}
              alt=""
              // width={360}
              // height={288}
              fill
              className="!relative object-contain object-center !w-full !h-[unset] !max-h-[560px]"
            />
          </div>
          {/* <div className="relative w-full lg:w-[40%] lg:max-w-[434px] h-screen max-h-[560px]">
            <Image
              src={`/artworks-placeholder.jpg`}
              alt=""
              // width={360}
              // height={288}
              fill
              className="object-contain object-center"
            />
          </div> */}
          <div className="w-full">
            <h5
              className={`w-full text-[#00000066] ${cohaerentia.variable} font-cohaerentia capitalize`}
            >
              {category}
            </h5>
            <h1
              className={`w-full ${lucette.variable} font-lucette capitalize !m-0`}
            >
              {artwork.title}{" "}
              <span className="text-2xl text-[#00000066]">
                ({artwork.year})
              </span>
            </h1>
            <div
              className={`flex flex-row gap-6 lg:gap-12 ${cohaerentia.variable} font-cohaerentia mb-8`}
            >
              <h6 className="!m-0">{artwork.media}</h6>
              <h6 className="!m-0">{artwork.size}</h6>
            </div>
            <div className="w-full lg:max-h-[320px] lg:overflow-y-auto pr-4">
              <div className="h-max">
                <p className="sub-p">{artwork.description}</p>
                <p className="sub-p !m-0">
                  <b>Status:</b> {artwork.status}
                </p>
                <p className="sub-p !m-0">
                  <b>Exhibited:</b> {artwork.exhibited}
                </p>
                <p className="sub-p !m-0">
                  <b>Exhibition Date:</b> {artwork.exhibition_date}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ArtworkTemplate;

export const getStaticPaths = () => {
  let paths = [];
  const category_list = [
    "painting",
    "sculpture",
    "installation",
    "donation-collection",
  ];

  category_list.map((cat, index) => {
    data_artworks[cat].map((item, index) => {
      paths.push({
        params: {
          category: cat,
          url: kebabCase(item.title),
        },
      });
    });
  });

  return {
    paths,
    fallback: false, // false or 'blocking'
  };
};

export const getStaticProps = ({ params }) => {
  const category_filtered = data_artworks[params.category];

  const artwork = category_filtered.filter(
    (item) => kebabCase(item.title) === params.url
  );

  if (!data_artworks) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      category: params.category,
      artwork: artwork[0],
    },
    revalidate: 1,
  };
};
