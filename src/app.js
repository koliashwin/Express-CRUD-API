import express from 'express';
import itemRoutes from './routes/itemRoutes.js';

const app = express();

app.use(express.json());
app.use('/items', itemRoutes);

export default app;