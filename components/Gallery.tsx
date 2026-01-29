import { gallery } from "@/constants";
import SectionContainer from "./SectionContainer";
import Image from "next/image";
import Reveal from "./Reveal";

const Gallery = () => {
  return (
    <SectionContainer className="">
      <Reveal direction="up" delay={150}>
        <h3 className="text-center text-2xl md:text-4xl font-medium mb-12 text-slate-950">
          GALLERY
        </h3>
      </Reveal>
      <div className="relative grid grid-cols-2  md:grid-cols-4  gap-1">
        {gallery.map((img, index) => (
          <Reveal key={index} direction="up" delay={index * 150}>
            <div className="">
              <Image
                src={img.image}
                width={1000}
                height={1000}
                quality={80}
                alt={img.title}
                className="rounded-xl "
              />
            </div>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Gallery;
