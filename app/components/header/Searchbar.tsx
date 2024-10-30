"use client";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";
import React, { useState } from "react";
import { DateRangePicker, RangeKeyDict } from "react-date-range";
import { UsersIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

function Searchbar() {
  const [input, setInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndtDate] = useState(new Date());
  const [numOfGuests, setNumOfGuests] = useState(1);
  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };

  

  const handlSelecteDate = (ranges: RangeKeyDict) => {
    setStartDate(ranges.selection.startDate as Date);
    setEndtDate(ranges.selection.endDate as Date);
  };
  return (
    <>
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          type="text"
          placeholder="Start your Search"
          className="text-sm text-gray-600 placeholder-gray-400 flex-grow pl-4 5 bg-transparent outline-none"
          onChange={(e) => setInput(e.target.value)}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3.5}
          stroke="currentColor"
          className="size-8 bg-red-400 hidden md:inline-block  text-white rounded-full p-2 cursor-pointer md:mx-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </div>
      {input && (
        <div className="flex flex-col absolute  left-[50%] translate-x-[-50%] translate-y-[15%] bg-white p-4">
          <DateRangePicker
            ranges={[selectionRange]}
            onChange={handlSelecteDate}
            rangeColors={["#FD5B61"]}
            minDate={new Date()}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow p-4 font-semibold">
              Number of Guest
            </h2>
            <UsersIcon className="h-5 pl-1" />
            <input
              type="number"
              className="w-12 pl-2 text-lg outline-none text-red-400"
              value={numOfGuests}
              onChange={(e) => setNumOfGuests(parseInt(e.target.value))}
              min={1}
            />
          </div>
          <div className="flex items-center">
            <button
              type="button"
              className="flex-grow text-gray-500"
              onClick={() => setInput("")}
            >
              Cancel
            </button>
            <Link
              href="/search"
              onClick={() => setInput("")}
              className="flex-grow text-red-400"
            >
              Search
            </Link>
          </div>
        </div>
      )}
    </>
  );
} 

export default Searchbar;

