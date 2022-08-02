import React from "react";
import styled from "styled-components";
import { selectOrginals } from "../features/movies/movieSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Orginals() {
    const orginals = useSelector(selectOrginals);
  return (
    <Container>
      <h4>Orginals</h4>
      <Content>
        {orginals &&
          orginals.map((orginal, key) => (
            <Wrap key={key}>
              <Link
                to={{
                  pathname: "/detail/"+orginal.id
                }}
              >
                <img src={orginal.cardImage} alt={orginal.name} />
              </Link>
            </Wrap>
          ))}
      </Content>
    </Container>
  )
}

export default Orginals

const Container=styled.div`
margin-top:30px;


`
const Wrap=styled.div`
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
`
const Content=styled.div`
display: grid;
grid-gap: 25px;
grid-template-columns: repeat(8, minmax(0, 1fr));

`