import dotenv from 'dotenv';
dotenv.config();
import express from 'express';

const app = express();
const port = 8000 || process.env.PORT;

app.get('/', (req, res) => {
  res.json({ message: 'Hello from EC2 Server' });
});

app.get('/health', (req, res) => {
  res.json({ message: 'Server is Healthy' });
});

app.listen(port, () => {
  console.log(`Server is Listening at Port: ${port}`);
});
