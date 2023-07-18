import React from "react";
import Image from "next/image";
import { cohaerentia, krub, lucette } from "@/components/FontSrc";

const ProfilePage = () => {
  return (
    <main className="main_outer_container">
      <div className="main_inner_container">
        <h1 className={`display-1 ${lucette.variable} font-lucette`}>
          Sri Astari Rasjid
        </h1>
        <div
          className={`relative flex flex-col lg:flex-row justify-start items-center lg:items-start gap-8 lg:gap-16  ${krub.variable} font-krub`}
        >
          <Image
            id="profile-img"
            src="/profile-img.jpg"
            alt="Foto Profil Sri Astari Rasjid"
            width={392}
            height={522}
            className="object-contain object-center max-h-[480px]"
          />
          <div className="profile_content lg:max-w-2xl 2xl:max-w-4xl lg:overflow-y-scroll lg:max-h-[480px]">
            <div className="h-max w-full lg:px-4">
              <p>
                Sri Astari Rasjid adalah sosok Seniman Kontemporer Indonesia dan
                mantan Kedutaan Besar Indonesia untuk Bulgaria, Albania dan
                Makedonia Utara sejak 2016 hingga 2020. Lahir di Jakarta pada 16
                Maret 1953 dan meninggal dunia pada hari Minggu tanggal 11
                Desember 2022 di Singapura pada umurnya yang ke-69 tahun. Ia
                adalah seorang istri dari Haroen al Rasjid yang juga menjadi
                Presiden Direktur PT Caltex Pacific Indonesia (CPI) periode
                1977-1994 dan Presiden Komisaris PT CPI periode 1994-2003.
              </p>
              <p>
                Sri Astari Rasjid juga dikenal sebagai Seniman Feminisme karena
                umumnya Sri Astari selalu membuat karya dengan tema kehidupan
                Perempuan Indonesia mengeksplorasi masalah serta tekanan yang
                muncul akibat modernisasi, demokrasi, globalisasi, dan kebebasan
                dalam kehidupan urban perkotaan dengan budaya patriarki dan
                komunal yang mengakar dalam lingkungan perempuan Indonesia.
                Karya-karyanya tidak hanya berupa lukisan tetapi juga patung,
                dan seni instalasi.
              </p>
              <p>
                Karya-karyanya telah ditampilkan dalam berbagai pameran penting
                di berbagai negara antara lain Jakarta (Indonesia), Hongkong,
                Washington, New York (Amerika Serikat), Moskow (Rusia), Madrid
                (Spanyol), London (Inggris), Paris (Perancis), Venice Biennale
                (Italia) dan lainnya. Beberapa kompetisi seni rupa ia telah
                memenangi beberapa penghargaan, seperti Nokia Arts Award,
                Phillip Morris Art Award dan Winsor and Newton Award.
              </p>
              <p>
                <b>Pendidikan</b>
              </p>
              <ul>
                <li>
                  1973 Menempuh Pendidikan sastra inggris di Universtias
                  Indonesia
                </li>
                <li>
                  1975-1976 Mempelajari Fashion Design di Lucy Clayton School of
                  Fashion di London, Inggris
                </li>
                <li>
                  1987 Melanjutkan Pendidikannya dengan mempelajari lukisan
                  diuniversitas of Minnesota, Amerika
                </li>
                <li>
                  1988 Mengikuti Painting Course pada Royal College of Art di
                  London
                </li>
              </ul>
              <p>
                <b>Penghargaan</b>
              </p>
              <ul>
                <li>▪ Philip Morris Indonesian Art Awards VI (1999)</li>
                <li>▪ Philip Morris Art Awards (2005)</li>
                <li>▪ Bulgarian Chamber of Commerse & Industry</li>
                <li>▪ Kartini Award dari Mitra Seni Indonesia (2015)</li>
                <li>
                  ▪ Dilantik menjadi Duta besar Indonesia untuk Bulgaria
                  merangkap Albania dan Makedonia utara (2016-2020)
                </li>
                <li>
                  ▪ Dr Code Fashion Award atas peran nya di KBRI Sofia,dan pada
                </li>
                <li>▪ Sofia Fashion World (2019)</li>
                <li>
                  ▪ Madara Horseman 1st Degree State Order dari Presiden
                  Bulgaria Ruben Radev (2020)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;
