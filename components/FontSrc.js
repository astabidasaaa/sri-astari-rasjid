import localFont from "next/font/local";
import { Krub } from "@next/font/google";

export const krub = localFont({
  src: [
    { path: "./fonts/Krub-ExtraLight.ttf", weight: "200", style: "normal" },
    {
      path: "./fonts/Krub-ExtraLightItalic.ttf",
      weight: "200",
      style: "italic",
    },
    { path: "./fonts/Krub-Light.ttf", weight: "300", style: "normal" },
    { path: "./fonts/Krub-LightItalic.ttf", weight: "300", style: "italic" },
    { path: "./fonts/Krub-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/Krub-Italic.ttf", weight: "400", style: "italic" },
    { path: "./fonts/Krub-Medium.ttf", weight: "500", style: "normal" },
    { path: "./fonts/Krub-MediumItalic.ttf", weight: "500", style: "italic" },
    { path: "./fonts/Krub-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./fonts/Krub-SemiBoldItalic.ttf", weight: "600", style: "italic" },
    { path: "./fonts/Krub-Bold.ttf", weight: "700", style: "normal" },
    { path: "./fonts/Krub-BoldItalic.ttf", weight: "700", style: "italic" },
  ],
  variable: "--font-krub",
  display: "swap",
});

export const cohaerentia = localFont({
  src: [
    { path: "./fonts/Cohaerentia-Regular.ttf", style: "normal" },
    { path: "./fonts/Cohaerentia-Italic.ttf", style: "italic" },
  ],
  variable: "--font-cohaerentia",
  display: "swap",
});

export const lucette = localFont({
  src: [
    // { path: "./fonts/Lucette-Regular.woff2", style: "normal" },
    { path: "./fonts/Lucette-Regularitalic.woff2", style: "normal" },
  ],
  variable: "--font-lucette",
  display: "swap",
});
