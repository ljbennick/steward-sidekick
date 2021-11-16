import React, { useState } from "react";

export default function RestaurantFilters({ setRestaurantSorting }) {
  const [selectState, setSelectState] = useState("");

  const handleChange = (e) => {
    setSelectState(e.target.value);
    setRestaurantSorting(e.target.value);
  };
  return (
    <>
      <label for="sorting">Sort By</label>
      <select
        value={selectState}
        name="sorting"
        id="sorting"
        onChange={handleChange}
      >
        <option selected value="rating-high-to-low">
          Rating - high to low
        </option>
        <option value="rating-low-to-high">Rating - low to high</option>
        <option value="price-high-to-low">Price - high to low</option>
        <option value="price-low-to-high">Price - low to high</option>
      </select>
    </>
  );
}
