import React from "react";
import styled from "styled-components";

import Checkbox from "../checkbox";

export default class ExpandableFilter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      genreFiltersShown: true,
      ratingFiltersShown: false,
      languageFiltersShown: false,
    };
  }

  toggleGenreFilters = () => {
    this.setState({ genreFiltersShown: !this.state.genreFiltersShown });
  };

  toggleRatingFilters = () => {
    this.setState({ ratingFiltersShown: !this.state.ratingFiltersShown });
  };

  toggleLanguageFilters = () => {
    this.setState({ languageFiltersShown: !this.state.languageFiltersShown });
  };

  render() {
    const { genres, languages, ratings } = this.props;
    return (
      <Checkbox
        genres={genres}
        languages={languages}
        ratings={ratings}
        toggleGenreFilters={this.toggleGenreFilters}
        toggleRatingFilters={this.toggleRatingFilters}
        toggleLanguageFilters={this.toggleLanguageFilters}
        genreFiltersShown={this.state.genreFiltersShown}
        ratingFiltersShown={this.state.ratingFiltersShown}
        languageFiltersShown={this.state.languageFiltersShown}
      />
    );
  }
}
