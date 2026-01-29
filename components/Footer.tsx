import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="h-40">
      <div className="max-w-7xl mx-auto pt-4 md:pt-6">
        <div className="flex items-center justify-between px-4 border-b border-slate-900/10 pb-8">
          <div className="">
            <Link href="/">
              <Image
                src="/aairi-icon.png"
                width={60}
                height={60}
                alt="Aairi Logo"
              />
            </Link>
          </div>
          <ul className="flex items-center space-x-2 lg:space-x-5 text-slate-900/70 text-xs md:text-sm">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/project">Project</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-between px-4 pb-8 mt-8 text-xs text-gray-400">
          <p className="">&copy;2026, All right reserved</p>
          <p className="">Aairi Metrics Consulting Company</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
