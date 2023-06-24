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
    <div>
      <div className="hidden px-2 pr-4 mt-10 transition duration-150 ease-out border-b cursor-pointer md:flex py-7 hover:opacity-80 hover:shadow-lg first:border-t">
        <div className="relative flex-shrink-0 w-40 h-32 sm:h-44 sm:w-52 md:h-52 md:w-80">
          <Image src={img} fill className="object-cover rounded-xl" />
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

      {/*Mobile*/}
      <div className="flex flex-col items-center px-2 pr-4 mt-10 transition duration-150 ease-out border-b cursor-pointer md:hidden py-7 hover:opacity-80 hover:shadow-lg first:border-t">
        <div className="relative w-full h-96 ">
          <Image src={img} fill className="object-cover rounded-xl" />
          <HeartIcon className="absolute right-0 z-50 w-6 h-6 mt-5 mr-5 text-white transition duration-150 ease-out cursor-pointer hover:scale-110 hover:text-rose-500" />
        </div>

        <div className="flex flex-col mt-4 ">
          <div className="flex items-center justify-between">
            <p className="font-semibold">{location}</p>
            <p className="flex items-center gap-1 text-sm ">
              <StarIcon className="h-4 " />
              {star}
            </p>
          </div>
          <div className="w-10 pt-2 border-b" />
          <p className="w-2/3 pt-2 text-sm ">{description}</p>

          <div className="flex items-end justify-between pt-5">
            <div className="">
              <p className="pb-2 font-semibold text-md ">{price}</p>
              <p className="text-sm font-extralight">{total}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
