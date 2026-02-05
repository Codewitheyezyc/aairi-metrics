import Image from "next/image";
import Button from "./Button";
import Reveal from "./Reveal";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="min-h-screen  relative">
      <Image
        src="/about-image.png"
        fill
        priority
        alt="Hero Background"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/80" />
      <div
        className={`max-w-7xl mx-auto px-4 md:px-8 h-full w-full flex items-center justify-center mt-20 lg:mt-10 z-10 min-h-screen `}
      >
        <div className="flex flex-col items-center justify-center text-center text-slate-100 ">
          <Reveal direction="up">
            <small className="border border-amber-400 rounded-full py-2 px-4 md:px-6 mb-6 text-xs md:text-sm inline-block font-semibold">
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
                  variant="btn_light_cyan"
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
