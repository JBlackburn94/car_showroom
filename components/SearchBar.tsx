"use client";
import { SearchManufacturer } from "@/components";
import { useState } from "react";

const SearchBar = () => {
  const handleSearch = () => {};
  const [manufacturer, setManufacturer] = useState("");
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer manufacturer={manufacturer} />
      </div>
    </form>
  );
};

export default SearchBar;
