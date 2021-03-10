const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});

app.use(express.static(__dirname + "/public"));

// routes

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// socket
io.on("connection", (socket) => {
  console.log("Connected...");
  socket.on("message", (msg) => socket.broadcast.emit("message", msg));
});
