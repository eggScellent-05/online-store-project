import express from 'express';
import cors from 'cors';
import { errorHandler } from './middleware/errorHandler';
import routes from './routes';

const app = express();
app.use(cors());
app.use(express.json());

app.use(routes); // already prefixed with /api

app.use(errorHandler);
export default app;