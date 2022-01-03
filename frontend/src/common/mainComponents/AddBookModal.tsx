import { Input } from "antd";
import styled from "styled-components";

const Container = styled.div``;

const AddBookModal = () => {
  return (
    <Container>
      <span>Book Name:</span>
      <Input />
      <span>Author:</span>
      <Input />
      <span>Category:</span>
      <Input />
    </Container>
  );
};
export default AddBookModal;
