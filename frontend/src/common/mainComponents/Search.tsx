import React from "react";
import styled from "styled-components";

const SearchContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 250px;
  width: 100%;
  background: #6ee71dd8;
`;

const Article = styled.section``;

const Title = styled.h1``;

const Input = styled.input``;

const Button = styled.button``;

const Picture = styled.picture`
  background: red;
  height: 100%;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
`;

const Search = () => {
  const image = "https://cdn-icons-png.flaticon.com/512/1995/1995539.png";
  return (
    <SearchContent>
      <Article>
        <Title>Once you learn to reas, you will be forever free</Title>
        <Input placeholder="Search a book on author or genre" />
        <Button>Search</Button>
      </Article>
      <Picture>
        <Image src={image} />
      </Picture>
    </SearchContent>
  );
};

export default Search;
