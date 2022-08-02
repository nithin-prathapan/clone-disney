import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <CTA>
        <CTALogoOne src="/images/cta-logo-one.svg" />
        <SignUp>GET ALL THERE</SignUp>
        <Description>
          Disney+ Premier Access is a premium release strategy for the global
          on-demand Internet streaming media provider, owned and operated by
          Disney
        </Description>
        <CTALogoTwo src="/images/cta-logo-two.png" />
      </CTA>
    </Container>
  );
}

export default Login;
const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  justify-content: center;
  

  &:before {
      opacity:0.7;
    background-position: top;
    background-size: cover;
    background-repeat: no repeat;
    position: absolute;
    top: 0;
    bottom: 0;
    content: "";
    left: 0;
    right: 0;
    background-image: url("/images/login-background.jpg");
    z-index: -1;
  }
`;
const CTA = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 90%;
  display: flex;
  flex-direction: column;
  margin-top:100px;

`;
const CTALogoOne = styled.img``;
const CTALogoTwo = styled.img``;
const SignUp = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  padding: 17px 0;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-bottom: 12px;
  &:hover {
    background-color: #0483ee;
  }
  
`;
const Description=styled.p`
font-size:11px;
letter-spacing:1.5px;
text-align:center;
line-height:1.5;

`
