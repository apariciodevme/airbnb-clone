import Image from "next/image";
import { useEffect, useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";

import {
  MagnifyingGlassIcon,
  GlobeAltIcon,
  UserCircleIcon,
  UserIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";

const Header = () => {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 p-5 shadow-md md:px-10 bg-neutral-50">
      {/* left nav */}
      <div className="relative flex items-center h-8 my-auto cursor-pointer ">
        <Image
          src={"https://links.papareact.com/qd3"}
          alt="airbnb logo image"
          fill
          className="left-0 items-start object-contain "
        />
      </div>

      {/* Middle nav - Search bar */}

      <div className="flex items-center py-2 rounded-full md:border-2 md:shadow-sm ">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          className="flex-grow pl-5 text-gray-600 bg-transparent outline-none"
          placeholder="Start your search"
        />

        <MagnifyingGlassIcon className="hidden w-8 h-8 p-2 text-white rounded-full cursor-pointer bg-rose-500 md:mx-2 md:inline-flex" />
      </div>

      {/* right nav */}

      <div className="flex items-center justify-end space-x-4 text-gray-700">
        <p className="hidden md:inline-flex">Become a host</p>
        <GlobeAltIcon className="w-6 h-6 cursor-pointer " />

        <div className="flex items-center p-2 space-x-2 border-2 rounded-full cursor-pointer">
          <Bars3Icon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>

      {searchInput && (
        <div>
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
        </div>
      )}
    </header>
  );
};

export default Header;
