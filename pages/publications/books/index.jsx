import React from "react";
// import Image from "next/image";
import { cohaerentia } from "@/components/FontSrc";
import CataloguesComponent from "@/components/CataloguesComponent";
import { NextSeo } from "next-seo";

const BooksIndexPage = ({ books_list }) => {
  return (
    <>
      <NextSeo
        title="Books"
        description="Welcome to the official website of Sri Astari Rasjid."
        openGraph={{
          title: "Books - Sri Astari Rasjid",
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
            Books
          </h5>
          {books_list && <CataloguesComponent section_list={books_list} />}
        </div>
      </main>
    </>
  );
};

export default BooksIndexPage;

export async function getServerSideProps() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/books?populate[Image][fields][0]=url`,
      {
        headers: {
          Authorization: process.env.TOKEN_SECRET,
        },
      }
    );

    const data_books = await res.json();

    return {
      props: {
        books_list: data_books.data,
      },
    };
  } catch (error) {
    console.error("ERROR:", error);
    return {};
  }
}
