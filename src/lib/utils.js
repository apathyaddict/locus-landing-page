import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function constructMetadata({
  title = "LOCVM",
  description = "Matching locums for your practice",
  image = "/public/images/thumbnail.png",
  icon = "/favicon/favicon.ico",
  noIndex = false,
} = {}) {
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

    icon,
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
