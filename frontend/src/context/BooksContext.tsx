import React, { createContext, ReactNode, useEffect, useState } from "react";
import api from "../service/api";

interface Book {
  _id: number;
  author: string;
  bookname: string;
  category: string;
}

type BooksContextValue = {
  books: Book[] | undefined;
  setBooks: (data: Book[]) => void;
};

interface Props {
  children: ReactNode;
}

export const BooksContext = createContext({} as BooksContextValue);

const BooksProvider = (props: Props) => {
  const [books, setBooks] = useState<Book[] | undefined>();

  useEffect(() => {
    const getData = async () => {
      const { data } = await api.get("books");
      setBooks(data);
    };
    getData();
  }, []);

  return (
    <BooksContext.Provider value={{ books, setBooks }}>
      {props.children}
    </BooksContext.Provider>
  );
};

export default BooksProvider;
