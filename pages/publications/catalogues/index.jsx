import React from "react";
import Image from "next/image";
import { cohaerentia, lucette } from "@/components/FontSrc";

const CataloguesIndexPage = () => {
  return (
    <main className="main_outer_container">
      <div className="main_inner_container">
        <h5
          className={`exhibitions_title ${cohaerentia.variable} font-cohaerentia`}
        >
          Catalogues
        </h5>
        <div className="catalogues_container">
          {data_catalogues &&
            data_catalogues.map((item, index) => {
              return (
                <div
                  className="catalogues_item_container"
                  key={`catalogues-${index}`}
                >
                  {item.image_url && (
                    <Image
                      src={`/${item.image_url}`}
                      alt={item.title}
                      width={283}
                      height={400}
                      className="catalogues_item_image"
                    />
                  )}
                  <div className="catalogues_item_description">
                    {item.title && (
                      <h5
                        className={`${lucette.variable} font-lucette !mt-0 lg:!mb-24 text-center lg:text-left`}
                      >
                        {item.title}
                      </h5>
                    )}
                    <p
                      className={`${cohaerentia.variable} font-cohaerentia text-center lg:text-left !mb-0`}
                    >
                      {item.publisher}
                    </p>
                    <p
                      className={`${cohaerentia.variable} font-cohaerentia text-center lg:text-left !mb-0`}
                    >
                      {item.year}
                    </p>
                    <p
                      className={`${cohaerentia.variable} font-cohaerentia text-center lg:text-left !mb-0`}
                    >
                      {item.isbn}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </main>
  );
};

export default CataloguesIndexPage;

const data_catalogues = [
  {
    title: "Catalogue Title",
    image_url: "publications-placeholder.png",
    publisher: "Penerbit ABC",
    year: "2021",
    isbn: "ISBN 978-602-8519-93-9",
  },
  {
    title: "Catalogue Title",
    image_url: "profile-img.jpg",
    publisher: "Penerbit ABC",
    year: "2021",
    isbn: "ISBN 978-602-8519-93-9",
  },
  {
    title: "Catalogue Title",
    image_url: "publications-placeholder.png",
    publisher: "Penerbit ABC",
    year: "2021",
    isbn: "ISBN 978-602-8519-93-9",
  },
  {
    title: "Catalogue Title",
    image_url: "publications-placeholder.png",
    publisher: "Penerbit ABC",
    year: "2021",
    isbn: "ISBN 978-602-8519-93-9",
  },
  {
    title: "Catalogue Title",
    image_url: "publications-placeholder.png",
    publisher: "Penerbit ABC",
    year: "2021",
    isbn: "ISBN 978-602-8519-93-9",
  },
  {
    title: "Catalogue Title",
    image_url: "publications-placeholder.png",
    publisher: "Penerbit ABC",
    year: "2021",
    isbn: "ISBN 978-602-8519-93-9",
  },
  {
    title: "Catalogue Title",
    image_url: "group-exhibitions-2.jpg",
    publisher: "Penerbit ABC",
    year: "2021",
    isbn: "ISBN 978-602-8519-93-9",
  },
];
