import React, { useState, useEffect } from "react";
import styled from "styled-components";

import * as colors from "../../colors";
import SearchIcon from "../../images/search-icon-yellow.png";
import CalendarIcon from "../../images/year-icon.png";
import { movies } from "../../fetcher";

const SearchBar = ({ setAllMovies }) => {
  const [term, setTerm] = useState("Bad");
  const [year, setYear] = useState("");

  useEffect(() => {
    if (term) {
      const search = async () => {
        const { data } = await movies.get("/search/movie", {
          params: {
            query: term,
            year: year,
          },
        });
        setAllMovies(data.results);
      };
      search();
    }
  }, [term, year]);

  return (
    <div>
      <img
        src={SearchIcon}
        style={{ verticalAlign: "middle", paddingRight: "10px" }}
      />
      <input
        placeholder="Bad"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        onClick={() => setTerm("")}
        style={{ border: "none", color: colors.primaryColor, fontWeight: 'bold' }}
      ></input>
      <hr style={{ width: "100%", textAlign: "left", marginLeft: "0" }}></hr>
      <br />
      <img
        src={CalendarIcon}
        style={{ verticalAlign: "middle", paddingRight: "10px" }}
      />
      <input
        placeholder="Year of release"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        onClick={() => setYear("")}
        style={{ border: "none", color: colors.primaryColor }}
      ></input>
      <hr style={{ width: "100%", textAlign: "left", marginLeft: "0" }}></hr>
    </div>
  );
};

export default SearchBar;
