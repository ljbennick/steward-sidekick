import React, { useState } from "react";

export default function RestaurantFilters({ setRestaurantSorting }) {
  const [selectState, setSelectState] = useState("");

  const handleChange = (e) => {
    setSelectState(e.target.value);
    setRestaurantSorting(e.target.value);
  };
  return (
    <>
      <label htmlFor="sorting" style={{ fontSize: 20, color: "teal" }}>
        Sort By{" "}
      </label>
      <select
        style={{ borderColor: "black", borderRadius: 30, color: "blue" }}
        value={selectState}
        name="sorting"
        id="sorting"
        onChange={handleChange}
      >
        <option defaultValue="rating-high-to-low">Rating - high to low</option>
        <option value="rating-low-to-high">Rating - low to high</option>
        <option value="price-high-to-low">Price - high to low</option>
        <option value="price-low-to-high">Price - low to high</option>
      </select>
    </>
  );
}
