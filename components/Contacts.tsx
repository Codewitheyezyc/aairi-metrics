import Link from "next/link";
import Button from "./Button";
import SectionContainer from "./SectionContainer";

const Contacts = () => {
  return (
    <SectionContainer className=" h-80  bg-[#030b13] text-slate-200 flex items-center justify-center">
      <div className="flex flex-col items-center w-full justify-center">
        <h3 className="text-3xl md:text-5xl mb-8 font-extrabold text-[#d7f2fe]">
          Ready to work with us?
        </h3>
        <Link href="/contact">
          <Button
            variant="btn_white"
            type="button"
            title="Talk to someone"
            contact="font-bold"
          />
        </Link>
      </div>
    </SectionContainer>
  );
};

export default Contacts;
