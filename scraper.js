const { DOMAIN } = require("./config");

const io = require("socket.io-client");
const socket = io(DOMAIN);

setInterval(() => socket.emit("message", "Message sent"), 300);
