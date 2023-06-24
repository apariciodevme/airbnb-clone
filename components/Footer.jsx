import { GlobeAltIcon } from "@heroicons/react/24/outline";

import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bottom-0 flex flex-col items-center justify-between px-20 space-y-4 text-gray-600 bg-gray-100 lg:flex-row py-14">
      <div className="flex flex-col items-center gap-4 text-sm font-medium text-gray-800 sm:flex-row">
        <p className="text-gray-600">© 2023 Airbnb, Inc.</p>
        <p className="cursor-pointer">Terms</p>
        <p className="cursor-pointer">Sitemap</p>
        <p className="cursor-pointer">Privacy</p>
        <p className="cursor-pointer">Destinations</p>
      </div>

      <div className="flex items-center gap-4 text-sm font-semibold text-gray-900 ">
        <p className="flex items-center gap-2 ">
          {" "}
          <GlobeAltIcon className="w-5 h-5" /> English (US)
        </p>
        <p>$ USD</p>
      </div>

      <div className="pt-8 lg:pt-0">
        <Image src={"/airbnb.png"} width={30} height={30} alt="logo" />
      </div>
    </footer>
  );
};

export default Footer;
