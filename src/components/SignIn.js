import React, { useState } from "react";
import styled from "styled-components";
import db, { auth } from "../firebase";
import { useHistory } from "react-router-dom";
import {
  selectUserEmail,
  selectUserName,
  selectUserPhoto,
  selectUserStatus,
  setSignOut,
  setUserLogin,
} from "../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

function SignIn() {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  const Email = useSelector(selectUserEmail);
  const status = useSelector(selectUserStatus);
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        // it successfully created a new user with email and password
        if (result) {
          let user = result.user;
          console.log(user);
          dispatch(
            setUserLogin({
              name: user.displayName,
              email: user.email,
              photo: user.photoURL,
              isLoggedIn: true,
            })
          );
          history.push("/home");
        }
      })
      .catch((error) => alert(error.message));
  };
  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email,
        
         password)
      .then((result) => {
        if (result) {
          let user = result.user;
          console.log(user);
          dispatch(
            setUserLogin({
              name: user.displayName,
              email: user.email,
              photo: user.photoURL,
              isLoggedIn: true,
            })
          );
          history.push("/home");
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <Container>
      <h2>Sign In</h2>
      <SignField>
        <h4>Enter Your Email</h4>
        <input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
        <h4>Enter Your Password</h4>
        <input
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
      </SignField>
      <SubmitBtn onClick={signIn}>Sign-In</SubmitBtn>
      <CreateBtn onClick={register}>Create new Account</CreateBtn>
      <Para>
        <p>Create a new account here</p>
      </Para>
    </Container>
  );
}

export default SignIn;

const Container = styled.div`
  background: #080814;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
  border-radius: 5px;
  border: 2px solid silver;
  width: 300px;
  height: 100%;
  z-index: 16;
  input {
    border-color: silver;
    border-radius: 5px;
    color: black;
    font-weight: 600;
  }
  h4 {
    margin-bottom: 4px;
  }
`;
const SignField = styled.div`
  margin-bottom: 50px;
`;
const SubmitBtn = styled.button`
  margin-bottom: 20px;
  margin-top: -10px;
  background: silver;
  width: 70%;
  height: 20px;
  font-weight: 600;
  border-radius: 4px;
  border: 1px solid #111;
  &:hover {
    background: rgba(6, 7, 76, 0.91);
    cursor: pointer;
    color: silver;
    border-color: transparent;
    border: 2px solid silver;
  }
`;
const CreateBtn = styled(SubmitBtn)`
  width: 70%;
  margin-bottom: 5px;
`;
const Para = styled.div`
  color: white;
  font-weight: 600;
  font-size: 10px;
  margin-bottom: 50px;
`;
