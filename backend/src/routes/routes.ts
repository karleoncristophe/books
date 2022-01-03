import { Router } from 'express';
import BOOKS from '../models/Books';
const routes = Router();

routes.get('/books', async (req, res) => {
  const books = await BOOKS.find().sort({ createdAt: 1 });
  return res.status(200).send(books);
});

routes.post('/createBooks', async (req, res) => {
  const { author, bookname, category } = req.body;

  const objects = {
    author,
    bookname,
    category,
  };

  try {
    const books = await BOOKS.create(objects);

    return res.status(200).send(books);
  } catch (e) {
    return res.status(400).send({
      error: 'Error creating list.',
    });
  }
});

routes.put('/updateBooks/:id', async (req, res) => {
  const { id } = req.params;
  const { author, bookname, category } = req.body;
  const objects = { author: author, bookname: bookname, category: category };

  try {
    const updateData = await BOOKS.findOneAndUpdate(
      {
        _id: id,
      },
      objects,
      { new: true }
    );

    res.status(200).send(updateData);
  } catch (error) {
    res.status(403).send({
      error: 'Error while updating.',
    });
  }
});

routes.delete('/deleteBooks/:id', async (req, res) => {
  const { id } = req.params;

  const books: any = await BOOKS.findById({ _id: id });

  await books.remove();

  return res.status(200).send({ message: 'Deleted item.' });
});

export default routes;
