import express from 'express';
import routes from './routes/routes';
import cors from 'cors';
const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}/`);
});
