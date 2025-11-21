import React from "react";

const SearchBox: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  return (
    <form
      action="https://fpt.vn/vi/tim-kiem"
      id="searchBar"
      className="search-bar"
      style={{ display: isOpen ? "block" : "none" }}
    >
      <input
        type="text"
        name="q"
        className="text-search"
        autoComplete="off"
        placeholder="Tìm kiếm"
        maxLength={100}
      />
    </form>
  );
};
export default SearchBox;
