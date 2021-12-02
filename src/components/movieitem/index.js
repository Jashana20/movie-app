import React from "react";
import styled from "styled-components";

export default class MovieItem extends React.Component {
  render() {
    const { movie } = this.props;
    const imageURL = "https://image.tmdb.org/t/p/w500";

    return (
      // Complete the MovieItem component
      <MovieItemWrapper>
        <LeftCont>
          <img src={imageURL + movie.poster_path} />
        </LeftCont>
        <RightCont>
          {movie.title}
          {movie.vote_average}
          {movie.overview}
          {movie.release_date}
        </RightCont>
      </MovieItemWrapper>
    );
  }
}

const MovieItemWrapper = styled.div`
  position: relative;
  background-color: white;
  border-radius: 3px;
`;

const LeftCont = styled.div`
  display: inline-block;
`;

const RightCont = styled.div`
  display: inline-block;
`;
