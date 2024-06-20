import React, { useState } from "react";

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};

export default function SearchBar({ onQuery }) {
  const [sortBy, setSortBy] = useState(null);
  const [term, setTerm] = useState("");
  const [location, setLocation] = useState("");

  function handleSearch(e) {
    e.preventDefault();

    if (!term || !location || !sortBy) return;
    // const newSearch = `Searching Yelp with ${term}, ${location}, ${sortByOptions[sortBy]}`;

    const newSearch = { term, location, sortBy: sortByOptions[sortBy] };

    onQuery(newSearch);

    setTerm("");
    setLocation("");
    setSortBy(null);
  }

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
      <form className="searchBar" onSubmit={handleSearch}>
        <div className="searchBarSortOptions">
          <ul>{renderSortByOptions()}</ul>
        </div>
        <div className="searchBarFields">
          <input
            placeholder="Search Businesses"
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
          <input
            placeholder="Where?"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <button className="searchBarSubmit">Dive in</button>
      </form>
    </div>
  );
}
