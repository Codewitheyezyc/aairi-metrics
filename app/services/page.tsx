import Banner from "@/components/Banner";
import Reveal from "@/components/Reveal";
import SectionContainer from "@/components/SectionContainer";
import { servicesPage } from "@/constants";

export const metadata = {
  title: "Services",
};

const page = () => {
  return (
    <div className="bg-[#ebf8fe]">
      <Banner variant="services">
        <h1 className="text-center text-5xl md:text-7xl  font-medium mb-4">
          Our Services
        </h1>
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
