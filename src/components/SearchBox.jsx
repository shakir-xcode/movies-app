import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

function SearchBox({ searchValue, setSearchValue }) {
  return (
    <div
      className=" w-fit flex items-center rounded-2xl px-2 py-1 
      overflow-hidden border border-slate-600 
      focus-within:border-slate-200 "
    >
      <input
        type="text"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
        placeholder="search..."
        className="w-full text-primary-color bg-transparent focus:outline-0 px-1 "
      />
      <BsSearch size={16} className="text-slate-300" />
    </div>
  );
}

export default SearchBox;
