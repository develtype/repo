import path from 'path';
import compression from 'compression';
import cors from 'cors';
import express from 'express';
import { usersRouter } from './users/users.route';

const app = express();
const buildDir = path.resolve(__dirname, '..', 'dist');
const port = 5000;

app.use(compression());
app.use(cors());
app.use(express.json());
app.use(express.static(buildDir));

app.get('/', (req, res) => {
  res.send('Repo-be is working!!');
});

app.use('/users', usersRouter);

app.listen(port, () => {
  console.log('repo-be is listening on port ' + port);
});
