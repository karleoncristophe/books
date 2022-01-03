import { Modal, Input } from "antd";

import React, { useState, ChangeEvent } from "react";
import styled from "styled-components";
// import AddBookModal from "./AddBookModal";
import api from "../../service/api";
const CategoryContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 250px;
  width: 100%;
  background: #18df8cd7;
`;

const Carousel = styled.div`
  display: flex;
  width: 100%;
`;

const Card = styled.div`
  width: 150px;
  height: 120px;
`;

const Button = styled.button`
  width: 100%;
  height: 90px;
  background: url("https://cdn-icons.flaticon.com/png/512/5996/premium/5996260.png?token=exp=1640544268~hmac=11f97a9a25263959e88a0f5d314cb92b")
    no-repeat;
  background-position: center;
  background-size: 60%;
`;

const Title = styled.h1``;

const Text = styled.p`
  text-align: center;
`;

interface Books {
  _id: number;
  author: string;
  bookname: string;
  category: string;
}

const Category: React.FC = () => {
  const [editModal, setEditModal] = useState(false);
  // eslint-disable-next-line
  const [books, setBooks] = useState<Books[]>();
  const [bookname, setBookname] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");

  const openModalEditVisible = () => {
    setEditModal(true);
  };

  const closeModal = () => {
    setBookname("");
    setAuthor("");
    setCategory("");
    setEditModal(false);
  };

  const handleAddItem = async () => {
    const body = {
      bookname: bookname,
      author: author,
      category: category,
    };

    try {
      await api.post("/createBooks", body);
      const { data } = await api.get("/books");
      setBooks(data);
    } catch (error) {
      console.log(error);
    }
    setBookname("");
    setAuthor("");
    setCategory("");
    closeModal();
  };

  return (
    <CategoryContent>
      <Title>Select from category</Title>
      <Carousel>
        <Card>
          <Button onClick={openModalEditVisible} />
          <Text>Add Book</Text>
        </Card>
        <Modal
          title={`Add your book to read`}
          centered
          visible={editModal}
          okText="Confirm"
          onOk={handleAddItem}
          onCancel={closeModal}
        >
          <div>
            <span>Book Name:</span>
            <Input
              value={bookname}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setBookname(e.target.value)
              }
            />

            <span>Author:</span>
            <Input
              value={author}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setAuthor(e.target.value)
              }
            />
            <span>Category:</span>
            <Input
              value={category}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setCategory(e.target.value)
              }
            />
          </div>
        </Modal>
        {/* <Card>
       
        </Card> */}
      </Carousel>
    </CategoryContent>
  );
};

export default Category;
