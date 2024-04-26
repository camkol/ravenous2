import "./App.css";
import BusinessList from "./BusinessList";
import SearchBar from "./SearchBar";

function App() {
  return (
    <>
      <header>
        <h1>ravenous</h1>
      </header>
      <main>
        <SearchBar />
        <BusinessList />
      </main>
    </>
  );
}

export default App;
