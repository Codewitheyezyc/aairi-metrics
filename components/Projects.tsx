import { projects } from "@/constants";
import BtnShaped from "./BtnShaped";
import Image from "next/image";
import Button from "./Button";
import SectionContainer from "./SectionContainer";
import Reveal from "./Reveal";
import Link from "next/link";

const Projects = () => {
  return (
    <SectionContainer className="px-12 py-20  text-slate-800">
      <div className=" flex flex-col items-center justify-center mt-12">
        <div className="flex items-center justify-center">
          <BtnShaped>Projects</BtnShaped>
        </div>
        <h2 className="text-2xl md:text-3xl lg:text-5xl mb-4 font-semibold text-center ">
          Our Works
        </h2>
        <div className=" my-20">
          {projects.map((card, index) => (
            <Reveal direction="up" delay={index * 150} key={index}>
              <div
                key={index}
                className={`grid grid-cols-1 md:grid-cols-2 items-center gap-24 ${index == 1 ? "mt-20 bg-[#02070d] text-slate-200 p-10 rounded-4xl" : "bg-[#38bdf8]  p-10 rounded-4xl"}`}
              >
                <div className="">
                  <Image
                    src={card.img}
                    width={1000}
                    height={1000}
                    alt="Aairi Project Image"
                    className="rounded-2xl"
                  />
                </div>
                <div className="">
                  <div className="">
                    <p className="font-medium text-sm md:text-lg mb-6">
                      {card.topic}
                    </p>
                    <p className="italic mb-8">{card.subTopic}</p>
                    <p className="mb-6">{card.message}</p>
                  </div>
                  <Link href="/projects">
                    <Button
                      title="See Project"
                      variant={` ${index === 0 ? "btn_dark_blue" : "btn_white"}`}
                      type="button"
                    />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default Projects;
