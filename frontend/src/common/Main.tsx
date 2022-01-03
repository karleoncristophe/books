import React from "react";
import styled from "styled-components";
import Category from "./mainComponents/Category";
import Search from "./mainComponents/Search";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const Main = () => {
  return (
    <Container>
      <Search />
      <Category />
    </Container>
  );
};
export default Main;
