import React from "react";

function Search({setInput, input}) {
  function handleChange(e) {
    setInput(e.target.value)
  }
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input value={input} onChange={handleChange} handleclassName="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
