import localFont from "next/font/local";

export const kavaimo = localFont({
  variable: "--kavaimo",
  display: "swap",
  src: [
    {
      path: "./fonts/KAWAIMORegular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

export const helveticaNow = localFont({
  variable: "--helvetica-now",
  display: "swap",
  src: [
    {
      path: "./fonts/HelveticaNowDisplay-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/HelveticaNowDisplay-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/HelveticaNowDisplay-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/HelveticaNowDisplay-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/HelveticaNowDisplay-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/HelveticaNowDisplay-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
});

export const outfit = localFont({
  variable: "--outfit",
  display: "swap",
  src: [
    {
      path: "./fonts/Outfit-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Outfit-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Outfit-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Outfit-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Outfit-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/Outfit-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/Outfit-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Outfit-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/Outfit-Thin.ttf",
      weight: "100",
      style: "normal",
    },
  ],
});
