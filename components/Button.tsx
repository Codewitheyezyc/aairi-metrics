import { MessageSquare } from "lucide-react";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: string; //"btn_dark_blue" | "btn_white" | "btn_light_cyan";
  contact?: string;
};

const Button = ({ type, title, variant, icon, contact }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`flex items-center space-x-2 py-2.5 px-3.5 md:py-3 md:px-6 text-xs md:text-sm rounded-full font-semibold ${variant}`}
    >
      {icon && <MessageSquare className="w-4 h-4 text-white " />}
      <label className={`${contact}`}>{title}</label>
    </button>
  );
};

export default Button;
