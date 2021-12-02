import React, { useState, useEffect } from "react";
import styled from "styled-components";

import * as colors from "../../colors";
import SearchIcon from "../../images/search-icon-yellow.png";
import CalendarIcon from "../../images/year-icon.png";
import { movies } from "../../fetcher";
// import axios from "axios";

const SearchBar = ({ setAllMovies }) => {
  const searchURL =
    "https://api.themoviedb.org/3/search/movie?api_key=2e94837f1fc6f95b4f41a102b88e01c7&language=en-US&page=1$include_adult=false&query=";

  const [term, setTerm] = useState("Bad");

  useEffect(() => {
    // const search = async () => {
    //   const { data } = await axios.get(searchURL + term);
    //   setAllMovies(data.results);
    // };
    // search();
    const search = async () => {
      const { data } = await movies.get("/search/movie", {
        params: {
          query: term,
        },
      });
      setAllMovies(data.results);
    };
    search();
  }, [term]);

  return (
    <input
      placeholder="Bad"
      value={term}
      onChange={(e) => setTerm(e.target.value)}
      onClick={() => setTerm("")}
    ></input>
  );
};

export default SearchBar;
