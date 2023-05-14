import React from "react";
import { BsSearch } from "react-icons/bs";

function Search() {
  return (
    <div>
      {" "}
      <div className="relative flex items-center mr-32 ">
        <label htmlFor="UserEmail" className="sr-only ml-25">
          Search
        </label>

        <input
          type="Search"
          id="Search"
          placeholder="Search ..."
          className="w-[300px] rounded-xl border-Charleston-Green px-5 py-1 shadow-sm dark:border-gray-700 dark:bg-Black-Olive dark:text-white sm:text-sm"
        />

        <span className="pointer-events-none absolute inset-y-0 end-0 grid w-10 place-content-center text-gray-500 dark:text-gray-400">
          <BsSearch />
        </span>
      </div>
    </div>
  );
}

export default Search;
