import Image from "next/image";

import { HeartIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";

const InfoCard = ({
  img,
  title,
  location,
  description,
  star,
  price,
  total,
}) => {
  return (
    <div className="flex px-2 pr-4 mt-10 transition duration-150 ease-out border-b cursor-pointer py-7 hover:opacity-80 hover:shadow-lg first:border-t">
      <div className="relative flex-shrink-0 w-40 h-32 sm:h-48 sm:w-52 md:h-52 md:w-80">
        <Image src={img} fill className="rounded-xl object-cove" />
      </div>

      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p>{location}</p>
          <HeartIcon className="h-5 cursor-pointer" />
        </div>
        <h4 className="text-lg">{title}</h4>
        <div className="w-10 pt-2 border-b" />
        <p className="flex-grow pt-2 text-sm">{description}</p>

        <div className="flex items-end justify-between pt-5">
          <p className="flex items-center mt-3 ">
            <StarIcon className="h-5 text-rose-400" />
            {star}
          </p>

          <div className="">
            <p className="pb-2 text-lg font-semibold lg:text-2xl">{price}</p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
