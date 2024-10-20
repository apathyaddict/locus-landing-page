import { CircleChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const RoadMap = () => {
  return (
    <section className="mb-24 px-10 sm:mt-18">
      <div className="shadow  h-[2px] mb-10  "></div>
      <div className="mx-auto max-w-2xl lg:text-center mb-14">
        <h2 className="text-base font-semibold leading-7 text-teal-500 dark:text-teal-400">
          Our Plan
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
          What we are working on
        </p>
      </div>

      <div className="flex flex-col items-center ">
        <Image
          src="images/map.jpg"
          alt="Map"
          height={720}
          width={1400}
          className="rounded-2xl object-cover w-full max-w-[1400px] sm:object-left-bottom object-center-top"
        />
      </div>

      <div className="flex flex-col w-full justify-between items-center mt-14 sm:pl-10">
        {/* <div className="flex justify-stretch items-center w-full border "> */}
        <div className="flex sm:flex-row sm:justify-between flex-col w-full sm:items-center items-start space-y-4 sm:space-y-0 ">
          {/* Phase 1 */}
          <div className="flex flex-col items-start relative z-10">
            <span className="font-medium text-teal-500">Phase 1:</span>
            <p className="sm:text-2xl text-lg font-semibold">
              Ontario-wide access
            </p>
          </div>

          {/* Chevron */}
          <CircleChevronRight className="text-zinc-500 h-6 w-6 mr-4 hidden sm:block" />

          {/* Phase 2 */}
          {/* <div className="flex flex-col items-start relative z-10">
            <span className="font-medium text-teal-500">Phase 2:</span>
            <p className="sm:text-2xl text-lg font-semibold">
              Online Credentials
            </p>
          </div> */}

          {/* Chevron */}
          <CircleChevronRight className="text-zinc-500 h-6 w-6 hidden sm:block mr-4 " />

          {/* Phase 3 */}
          <div className="flex flex-col items-start relative z-10">
            <span className="font-medium text-teal-500">Phase 2:</span>
            <p className="sm:text-2xl text-lg font-semibold">
              Canada-wide locums
            </p>
          </div>

          {/* Chevron */}
          <CircleChevronRight className="text-zinc-500 h-6 w-6 hidden sm:block mr-4 " />

          {/* Phase 4 */}
          <div className="flex flex-col items-start relative z-10">
            <span className="font-medium text-teal-500">Phase 3:</span>
            <p className="sm:text-2xl text-lg font-semibold">
              Other Medical Professions
            </p>
          </div>
        </div>
        {/* </div> */}
      </div>
    </section>
  );
};

export default RoadMap;
