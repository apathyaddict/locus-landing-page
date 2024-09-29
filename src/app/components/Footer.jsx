import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-zinc-50 rounded-lg shadow w-full mb-4">
      <div className="w-full mx-auto p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-xl font-bold text-gray-800 mb-2 sm:mb-0">
          LOC
          <span className="font-extrabold text-teal-500">V</span>M
        </h1>
        <span className="text-sm text-gray-500 sm:text-center  mb-2 sm:mb-0">
          © 2024{" "}
          <Link href="/" className="hover:underline">
            LOCVM
          </Link>
          . All Rights Reserved.
        </span>
        <div className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0">
          <div>
            <Link href="/faq" className="hover:underline me-4 md:me-6">
              FAQ
            </Link>
          </div>
          <div>
            <Link href="/privacy" className="hover:underline me-4 md:me-6">
              Privacy Policy
            </Link>
          </div>
          <div>
            <Link href="#" className="hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
