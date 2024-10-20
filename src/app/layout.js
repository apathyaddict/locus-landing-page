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
