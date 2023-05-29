import express from "express";
import "dotenv/config.js";
import './config/database.js';

const server  = express();
const PORT = process.env.PORT || 8080;
const ready = () => console.log("ready on: " + PORT);

//Middlewares
server.use(express.json());
server.use(express.urlencoded({extended: false}));

//router+server
server.listen(PORT, ready);
console.log(process.env.NODE_ENV);
