import React, { useState } from 'react';
import "./Search.css"

const Search = ({ searchText, onChange, suggestions }) => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  const handleInputChange = (e) => {
    const newSearchText = e.target.value;
    onChange(newSearchText);
    setShowSuggestions(true);

   
    const filtered = suggestions.filter(suggestion =>
      suggestion.toLowerCase().includes(newSearchText.toLowerCase())
    );
    setFilteredSuggestions(filtered);
  };

  const handleSuggestionClick = (suggestion) => {
    onChange(suggestion);
    setShowSuggestions(false);
    setShowSuggestions(suggestion);
    setShowSuggestions()
    console.log("search", suggestion);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search"
        value={searchText}
        onChange={handleInputChange}
        onBlur={() => setShowSuggestions(false)}
      />
      {showSuggestions && filteredSuggestions.length > 0 && (
        <ul className="suggestions">
          {filteredSuggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
