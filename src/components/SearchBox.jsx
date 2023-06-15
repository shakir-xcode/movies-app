import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

function SearchBox() {
  const [searchString, setSearchString] = useState();
  const handleChange = (e) => {
    setSearchString(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div
      className=" flex items-center rounded-2xl px-2 py-1 
      overflow-hidden border border-slate-500 
      focus-within:border-slate-200 "
    >
      <input
        type="text"
        value={searchString}
        onChange={handleChange}
        placeholder="search..."
        className="w-[8ch] text-primary-color bg-transparent focus:outline-0 px-1 "
      />
      <BsSearch size={16} className="text-accent" />
    </div>
  );
}

export default SearchBox;
