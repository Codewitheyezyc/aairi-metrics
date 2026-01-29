import Image from "next/image";
import Button from "./Button";
import Reveal from "./Reveal";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="h-screen w-full bg-linear-to-b  from-[#ebf8fe]/10 to-[#d7f2fe]">
      <div
        className={`max-w-7xl mx-auto px-4 md:px-8 h-full w-full flex items-center justify-center mt-20 lg:mt-10  `}
      >
        <div className="flex flex-col items-center justify-center text-center">
          <Reveal direction="up">
            <small className="border border-[#38bdf8] rounded-full py-2 px-4 md:px-6 mb-6 text-xs md:text-sm inline-block font-semibold">
              Gateway to Insight
            </small>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wide mb-6 ">
              Quality Data for Insightful Decision-Making Across Africa
            </h1>

            <p className="text-sm md:text-lg">
              Aairi-Metrics Consulting delivers professional Monitoring,
              Evaluation, Research, and Learning (MERL) services that help
              organizations generate credible evidence, strengthen
              accountability, and improve program outcomes.
            </p>
            <div className="flex items-center space-x-4 mt-10 justify-center">
              <Link href="/contact">
                <Button
                  type="button"
                  title="Talk to an Expert"
                  variant="btn_dark_blue"
                />
              </Link>
              <Link href="/services">
                <Button
                  type="button"
                  title="Explore Our Services"
                  variant="btn_white"
                />
              </Link>
            </div>
          </Reveal>
          <div className="w-full  h-80 relative overflow-hidden mt-8 lg:mt-20 rounded-2xl shadow-md">
            <Image
              src="/hero-image-1.png"
              alt="Hero Image"
              sizes="100%"
              fill
              className="object-cover rounded-2xl "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
