import { cohaerentia, krub, lucette } from "@/components/FontSrc";
import React from "react";

const typography = () => {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between px-4 md:px-24 lg:px-40 pt-56`}
    >
      <div>
        <h1 className={`${lucette.variable} font-lucette display-1`}>
          Font Lucette Display 1
        </h1>
        <h1 className={`${lucette.variable} font-lucette display-2`}>
          Font Lucette Display 2
        </h1>
        <h1 className={`${lucette.variable} font-lucette`}>
          Font Lucette Heading 1
        </h1>
        <h2 className={`${lucette.variable} font-lucette`}>
          Font Lucette Heading 2
        </h2>
        <h3 className={`${lucette.variable} font-lucette`}>
          Font Lucette Heading 3
        </h3>
        <h4 className={`${lucette.variable} font-lucette`}>
          Font Lucette Heading 4
        </h4>
        <h5 className={`${lucette.variable} font-lucette`}>
          Font Lucette Heading 5
        </h5>
        <h6 className={`${lucette.variable} font-lucette`}>
          Font Lucette Heading 6
        </h6>
        <p className={`${lucette.variable} font-lucette`}>
          Font Lucette Body 1
        </p>
        <p className={`sub-p ${lucette.variable} font-lucette`}>
          Font Lucette Body 2
        </p>

        <h1 className={`${cohaerentia.variable} font-cohaerentia display-1`}>
          Font cohaerentia Display 1
        </h1>
        <h1 className={`${cohaerentia.variable} font-cohaerentia display-2`}>
          Font cohaerentia Display 2
        </h1>
        <h1 className={`${cohaerentia.variable} font-cohaerentia`}>
          Font cohaerentia Heading 1
        </h1>
        <h2 className={`${cohaerentia.variable} font-cohaerentia`}>
          Font cohaerentia Heading 2
        </h2>
        <h3 className={`${cohaerentia.variable} font-cohaerentia`}>
          Font cohaerentia Heading 3
        </h3>
        <h4 className={`${cohaerentia.variable} font-cohaerentia`}>
          Font cohaerentia Heading 4
        </h4>
        <h5 className={`${cohaerentia.variable} font-cohaerentia`}>
          Font cohaerentia Heading 5
        </h5>
        <h6 className={`${cohaerentia.variable} font-cohaerentia`}>
          Font cohaerentia Heading 6
        </h6>
        <p className={`${cohaerentia.variable} font-cohaerentia`}>
          Font cohaerentia Body 1
        </p>
        <p className={`sub-p ${cohaerentia.variable} font-cohaerentia`}>
          Font cohaerentia Body 2
        </p>

        <h1 className={`${krub.variable} font-krub display-1`}>
          Font krub Display 1
        </h1>
        <h1 className={`${krub.variable} font-krub display-2`}>
          Font krub Display 2
        </h1>
        <h1 className={`${krub.variable} font-krub`}>Font krub Heading 1</h1>
        <h2 className={`${krub.variable} font-krub`}>Font krub Heading 2</h2>
        <h3 className={`${krub.variable} font-krub`}>Font krub Heading 3</h3>
        <h4 className={`${krub.variable} font-krub`}>Font krub Heading 4</h4>
        <h5 className={`${krub.variable} font-krub`}>Font krub Heading 5</h5>
        <h6 className={`${krub.variable} font-krub`}>Font krub Heading 6</h6>
        <p className={`${krub.variable} font-krub`}>Font krub Body 1</p>
        <p className={`sub-p ${krub.variable} font-krub`}>Font krub Body 2</p>
      </div>
    </main>
  );
};

export default typography;
