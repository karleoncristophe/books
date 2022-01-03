import React from "react";
import styled from "styled-components";
import Footer from "../common/Footer";
import Header from "../common/Header";
import Main from "../common/Main";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
const HomePage = () => {
  return (
    <Container>
      <Header />
      <Main />
      <Footer />
    </Container>
  );
};
export default HomePage;
