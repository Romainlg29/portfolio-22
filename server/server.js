import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();

app.use(cors());
app.options("*", cors());
app.use(express.json());

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "websocket"],
  },
  maxHttpBufferSize: 1e8,
});

app.post("/api/isAlive", async (req, res) => res.send(true));

httpServer.listen(5000);