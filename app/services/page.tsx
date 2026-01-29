import Banner from "@/components/Banner";
import Reveal from "@/components/Reveal";
import SectionContainer from "@/components/SectionContainer";
import { servicesPage } from "@/constants";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Services",
};

const page = () => {
  return (
    <div className="bg-[#ebf8fe]">
      <Banner>
        <div className="grid md:grid-cols-2 items-center gap-20 text-center ">
          <div className="hidden md:block">
            <Image
              src="/hero-image-2.png"
              width={2000}
              height={2000}
              alt="About Image"
              className="rounded-2xl  "
            />
          </div>
          <div className="">
            <h1 className="text-4xl md:text-6xl  font-medium mb-4">
              Our Services
            </h1>
          </div>
        </div>
      </Banner>
      <SectionContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-8">
          {servicesPage.map((item) => {
            const Icon = item.icon;
            return (
              <Reveal direction="up" key={item.id} delay={item.id * 150}>
                <div key={item.id} className="py-6 px-6 rounded-2xl bg-white">
                  <div className="w-14 h-14 overflow-hidden lg:w-20 lg:h-20 bg-[#afe5fc] rounded-full mb-8">
                    <Icon className="w-full p-4  h-full text-slate-900 " />
                  </div>
                  <div className="">
                    <p className="font-medium text-lg lg:text-2xl mb-4">
                      {item.topic}
                    </p>
                    <p className="mb-8 text-sm lg:text-lg  text-[#030b13]">
                      {item.description}
                    </p>
                    <button className="flex items-center space-x-4">
                      <span className="font-medium text-sm lg:text-[16px]">
                        Learn More
                      </span>
                      <div className="bg-slate-900 w-5.5 h-5.5 lg:w-7 lg:h-7 rounded-full p-1 text-slate-200">
                        <ArrowRight className="w-full h-full " />
                      </div>
                    </button>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </SectionContainer>
    </div>
  );
};

export default page;
