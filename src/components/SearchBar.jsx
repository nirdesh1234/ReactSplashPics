import React, { useState } from "react";
import "./searchBar.css";
function SearchBar({ onSubmit }) {
  const [text, setText] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(text);
  };
  const handleChange = (event) => {
    setText(event.target.value);
  };
  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <label>Enter Search Term</label>
        <input value={text} onChange={handleChange} />
      </form>
    </div>
  );
}
export default SearchBar;
