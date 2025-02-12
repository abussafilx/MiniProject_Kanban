import { useState } from "react";
import "../assets/styles/SearchBar.css";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search tasks..."
      value={query}
      onChange={handleChange}
      className="search-input"
    />
  );
}

export default SearchBar;
