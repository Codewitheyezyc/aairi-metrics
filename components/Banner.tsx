import { bannerConfig } from "@/constants";
import Image from "next/image";

type BannerProp = {
  variant: keyof typeof bannerConfig;
  children: React.ReactNode;
};

const Banner = ({ children, variant }: BannerProp) => {
  const bannerImage = bannerConfig[variant].img;
  return (
    <div className="relative">
      <Image
        src={bannerImage}
        fill
        alt={`${variant} banner`}
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[#0a2540]/90"></div>
      <div className="py-10 px-10 bg-[#0a2540] text-slate-200">
        <div className="max-w-7xl mx-auto pt-20 relative z-10 h-80">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Banner;
