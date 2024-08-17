import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchResult from "../SearchResults/SearchResults";

function Search({ handleSearch, error, setError }) {

  const [input, setInput] = useState("")
  const navigate = useNavigate()

  function handleInput(e) {
    setInput(e.target.value)
    if (e.target.value.trim() === "") {
      handleSearch("")
      navigate("/")
      console.log(SearchResult)
      setError("")
    }
  }

  return (
    <>

      <div>
        <div class="search" >
          <input class="search-input" type="text"
            placeholder='search by name'
            value={input}
            onChange={handleInput}
          />

          <button onClick={() => handleSearch(input)}><i class="fa-solid fa-magnifying-glass"></i></button>

        </div>
        <p>{error}</p>
      </div>

    </>


  )
}
export default Search