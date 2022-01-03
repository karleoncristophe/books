import { useContext } from "react";
import styled from "styled-components";
import { BooksContext } from "../context/BooksContext";

const Container = styled.footer`
  display: flex;
  width: 100%;
  overflow: hidden;
  flex: 1;
`;

const Carousel = styled.div`
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  align-items: center;

  ::-webkit-scrollbar {
    height: 10px;
    margin-top: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: #ffffff;
    border-radius: 0.625rem;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  width: 200px;
  border-radius: 10px;
  margin: 0px 10px 0px 10px;
  background: red;
`;

const Picture = styled.picture`
  height: 210px;
  width: 200px;
`;

const Image = styled.img`
  height: 100%;
  border-radius: 10px 10px 0px 0px;
  width: 100%;
  background-size: cover;
`;

const Section = styled.section`
  margin: 0px 3px 0px 3px;
`;

const Title = styled.h1`
  font-size: 1.2rem;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 600;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 190px;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  font-family: Arial, Helvetica, sans-serif;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 190px;
`;

const Footer = () => {
  const { books } = useContext(BooksContext);

  const image =
    "https://images-na.ssl-images-amazon.com/images/I/91Pb+avzyDL.jpg";
  return (
    <Container>
      <Carousel>
        {books?.map((item, key) => (
          <Card key={key}>
            <Picture>
              <Image src={image} />
            </Picture>
            <Section>
              <Title>{item.bookname}</Title>
              <Subtitle>{item.author}</Subtitle>
            </Section>
          </Card>
        ))}
      </Carousel>
    </Container>
  );
};
export default Footer;
