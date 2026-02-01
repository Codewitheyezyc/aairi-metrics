import Banner from "@/components/Banner";
import Reveal from "@/components/Reveal";
import SectionContainer from "@/components/SectionContainer";
import { commitment } from "@/constants";

import Image from "next/image";

export const metadata = {
  title: "About",
};

const page = () => {
  return (
    <>
      <Banner variant="about">
        <h1 className="flex items-center justify-center  h-full text-5xl md:text-7xl  font-medium mb-4">
          About Us
        </h1>
      </Banner>
      <SectionContainer className="">
        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2  items-center gap-20">
          <Reveal direction="up" delay={150}>
            <div className="text-sm lg:text-lg">
              <h2 className="text-4xl md:text-5xl font-medium mb-6">
                Who we are
              </h2>
              <p className="">
                Aairi-Metrics is a professional MERL consulting firm providing
                monitoring, evaluation, research, and learning services to
                development partners, governments, non-governmental
                organizations, and private sector clients across africa, with
                experience in the Health, Agriculture, Climate change,
                Entrepreneurship, Economic empowerment, and MSME development,
                and Gender integration interventions.
              </p>
            </div>
          </Reveal>
          <Reveal direction="up" delay={150}>
            <div className="">
              <Image
                src="/about3.svg"
                width={3000}
                height={3000}
                alt="About Image"
                className="rounded-2xl "
              />
            </div>
          </Reveal>
          <div className="md:col-span-2 self-start">
            <Reveal direction="up" delay={150}>
              <p className="mb-6 ">
                Our work focuses on helping organizations generate credible
                evidence and use it meaningfully to strengthen programs, improve
                accountability, and support informed decision-making. We deliver
                end-to-end MERL support across the full program cycle. This
                includes the design of results frameworks and monitoring
                systems, field data collection, independent evaluations:
                Baseline assessment, midline assessment, annual sirvey, endline
                assessments, learning activities, and technical support for
                adaptive program management.
              </p>
            </Reveal>
            <Reveal direction="up" delay={150}>
              <p className="">
                Our research and evaluation work draws on both quantitative and
                qualitative methods, including surveys, key informant
                interviews, focus group discussions, case studies, and
                mixed-methods assessments. We collect primary data through
                face-to-face and digital approaches, applying appropriate tools
                and ethical standards to ensure accuracy, reliability, and
                contextual relevance. Beyond data collection, Aairi-Metrics
                supports organizations to make sense of their data. We help
                clients organize, analyze, and interpret information from
                multiple sources, and translate findings into clear insights
                that can inform strategy, implementation decisions, and
                reporting requirements.
              </p>
            </Reveal>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2  items-center gap-20 mt-10">
          <div className="">
            <Reveal direction="up" delay={150}>
              <Image
                src="/about2.svg"
                width={3000}
                height={3000}
                alt="About Image"
                className="rounded-2xl"
              />
            </Reveal>
          </div>
          <Reveal direction="up" delay={150}>
            <p className="">
              Our outputs are designed to be practical and usable from
              monitoring reports and evaluation findings to learning briefs and
              management summaries that speak directly to program teams and
              decision-makers. We work closely with our clients throughout every
              assignment, taking time to understand their objectives, operating
              environment, and implementation realities. This collaborative
              approach allows us to deliver work that is not only
              methodologically sound, but also relevant, timely, and useful in
              practice. At Aairi-Metrics, we place a strong emphasis on quality,
              integrity, and learning. We bring senior-level experience, careful
              attention to detail, and a clear focus on use to every engagement
              ensuring that evidence contributes to action, improvement, and
              impact.
            </p>
          </Reveal>
        </div>

        <div className="text-center mt-10 md:mt-36 bg-[#0a2540] text-slate-200 px-2 py-4 md:p-6 rounded-2xl">
          <h3 className="text-sm md:text-2xl mb-4 font-medium">
            Our Commitment
          </h3>
          <div className="flex items-center justify-center space-x-10 mt-6 ">
            {commitment.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal direction="up" key={index} delay={index * 150}>
                  <div className="flex items-center justify-center flex-col">
                    <Icon className="mb-2 w-5 md:w-6 text-[#38bdf8]" />
                    <span className="text-xs md:text-sm">{item.name}</span>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </SectionContainer>
    </>
  );
};

export default page;
