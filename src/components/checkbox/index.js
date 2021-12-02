import React from "react";
import styled from "styled-components";

export default class CheckBox extends React.Component {
  // Create a custom checkbox component

  render() {
    const {
      genres,
      ratings,
      languages,
      toggleGenreFilters,
      toggleRatingFilters,
      toggleLanguageFilters,
      genreFiltersShown,
      ratingFiltersShown,
      languageFiltersShown,
    } = this.props;

    return (
      <CheckboxCont>
        <div>
          <i className="window minimize outline icon" />
          <h3 onClick={toggleGenreFilters}>Select genre(s)</h3>
          {genreFiltersShown
            ? genres.map((genre) => {
                return (
                  <div key={genre.id}>
                    <input
                      type="checkbox"
                      id={genre.id}
                      name={genre.name}
                    ></input>
                    <label>{genre.name}</label>
                  </div>
                );
              })
            : null}
        </div>
        <div>
          <h3 onClick={toggleRatingFilters}>Select min. vote</h3>
          {ratingFiltersShown
            ? ratings.map((rating) => {
                return (
                  <div key={rating.id}>
                    <input
                      type="checkbox"
                      id={rating.id}
                      name={rating.name}
                    ></input>
                    <label>{rating.name}</label>
                  </div>
                );
              })
            : null}
        </div>
        <div>
          <h3 onClick={toggleLanguageFilters}>Select language</h3>
          {languageFiltersShown
            ? languages.map((language) => {
                return (
                  <div key={language.id}>
                    <input
                      type="checkbox"
                      id={language.id}
                      name={language.name}
                    ></input>
                    <label>{language.name}</label>
                  </div>
                );
              })
            : null}
        </div>
      </CheckboxCont>
    );
  }
}

const CheckboxCont = styled.div`
  position: relative;
`;
