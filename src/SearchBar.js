import React, { useState } from "react";

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};

export default function SearchBar() {
  const [sortBy, setSortBy] = useState(null);
  const [term, setTerm] = useState("");
  const [location, setLocation] = useState("");

  function getSortByClass(sortByOption) {
    setSortBy(sortByOption !== sortBy ? sortByOption : null);
  }

  function renderSortByOptions() {
    return Object.keys(sortByOptions).map((sortByOption) => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return (
        <li
          key={sortByOptionValue}
          onClick={() => getSortByClass(sortByOption)}
          className={sortByOption === sortBy ? "selected" : ""}
        >
          <span>{sortByOption}</span>
        </li>
      );
    });
  }

  return (
    <div className="search">
      <div className="searchBar">
        <div className="searchBarSortOptions">
          <ul>{renderSortByOptions()}</ul>
        </div>
        <div className="searchBarFields">
          <input placeholder="Search Businesses" />
          <input placeholder="Where?" />
        </div>
        <div className="searchBarSubmit">
          <a href="https://example.com">Dive in</a>
        </div>
      </div>
    </div>
  );
}
