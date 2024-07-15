import React from "react";
import "./FilterButton.scss";

function FilterButton({ onChange }) {
  return (
    <section className="filter-button">
      <select className="filter-button__input" onChange={onChange}>
        <option value="all">Show All</option>
        <option value="pastDue">Show Past Due</option>
      </select>
    </section>
  );
}

export default FilterButton;
