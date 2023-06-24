import Image from "next/image";
import { useEffect, useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";


import {
  MagnifyingGlassIcon,
  GlobeAltIcon,
  UserCircleIcon,
  UsersIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";

const Header = ({placeholder}) => {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numberGuests, setNumberGuests] = useState(1);


  const router = useRouter();

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };


  const resetInput = () => {
    setSearchInput("");
  };

  const search = () => {
    router.push({
      pathname: '/search',
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        numberGuests,
      }
    })
  }

  return (
    <header className="sticky top-0 z-50 grid justify-between grid-cols-2 p-4 shadow-md sm:grid-cols-3 bg-neutral-50">
      {/* left nav */}
      <div className="relative items-center hidden h-8 my-auto cursor-pointer sm:inline-flex" onClick={() => router.push('/')}>
        <Image
          src={"https://links.papareact.com/qd3"}
          alt="airbnb logo image"
          fill
          className="object-contain "
        />
      </div>

      {/* Middle nav - Search bar */}

      <div className="flex items-center py-2 rounded-full md:border-2 md:shadow-sm ">
      <MagnifyingGlassIcon className="w-5 h-5 text-gray-900 cursor-pointer md:hidden " />

        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          className="flex-grow pl-5 text-gray-600 bg-transparent outline-none"
          placeholder="Start your search"
        />

        <MagnifyingGlassIcon className="hidden w-8 h-8 p-2 text-white rounded-full cursor-pointer bg-rose-500 md:mx-2 lg:inline-flex" />
      </div>

      {/* right nav */}

      <div className="flex items-center justify-end space-x-4 text-gray-900">
        <p className="hidden text-sm font-medium lg:inline-flex">Airbnb your home</p>
        <GlobeAltIcon className="w-6 h-6 cursor-pointer " />

        <div className="flex items-center p-2 space-x-2 border-2 rounded-full cursor-pointer">
          <Bars3Icon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>

      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto ">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
            
          />

          <div className="flex items-center px-6 mb-4 border-b">
            <h2 className="flex-grow py-6 text-2xl font-semibold">
              Number of guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              onChange={(e) => setNumberGuests(e.target.value)}
              value={numberGuests}
              type="number"
              min={1}
              className="w-12 pl-2 text-lg outline-none text-rose-500"
            />
          </div>
          <div className="flex">
            <button onClick={resetInput} className="flex-grow text-gray-500">
              Cancel
            </button>
            <button onClick={search} className="flex-grow text-rose-500">Search</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
