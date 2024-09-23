import Image from "next/image";
import React from "react";
import { Timeline } from "./Timeline";

const data = [
  {
    title: "Phase 1",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Launch beta version of LOCVM
        </p>
        <div className="grid grid-cols-2 gap-4"></div>
      </div>
    ),
  },
  {
    title: "Phase 2",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Have access to LOCVMS all accross Canada
        </p>
        <div className="grid grid-cols-2 gap-4"></div>
      </div>
    ),
  },
  {
    title: "Phase 3",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Benefit from in app certification
        </p>
        <div className="grid grid-cols-2 gap-4"></div>
      </div>
    ),
  },
  {
    title: "Phase 4",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          LOCVM for nurses and other healthcare professionals
        </p>
        <div className="grid grid-cols-2 gap-4"></div>
      </div>
    ),
  },
];

const ComingNext = () => {
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
};

export default ComingNext;
