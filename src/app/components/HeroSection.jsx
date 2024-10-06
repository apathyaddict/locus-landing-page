"use client";
import { AuroraBackground } from "@/components/ui/AuroraBakcground";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowBigRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import { HeroHighlight, Highlight } from "./HeroHighlight";

const HeroSection = () => {
  return (
    <section>
      <div>
        <HeroHighlight>
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="text-4xl  sm:px-4 py-4  mt-4 sm:mt-12  md:text-4xl lg:text-5xl font-bold text-zinc-600 sm:max-w-4xl leading-loose lg:leading-snug text-center mx-auto ">
            With{" "}
            <span className=" font-bold text-gray-800">
              LOC
              <span className="font-extrabold text-teal-500">V</span>
              <span className="font-extrabold text-blue-600-500">M</span>
            </span>
            , your staffing struggles are over. Book your next locum{" "}
            <Highlight className="text-slate-800 ">
              easily, safely, and with confidence.
            </Highlight>
          </motion.h1>
        </HeroHighlight>
      </div>

      <div className="flex justify-center flex-col items-center gap-4 px-8">
        <p className="font-medium ">
          Sign up to receive updates and be notified when LOCVM is available
        </p>

        <Link href="/join">
          <Button>
            Join Now
            <ArrowRight className="ml-2" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
