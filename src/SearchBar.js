import React from "react";
const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};

export default function SearchBar() {
  function renderSortByOptions() {
    return Object.keys(sortByOptions).map((sortByOption) => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return <li key={sortByOptionValue}>{sortByOption}</li>;
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
          <a>Dive in</a>
        </div>
      </div>
    </div>
  );
}
