import mongoose from '../lib/Mongoose';

interface Books {
  author: string;
  bookname: string;
  category: string;
}

const BooksSchema = new mongoose.Schema<Books>(
  {
    author: String,
    bookname: String,
    category: String,
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
  }
);

const BooksModel = mongoose.model<Books>('Books', BooksSchema);
export default BooksModel;
