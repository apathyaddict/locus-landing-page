import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const HowItWorks = () => {
  return (
    <>
      <div className="shadow  h-[2px] mb-10  "></div>
      <section className="bg-white/50 p-4  m-4">
        <div className="mx-auto max-w-2xl lg:text-center ">
          <h2 className="text-base font-semibold leading-7 text-teal-500 dark:text-teal-400">
            Start Today
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
            How it works
          </p>
          <p className="mt-6 text-md leading-8 text-gray-500 dark:text-gray-300">
            We created a platform to make the whole process pain-free and simple
            as possible. Forget the Facebook groups called, scrambling to call
            old friends, or even figuring out how to transfer the payment. It's
            as easy as clicking a button.
          </p>
        </div>
        <ol className="my-6 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0 ">
          <div className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300  pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4 ">
              <span className="text-md font-bold text-teal-400">Step 1</span>
              <span className="text-xl font-semibold">Sign Up</span>
              <span className="mt-2 text-zinc-700">
                To reseve or create a locum: sign up for an account.
              </span>
            </div>
          </div>
          <div className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-mds font-bold text-teal-400">Step 2</span>
              <span className="text-xl font-semibold">Create a profile</span>
              <span className="mt-2 text-zinc-700">
                Fill out your profile to get started.
              </span>
            </div>
          </div>
          <div className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-md font-bold text-teal-400">Step 3</span>
              <span className="text-xl font-semibold">
                Post, Search and Connect
              </span>
              <span className="mt-2 text-zinc-700">
                {" "}
                You&apos;re done! You have access to all the featured. You can
                now take that vacation or discover a new town.
              </span>
            </div>
          </div>
        </ol>
        <div className="flex justify-center">
          <Link href={`/join`}>
            <Button variant="default" size="default" className="px-6">
              <span className="text-sm">Join now</span>
            </Button>
          </Link>
        </div>
      </section>
      {/* <div className="bg-blue-100 h-[1px] mt-20 "></div> */}
    </>
  );
};

export default HowItWorks;
