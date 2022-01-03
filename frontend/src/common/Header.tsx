import React from "react";
import styled from "styled-components";

const Container = styled.header`
  display: flex;
  width: 100%;
  height: 100px;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.img`
  width: 50px;
  height: 50px;
`;

const ButtonContent = styled.div`
  display: flex;
`;

const Register = styled.button`
  width: 140px;
  height: 50px;
`;

const LogIn = styled.button`
  width: 140px;
  height: 50px;
`;

const Header = () => {
  const image =
    "https://cdn-icons.flaticon.com/png/512/1048/premium/1048927.png?token=exp=1640128907~hmac=a4ee8d001709dfce78d06976548e096a";
  return (
    <Container>
      <Logo src={image} />
      <ButtonContent>
        <Register>Register</Register>
        <LogIn>Log In</LogIn>
      </ButtonContent>
    </Container>
  );
};
export default Header;
