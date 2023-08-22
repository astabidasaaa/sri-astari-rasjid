import React from "react";
// import Image from "next/image";
import { cohaerentia } from "@/components/FontSrc";
import CataloguesComponent from "@/components/CataloguesComponent";
import { NextSeo } from "next-seo";

const CataloguesIndexPage = ({ catalogues_list }) => {
  return (
    <>
      <NextSeo
        title="Catalogues"
        description="Welcome to the official website of Sri Astari Rasjid."
        openGraph={{
          title: "Catalogues - Sri Astari Rasjid",
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
            Catalogues
          </h5>
          {catalogues_list && (
            <CataloguesComponent section_list={catalogues_list} />
          )}
        </div>
      </main>
    </>
  );
};

export default CataloguesIndexPage;

export async function getServerSideProps() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/catalogues?populate[Image][fields][0]=url`,
      {
        headers: {
          Authorization: `Bearer 1980c7031fefeea162837e4cdcb9a38f39cc74907c3c8f3786572933001eeb61bdd485ea41bc53f63e26b3b52aaace462944c35171ca9ddf335c68da41e233cc8bff51032dc6ff3b120bc12e4d37dd28077e782bb4ba8c69698bc5f3b6513700ee3919edfb234cb9dfc6c64f680520a5b37afa948af0c484292af7567d4c9dd1`,
        },
      }
    );

    const data_catalogues = await res.json();

    return {
      props: {
        catalogues_list: data_catalogues.data,
      },
    };
  } catch (error) {
    console.error("ERROR:", error);
    return {};
  }
}
