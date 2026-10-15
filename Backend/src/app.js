const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const authRouter = require("./routes/auth.route");
const userRouter = require("./routes/user.route");
const messageRouter = require("./routes/message.route");

const app = express();



// Allowed frontend origins
const allowedOrigins = [
    "http://localhost:5173",
    process.env.CLIENT_URL
].filter(Boolean);

// Express CORS configuration
app.use(cors({
    origin: allowedOrigins,
    credentials: true
}));


// Middleware
app.use(express.json());
app.use(cookieParser());


// Routes
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/messages", messageRouter);



module.exports = app;
