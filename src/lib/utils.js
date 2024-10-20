import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function constructMetadata({
  title = "LOCVM",
  description = "Matching locums for your practice",
  image = "thumbnail.png",
  icons = "favicon.ico",
  noIndex = false,
}) {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    // twitter: {
    //   card: "summary_large_image",
    //   title,
    //   description,
    //   images: [image],
    //   creator: "@eveseni",
    // },
    icons,
    metadataBase: new URL("https://www.locvm.ca"),
    // themeColor: "#FFF",
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
