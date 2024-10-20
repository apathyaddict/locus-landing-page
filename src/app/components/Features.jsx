import {
  Cloud,
  CreditCard,
  Fingerprint,
  Lock,
  MousePointer,
  RefreshCw,
  Search,
  SquareChartGantt,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import { ContainerScroll } from "./container-scroll-animation";

const features = [
  {
    name: "Verified profiles",
    description:
      "Ensure healthcare professionals have validated profiles before posting a locum or applying for a locum.",
    icon: Fingerprint,
  },
  {
    name: "In App communication",
    description:
      "Confidential and secure channels for discussing details and scheduling between locum professionals and permanent physicians.",
    icon: Lock,
  },
  {
    name: "Manage contracts & payments",
    description:
      "A trusted platform to handle contracts, payments, and coverage agreements efficiently.",
    icon: CreditCard,
  },
  {
    name: "Post and manage locum requests",
    description:
      "Easy-to-use tools for physicians and healthcare facilities to post and manage locum requests with minimal effort.",
    icon: RefreshCw,
  },
  {
    name: "Accessible Search",
    description:
      "Search for locums based on location, availability, and other criteria.",
    icon: Search,
  },
  {
    name: "Easy to use",
    description:
      "Simple and straightforward user interface for healthcare professionals and facilities.",
    icon: MousePointer,
  },
];

export default function Features() {
  return (
    <div className="dark:bg-neutral-900 pt-64 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ContainerScroll
          titleComponent={
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-teal-500 dark:text-teal-400">
                Our Features
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
                Finally. A Locum Management Platform
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-500 dark:text-gray-300">
                Our platform offers robust tools for permanent physicians and
                healthcare facilities seeking temporary coverage to seamlessly
                manage locum staffing needs.
              </p>
            </div>
          }>
          {/* Image with Scroll Effect */}
          <div className=" w-full z-10">
            <Image
              src="images/upcoming.png"
              alt="Platform screenshot"
              height={720}
              width={1400}
              className="mx-auto rounded-2xl object-cover h-full w-full sm:object-left-bottom"
              draggable={false}
            />
          </div>
        </ContainerScroll>

        <div className="mx-auto mt-10 max-w-2xl sm:mt-2 lg:mt-2 lg:max-w-4xl bg-white/50 ">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900 ">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-teal-400 ">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <div className="mt-2 text-base leading-7 text-gray-500 dark:text-gray-300">
                  {feature.description}
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
