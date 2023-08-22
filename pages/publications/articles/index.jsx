import React from "react";
import Image from "next/image";
import { cohaerentia, krub, lucette } from "@/components/FontSrc";
import { NextSeo } from "next-seo";

const ArticlesIndexPage = ({ articles_list }) => {
  return (
    <>
      <NextSeo
        title="Articles"
        description="Welcome to the official website of Sri Astari Rasjid."
        openGraph={{
          title: "Articles - Sri Astari Rasjid",
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
            Articles
          </h5>
          <div className="w-full flex flex-col lg:flex-row flex-wrap justify-start items-center lg:items-start gap-y-24 lg:gap-x-12 lg:gap-y-20 xl:gap-x-16 xl:gap-y-24">
            {articles_list &&
              articles_list.map((item, index) => {
                const article = item?.attributes;
                return (
                  <div
                    className="basis-full md:basis-[28%] flex flex-col justify-start items-start gap-4 w-full max-w-[400px]"
                    key={`articles-${index}`}
                  >
                    {article?.Image?.data?.attributes?.url && (
                      <Image
                        src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${article.Image.data.attributes.url}`}
                        alt={article.Title}
                        width={283}
                        height={400}
                        className="object-cover object-center w-full h-[300px] lg:h-[180px] xl:h-[240px] 2xl:h-[300px] rounded"
                      />
                    )}
                    <div>
                      {article?.Title && (
                        <h4
                          className={`${lucette.variable} font-lucette !my-0 text-left`}
                        >
                          {article.Title}
                        </h4>
                      )}
                      {article?.Published_Date && (
                        <p
                          className={`${krub.variable} font-krub text-left !mb-0`}
                        >
                          {article.Published_Date}
                        </p>
                      )}
                    </div>
                    {article?.Description && (
                      <div
                        className={`${krub.variable} font-krub text-justify`}
                      >
                        <p className={`sub-p !mb-0`}>{article.Description}</p>
                        <a
                          href={article.Link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="sub-p hover:text-black text-black/70 underline hover:no-underline"
                        >
                          Read more
                        </a>
                      </div>
                    )}
                  </div>
                );
              })}
          </div>
        </div>
      </main>
    </>
  );
};

export default ArticlesIndexPage;

export async function getServerSideProps() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/articles?populate[Image][fields][0]=url`,
      {
        headers: {
          Authorization: `Bearer 1980c7031fefeea162837e4cdcb9a38f39cc74907c3c8f3786572933001eeb61bdd485ea41bc53f63e26b3b52aaace462944c35171ca9ddf335c68da41e233cc8bff51032dc6ff3b120bc12e4d37dd28077e782bb4ba8c69698bc5f3b6513700ee3919edfb234cb9dfc6c64f680520a5b37afa948af0c484292af7567d4c9dd1`,
        },
      }
    );

    const data_articles = await res.json();

    return {
      props: {
        articles_list: data_articles.data,
      },
    };
  } catch (error) {
    console.error("ERROR:", error);
    return {};
  }
}

// const data_articles = [
//   {
//     title: "Sri Astari Rasjid",
//     url: "publications-placeholder.png",
//     date: "20 April 2023",
//     description:
//       "Astari (26 Maret 1953 – 11 Desember 2022) adalah seorang seniman yang berkarya dalam seni lukis dan seni patung.[1] Ia dilantik Presiden Republik...",
//     link: "https://id.wikipedia.org/wiki/Sri_Astari_Rasjid",
//   },
//   {
//     title:
//       "Biografi Sri Astari Rasjid, Mendiang Seniman yang juga Mantan Dubes RI",
//     url: "publications-placeholder.png",
//     date: "12 Desember 2022",
//     description:
//       "Jakarta - Biografi Sri Astari Rasjid merupakan sosok seniman dalam seni rupa kontemporer Indonesia yang juga pernah menjadi Duta Besar mewakili...",
//     link: "https://news.detik.com/berita/d-6456843/biografi-sri-astari-rasjid-mendiang-seniman-yang-juga-mantan-dubes-ri",
//   },
//   {
//     title: "Astari Rasjid",
//     url: "publications-placeholder.png",
//     date: "November 2021",
//     description:
//       "Lahir di Jakarta pada tahun 1953, Astari Rasjid merupakan seorang seniman dan akademisi,yang juga pernah menjabat sebagai Duta Besar...",
//     link: "https://news.detik.com/berita/d-6456843/biografi-sri-astari-rasjid-mendiang-seniman-yang-juga-mantan-dubes-ri",
//   },
//   {
//     title: 'Astari dan bukunya, "Art of Diplomacy"',
//     url: "publications-placeholder.png",
//     date: "11 juli 2020",
//     description:
//       "London (ANTARA) - Sri Astari Rasjid memandang Bulgaria, Albania dan Makedonia Utara lebih sebagai tanah budaya, alih-alih entitas politik, di...",
//     link: "https://www.antaranews.com/berita/1604698/astari-dan-bukunya-art-of-diplomacy",
//   },
//   {
//     title:
//       "Indonesian Ambassador To Bulgaria, Astari Rasjid – Succeeding With Cultural Diplomacy",
//     url: "publications-placeholder.png",
//     date: "28 November 2019",
//     description:
//       "IO – Astari Rasjid is not a career dip­lomat but an artist who was posted as Indonesian ambassador to Bulgar­ia, Albania and Macedonia in 2016. From...",
//     link: "https://observerid.com/indonesian-ambassador-to-bulgaria-astari-rasjid-succeeding-with-cultural-diplomacy/",
//   },
// ];
