import { Toaster } from "@/components/ui/toaster";
import { cn, constructMetadata } from "@/lib/utils";
import { Quicksand } from "next/font/google";

import NavBar from "./components/navbar";
import "./globals.css";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata = constructMetadata();

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {metadata.title && <title>{metadata.title}</title>}
        {metadata.description && (
          <meta name="description" content={metadata.description} />
        )}
        {metadata.icon && <link rel="icon" href={metadata.icon} />}
      </head>
      <body>
        <div className={cn(" antialiased", quicksand.className)}>
          <NavBar />
          <main>{children}</main>

          <Toaster />
        </div>
      </body>
    </html>
  );
}
