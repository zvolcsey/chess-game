import express from 'express';
import { createServer } from 'node:http';
import 'dotenv/config';
import { Server } from 'socket.io';

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173',
  }
});

io.on('connection', (socket) => {
  console.log('a user connected');
});

server.listen(process.env.API_PORT, () => {
  console.log(`Api running on port ${process.env.API_PORT}`);
});