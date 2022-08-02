import React from "react";
import {
  selectUserName,
  selectUserPhoto,
  selectUserStatus,
  setSignOut,
  setUserLogin,
} from "../features/user/userSlice";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Login from "./Login";
import { auth, provider } from "../firebase";
import { useHistory } from "react-router-dom";

function Header() {
  const dispatch = useDispatch();
  const userPhoto = useSelector(selectUserPhoto);
  const history = useHistory();
  const isLoggedIn = useSelector(selectUserStatus);
  console.log(isLoggedIn);
  const signIn = () => {
    history.push("/signup");
  };

  const logout = () => {
    const confirmBox=window.confirm('do you want to log out')
    if(confirmBox===true){
      auth.signOut().then(()=>{
        dispatch(setSignOut())
      })
      history.push('/')
    }
  };
  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      {!isLoggedIn ? (
        <LoginContainer>
          <Log onClick={signIn}>Login</Log>
        </LoginContainer>
      ) : (
        <>
          <NavMenu>
            <a href="">
              <img src="/images/home-icon.svg" alt="" />
              <span>HOME</span>
            </a>
            <a href="">
              <img src="/images/search-icon.svg" alt="" />
              <span>SEARCH</span>
            </a>
            <a href="">
              <img src="/images/watchlist-icon.svg" alt="" />
              <span>WATCHLIST</span>
            </a>
            <a href="">
              <img src="/images/original-icon.svg" alt="" />
              <span>ORIGINALS</span>
            </a>
            <a href="" id="rmv">
              <img src="/images/movie-icon.svg" alt="" />
              <span>MOVIES</span>
            </a>
            <a href="">
              <img src="/images/series-icon.svg" alt="" />
              <span>SERIES</span>
            </a>
          </NavMenu>

          <UserImage
            onClick={logout}
            src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
          />
        </>
      )}
    </Nav>
  );
}
export default Header;

const Nav = styled.nav`
  height: 70px;
  background-color: #111;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-y: hidden
  overflow-x:hidden;
  
`;
const Logo = styled.img`
  width: 80px;
`;
const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;
  a {
    display: flex;
    align-item: center;
    padding: 0 12px;
    img {
      height: 20px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;
      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        right: 0;
        left: 0;
        bottom: -6px;
        opacity: 0;
        transform-orgin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }
    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;
const UserImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`;
const Log = styled.div`
  border: 1px solid #f9f9f9;
  padding: 8px 16px;
  border-radius: 4px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  transition: all 0.2s ease 0s;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;
const LoginContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;
