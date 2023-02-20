import React from "react";
import { useGlobalContext1 } from "./context";
const SearchForm = () => {
  const { query, setQuery, error } = useGlobalContext1();
  return (
    <form className="search-form" onSubmit={(e) => e.preventDefault()}>
      <h3>SEARCH MOVIES</h3>
      <p>Type your movies here..</p>
      <input
        type="text "
        className="form-input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {error.show && <div className="error">{error.msg}</div>}
    </form>
  );
};

export default SearchForm;
