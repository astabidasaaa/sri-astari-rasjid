import React from "react";
import Image from "next/image";
import { cohaerentia, lucette } from "@/components/FontSrc";

const CataloguesComponent = ({ section_list }) => {
  return (
    <div className="catalogues_container">
      {section_list &&
        section_list.map((item, index) => {
          const section_item = item?.attributes;
          return (
            <div className="catalogues_item_container" key={`section-${index}`}>
              {section_item?.Image?.data?.attributes?.url && (
                <Image
                  src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${section_item.Image.data.attributes.url}`}
                  alt={section_item?.Title}
                  width={283}
                  height={400}
                  className="catalogues_item_image"
                />
              )}
              <div className="catalogues_item_description">
                {section_item?.Title && (
                  <h5
                    className={`${lucette.variable} font-lucette !mt-0 lg:!mb-8 text-center lg:text-left`}
                  >
                    {section_item.Title}
                  </h5>
                )}
                {section_item?.Publisher && (
                  <p
                    className={`${cohaerentia.variable} font-cohaerentia text-center lg:text-left !mb-0`}
                  >
                    {section_item.Publisher}
                  </p>
                )}
                {section_item?.Year && (
                  <p
                    className={`${cohaerentia.variable} font-cohaerentia text-center lg:text-left !mb-0`}
                  >
                    {section_item.Year}
                  </p>
                )}
                {section_item?.Serial_Number && (
                  <p
                    className={`${cohaerentia.variable} font-cohaerentia text-center lg:text-left !mb-0`}
                  >
                    {section_item.Serial_Number}
                  </p>
                )}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default CataloguesComponent;
