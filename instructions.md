## Detailed Instructions for Creating the "Ravenous" Project

### Part 1: Initial Setup and Static Component Creation

#### Step 1: Set Up Your Local Environment

1. **Create a React app:**
   - Open your terminal and navigate to the directory where you want to create your project.
   - Run the following command to create a new React app named `ravenous`:
     ```bash
     npx create-react-app ravenous
     ```
   - Navigate into your project directory:
     ```bash
     cd ravenous
     ```
   - Start your development server:
     ```bash
     npm start
     ```

#### Step 2: Set Up Version Control

1. **Initialize Git repository:**
   - If you didn't use `create-react-app`, initialize a Git repository:
     ```bash
     git init
     ```
   - Add a remote repository (replace `your-repo-url` with your actual repository URL):
     ```bash
     git remote add origin your-repo-url
     ```
   - Add and commit the initial files:
     ```bash
     git add .
     git commit -m "Initial commit"
     git push -u origin master
     ```

#### Step 3: Build the Business Component

1. **Create `Business.js`:**

   - Create a new file `Business.js` in the `src` directory:

     ```jsx
     import React from "react";
     import "./Business.css";

     export default function Business({ business }) {
       return (
         <div className="business">
           <div className="imageContainer">
             <img src={business.imageSrc} alt={business.name} />
           </div>
           <h2>{business.name}</h2>
           <div className="businessInformation">
             <div className="address">
               <p>{business.address}</p>
               <p>{business.city}</p>
               <p>
                 {business.state} {business.zipCode}
               </p>
             </div>
             <div className="reviews">
               <h3>{business.category}</h3>
               <p>{business.rating} stars</p>
               <p>{business.reviewCount} reviews</p>
             </div>
           </div>
         </div>
       );
     }
     ```

#### Step 4: Add a Sample Business

1. **Create a sample business object:**
   - In `App.js`, add the following code:
     ```jsx
     const business = {
       imageSrc:
         "https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
       name: "MarginOtto Pizzeria",
       address: "1010 Paddington Way",
       city: "Flavortown",
       state: "NY",
       zipCode: "10101",
       category: "Italian",
       rating: 4.5,
       reviewCount: 90,
     };
     ```

#### Step 5: Build the BusinessList Component

1. **Create `BusinessList.js`:**

   - Create a new file `BusinessList.js` in the `src` directory:

     ```jsx
     import React from "react";
     import Business from "./Business";
     import "./BusinessList.css";

     export default function BusinessList({ businesses }) {
       return (
         <div className="businessList">
           {businesses.map((business) => (
             <Business business={business} key={business.id} />
           ))}
         </div>
       );
     }
     ```

#### Step 6: Build the SearchBar Component

1. **Create `SearchBar.js`:**

   - Create a new file `SearchBar.js` in the `src` directory:

     ```jsx
     import React, { useState } from "react";
     import "./SearchBar.css";

     const sortByOptions = {
       "Best Match": "best_match",
       "Highest Rated": "rating",
       "Most Reviewed": "review_count",
     };

     export default function SearchBar({ onQuery }) {
       const [term, setTerm] = useState("");
       const [location, setLocation] = useState("");
       const [sortBy, setSortBy] = useState("best_match");

       function handleSearch(e) {
         e.preventDefault();
         onQuery({ term, location, sortBy });
       }

       function renderSortByOptions() {
         return Object.keys(sortByOptions).map((sortByOption) => {
           const sortByOptionValue = sortByOptions[sortByOption];
           return (
             <li
               key={sortByOptionValue}
               onClick={() => setSortBy(sortByOptionValue)}
               className={sortByOption === sortBy ? "selected" : ""}
             >
               {sortByOption}
             </li>
           );
         });
       }

       return (
         <div className="searchBar">
           <div className="searchBarSortOptions">
             <ul>{renderSortByOptions()}</ul>
           </div>
           <div className="searchBarFields">
             <input
               placeholder="Search Businesses"
               value={term}
               onChange={(e) => setTerm(e.target.value)}
             />
             <input
               placeholder="Where?"
               value={location}
               onChange={(e) => setLocation(e.target.value)}
             />
           </div>
           <div className="searchBarSubmit">
             <button onClick={handleSearch}>Let's Go</button>
           </div>
         </div>
       );
     }
     ```

#### Step 7: Style Your Components

1. **Create CSS files:**
   - Create `Business.css`:
     ```css
     .business {
       /* Add styles for the Business component */
     }
     ```
   - Create `BusinessList.css`:
     ```css
     .businessList {
       /* Add styles for the BusinessList component */
     }
     ```
   - Create `SearchBar.css`:
     ```css
     .searchBar {
       /* Add styles for the SearchBar component */
     }
     ```

#### Step 8: Review Your Project

1. **Ensure the structure and flow:**
   - Verify that your components are structured properly and data flows from the parent to child components.

### Part 2: Refactoring and Preparation for API Integration

#### Step 1: Open Up Your Project

1. **Start the development server:**
   ```bash
   npm start
   ```

