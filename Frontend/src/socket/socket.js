import { io } from "socket.io-client";

const connectSocket = (userId) => {

    const socket = io( import.meta.env.VITE_API_URL || "http://localhost:3000", {
        query: {
            userId: userId
        }
    });

    socket.on("connect", () => {});

    socket.on("disconnect", () => {});

    return socket;
};

export  {connectSocket};