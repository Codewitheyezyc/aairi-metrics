import { services } from "@/constants";
import BtnShaped from "./BtnShaped";
import SectionContainer from "./SectionContainer";
import Reveal from "./Reveal";
import Link from "next/link";

const Services = () => {
  const dark = "#0a2540";

  return (
    <SectionContainer className=" bg-[#0a2540] text-slate-200">
      <Reveal direction="up">
        <div className="text-center flex flex-col items-center justify-center mt-12 ">
          <div className="flex items-center justify-center">
            <BtnShaped dark={dark}>Services</BtnShaped>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-5xl mb-4 font-semibold ">
            Our Areas of Expertise
          </h2>
          <p
            className="text-sm md:text-lg  
          md:w-[60%]"
          >
            We support organizations to design and strengthen practical,
            fit-for-purpose MEL systems. Our work includes the development of
            MEL frameworks and plans, theories of change, logic models,
            indicator matrices, data collection plans, and data quality
            assurance processes (DQAs).
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-4 mt-10  items-center px-6">
        {services.map((item, index) => {
          const Icon = item.icon;
          return (
            <Reveal direction="up" key={index} delay={index * 150}>
              <Link href="/services">
                <div
                  key={index}
                  className={`bg-slate-100 p-6  rounded-2xl justify-self-center text-slate-950 text-center w-[70%] ${item.position === "left" ? "md:justify-self-end" : "md:justify-self-start"} `}
                >
                  <div className="flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#38bdf8]" />
                  </div>
                  <p className="font-medium mb-2">{item.topic}</p>
                  <p className="">{item.description}</p>
                </div>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </SectionContainer>
  );
};

export default Services;
