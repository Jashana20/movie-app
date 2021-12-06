import React from "react";
import styled, { css } from "styled-components";
import * as colors from "../../colors";

export default class MovieItem extends React.Component {
  render() {
    const { movie, genres } = this.props;
    const imageURL = "https://image.tmdb.org/t/p/w500";

    // movie.genre_ids.map((id) => {
    //   const genreFilter = genres.filter((genre) => genre.id === id)
    //   console.log(genreFilter);
    // })

    return (
      // Complete the MovieItem component
      <MovieItemWrapper>
        <LeftCont>
          {movie.poster_path ? (
            <img
              alt={movie.overview}
              src={imageURL + movie.poster_path}
              style={{ width: "150px", height: "230px" }}
            />
          ) : (
            <h3>No poster available</h3>
          )}
        </LeftCont>
        <RightCont>
          <div style={{
              position: "absolute",
              left: "630px",
              top: "20px",
              backgroundColor: colors.primaryColor,
              color: "white",
              fontWeight: "bold",
              borderRadius: "5px",
              margin: "5px",
              paddingTop: "5px",
              paddingRight: "10px",
              paddingBottom: "5px",
              paddingLeft: "10px",
              display: "inline-block",
            }}>{movie.vote_average}</div>
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
          <div style={{ color: colors.primaryColor }}>{movie.release_date}</div>
        </RightCont>
      </MovieItemWrapper>
    );
  }
}

const MovieItemWrapper = styled.div`
  position: relative;
  background-color: white;
  border-radius: 3px;
  width: 700px;
  left: 25px;
  float: left;
  top: -645px;
  margin-bottom: 15px;
`;

const LeftCont = styled.div`
  display: flex;
  float: left;
  padding: 20px;
`;

const RightCont = styled.div`
  display: block;
  padding: 2px 25px 20px 5px;
`;

// const RatingCont = styled.div`
//   position: 'absolute', 
//   left: '630px', 
//   top: '20px', 
//   backgroundColor: colors.primaryColor, 
//   color: 'white', 
//   fontWeight: 'bold', 
//   borderRadius: '5px', 
//   margin: '5px', paddingTop: '5px', 
//   paddingRight: '10px', 
//   paddingBottom: '5px', 
//   paddingLeft: '10px', 
//   display: 'inline-block', 
// `;
