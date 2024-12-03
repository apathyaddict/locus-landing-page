"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavBar = () => {
  const pathname = usePathname();
  return (
    <div className="mx-auto  sm:flex max-w-7xl flex-col space-y-14">
      <header className="xl:px-12 text-gray-700 sticky top-3 z-20 mx-3 flex items-center justify-between rounded-xl bg-white px-[5%] py-5 shadow-lg">
        <Link href="/" className="flex items-center  justify-center">
          {/* <h1 className="text-xl font-bold text-gray-800">
            LOC
            <span className="font-extrabold text-teal-500">V</span>
            <span className="font-extrabold text-blue-600-500">M</span>
          </h1> */}
          <Image
            src="/images/logo.png"
            alt="logo"
            width={130}
            height={130}
            className="hidden sm:block" // Hidden on mobile, shown on larger screens
          />
          {/* Show the small logo for mobile */}
          <Image
            src="/images/logoSM.png"
            alt="small logo"
            width={30}
            height={30}
            className="block sm:hidden" // Visible on mobile, hidden on larger screens
          />
        </Link>

        <ul className="flex cursor-auto items-center justify-between gap-6 font-medium">
          <Link
            href="mailto:support@locvm.ca"
            className={buttonVariants({
              variant: "link",
              size: "default",
            })}>
            <li
              className={`cursor-pointer ${
                pathname === "/about" ? "font-bold" : "hover:font-bold"
              }`}>
              Contact
            </li>
          </Link>

          <Link
            href={`/faq`}
            className={buttonVariants({
              variant: "link",
              size: "default",
            })}>
            <li
              className={`cursor-pointer ${
                pathname === "/faq" ? "font-bold" : "hover:font-bold"
              }`}>
              FAQ
            </li>
          </Link>

          <Link href={`/join`}>
            <Button variant="default" size="default" className="px-6">
              <span className="text-sm">join</span>
            </Button>
          </Link>
        </ul>
      </header>
    </div>
  );
};

export default NavBar;
