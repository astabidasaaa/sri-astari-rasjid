import React from "react";
import Image from "next/image";
import { cohaerentia, krub, lucette } from "@/components/FontSrc";
import { NextSeo } from "next-seo";

const ProfilePage = ({ profile }) => {
  const data = profile?.data?.attributes || null;
  // console.log(data);

  return (
    <>
      <NextSeo
        title="Profile"
        description="Welcome to the official website of Sri Astari Rasjid."
        openGraph={{
          title: "Profile - Sri Astari Rasjid",
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
          <h1 className={`display-1 ${lucette.variable} font-lucette`}>
            {data?.Title || "Sri Astari Rasjid"}
          </h1>
          <div
            className={`relative w-full flex flex-col lg:flex-row justify-start lg:justify-between items-center lg:items-start gap-8 lg:gap-16 ${krub.variable} font-krub`}
          >
            {/* <div className="relative flex justify-center items-center w-full lg:w-full lg:max-w-[320px] lg:h-screen lg:max-h-[480px]"> */}
            <Image
              // id="profile-img"
              src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${
                data?.Image?.data?.attributes?.url || "/profile-img.jpg"
              }`}
              alt="Foto Profil Sri Astari Rasjid"
              // width={392}
              // height={522}
              fill
              className="!relative object-contain object-center lg:object-left-top !w-full !max-w-[400px] !h-[unset] !max-h-[480px]"
            />
            {/* </div> */}
            <div className="profile_content lg:max-w-2xl 2xl:max-w-4xl lg:overflow-y-scroll lg:max-h-[480px]">
              <div className="h-max w-full lg:px-4">
                {data.Description && (
                  <div dangerouslySetInnerHTML={{ __html: data.Description }} />
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProfilePage;

export const getStaticProps = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/profile?populate[Image][fields][0]=url`,
    {
      headers: {
        Authorization: `Bearer 1980c7031fefeea162837e4cdcb9a38f39cc74907c3c8f3786572933001eeb61bdd485ea41bc53f63e26b3b52aaace462944c35171ca9ddf335c68da41e233cc8bff51032dc6ff3b120bc12e4d37dd28077e782bb4ba8c69698bc5f3b6513700ee3919edfb234cb9dfc6c64f680520a5b37afa948af0c484292af7567d4c9dd1`,
      },
    }
  );
  const data_profile = await res.json();

  if (!data_profile) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      profile: data_profile,
    },
    revalidate: 30,
  };
};
