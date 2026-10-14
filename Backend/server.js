require("dotenv").config();

const http = require("http");
const { Server } = require("socket.io");
const app = require("./src/app");
const connectToDB = require("./src/config/database");
const chatSocket =require("./src/socket/chat.socket");
const callSocket =require("./src/socket/call.socket");


connectToDB();


const server = http.createServer(app);


const allowedOrigins = [
    "http://localhost:5173",
    process.env.CLIENT_URL
].filter(Boolean);

const io = new Server(server, {
    cors: {
        origin: allowedOrigins,
        credentials: true
    }
});


app.set("io", io);


// Start Chat Socket and call socket
chatSocket(io);
callSocket(io);


const PORT = process.env.PORT || 3000;

server.listen(PORT, "0.0.0.0", () => {});
