import React from "react";
import "./SearchFunction.scss";

function SearchButton({ onChange }) {
  return (
    <section className="search-button">
      <input
        className="search-button__input"
        type="search"
        placeholder="Search..."
        onChange={onChange}
      />
    </section>
  );
}

export default SearchButton;