#### Step 2: Refactor the App Component

1. **Modify `App.js`:**

   ```jsx
   import React, { useState } from "react";
   import BusinessList from "./BusinessList";
   import SearchBar from "./SearchBar";
   import "./App.css";

   const business = {
     id: 1,
     imageSrc:
       "https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
     name: "MarginOtto Pizzeria",
     address: "1010 Paddington Way",
     city: "Flavortown",
     state: "NY",
     zipCode: "10101",
     category: "Italian",
     rating: 4.5,
     reviewCount: 90,
   };

   const businesses = [business, business, business];

   export default function App() {
     const [businesses, setBusinesses] = useState([]);

     function handleQuery(query) {
       // Placeholder for handling query
     }

     return (
       <div className="App">
         <h1>ravenous</h1>
         <SearchBar onQuery={handleQuery} />
         <BusinessList businesses={businesses} />
       </div>
     );
   }
   ```

#### Step 3: Refactor the BusinessList Component

1. **Modify `BusinessList.js` to accept props:**

   ```jsx
   import React from "react";
   import Business from "./Business";
   import "./BusinessList.css";

   export default function BusinessList({ businesses }) {
     return (
       <div className="businessList">
         {businesses.map((business) => (
           <Business business={business} key={business.id} />
         ))}
       </div>
     );
   }
   ```

#### Step 4: Refactor the Business Component

1. **Modify `Business.js` to accept props:**

   ```jsx
   import React from "react";
   import "./Business.css";

   export default function Business({ business }) {
     return (
       <div className="business">
         <div className="imageContainer">
           <img src={business.imageSrc} alt={business.name} />
         </div>
         <h2>{business.name}</h2>
         <div className="businessInformation">
           <div className="address">
             <p>{business.address}</p>
             <p>{business.city}</p>
             <p>
               {business.state} {business.zipCode}
             </p>
           </div>
           <div className="reviews">
             <h3>{business.category}</h3>
             <p>{business.rating} stars</p>
             <p>{business.reviewCount} reviews</p>
           </div>
         </div>
       </div>
     );
   }
   ```

### Part 3: Adding State and Event Handlers

#### Step 1: Add State to the SearchBar Component

1. **Update `SearchBar.js` to manage state:**

   ```jsx
   import React, { useState } from "react";
   import "./SearchBar.css";

   const sortByOptions = {
     "Best Match": "best_match",
     "Highest Rated": "rating",
     "Most Reviewed": "review_count",
   };

   export default function SearchBar({ onQuery }) {
     const [term, setTerm] = useState("");
     const [location, setLocation] = useState;

     const [sortBy, setSortBy] = useState("best_match");

     function handleSearch(e) {
       e.preventDefault();
       onQuery({ term, location, sortBy });
     }

     function renderSortByOptions() {
       return Object.keys(sortByOptions).map((sortByOption) => {
         const sortByOptionValue = sortByOptions[sortByOption];
         return (
           <li
             key={sortByOptionValue}
             onClick={() => setSortBy(sortByOptionValue)}
             className={sortByOption === sortBy ? "selected" : ""}
           >
             {sortByOption}
           </li>
         );
       });
     }

     return (
       <div className="searchBar">
         <div className="searchBarSortOptions">
           <ul>{renderSortByOptions()}</ul>
         </div>
         <div className="searchBarFields">
           <input
             placeholder="Search Businesses"
             value={term}
             onChange={(e) => setTerm(e.target.value)}
           />
           <input
             placeholder="Where?"
             value={location}
             onChange={(e) => setLocation(e.target.value)}
           />
         </div>
         <div className="searchBarSubmit">
           <button onClick={handleSearch}>Let's Go</button>
         </div>
       </div>
     );
   }
   ```

### Part 4: Yelp API Integration

#### Step 1: Update App Component

1. **Modify `App.js` to include a mock handleQuery function:**

   ```jsx
   import React, { useState } from "react";
   import BusinessList from "./BusinessList";
   import SearchBar from "./SearchBar";
   import "./App.css";

   const business = {
     id: 1,
     imageSrc:
       "https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
     name: "MarginOtto Pizzeria",
     address: "1010 Paddington Way",
     city: "Flavortown",
     state: "NY",
     zipCode: "10101",
     category: "Italian",
     rating: 4.5,
     reviewCount: 90,
   };

   const businesses = [business, business, business];

   export default function App() {
     const [businesses, setBusinesses] = useState([]);

     function handleQuery(query) {
       // Placeholder for handling query
       console.log(query);
       setBusinesses([business, business, business]);
     }

     return (
       <div className="App">
         <h1>ravenous</h1>
         <SearchBar onQuery={handleQuery} />
         <BusinessList businesses={businesses} />
       </div>
     );
   }
   ```

#### Step 2: Implement Business Search Logic

1.  Create a `Yelp` module to handle the Yelp API calls.

