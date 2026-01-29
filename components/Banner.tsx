import { PropsWithChildren } from "react";

const Banner = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <div className="py-10 px-10 bg-[#0a2540] text-slate-200">
        <div className="max-w-7xl mx-auto pt-20">{children}</div>
      </div>
    </div>
  );
};

export default Banner;
