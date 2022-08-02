import React from "react";
import styled from "styled-components";
import { selectMovies } from "../features/movies/movieSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Movies() {
  const movies = useSelector(selectMovies);
  return (
    <Container>
      <h4>Recommended Movies</h4>
      <Content>
        {movies &&
          movies.map((movie, key) => (
            <Wrap key={key}>
            
              <Link
                to={{
                  pathname: "/detail/"+movie.id
                }}
              >
                <img src={movie.cardImage} alt={movie.name} />
              </Link>
            </Wrap>
          ))}
      </Content>
    </Container>
  );
}

export default Movies;
const Container = styled.div`
  margin-top: 30px;
`;
const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(8, minmax(0, 1fr));
`;
const Wrap = styled.div`
  border-radius: 10px;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0, 0, 0) 0px 20px 30px -10px;
  transition: all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    box-shadow: rgb(0, 0, 0) 0px 20px 30px -10px;
  }
`;
