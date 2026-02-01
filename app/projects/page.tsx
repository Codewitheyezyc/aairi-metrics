import Banner from "@/components/Banner";
import Gallery from "@/components/Gallery";
import Reveal from "@/components/Reveal";
import SectionContainer from "@/components/SectionContainer";
import { projects } from "@/constants";
import Image from "next/image";

export const metadata = {
  title: "Projects",
};
const page = () => {
  return (
    <>
      <Banner variant="projects">
        <h1 className="text-center text-5xl md:text-7xl  font-medium mb-4">
          Explore Projects
        </h1>
      </Banner>
      <SectionContainer className="px-12 py-20  text-slate-800">
        <div className=" flex flex-col items-center justify-center mt-12">
          <h2 className="text-2xl md:text-3xl lg:text-5xl mb-4 font-semibold text-center ">
            Our Works
          </h2>
          <div className="mt-10 mb-20">
            {projects.map((card, index) => (
              <Reveal key={index} direction="up" delay={index * 150}>
                <div
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-24 ${index == 1 ? "mt-20 bg-[#02070d] text-slate-200 p-6 lg:p-10 rounded-4xl" : "bg-[#38bdf8]  p-6 lg:p-10 rounded-4xl"}`}
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
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="">
            <Gallery />
          </div>
        </div>
      </SectionContainer>
    </>
  );
};

export default page;
