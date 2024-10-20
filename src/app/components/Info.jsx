"use client";
import { BackgroundGradient } from "@/components/ui/BackgroundGradient";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";
import React from "react";

const Info = () => {
  return (
    <div className="py-24 sm:py-24">
      <div className="mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-teal-500 dark:text-teal-400">
            Our Mission
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
            What is{" "}
            <span className="text-gray-800 ">
              LOC
              <span className="text-teal-500">V</span>M
            </span>
          </p>
        </div>

        <div className="mx-auto flex flex-col lg:flex-row lg:items-start lg:space-x-10 mt-4 ">
          <div className="flex flex-col mb-8 lg:mb-0 ">
            <div>
              <div className="mt-6 text-md leading-8 text-gray-500 bg-white/50 max-w-3xl mx-auto">
                <strong>LOCVM </strong>was founded to meet the growing demand
                for flexibility in healthcare staffing. Whether you are a
                physician looking for locum opportunities or a permanent
                physician seeking temporary coverage to take time off, our
                platform connects you with the right professionals and
                facilities for your needs.
                <div className="mt-2 font-medium flex justify-center items-center text-gray-700">
                  We make it easy to balance work and life in today's demanding
                  healthcare environment.
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-4 gap-6">
              <div className="flex flex-col justify-center items-center ">
                <p className="my-8 text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                  Find locum positions or coverage for your practice
                </p>

                <ul className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <BackgroundGradient className="  p-4 bg-white rounded-[22px] w-full  h-full flex flex-row justify-center items-center py-6">
                    {/* <li className="flex justify-start items-center  p-6 bg-slate-50 rounded-lg shadow-md hover:shadow-lg hover:bg-white"> */}
                    <div>
                      <ShieldCheck className="h-10 w-10 mr-4 text-blue-500 " />
                    </div>
                    <div className="text-base leading-7 text-gray-500 dark:text-gray-300">
                      For <strong>locum professionals</strong>, LOCVM offers a
                      wide range of temporary positions—from short weekend
                      shifts to longer-term locum engagements.
                    </div>
                    {/* </li> */}
                  </BackgroundGradient>
                  <BackgroundGradient className="  p-4 bg-white rounded-[22px] w-full  h-full flex flex-row justify-center items-center py-6">
                    <div>
                      <ShieldCheck className="h-10 w-10 mr-4 text-blue-500 " />
                    </div>
                    <div className="text-base leading-7 text-gray-500 dark:text-gray-300">
                      Browse opportunities based on <strong>specialty</strong>,{" "}
                      <strong>location</strong>, and availability, and connect
                      directly with <strong>physicians</strong> and healthcare
                      facilities in need of your skills.
                    </div>
                  </BackgroundGradient>

                  <BackgroundGradient className="  p-4 bg-white rounded-[22px] w-full  h-full flex flex-row justify-center items-center py-6">
                    <div>
                      <ShieldCheck className="h-10 w-10 mr-4 text-blue-500 " />
                    </div>
                    <div className="text-base leading-7 text-gray-500 dark:text-gray-300">
                      For <strong>permanent physicians</strong>, our platform
                      helps you find locum professionals to cover your practice,
                      allowing you to take time off without disruption to
                      patient care.
                    </div>
                  </BackgroundGradient>
                  <BackgroundGradient className="  p-4 bg-white rounded-[22px] w-full  h-full flex flex-row justify-center items-center py-6">
                    <div>
                      <ShieldCheck className="h-10 w-10 mr-4 text-blue-500 " />
                    </div>

                    <div className="text-base leading-7 text-gray-500 dark:text-gray-300">
                      Simply post your locum needs, and qualified professionals
                      available for the coverage period you require will contact
                      you.
                    </div>
                  </BackgroundGradient>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <Link href="/join">
          <div className="flex flex-col justify-center items-center mt-8 gap-4">
            <h3 className="mb-3 text-xl font-bold text-slate-700 hover:text-teal-500">
              Ready to get started?
            </h3>
            <Button size="lg">
              Join <ArrowRight className="inline-block ml-1" />
            </Button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Info;
