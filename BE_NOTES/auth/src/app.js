import express from 'express';
import morgan from 'morgan';
import appRouter from './routes/user.route.js';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use('/api/auth', appRouter);

app.get('/api/auth', (req, res) => {
  res.status(200).json({ message: 'Authentication route is working!' });
});

export default app;