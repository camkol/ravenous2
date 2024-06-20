import React, { useEffect, useState } from "react";
import "whatwg-fetch";
import "./App.css";
import BusinessList from "./BusinessList";
import SearchBar from "./SearchBar";
import { Yelp } from "./utils/Yelp";

// const business = {
//   imageSrc: "https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
//   name: "MarginOtto Pizzeria",
//   address: "1010 Paddington Way",
//   city: "Flavortown",
//   state: "NY",
//   zipCode: "10101",
//   category: "Italian",
//   rating: 4.5,
//   reviewCount: 90,
// };
// const businesses = [business, business, business, business, business, business];

export default function App() {
  const [businesses, setBusinesses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [query, setQuery] = useState([]);

  function handleQuery(querys) {
    setQuery(querys);
  }

  console.log(query);

  useEffect(
    function () {
      if (!query.term || !query.location || !query.sortBy) return;

      async function fetchBusiness() {
        try {
          setIsLoading(true);
          setError("");
          const businesses = await Yelp.search(
            query.term,
            query.location,
            query.sortBy
          );
          setBusinesses(businesses);
        } catch (err) {
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
        // console.log(businesses);
      }

      fetchBusiness();
    },
    [query]
  );

  return (
    <>
      <header>
        <h1>ravenous</h1>
      </header>
      <main>
        <SearchBar onQuery={handleQuery} />
        {isLoading && <Loader />}
        {!isLoading && !error && <BusinessList businesses={businesses} />}
        {error && <ErrorMessage message={error} />}
      </main>
    </>
  );
}

function Loader() {
  return <p className="loader">Loading...</p>;
}

function ErrorMessage({ message }) {
  return (
    <p className="error">
      <span>⛔</span>
      {message}
    </p>
  );
}
