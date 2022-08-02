import styled from "styled-components";
import { useParams } from "react-router-dom";
import "./Detail.css";
import { useEffect, useState } from "react";
import db from "../firebase";
function Detail() {
  const { id } = useParams();
  console.log(id);
  const [movies, setMovies] = useState({});

  useEffect(() => {
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setMovies(doc.data());
        } else {
          console.log("no such document in firebase 🔥");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
    db.collection("orginals")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setMovies(doc.data());
        } else {
          console.log("no such document in firebase 🔥");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, [id]);
  return (
    <Container>
      {movies && (
        <>
          <Backgrund>
            <img src={movies.bImg} />
          </Backgrund>
          <ImageTitle>
            <img
              src="https://www.pikpng.com/pngl/b/482-4820066_disney-plus-logo-png-clipart.png"
              alt=""
            />
          </ImageTitle>
          <Controls>
            <PlayButton>
              <img src="/images/play-icon-black.png" alt="" />
              <span>Play</span>
            </PlayButton>
            <TrailerButton>
              <img src="/images/play-icon-white.png" alt="" />
              <span>Trailer</span>
            </TrailerButton>
            <AddButton>
              <span>+</span>
            </AddButton>
            <GroupWatchButton>
              <img src="/images/group-icon.png" alt="" />
            </GroupWatchButton>
          </Controls>
          <SubTitle>{movies.sub}</SubTitle>
          <Description>{movies.desc}</Description>
        </>
      )}
    </Container>
  );
}

export default Detail;
const Container = styled.div`
  background:linear-gradient(
    rgba(0, 0, 0, 0.7), 
    rgba(0, 0, 0, 0.7)
  );
  min-height: calc(100vh);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-y:hidden;
  &:before {
    background-color:#212161;
      no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;
const Backgrund = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;

  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
  img {
    margin-left: auto;
    margin-right: auto;
    padding: 30px;
    width: 100%;
    height: 60%;
    object-fit: cover;
    border: 2px solid silver;
    border-radius: 5px;

    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
  }
`;
const ImageTitle = styled.div`
  margin-top: 60px;
  margin-bottom: 5px;
  height: 30vh;
  min-height: 170px;
  min-width: 200px;
  width: 30vw;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const Controls = styled.div`
  display: flex;
  align-items: center;
`;
const PlayButton = styled.button`
  border-radius: 4px;
  height: 50px;
  background-color: rgb(249, 249, 249);
  margin-right: 22px;
  letter-spacing: 1.8px;
  border: none;
  cursor: pointer;
  padding: 0 24px;
  font-size: 15px;
  display: flex;
  text-transform: upperCase;
  align-items: center;

  &:hover {
    background: rgb(198, 198, 198);
  }
`;

const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  text-transform: upperCase;
`;
const AddButton = styled.button`
  margin-right: 16px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  span {
    font-size: 30px;
    color: white;
  }
`;
const GroupWatchButton = styled(AddButton)`
  background-color: black;
`;
const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 50px;
  font-weight: 400;
`;
const Description = styled.div`
  line-height: 1.4;
  font-size: 15px;
  margin-top: 16px;
  color: white;
  max-width: 766px;
  font-weight: 600;
`;
