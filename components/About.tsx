import { about } from "@/constants";
import Button from "./Button";

import BtnShaped from "./BtnShaped";
import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import SectionContainer from "./SectionContainer";
import Reveal from "./Reveal";
import Link from "next/link";

const About = () => {
  return (
    <SectionContainer className="bg-[#ebf8fe]/20">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-10 md:gap-32 lg:gap-40">
        <Image
          src="/about-image.png"
          width={1000}
          height={1000}
          alt="About image"
          quality={80}
          className="object-cover rounded-4xl"
        />

        <div className=" mt-12">
          <Reveal direction="up" delay={150}>
            <BtnShaped>About us</BtnShaped>
            <h2 className="text-2xl md:text-3xl lg:text-5xl mb-4 font-semibold text-slate-950">
              Driving Evidence-Based Impact
            </h2>
            <p className="text-sm md:text-lg text-slate-900/80 w-[90%]">
              We support governments, development partners, NGOs, and private
              sector organizations with high-quality data and evaluations that
              strengthen programs and inform sustainable decisions.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center mt-10 gap-4">
            {about.map((name, index) => (
              <Reveal key={index} delay={index * 150} direction="up">
                <div
                  key={index}
                  className="flex items-center space-x-3 bg-slate-900/5 py-1.5 px-2.5 rounded-full"
                >
                  <BadgeCheck className="w-4 h-4 md:w-6 md:h-6 text-[#38bdf8]" />
                  <span className="text-xs md:text-sm text-slate-950 font-medium line-clamp-1">
                    {name}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal direction="up" delay={450}>
            <div className="mt-8">
              <Link href="/about">
                <Button
                  type="button"
                  variant="btn_dark_blue"
                  title="Learn More About Us"
                />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </SectionContainer>
  );
};

export default About;
