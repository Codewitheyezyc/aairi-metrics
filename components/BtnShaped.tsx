import { Sparkle } from "lucide-react";
// import { PropsWithChildren } from "react";

type BtnShapedProps = {
  children: React.ReactNode;
  dark?: string;
};

const BtnShaped = ({ children, dark }: BtnShapedProps) => {
  return (
    <div className="w-37.5  mb-10">
      <div
        className={`flex items-center ${dark == "#0a2540" ? "bg-slate-200" : "bg-slate-900/5"}  space-x-4 rounded-full py-2 px-4.5 `}
      >
        <Sparkle className="bg-white p-1 rounded-full w-6 h-6  text-[#38bdf8]" />
        <span className="text-[#010406] text-xs md:text-sm font-semibold">
          {children}
        </span>
      </div>
    </div>
  );
};

export default BtnShaped;