2.  Add a `Yelp.js` file in the `src` directory and define the `Yelp` object:

    ```jsx
    // src/Yelp.js
    const apiKye = "YOUR_YELP_API_KEY";

    export const Yelp = {
      search(term, location, sortBy) {
        const corsProxy = "https://cors-anywhere.herokuapp.com/";
        const url = `${corsProxy}https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;

        return fetch(url, {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Failed to fetch");
            }
            return response.json();
          })
          .then((jsonResponse) => {
            if (jsonResponse.businesses) {
              return jsonResponse.businesses.map((business) => ({
                id: business.id,
                imageSrc: business.image_url,
                name: business.name,
                address: business.location.address1,
                city: business.location.city,
                state: business.location.state,
                zipCode: business.location.zip_code,
                category: business.categories[0].title,
                rating: business.rating,
                reviewCount: business.review_count,
              }));
            }
          });
      },
    };
    ```

         Bypass CORS Restrictions

         If your fetch() method works as intended, you can skip this step. If you are seeing errors with your fetch() method, it may not be working properly due to CORS restrictions.

         You can bypass this restriction with an API called [CORS Anywhere](https://cors-anywhere.herokuapp.com/corsdemo). CORS Anywhere will take requests sent to its API endpoint, make them for the requesting app with the proper CORS permissions, and then return the response back to the requesting app.

         In your own browser, visit [https://cors-anywhere.herokuapp.com/corsdemo](https://cors-anywhere.herokuapp.com/corsdemo) and click “Request temporary access to the demo server”

         Back in your code, prepend the URL path you passed to the first argument in fetch() with the following:

         https://cors-anywhere.herokuapp.com/


#### Step 3: Implement useEffect to `App`

1. **Imports and Initial State**

   First, you import necessary modules and components, including React, state hooks (`useState` and `useEffect`), and your custom components (`BusinessList`, `SearchBar`, and `Yelp`).

```javascript
import React, { useEffect, useState } from "react";
import "./App.css";
import BusinessList from "./BusinessList";
import SearchBar from "./SearchBar";
import { Yelp } from "./utils/Yelp";
```

2. **State Management**

   You initialize state variables using the `useState` hook:

   - `businesses`: Holds the array of fetched business data.
   - `isLoading`: Boolean flag to indicate whether data is currently being fetched.
   - `error`: Holds any error message encountered during the fetch.
   - `query`: Holds the search query parameters (`term`, `location`, and `sortBy`).

```javascript
export default function App() {
  const [businesses, setBusinesses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [query, setQuery] = useState([]);
```

3. **Handling Search Query Changes**

   You define a function `handleQuery` to update the `query` state based on user input from the `SearchBar` component.

```javascript
function handleQuery(querys) {
  setQuery(querys);
}
```

4. **Fetching Data with `useEffect`**

   You use the `useEffect` hook to fetch business data from Yelp when the `query` state changes (i.e., when the user enters search criteria). It checks if all required fields (`term`, `location`, `sortBy`) are present in `query`, then performs the data fetch.

```javascript
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
    }

    fetchBusiness();
  },
  [query]
);
```

5. **Rendering Components Based on State**

   In the `return` statement of your `App` component, you render different components based on the state:

   - `SearchBar`: Passes `handleQuery` as a prop to handle user input.
   - `Loader`: Renders a loading message (`Loading...`) when `isLoading` is `true`.
   - `BusinessList`: Renders the list of businesses when data is fetched successfully and `isLoading` is `false`.
   - `ErrorMessage`: Renders an error message (`⛔` followed by the error message) when `error` is not empty.

```javascript
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
```

6. **Helper Components**

   You define two helper components (`Loader` and `ErrorMessage`) to handle loading states and errors respectively.

```javascript
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
```

    Summary

    - **State Management:** Uses `useState` for managing business data, loading state, error state, and search query.
    - **Fetching Data:** Uses `useEffect` to trigger the Yelp API call when the search query (`query`) changes.
    - **Rendering:** Conditionally renders components (`Loader`, `BusinessList`, `ErrorMessage`) based on the state (`isLoading`, `error`).
    - **Event Handling:** Passes down `handleQuery` function to `SearchBar` component to update `query` state based on user input.

    This structure ensures that your app fetches and displays business data from Yelp based on user input and handles loading and error states gracefully. Adjustments can be made based on specific UI/UX requirements or further functionality needed for your Ravenous project.

#### Step 4: Test Your Application

1. Make sure your API key is working and that you can perform searches.
2. Check that the search results are displayed correctly.

#### Step 5: Finalize and Deploy

1. Review your code, clean up any unused files or console logs.
2. Push your final code to GitHub:
   ```sh
   git add .
   git commit -m "Finalize ravenous project"
   git push
   ```
3. Deploy your application using a service like Vercel or Netlify.

This is a simplified guide to get you started with the Ravenous project. For more detailed explanations and advanced features, you can refer to the Codecademy course or official React documentation.

You have successfully set up your `ravenous` project, created and styled static components, and prepared your app for Yelp API integration. Next, you will integrate the Yelp API to fetch real business data.
